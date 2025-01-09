<h1>HTML</h1>
<ol>
<li>HTML stands for hyper text markup language.</li>
<li>HTML is used to define the structure of the webpage.</li>
</ol>


<h2>Understanding the Boiler plate in HTML:</h2>
HTML Boilerplate a set of pre-written of HTML,CSS and JS which forms the starting point of your web project
<img src="Images\boilerplate.png" alt="Boilerplate">

<h3>Doctype decleration:</h3>
<code>Syntax:&lt;!Doctype html&gt;</code><br>
The doc-type decleration is crucial because it tells what version of HTML are we using.<br>

<h3>HTML Tag:</h3>
<code>Syntax:&lt;html lang="en"&gt;</code><br>
<ol>
<li>The "html" tag is the root element of an HTML document.</li>
<li>Including the lang attribute specifies the language of the content, which is important for accessibility and SEO(Search Engine Optimization).</li>
</ol>

<h3>Head Section:</h3>
<code>Syntax:&lt;head&gt; &lt;/head&gt;</code><br>
The <head> section contains meta-information about the document, such as the character set, viewport settings, and links to CSS files.

<h3>Body Section:</h3>
<code>Syntax:&lt;body&gt; &lt;body&gt;</code><br>
The Body section is where you write all the HTML tags.

<hr>

<h2>Lists:</h2>
<h3>1.Unordered List:</h3>
Here the tag <code>&lt;ul&gt;</code> is Unordered list tag and to <code>&lt;li&gt;</code> are the list items tag.<br>
<b>Example:</b><br>
<img src="Images\ul.png" alt="Unordered list"><br>
<b>Output:</b><br>
<img src="Images\ul_op.png" alt="Unordered list Output"><br>
We get the ans in bulletin points.

<h3>1a.Unordered list with type attribute:<h3>
<b>Example:</b><br>
<img src="Images\ul1.png" alt="Unordered list"><br>
<b>Output:</b><br>
<img src="Images\ul1_op.png" alt="Unordered list Output"><br>


<h3>2.Ordered List:</h3>
Here the tag <code>&lt;ol&gt;</code> is Unordered list tag and to <code>&lt;li&gt;</code> are the list items tag.<br>
<b>Example:</b><br>
<img src="Images\ol.png" alt="Ordered list sample image"><br>
<b>Output:</b><br>
<img src="Images\ol_op.png" alt="Ordered list Output"><br>
Here we get the ans in numbers.<br>

<h3>2a.Ordered list with type attribute:</h3>
We can change the type of the Ordered list by mentioning the type attribute in the ordered list opening tag.<br>
<b>Example:</b><br>
<img src="Images\ol1.png" alt="Ordered list with type attribute"><br>
<b>Output:</b><br>
<img src="Images\ol1_op.png" alt="Ordered list with type attribute Output"><br>
We could see here that the numbering changed to <b>Alphabetical</b> and then later to <b>Roman numbers</b>.

<h3>3.Nested Lists:</h3>
We can have <code>&lt;ul&gt;</code> in <code>&lt;ol&gt;</code> or vice-versa.<br>
<b>Example:</b><br>
<img src="Images\nsl.png" alt="Nested list sample image"><br>
<b>Output:</b><br>
<img src="Images\nsl_op.png" alt="Nested list Output"><br>

