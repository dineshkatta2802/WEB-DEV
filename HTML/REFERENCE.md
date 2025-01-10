<section>
<h1>HTML</h1>
<ol>
<li>HTML stands for hyper text markup language.</li>
<li>HTML is used to define the structure of the webpage.</li>
</ol>
</section>

<section>
<h2>*****<a href="https://docs.emmet.io/cheat-sheet/" target="_blank">Emmet(Cheat Sheet Link)</a>*****</h2>
<h3><a href="BOOKS AND CHEAT SHEETS/EMMET CHEAT SHEET.pdf" download="EMMET CHEAT SHEET.pdf">CLICK HERE TO DOWNLOAD</a>
</h3>
</section>

<section>
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
</section>

<hr>

<section>
<h2>Inline v/s block elements</h2>
<table>
<tr>
<th>Block</th>
<th>Inline</th>
</tr>
<tr>
<td>A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.</td>
<td>An inline element does not start on a new line.</td>
</tr>
<tr>
<td>A block-level element always takes up the full width available (stretches out to the left and right as far as it can).</td>
<td>An Inline element doen't take up full width available.</td>
</tr>
<tr>
<td>Common Examples:<code>&lt;div&gt;</code>,<code>&lt;p&gt;</code>,<code>&lt;h1 to h6&gt;</code>,<code>&lt;ul|ol&gt;</code>,<code>&lt;section&gt;</code></td>
<td>Common Examples:<code>&lt;span&gt;</code>,<code>&lt;a&gt;</code>,<code>&lt;strong&gt;</code>,<code>&lt;em&gt;</code>,<code>&lt;img&gt;</code></td>
</tr>
</table>
Here is the image to understand better about Inline and Block elements.
<img src="Images\Block_Inline.png" alt="Inline and block elements representation">
</section>

<hr>

<section>
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
</section>

<hr>

<section>
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
</section>

<hr>

<section>
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
    <p>Example: <a href="BOOKS AND CHEAT SHEETS/HTML_and_CSS_design_and_build_websites.pdf" download="HTML_and_CSS_design_and_build_websites.pdf">Download John Duckett's Book</a></p>
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
<br>
</section>

<hr>

<section>
<h2>Image Tag<code>&lt;img&gt;</code>:</h2>
<code>Synatx:&lt;img src="..." alt="..." ...&gt;</code><br>
<ol>
<li>Here the <code>src</code> attribute contain the path  to the image</li>
<li>The <code>alt</code> attribute contains the alternative text,it is displayed when the image cannot be loaded</li>
<li>There are so many other attributes like height and width and so on.</li>
</ol>
<h3>Image format supported by the image tag:</h3>
<ol>
<li><b>APNG(Animated Portable Network Graphics):</b> A good choice for lossless animation with high quality</li>
<li><b>AVIF(AV1 Image File Format):</b> For modern images with small file sizes and good quality. Works for both static and animated images.<br>
Example: A product photo on an e-commerce website that loads fast but looks great.</li>
<li><b>GIF(Graphic Interchange Format): </b>For simple animations or images with few colors.</li>
<li><b>JPEG(Joint Photographic Experts Group):</b> For photos and images where file size is important, and some quality loss is acceptable.<br>
Example: A vacation photo uploaded to a blog.</li>
<li><b>PNG(Portable Network Graphics):</b> For high-quality images with transparency.<br>
Example: A company logo with a transparent background.</li>
<li><b>SVG(Scalable Vector Graphics):</b> For logos, icons, and illustrations that need to scale without losing quality.</li>
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
<h3>Responsive Web-design:</h3>
<ul>
<li>We want to display identical image content, just larger or smaller depending on the device.</li>
<li>We can however use two attributes<code>srcset and size</code> to provide several additional source images along with hints to help the browser pick the right one. </li>
<li>The srcset and sizes attributes look complicated, but they're not too hard to understand</li>
<li>Each value contains a comma-separated list, and each part of those lists is made up of three sub-parts.</li>
<li><code>srcset</code> defines the set of images we will allow the browser to choose.It contains 3 parts:</li>
<ul><li>An image source</li>
<li>A space</li>
<li>The image intrinsic width in pixels(w)</li>
<ul><li>The "Image Intrinsic width" refers to the natural or original width of an image measured in pixels. 
This width is determined by the image's resolution and does not change regardless of how the image is displayed or resized on different screen sizes or devices. 
Essentially, it indicates the number of pixels that make up the width of the image when it is rendered at its original size.</li>
<li>It tells you how many tiny dots(pixels) are across the picture when it's in its original form!</li></ul>
</ul>
</ul>
<code>Later on you can learn it in detail when we know about CSS for now understand what is it.</code>
</section>

