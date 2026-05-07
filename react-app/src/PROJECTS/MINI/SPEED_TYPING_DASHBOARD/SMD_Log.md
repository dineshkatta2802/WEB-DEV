<h1>Smart Typing Dashboard </h1>
<i>6th May Thu</i>
<br>
<i>Status - Complete</i>

<h2>What does it do?</h2>
<p>A smart input typing speed tracker which measures the average speed of number of characters typed per sec.</p>

<h2>Features</h2>
<ol>
<li>Idle Detection - <i>Detects when the user is not typing.</i></li>
<li>Speed Calculations - <i>Calculate the number of characters typed per second.</i></li>
<li>Reset Timer - <i>After every 2 seconds of being idle it timer resets.</i></li>
</ol>

<h2>Hooks used and Why?</h2>
<ol>
<li>
UseState - 
<ul>
<li>inputText - <i>User sees every character update - needs re-render</i></li>
<li>isIdle - <i>Status badge toggles in UI — needs re-render</i></li>
<li>typingSpeed - <i>Speed display updates — needs re-render</i></li>
</ul>
</li>

<li>
UseRef - 
<ul>
<li>idleTimerRef - <i>Stores timeout ID — storing in state would cause re-render storm</i></li>
<li>startTimerRef - <i>Session start timestamp — internal math only, no UI update needed</i></li>
<li>lastKeyStrokeRef - <li>Last keystroke timestamp — internal math only</li></li>
</ul>
</li>

<li>
UseEffect - 
<ul>
<li>CleanUp - <i>Clears pending timeout on unmount — prevents setState on dead component</i></li>
</ul>
</li>
</ol>

<h2>Architecture — What Happens on Each Keystroke</h2>
<pre>
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
</pre>

<h2>Idle Detection</h2>
<ol>
Every KeyStroke : 
<li>clearTimeout(idleTimerRef.current) - <i>Cancel previous Timer</i></li>
<li>idleTimerRef.current = setTimeout(() => setIsIdle(true), 2000) - <i>Start fresh</i></li>
</ol>
<pre>
'H' typed → [====2s timer====]
'e' typed →           cancelled → [====2s timer====]
'y' typed →                                cancelled → [====2s timer====]
                                                               ↓ completes
                                                          setIsIdle(true)
</pre>

<h2>Speed Calculations</h2>
<>