<hr>
<h2>Attributes:</h2>
<ol>
<li>These are the special words that are used inside the opening tag of HTML elements</li>
<li>Attributes provide additional info about elements</li>
<li>Attributes usually come in name/value pairs like: name="value"</li>
<li>Types of attributes:</li>
<ul>
  <li><strong>Global Attributes</strong> – These attributes can be used with any HTML element.</li>
    <ul>
        <li>class</li>
        <li>style</li>
        <li>src</li>
        <li>role</li>
        <li>contenteditable</li>
        <li>tabindex</li>
        <li>id</li>
        <li>href</li>
        <li>alt</li>
        <li>title</li>
        <li>lang</li>
    </ul>
  <li><strong>Event Attributes</strong> – Define the actions to be taken on specific browser events.</li>
  <li><strong>Input Attributes</strong> – Specific to input elements within <code>&lt;form&gt;</code> tags.</li>
  <li><strong>Image Attributes</strong> – Specific to the <code>&lt;img&gt;</code> element for handling images.</li>
  <li><strong>Link Attributes</strong> – Specific to linking elements like <code>&lt;a&gt;</code> and <code>&lt;link&gt;</code>.</li>
  <li><strong>Table Attributes</strong> – Used with table elements like <code>&lt;table&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;tr&gt;</code>, and <code>&lt;td&gt;</code>.</li>
  <li><strong>Style Attributes</strong> – Define styles directly on an element.</li>
  <li><strong>Media Attributes</strong> – Related to media elements like <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code>.</li>
  <li><strong>Accessibility Attributes</strong> – Help improve accessibility, such as <code>alt</code> for images and <code>aria-*</code> attributes.</li>
  <li><strong>Meta Attributes</strong> – Used with meta elements to specify metadata like <code>charset</code>.</li>
</ul>

<li>For example, in the image tag we use "src" attribute for the source and "alt" for alternate name for the image <code>&lt;img src="..." alt="..."&gt;</code></li>
<li>Similarly to create a hyperlink like below we use "href" attribute inside anchor element <code>&lt;a href="..."&gt; Hyperlink name &lt;/a&gt;</code>.</li>
<li>There are several other attributes which  you can find in teh hyperlink below</li>
</ol>
Refer to this link to kow more about "Attributes":<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes">MND Refrences</a>

<h2>Anchor tag:</h2>
<code>Syntax:&lt;a href="..."&gt; &lt;/a&gt;</code><br>
<ol>
<li>Creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.</li>
<li>Here the href stand for hyperlink reference.</li>
<li>We can even make an anchor tag to download any file</li>
</ol>
<h3 id="Normal_Link">Normal Link:</h3>
    <p>Links are created using the <code>&lt;a&gt;</code> tag with the <code>href</code> attribute.</p>
    <p>Example: <a href="https://example.com">Link</a></p>
    <hr>

<h3>Download Link:</h2>
    <p>The <code>download</code> attribute allows users to download a file directly from the link.</p>
    <p>Syntax: <code>&lt;a href="file_path" download="file_name"&gt;Link Text&lt;/a&gt;</code></p>
    <p>Example: <a href="FILES/HTML_and_CSS_design_and_build_websites.pdf" download="HTML_and_CSS_design_and_build_websites.pdf">Download John Duckett's Book</a></p>
    <hr>

<h3>Ping Attribute:</h3>
    <p>The <code>ping</code> attribute sends a request to a specified URL to track the number of clicks.</p>
    <p>Example: <a href="https://example.com" ping="https://example.com/tracking">Ping Attribute to Count Clicks</a></p>
    <hr>

<h3>hreflang Attribute:</h3>
    <p>Specifies the language and region of a linked webpage.</p>
    <p>Improves user experience and SEO for multilingual websites.</p>
    <p>Example: <a href="https://example.com/es/" hreflang="es">Visit Spanish version</a></p>
    <hr>

<h3>Target Attribute:</h3>
    <p>Specifies where to open the linked document.</p>
    <ul>
        <li><code>_self</code>: Default; opens in the same tab.</li>
        <li><code>_blank</code>: Opens in a new tab.</li>
        <li><code>_top</code>: Opens the link in the full browser window, removing frames.</li>
        <li><code>_parent</code>: Opens the link in the immediate parent frame.</li>
    </ul>
    <p>Examples:</p>
    <a href="https://example.com" target="_self">Open in the Same Tab</a><br>
    <a href="https://example.com" target="_blank">Open in a New Tab</a><br>
    <a href="https://example.com" target="_top">Open in Full Window (Remove Frames)</a><br>
    <a href="https://example.com" target="_parent">Open in Parent Frame</a>
    <hr>