<hr>

<section>
<h2>Div Tag<code>&lt;div&gt;</code>:</h2>
<ul>
<li><code>&lt;div&gt;</code> tag is Block level tag.</li>
<li>The<code>&lt;div&gt;</code>tag is also known as the content Division element.</li>
<li><code>&lt;div&gt;</code> tag is used as acontainer in HTML.</li>
<li><code>&lt;div&gt;</code> tag can be styled by<code>class</code> or <code>id</code> attribute</li>
</ul>
</section>

<hr>

<section>
<h2>Span Tag<code>&lt;span&gt;</code>:</h2>
<ul>
<li><code>&lt;span&gt;</code> tag is Inline level tag.</li>
<li>The<code>&lt;span&gt;</code>tag is also known as the content Division element.</li>
<li><code>&lt;span&gt;</code> tag is used as acontainer in HTML.</li>
<li><code>&lt;span&gt;</code> tag can be styled by<code>class</code> or <code>id</code> attribute</li>
</ul>
</section>

<hr>

<section>
<h2>Subscript and Superscript Tags<code>&lt;sub&gt;|&lt;sup&gt;</code>:</h2>
These Tags are used only due to typographical reasons like for writing math forulas
and some chemical equations.<br>
Example:Let's write the basic a+b whole square formulae<br>
(a+b)<sup>2</sup> = (a)<sup>2</sup>+(b)<sup>2</sup>+2(ab)<br>
Simailrly let's write water's chemical formulae<br>
H<sub>2</sub>O<br>
</section>

<hr>

<section>
<h2>Semantics Markup:</h2>
In HTML we basically have 2 types of tags:<br>
<ol>
<li>Semantic Tags</li>
<ul>
<li>Sematic Tags are those tags where we can find the functionality of the tag just by seeing the name of the tag.</li>
<li>We mainly use Semantic tags because of the following reasons:
<ul><li>Improves Accessibility:Help assistive technologies like screen readers understand the content structure.</li>
<li>SEO Friendly:Search engines better understand the content and context, improving rankings.</li>
<li>Provide better Structure to teh web page by dividing and sectioning them into respective parts.</li>
<li>Improve Code Readability</li>
<li>Follow Web Standards.</li></ul>
</li>
<li><img src="Images\Semantic.gif"></li>
</ul>
<li>Non-Semantic Tags</li>
<ul>
<li>Non-Semantic Atgs are those tags where we cannot identify the tags functionality by its name.</li>
</ul>
</ol>
Let's understand in detail about Semantic Tags<br>
<h3>Section Tag<code>&lt;section&gt;</code>:</h3>
<ul>
<li> It is typically used to group related content under a common theme or purpose, and it often includes a heading to describe its content.</li>
<li> Helps define a logical structure for a webpage.</li>
<li>
<b>**NOTE:**</b><br>
<b>Section tag and <code>&lt;div|span&gt</code> tag can seem to be same because they are for structuring teh web page,but they are of different purpose i.e,
section tag is a group of elements with same purpose whereas a<code>&lt;div|span&gt;</code> grouping elements for layout purposes but without a clear topic. </b></li>
</ul>

<hr>

<h3>Atricle Tag<code>&lt;articel&gt;</code>:</h3>
<ul>
<li>Represents self-contained content that can stand alone or be shared independently (e.g., blog posts, news articles).</li>
<li><code>Syntax:&lt;article&gt;.....&lt;/article&gt;</code></li>
</ul>

<hr>

<h3>Aside Tag<code>&lt;aside&gt;</code>:</h3>
<ul>
<li> Represents complementary or tangential content related to the main content (e.g., sidebars, advertisements, quotes).</li>
<li><code>Syntax:&lt;aside&gt;.....&lt;/aside&gt;</code></li>
</ul>

<hr>

<h3>Header Tag<code>&lt;header&gt;</code>:</h3>
<ul>
<li>Defines the introductory content or navigational links for a page or section</li>
<li><code>Syntax:&lt;header&gt;.....&lt;/header&gt;</code></li>
</ul>

<hr>

<h3>Footer Tag<code>&lt;footer&gt;</code>:</h3>
<ul>
<li> Represents footer content, such as copyrights or links.</li>
<li><code>Syntax:&lt;footer&gt;.....&lt;/footer&gt;</code></li>
</ul>

<hr>

