<h1>List of Projects Using React State</h1>

<h2>1.UseState:</h2>
<ol>
  <li>Counter app - Counts the number of times the button is clicked</li>
  <li>Simple todo - a normal todo app</li>
  <li>Theme switcher - dark/light</li>
  <li>Password strength checker - check the quality of the password</li>
  <li>Speech note compressor — toggle listening state and interim transcript preview with state</li>
  <li>Micro Physics Simulator – toggle gravity, bounce & friction presets for falling objects rendered in a box</li>
  <li>Gesture Pattern Vault – record a short swipe/tap gesture sequence and verify it like a lock pattern</li>
  <li>Realtime Font Playground – Font size, spacing, weight, and family controlled via small state variables to preview typography</li>
</ol>

<h2>2. UseEffect:</h2>
<ol>
  <li>Geolocation Tracker – Continuously fetches and updates user location on the map.</li>
  <li>Network Status Monitor – Detects online/offline status changes and shows notifications.</li>
  <li>Battery Status Tracker – Monitors device battery level and charging state in real-time.</li>
  <li>Browser Tab Activity Logger – Logs user tab focus/blur activity for analytics.</li>
  <li>Window Resize Visualizer – Dynamically updates layout or graphics based on window size changes.</li>
  <li>Scroll Progress Indicator – Shows how far the user has scrolled down a page dynamically.</li>
</ol>

<h2>3. UseReducer:</h2>
<ol>
  <li>Theme & Settings Manager – Manage app theme, font size, and preferences with a single state reducer.</li>
  <li>Counter Dashboard – Multiple counters with increment, decrement, reset, and batch operations.</li>
</ol>

<h2>4. UseRef:</h2>
<ol>
  <li>Focus Tracker – Track which input field is currently focused without re-rendering.</li>
  <li>Click Position Logger – Log mouse click positions on a page in real-time.</li>
  <li>Timer Stopwatch – Implement a simple stopwatch that runs without causing re-renders.</li>
  <li>Scroll Position Saver – Keep track of scroll positions of multiple sections to restore later.</li>
  <li>Draggable Element – Drag elements on a page by tracking mouse movements.</li>
  <li>Text Highlighter – Highlight selected text dynamically on a webpage without triggering re-renders.</li>
  <li>Scroll Spy – Track which section is currently visible on the viewport for active navigation.</li>
  <li>Click Outside Detector – Detect clicks outside a particular component and trigger actions.</li>
</ol>

<h2>Miscellaneous :</h2>
<ol>
  <li>Pixel Pattern Lab – Click grid cells to draw pixel designs saved in 2D state array (<strong>UseState & UseEffect</strong>)</li>
  <li>Code snippet vault — save favorite snippets with tag filters (<strong>UseState & UseEffect</strong>)</li>
  <li>Voice memo bar — record/play status toggles using Web Speech API (<strong>UseState & UseEffect</strong>)</li>
  <li>Live Typing DNA Visualizer – convert text to colored base-pair bars (A,T,G,C) and animate changes (<strong>UseState & UseEffect</strong>)</li>
  <li>Tiny kanban board — draggable task lanes with instant state updates (<strong>UseState & UseRef</strong>)</li>
  <li>Undo-able Canvas Doodle Pad – draw small sketches and maintain a stack-based stroke history for undo/redo (<strong>UseState & UseReducer</strong>)</li>
    <li>Local Weather Fetcher – Fetch and update weather data periodically from an API (UseState & UseEffect)</li>
  <li>Quick Settings Panel (like Win + A) – Toggles system-like settings, needs state management beyond effects (UseState, UseReducer & UseEffect)</li>
  <li>Live Search with Debounce – Fetches search results as user types with debounce (UseState, useRef & UseEffect)</li>
  <li>Speech Recognition Notes – Records and updates live transcription from mic input (UseState, useRef & UseEffect)</li>
  <li>Infinite Scrolling Feed – Load new items as the user scrolls (UseState, useRef, useCallback & UseEffect)</li>
<li>Async Data Fetcher – Fetch and manage API data with loading, success, and error states (UseReducer & UseEffect)</li>
<li>Drag & Drop Organizer – Reorder items visually in a list/grid with state updates (UseReducer, UseState & UseRef)</li>
<li>Chat Interface – Real-time messages with input handling, typing indicators, and scroll management (UseReducer & UseEffect)</li>
<li>Quiz App with Timer – Dynamic questions with a countdown timer and scoring (UseReducer, UseState & UseEffect)</li>
<li>Infinite Image Carousel – Cycle through images smoothly while avoiding unnecessary re-renders (<strong>UseRef</strong>)</li>
  <li>Interactive Carousel Slider – Control slide positions and animations (<strong>UseRef & UseState</strong>)</li>
  <li>Video Player with Custom Controls – Play, pause, or skip video using refs for HTML media elements (<strong>UseRef & UseState</strong>)</li>
  <li>Auto-Scrolling Chat Window – Keep the scroll at the bottom as new messages arrive (<strong>UseRef & UseEffect</strong>)</li>
  <li>Form Validation Highlighter – Highlight invalid fields dynamically while retaining input values (<strong>UseRef & UseState</strong>)</li>
  <li>Animated Canvas Sketchpad – Draw on a canvas and animate strokes without re-rendering (<strong>UseRef</strong>)</li>
  <li>Typing Speed Visualizer – Track keystrokes with refs but need state to display live WPM/accuracy (<strong>UseRef & UseState</strong>)</li>
  <li>Resizable Split Pane – Adjust widths of two panels by dragging while storing dimensions in refs (<strong>UseRef & UseState</strong>)</li>
</ol>