<h3>Adding Icons to Links:</h3>
    <p>Icons can be added using the <code>&lt;img&gt;</code> tag within the <code>&lt;a&gt;</code> tag.</p>
    <p>Example:</p>
    <a href="https://example.com" target="_blank">
        Example.com <img src="Images/hyperlink.png" alt="Hyperlink Icon" height="12px" width="12px">
    </a>

<h3>Adding links to an element on the same page</h3>
To create a "Jump to" link, you need to assign an id to the target element, ensuring the id has no spaces only underscores.<br>
<a href="#Normal_Link">Jump to</a>
<br><hr>

<h2>Image Tag:</h2>
<code>Synatx:&lt;img src="..." alt="..." ...&gt;</code><br>
<ol>
<li>Here the <code>src</code> attribute contain the path  to the image</li>
<li>The <code>alt</code> attribute contains the alternative text,it is displayed when the image cannot be loaded</li>
<li>There are so many other attributes like height and width and so on.</li>
</ol>
<h3>Image format supported by the image tag:</h3>
<ol>
<li><b>APNG(Animated Portable Network Graphics):</b>A good choice for lossless animation with high quality</li>
<li><b>AVIF(AV1 Image File Format):</b>For modern images with small file sizes and good quality. Works for both static and animated images.<br>
Example: A product photo on an e-commerce website that loads fast but looks great.</li>
<li><b>GIF(Graphic Interchange Format):</b>For simple animations or images with few colors.</li>
<li><b>JPEG(Joint Photographic Experts Group):</b>For photos and images where file size is important, and some quality loss is acceptable.<br>
Example: A vacation photo uploaded to a blog.</li>
<li><b>PNG(Portable Network Graphics):</b>For high-quality images with transparency.<br>
Example: A company logo with a transparent background.</li>
<li><b>SVG(Scalable Vector Graphics):</b>For logos, icons, and illustrations that need to scale without losing quality.</li>
<li><b>WebP(Web Picture Format):</b> For both still images and animations with excellent quality and reduced file sizes.</li>
</ol>
<h3>Recommendations:</h3>
<ul>
<li>Use WebP or AVIF when possible—they provide great quality and small file sizes.</li>
<li>Use PNG or SVG for images with transparency or vector graphics.</li>
<li>Use JPEG for photographs when compression is acceptable.</li>
<li>Use GIF or APNG for basic animations.</li>
</ul>

<h3>loading attribute:</h3>
<ul>
<li>The loading attribute in HTML is used to control the loading behavior of 
images <code>&lt;img&gt;</code> and iframes <code>&lt;iframe&gt;</code>. It improves page performance by delaying 
the loading of these elements until they are needed.</li>
<img src="Images\console.png"><br>
<img src="Images\console_req.png"><br>
<li>When the page is refreshed, all 10 images are requested and loaded at once.</li>
<li>This behavior is the default property of the loading attribute, known as <code>loading="eager"</code>.</li>
<li>Loads the image or iframe immediately, regardless of whether it's visible</li>
<code>Syntax:&lt;img src="..." loading="eager"&gt;</code><br>
<li>For someone with a poor internet connection, this can take time and may cause their device to lag or freeze.</li>
<img src="Images\console1.png"><br>
<img src="Images\console1_req.png"><br>
<li>In order to stop such problem we use <code>loading = "lazy"</code> attribute.</li>
<li>It doesn't load the image or iframe until it's near the viewport (visible on the screen).</li>
<img src="Images\console2.png"><br>
<li>Only that images are loaded that are visible on the screen.</li>
<img src="Images\console2_req.png"><br>
<li>We even have another option of <code>loading="auto"</code> that lets the browser decide the best loading behavior based on its logic.</li>
</ul>
