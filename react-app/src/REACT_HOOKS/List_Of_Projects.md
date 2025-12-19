<h1>List of Projects Using React State</h1>

<h2>1. UseState:</h2>
<ol>
  <li>Counter App – Counts the number of times the button is clicked✅</li>
  <li>Simple Todo – A normal todo app✅</li>
  <li>Theme Switcher – Dark/light toggle✅</li>
  <li>Password Strength Checker – Check the quality of the password✅</li>
  <li>Realtime Font Playground – Control font size, spacing, weight, and family for live preview✅</li>
  <li>Gesture Pattern Vault – Record and verify swipe/tap gesture sequences✅</li>

  <li>Speech Note Compressor – Toggle listening state and preview interim transcript</li>
</ol>

<h2>2. UseEffect:</h2>
<ol>
  <li>Auto Image Carousel – Change images automatically using intervals✅</li>
  <li>Scroll Progress Indicator – Track and display scroll percentage✅</li>
  <li>Window Resize Visualizer – React to viewport size changes✅</li>
  <li>Simple Cursor Follower – Single element follows mouse✅</li>
  <li>Day → Night Theme Switch – Auto theme change based on time✅</li>
  <li>Network Status Monitor – Detect online/offline changes</li>
  <li>Browser Tab Activity Logger – Track focus and blur events</li>
  <li>Battery Status Tracker – Monitor battery level and charging state</li>

  <!-- <li>Cursor Trail – Multiple elements follow cursor smoothly</li>
  <li>Aesthetic Weather Dashboard – Fetch weather and auto-switch themes</li>
  <li>Geolocation Tracker – Track user location (no map)✅</li>
  <li>Scroll-Reactive Floating Text – Text reacts to scroll position</li>
  <li>Horizontal Gallery Scroll – Wheel scroll controls horizontal movement</li>
  <li>Cosmic Status Dashboard – Multiple auto-updating metrics</li>
  <li>API Polling Dashboard – Fetch and refresh data at intervals</li> -->

  <!-- <li>Geolocation Tracker with Map Sync – External map lifecycle handling</li>
  <li>Scrollytelling Sections – Effects mount/unmount per scroll section</li>
  <li>Multi-layer Parallax Scrolling – Depth-based scroll effects</li>
  <li>Day → Night Ambient Scene – Animated environment transitions</li>
  <li>Neon News Streamer – Poll headlines with animated marquee</li> -->

  <!-- <li>Glassmorphic Floating Cards – Mouse-based parallax UI</li>
  <li>Zen Blossom Animation – Particle system with effect loops</li>
  <li>Pastel Liquid Loader – Morphing SVG or canvas shapes</li>
  <li>Retro Vaporwave Noise & Scanlines – Timed visual overlays</li>
  <li>Kinetic Typography System – Animated text driven by effects</li> -->
</ol>

<h2>3. UseReducer:</h2>
<ol>
  <li>Theme & Settings Manager – Manage app theme, font size, and preferences with a single reducer</li>
  <li>Image Edit Pipeline – Fake photoshop UI where brightness, contrast, filter stack & reset operations are reducer-controlled.✅</li>
  <li>Mars Rover Controller – A UI grid where commands like move, turn, detect obstacle, store path, return home are sent via reducer.</li>
  <li>Nebula Kanban — Motion-smooth kanban with gravity snap animations.</li>
  <li>Bento UI Layout Engine – Lets you swap, resize, randomize layout blocks. Reducer actions mutate a grid map. Think of it like rearranging Minecraft blocks but at UI level.</li>
  <li>Counter Dashboard – Multiple counters with increment, decrement, reset, and batch operations</li>
  <li>Async Data Fetcher – Fetch and manage API data with loading, success, and error states</li>
  <li>Drag & Drop Organizer – Reorder items visually in a list/grid</li>
  <li>Chat Interface – Real-time messages with input handling, typing indicators, and scroll management</li>
  <li>Quiz App with Timer – Dynamic questions with countdown timer and scoring</li>
</ol>

<h2>4.UseRef:</h2>
<ol>
  <li>Focus Tracker – Track which input field is currently focused</li>
  <li>Click Position Logger – Log mouse click positions in real-time</li>
  <li>Timer Stopwatch – Simple stopwatch without re-renders</li>
  <li>Scroll Position Saver – Restore scroll positions of multiple sections</li>
  <li>Draggable Element – Drag elements on a page</li>
  <li>Text Highlighter – Highlight selected text dynamically</li>
  <li>Scroll Spy – Track which section is visible for navigation</li>
  <li>Click Outside Detector – Detect clicks outside a component</li>
  <li>Infinite Image Carousel – Cycle through images smoothly</li>
  <li>Animated Canvas Sketchpad – Draw on canvas without re-rendering</li>
