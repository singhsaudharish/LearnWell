export const cssContent = {
  title: "CSS (Cascading Style Sheets)",
  description:
    "Learn CSS from beginner to advanced with practical examples, layouts, responsive design, animations, Flexbox, Grid, and modern CSS features.",

  sections: [
    {
      title: "Introduction to CSS",
      content: `
CSS (Cascading Style Sheets) is a stylesheet language used to control the appearance and layout of HTML documents.

CSS separates the presentation layer from the content, making web pages more attractive and easier to maintain.

CSS is used for:

• Styling web pages
• Creating responsive layouts
• Adding animations
• Controlling colors and typography
• Building modern user interfaces

Every modern website uses CSS together with HTML and JavaScript.
      `,
    },

    {
      title: "History of CSS",
      content: `
CSS was proposed by Håkon Wium Lie in 1994.

Versions of CSS:

• CSS1 (1996)
• CSS2 (1998)
• CSS2.1 (2011)
• CSS3 (Modular Specifications)

Unlike earlier versions, CSS3 is divided into modules such as:

• Flexbox
• Grid
• Animations
• Transforms
• Transitions
• Media Queries

New CSS features continue to be added through individual modules instead of releasing CSS4.
      `,
    },

    {
      title: "Features of CSS",
      content: `
Major Features of CSS:

• Easy Styling
• Responsive Design
• Reusable Styles
• Better Website Performance
• Modern Layout Systems
• Animations
• Transitions
• Custom Properties (Variables)
• Flexbox
• CSS Grid

Advantages:

✓ Cleaner HTML
✓ Faster Development
✓ Easy Maintenance
✓ Consistent Design
✓ Better User Experience
      `,
    },

    {
      title: "Advantages of CSS",
      content: `
Benefits of using CSS:

• Separates content from presentation
• Reduces code duplication
• Improves page loading speed
• Makes websites responsive
• Easier to maintain large websites
• Supports multiple devices
• Improves accessibility
• Compatible with all modern browsers
      `,
    },

    {
      title: "Basic CSS Syntax",
      content: `
CSS consists of selectors and declaration blocks.

Syntax:

selector {
    property: value;
}

A declaration contains:

• Property
• Value

Each declaration ends with a semicolon.
      `,
      code: `h1 {
    color: blue;
    font-size: 40px;
}`,
      language: "css",
      output: "The heading text appears in blue with a font size of 40 pixels.",
      tip: "Always end CSS declarations with a semicolon, even if it is the last property.",
    },

    {
      title: "Ways to Add CSS",
      content: `
CSS can be added to HTML in three ways.

1. Inline CSS
2. Internal CSS
3. External CSS

External CSS is the most recommended approach because it keeps styling separate from HTML.
      `,
      code: `<!-- Inline CSS -->
<h1 style="color:red;">Hello</h1>

<!-- Internal CSS -->
<style>
h1{
    color:blue;
}
</style>

<!-- External CSS -->
<link rel="stylesheet" href="style.css">`,
      language: "html",
      output: "The heading color changes based on the applied CSS method.",
      tip: "Use external CSS for real-world projects to improve maintainability.",
    },

    {
      title: "Comments in CSS",
      content: `
Comments are used to explain CSS code.

Comments are ignored by the browser.

Syntax:

/* comment */

Comments improve readability and make code easier to maintain.
      `,
      code: `/* Main Heading */

h1{
    color: royalblue;
}

/* Navigation Bar */

nav{
    background-color: black;
}`,
      language: "css",
      output: "Comments do not affect the appearance of the webpage.",
    },

    {
      title: "CSS Selectors",
      content: `
Selectors are used to target HTML elements.

Common Selectors:

• Universal Selector (*)
• Element Selector
• Class Selector
• ID Selector
• Group Selector

Selectors determine which elements receive the specified styles.
      `,
      code: `*{
    margin:0;
}

h1{
    color:blue;
}

.title{
    color:green;
}

#header{
    background:black;
}

h1,p{
    font-family:Arial;
}`,
      language: "css",
      output: "Different styles are applied based on the selected HTML elements.",
      tip: "Prefer class selectors over ID selectors for reusable styles.",
    },

    {
      title: "CSS Colors",
      content: `
CSS supports multiple ways to specify colors.

Methods:

• Color Name
• HEX
• RGB
• RGBA
• HSL
• HSLA

Examples:

red
#3498db
rgb(52,152,219)
rgba(52,152,219,0.5)
hsl(204,70%,53%)
      `,
      code: `h1{
    color: royalblue;
}

p{
    color:#ff5722;
}

button{
    background:rgb(76,175,80);
    color:white;
}`,
      language: "css",
      output: "Elements display different text and background colors.",
      tip: "Use HEX or HSL values for consistent color management in large projects.",
    },

    {
      title: "CSS Backgrounds",
      content: `
The background properties control the appearance behind an element.

Common Properties:

background-color
background-image
background-repeat
background-position
background-size
background-attachment

Background images can create visually appealing websites.
      `,
      code: `body{
    background-color:#f5f5f5;
}

.hero{
    background-image:url("background.jpg");
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
}`,
      language: "css",
      output: "The page displays a light gray background, while the hero section shows a full-width background image.",
      tip: "Use background-size: cover for responsive hero images.",
    },
    {
      title: "Borders",
      content: `
Borders are used to create lines around HTML elements.

Common Border Properties:

border
border-width
border-style
border-color
border-radius

Common Border Styles:

solid
dashed
dotted
double
groove
ridge
none
      `,
      code: `.box{
    border:2px solid royalblue;
    border-radius:10px;
}`,
      language: "css",
      output: "A box appears with a 2px solid blue border and rounded corners.",
      tip: "Use border-radius to create rounded corners for modern UI designs.",
    },

    {
      title: "Margin",
      content: `
Margin creates space outside an element's border.

Properties:

margin
margin-top
margin-right
margin-bottom
margin-left

You can also use shorthand notation.
      `,
      code: `.card{
    margin:20px;
}

/* Shorthand */

.container{
    margin:20px 30px;
}`,
      language: "css",
      output: "The element has space outside its border.",
      tip: "Margins create spacing between neighboring elements.",
    },

    {
      title: "Padding",
      content: `
Padding creates space between an element's content and its border.

Properties:

padding
padding-top
padding-right
padding-bottom
padding-left

Padding increases the clickable area of elements like buttons.
      `,
      code: `button{
    padding:12px 24px;
}`,
      language: "css",
      output: "The button becomes larger with extra internal spacing.",
      tip: "Use padding instead of fixed height for flexible button sizes.",
    },

    {
      title: "Height and Width",
      content: `
The height and width properties define the size of an element.

Units:

px
%
vw
vh
rem
em
auto

Choose responsive units whenever possible.
      `,
      code: `.box{
    width:300px;
    height:200px;
}`,
      language: "css",
      output: "A box with a width of 300px and height of 200px is displayed.",
      tip: "Avoid fixed widths on responsive layouts; prefer %, rem, or vw.",
    },

    {
      title: "CSS Box Model",
      content: `
Every HTML element follows the CSS Box Model.

The box consists of:

• Content
• Padding
• Border
• Margin

Understanding the box model is essential for creating accurate layouts.
      `,
      code: `.box{
    width:200px;
    padding:20px;
    border:2px solid black;
    margin:30px;
}`,
      language: "css",
      output: "The total rendered size includes content, padding, border, and margin.",
      tip: "Use the browser's Developer Tools to inspect the box model of an element.",
    },

    {
      title: "box-sizing",
      content: `
The box-sizing property controls how width and height are calculated.

Values:

content-box (Default)
border-box

border-box includes padding and border inside the specified width and height.
      `,
      code: `*{
    box-sizing:border-box;
}`,
      language: "css",
      output: "Element dimensions include padding and border, making layouts easier to manage.",
      tip: "Most modern projects use box-sizing: border-box globally.",
    },

    {
      title: "Outline",
      content: `
An outline is a line drawn outside an element's border.

Unlike borders, outlines do not affect the element's size.

Properties:

outline
outline-width
outline-style
outline-color
outline-offset
      `,
      code: `input{
    outline:2px solid royalblue;
    outline-offset:4px;
}`,
      language: "css",
      output: "The input field displays a blue outline outside its border.",
      tip: "Avoid removing focus outlines unless you provide an accessible alternative.",
    },

    {
      title: "Text Styling",
      content: `
CSS provides many properties for styling text.

Common Properties:

color
text-align
text-transform
text-indent
text-decoration
letter-spacing
word-spacing
line-height
      `,
      code: `h1{
    color:#2563eb;
    text-align:center;
    text-transform:uppercase;
    letter-spacing:2px;
}`,
      language: "css",
      output: "The heading is blue, centered, uppercase, and has wider letter spacing.",
      tip: "Use line-height between 1.4 and 1.8 for comfortable reading.",
    },

    {
      title: "Fonts",
      content: `
Fonts control the appearance of text.

Common Properties:

font-family
font-size
font-style
font-weight
font-variant

Web-safe fonts include:

Arial
Verdana
Tahoma
Georgia
Times New Roman
      `,
      code: `body{
    font-family:Arial, sans-serif;
    font-size:16px;
}

h1{
    font-weight:bold;
}`,
      language: "css",
      output: "The page uses Arial as the primary font with readable text sizing.",
      tip: "Always provide a fallback font family such as sans-serif.",
    },

    {
      title: "Google Fonts",
      content: `
Google Fonts allows you to use hundreds of free web fonts.

Steps:

1. Import the font.
2. Apply it using font-family.

Popular Fonts:

• Poppins
• Roboto
• Open Sans
• Inter
• Montserrat
      `,
      code: `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

body{
    font-family:"Poppins", sans-serif;
}`,
      language: "css",
      output: "The webpage uses the Poppins font from Google Fonts.",
      tip: "Import only the font weights you need to improve loading performance.",
    },

    {
      title: "Icons",
      content: `
Icons enhance the visual appearance of web pages.

Popular Icon Libraries:

• Font Awesome
• Bootstrap Icons
• Material Icons
• Lucide Icons

Icons can be styled using normal CSS properties like color and font-size.
      `,
      code: `.icon{
    color:#2563eb;
    font-size:28px;
}`,
      language: "css",
      output: "Icons appear larger and in blue.",
      tip: "Use SVG icons whenever possible for better scalability and performance.",
    },

    {
      title: "Links",
      content: `
CSS can style hyperlinks using pseudo-classes.

Common Link States:

a:link
a:visited
a:hover
a:active

These states improve user interaction and navigation.
      `,
      code: `a{
    color:royalblue;
    text-decoration:none;
}

a:hover{
    color:tomato;
    text-decoration:underline;
}`,
      language: "css",
      output: "Links appear blue normally and turn tomato-colored with an underline on hover.",
      tip: "Always provide a visible hover effect for better user experience.",
    },    {
      title: "Lists",
      content: `
CSS allows you to customize the appearance of ordered and unordered lists.

Common Properties:

list-style-type
list-style-image
list-style-position
list-style

Common Values:

disc
circle
square
decimal
lower-alpha
upper-roman
none

Removing bullets is common when creating navigation menus.
      `,
      code: `ul{
    list-style:none;
    padding:0;
}

li{
    margin:10px 0;
}`,
      language: "css",
      output: "The list is displayed without bullets and with spacing between items.",
      tip: "Use list-style: none when designing menus or navigation bars.",
    },

    {
      title: "Tables",
      content: `
CSS can improve the appearance of HTML tables.

Common Properties:

border
border-collapse
padding
text-align
background-color
width

Styled tables improve readability.
      `,
      code: `table{
    width:100%;
    border-collapse:collapse;
}

th,
td{
    border:1px solid #ddd;
    padding:12px;
    text-align:left;
}

th{
    background:#2563eb;
    color:white;
}`,
      language: "css",
      output: "The table has collapsed borders, padded cells, and a blue header.",
      tip: "Use border-collapse: collapse for cleaner table borders.",
    },

    {
      title: "Display Property",
      content: `
The display property controls how an element is rendered.

Common Values:

block
inline
inline-block
flex
grid
none

Choosing the correct display type is essential for layout design.
      `,
      code: `.box{
    display:inline-block;
    width:150px;
    height:100px;
}`,
      language: "css",
      output: "The boxes appear side by side while maintaining their dimensions.",
      tip: "Use Flexbox or Grid for modern layouts instead of relying only on inline-block.",
    },

    {
      title: "Position Property",
      content: `
The position property determines how an element is positioned.

Values:

static
relative
absolute
fixed
sticky

Positioned elements can be moved using:

top
right
bottom
left
      `,
      code: `.box{
    position:relative;
    top:20px;
    left:40px;
}`,
      language: "css",
      output: "The element moves 20px down and 40px to the right from its normal position.",
      tip: "Use position: relative as the reference for absolutely positioned child elements.",
    },

    {
      title: "Overflow",
      content: `
The overflow property controls what happens when content exceeds an element's size.

Values:

visible
hidden
scroll
auto

Overflow is commonly used for cards, containers, and scrollable sections.
      `,
      code: `.container{
    width:250px;
    height:120px;
    overflow:auto;
}`,
      language: "css",
      output: "Scrollbars appear automatically when the content exceeds the container size.",
      tip: "Use overflow: auto instead of scroll to show scrollbars only when necessary.",
    },

    {
      title: "Float",
      content: `
The float property positions an element to the left or right of its container.

Values:

left
right
none

Although Flexbox and Grid are preferred today, float is still found in older projects.
      `,
      code: `img{
    float:left;
    margin-right:20px;
}`,
      language: "css",
      output: "The image floats to the left while surrounding text wraps around it.",
      tip: "Use Flexbox instead of float for most modern layouts.",
    },

    {
      title: "Clear",
      content: `
The clear property prevents elements from wrapping around floated elements.

Values:

left
right
both
none

It is commonly used after floated elements.
      `,
      code: `.footer{
    clear:both;
}`,
      language: "css",
      output: "The footer appears below all floated elements.",
      tip: "Clear floats to avoid layout issues in older designs.",
    },

    {
      title: "Z-index",
      content: `
The z-index property controls the stacking order of positioned elements.

Rules:

• Higher value appears in front.
• Lower value appears behind.
• Works only on positioned elements.

Common Uses:

• Modals
• Dropdowns
• Navigation Bars
• Tooltips
      `,
      code: `.modal{
    position:fixed;
    z-index:9999;
}`,
      language: "css",
      output: "The modal appears above all other page elements.",
      tip: "Assign z-index values systematically to avoid stacking conflicts.",
    },

    {
      title: "Opacity",
      content: `
The opacity property controls the transparency of an element.

Values:

0   Completely transparent
1   Fully visible

Values range from 0 to 1.
      `,
      code: `.image{
    opacity:0.6;
}

.image:hover{
    opacity:1;
}`,
      language: "css",
      output: "The image appears semi-transparent and becomes fully visible on hover.",
      tip: "Use opacity effects carefully to maintain text readability.",
    },

    {
      title: "Visibility",
      content: `
The visibility property determines whether an element is visible while still occupying space.

Values:

visible
hidden

Difference:

visibility:hidden
→ Element is hidden but still occupies space.

display:none
→ Element is completely removed from the layout.
      `,
      code: `.box{
    visibility:hidden;
}`,
      language: "css",
      output: "The element is invisible but its layout space remains reserved.",
      tip: "Use display: none when you want to completely remove an element from the document flow.",
    },

    {
      title: "Cursor",
      content: `
The cursor property changes the mouse pointer when hovering over an element.

Common Values:

pointer
default
text
move
not-allowed
wait
grab
crosshair

Custom cursors can also be used with images.
      `,
      code: `button{
    cursor:pointer;
}

.disabled{
    cursor:not-allowed;
}`,
      language: "css",
      output: "The cursor changes to a hand over buttons and a restricted icon over disabled elements.",
      tip: "Always use cursor: pointer for clickable elements to improve usability.",
    },    {
      title: "Introduction to Flexbox",
      content: `
Flexbox (Flexible Box Layout) is a one-dimensional layout model used to arrange elements efficiently.

It helps create responsive layouts without using float or positioning.

Advantages:

• Easy Alignment
• Flexible Layouts
• Responsive Design
• Equal Height Columns
• Less CSS Code

A Flexbox layout consists of:

• Flex Container
• Flex Items
      `,
      code: `.container{
    display:flex;
}`,
      language: "css",
      output: "All child elements are arranged in a flexible row.",
      tip: "Flexbox is ideal for arranging items in a single row or column.",
    },

    {
      title: "Flex Container",
      content: `
A Flex Container is the parent element whose display property is set to flex.

All direct child elements automatically become flex items.

Common Container Properties:

display
flex-direction
justify-content
align-items
flex-wrap
gap
      `,
      code: `.container{
    display:flex;
}`,
      language: "css",
      output: "The container displays all child elements using the Flexbox layout.",
    },

    {
      title: "Flex Items",
      content: `
Flex Items are the direct children of a flex container.

Each item can grow, shrink, or maintain its size depending on the available space.

Common Item Properties:

flex
order
align-self
flex-grow
flex-shrink
flex-basis
      `,
      code: `.item{
    flex:1;
}`,
      language: "css",
      output: "All flex items occupy equal available space inside the container.",
      tip: "Using flex: 1 is an easy way to create equally sized columns.",
    },

    {
      title: "flex-direction",
      content: `
The flex-direction property specifies the direction in which flex items are placed.

Values:

row
row-reverse
column
column-reverse

Default Value:

row
      `,
      code: `.container{
    display:flex;
    flex-direction:column;
}`,
      language: "css",
      output: "The flex items are arranged vertically from top to bottom.",
      tip: "Use column for sidebars, forms, and vertical menus.",
    },

    {
      title: "justify-content",
      content: `
The justify-content property aligns flex items along the main axis.

Common Values:

flex-start
center
flex-end
space-between
space-around
space-evenly

It controls horizontal alignment in a row layout.
      `,
      code: `.container{
    display:flex;
    justify-content:space-between;
}`,
      language: "css",
      output: "The first and last items align to the edges, with equal spacing between items.",
      tip: "space-between is commonly used in navigation bars.",
    },

    {
      title: "align-items",
      content: `
The align-items property aligns flex items along the cross axis.

Common Values:

stretch
center
flex-start
flex-end
baseline

It controls vertical alignment when the flex direction is row.
      `,
      code: `.container{
    display:flex;
    align-items:center;
    height:300px;
}`,
      language: "css",
      output: "All items are vertically centered within the container.",
      tip: "Combine justify-content and align-items to perfectly center content.",
    },

    {
      title: "flex-wrap",
      content: `
The flex-wrap property determines whether flex items should wrap onto multiple lines.

Values:

nowrap
wrap
wrap-reverse

Wrapping is useful for responsive layouts.
      `,
      code: `.container{
    display:flex;
    flex-wrap:wrap;
}`,
      language: "css",
      output: "Items automatically move to the next line when there is insufficient space.",
      tip: "Use flex-wrap: wrap for responsive card layouts.",
    },

    {
      title: "gap",
      content: `
The gap property creates spacing between flex items.

Unlike margins, gap only affects the spacing between items.

Values:

px
rem
em
%

Gap works with both Flexbox and Grid.
      `,
      code: `.container{
    display:flex;
    gap:20px;
}`,
      language: "css",
      output: "A consistent 20px space appears between all flex items.",
      tip: "Use gap instead of margins for cleaner layout spacing.",
    },

    {
      title: "order",
      content: `
The order property changes the visual order of flex items.

Default Value:

0

Items with smaller order values appear first.
      `,
      code: `.item1{
    order:2;
}

.item2{
    order:1;
}`,
      language: "css",
      output: "The second item is displayed before the first item.",
      tip: "Use order sparingly because it changes only the visual order, not the HTML structure.",
    },

    {
      title: "align-self",
      content: `
The align-self property overrides align-items for an individual flex item.

Values:

auto
stretch
center
flex-start
flex-end
baseline

It affects only the selected item.
      `,
      code: `.item{
    align-self:flex-end;
}`,
      language: "css",
      output: "The selected flex item aligns to the bottom of the container while the others remain unchanged.",
      tip: "Use align-self when only one item needs different alignment.",
    },

    {
      title: "flex-grow",
      content: `
The flex-grow property specifies how much a flex item should grow relative to other items.

Default Value:

0

Larger values allow an item to occupy more available space.
      `,
      code: `.item1{
    flex-grow:2;
}

.item2{
    flex-grow:1;
}`,
      language: "css",
      output: "The first item occupies twice as much available space as the second item.",
      tip: "Use flex-grow to distribute extra space proportionally.",
    },

    {
      title: "flex-shrink",
      content: `
The flex-shrink property specifies how much a flex item can shrink when space is limited.

Default Value:

1

A value of 0 prevents the item from shrinking.
      `,
      code: `.item{
    flex-shrink:0;
}`,
      language: "css",
      output: "The item keeps its size even when the container becomes smaller.",
      tip: "Prevent important elements like logos from shrinking by setting flex-shrink: 0.",
    },

    {
      title: "flex-basis",
      content: `
The flex-basis property defines the initial size of a flex item before available space is distributed.

Common Values:

auto
px
%
rem

It works together with flex-grow and flex-shrink.
      `,
      code: `.item{
    flex-basis:250px;
}`,
      language: "css",
      output: "Each flex item starts with a width of 250px before Flexbox adjusts the layout.",
      tip: "Use flex-basis instead of width for more flexible layouts.",
    },

    {
      title: "flex Shorthand",
      content: `
The flex property is a shorthand for:

flex-grow
flex-shrink
flex-basis

Syntax:

flex: grow shrink basis;

Using the shorthand makes CSS shorter and easier to read.
      `,
      code: `.item{
    flex:1 1 200px;
}`,
      language: "css",
      output: "Each item can grow, shrink, and starts with a base width of 200px.",
      tip: "The shorthand flex: 1 is commonly used to create equal-width columns.",
    },    {
      title: "Introduction to CSS Grid",
      content: `
CSS Grid Layout is a two-dimensional layout system that allows you to create complex web layouts using rows and columns.

Unlike Flexbox, which works in one dimension, Grid controls both rows and columns simultaneously.

Advantages:

• Two-dimensional layouts
• Easy alignment
• Responsive design
• Less CSS code
• Better control over page structure

A Grid layout consists of:

• Grid Container
• Grid Items
      `,
      code: `.container{
    display:grid;
}`,
      language: "css",
      output: "All child elements become grid items arranged in rows and columns.",
      tip: "Use CSS Grid for complete page layouts and Flexbox for smaller UI components.",
    },

    {
      title: "Grid Container",
      content: `
A Grid Container is the parent element whose display property is set to grid.

All direct child elements automatically become grid items.

Common Grid Container Properties:

display
grid-template-columns
grid-template-rows
gap
justify-items
align-items
      `,
      code: `.container{
    display:grid;
}`,
      language: "css",
      output: "The container behaves as a CSS Grid container.",
    },

    {
      title: "Grid Items",
      content: `
Grid Items are the direct children of a grid container.

Each item can occupy one or more rows and columns.

Grid items can be individually positioned using CSS Grid properties.
      `,
      code: `.item{
    background:#2563eb;
    color:white;
    padding:20px;
}`,
      language: "css",
      output: "Each grid item is displayed inside the grid container with its own styling.",
      tip: "Every direct child of a grid container automatically becomes a grid item.",
    },

    {
      title: "grid-template-columns",
      content: `
The grid-template-columns property defines the number and width of columns.

Values:

px
%
fr
repeat()

The fr unit distributes available space proportionally.
      `,
      code: `.container{
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
}`,
      language: "css",
      output: "The container is divided into three equal-width columns.",
      tip: "The fr unit is recommended for creating responsive layouts.",
    },

    {
      title: "grid-template-rows",
      content: `
The grid-template-rows property defines the height of grid rows.

You can specify fixed or flexible row sizes.

Values:

px
%
auto
fr
      `,
      code: `.container{
    display:grid;
    grid-template-rows:100px 200px;
}`,
      language: "css",
      output: "The grid contains two rows with heights of 100px and 200px.",
    },

    {
      title: "repeat() Function",
      content: `
The repeat() function reduces repetitive code when creating rows or columns.

Syntax:

repeat(number, size)

Example:

repeat(4, 1fr)

This creates four equal columns.
      `,
      code: `.container{
    display:grid;
    grid-template-columns:repeat(4,1fr);
}`,
      language: "css",
      output: "The grid contains four equal-width columns.",
      tip: "Use repeat() instead of writing the same value multiple times.",
    },

    {
      title: "gap",
      content: `
The gap property creates spacing between rows and columns.

It replaces the older:

grid-column-gap
grid-row-gap

Gap also works with Flexbox.
      `,
      code: `.container{
    display:grid;
    gap:20px;
}`,
      language: "css",
      output: "Every grid item has a consistent 20px gap from neighboring items.",
      tip: "Prefer gap instead of margins for cleaner spacing.",
    },

    {
      title: "Grid Column",
      content: `
The grid-column property allows an item to span multiple columns.

Syntax:

grid-column:start / end

This is useful for creating headers, banners, and featured cards.
      `,
      code: `.item{
    grid-column:1 / 3;
}`,
      language: "css",
      output: "The grid item spans across the first two columns.",
      tip: "Use column spanning for hero sections and large cards.",
    },

    {
      title: "Grid Row",
      content: `
The grid-row property specifies how many rows an item should occupy.

Syntax:

grid-row:start / end

It works similarly to grid-column.
      `,
      code: `.item{
    grid-row:1 / 3;
}`,
      language: "css",
      output: "The grid item spans across two rows.",
    },

    {
      title: "Grid Areas",
      content: `
Named Grid Areas make layouts easier to read and maintain.

Steps:

1. Define area names.
2. Assign names to items.

This approach is commonly used for page layouts.
      `,
      code: `.container{
    display:grid;

    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
}

.header{
    grid-area:header;
}

.sidebar{
    grid-area:sidebar;
}

.main{
    grid-area:main;
}

.footer{
    grid-area:footer;
}`,
      language: "css",
      output: "The page layout consists of a header, sidebar, main content, and footer using named grid areas.",
      tip: "Grid areas make complex layouts much easier to understand.",
    },

    {
      title: "justify-items",
      content: `
The justify-items property aligns grid items horizontally inside their cells.

Values:

start
center
end
stretch

Default:

stretch
      `,
      code: `.container{
    display:grid;
    justify-items:center;
}`,
      language: "css",
      output: "Each grid item is horizontally centered within its grid cell.",
    },

    {
      title: "align-items",
      content: `
The align-items property aligns grid items vertically inside each grid cell.

Values:

start
center
end
stretch

Default:

stretch
      `,
      code: `.container{
    display:grid;
    align-items:center;
}`,
      language: "css",
      output: "All grid items are vertically centered inside their cells.",
      tip: "Combine justify-items and align-items to center content perfectly.",
    },

    {
      title: "place-items",
      content: `
The place-items property is a shorthand for:

align-items
justify-items

Syntax:

place-items: center;

It centers all grid items in both directions.
      `,
      code: `.container{
    display:grid;
    place-items:center;
}`,
      language: "css",
      output: "Every grid item is centered horizontally and vertically.",
      tip: "place-items: center is the easiest way to center content inside grid cells.",
    },

    {
      title: "Responsive Grid Layout",
      content: `
CSS Grid makes responsive layouts easy using auto-fit and minmax().

This automatically adjusts the number of columns based on available space.

It is commonly used for:

• Card layouts
• Product grids
• Gallery layouts
• Dashboards
      `,
      code: `.container{
    display:grid;

    grid-template-columns:
        repeat(auto-fit, minmax(250px, 1fr));

    gap:20px;
}`,
      language: "css",
      output: "Grid items automatically wrap into responsive columns without using media queries.",
      tip: "repeat(auto-fit, minmax()) is one of the most powerful CSS Grid techniques for responsive design.",
    },    {
      title: "Responsive Web Design",
      content: `
Responsive Web Design (RWD) is an approach that makes web pages look good on all devices.

A responsive website automatically adapts to different screen sizes such as:

• Mobile Phones
• Tablets
• Laptops
• Desktop Computers
• Smart TVs

Benefits:

✓ Better User Experience
✓ Improved SEO
✓ Easier Maintenance
✓ One Website for All Devices
      `,
    },

    {
      title: "Viewport",
      content: `
The viewport is the visible area of a webpage on a device.

To create responsive websites, add the viewport meta tag inside the HTML <head> section.

Without it, mobile browsers may not display pages correctly.
      `,
      code: `<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0">`,
      language: "html",
      output: "The webpage scales correctly across different screen sizes.",
      tip: "Always include the viewport meta tag in responsive websites.",
    },

    {
      title: "Media Queries",
      content: `
Media Queries allow different CSS styles to be applied based on screen size, orientation, or device characteristics.

Syntax:

@media(condition){
    CSS Rules
}

Common Breakpoints:

576px
768px
992px
1200px
1400px
      `,
      code: `@media (max-width:768px){

    body{
        background:#f5f5f5;
    }

}`,
      language: "css",
      output: "The background color changes when the screen width is 768px or smaller.",
      tip: "Use mobile-first design by writing base styles first and adding larger-screen media queries later.",
    },

    {
      title: "Responsive Units",
      content: `
Responsive units automatically scale according to the screen or parent element.

Common Units:

%
em
rem
vw
vh
vmin
vmax

Avoid relying only on fixed pixel values for layouts.
      `,
      code: `.container{
    width:90%;
}

.title{
    font-size:2rem;
}`,
      language: "css",
      output: "The layout and text scale more naturally across different devices.",
      tip: "Use rem for typography and % or fr for layouts.",
    },

    {
      title: "rem Unit",
      content: `
The rem (Root EM) unit is relative to the root HTML font size.

Default:

1rem = 16px

Examples:

1rem = 16px
2rem = 32px
0.5rem = 8px

Using rem makes typography more accessible.
      `,
      code: `h1{
    font-size:2.5rem;
}

p{
    font-size:1rem;
}`,
      language: "css",
      output: "The heading and paragraph scale consistently with the root font size.",
      tip: "Prefer rem over px for text sizing in modern websites.",
    },

    {
      title: "em Unit",
      content: `
The em unit is relative to the font size of its parent element.

It is commonly used for:

• Buttons
• Padding
• Component spacing

Unlike rem, em depends on the parent element.
      `,
      code: `.button{
    padding:1em 2em;
    font-size:1.2em;
}`,
      language: "css",
      output: "The button size adjusts based on its font size.",
      tip: "Use em for component-level sizing and rem for global typography.",
    },

    {
      title: "Viewport Units (vw and vh)",
      content: `
Viewport units are based on the browser window.

1vw = 1% of viewport width

1vh = 1% of viewport height

These units are useful for:

• Hero Sections
• Fullscreen Layouts
• Responsive Typography
      `,
      code: `.hero{
    width:100vw;
    height:100vh;
}`,
      language: "css",
      output: "The hero section fills the entire browser window.",
      tip: "Use 100vh for full-screen sections such as landing pages.",
    },

    {
      title: "clamp() Function",
      content: `
The clamp() function creates responsive values with minimum and maximum limits.

Syntax:

clamp(min, preferred, max)

It is commonly used for responsive typography.
      `,
      code: `h1{
    font-size:clamp(2rem,5vw,4rem);
}`,
      language: "css",
      output: "The heading size automatically scales based on the screen width.",
      tip: "Use clamp() to reduce the number of media queries needed for font sizes.",
    },

    {
      title: "Responsive Images",
      content: `
Images should resize automatically to fit different screen sizes.

Best Practices:

• max-width:100%
• height:auto
• object-fit
• Responsive image formats

Responsive images prevent layout overflow.
      `,
      code: `img{
    max-width:100%;
    height:auto;
}`,
      language: "css",
      output: "Images automatically resize while maintaining their aspect ratio.",
      tip: "Never set both width and height to fixed values for responsive images.",
    },

    {
      title: "Responsive Navigation",
      content: `
Navigation bars should adapt to different screen sizes.

Desktop:

• Horizontal Navigation

Mobile:

• Hamburger Menu
• Vertical Navigation
• Drawer Navigation

Responsive navigation improves usability on smaller devices.
      `,
      code: `@media (max-width:768px){

    nav ul{
        flex-direction:column;
    }

}`,
      language: "css",
      output: "The navigation menu changes from horizontal to vertical on smaller screens.",
      tip: "Combine Flexbox with media queries to build responsive navigation menus.",
    },

    {
      title: "Responsive Cards",
      content: `
Card layouts should automatically adjust based on screen size.

CSS Grid and Flexbox make responsive cards simple to build.

Responsive cards are commonly used for:

• Blogs
• Products
• Dashboards
• Portfolios
      `,
      code: `.cards{

    display:grid;

    grid-template-columns:
        repeat(auto-fit,minmax(250px,1fr));

    gap:20px;

}`,
      language: "css",
      output: "Cards automatically wrap into multiple responsive columns.",
      tip: "auto-fit with minmax() is the preferred technique for responsive card layouts.",
    },

    {
      title: "Mobile-First Design",
      content: `
Mobile-first design starts with styles for smaller screens and progressively enhances them for larger devices.

Advantages:

• Better Performance
• Cleaner CSS
• Easier Maintenance
• Improved Accessibility

Modern CSS frameworks follow the mobile-first approach.
      `,
      code: `.container{
    padding:1rem;
}

@media (min-width:768px){

    .container{
        padding:2rem;
    }

}`,
      language: "css",
      output: "The layout starts optimized for mobile devices and expands on larger screens.",
      tip: "Always build mobile-first whenever possible to create modern, responsive websites.",
    },    {
      title: "CSS Transforms",
      content: `
The transform property allows you to modify the position, size, and shape of an element without affecting the document layout.

Common Transform Functions:

• translate()
• rotate()
• scale()
• skew()
• matrix()

Transforms are widely used for animations and interactive UI effects.
      `,
      code: `.box{
    transform:translate(50px,20px);
}`,
      language: "css",
      output: "The element moves 50px to the right and 20px downward.",
      tip: "Transforms do not change the surrounding layout, making them ideal for animations.",
    },

    {
      title: "translate()",
      content: `
The translate() function moves an element along the X and Y axes.

Variants:

translate()
translateX()
translateY()

Positive values move the element right or down.
Negative values move it left or up.
      `,
      code: `.box{
    transform:translate(100px,50px);
}`,
      language: "css",
      output: "The element is shifted 100px horizontally and 50px vertically.",
      tip: "Use translate() instead of margins when animating movement.",
    },

    {
      title: "rotate()",
      content: `
The rotate() function rotates an element around its center.

Units:

deg
rad
turn

Positive values rotate clockwise.

Negative values rotate counterclockwise.
      `,
      code: `.box{
    transform:rotate(45deg);
}`,
      language: "css",
      output: "The element rotates 45 degrees clockwise.",
      tip: "Combine rotate() with transitions for hover effects.",
    },

    {
      title: "scale()",
      content: `
The scale() function changes the size of an element.

Variants:

scale()
scaleX()
scaleY()

Values greater than 1 enlarge the element.

Values less than 1 reduce its size.
      `,
      code: `.card:hover{
    transform:scale(1.1);
}`,
      language: "css",
      output: "The card smoothly grows to 110% of its original size when hovered.",
      tip: "Scale effects are commonly used for buttons, cards, and images.",
    },

    {
      title: "skew()",
      content: `
The skew() function tilts an element along the X or Y axis.

Variants:

skew()
skewX()
skewY()

Skew is useful for creative UI designs and decorative elements.
      `,
      code: `.box{
    transform:skew(20deg);
}`,
      language: "css",
      output: "The element appears slanted by 20 degrees.",
      tip: "Use skew sparingly because excessive skewing can reduce readability.",
    },

    {
      title: "transform-origin",
      content: `
The transform-origin property specifies the point around which transformations occur.

Common Values:

center
top
bottom
left
right

You can also specify custom coordinates.
      `,
      code: `.box{
    transform-origin:top left;
    transform:rotate(30deg);
}`,
      language: "css",
      output: "The element rotates from its top-left corner instead of its center.",
      tip: "Changing the transform origin creates more natural animation effects.",
    },

    {
      title: "CSS Transitions",
      content: `
Transitions create smooth changes between CSS property values.

Common Transition Properties:

transition-property
transition-duration
transition-timing-function
transition-delay

Shorthand:

transition
      `,
      code: `.button{
    background:#2563eb;
    transition:0.3s;
}

.button:hover{
    background:#1d4ed8;
}`,
      language: "css",
      output: "The button background changes smoothly when hovered.",
      tip: "Use transitions to improve user experience without JavaScript.",
    },

    {
      title: "Transition Timing Functions",
      content: `
Timing functions control the speed of a transition.

Common Values:

ease
linear
ease-in
ease-out
ease-in-out

Different timing functions create different animation effects.
      `,
      code: `.box{
    transition:all .5s ease-in-out;
}`,
      language: "css",
      output: "The transition starts and ends smoothly.",
      tip: "ease-in-out provides a natural-looking animation for most UI elements.",
    },

    {
      title: "CSS Animations",
      content: `
Animations allow elements to change styles automatically over time.

Animations are created using:

• @keyframes
• animation property

Advantages:

• Interactive Interfaces
• Loading Effects
• Smooth Motion
• Better User Experience
      `,
      code: `.box{
    animation:moveBox 2s infinite;
}

@keyframes moveBox{

    from{
        transform:translateX(0);
    }

    to{
        transform:translateX(200px);
    }

}`,
      language: "css",
      output: "The element continuously moves from left to right.",
      tip: "Animations eliminate the need for JavaScript in many UI interactions.",
    },

    {
      title: "@keyframes",
      content: `
The @keyframes rule defines the stages of an animation.

You can use:

from / to

or

0% to 100%

to specify animation progress.
      `,
      code: `@keyframes fade{

    0%{
        opacity:0;
    }

    100%{
        opacity:1;
    }

}`,
      language: "css",
      output: "The element gradually fades into view.",
      tip: "Percentages give greater control over complex animations.",
    },

    {
      title: "Animation Properties",
      content: `
The animation property is shorthand for multiple animation settings.

Common Properties:

animation-name
animation-duration
animation-delay
animation-iteration-count
animation-direction
animation-fill-mode
animation-play-state
animation-timing-function
      `,
      code: `.loader{

    animation:
        spin 2s linear infinite;

}`,
      language: "css",
      output: "The loader rotates continuously using a smooth linear animation.",
      tip: "Use shorthand animation syntax to keep your CSS clean and readable.",
    },

    {
      title: "Hover Effects",
      content: `
Hover effects improve interactivity by changing an element's appearance when the pointer moves over it.

Common Hover Effects:

• Color Change
• Scale
• Rotation
• Shadow
• Border Animation
• Opacity

Hover effects enhance the user experience.
      `,
      code: `.card{

    transition:.3s;

}

.card:hover{

    transform:translateY(-10px);
    box-shadow:0 10px 25px rgba(0,0,0,.2);

}`,
      language: "css",
      output: "The card lifts upward and displays a shadow when hovered.",
      tip: "Combine transform and box-shadow to create modern card hover animations.",
    },    {
      title: "Pseudo Classes",
      content: `
Pseudo classes define the special state of an element.

They are prefixed with a colon (:).

Common Pseudo Classes:

:hover
:active
:focus
:visited
:first-child
:last-child
:nth-child()
:checked
:disabled
:enabled

Pseudo classes are widely used to improve user interaction.
      `,
      code: `button:hover{
    background:#2563eb;
    color:white;
}

input:focus{
    border-color:royalblue;
}`,
      language: "css",
      output: "The button changes color on hover, and the input border changes when focused.",
      tip: "Use :hover and :focus to provide visual feedback to users.",
    },

    {
      title: "Pseudo Elements",
      content: `
Pseudo elements style specific parts of an element.

They are prefixed with two colons (::).

Common Pseudo Elements:

::before
::after
::first-letter
::first-line
::selection
::placeholder

Pseudo elements are useful for adding decorative content without modifying HTML.
      `,
      code: `h1::after{
    content:" 🚀";
}

p::first-letter{
    font-size:2rem;
    font-weight:bold;
}`,
      language: "css",
      output: "A rocket emoji appears after the heading, and the first letter of the paragraph becomes larger.",
      tip: "Use ::before and ::after for icons, badges, and decorative effects.",
    },

    {
      title: "Attribute Selectors",
      content: `
Attribute selectors target elements based on their attributes.

Common Syntax:

[element]
[element="value"]
[element^="value"]
[element$="value"]
[element*="value"]

These selectors reduce the need for additional classes.
      `,
      code: `input[type="text"]{
    border:2px solid royalblue;
}

a[target="_blank"]{
    color:green;
}`,
      language: "css",
      output: "Text inputs receive a blue border, and external links appear green.",
      tip: "Attribute selectors are useful when styling forms and links.",
    },

    {
      title: "Combinators",
      content: `
Combinators describe relationships between selectors.

Types:

Descendant (space)
Child (>)
Adjacent Sibling (+)
General Sibling (~)

They help target elements based on document structure.
      `,
      code: `div p{
    color:blue;
}

div > p{
    font-weight:bold;
}

h2 + p{
    color:red;
}`,
      language: "css",
      output: "Styles are applied depending on the relationship between HTML elements.",
      tip: "Use child combinators (>) when you want to target only direct children.",
    },

    {
      title: "CSS Specificity",
      content: `
Specificity determines which CSS rule is applied when multiple rules target the same element.

Priority Order:

Inline Styles
ID Selectors
Class Selectors
Element Selectors

Higher specificity overrides lower specificity.
      `,
      code: `#title{
    color:red;
}

.heading{
    color:blue;
}

h1{
    color:green;
}`,
      language: "css",
      output: "The heading appears red because the ID selector has the highest specificity.",
      tip: "Avoid excessive use of ID selectors to keep CSS maintainable.",
    },

    {
      title: "Inheritance",
      content: `
Some CSS properties are inherited by child elements automatically.

Common Inherited Properties:

color
font-family
font-size
line-height

Non-inherited properties include:

margin
padding
border

Understanding inheritance reduces repetitive CSS.
      `,
      code: `body{
    font-family:Arial;
    color:#333;
}`,
      language: "css",
      output: "Child elements inherit the font family and text color from the body element.",
      tip: "Use inheritance to apply consistent typography across your website.",
    },

    {
      title: "!important",
      content: `
The !important rule overrides normal CSS specificity.

Syntax:

property:value !important;

Although powerful, overusing !important makes CSS difficult to maintain.

Use it only when absolutely necessary.
      `,
      code: `.button{
    background:red !important;
}`,
      language: "css",
      output: "The button background remains red even if other rules try to override it.",
      tip: "Avoid using !important unless there is no better alternative.",
    },

    {
      title: "CSS Variables (Custom Properties)",
      content: `
CSS Variables allow reusable values throughout a stylesheet.

Variables are declared using:

--variable-name

Access them using:

var(--variable-name)

Benefits:

• Easy Theme Changes
• Reusable Values
• Cleaner CSS
• Better Maintenance
      `,
      code: `:root{
    --primary:#2563eb;
    --radius:10px;
}

.button{
    background:var(--primary);
    border-radius:var(--radius);
}`,
      language: "css",
      output: "The button uses reusable theme values for its background color and border radius.",
      tip: "Store colors, spacing, and font sizes as CSS variables.",
    },

    {
      title: "calc() Function",
      content: `
The calc() function performs calculations directly in CSS.

Syntax:

calc(expression)

You can combine:

px
%
rem
vw
vh

This is useful for dynamic layouts.
      `,
      code: `.container{
    width:calc(100% - 40px);
}`,
      language: "css",
      output: "The container width adjusts automatically based on the available space.",
      tip: "Use calc() to combine different CSS units without JavaScript.",
    },

    {
      title: "Modern Selector Functions",
      content: `
Modern CSS introduces powerful selector functions.

:is()
Matches any selector in the list.

:where()
Works like :is() but has zero specificity.

:has()
Selects a parent based on its children.

These selectors reduce repetitive CSS and improve readability.
      `,
      code: `:is(h1,h2,h3){
    color:royalblue;
}

.card:has(img){
    border:2px solid #2563eb;
}`,
      language: "css",
      output: "All headings become blue, and cards containing an image receive a blue border.",
      tip: "Use :is() to group selectors and :has() for advanced parent-based styling in modern browsers.",
    },    {
      title: "CSS Gradients",
      content: `
Gradients create smooth transitions between two or more colors.

Types of Gradients:

• Linear Gradient
• Radial Gradient
• Conic Gradient

Gradients are commonly used for:

• Backgrounds
• Buttons
• Cards
• Hero Sections
      `,
      code: `.hero{
    background:linear-gradient(
        to right,
        #2563eb,
        #7c3aed
    );
}`,
      language: "css",
      output: "The hero section displays a smooth blue-to-purple gradient background.",
      tip: "Use gradients instead of large images when possible to improve performance.",
    },

    {
      title: "Linear Gradient",
      content: `
A linear gradient changes colors along a straight line.

Syntax:

linear-gradient(direction, color1, color2)

Directions:

to right
to left
to top
to bottom
45deg
90deg
      `,
      code: `.box{
    background:linear-gradient(
        45deg,
        #3b82f6,
        #06b6d4
    );
}`,
      language: "css",
      output: "The element displays a diagonal blue gradient.",
      tip: "Experiment with angles to create unique background effects.",
    },

    {
      title: "Radial Gradient",
      content: `
A radial gradient starts from a central point and spreads outward.

It creates circular or elliptical color transitions.

It is commonly used for:

• Highlights
• Hero backgrounds
• Decorative effects
      `,
      code: `.circle{
    background:radial-gradient(
        circle,
        white,
        royalblue
    );
}`,
      language: "css",
      output: "The element displays a circular gradient from white to blue.",
    },

    {
      title: "Box Shadow",
      content: `
The box-shadow property adds shadows around elements.

Syntax:

box-shadow:
horizontal
vertical
blur
spread
color

Shadows create depth and improve visual hierarchy.
      `,
      code: `.card{
    box-shadow:
        0 10px 25px rgba(0,0,0,.15);
}`,
      language: "css",
      output: "The card displays a soft shadow beneath it.",
      tip: "Use subtle shadows for modern UI designs instead of heavy shadows.",
    },

    {
      title: "Text Shadow",
      content: `
The text-shadow property adds shadows to text.

Syntax:

text-shadow:
horizontal
vertical
blur
color

It improves readability on images and colorful backgrounds.
      `,
      code: `h1{
    text-shadow:
        2px 2px 5px rgba(0,0,0,.3);
}`,
      language: "css",
      output: "The heading displays a soft shadow behind the text.",
      tip: "Keep text shadows subtle to maintain readability.",
    },

    {
      title: "CSS Filters",
      content: `
The filter property applies visual effects to elements.

Common Filters:

blur()
brightness()
contrast()
grayscale()
invert()
opacity()
sepia()
saturate()

Filters are commonly applied to images.
      `,
      code: `img{
    filter:grayscale(100%);
}

img:hover{
    filter:none;
}`,
      language: "css",
      output: "The image appears black and white until hovered.",
      tip: "Filters create engaging hover effects without image editing software.",
    },

    {
      title: "Blend Modes",
      content: `
Blend modes determine how an element blends with the background.

Common Properties:

mix-blend-mode
background-blend-mode

Popular Values:

multiply
screen
overlay
darken
lighten
      `,
      code: `.image{
    mix-blend-mode:multiply;
}`,
      language: "css",
      output: "The image blends with the background using the multiply blend mode.",
      tip: "Blend modes are useful for creative designs and image overlays.",
    },

    {
      title: "clip-path",
      content: `
The clip-path property clips an element into a custom shape.

Common Shapes:

circle()
ellipse()
polygon()
inset()

It is commonly used for profile images and creative layouts.
      `,
      code: `.avatar{
    clip-path:circle(50%);
}`,
      language: "css",
      output: "The image is displayed as a perfect circle.",
      tip: "Use clip-path to create unique image and card shapes without editing images.",
    },

    {
      title: "object-fit and object-position",
      content: `
The object-fit property controls how images fit inside their containers.

Common Values:

fill
contain
cover
none
scale-down

object-position controls the alignment of the image.
      `,
      code: `img{
    width:300px;
    height:200px;

    object-fit:cover;
    object-position:center;
}`,
      language: "css",
      output: "The image fills its container while maintaining its aspect ratio.",
      tip: "Use object-fit: cover for responsive cards and gallery images.",
    },

    {
      title: "Scroll Behavior",
      content: `
The scroll-behavior property controls scrolling animation.

Values:

auto
smooth

Smooth scrolling improves navigation between sections of a webpage.
      `,
      code: `html{
    scroll-behavior:smooth;
}`,
      language: "css",
      output: "The page scrolls smoothly when navigating to anchor links.",
      tip: "Smooth scrolling provides a more polished user experience on single-page websites.",
    },

    {
      title: "Scrollbar Styling",
      content: `
Modern browsers allow limited customization of scrollbars.

Common Properties:

::-webkit-scrollbar
::-webkit-scrollbar-thumb
::-webkit-scrollbar-track

Custom scrollbars improve the visual consistency of a website.
      `,
      code: `::-webkit-scrollbar{
    width:10px;
}

::-webkit-scrollbar-thumb{
    background:#2563eb;
    border-radius:20px;
}`,
      language: "css",
      output: "The browser scrollbar appears with a blue rounded thumb.",
      tip: "Avoid making scrollbars too thin, as they may become difficult to use.",
    },

    {
      title: "Backdrop Filter",
      content: `
The backdrop-filter property applies effects to the area behind an element.

Common Effects:

blur()
brightness()
contrast()

It is widely used in glassmorphism UI designs.
      `,
      code: `.glass{
    background:rgba(255,255,255,.2);
    backdrop-filter:blur(15px);
}`,
      language: "css",
      output: "The background behind the element becomes blurred, creating a glass-like appearance.",
      tip: "Combine backdrop-filter with semi-transparent backgrounds for modern glassmorphism effects.",
    },    {
      title: "Form Styling",
      content: `
CSS allows you to create attractive and user-friendly forms.

Common Form Elements:

• form
• input
• textarea
• select
• button
• label

Well-designed forms improve usability and accessibility.
      `,
      code: `form{
    width:400px;
    margin:auto;
    padding:20px;
    border-radius:10px;
    background:#f8fafc;
}`,
      language: "css",
      output: "The form appears centered with padding, rounded corners, and a light background.",
      tip: "Keep forms clean and simple for a better user experience.",
    },

    {
      title: "Styling Input Fields",
      content: `
Input fields collect user data.

Common Input Types:

text
email
password
number
date
search

Frequently Used Properties:

width
padding
border
border-radius
font-size
      `,
      code: `input{
    width:100%;
    padding:12px;
    border:1px solid #ccc;
    border-radius:6px;
    font-size:16px;
}`,
      language: "css",
      output: "All input fields have consistent spacing, borders, and rounded corners.",
      tip: "Use consistent padding and font sizes across all form inputs.",
    },

    {
      title: "Focus States",
      content: `
The :focus pseudo-class styles an element when it receives keyboard or mouse focus.

Providing a visible focus state improves accessibility.

Common Properties:

outline
border-color
box-shadow
      `,
      code: `input:focus{
    outline:none;
    border-color:#2563eb;
    box-shadow:0 0 5px rgba(37,99,235,.4);
}`,
      language: "css",
      output: "The input field highlights with a blue border and shadow when focused.",
      tip: "Never remove focus styles without providing an accessible alternative.",
    },

    {
      title: "Styling Buttons",
      content: `
Buttons perform actions such as submitting forms.

Common Properties:

background
color
padding
border
border-radius
cursor
transition
      `,
      code: `button{
    background:#2563eb;
    color:white;
    border:none;
    padding:12px 24px;
    border-radius:6px;
    cursor:pointer;
    transition:.3s;
}

button:hover{
    background:#1d4ed8;
}`,
      language: "css",
      output: "The button has a blue background and smoothly darkens on hover.",
      tip: "Always use cursor: pointer for clickable buttons.",
    },

    {
      title: "Styling Textarea",
      content: `
The textarea element allows users to enter multiple lines of text.

Common Properties:

resize
padding
font-size
border
border-radius

Limiting resizing often improves layout consistency.
      `,
      code: `textarea{
    width:100%;
    height:120px;
    resize:vertical;
    padding:12px;
}`,
      language: "css",
      output: "The textarea has padding and can only be resized vertically.",
      tip: "Use resize: vertical to prevent unwanted horizontal resizing.",
    },

    {
      title: "Styling Select Dropdown",
      content: `
The select element creates a dropdown list.

Common Styling Properties:

padding
border
background
border-radius
font-size

Dropdowns should match the style of other input fields.
      `,
      code: `select{
    width:100%;
    padding:12px;
    border:1px solid #ccc;
    border-radius:6px;
}`,
      language: "css",
      output: "The dropdown appears with consistent spacing and rounded borders.",
      tip: "Maintain a consistent design across all form controls.",
    },

    {
      title: "Custom Checkboxes",
      content: `
Checkboxes allow users to select multiple options.

You can customize them using:

appearance
accent-color

Modern browsers support accent-color for easy customization.
      `,
      code: `input[type="checkbox"]{
    accent-color:#2563eb;
}`,
      language: "css",
      output: "The checkbox uses a blue accent color when checked.",
      tip: "Use accent-color for simple and consistent checkbox styling.",
    },

    {
      title: "Custom Radio Buttons",
      content: `
Radio buttons allow users to select only one option from a group.

Like checkboxes, they support accent-color in modern browsers.
      `,
      code: `input[type="radio"]{
    accent-color:#2563eb;
}`,
      language: "css",
      output: "The selected radio button appears with a blue accent color.",
      tip: "Group related radio buttons using the same name attribute in HTML.",
    },

    {
      title: "Range Slider",
      content: `
The range input allows users to choose a value within a specified range.

It is commonly used for:

• Volume
• Brightness
• Pricing Filters
• Progress Controls
      `,
      code: `input[type="range"]{
    width:100%;
}`,
      language: "css",
      output: "The range slider stretches across the full width of its container.",
      tip: "Customize the slider thumb for a more polished appearance.",
    },

    {
      title: "Disabled Elements",
      content: `
Disabled form controls cannot be edited or interacted with.

The :disabled pseudo-class styles these elements.

Common Styles:

Reduced opacity
Different background
Not-allowed cursor
      `,
      code: `input:disabled,
button:disabled{
    opacity:.6;
    cursor:not-allowed;
}`,
      language: "css",
      output: "Disabled inputs and buttons appear faded and display a restricted cursor.",
      tip: "Clearly indicate disabled controls so users understand they are unavailable.",
    },

    {
      title: "Validation States",
      content: `
CSS provides pseudo-classes for validating user input.

Common Validation Selectors:

:valid
:invalid
:required
:optional

These selectors provide instant visual feedback without JavaScript.
      `,
      code: `input:valid{
    border-color:green;
}

input:invalid{
    border-color:red;
}`,
      language: "css",
      output: "Valid fields show a green border, while invalid fields show a red border.",
      tip: "Use validation styles to guide users while filling out forms.",
    },

    {
      title: "Complete Modern Form Example",
      content: `
A modern form combines responsive layout, accessible focus styles, validation, and consistent spacing.

Best Practices:

• Use labels
• Keep spacing consistent
• Show clear focus states
• Validate inputs
• Make the form responsive
• Maintain accessibility
      `,
      code: `form{
    max-width:500px;
    margin:auto;
    padding:24px;
    border-radius:12px;
    background:#fff;
    box-shadow:0 8px 20px rgba(0,0,0,.1);
}

input,
select,
textarea{
    width:100%;
    padding:12px;
    margin-bottom:16px;
    border:1px solid #ccc;
    border-radius:6px;
}

button{
    width:100%;
    padding:12px;
    background:#2563eb;
    color:#fff;
    border:none;
    border-radius:6px;
    cursor:pointer;
}`,
      language: "css",
      output: "A clean, responsive, and modern form layout suitable for real-world projects.",
      tip: "Combine semantic HTML with CSS best practices to create accessible and professional forms.",
    },
],
};