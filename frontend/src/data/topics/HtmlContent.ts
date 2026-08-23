export const htmlContent = {
  title: "HTML",
  description:
    "Learn HTML (HyperText Markup Language) from beginner to advanced with examples and practice.",

  sections: [
    {
      title: "Introduction to HTML",
      content: `
HTML (HyperText Markup Language) is the standard markup language used to create web pages.

HTML describes the structure of a webpage using elements called tags.

HTML is used to create:

• Websites
• Web Applications
• Landing Pages
• Portfolios
• Blogs
• Documentation
• Dashboards

HTML is the foundation of every website.
      `,
    },

    {
      title: "Features of HTML",
      content: `
Major Features of HTML:

• Simple and Easy to Learn
• Platform Independent
• Supports Multimedia
• Hyperlinks
• Semantic Elements
• Forms
• Tables
• SEO Friendly
• Supported by Every Browser

Advantages:

✓ Easy to Understand
✓ Fast Development
✓ Free to Use
✓ Cross Platform
✓ Large Community
      `,
    },

    {
      title: "HTML Document Structure",
      content: `
Every HTML document follows a standard structure.

Main Parts:

• <!DOCTYPE html>
• html
• head
• title
• body

The browser reads this structure to display the webpage correctly.
      `,
      code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>

<body>

    <h1>Hello World</h1>

</body>
</html>`,
      language: "html",
      output: "A webpage displaying the heading 'Hello World'.",
      tip: "Every HTML5 document should begin with <!DOCTYPE html>.",
    },

    {
      title: "HTML Elements",
      content: `
An HTML element consists of:

Opening Tag

Content

Closing Tag

Example:

<h1>Hello</h1>

Some HTML elements do not require closing tags.

Examples:

br
hr
img
input
meta
link
      `,
      code: `<h1>Welcome</h1>

<p>This is a paragraph.</p>

<hr>

<br>`,
      language: "html",
      output: "A heading, paragraph, horizontal line, and line break are displayed.",
    },

    {
      title: "HTML Attributes",
      content: `
Attributes provide additional information about HTML elements.

Syntax:

attribute="value"

Common Attributes:

id

class

href

src

alt

title

style

Attributes are always placed inside the opening tag.
      `,
      code: `<a href="https://google.com">
    Visit Google
</a>

<img
    src="image.jpg"
    alt="Nature Image">`,
      language: "html",
      output: "A clickable Google link and an image are displayed.",
      tip: "Always include the alt attribute for images to improve accessibility.",
    },

    {
      title: "HTML Comments",
      content: `
Comments are ignored by the browser.

They are used to explain code and improve readability.

Syntax:

<!-- Comment -->
      `,
      code: `<!-- Website Header -->

<h1>Learning HTML</h1>

<!-- Paragraph -->

<p>HTML is easy to learn.</p>`,
      language: "html",
      output: "The browser displays the heading and paragraph while ignoring the comments.",
    },

    {
      title: "HTML Headings",
      content: `
HTML provides six heading tags.

<h1> to <h6>

<h1> is the largest heading.

<h6> is the smallest heading.

Headings improve readability and SEO.
      `,
      code: `<h1>Main Heading</h1>

<h2>Sub Heading</h2>

<h3>Section Heading</h3>

<h4>Topic Heading</h4>

<h5>Small Heading</h5>

<h6>Smallest Heading</h6>`,
      language: "html",
      output: "Six headings are displayed from largest to smallest.",
      tip: "Use only one h1 tag on a webpage for better SEO.",
    },

    {
      title: "Paragraphs",
      content: `
The paragraph tag is used to display blocks of text.

Syntax:

<p>Paragraph</p>

Browsers automatically add spacing before and after paragraphs.
      `,
      code: `<p>
HTML is the foundation of every website.
</p>

<p>
Learning HTML is the first step toward web development.
</p>`,
      language: "html",
      output: "Two paragraphs are displayed with spacing between them.",
    },

    {
      title: "Line Break and Horizontal Rule",
      content: `
HTML provides special tags for formatting content.

<br>

Creates a line break.

<hr>

Creates a horizontal line between content.
      `,
      code: `<p>Hello<br>World</p>

<hr>

<p>HTML Tutorial</p>`,
      language: "html",
      output: `Hello
World

----------------

HTML Tutorial`,
      tip: "Use <hr> to separate different sections of content.",
    },

    {
      title: "Text Formatting",
      content: `
HTML provides several tags to format text.

Common Formatting Tags:

<b>

<strong>

<i>

<em>

<u>

<mark>

<small>

<del>

<sub>

<sup>
      `,
      code: `<b>Bold</b><br>

<strong>Strong</strong><br>

<i>Italic</i><br>

<u>Underline</u><br>

<mark>Highlighted</mark><br>

<small>Small Text</small><br>

<del>Deleted</del><br>

H<sub>2</sub>O<br>

x<sup>2</sup>`,
      language: "html",
      output: "Various formatted text styles are displayed including bold, italic, underline, highlighted, subscript, and superscript.",
      tip: "Use semantic tags like <strong> and <em> instead of <b> and <i> whenever appropriate.",
    },    {
      title: "HTML Links (Anchor Tag)",
      content: `
HTML links are used to connect one webpage to another.

The anchor tag <a> creates hyperlinks.

Syntax:

<a href="URL">
    Link Text
</a>

Common Attributes:

href
target
title
download
      `,
      code: `<a href="https://www.google.com">
    Visit Google
</a>

<a 
href="https://github.com"
target="_blank">
    Open GitHub
</a>`,
      language: "html",
      output: "The webpage displays clickable links.",
      tip: "Use target='_blank' to open external links in a new tab.",
    },

    {
      title: "Link Target Attribute",
      content: `
The target attribute specifies where the linked page opens.

Values:

_self
Opens in the same tab.

_blank
Opens in a new tab.

_parent
Opens in parent frame.

_top
Opens in full window.
      `,
      code: `<a 
href="https://example.com"
target="_blank">

Open Website

</a>`,
      language: "html",
      output: "The website opens in a new browser tab.",
      tip: "Use _blank carefully and add security attributes for external links.",
    },

    {
      title: "HTML Images",
      content: `
Images make websites more attractive and informative.

The <img> tag is used to display images.

Syntax:

<img src="image-path" alt="description">

Important Attributes:

src
alt
width
height
title
      `,
      code: `<img 
src="profile.jpg"
alt="Profile Image"
width="200"
height="200">`,
      language: "html",
      output: "A profile image is displayed with 200px width and height.",
      tip: "Always use alt text for accessibility and SEO.",
    },

    {
      title: "Image Paths",
      content: `
HTML supports different image paths.

Types:

1. Absolute Path

Complete URL of an image.

2. Relative Path

Path inside the project folder.

Relative paths are preferred for websites.
      `,
      code: `<!-- Absolute Path -->

<img src="https://example.com/image.jpg">


<!-- Relative Path -->

<img src="images/photo.jpg">`,
      language: "html",
      output: "Images are loaded from external URLs or local folders.",
    },

    {
      title: "Image Links",
      content: `
Images can also work as clickable links.

An image is placed inside an anchor tag.
      `,
      code: `<a href="index.html">

<img 
src="logo.png"
alt="Website Logo">

</a>`,
      language: "html",
      output: "Clicking the image opens the linked page.",
      tip: "Image links are commonly used for logos.",
    },

    {
      title: "HTML Lists",
      content: `
HTML provides three types of lists:

1. Ordered List

Uses numbers.

2. Unordered List

Uses bullets.

3. Description List

Uses terms and descriptions.
      `,
    },

    {
      title: "Ordered Lists",
      content: `
The <ol> tag creates numbered lists.

The <li> tag defines list items.

Common Attributes:

type
start
reversed
      `,
      code: `<ol>

<li>HTML</li>

<li>CSS</li>

<li>JavaScript</li>

</ol>`,
      language: "html",
      output: `1. HTML
2. CSS
3. JavaScript`,
      tip: "Use ordered lists when the sequence of items matters.",
    },

    {
      title: "Ordered List Types",
      content: `
The type attribute changes numbering style.

Values:

1
Numbers

A
Uppercase letters

a
Lowercase letters

I
Uppercase Roman numbers

i
Lowercase Roman numbers
      `,
      code: `<ol type="A">

<li>Frontend</li>

<li>Backend</li>

<li>Database</li>

</ol>`,
      language: "html",
      output: `A. Frontend
B. Backend
C. Database`,
    },

    {
      title: "Unordered Lists",
      content: `
The <ul> tag creates bullet lists.

Commonly used for:

• Navigation menus
• Features
• Categories
• Items
      `,
      code: `<ul>

<li>Home</li>

<li>About</li>

<li>Contact</li>

</ul>`,
      language: "html",
      output: `• Home
• About
• Contact`,
      tip: "Unordered lists are commonly used for website navigation.",
    },

    {
      title: "Unordered List Styles",
      content: `
The CSS list-style-type property changes bullet appearance.

Common Values:

disc

circle

square

none
      `,
      code: `<ul style="list-style-type:square">

<li>HTML</li>

<li>CSS</li>

<li>JavaScript</li>

</ul>`,
      language: "html",
      output: "The list displays square bullets.",
    },

    {
      title: "Nested Lists",
      content: `
A list inside another list is called a nested list.

Nested lists are useful for creating:

• Menus
• Categories
• Course structures
      `,
      code: `<ul>

<li>
Programming Languages

    <ul>
        <li>C++</li>
        <li>Python</li>
        <li>Java</li>
    </ul>

</li>

</ul>`,
      language: "html",
      output: "A nested list showing programming languages is displayed.",
    },

    {
      title: "Description Lists",
      content: `
Description lists contain terms and their explanations.

Tags:

<dl>
Description List

<dt>
Description Term

<dd>
Description Details
      `,
      code: `<dl>

<dt>HTML</dt>

<dd>
HyperText Markup Language
</dd>


<dt>CSS</dt>

<dd>
Cascading Style Sheets
</dd>

</dl>`,
      language: "html",
      output: "HTML and CSS terms with their descriptions are displayed.",
      tip: "Use description lists for glossaries and documentation.",
    },

    {
      title: "HTML Favicon",
      content: `
A favicon is a small icon displayed in the browser tab.

It improves branding and user experience.

The favicon is added inside the <head> section.
      `,
      code: `<head>

<link 
rel="icon"
href="favicon.png">

</head>`,
      language: "html",
      output: "The browser tab displays the website icon.",
      tip: "Use a small square image such as PNG or ICO format for favicons.",
    },

    {
      title: "HTML Entities",
      content: `
HTML entities are special codes used to display reserved characters.

Common Entities:

&lt;
Less than

&gt;
Greater than

&amp;
Ampersand

&nbsp;
Space

&copy;
Copyright
      `,
      code: `&lt;h1&gt;

&copy; 2026 My Website

Tom &amp; Jerry`,
      language: "html",
      output: `<h1>

© 2026 My Website

Tom & Jerry`,
    },    {
      title: "HTML Emojis",
      content: `
HTML supports emojis using Unicode characters.

Emojis can be added directly into HTML or using numeric entities.

They are commonly used in:

• Buttons
• Messages
• Cards
• User Interfaces
      `,
      code: `<h1>
Welcome 🚀
</h1>

<p>
Learn HTML ❤️
</p>`,
      language: "html",
      output: "The webpage displays text with emojis.",
      tip: "Always save HTML files using UTF-8 encoding for proper emoji support.",
    },

    {
      title: "HTML Symbols",
      content: `
HTML provides special characters called entities for displaying symbols.

Common Symbols:

© Copyright

® Registered

™ Trademark

€ Euro

₹ Indian Rupee

✓ Check Mark

∞ Infinity
      `,
      code: `<p>
Copyright &copy;
</p>

<p>
Price: &#8377;500
</p>

<p>
Success &#10003;
</p>`,
      language: "html",
      output: `Copyright ©

Price: ₹500

Success ✓`,
      tip: "Use HTML entities when symbols are not available directly from the keyboard.",
    },

    {
      title: "HTML Quotations",
      content: `
HTML provides tags for displaying quotations.

Common Tags:

<blockquote>
Large quotations

<q>
Short inline quotations

<abbr>
Abbreviations

<address>
Contact information

<cite>
Titles of creative works
      `,
      code: `<blockquote>

Learning never exhausts the mind.

</blockquote>


<p>
He said <q>Hello World</q>
</p>`,
      language: "html",
      output: "The quotation text is displayed using proper HTML formatting.",
    },

    {
      title: "Blockquote Element",
      content: `
The <blockquote> tag is used for long quotations from another source.

Browsers usually add indentation automatically.

It improves semantic meaning.
      `,
      code: `<blockquote>

"The only way to do great work is to love what you do."

</blockquote>`,
      language: "html",
      output: "A large indented quotation is displayed.",
      tip: "Use blockquote for external quotes, not normal paragraphs.",
    },

    {
      title: "HTML Abbreviation",
      content: `
The <abbr> tag defines abbreviations.

The title attribute provides the complete meaning.

Benefits:

• Better Accessibility
• Better Understanding
• SEO Improvement
      `,
      code: `<abbr 
title="HyperText Markup Language">

HTML

</abbr>`,
      language: "html",
      output: "Hovering over HTML displays its full meaning.",
    },

    {
      title: "HTML Code Formatting",
      content: `
HTML provides tags for displaying programming code.

Common Tags:

<code>
Inline code

<pre>
Preformatted text

<kbd>
Keyboard input

<samp>
Program output

<var>
Variables
      `,
      code: `<code>

console.log("Hello");

</code>


<pre>

function hello(){
    return "Hi";
}

</pre>`,
      language: "html",
      output: "Code appears with preserved formatting.",
      tip: "Use <pre> with <code> when displaying programming examples.",
    },

    {
      title: "HTML Semantic Elements",
      content: `
Semantic HTML elements clearly describe their meaning.

Examples:

<header>
<nav>
<section>
<article>
<aside>
<footer>

Benefits:

✓ Better SEO
✓ Improved Accessibility
✓ Cleaner Code
✓ Easier Maintenance
      `,
    },

    {
      title: "Div Element",
      content: `
The <div> tag is a block-level container.

It groups HTML elements together.

Common Uses:

• Layout Design
• Styling Sections
• JavaScript Manipulation

Div itself has no semantic meaning.
      `,
      code: `<div>

<h1>Website Title</h1>

<p>
Welcome to my website.
</p>

</div>`,
      language: "html",
      output: "The heading and paragraph are grouped inside a container.",
      tip: "Use semantic elements instead of excessive divs when possible.",
    },

    {
      title: "Span Element",
      content: `
The <span> tag is an inline container.

It is used to style or manipulate a small part of text.

Common Uses:

• Highlighting text
• Applying styles
• JavaScript targeting
      `,
      code: `<p>

Learn 
<span style="color:red">
HTML
</span>

Programming.

</p>`,
      language: "html",
      output: "Only the word HTML appears in red color.",
    },

    {
      title: "Block Elements",
      content: `
Block elements always start on a new line.

They take the full available width.

Examples:

<div>
<p>
<h1> - <h6>
<section>
<header>
<footer>
<ul>
<li>
      `,
      code: `<div>
Block Element 1
</div>

<div>
Block Element 2
</div>`,
      language: "html",
      output: "Each div appears on a separate line.",
    },

    {
      title: "Inline Elements",
      content: `
Inline elements do not start on a new line.

They only take required space.

Examples:

<span>
<a>
<img>
<strong>
<em>
<br>
      `,
      code: `<span>
HTML
</span>

<span>
CSS
</span>`,
      language: "html",
      output: "Both elements appear on the same line.",
    },

    {
      title: "HTML5 Layout Structure",
      content: `
Modern websites commonly follow this HTML5 structure:

<header>
Website header

<nav>
Navigation menu

<main>
Main content

<section>
Content sections

<article>
Independent content

<aside>
Side content

<footer>
Website footer
      `,
      code: `<header>
    Header
</header>

<nav>
    Menu
</nav>

<main>

<section>
    Content
</section>

</main>

<footer>
    Footer
</footer>`,
      language: "html",
      output: "A semantic webpage layout is created.",
      tip: "Use HTML5 semantic tags instead of creating everything with divs.",
    },

    {
      title: "Header Element",
      content: `
The <header> element represents introductory content.

It usually contains:

• Logo
• Website title
• Navigation
• Introduction
      `,
      code: `<header>

<h1>
My Website
</h1>

</header>`,
      language: "html",
      output: "A webpage header containing the website title is displayed.",
    },

    {
      title: "Navigation Element",
      content: `
The <nav> element represents navigation links.

Common Uses:

• Main menu
• Sidebar navigation
• Page links
      `,
      code: `<nav>

<a href="#">
Home
</a>

<a href="#">
About
</a>

<a href="#">
Contact
</a>

</nav>`,
      language: "html",
      output: "A navigation menu with three links is displayed.",
    },

    {
      title: "Section Element",
      content: `
The <section> element represents a thematic group of content.

Examples:

• About Section
• Services Section
• Features Section
• Contact Section
      `,
      code: `<section>

<h2>
About Us
</h2>

<p>
We build websites.
</p>

</section>`,
      language: "html",
      output: "A separate content section is created.",
    },

    {
      title: "Article Element",
      content: `
The <article> element represents independent content.

Examples:

• Blog Posts
• News Articles
• Forum Posts
• Product Reviews
      `,
      code: `<article>

<h2>
HTML Tutorial
</h2>

<p>
Learn HTML easily.
</p>

</article>`,
      language: "html",
      output: "An independent article section is displayed.",
    },

    {
      title: "Footer Element",
      content: `
The <footer> element represents the bottom section of a webpage.

Usually contains:

• Copyright
• Contact Information
• Social Links
• Legal Information
      `,
      code: `<footer>

<p>
© 2026 My Website
</p>

</footer>`,
      language: "html",
      output: "A footer containing copyright information is displayed.",
    },    {
      title: "HTML Tables",
      content: `
HTML tables are used to display data in rows and columns.

Tables are commonly used for:

• Student Records
• Product Lists
• Price Tables
• Reports
• Schedules

Main Table Tags:

<table>
Creates a table

<tr>
Creates a table row

<th>
Creates a table header

<td>
Creates table data
      `,
      code: `<table>

<tr>
    <th>Name</th>
    <th>Age</th>
</tr>

<tr>
    <td>Harish</td>
    <td>21</td>
</tr>

</table>`,
      language: "html",
      output: `
Name     Age

Harish   21
      `,
      tip: "Use tables only for tabular data, not for webpage layouts.",
    },

    {
      title: "Table Rows",
      content: `
The <tr> tag defines a row inside a table.

Each row contains:

• Table Header cells
• Table Data cells

A table can contain multiple rows.
      `,
      code: `<table>

<tr>
    <td>HTML</td>
    <td>CSS</td>
</tr>

<tr>
    <td>JavaScript</td>
    <td>React</td>
</tr>

</table>`,
      language: "html",
      output: "Two rows of data are displayed inside the table.",
    },

    {
      title: "Table Headers",
      content: `
The <th> tag creates header cells.

Features:

• Bold text by default
• Center aligned by default
• Represents column headings

Headers improve accessibility and readability.
      `,
      code: `<table>

<tr>

<th>Course</th>
<th>Duration</th>

</tr>

</table>`,
      language: "html",
      output: "A table header row is displayed.",
      tip: "Always use <th> for column titles instead of normal <td>.",
    },

    {
      title: "Table Data Cells",
      content: `
The <td> tag defines normal data cells.

Each cell contains information related to a table column.
      `,
      code: `<table>

<tr>

<td>Python</td>

<td>3 Months</td>

</tr>

</table>`,
      language: "html",
      output: "Python and its duration are displayed in table cells.",
    },

    {
      title: "Table Caption",
      content: `
The <caption> tag adds a title to a table.

It should be placed immediately after the opening <table> tag.

Captions improve accessibility.
      `,
      code: `<table>

<caption>
Student Details
</caption>

<tr>
<th>Name</th>
<th>Marks</th>
</tr>

</table>`,
      language: "html",
      output: "A table with the title 'Student Details' is displayed.",
    },

    {
      title: "Table Borders",
      content: `
Borders make tables easier to read.

Borders can be added using CSS.

Common Properties:

border
border-collapse
padding
      `,
      code: `<style>

table,th,td{

border:1px solid black;

border-collapse:collapse;

}

</style>`,
      language: "html",
      output: "The table displays visible borders.",
      tip: "Use CSS instead of deprecated HTML border attributes.",
    },

    {
      title: "Colspan Attribute",
      content: `
The colspan attribute allows a cell to span multiple columns.

Syntax:

colspan="number"

Common Uses:

• Table Titles
• Category Headers
• Merged Columns
      `,
      code: `<table>

<tr>

<th colspan="2">
Student Information
</th>

</tr>

<tr>

<td>Name</td>

<td>Harish</td>

</tr>

</table>`,
      language: "html",
      output: "The header cell covers two columns.",
    },

    {
      title: "Rowspan Attribute",
      content: `
The rowspan attribute allows a cell to span multiple rows.

Syntax:

rowspan="number"

It is useful when one value applies to multiple rows.
      `,
      code: `<table>

<tr>

<td rowspan="2">
HTML
</td>

<td>
Beginner
</td>

</tr>


<tr>

<td>
Advanced
</td>

</tr>

</table>`,
      language: "html",
      output: "The HTML cell covers two rows.",
    },

    {
      title: "HTML Forms",
      content: `
HTML forms collect user information.

Common Uses:

• Login Pages
• Registration Forms
• Search Boxes
• Contact Forms
• Feedback Forms

Main Form Tags:

<form>
<input>
<label>
<textarea>
<select>
<button>
      `,
      code: `<form>

<label>Name</label>

<input type="text">

<button>
Submit
</button>

</form>`,
      language: "html",
      output: "A simple form containing an input field and button is displayed.",
    },

    {
      title: "Form Action Attribute",
      content: `
The action attribute defines where form data is sent after submission.

Usually points to:

• Backend API
• Server Script
• Database Handler
      `,
      code: `<form action="/submit">

<input type="text">

<button>
Submit
</button>

</form>`,
      language: "html",
      output: "The form data is submitted to the /submit URL.",
    },

    {
      title: "Form Method Attribute",
      content: `
The method attribute defines how form data is sent.

Two Common Methods:

GET

• Data appears in URL
• Used for search forms

POST

• Data is hidden
• Used for sensitive information
      `,
      code: `<form method="POST">

<input 
type="password">

<button>
Login
</button>

</form>`,
      language: "html",
      output: "The form sends data using POST method.",
      tip: "Use POST for passwords and private information.",
    },

    {
      title: "HTML Input Element",
      content: `
The <input> tag creates form controls.

Common Attributes:

type
name
value
placeholder
required
readonly
disabled

Input elements are self-closing tags.
      `,
      code: `<input 
type="text"
placeholder="Enter Name">`,
      language: "html",
      output: "A text input field is displayed.",
    },

    {
      title: "Text Input",
      content: `
The text input allows users to enter single-line text.

Common Uses:

• Name
• Username
• Search
• Address
      `,
      code: `<input 
type="text"
placeholder="Enter Name">`,
      language: "html",
      output: "A text input box appears.",
    },

    {
      title: "Password Input",
      content: `
Password input hides entered characters.

Common Uses:

• Login Password
• Account Security
      `,
      code: `<input 
type="password"
placeholder="Password">`,
      language: "html",
      output: "Entered characters appear hidden.",
    },

    {
      title: "Email Input",
      content: `
Email input is designed for email addresses.

Benefits:

• Built-in validation
• Mobile keyboard optimization
      `,
      code: `<input 
type="email"
placeholder="Email Address">`,
      language: "html",
      output: "An email input field is displayed.",
    },

    {
      title: "Number Input",
      content: `
Number input accepts numeric values.

Common Attributes:

min
max
step

Used for:

• Age
• Quantity
• Price
      `,
      code: `<input

type="number"

min="1"

max="100"

>`,
      language: "html",
      output: "A numeric input field is displayed.",
    },    {
      title: "Radio Button Input",
      content: `
Radio buttons allow users to select only one option from a group.

Common Uses:

• Gender Selection
• Payment Methods
• Quiz Answers
• Preferences

Radio buttons with the same name attribute belong to one group.
      `,
      code: `<p>Select Gender:</p>

<input 
type="radio"
name="gender"
value="male">

Male


<input 
type="radio"
name="gender"
value="female">

Female`,
      language: "html",
      output: "Only one option can be selected at a time.",
      tip: "Use the same name attribute to group radio buttons.",
    },

    {
      title: "Checkbox Input",
      content: `
Checkboxes allow users to select multiple options.

Common Uses:

• Hobbies
• Skills
• Terms Agreement
• Multiple Choices
      `,
      code: `<p>Select Skills:</p>

<input 
type="checkbox">

HTML

<br>

<input 
type="checkbox">

CSS

<br>

<input 
type="checkbox">

JavaScript`,
      language: "html",
      output: "Multiple options can be selected.",
      tip: "Use checkboxes when users can select more than one option.",
    },

    {
      title: "File Upload Input",
      content: `
The file input allows users to upload files.

Common Uses:

• Profile Images
• Documents
• Resumes
• Attachments
      `,
      code: `<label>
Upload File:
</label>

<input 
type="file">`,
      language: "html",
      output: "A file selection button is displayed.",
      tip: "Use the accept attribute to restrict file types.",
    },

    {
      title: "File Type Restriction",
      content: `
The accept attribute specifies allowed file formats.

Common Values:

image/*
.pdf
.doc
.video/*
.audio/*
      `,
      code: `<input

type="file"

accept="image/*"

>`,
      language: "html",
      output: "Only image files can be selected.",
    },

    {
      title: "Date Input",
      content: `
The date input allows users to select a date.

Common Uses:

• Birth Date
• Booking Forms
• Appointments
      `,
      code: `<label>
Date of Birth:
</label>

<input 
type="date">`,
      language: "html",
      output: "A date picker is displayed.",
    },

    {
      title: "Time Input",
      content: `
The time input allows users to select a specific time.

Used for:

• Meetings
• Appointments
• Schedules
      `,
      code: `<input 
type="time">`,
      language: "html",
      output: "A time selection field is displayed.",
    },

    {
      title: "Datetime Input",
      content: `
The datetime-local input allows users to select both date and time.

It does not include timezone information.
      `,
      code: `<input

type="datetime-local"

>`,
      language: "html",
      output: "A date and time picker is displayed.",
    },

    {
      title: "Month Input",
      content: `
The month input allows users to select a month and year.

Common Uses:

• Reports
• Billing Periods
• Subscriptions
      `,
      code: `<input

type="month"

>`,
      language: "html",
      output: "A month selection control appears.",
    },

    {
      title: "Week Input",
      content: `
The week input allows users to select a specific week.

Common Uses:

• Weekly Reports
• Scheduling Systems
      `,
      code: `<input

type="week"

>`,
      language: "html",
      output: "A week picker is displayed.",
    },

    {
      title: "Color Input",
      content: `
The color input allows users to select colors.

Common Uses:

• Theme Customization
• Design Tools
• Editors
      `,
      code: `<label>

Choose Color:

</label>

<input

type="color"

>`,
      language: "html",
      output: "A color picker is displayed.",
    },

    {
      title: "Range Input",
      content: `
The range input creates a slider.

Common Uses:

• Volume Control
• Price Filters
• Brightness
• Ratings

Attributes:

min
max
step
value
      `,
      code: `<input

type="range"

min="0"

max="100"

value="50"

>`,
      language: "html",
      output: "A slider ranging from 0 to 100 is displayed.",
    },

    {
      title: "Search Input",
      content: `
The search input is designed for search fields.

Benefits:

• Better browser support
• Mobile optimization
• Clear button support
      `,
      code: `<input

type="search"

placeholder="Search..."

>`,
      language: "html",
      output: "A search box is displayed.",
    },

    {
      title: "Telephone Input",
      content: `
The tel input is used for phone numbers.

It provides a phone-friendly keyboard on mobile devices.
      `,
      code: `<input

type="tel"

placeholder="Phone Number"

>`,
      language: "html",
      output: "A telephone input field is displayed.",
    },

    {
      title: "URL Input",
      content: `
The URL input accepts website addresses.

Browsers provide automatic validation.
      `,
      code: `<input

type="url"

placeholder="Website URL"

>`,
      language: "html",
      output: "A URL input field is displayed.",
    },

    {
      title: "Textarea Element",
      content: `
The textarea element creates a multi-line text field.

Common Uses:

• Comments
• Messages
• Reviews
• Descriptions

Attributes:

rows
cols
placeholder
maxlength
      `,
      code: `<textarea

rows="5"

cols="30"

placeholder="Write message">

</textarea>`,
      language: "html",
      output: "A multi-line text box is displayed.",
      tip: "Use textarea instead of input when multiple lines are required.",
    },

    {
      title: "Select Dropdown",
      content: `
The select element creates a dropdown menu.

It contains option elements.

Common Uses:

• Country Selection
• Category Selection
• Filters
      `,
      code: `<select>

<option>
India
</option>

<option>
USA
</option>

<option>
UK
</option>

</select>`,
      language: "html",
      output: "A dropdown list containing countries is displayed.",
    },

    {
      title: "Option Groups",
      content: `
The <optgroup> tag groups related options inside a dropdown.

It improves organization in large lists.
      `,
      code: `<select>

<optgroup label="Frontend">

<option>
HTML
</option>

<option>
CSS
</option>

</optgroup>


<optgroup label="Backend">

<option>
Node.js
</option>

</optgroup>

</select>`,
      language: "html",
      output: "Dropdown options are grouped into categories.",
    },

    {
      title: "Datalist Element",
      content: `
The datalist provides predefined suggestions for an input field.

Users can select suggestions or enter custom values.
      `,
      code: `<input 
list="languages">


<datalist id="languages">

<option value="HTML">

<option value="CSS">

<option value="JavaScript">

</datalist>`,
      language: "html",
      output: "Suggestions appear while typing.",
      tip: "Datalist improves user experience for searchable inputs.",
    },

    {
      title: "Form Validation Attributes",
      content: `
HTML5 provides built-in form validation.

Common Attributes:

required
minlength
maxlength
min
max
pattern
      `,
      code: `<input

type="email"

required

placeholder="Email"

>`,
      language: "html",
      output: "The form cannot submit without a valid email.",
      tip: "HTML validation reduces the need for basic JavaScript validation.",
    },    {
      title: "HTML Label Element",
      content: `
The <label> element defines a label for form controls.

Benefits:

• Improves Accessibility
• Better User Experience
• Clicking label focuses input

The for attribute connects the label with an input id.
      `,
      code: `<label for="name">

Name:

</label>


<input

type="text"

id="name"

>`,
      language: "html",
      output: "Clicking the label focuses the input field.",
      tip: "Always use labels with form inputs for accessibility.",
    },

    {
      title: "Input Placeholder Attribute",
      content: `
The placeholder attribute displays a hint inside an input field.

It disappears when the user starts typing.

Common Uses:

• Examples
• Instructions
• Input Format
      `,
      code: `<input

type="text"

placeholder="Enter your name"

>`,
      language: "html",
      output: "The input displays 'Enter your name' as a hint.",
      tip: "Do not use placeholders as a replacement for labels.",
    },

    {
      title: "Input Required Attribute",
      content: `
The required attribute makes an input mandatory.

The form cannot submit until the field is completed.
      `,
      code: `<input

type="email"

required

>`,
      language: "html",
      output: "The browser requires an email before submitting the form.",
    },

    {
      title: "Input Readonly Attribute",
      content: `
Readonly fields cannot be edited by users.

The value is still submitted with the form.

Common Uses:

• User ID
• Generated Values
• Fixed Information
      `,
      code: `<input

type="text"

value="Harish"

readonly

>`,
      language: "html",
      output: "The text is visible but cannot be modified.",
    },

    {
      title: "Input Disabled Attribute",
      content: `
Disabled inputs cannot be focused or submitted.

They are usually used for unavailable options.
      `,
      code: `<input

type="text"

value="Disabled"

disabled

>`,
      language: "html",
      output: "The input appears disabled and cannot be changed.",
      tip: "Use disabled only when users should not interact with the element.",
    },

    {
      title: "Input Min and Max Attributes",
      content: `
The min and max attributes define allowed ranges.

Commonly used with:

• Number
• Date
• Range
      `,
      code: `<input

type="number"

min="1"

max="100"

>`,
      language: "html",
      output: "Only numbers between 1 and 100 are accepted.",
    },

    {
      title: "Input Pattern Attribute",
      content: `
The pattern attribute defines a regular expression for validation.

It is useful for:

• Phone Numbers
• Usernames
• Custom Formats
      `,
      code: `<input

type="text"

pattern="[A-Za-z]{5,}"

>`,
      language: "html",
      output: "Only text values with minimum 5 letters are accepted.",
      tip: "Pattern validation works with the required attribute.",
    },

    {
      title: "HTML Audio Element",
      content: `
The <audio> element is used to add sound to webpages.

Supported Formats:

• MP3
• WAV
• OGG

Common Attributes:

controls
autoplay
loop
muted
      `,
      code: `<audio controls>

<source

src="music.mp3"

type="audio/mp3">

</audio>`,
      language: "html",
      output: "An audio player is displayed.",
      tip: "Always provide controls so users can control playback.",
    },

    {
      title: "HTML Video Element",
      content: `
The <video> element adds videos to webpages.

Supported Formats:

• MP4
• WebM
• OGG

Common Attributes:

controls
width
height
autoplay
loop
poster
      `,
      code: `<video

width="400"

controls>

<source

src="video.mp4"

type="video/mp4">

</video>`,
      language: "html",
      output: "A video player is displayed.",
    },

    {
      title: "Video Poster Attribute",
      content: `
The poster attribute displays an image before the video starts.

It works like a thumbnail.
      `,
      code: `<video

controls

poster="thumbnail.jpg">

<source

src="video.mp4">

</video>`,
      language: "html",
      output: "The thumbnail image appears before video playback.",
      tip: "Use posters to improve video appearance.",
    },

    {
      title: "Embedding YouTube Videos",
      content: `
YouTube videos can be embedded using an iframe.

Benefits:

• No video hosting required
• Easy sharing
• Responsive embedding
      `,
      code: `<iframe

width="560"

height="315"

src="https://youtube.com/embed/videoID">

</iframe>`,
      language: "html",
      output: "A YouTube video appears inside the webpage.",
    },

    {
      title: "HTML iframe Element",
      content: `
The iframe element embeds another webpage inside the current page.

Common Uses:

• Maps
• Videos
• External Pages
• Documents
      `,
      code: `<iframe

src="https://example.com"

width="500"

height="300">

</iframe>`,
      language: "html",
      output: "Another webpage is displayed inside the iframe.",
      tip: "Avoid embedding untrusted websites for security reasons.",
    },

    {
      title: "HTML Canvas",
      content: `
The <canvas> element creates a drawing area.

It is controlled using JavaScript.

Used for:

• Games
• Charts
• Animations
• Graphics
      `,
      code: `<canvas

id="myCanvas"

width="400"

height="200">

</canvas>`,
      language: "html",
      output: "A blank drawing area is created.",
      tip: "Canvas requires JavaScript for drawing operations.",
    },

    {
      title: "HTML SVG",
      content: `
SVG (Scalable Vector Graphics) is used to create vector graphics.

Advantages:

• Scalable without quality loss
• Small file size
• Editable with code

Used for:

• Icons
• Logos
• Charts
      `,
      code: `<svg

width="100"

height="100">

<circle

cx="50"

cy="50"

r="40"

fill="blue"

/>

</svg>`,
      language: "html",
      output: "A blue circle is displayed using SVG.",
    },

    {
      title: "Meta Tags",
      content: `
Meta tags provide information about a webpage.

They are placed inside the <head> section.

Common Meta Tags:

charset
viewport
description
keywords
author
      `,
      code: `<head>

<meta charset="UTF-8">

<meta

name="viewport"

content="width=device-width, initial-scale=1.0">

</head>`,
      language: "html",
      output: "The webpage is configured for proper encoding and responsive design.",
      tip: "The viewport meta tag is important for mobile-friendly websites.",
    },

    {
      title: "SEO Meta Description",
      content: `
The description meta tag provides a summary of a webpage.

Search engines may display it in results.

Good descriptions improve click-through rates.
      `,
      code: `<meta

name="description"

content="Learn HTML programming with examples">

`,
      language: "html",
      output: "Search engines can understand the page description.",
    },

    {
      title: "HTML Geolocation API",
      content: `
The Geolocation API allows websites to access the user's location.

Common Uses:

• Maps
• Delivery Apps
• Weather Applications

It requires user permission.
      `,
      code: `<script>

navigator.geolocation.getCurrentPosition(
(position)=>{

console.log(
position.coords.latitude
);

});

</script>`,
      language: "html",
      output: "The browser requests permission and provides location data.",
      tip: "Geolocation works only after user approval.",
    },

    {
      title: "HTML Drag and Drop API",
      content: `
The Drag and Drop API allows users to move elements using mouse actions.

Common Uses:

• File Upload
• Kanban Boards
• Games
      `,
      code: `<div draggable="true">

Drag Me

</div>`,
      language: "html",
      output: "The element becomes draggable.",
    },    {
      title: "HTML Web Storage",
      content: `
HTML5 provides Web Storage APIs to store data inside the browser.

Types:

1. Local Storage

• Data remains after closing the browser.
• Stores data permanently until removed.

2. Session Storage

• Data exists only during the browser session.
• Removed when the tab is closed.

Web Storage stores data as key-value pairs.
      `,
      code: `<script>

localStorage.setItem(
    "username",
    "Harish"
);


let user = localStorage.getItem(
    "username"
);


console.log(user);

</script>`,
      language: "html",
      output: "Harish",
      tip: "Use localStorage for preferences and sessionStorage for temporary data.",
    },

    {
      title: "Local Storage",
      content: `
Local Storage allows websites to save information permanently in the browser.

Common Uses:

• Theme Preferences
• User Settings
• Shopping Cart Data
• Language Selection

Storage Limit is usually around 5-10 MB depending on browser.
      `,
      code: `<script>

localStorage.setItem(
    "theme",
    "dark"
);


console.log(
localStorage.getItem("theme")
);

</script>`,
      language: "html",
      output: "dark",
      tip: "Never store sensitive information like passwords in localStorage.",
    },

    {
      title: "Session Storage",
      content: `
Session Storage stores data only for the current browser tab.

Data is automatically deleted when the tab is closed.

Common Uses:

• Temporary Login State
• Form Data
• One-Time Settings
      `,
      code: `<script>

sessionStorage.setItem(
    "status",
    "active"
);


console.log(
sessionStorage.getItem("status")
);

</script>`,
      language: "html",
      output: "active",
    },

    {
      title: "Responsive HTML Design",
      content: `
Responsive design allows websites to work properly on:

• Desktop
• Tablet
• Mobile

HTML supports responsive design with:

• Viewport Meta Tag
• Flexible Content
• Responsive Images
• CSS Media Queries
      `,
      code: `<meta

name="viewport"

content="width=device-width, initial-scale=1.0">

`,
      language: "html",
      output: "The webpage adjusts according to device size.",
      tip: "Always include viewport meta tag for mobile websites.",
    },

    {
      title: "Responsive Images",
      content: `
Responsive images adjust according to screen size.

Techniques:

• CSS width
• Picture element
• srcset attribute

This improves loading speed and user experience.
      `,
      code: `<img

src="image.jpg"

style="max-width:100%;height:auto;"

alt="Responsive Image">

`,
      language: "html",
      output: "The image automatically adjusts to the container width.",
    },

    {
      title: "Picture Element",
      content: `
The <picture> element provides different images for different devices.

Benefits:

• Better Performance
• Art Direction
• Responsive Images
      `,
      code: `<picture>

<source

media="(max-width:600px)"

srcset="mobile.jpg">


<img

src="desktop.jpg"

alt="Image">

</picture>`,
      language: "html",
      output: "Different images load depending on screen size.",
      tip: "Use picture when mobile and desktop need different images.",
    },

    {
      title: "HTML Accessibility",
      content: `
Accessibility ensures websites can be used by everyone.

Including users with:

• Visual disabilities
• Hearing disabilities
• Motor disabilities

HTML accessibility practices improve user experience.
      `,
      code: `<img

src="logo.png"

alt="Company Logo">


<button>

Submit

</button>`,
      language: "html",
      output: "The image provides alternative text for screen readers.",
      tip: "Always write meaningful alt text for images.",
    },

    {
      title: "ARIA Attributes",
      content: `
ARIA (Accessible Rich Internet Applications) provides additional information for assistive technologies.

Common ARIA Attributes:

aria-label

aria-hidden

aria-expanded

aria-required

aria-live
      `,
      code: `<button

aria-label="Close Menu">

X

</button>`,
      language: "html",
      output: "Screen readers understand the button purpose.",
      tip: "Use native HTML elements before adding ARIA attributes.",
    },

    {
      title: "HTML SEO Basics",
      content: `
SEO helps search engines understand webpage content.

HTML SEO Practices:

• Use proper headings
• Add meta description
• Use semantic HTML
• Optimize images
• Create meaningful titles
• Use alt attributes
      `,
      code: `<title>

Learn HTML Programming

</title>


<meta

name="description"

content="Complete HTML course">

`,
      language: "html",
      output: "Search engines receive information about the webpage.",
    },

    {
      title: "HTML Document SEO Structure",
      content: `
A good SEO-friendly structure includes:

<header>

<nav>

<main>

<section>

<article>

<footer>

Semantic structure improves search engine understanding.
      `,
      code: `<body>

<header>
Website Logo
</header>


<main>

<article>
Content
</article>

</main>


<footer>
Copyright
</footer>

</body>`,
      language: "html",
      output: "A semantic SEO-friendly webpage structure is created.",
    },

    {
      title: "Complete Website HTML Structure",
      content: `
A professional website usually follows this structure:

DOCTYPE

HTML

HEAD

BODY

Header

Navigation

Main Content

Footer
      `,
      code: `<!DOCTYPE html>

<html>

<head>

<title>
My Website
</title>

</head>


<body>


<header>

Logo

</header>


<nav>

Menu

</nav>


<main>

Content

</main>


<footer>

Copyright

</footer>


</body>

</html>`,
      language: "html",
      output: "A complete webpage skeleton is created.",
    },

    {
      title: "Portfolio Website Structure",
      content: `
A portfolio website commonly contains:

• Home Section
• About Section
• Skills Section
• Projects Section
• Contact Section

HTML provides the structure while CSS provides the design.
      `,
      code: `<body>


<header>

<h1>
Harish Portfolio
</h1>

</header>


<section id="about">

<h2>
About Me
</h2>

</section>


<section id="projects">

<h2>
Projects
</h2>

</section>


<footer>

Contact

</footer>


</body>`,
      language: "html",
      output: "A basic portfolio webpage structure is created.",
    },

    {
      title: "HTML Best Practices",
      content: `
Follow these HTML best practices:

✓ Use semantic elements

✓ Write clean indentation

✓ Add alt text to images

✓ Use meaningful names

✓ Keep HTML simple

✓ Validate HTML code

✓ Avoid unnecessary tags
      `,
      tip: "Clean HTML improves performance, accessibility, and maintainability.",
    },

    {
      title: "HTML Validation",
      content: `
HTML validation checks whether your code follows HTML standards.

Benefits:

• Finds errors
• Improves compatibility
• Ensures clean markup

The W3C Validator is commonly used.
      `,
      code: `<!DOCTYPE html>

<html>

<head>

<title>
Valid HTML
</title>

</head>

<body>

<h1>
Hello HTML
</h1>

</body>

</html>`,
      language: "html",
      output: "The document follows valid HTML structure.",
    },    {
      title: "HTML5 Web Workers",
      content: `
Web Workers allow JavaScript to run in the background without blocking the webpage.

Normally JavaScript runs on a single thread.

Web Workers are useful for:

• Heavy Calculations
• Data Processing
• Large Loops
• Background Tasks

They improve website performance.
      `,
      code: `// main.js

let worker = new Worker("worker.js");


worker.postMessage(
    "Start Work"
);


worker.onmessage = function(event){

    console.log(event.data);

};`,
      language: "html",
      output: "Background tasks execute without freezing the webpage.",
      tip: "Use Web Workers for tasks that require heavy processing.",
    },

    {
      title: "HTML Server-Sent Events (SSE)",
      content: `
Server-Sent Events allow servers to automatically send updates to browsers.

Unlike WebSockets:

SSE:
• One-way communication
• Server → Browser

WebSocket:
• Two-way communication
• Client ↔ Server

Common Uses:

• Live Notifications
• News Updates
• Stock Prices
      `,
      code: `<script>

let eventSource =
new EventSource("updates.php");


eventSource.onmessage =
function(event){

console.log(event.data);

};

</script>`,
      language: "html",
      output: "The browser receives automatic updates from the server.",
    },

    {
      title: "HTML Custom Data Attributes",
      content: `
Custom data attributes store extra information inside HTML elements.

Syntax:

data-name="value"

They are accessed using JavaScript.

Common Uses:

• Storing IDs
• Configurations
• Dynamic Data
      `,
      code: `<button

data-user="101">

Profile

</button>


<script>

console.log(
button.dataset.user
);

</script>`,
      language: "html",
      output: "Custom data values can be accessed using JavaScript.",
      tip: "Use data attributes instead of adding unnecessary classes.",
    },

    {
      title: "HTML Template Element",
      content: `
The <template> element stores HTML content that is not displayed immediately.

It can be cloned and inserted using JavaScript.

Common Uses:

• Dynamic Cards
• Lists
• Components
      `,
      code: `<template id="card">

<div class="card">

<h2>
Title
</h2>

</div>

</template>`,
      language: "html",
      output: "The template remains hidden until used with JavaScript.",
    },

    {
      title: "HTML Dialog Element",
      content: `
The <dialog> element creates popup dialogs.

Common Uses:

• Login Popup
• Confirmation Boxes
• Alerts
• Modals
      `,
      code: `<dialog open>

<h2>
Welcome
</h2>

<p>
This is a dialog box.
</p>

</dialog>`,
      language: "html",
      output: "A dialog popup is displayed.",
      tip: "Use dialog instead of creating custom modals from scratch.",
    },

    {
      title: "HTML Details Element",
      content: `
The <details> element creates expandable content.

It contains:

<summary>
Visible heading

Hidden content
      `,
      code: `<details>

<summary>
Click Here
</summary>


<p>

More information appears.

</p>


</details>`,
      language: "html",
      output: "Clicking the summary expands additional information.",
      tip: "Useful for FAQs and collapsible sections.",
    },

    {
      title: "HTML Summary Element",
      content: `
The <summary> element defines the visible heading of a details element.

It acts like a clickable title.
      `,
      code: `<details>

<summary>
HTML Features
</summary>

<p>
Easy and powerful.
</p>

</details>`,
      language: "html",
      output: "A clickable expandable heading is created.",
    },

    {
      title: "HTML Progress Element",
      content: `
The <progress> element displays the progress of a task.

Common Uses:

• File Upload
• Downloads
• Loading Status
      `,
      code: `<label>

Uploading:

</label>


<progress

value="70"

max="100">

</progress>`,
      language: "html",
      output: "A progress bar showing 70% completion is displayed.",
    },

    {
      title: "HTML Meter Element",
      content: `
The <meter> element represents a measurement within a known range.

Common Uses:

• Disk Usage
• Ratings
• Scores
• Performance
      `,
      code: `<meter

value="7"

min="0"

max="10">

</meter>`,
      language: "html",
      output: "A meter displaying a value between 0 and 10 is shown.",
    },

    {
      title: "HTML Microdata",
      content: `
Microdata adds extra information to HTML content.

It helps search engines understand data.

Common Uses:

• Products
• Reviews
• Events
• People

Main Attributes:

itemscope

itemtype

itemprop
      `,
      code: `<div

itemscope

itemtype="https://schema.org/Person">


<span

itemprop="name">

Harish

</span>


</div>`,
      language: "html",
      output: "Search engines can understand the person information.",
      tip: "Microdata improves structured search results.",
    },

    {
      title: "HTML Structured Data",
      content: `
Structured data helps search engines display rich results.

Examples:

• Product Ratings
• Recipes
• Events
• Articles

Usually implemented using Schema.org vocabulary.
      `,
      code: `<script type="application/ld+json">

{

"@context":
"https://schema.org",

"@type":
"Person",

"name":
"Harish"

}

</script>`,
      language: "html",
      output: "Search engines receive structured information.",
    },

    {
      title: "HTML Accessibility Best Practices",
      content: `
Accessible websites work for all users.

Best Practices:

✓ Use semantic tags

✓ Provide alt text

✓ Use labels

✓ Maintain keyboard navigation

✓ Use proper headings

✓ Provide ARIA when needed
      `,
      code: `<button

aria-label="Open Menu">

☰

</button>`,
      language: "html",
      output: "Screen readers can understand the button purpose.",
    },

    {
      title: "HTML Performance Optimization",
      content: `
HTML optimization improves website speed.

Techniques:

• Compress images
• Use semantic structure
• Reduce unnecessary elements
• Load resources efficiently
• Use lazy loading
      `,
      code: `<img

src="image.jpg"

loading="lazy"

alt="Example">

`,
      language: "html",
      output: "The image loads only when needed.",
      tip: "Lazy loading improves page performance.",
    },

    {
      title: "HTML Lazy Loading",
      content: `
Lazy loading delays loading resources until they are required.

Used for:

• Images
• Videos
• Iframes

Benefits:

• Faster Initial Load
• Less Bandwidth Usage
      `,
      code: `<img

src="photo.jpg"

loading="lazy"

alt="Photo">

`,
      language: "html",
      output: "The image loads when it approaches the viewport.",
    },

    {
      title: "HTML Security Practices",
      content: `
Important HTML security practices:

• Avoid unsafe external content
• Validate user input
• Use HTTPS
• Prevent malicious scripts
• Avoid exposing sensitive data

HTML works together with backend security.
      `,
      tip: "Never trust user input directly without validation.",
    },

    {
      title: "HTML5 Project Structure",
      content: `
A professional HTML project structure:

project/

├── index.html

├── pages/

├── images/

├── assets/

├── css/

├── js/

└── fonts/


Organized projects are easier to maintain.
      `,
      code: `project

|

|-- index.html

|-- css

|-- js

|-- images`,
      language: "html",
      output: "A clean website folder structure is created.",
    },    {
      title: "Complete HTML Website Project Structure",
      content: `
A real-world website contains multiple sections organized properly.

Example Structure:

• Header
• Navigation
• Hero Section
• About Section
• Services Section
• Projects Section
• Contact Section
• Footer

HTML creates the structure while CSS and JavaScript add design and functionality.
      `,
      code: `<!DOCTYPE html>

<html>

<head>

<title>
My Website
</title>

</head>


<body>


<header>

<h1>
My Website
</h1>

</header>


<nav>

<a href="#">
Home
</a>

<a href="#">
About
</a>

</nav>


<main>

<section>

<h2>
Welcome
</h2>

</section>


</main>


<footer>

<p>
© 2026 Website
</p>

</footer>


</body>

</html>`,
      language: "html",
      output: "A complete basic website structure is created.",
      tip: "Plan your HTML structure before writing CSS.",
    },

    {
      title: "Landing Page HTML Structure",
      content: `
A landing page focuses on presenting one product, service, or idea.

Common Sections:

• Hero Section
• Features
• Benefits
• Testimonials
• Call To Action
• Footer
      `,
      code: `<section class="hero">

<h1>
Build Amazing Websites
</h1>

<p>
Learn HTML and CSS easily.
</p>


<button>
Get Started
</button>

</section>`,
      language: "html",
      output: "A simple landing page hero section is created.",
    },

    {
      title: "Portfolio Website HTML",
      content: `
A portfolio website showcases personal skills and projects.

Common Sections:

• Profile
• Skills
• Projects
• Experience
• Contact
      `,
      code: `<section id="profile">

<h1>
Harish Singh
</h1>

<p>
Frontend Developer
</p>

</section>


<section id="skills">

<h2>
Skills
</h2>

<ul>

<li>
HTML
</li>

<li>
CSS
</li>

<li>
JavaScript
</li>

</ul>

</section>`,
      language: "html",
      output: "A basic developer portfolio structure is created.",
    },

    {
      title: "Blog Website HTML Layout",
      content: `
A blog website contains articles and posts.

Important Elements:

• Article
• Author Information
• Date
• Categories
• Comments
      `,
      code: `<article>

<h1>
Learning HTML
</h1>


<p>
Published: July 2026
</p>


<p>

HTML is the foundation of web development.

</p>


</article>`,
      language: "html",
      output: "A blog article structure is created.",
      tip: "Use article tags for independent blog content.",
    },

    {
      title: "E-Commerce Website HTML Layout",
      content: `
An e-commerce website displays products and shopping information.

Common Sections:

• Product Cards
• Categories
• Shopping Cart
• Checkout
• Reviews
      `,
      code: `<section>

<h2>
Products
</h2>


<div>

<img

src="product.jpg"

alt="Product">


<h3>
Laptop
</h3>


<p>
₹50000
</p>


<button>
Buy Now
</button>


</div>


</section>`,
      language: "html",
      output: "A simple product card is created.",
    },

    {
      title: "Login Form Project",
      content: `
Login forms are used for user authentication.

Common Fields:

• Email
• Password
• Remember Me
• Login Button
• Forgot Password
      `,
      code: `<form>


<label>
Email
</label>


<input

type="email"

required>


<label>
Password
</label>


<input

type="password"

required>


<button>

Login

</button>


</form>`,
      language: "html",
      output: "A basic login form is created.",
      tip: "Use backend authentication to securely process login data.",
    },

    {
      title: "Registration Form Project",
      content: `
Registration forms collect new user information.

Common Fields:

• Name
• Email
• Password
• Phone
• Date of Birth
• Terms Agreement
      `,
      code: `<form>


<input

type="text"

placeholder="Full Name">


<input

type="email"

placeholder="Email">


<input

type="password"

placeholder="Password">


<button>

Register

</button>


</form>`,
      language: "html",
      output: "A user registration form is created.",
    },

    {
      title: "Contact Form Project",
      content: `
Contact forms allow visitors to send messages.

Common Fields:

• Name
• Email
• Message
• Submit Button
      `,
      code: `<form>


<input

type="text"

placeholder="Name">


<input

type="email"

placeholder="Email">


<textarea

placeholder="Message">

</textarea>


<button>

Send

</button>


</form>`,
      language: "html",
      output: "A contact form layout is created.",
    },

    {
      title: "HTML Interview Questions",
      content: `
Common HTML Interview Questions:

1. What is HTML?

HTML is a markup language used to create webpage structures.

2. Difference between HTML and HTML5?

HTML5 introduces multimedia, semantic tags, and modern APIs.

3. What are semantic elements?

Elements that describe their meaning, like header, article, and footer.

4. What is the purpose of DOCTYPE?

It tells the browser which HTML version is being used.
      `,
    },

    {
      title: "HTML Important Tags Cheat Sheet",
      content: `
Document:

<!DOCTYPE>
<html>
<head>
<body>

Text:

<h1>-<h6>
<p>
<br>
<hr>

Links:

<a>

Images:

<img>

Lists:

<ul>
<ol>
<li>

Tables:

<table>
<tr>
<th>
<td>

Forms:

<form>
<input>
<button>
<textarea>

Semantic:

<header>
<nav>
<section>
<article>
<footer>
      `,
    },

    {
      title: "HTML Attributes Cheat Sheet",
      content: `
Common HTML Attributes:

id
Unique identifier

class
CSS grouping

style
Inline CSS

href
Link destination

src
Resource location

alt
Image description

title
Extra information

name
Form identification

value
Input value

placeholder
Input hint
      `,
    },

    {
      title: "HTML Final Best Practices",
      content: `
Professional HTML development rules:

✓ Write semantic HTML

✓ Keep structure clean

✓ Use proper indentation

✓ Optimize images

✓ Add accessibility support

✓ Use meaningful names

✓ Validate your code

✓ Follow SEO practices

✓ Avoid unnecessary elements

✓ Keep HTML separate from CSS and JavaScript
      `,
      tip: "Clean HTML is the foundation of professional web development.",
    },

    {
      title: "HTML Course Completed",
      content: `
Congratulations 🎉

You have completed HTML from beginner to advanced level.

You learned:

✓ HTML Structure

✓ Elements and Attributes

✓ Forms

✓ Tables

✓ Multimedia

✓ Semantic HTML

✓ Accessibility

✓ SEO

✓ HTML5 APIs

✓ Real Website Structures


Next Step:

Learn CSS to design beautiful and responsive websites.
      `,
    },
  ],
};