</ol>

<h2>5. UseContext:</h2>
<ol>
  <li>Global Theme Engine – App-wide dark/light + palette switching</li>
  <li>Design System Tokens – Global layout tokens like spacing, radius, font scale</li>
  <li>App Identity Provider – Central source for app meta info</li>
  <li>User Preference Sync – Share UI density, motion preference, font size</li>
  <li>Role-Based UI Gatekeeper – Expose role and permission checks</li>
  <li>Multi-Language Text Hub – Provide translations and current locale</li>
  <li>Notification Center – Globally push/pop toast or banner messages</li>
  <li>Session Badge System – Ephemeral shared badges across UI</li>
  <li>Sound Settings Center – Global mute/volume/tone preferences</li>
  <li>Developer Mode Switch – Toggle debug overlays or dev panels</li>
  <li>Wallet Connection State – Share connected wallet address + network flag</li>
  <li>Session Token Vault – Central store for API auth tokens</li>
  <li>Collaboration Mode Flag – Toggle real-time collab UI mode</li>
  <li>Global Keybind Config – Share active keybind sets globally</li>
</ol>

<h2>6. UseMemo:</h2>
<ol>
  <li>Matrix Cost Cache – Cache expensive 2D array computations</li>
  <li>Emoji Hash Generator – Map text to stable emoji sequence</li>
  <li>Fibonacci Pixel Art Renderer – Cache layout for Fibonacci-sized rows</li>
  <li>Prime Palette Picker – Cache prime number to color mappings</li>
  <li>Binary Tune Composer – Cache mapping of binary strings to rhythm patterns</li>
  <li>Expensive Math Solver – Memoize CPU-heavy formulas</li>
  <li>Dynamic Theme Color Generator – Cache color palette transformations</li>
  <li>Avatar Pattern Generator – Generate unique SVG/Canvas patterns</li>
  <li>Product Price Optimizer – Cache discount, tax, and total calculations</li>
  <li>Text Similarity Scorer – Memoize cosine similarity computations</li>
  <li>Performance Metrics Formatter – Cache formatted analytics summaries</li>
  <li>FibFast Playground – Memoized Fibonacci calculator</li>
  <li>Prime Matrix Studio – Generate prime number grids</li>
  <li>Fractal Forge – Memoize generated fractal points</li>
  <li>Live Code Diff Viewer – Cache diff results for same code pairs</li>
</ol>

<h2>7. UseCallback:</h2>
<ol>
  <li>Memoized Button Click Counter – Increment efficiently without re-renders</li>
  <li>Dynamic Form Input Handler – Single memoized change handler for multiple inputs</li>
  <li>Optimized List Filter – Memoized callback to prevent recalculation</li>
  <li>Debounced Search Input – Memoized callback for debouncing user input</li>
  <li>Dynamic Form Field Validator – Memoized validation callbacks for multiple fields</li>
  <li>Memoized Todo List Actions – Callback functions for add/delete/toggle in large lists</li>
  <li>Interactive Voting App – Memoize vote handlers for efficiency</li>
  <li>Live Search Autocomplete – useCallback keeps fetch handler stable while useState/useEffect manage API calls</li>
  <li>Drag-and-Drop List – Memoized handlers for smoother performance</li>
  <li>Paginated Data Table – Memoize sorting/filtering functions for fast rendering</li>
</ol>

<h2>8. UseLayoutEffect:</h2>
<ol>
  <li>DOM Element Size Tracker – Measure element dimensions before paint</li>
  <li>Synchronized Scroll Animation – Animate elements smoothly with scroll</li>
  <li>Dynamic Tooltip Positioner – Calculate tooltip position before render</li>
  <li>Auto-Fit Text Container – Adjust font size to fit text perfectly</li>
  <li>Sticky Header Animator – Adjust header size and style dynamically on scroll</li>
  <li>Resizable Split Pane – Adjust panel widths/heights in real-time during drag</li>
  <li>Responsive Grid Layout – Measure container/child sizes and adjust grid dynamically</li>
  <li>Responsive Canvas Drawing Board – Canvas resizing and drawing</li>
  <li>Interactive 3D Object Viewer – Position 3D objects after layout renders</li>
  <li>Drag-and-Drop Dashboard Builder – Position elements with layout effect, manage state for drag</li>
  <li>Dynamic Modal Animations – Compute initial modal positions and toggle visibility</li>
