# Dev Log — Smart Input Tracker
**Date:** May 2026  
**Stack:** React, CSS  
**Status:** Complete (history feature pending)  
**File:** `UserInput.jsx` + `InputStyle.css`

---

## What This Component Does

A smart input tracker that measures typing speed (chars/sec), detects when the user stops typing (idle detection), and will store the last 5 typed inputs as history.

---

## Hooks Used and Why

| Hook | Variable | Reason |
|---|---|---|
| `useState` | `inputText` | User sees every character update — needs re-render |
| `useState` | `isIdle` | Status badge toggles in UI — needs re-render |
| `useState` | `typingSpeed` | Speed display updates — needs re-render |
| `useRef` | `idleTimerRef` | Stores timeout ID — storing in state would cause re-render storm |
| `useRef` | `startTimerRef` | Session start timestamp — internal math only, no UI update needed |
| `useRef` | `lastKeyStrokeRef` | Last keystroke timestamp — internal math only |
| `useEffect` | cleanup | Clears pending timeout on unmount — prevents setState on dead component |

**Core rule learned:** If a value doesn't need to update the UI, it belongs in a ref, not state.

---

## Architecture — What Happens on Each Keystroke

```
User types
    ↓
onChange fires
    ├── Guard: if empty → reset everything, return early
    ├── if isIdle → setIsIdle(false)
    ├── setInputText(value)
    ├── lastKeyStrokeRef.current = Date.now()
    ├── if startTimerRef.current === null → set it to Date.now()
    ├── Calculate speed (if duration > 0.1s) → setTypingSpeed()
    └── clearTimeout old timer → idleTimerRef.current = setTimeout(2000)
                                          ↓
                                    [2s of no typing]
                                          ↓
                                    setIsIdle(true)
                                    startTimerRef.current = null
```

---

## Speed Calculation Logic

```
duration = (lastKeyStrokeRef.current - startTimerRef.current) / 1000
speed    = e.target.value.length / duration
```

- Measured per **session**, not per keystroke
- Session = first char typed → user goes idle
- `startTimerRef` set once on first char, reset to null on idle
- Guard: `if (duration < 0.1) skip` — prevents Infinity on first char

**Why session speed, not per-keystroke:**  
Per-keystroke speed swings wildly (slow thinking vs fast burst). Session average is stable and meaningful, same way MonkeyType measures WPM.

---

## Idle Detection — The Debounce Bomb Pattern

Every keystroke:
1. `clearTimeout(idleTimerRef.current)` — cancel previous timer
2. `idleTimerRef.current = setTimeout(() => setIsIdle(true), 2000)` — start fresh

Visual model:
```
'H' typed → [====2s timer====]
'e' typed →           cancelled → [====2s timer====]
'y' typed →                                cancelled → [====2s timer====]
                                                               ↓ completes
                                                          setIsIdle(true)
```

**Key insight:** `lastKeyStrokeRef` is the endpoint of measurement. The idle timer just signals cleanup — the 2s gap is never included in the speed calc.

---

## Bugs Found and Fixed During Build

### Bug 1 — Timer ID never stored (critical)
```js
// Wrong
clearTimeout(idleTimerRef.current);
setTimeout(() => setIsIdle(true), 2000); // ID lost, can never cancel

// Fixed
clearTimeout(idleTimerRef.current);
idleTimerRef.current = setTimeout(() => setIsIdle(true), 2000);
```

### Bug 2 — Stale state in totalChars (critical)
```js
// Wrong — inputText is previous render's value
const totalChars = inputText.length;

// Fixed — e.target.value is always current
const totalChars = e.target.value.length;
```

### Bug 3 — Guard condition inverted (medium)
```js
// Wrong — calculating inside the danger zone
if (duration < 0.1) { setTypingSpeed(totalChars / duration); }

// Fixed
if (duration > 0.1) { setTypingSpeed(totalChars / duration); }
```

### Bug 4 — isIdle never reset to false (medium)
```js
// Fixed — add at top of handleChange
if (isIdle) setIsIdle(false);
```

### Bug 5 — No useEffect cleanup (minor)
```js
// Fixed
useEffect(() => {
    return () => clearTimeout(idleTimerRef.current);
}, []);
```

### Bug 6 — Empty input not handled (self-caught)
```js
// Added guard at top of handleChange
if (e.target.value === '') {
    setInputText('');
    setTypingSpeed(0);
    startTimerRef.current = null;
    clearTimeout(idleTimerRef.current);
    return;
}
```

---

## CSS Notes

- Used `62.5%` root font-size trick — `1rem = 10px` for easier math
- `width: min(90rem, 90vw)` — prevents viewport overflow on small screens
- `transition` needed on base element, not just hover state, for smooth animations
- `border-color` on an element with no `border` defined does nothing
- `:focus` styles must be explicitly defined — browser default blue outline breaks dark themes
- Impact font bad choice for text input — use monospace for typing interfaces

---

## Final Code (Clean Version)

```jsx
import React, { useEffect, useRef, useState } from 'react';
import './InputStyle.css';

export default function UserInput() {
    const [inputText, setInputText]     = useState('');
    const [isIdle, setIsIdle]           = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(0);
    const idleTimerRef    = useRef(null);
    const startTimerRef   = useRef(null);
    const lastKeyStrokeRef = useRef(null);

    const handleChange = (e) => {
        if (e.target.value === '') {
            setInputText('');
            setTypingSpeed(0);
            startTimerRef.current = null;
            clearTimeout(idleTimerRef.current);
            return;
        }

        if (isIdle) setIsIdle(false);

        setInputText(e.target.value);
        lastKeyStrokeRef.current = Date.now();

        if (startTimerRef.current === null) {
            startTimerRef.current = Date.now();
        }

        const totalChars = e.target.value.length;
        const duration = (lastKeyStrokeRef.current - startTimerRef.current) / 1000;

        if (duration > 0.1) {
            setTypingSpeed(totalChars / duration);
        }

        clearTimeout(idleTimerRef.current);
        idleTimerRef.current = setTimeout(() => {
            setIsIdle(true);
            startTimerRef.current = null;
        }, 2000);
    };

    useEffect(() => {
        return () => clearTimeout(idleTimerRef.current);
    }, []);

    return (
        <div className='UserInputCon'>
            <input
                value={inputText}
                type="text"
                onChange={handleChange}
                placeholder='Enter any value'
            />
            <div className='spanCon'>
                <span>{isIdle ? 'Idle' : 'Typing'}</span>
                <span>{typingSpeed.toFixed(1)}</span>
            </div>
        </div>
    );
}
```

---

## Still To Build

- [ ] History of last 5 inputs — `useState` array, save on idle via `useEffect([isIdle])`
- [ ] Reset `typingSpeed` to 0 on idle (decide: show last speed or reset?)
- [ ] Handle paste event — reset session start on paste
- [ ] Dynamic speed badge color (green/yellow/red based on speed thresholds)

---

## New Concepts Learned This Build

- `useRef` vs `useState` — the re-render decision
- Debounce pattern using clearTimeout + setTimeout on every event
- Stale state trap — always use `e.target.value` not state variable in event handlers
- React 18 batches multiple `setState` calls in the same handler into one render
- `useEffect` cleanup function — runs on unmount, essential for timers
- `min()` CSS function for responsive widths
- Why session speed > per-keystroke speed for UX

---

*Next component to build: DevBoard widget using this tracker as a subcomponent*