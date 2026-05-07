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

<h2></h2>
<p></p>