</ol>
i
<h2>Miscellaneous (Combined Hooks):</h2>
<ol>
  <li>AI Image Analyzer (Vision API Wrapper) - Analyses the image and display labels,scores.</li>
  <li>Pixel Pattern Lab – UseState & UseEffect</li>
  <li>Code Snippet Vault – UseState & UseEffect</li>
  <li>Voice Memo Bar – UseState & UseEffect</li>
  <li>Tiny Kanban Board – UseState & UseRef</li>
  <li>Undo-able Canvas Doodle Pad – UseState & UseReducer</li>
  <li>Live Search with Debounce – UseState, UseRef & UseEffect</li>
  <li>Infinite Scrolling Feed – UseState, UseRef, UseCallback & UseEffect</li>
  <li>Chat Room State Sync – UseState/UseReducer + UseEffect + UseContext</li>
  <li>E-Commerce Cart Logic – UseReducer/UseState + UseContext</li>
  <li>GPS Polling Dashboard – UseEffect + UseState + UseContext</li>
  <li>Audio Object Controller – UseRef + UseEffect + UseState + UseContext</li>
  <li>Network Packet Shape Classifier – UseMemo & UseEffect</li>
  <li>AI Prompt Feature Tokenizer – UseMemo & UseState</li>
  <li>Live Code Diff Viewer – UseMemo, UseState & UseEffect</li>
  <li>Search Result Ranker – UseState, UseEffect & UseMemo</li>
  <li>Large Dataset Table with Filters – UseState & UseMemo</li>
  <li>Interactive Drawing Canvas – UseMemo & UseState</li>
  <li>Expensive List Filter – UseCallback + UseState & UseMemo</li>
</ol>

<!-- <ol>
  <li>Chrono-Verse Planner – Ritual + task timelines rendered like minimalist galaxy bands using useState, useEffect & useReducer.</li>
  <li>Ephemeral Chat Bubbles – Messages float and dissolve after a time budget; offline queue sync driven by reducer + effects.</li>
  <li>Gesture Music Palette – Drag gradients to mix synth loops; mood mixing state machine built with reducer and auto-FX side effects.</li>
  <li>Local-First Budget Compass – Circular radar chart of expenses that recalculates and animates on reducer dispatch.</li>
  <li>Async Recipe Steps Engine – Cooking assistant that progresses steps via reducer actions and voice/time triggers from effects.</li>
  <li>Focus Ritual Roulette – Spin a neon wheel to generate coherent focus sessions; manages state transitions via reducer.</li>
  <li>Haptic Pattern Trainer – Click rhythm pad that learns your tap timing and generates symmetric UI patterns.</li>
  <li>Sensory Theme Lab – Changes UI shaders, particles and ambience depending on sensor/time events.</li>
  <li>Retry-able API Studio – Make calls to random aesthetic APIs but retry logic + request budget tracked with useReducer.</li>
  <li>History Time Capsule – Daily logs get sealed in animated “capsules”; unseal with reducer action to view.</li>
  <li>Mini FSM Game Controller – Palette-based puzzle where moves dispatch reducer actions and effects trigger level rules.</li>
  <li>Battery-Driven UI Aura – Glowing aura around app reflects battery state (polling done in effect).</li>
  <li>Scroll Physics Storyboard – Story frames that snap with physics; internal story state controlled by reducer.</li>
  <li>Error-Resilient Search Nebula – Search results plotted as movable star nodes with ranking state managed in reducer.</li>
  <li>Neural Habit Network – Habits are nodes that fire signals when completed; signal paths updated via reducer.</li>
</ol> -->