<h3>Navigation Tag<code>&lt;nav&gt;</code>:</h3>
<ul>
<li>The <code>&lt;nav&gt;</code> tag in HTML is a semantic element used to define a section of the webpage that contains navigational links. These links typically help users navigate through different 
sections of the same page or other pages on the website.</li>
<li>Specifies navigation menus or links.</li>
<li><code>Syntax:&lt;nav&gt;.....&lt;/nav&gt;</code></li>
</ul>

<hr>

<h3>Main Tag<code>&lt;main&gt;</code>:</h3>
<ul>
<li> The <code>&lt;main&gt;</code> tag in HTML is a semantic element used to identify the primary content of a webpage. It is designed to contain the content that is directly related to the central topic or purpose of the page.</li>
<li><code>Syntax:&lt;main&gt;.....&lt;/main&gt;</code></li>
</ul>
</section>

<hr>

<section>
<h2>HTML Entities:</h2>
<ul>
<li>In HTML, there are reserved characters, such as < (less than) and > (greater than), which are used to define tags like <p>. 
However, if you use these reserved characters within the content, browsers may misinterpret them as part of the tags.</li>
<li>The following are the HTML entities:</li>
<li>
<table><thead><tr><th style="text-align: center;"><h4><span>Symbols</span></h4></th><th style="text-align: center;"><h4><span>Description</span></h4></th><th style="text-align: center;"><h4><span>Entity name</span></h4></th><th style="text-align: center;"><h4><span>Entity Number</span></h4></th></tr></thead><tbody><tr><td><span>&nbsp;</span></td><td><span>non-breaking space</span></td><td><span>&amp;nbsp;</span></td><td><span>&amp;#160;</span></td></tr><tr><td><span>&lt;</span></td><td><span>less than</span></td><td><span>&amp;lt;</span></td><td><span>&amp;#60;</span></td></tr><tr><td><span>®</span></td><td><span>registered trademark</span></td><td><span>&amp;reg;</span></td><td><span>&amp;#174;</span></td></tr><tr><td><span>©</span></td><td><span>copyright</span></td><td><span>&amp;copy;</span></td><td><span>&amp;#169;</span></td></tr><tr><td><span>€</span></td><td><span>euro</span></td><td><span>&amp;euro;</span></td><td><span>&amp;#8364;</span></td></tr><tr><td><span>¥</span></td><td><span>yen</span></td><td><span>&amp;yen;</span></td><td><span>&amp;#165;</span></td></tr><tr><td><span>£</span></td><td><span>pound</span></td><td><span>&amp;pound;</span></td><td><span>&amp;#163;</span></td></tr><tr><td><span>¢</span></td><td><span>cent</span></td><td><span>&amp;cent;</span></td><td><span>&amp;#162;</span></td></tr><tr><td><span>“</span></td><td><span>double quotation mark</span></td><td><span>&amp;quot;</span></td><td><span>&amp;#34;</span></td></tr><tr><td><span>&amp;</span></td><td><span>ampersand</span></td><td><span>&amp;amp;</span></td><td><span>&amp;#38;</span></td></tr><tr><td><span>&gt;</span></td><td><span>greater than</span></td><td><span>&amp;gt;</span></td><td><span>&amp;#62;</span></td></tr><tr><td><span>∂</span></td><td><span>PARTIAL DIFFERENTIAL</span></td><td><span>&amp;part;</span></td><td><span>&amp;#8706;</span></td></tr><tr><td><span>∃</span></td><td><span>THERE EXISTS</span></td><td><span>&amp;exist;</span></td><td><span>&amp;#8707;</span></td></tr><tr><td><span>∅</span></td><td><span>EMPTY SETS</span></td><td><span>&amp;empty;</span></td><td><span>&amp;#8709;</span></td></tr><tr><td><span>∇</span></td><td><span>NABLA</span></td><td><span>&amp;nabla;</span></td><td><span>&amp;#8711;</span></td></tr><tr><td><span>∈</span></td><td><span>ELEMENT OF</span></td><td><span>&amp;isin;</span></td><td><span>&amp;#8712;</span></td></tr><tr><td><span>∉</span></td><td><span>NOT AN ELEMENT OF</span></td><td><span>&amp;notin;</span></td><td><span>&amp;#8713;</span></td></tr><tr><td><span>+</span></td><td><span>PLUS SIGN</span></td><td><span>&amp;plus;</span></td><td><span>&amp;#43;</span></td></tr><tr><td><span>∏</span></td><td><span>N-ARY PRODUCT</span></td><td><span>&amp;prod;</span></td><td><span>&amp;#8719;</span></td></tr><tr><td><span>∑</span></td><td><span>N-ARY SUMMATION</span></td><td><span>&amp;sum;</span></td><td><span>&amp;#8721;</span></td></tr><tr><td><span>Α</span></td><td><span>Alpha</span></td><td><span>&amp;Alpha;</span></td><td><span>&amp;#913;</span></td></tr><tr><td><span>Β</span></td><td><span>Beta</span></td><td><span>&amp;Beta;</span></td><td><span>&amp;#914;</span></td></tr><tr><td><span>Γ</span></td><td><span>Gamma</span></td><td><span>&amp;Gamma;</span></td><td><span>&amp;#915;</span></td></tr><tr><td><span>Δ</span></td><td><span>delta</span></td><td><span>&amp;Delta;</span></td><td><span>&amp;#916;</span></td></tr><tr><td><span>Ε</span></td><td><span>Epsilon</span></td><td><span>&amp;Epsilon;</span></td><td><span>&amp;#917;</span></td></tr><tr><td><span>Ζ</span></td><td><span>Zeta</span></td><td><span>&amp;Zeta;</span></td><td><span>&amp;#918;</span></td></tr><tr><td><span>♥</span></td><td><span>BLACK HEART SUIT = valentine</span></td><td><span>&amp;hearts;</span></td><td><span>&amp;#9829;</span></td></tr><tr><td><span>♣</span></td><td><span>BLACK CLUB SUIT = shamrock</span></td><td><span>&amp;clubs;</span></td><td><span>&amp;#9827;</span></td></tr><tr><td><span>♠</span></td><td><span>BLACK SPADE SUIT</span></td><td><span>&amp;spades;</span></td><td><span>&amp;#9824;</span></td></tr><tr><td><span>↓</span></td><td><span>DOWNWARDS ARROW</span></td><td><span>&amp;darr;</span></td><td><span>&amp;#8595;</span></td></tr><tr><td><span>→</span></td><td><span>RIGHTWARDS ARROW</span></td><td><span>&amp;rarr;</span></td><td><span>&amp;#8594;</span></td></tr><tr><td><span>↑</span></td><td><span>UPWARDS ARROW</span></td><td><span>&amp;uarr;</span></td><td><span>&amp;#8593;</span></td></tr><tr><td><span>←</span></td><td><span>LEFTWARDS ARROW</span></td><td><span>&amp;larr;</span></td><td><span>&amp;#8592;</span></td></tr><tr><td><span>™</span></td><td><span>TRADEMARK</span></td><td><span>&amp;trade;</span></td><td><span>&amp;#8482;</span></td></tr><tr><td><span>♦</span></td><td><span>BLACK DIAMOND SUIT</span></td><td><span>♦</span></td><td><span>&amp;#9830;</span></td></tr><tr><td><span>°</span></td><td><span>degree</span></td><td><span>&amp;deg;</span></td><td><span>&amp;#176;</span></td></tr><tr><td><span>∞</span></td><td><span>infinity</span></td><td><span>&amp;infin;</span></td><td><span>&amp;#8734;</span></td></tr><tr><td><span>‰</span></td><td><span>per-mille</span></td><td><span>&amp;permil;</span></td><td><span>&amp;#137;</span></td></tr><tr><td><span>⋅</span></td><td><span>dot operator</span></td><td><span>&amp;sdot;</span></td><td><span>&amp;#8901;</span></td></tr><tr><td><span>±</span></td><td><span>plus-minus</span></td><td><span>&amp;plusmn;</span></td><td><span>&amp;#177;</span></td></tr><tr><td><span>†</span></td><td><span>hermitian</span></td><td><span>&amp;hercon;</span></td><td><span>&amp;#8889;</span></td></tr><tr><td><span>–</span></td><td><span>minus sign</span></td><td><span>&amp;minus;</span></td><td><span>&amp;#8722;</span></td></tr><tr><td><span>¬</span></td><td><span>–</span></td><td><span>&amp;not;</span></td><td><span>&amp;#172;</span></td></tr><tr><td><span>%</span></td><td><span>percent sign</span></td><td><span>&amp;percent;</span></td><td><span>&amp;#37;</span></td></tr><tr><td><span>f</span></td><td><span>Function</span></td><td><span>&amp;fnof;</span></td><td><span>&amp;#402;</span></td></tr><tr><td><span>∥</span></td><td><span>parallel</span></td><td><span>&amp;parallel;</span></td><td><span>&amp;#8741;</span></td></tr></tbody></table>
</li>
<li>We can use "Emoji's" as well - Just search for emoji and its HTML entity number on Google</li>
</ul>
</section>