<!-- 
<ol>
  <li>Chromatic Circuit Puzzle – Connect flowing color circuits, obey energy rules enforced by reducer and time-burst reflows triggered in effects.</li>
  <li>Reactive Color Chain Reactor – Build color reaction chains that resolve via reducer-powered state machine; useEffect fires rule ticks and combo decay.</li>
  <li>Palette Flow Chess (Mini Edition) – Tiny strategy puzzle where piece moves are reducer actions and useEffect recalculates board fields based on active palette.</li>
  <li>Hue Shift Memory Tiles – Flip gradient-etched tiles in limited steps; tile FSM state stored in reducer, automatic mismatch reset controlled by effect timers.</li>
  <li>Color Anomaly Detector Game – Identify disruptive color patterns in a grid; anomaly classification state machine built with reducer, rule polling via effects.</li>
  <li>Gradient Node Path Builder – Travel nodes by constructing gradient paths; path validity tracked through reducer dispatch, path collapse animated by effects.</li>
  <li>Chroma Weather Puzzle Realm – Weather (mock API) alters palette physics and level rules; reducer stores level FSM, effect triggers world state rewrite.</li>
  <li>Prism Potion Logic Game – Mix color potions in allowed sequences using reducer-based FSM; useEffect triggers mixing cooldown and combo validation.</li>
  <li>Neon Rule Engine Dice Puzzle – Roll color dice to satisfy level FSM rules held in reducer; effect updates remaining rule budget and rule shifts.</li>
  <li>Solar Spectrum Resource Puzzle – Allocate spectral energy to objects using reducer actions; effect loop handles energy drain and win validation rules.</li>
  <li>Ambient Palette Tower Resolver – Tap towers to adjust color heights, all transitions follow FSM reducer flow; effects animate gravity-merge rule checks.</li>
  <li>Quantum Color Swap Maze – Maze lights shift allowed palette zones; FSM zones held in reducer, useEffect repaints legal moves each tick.</li>
  <li>Symmetric Gradient Lock Puzzle – Unlock symmetric gradient locks in a grid; lock FSM via reducer, effect monitors pattern entropy and resets sequence violations.</li>
  <li>Color Sequence Compiler Game – Compile a sequence of colors like assembling code; reducer actions push tokens, effect compiles and checks sequence rules.</li>
  <li>Reactive Frame Palette Builder – Assemble palette frames like puzzle pieces, FSM for frames stored in reducer; effect handles adjacency rules and invalid fade-out.</li>
</ol>


<ol>
  <li>Vibe Canvas Coins – Earn gradient coins while drawing moods; coin ledger via useReducer, autosync pulses via useEffect.</li>
  <li>Aura Profile Generator – Glow aura adapts to keystrokes and idle rhythm using useState, reducer drives aura intensity FSM.</li>
  <li>Micro-Confession Booth – Short daily thoughts get voice-typed; draft box useState, sealing/unsealing handled by reducer.</li>
  <li>Chroma Flash Reminders – Notifications shimmer as color flashes; effect polls schedule, reducer updates reminder queue.</li>
  <li>Pocket Loot Tasks – Tasks drop loot badges like collectibles using useState, reducer handles inventory + actions.</li>
  <li>Vanishing Verse Wall – Write 2-line poems that fade if unread; component UI useState, history stack useReducer, fade timers useEffect.</li>
  <li>Soft UI Crypto Mood Wallet – Tiny wallet theme that reacts to market “mood”; reducer stores balance FSM, effect mocks price drift.</li>
  <li>Swipe Ritual Cards – Swipeable lifestyle ritual cards (gym → breather → grind); current card useState, transitions via reducer.</li>
  <li>Echo Diary Dots – Each entry becomes a glowing dot in a calm constellation; center dot state handled by reducer actions.</li>
  <li>Pastel Pulse Journal – Journal border pulses with a soft beat; reducer manages pulse mode, effect runs animation loop.</li>
  <li>Streak Sushi Rolls – Each habit streak rolls a new sushi layer; useState for layer, useReducer for streak core.</li>
  <li>Mini News Mood Mixer – Toggle news categories like mixing pastel paint; category state useState, feed policy useReducer, refresh useEffect.</li>
  <li>Snack-Break Scheduler – Neon snack timer that auto-suggests breaks; effect ticks clock, reducer validates break budget.</li>
  <li>Retro Sticker Dispatcher – Dispatch stickers for every logged mood; sticker board useState, dispatch rules useReducer.</li>
  <li>Sleepy Tab Watcher – Minimal tab detects sleep/idle pattern and lowers saturation; reducer handles “sleep state”, effect monitors timestamps.</li>
  <li>Glow Error Boundary Studio – Errors show aesthetic glow cards instead of crash; error count useReducer, UI state useState.</li>
  <li>Music Mood Capsules – Seal playlists into capsules by emotion; reducer handles open/close FSM, effect delays capsule auto-close.</li>
  <li>Quick Byte Stories – 5 second reading stories that vanish; story index useReducer, countdown useEffect, UI toggles useState.</li>
  <li>Bubble Budget Popper – Expenses pop like calming bubbles; effect spawns bubbles, reducer handles burst/merge rules.</li>
  <li>Tap Palette Pet Puzzle – Tap colored tiles to feed a tiny pet; pet FSM in reducer, hunger decay in effect, tile UI useState.</li>
</ol>

 -->