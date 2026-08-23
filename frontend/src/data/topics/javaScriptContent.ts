export const javascriptContent = {
  title: "JavaScript Programming",
  description:
    "Learn JavaScript from beginner to advanced with concepts, examples, projects, and practice questions.",

  sections: [

    {
      title: "Introduction to JavaScript",
      content: `
JavaScript is a high-level, interpreted programming language used to make websites interactive and dynamic.

It was created by Brendan Eich in 1995.

JavaScript is one of the three core technologies of web development:

• HTML → Structure of Website
• CSS → Design and Styling
• JavaScript → Logic and Interactivity


JavaScript is used in:

• Web Development
• Mobile Applications
• Backend Development
• Game Development
• Desktop Applications
• Artificial Intelligence
• Automation
• APIs
      `,
    },


    {
      title: "History of JavaScript",
      content: `
JavaScript was created by Brendan Eich in 1995 while working at Netscape.

Originally JavaScript was called:

Mocha

Later renamed:

LiveScript

Finally renamed:

JavaScript


JavaScript became an official web standard through ECMAScript.
      `,
    },


    {
      title: "What is ECMAScript?",
      content: `
ECMAScript is the standard specification that defines how JavaScript works.

JavaScript is the most popular implementation of ECMAScript.


Important ECMAScript Versions:

ES5 (2009)

ES6 / ES2015 (2015)

ES2016

ES2017

Modern ES Versions


ES6 introduced:

• let
• const
• Arrow Functions
• Classes
• Modules
• Template Literals
      `,
    },


    {
      title: "Features of JavaScript",
      content: `
Major Features of JavaScript:

• Lightweight Language
• Interpreted Language
• Object-Oriented Programming Support
• Dynamic Typing
• Event Driven Programming
• Asynchronous Programming
• Cross Platform Support
• Large Library Ecosystem
• Browser Support


Advantages:

✓ Easy to Learn

✓ Fast Development

✓ Runs Directly in Browser

✓ Large Developer Community

✓ Frontend and Backend Development Support
      `,
    },


    {
      title: "Applications of JavaScript",
      content: `
JavaScript is used in many different areas.


Frontend Development:

• Interactive Websites
• Animations
• Form Validation
• Single Page Applications


Frontend Frameworks:

• React.js
• Angular
• Vue.js


Backend Development:

• Node.js
• Express.js


Mobile Development:

• React Native
• Ionic


Other Uses:

• Games
• Desktop Applications
• Browser Extensions
• Automation Tools
      `,
    },


    {
      title: "Adding JavaScript to HTML",
      content: `
JavaScript can be added to HTML in three ways:


1. Inline JavaScript

JavaScript code written directly inside HTML elements.


2. Internal JavaScript

JavaScript written inside <script> tag.


3. External JavaScript

JavaScript written in a separate .js file.
      `,
      code: `<!DOCTYPE html>

<html>

<head>

<title>
JavaScript Example
</title>

</head>


<body>


<h1>
Hello JavaScript
</h1>


<script>

console.log(
"JavaScript Started"
);


</script>


</body>

</html>`,
      language: "javascript",
      output: "JavaScript Started",
      tip: "External JavaScript files are recommended for large projects.",
    },


    {
      title: "External JavaScript File",
      content: `
External JavaScript separates JavaScript code from HTML.

Benefits:

• Cleaner Code
• Easy Maintenance
• Code Reusability
• Better Project Structure
      `,
      code: `index.html


<script src="script.js"></script>



script.js


console.log(
"External JavaScript"
);`,
      language: "javascript",
      output: "External JavaScript",
    },


    {
      title: "JavaScript Comments",
      content: `
Comments are notes inside code.

They are ignored by JavaScript engines.


Types of Comments:


1. Single Line Comment


2. Multi Line Comment
      `,
      code: `// Single Line Comment


/*
Multi Line

Comment
*/


console.log(
"Comments Example"
);`,
      language: "javascript",
      output: "Comments Example",
      tip: "Comments improve code readability.",
    },


    {
      title: "JavaScript Syntax",
      content: `
Syntax defines the rules for writing JavaScript programs.


Important Rules:

• JavaScript is case-sensitive.
• Statements can end with semicolon.
• Code blocks use curly braces {}.
• Strings use quotes.
• Variables store values.
      `,
      code: `let name = "Harish";


console.log(name);`,
      language: "javascript",
      output: "Harish",
    },


    {
      title: "JavaScript Output Methods",
      content: `
JavaScript provides different ways to display output.


Methods:


1. console.log()

Used for debugging.


2. alert()

Shows popup messages.


3. document.write()

Writes content directly to webpage.
      `,
      code: `console.log(
"Hello JavaScript"
);


alert(
"Welcome"
);


document.write(
"JavaScript"
);`,
      language: "javascript",
      output: "Hello JavaScript",
    },


    {
      title: "JavaScript Console",
      content: `
The console is a developer tool used for testing and debugging.


Common Console Methods:


console.log()

console.error()

console.warn()

console.table()
      `,
      code: `console.log(
"Message"
);


console.error(
"Error"
);


console.warn(
"Warning"
);`,
      language: "javascript",
      output: `
Message

Error

Warning
      `,
    },


    {
      title: "JavaScript Variables",
      content: `
Variables are containers used to store data values.


JavaScript provides three keywords:


1. var

2. let

3. const


Modern JavaScript mainly uses:

let

const
      `,
      code: `let name = "Harish";


const age = 21;


console.log(name);

console.log(age);`,
      language: "javascript",
      output: `
Harish

21
      `,
      tip: "Use const by default and let when values need to change.",
    },


    {
      title: "var Keyword",
      content: `
var is the oldest variable declaration method.


Features:

• Function scoped
• Can be redeclared
• Can be updated


Modern JavaScript avoids var because of scope problems.
      `,
      code: `var city = "Mumbai";


var city = "Delhi";


console.log(city);`,
      language: "javascript",
      output: "Delhi",
    },


    {
      title: "let Keyword",
      content: `
let creates block-scoped variables.


Features:

• Cannot be redeclared in the same scope
• Can be updated
• Recommended for changing values
      `,
      code: `let score = 10;


score = 20;


console.log(score);`,
      language: "javascript",
      output: "20",
    },


    {
      title: "const Keyword",
      content: `
const creates variables that cannot be reassigned.


Features:

• Block scoped
• Cannot be updated
• Cannot be redeclared


Used for fixed values.
      `,
      code: `const pi = 3.14159;


console.log(pi);`,
      language: "javascript",
      output: "3.14159",
    },

    {
      title: "Variable Naming Rules",
      content: `
Rules for naming JavaScript variables:

• Variable names cannot start with numbers.
• Spaces are not allowed.
• Special characters are not allowed except _ and $.
• Reserved keywords cannot be used.
• JavaScript variable names are case-sensitive.


Valid Examples:

userName

age

totalPrice

_student

$user


Invalid Examples:

1name

user name

let

const
      `,
      tip: "Use meaningful variable names to make code easier to understand.",
    },


    {
      title: "JavaScript Data Types",
      content: `
Data types define the type of value stored inside a variable.

JavaScript has two categories of data types:


1. Primitive Data Types

These store single values.


2. Non-Primitive Data Types

These store collections of values.
      `,
      code: `let name = "Harish";

let age = 21;

let isStudent = true;

let value = null;

let data;`,
      language: "javascript",
      output: `
String

Number

Boolean

Null

Undefined
      `,
    },


    {
      title: "Primitive Data Types",
      content: `
Primitive data types store simple values.

JavaScript primitive types:

1. String

2. Number

3. Boolean

4. Undefined

5. Null

6. BigInt

7. Symbol
      `,
    },


    {
      title: "Number Data Type",
      content: `
The Number data type represents numeric values.

It supports:

• Integers
• Decimal Numbers
• Negative Numbers


Examples:

10

99.99

-50

3.14
      `,
      code: `let age = 21;

let price = 99.99;

let temperature = -5;


console.log(age);

console.log(price);

console.log(temperature);`,
      language: "javascript",
      output: `
21

99.99

-5
      `,
      tip: "JavaScript stores numbers as 64-bit floating point values.",
    },


    {
      title: "String Data Type",
      content: `
Strings are used to store text values.

Strings can be written using:

• Double Quotes ""
• Single Quotes ''
• Backticks \` \`
Examples:

"Hello"

'JavaScript'

\`Welcome\`
      `,
      code: `let name = "Harish";


let language = 'JavaScript';


let message = \`Hello World\`;


console.log(name);

console.log(language);

console.log(message);`,
      language: "javascript",
      output: `
Harish

JavaScript

Hello World
      `,
    },


    {
      title: "String Methods",
      content: `
JavaScript provides built-in methods to work with strings.


Common String Methods:


length

Returns the number of characters.


toUpperCase()

Converts text to uppercase.


toLowerCase()

Converts text to lowercase.


includes()

Checks whether text exists.


slice()

Extracts part of a string.
      `,
      code: `let text = "JavaScript";


console.log(text.length);


console.log(
text.toUpperCase()
);


console.log(
text.includes("Script")
);`,
      language: "javascript",
      output: `
10

JAVASCRIPT

true
      `,
    },


    {
      title: "Template Literals",
      content: `
Template literals use backticks (\`) to create strings.


Advantages:

• Insert variables directly
• Support multi-line strings
• Make strings easier to read


Syntax:

${"variable"}
      `,
      code: `let name = "Harish";

let age = 21;


let message =

\`My name is ${name}
and age is ${"age"}\`;


console.log(message);`,
      language: "javascript",
      output: `
My name is Harish

and age is 21
      `,
      tip: "Template literals replace old string concatenation methods.",
    },


    {
      title: "Boolean Data Type",
      content: `
Boolean represents logical values.


Only two Boolean values exist:


true

false


Used in:

• Conditions
• Loops
• Comparisons
• Decision Making
      `,
      code: `let isLoggedIn = true;


let isCompleted = false;


console.log(isLoggedIn);

console.log(isCompleted);`,
      language: "javascript",
      output: `
true

false
      `,
    },


    {
      title: "Undefined Data Type",
      content: `
Undefined means a variable has been declared but no value has been assigned.


JavaScript automatically assigns undefined.
      `,
      code: `let username;


console.log(username);`,
      language: "javascript",
      output: "undefined",
    },


    {
      title: "Null Data Type",
      content: `
Null represents an intentionally empty value.


It means:

"No value"

or

"Empty value"


Developers assign null manually.
      `,
      code: `let selectedUser = null;


console.log(selectedUser);`,
      language: "javascript",
      output: "null",
      tip: "typeof null returns object because of a historical JavaScript bug.",
    },


    {
      title: "BigInt Data Type",
      content: `
BigInt is used for numbers larger than the maximum safe integer limit.


It is created by adding n after a number.
      `,
      code: `let bigNumber =

12345678901234567890n;


console.log(bigNumber);`,
      language: "javascript",
      output: "12345678901234567890n",
    },


    {
      title: "Symbol Data Type",
      content: `
Symbol creates unique values.


Common Uses:

• Unique object keys
• Advanced JavaScript programming
• Avoiding property conflicts
      `,
      code: `let id1 = Symbol("id");


let id2 = Symbol("id");


console.log(id1 === id2);`,
      language: "javascript",
      output: "false",
    },


    {
      title: "Non-Primitive Data Types",
      content: `
Non-primitive data types store collections of values.


Main Non-Primitive Type:

Object


Examples:

• Object
• Array
• Function
      `,
    },


    {
      title: "Object Data Type",
      content: `
Objects store data in key-value pairs.


Object contains:

• Properties
• Methods
• Nested Objects
      `,
      code: `let student = {

name: "Harish",

age: 21,

course: "JavaScript"

};


console.log(student.name);`,
      language: "javascript",
      output: "Harish",
      tip: "Objects are widely used in real-world JavaScript applications.",
    },


    {
      title: "Array Data Type",
      content: `
Arrays store multiple values in a single variable.


Array indexes start from 0.
      `,
      code: `let fruits = [

"Apple",

"Banana",

"Mango"

];


console.log(fruits[0]);`,
      language: "javascript",
      output: "Apple",
    },


    {
      title: "typeof Operator",
      content: `
The typeof operator returns the data type of a value.
      `,
      code: `let name = "Harish";

let age = 21;


console.log(typeof name);


console.log(typeof age);`,
      language: "javascript",
      output: `
string

number
      `,
    },

    {
      title: "Type Conversion in JavaScript",
      content: `
Type conversion means changing one data type into another.

JavaScript supports two types of conversion:


1. Explicit Conversion

The programmer manually converts the data type.


2. Implicit Conversion

JavaScript automatically converts the data type.
      `,
    },


    {
      title: "String Conversion",
      content: `
String() converts any value into a string.

Common Uses:

• Converting numbers to text
• Displaying values
• Working with user input
      `,
      code: `let number = 123;


let text = String(number);


console.log(text);


console.log(typeof text);`,
      language: "javascript",
      output: `
123

string
      `,
    },


    {
      title: "Number Conversion",
      content: `
Number() converts values into numbers.


Examples:

String → Number

Boolean → Number
      `,
      code: `let value = "100";


let result = Number(value);


console.log(result);


console.log(typeof result);`,
      language: "javascript",
      output: `
100

number
      `,
    },


    {
      title: "Boolean Conversion",
      content: `
Boolean() converts values into true or false.


Falsy Values:

false

0

""

null

undefined

NaN


All other values are truthy.
      `,
      code: `console.log(
Boolean(1)
);


console.log(
Boolean(0)
);`,
      language: "javascript",
      output: `
true

false
      `,
    },


    {
      title: "Truthy and Falsy Values",
      content: `
JavaScript values are either truthy or falsy when used in conditions.


Falsy Values:

false

0

-0

""

null

undefined

NaN


Truthy Examples:

"Hello"

100

[]

{}
      `,
      code: `if("Hello")
{
    console.log(
    "Truthy Value"
    );
}


if(0)
{
    console.log(
    "Falsy Value"
    );
}`,
      language: "javascript",
      output: "Truthy Value",
    },


    {
      title: "Implicit Type Conversion",
      content: `
JavaScript automatically converts data types during operations.


Example:

String + Number

Number + Boolean
      `,
      code: `let result =

"10" + 5;


console.log(result);`,
      language: "javascript",
      output: "105",
      tip: "Be careful with automatic conversions because they can create unexpected results.",
    },


    {
      title: "JavaScript Operators",
      content: `
Operators perform operations on variables and values.


Types of Operators:


• Arithmetic Operators

• Assignment Operators

• Comparison Operators

• Logical Operators

• Bitwise Operators

• Ternary Operator

• Increment and Decrement Operators
      `,
    },


    {
      title: "Arithmetic Operators",
      content: `
Arithmetic operators perform mathematical calculations.


Operators:


+

Addition


-

Subtraction


*

Multiplication


/

Division


%

Modulus


**

Exponentiation
      `,
      code: `let a = 10;

let b = 5;


console.log(a + b);


console.log(a - b);


console.log(a * b);


console.log(a / b);


console.log(a % b);`,
      language: "javascript",
      output: `
15

5

50

2

0
      `,
    },


    {
      title: "Addition Operator",
      content: `
The + operator adds numbers.

It also joins strings together.
      `,
      code: `let a = 10;

let b = 20;


console.log(a + b);


console.log(
"Hello " + "JavaScript"
);`,
      language: "javascript",
      output: `
30

Hello JavaScript
      `,
    },


    {
      title: "Subtraction Operator",
      content: `
The - operator subtracts one value from another.
      `,
      code: `let a = 50;

let b = 20;


console.log(a - b);`,
      language: "javascript",
      output: "30",
    },


    {
      title: "Multiplication Operator",
      content: `
The * operator multiplies values.
      `,
      code: `let price = 100;

let quantity = 5;


console.log(
price * quantity
);`,
      language: "javascript",
      output: "500",
    },


    {
      title: "Division Operator",
      content: `
The / operator divides one value by another.
      `,
      code: `let total = 100;

let people = 4;


console.log(
total / people
);`,
      language: "javascript",
      output: "25",
    },


    {
      title: "Modulus Operator",
      content: `
The % operator returns the remainder after division.


Common Uses:

• Checking Even/Odd numbers
• Cyclic operations
• Repeating patterns
      `,
      code: `let number = 10;


console.log(
number % 3
);`,
      language: "javascript",
      output: "1",
    },


    {
      title: "Exponentiation Operator",
      content: `
The ** operator raises a number to a power.
      `,
      code: `let result =

2 ** 3;


console.log(result);`,
      language: "javascript",
      output: "8",
    },


    {
      title: "Assignment Operators",
      content: `
Assignment operators assign values to variables.


Operators:


=

+=

-=

*=

/=

%=
      `,
      code: `let score = 10;


score += 5;


console.log(score);`,
      language: "javascript",
      output: "15",
    },


    {
      title: "Comparison Operators",
      content: `
Comparison operators compare two values.


Operators:


==

Equal value


===

Equal value and type


!=

Not equal


!==

Not equal value or type


>

Greater than


<

Less than


>=

Greater than or equal


<=

Less than or equal
      `,
      code: `let age = 20;


console.log(age > 18);


console.log(age === "20");`,
      language: "javascript",
      output: `
true

false
      `,
      tip: "Always prefer === instead of == in modern JavaScript.",
    },


    {
      title: "Logical Operators",
      content: `
Logical operators combine multiple conditions.


Operators:


&&

AND


||

OR


!

NOT
      `,
      code: `let age = 21;


console.log(

age >= 18 && age <= 60

);`,
      language: "javascript",
      output: "true",
    },


    {
      title: "AND Operator (&&)",
      content: `
The AND operator returns true only when all conditions are true.
      `,
      code: `let username = "Harish";

let password = "1234";


console.log(

username && password

);`,
      language: "javascript",
      output: "1234",
    },


    {
      title: "OR Operator (||)",
      content: `
The OR operator returns true when at least one condition is true.
      `,
      code: `let isAdmin = false;

let isUser = true;


console.log(

isAdmin || isUser

);`,
      language: "javascript",
      output: "true",
    },


    {
      title: "NOT Operator (!)",
      content: `
The NOT operator reverses a boolean value.


true becomes false.

false becomes true.
      `,
      code: `let status = true;


console.log(!status);`,
      language: "javascript",
      output: "false",
    },


  
    {
      title: "Ternary Operator",
      content: `
The ternary operator is a short way to write if...else statements.


Syntax:

condition ? value1 : value2


It contains three parts:

• Condition
• True value
• False value
      `,
      code: `let age = 20;


let result =

age >= 18 ? "Adult" : "Minor";


console.log(result);`,
      language: "javascript",
      output: "Adult",
      tip: "Use ternary operators for simple conditions.",
    },


    {
      title: "Increment Operator",
      content: `
Increment operators increase a value by 1.


Types:

Post Increment:

value++


Pre Increment:

++value
      `,
      code: `let count = 5;


count++;


console.log(count);`,
      language: "javascript",
      output: "6",
    },


    {
      title: "Decrement Operator",
      content: `
Decrement operators decrease a value by 1.


Types:

Post Decrement:

value--


Pre Decrement:

--value
      `,
      code: `let count = 5;


count--;


console.log(count);`,
      language: "javascript",
      output: "4",
    },


    {
      title: "Conditional Statements in JavaScript",
      content: `
Conditional statements are used to make decisions in programs.


JavaScript provides:


• if Statement

• if...else Statement

• else if Statement

• Nested if

• switch Statement
      `,
    },


    {
      title: "if Statement",
      content: `
The if statement executes a block of code when a condition is true.


Syntax:

if(condition)
{
    code
}
      `,
      code: `let age = 20;


if(age >= 18)

{

console.log(
"Eligible to Vote"
);

}`,
      language: "javascript",
      output: "Eligible to Vote",
      tip: "Use if when only one condition needs to be checked.",
    },


    {
      title: "if...else Statement",
      content: `
The if...else statement executes one block when the condition is true and another block when false.
      `,
      code: `let number = 7;


if(number % 2 === 0)

{

console.log(
"Even"
);

}

else

{

console.log(
"Odd"
);

}`,
      language: "javascript",
      output: "Odd",
    },


    {
      title: "else if Statement",
      content: `
The else if statement checks multiple conditions.


It is useful when there are many possible outcomes.
      `,
      code: `let marks = 85;


if(marks >= 90)

{

console.log(
"Grade A"
);

}

else if(marks >= 70)

{

console.log(
"Grade B"
);

}

else

{

console.log(
"Grade C"
);

}`,
      language: "javascript",
      output: "Grade B",
    },


    {
      title: "Nested if Statement",
      content: `
A nested if statement means an if statement inside another if statement.


Used when multiple conditions depend on each other.
      `,
      code: `let username = "admin";

let password = "1234";


if(username === "admin")

{

    if(password === "1234")

    {

        console.log(
        "Login Successful"
        );

    }

}`,
      language: "javascript",
      output: "Login Successful",
    },


    {
      title: "switch Statement",
      content: `
The switch statement selects one block of code from multiple options.


Syntax:

switch(expression)

{

case value:

code

break;

}
      `,
      code: `let day = 3;


switch(day)

{

case 1:

console.log(
"Monday"
);

break;


case 2:

console.log(
"Tuesday"
);

break;


case 3:

console.log(
"Wednesday"
);

break;


default:

console.log(
"Invalid Day"
);

}`,
      language: "javascript",
      output: "Wednesday",
      tip: "Use switch when comparing one value with many choices.",
    },


    {
      title: "Loops in JavaScript",
      content: `
Loops are used to repeat a block of code multiple times.


Types of loops:


• for Loop

• while Loop

• do...while Loop

• for...in Loop

• for...of Loop
      `,
    },


    {
      title: "for Loop",
      content: `
A for loop repeats code a fixed number of times.


Syntax:

for(initialization; condition; increment)
{
    code
}
      `,
      code: `for(let i = 1; i <= 5; i++)

{

console.log(i);

}`,
      language: "javascript",
      output: `
1

2

3

4

5
      `,
      tip: "Use for loops when the number of repetitions is known.",
    },


    {
      title: "while Loop",
      content: `
A while loop executes code as long as the condition remains true.


Syntax:

while(condition)
{
    code
}
      `,
      code: `let i = 1;


while(i <= 5)

{

console.log(i);

i++;

}`,
      language: "javascript",
      output: `
1

2

3

4

5
      `,
    },


    {
      title: "do...while Loop",
      content: `
The do...while loop executes the code at least once before checking the condition.
      `,
      code: `let i = 1;


do

{

console.log(i);

i++;


}

while(i <= 5);`,
      language: "javascript",
      output: `
1

2

3

4

5
      `,
    },


    {
      title: "break Statement",
      content: `
The break statement stops the loop immediately.


It is used when we want to exit a loop early.
      `,
      code: `for(let i = 1; i <= 10; i++)

{

if(i === 5)

{

break;

}


console.log(i);

}`,
      language: "javascript",
      output: `
1

2

3

4
      `,
    },


    {
      title: "continue Statement",
      content: `
The continue statement skips the current iteration and moves to the next iteration.
      `,
      code: `for(let i = 1; i <= 5; i++)

{

if(i === 3)

{

continue;

}


console.log(i);

}`,
      language: "javascript",
      output: `
1

2

4

5
      `,
    },


    {
      title: "Nested Loops",
      content: `
A loop inside another loop is called a nested loop.


Common Uses:

• Patterns
• Matrix Operations
• Tables
      `,
      code: `for(let i = 1; i <= 3; i++)

{

for(let j = 1; j <= 3; j++)

{

console.log(i,j);

}

}`,
      language: "javascript",
      output: "Nested loop execution",
    },


    {
      title: "Functions in JavaScript",
      content: `
A function is a reusable block of code designed to perform a specific task.

Functions help in:

• Code Reusability
• Better Organization
• Easier Debugging
• Reducing Code Duplication


A function executes only when it is called.
      `,
      code: `function greet()
{

console.log(
"Hello JavaScript"
);

}


greet();`,
      language: "javascript",
      output: "Hello JavaScript",
      tip: "Create small functions that perform one specific task.",
    },


    {
      title: "Function Declaration",
      content: `
A function declaration creates a function using the function keyword.


Syntax:

function functionName()
{
    code
}
      `,
      code: `function add()
{

let a = 10;

let b = 20;


console.log(a + b);

}


add();`,
      language: "javascript",
      output: "30",
    },


    {
      title: "Function Expression",
      content: `
A function can be stored inside a variable.

This is called a function expression.
      `,
      code: `const multiply = function()
{

let a = 5;

let b = 4;


console.log(a * b);

};


multiply();`,
      language: "javascript",
      output: "20",
    },


    {
      title: "Calling a Function",
      content: `
Calling a function means executing the function code.

A function can be called multiple times.
      `,
      code: `function message()
{

console.log(
"Welcome"
);

}


message();

message();

message();`,
      language: "javascript",
      output: `
Welcome

Welcome

Welcome
      `,
    },


    {
      title: "Function Parameters",
      content: `
Parameters are variables listed inside a function definition.

They receive values when the function is called.
      `,
      code: `function greet(name)
{

console.log(
"Hello " + name
);

}


greet("Harish");`,
      language: "javascript",
      output: "Hello Harish",
    },


    {
      title: "Function Arguments",
      content: `
Arguments are the actual values passed to a function when calling it.
      `,
      code: `function add(a,b)
{

console.log(a+b);

}


add(10,20);`,
      language: "javascript",
      output: "30",
    },


    {
      title: "Return Statement",
      content: `
The return statement sends a value back from a function.


After return executes, the function stops.
      `,
      code: `function square(num)
{

return num * num;

}


let result = square(5);


console.log(result);`,
      language: "javascript",
      output: "25",
    },


    {
      title: "Default Parameters",
      content: `
Default parameters provide default values when no argument is passed.
      `,
      code: `function greet(
name = "Guest"
)

{

console.log(
"Hello " + name
);

}


greet();


greet("Harish");`,
      language: "javascript",
      output: `
Hello Guest

Hello Harish
      `,
    },


    {
      title: "Multiple Parameters",
      content: `
Functions can accept multiple parameters.
      `,
      code: `function student(
name,
age
)

{

console.log(name);

console.log(age);

}


student(
"Harish",
21
);`,
      language: "javascript",
      output: `
Harish

21
      `,
    },


    {
      title: "Arrow Functions",
      content: `
Arrow functions were introduced in ES6.

They provide a shorter syntax for writing functions.


Syntax:

(parameters) => expression
      `,
      code: `const add = (a,b) =>

{

return a+b;

};


console.log(
add(10,20)
);`,
      language: "javascript",
      output: "30",
      tip: "Arrow functions are commonly used with modern JavaScript.",
    },


    {
      title: "Arrow Function Short Syntax",
      content: `
If an arrow function contains a single expression, return can be removed.
      `,
      code: `const multiply =

(a,b) => a*b;


console.log(
multiply(5,5)
);`,
      language: "javascript",
      output: "25",
    },


    {
      title: "Anonymous Functions",
      content: `
A function without a name is called an anonymous function.

They are commonly used as callbacks.
      `,
      code: `setTimeout(

function()
{

console.log(
"Executed"
);

},

1000

);`,
      language: "javascript",
      output: "Executed",
    },


    {
      title: "Callback Functions",
      content: `
A callback function is a function passed as an argument to another function.


Common Uses:

• Events
• Asynchronous Programming
• Array Methods
      `,
      code: `function display()
{

console.log(
"Callback Executed"
);

}


function process(callback)
{

callback();

}


process(display);`,
      language: "javascript",
      output: "Callback Executed",
    },


    {
      title: "Higher Order Functions",
      content: `
A higher-order function is a function that:

• Takes another function as argument

OR

• Returns another function
      `,
      code: `function calculate(
operation
)

{

return operation(10,20);

}


let result = calculate(

(a,b)=>a+b

);


console.log(result);`,
      language: "javascript",
      output: "30",
    },


    {
      title: "Rest Parameters",
      content: `
Rest parameters allow a function to accept unlimited arguments.

Syntax:

...parameter
      `,
      code: `function sum(...numbers)

{

let total = 0;


for(let n of numbers)

{

total += n;

}


return total;

}


console.log(
sum(1,2,3,4)
);`,
      language: "javascript",
      output: "10",
    },


    {
      title: "Scope in JavaScript",
      content: `
Scope determines where variables can be accessed.


Types of Scope:


1. Global Scope

Accessible everywhere.


2. Function Scope

Accessible inside a function.


3. Block Scope

Accessible inside {} blocks.
      `,
      code: `let global = "Global";


function test()
{

let local = "Local";


console.log(local);

}


test();`,
      language: "javascript",
      output: "Local",
    },


    {
      title: "Global Scope",
      content: `
Variables declared outside functions have global scope.

They can be accessed from anywhere in the program.
      `,
      code: `let message = "Hello";


function show()
{

console.log(message);

}


show();`,
      language: "javascript",
      output: "Hello",
    },


    {
      title: "Function Scope",
      content: `
Variables declared inside a function are available only inside that function.
      `,
      code: `function test()
{

let value = 100;


console.log(value);

}


test();`,
      language: "javascript",
      output: "100",
    },


    {
      title: "Block Scope",
      content: `
Variables declared using let and const are block scoped.
      `,
      code: `{

let score = 50;


console.log(score);

}`,
      language: "javascript",
      output: "50",
    },


    {
      title: "Hoisting in JavaScript",
      content: `
Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.


Function declarations are fully hoisted.


Variables declared with var are hoisted but not initialized.
      `,
      code: `hello();


function hello()
{

console.log(
"Hello"
);

}`,
      language: "javascript",
      output: "Hello",
      tip: "let and const are hoisted but cannot be accessed before declaration.",
    },


    {
      title: "Closures in JavaScript",
      content: `
A closure is created when an inner function remembers variables from its outer function even after the outer function has finished executing.


Closures are used in:

• Data Privacy
• React Hooks
• Advanced JavaScript Patterns
      `,
      code: `function outer()
{

let count = 0;


return function()
{

count++;

console.log(count);

};

}


let counter = outer();


counter();

counter();`,
      language: "javascript",
      output: `
1

2
      `,
    },

    {
      title: "JavaScript Objects",
      content: `
Objects are one of the most important concepts in JavaScript.

An object stores data in key-value pairs.

Objects can contain:

• Properties
• Methods
• Arrays
• Other Objects


Example:

student = {

name: "Harish",

age: 21

}
      `,
      code: `let student = {

name: "Harish",

age: 21,

course: "JavaScript"

};


console.log(student);`,
      language: "javascript",
      output: `
{
 name: "Harish",
 age: 21,
 course: "JavaScript"
}
      `,
    },


    {
      title: "Creating Objects",
      content: `
There are different ways to create objects in JavaScript.


1. Object Literal


2. Object Constructor


3. Class Syntax
      `,
      code: `let user = {

name: "Harish",

age: 21

};


console.log(user.name);`,
      language: "javascript",
      output: "Harish",
    },


    {
      title: "Accessing Object Properties",
      content: `
Object properties can be accessed in two ways:


1. Dot Notation


2. Bracket Notation
      `,
      code: `let person = {

name: "Harish",

age: 21

};


console.log(person.name);


console.log(person["age"]);`,
      language: "javascript",
      output: `
Harish

21
      `,
    },


    {
      title: "Adding Object Properties",
      content: `
New properties can be added to an existing object.
      `,
      code: `let student = {

name: "Harish"

};


student.age = 21;


student.course = "JavaScript";


console.log(student);`,
      language: "javascript",
      output: `
{
name:"Harish",
age:21,
course:"JavaScript"
}
      `,
    },


    {
      title: "Updating Object Properties",
      content: `
Existing object values can be modified.
      `,
      code: `let user = {

name:"Harish",

age:20

};


user.age = 21;


console.log(user.age);`,
      language: "javascript",
      output: "21",
    },


    {
      title: "Deleting Object Properties",
      content: `
The delete keyword removes properties from objects.
      `,
      code: `let student = {

name:"Harish",

age:21

};


delete student.age;


console.log(student);`,
      language: "javascript",
      output: `
{
name:"Harish"
}
      `,
    },


    {
      title: "Object Methods",
      content: `
A function inside an object is called a method.


Methods define object behavior.
      `,
      code: `let person = {

name:"Harish",


greet:function()

{

console.log(
"Hello"
);

}

};


person.greet();`,
      language: "javascript",
      output: "Hello",
    },


    {
      title: "this Keyword",
      content: `
The this keyword refers to the current object.


It allows accessing object properties inside methods.
      `,
      code: `let student = {

name:"Harish",


display:function()

{

console.log(
this.name
);

}

};


student.display();`,
      language: "javascript",
      output: "Harish",
      tip: "The value of this depends on how a function is called.",
    },


    {
      title: "Object Destructuring",
      content: `
Object destructuring extracts properties from objects into variables.


It was introduced in ES6.
      `,
      code: `let student = {

name:"Harish",

age:21

};


let {

name,

age

}=student;


console.log(name);

console.log(age);`,
      language: "javascript",
      output: `
Harish

21
      `,
    },


    {
      title: "Object Spread Operator",
      content: `
The spread operator (...) copies object properties.


It is commonly used for:

• Copying objects
• Merging objects
• Updating values
      `,
      code: `let user = {

name:"Harish"

};


let updatedUser = {

...user,

age:21

};


console.log(updatedUser);`,
      language: "javascript",
      output: `
{
name:"Harish",
age:21
}
      `,
    },


    {
      title: "Object.keys() Method",
      content: `
Object.keys() returns an array containing object property names.
      `,
      code: `let student = {

name:"Harish",

age:21

};


console.log(
Object.keys(student)
);`,
      language: "javascript",
      output: `
[
"name",
"age"
]
      `,
    },


    {
      title: "Object.values() Method",
      content: `
Object.values() returns an array containing object values.
      `,
      code: `let student = {

name:"Harish",

age:21

};


console.log(
Object.values(student)
);`,
      language: "javascript",
      output: `
[
"Harish",
21
]
      `,
    },


    {
      title: "Object.entries() Method",
      content: `
Object.entries() converts object properties into key-value arrays.
      `,
      code: `let user = {

name:"Harish",

age:21

};


console.log(
Object.entries(user)
);`,
      language: "javascript",
      output: `
[
["name","Harish"],
["age",21]
]
      `,
    },


    {
      title: "Object Constructor",
      content: `
Objects can also be created using constructors.

The Object() constructor creates an empty object.
      `,
      code: `let student = new Object();


student.name = "Harish";

student.age = 21;


console.log(student);`,
      language: "javascript",
      output: `
{
name:"Harish",
age:21
}
      `,
    },


    {
      title: "JavaScript Classes",
      content: `
Classes provide a blueprint for creating objects.


Classes were introduced in ES6.


A class contains:

• Properties
• Methods
• Constructor
      `,
      code: `class Student

{


display()

{

console.log(
"Student Object"
);

}


}


let s = new Student();


s.display();`,
      language: "javascript",
      output: "Student Object",
    },


    {
      title: "Class Constructor",
      content: `
A constructor is a special method that runs automatically when an object is created.


It initializes object properties.
      `,
      code: `class Student

{


constructor(name)

{

this.name = name;

}


display()

{

console.log(this.name);

}


}


let s = new Student(
"Harish"
);


s.display();`,
      language: "javascript",
      output: "Harish",
    },


    {
      title: "Class Methods",
      content: `
Methods are functions defined inside a class.


They describe object behavior.
      `,
      code: `class Calculator

{


add(a,b)

{

return a+b;

}


}


let calc = new Calculator();


console.log(
calc.add(10,20)
);`,
      language: "javascript",
      output: "30",
    },


    {
      title: "Inheritance in JavaScript",
      content: `
Inheritance allows one class to use properties and methods of another class.


It improves code reuse.


Keyword:

extends
      `,
      code: `class Animal

{

sound()

{

console.log(
"Animal Sound"
);

}

}


class Dog extends Animal

{


}


let d = new Dog();


d.sound();`,
      language: "javascript",
      output: "Animal Sound",
    },


    {
      title: "super Keyword",
      content: `
The super keyword calls the constructor or methods of the parent class.
      `,
      code: `class Animal

{


constructor(name)

{

this.name = name;

}


}


class Dog extends Animal

{


constructor(name)

{

super(name);

}

}


let d = new Dog(
"Tommy"
);


console.log(d.name);`,
      language: "javascript",
      output: "Tommy",
    },


    {
      title: "Encapsulation",
      content: `
Encapsulation means restricting direct access to object data.


JavaScript supports private fields using #.
      `,
      code: `class Bank

{


#balance = 1000;


getBalance()

{

return this.#balance;

}


}


let account = new Bank();


console.log(
account.getBalance()
);`,
      language: "javascript",
      output: "1000",
    },


    {
      title: "JavaScript Arrays",
      content: `
An array is a special data structure used to store multiple values in a single variable.


Arrays can store:

• Numbers
• Strings
• Objects
• Functions
• Other Arrays


Array indexing starts from 0.
      `,
      code: `let fruits = [

"Apple",

"Banana",

"Mango"

];


console.log(fruits);


console.log(fruits[0]);`,
      language: "javascript",
      output: `
[
Apple,
Banana,
Mango
]

Apple
      `,
    },


    {
      title: "Creating Arrays",
      content: `
There are two common ways to create arrays:


1. Array Literal


2. Array Constructor
      `,
      code: `// Array Literal

let numbers = [1,2,3,4];


// Array Constructor

let values = new Array(
10,20,30
);


console.log(numbers);

console.log(values);`,
      language: "javascript",
      output: `
[1,2,3,4]

[10,20,30]
      `,
    },


    {
      title: "Accessing Array Elements",
      content: `
Array elements are accessed using index numbers.


The first element has index 0.
      `,
      code: `let colors = [

"Red",

"Green",

"Blue"

];


console.log(colors[1]);`,
      language: "javascript",
      output: "Green",
    },


    {
      title: "Updating Array Elements",
      content: `
Array values can be changed using their index.
      `,
      code: `let fruits = [

"Apple",

"Banana"

];


fruits[1] = "Mango";


console.log(fruits);`,
      language: "javascript",
      output: `
[
Apple,
Mango
]
      `,
    },


    {
      title: "Array Length Property",
      content: `
The length property returns the number of elements in an array.
      `,
      code: `let numbers = [

10,

20,

30,

40

];


console.log(
numbers.length
);`,
      language: "javascript",
      output: "4",
    },


    {
      title: "push() Method",
      content: `
The push() method adds a new element at the end of an array.
      `,
      code: `let fruits = [

"Apple",

"Banana"

];


fruits.push(
"Mango"
);


console.log(fruits);`,
      language: "javascript",
      output: `
[
Apple,
Banana,
Mango
]
      `,
    },


    {
      title: "pop() Method",
      content: `
The pop() method removes the last element from an array.
      `,
      code: `let fruits = [

"Apple",

"Banana",

"Mango"

];


fruits.pop();


console.log(fruits);`,
      language: "javascript",
      output: `
[
Apple,
Banana
]
      `,
    },


    {
      title: "shift() Method",
      content: `
The shift() method removes the first element from an array.
      `,
      code: `let numbers = [

10,

20,

30

];


numbers.shift();


console.log(numbers);`,
      language: "javascript",
      output: `
[
20,
30
]
      `,
    },


    {
      title: "unshift() Method",
      content: `
The unshift() method adds elements at the beginning of an array.
      `,
      code: `let numbers = [

20,

30

];


numbers.unshift(
10
);


console.log(numbers);`,
      language: "javascript",
      output: `
[
10,
20,
30
]
      `,
    },


    {
      title: "splice() Method",
      content: `
The splice() method can add, remove, or replace elements in an array.


Syntax:

array.splice(start, deleteCount, items)
      `,
      code: `let fruits = [

"Apple",

"Banana",

"Mango"

];


fruits.splice(

1,

1,

"Orange"

);


console.log(fruits);`,
      language: "javascript",
      output: `
[
Apple,
Orange,
Mango
]
      `,
    },


    {
      title: "slice() Method",
      content: `
The slice() method returns a copy of a portion of an array.


It does not modify the original array.
      `,
      code: `let numbers = [

10,

20,

30,

40

];


let result = numbers.slice(
1,
3
);


console.log(result);`,
      language: "javascript",
      output: `
[
20,
30
]
      `,
    },


    {
      title: "concat() Method",
      content: `
The concat() method joins two or more arrays.
      `,
      code: `let first = [

1,

2

];


let second = [

3,

4

];


let result = first.concat(second);


console.log(result);`,
      language: "javascript",
      output: `
[
1,
2,
3,
4
]
      `,
    },


    {
      title: "indexOf() Method",
      content: `
The indexOf() method returns the position of an element.


If the element is not found, it returns -1.
      `,
      code: `let fruits = [

"Apple",

"Banana",

"Mango"

];


console.log(

fruits.indexOf("Banana")

);`,
      language: "javascript",
      output: "1",
    },


    {
      title: "includes() Method",
      content: `
The includes() method checks whether an array contains a value.
      `,
      code: `let numbers = [

10,

20,

30

];


console.log(

numbers.includes(20)

);`,
      language: "javascript",
      output: "true",
    },


    {
      title: "forEach() Method",
      content: `
The forEach() method executes a function for every array element.
      `,
      code: `let numbers = [

1,

2,

3

];


numbers.forEach(

function(num)

{

console.log(num);

}

);`,
      language: "javascript",
      output: `
1

2

3
      `,
    },


    {
      title: "map() Method",
      content: `
The map() method creates a new array by applying a function to every element.
      `,
      code: `let numbers = [

1,

2,

3

];


let doubled = numbers.map(

num => num * 2

);


console.log(doubled);`,
      language: "javascript",
      output: `
[
2,
4,
6
]
      `,
      tip: "map() does not change the original array.",
    },


    {
      title: "filter() Method",
      content: `
The filter() method creates a new array containing elements that pass a condition.
      `,
      code: `let numbers = [

10,

15,

20,

25

];


let result = numbers.filter(

num => num > 15

);


console.log(result);`,
      language: "javascript",
      output: `
[
20,
25
]
      `,
    },


    {
      title: "reduce() Method",
      content: `
The reduce() method reduces an array into a single value.


Common Uses:

• Sum calculation
• Average
• Data processing
      `,
      code: `let numbers = [

10,

20,

30

];


let total = numbers.reduce(

(sum,num)=>sum+num,

0

);


console.log(total);`,
      language: "javascript",
      output: "60",
    },


    {
      title: "find() Method",
      content: `
The find() method returns the first element that matches a condition.
      `,
      code: `let numbers = [

5,

10,

15

];


let result = numbers.find(

num => num > 8

);


console.log(result);`,
      language: "javascript",
      output: "10",
    },


    {
      title: "sort() Method",
      content: `
The sort() method sorts elements of an array.

By default, JavaScript sorts values as strings.

For numbers, use a compare function.
      `,
      code: `let numbers = [

40,

10,

30,

20

];


numbers.sort();


console.log(numbers);`,
      language: "javascript",
      output: `
[
10,
20,
30,
40
]
      `,
      tip: "Use (a-b) for ascending number sorting.",
    },


    {
      title: "Sorting Numbers",
      content: `
The compare function controls the sorting order.

Ascending:

a - b


Descending:

b - a
      `,
      code: `let numbers = [

50,

20,

80,

10

];


numbers.sort(

(a,b)=>a-b

);


console.log(numbers);`,
      language: "javascript",
      output: `
[
10,
20,
50,
80
]
      `,
    },


    {
      title: "reverse() Method",
      content: `
The reverse() method reverses the order of array elements.
      `,
      code: `let numbers = [

1,

2,

3,

4

];


numbers.reverse();


console.log(numbers);`,
      language: "javascript",
      output: `
[
4,
3,
2,
1
]
      `,
    },


    {
      title: "every() Method",
      content: `
The every() method checks whether all elements satisfy a condition.


It returns true or false.
      `,
      code: `let numbers = [

10,

20,

30

];


let result = numbers.every(

num => num > 5

);


console.log(result);`,
      language: "javascript",
      output: "true",
    },


    {
      title: "some() Method",
      content: `
The some() method checks whether at least one element satisfies a condition.
      `,
      code: `let numbers = [

5,

10,

15

];


let result = numbers.some(

num => num > 12

);


console.log(result);`,
      language: "javascript",
      output: "true",
    },


    {
      title: "Array Destructuring",
      content: `
Array destructuring allows extracting values from arrays into variables.

Introduced in ES6.
      `,
      code: `let colors = [

"Red",

"Green",

"Blue"

];


let [

first,

second,

third

] = colors;


console.log(first);

console.log(second);`,
      language: "javascript",
      output: `
Red

Green
      `,
    },


    {
      title: "Spread Operator with Arrays",
      content: `
The spread operator (...) expands array elements.

Uses:

• Copy arrays
• Merge arrays
• Add elements
      `,
      code: `let first = [

1,

2,

3

];


let second = [

...first,

4,

5

];


console.log(second);`,
      language: "javascript",
      output: `
[
1,
2,
3,
4,
5
]
      `,
    },


    {
      title: "Rest Operator with Arrays",
      content: `
The rest operator collects remaining values into an array.
      `,
      code: `let numbers = [

10,

20,

30,

40

];


let [

first,

...remaining

] = numbers;


console.log(first);


console.log(remaining);`,
      language: "javascript",
      output: `
10

[
20,
30,
40
]
      `,
    },


    {
      title: "Nested Arrays",
      content: `
An array inside another array is called a nested array.


Used for:

• Matrices
• Tables
• Complex data structures
      `,
      code: `let matrix = [

[1,2],

[3,4]

];


console.log(

matrix[1][0]

);`,
      language: "javascript",
      output: "3",
    },


    {
      title: "Objects Inside Arrays",
      content: `
Arrays can store objects.

This is commonly used when handling collections of data.
      `,
      code: `let students = [

{

name:"Harish",

age:21

},


{

name:"Rahul",

age:22

}

];


console.log(

students[0].name

);`,
      language: "javascript",
      output: "Harish",
    },


    {
      title: "JSON Introduction",
      content: `
JSON stands for JavaScript Object Notation.


It is a format used for storing and exchanging data.


Common Uses:

• APIs
• Web Applications
• Database Communication
      `,
      code: `let user = {

name:"Harish",

age:21

};


console.log(user);`,
      language: "javascript",
      output: `
{
name:"Harish",
age:21
}
      `,
    },


    {
      title: "JSON.stringify()",
      content: `
JSON.stringify() converts a JavaScript object into a JSON string.


Used when storing data.
      `,
      code: `let student = {

name:"Harish",

age:21

};


let jsonData =

JSON.stringify(student);


console.log(jsonData);`,
      language: "javascript",
      output: `
{
"name":"Harish",
"age":21
}
      `,
    },


    {
      title: "JSON.parse()",
      content: `
JSON.parse() converts a JSON string into a JavaScript object.
      `,
      code: `let data =

'{"name":"Harish","age":21}';


let student =

JSON.parse(data);


console.log(student.name);`,
      language: "javascript",
      output: "Harish",
    },


    {
      title: "Local Storage",
      content: `
Local Storage stores data in the browser permanently.

Data remains even after closing the browser.


Storage Limit:

Around 5-10 MB
      `,
      code: `localStorage.setItem(

"name",

"Harish"

);


let user =

localStorage.getItem("name");


console.log(user);`,
      language: "javascript",
      output: "Harish",
    },


    {
      title: "Removing Local Storage Data",
      content: `
Local Storage provides methods to remove stored data.
      `,
      code: `localStorage.removeItem(

"name"

);


localStorage.clear();`,
      language: "javascript",
      output: "Data Removed",
    },


    {
      title: "Session Storage",
      content: `
Session Storage stores data only for one browser session.

Data is removed when the browser tab is closed.
      `,
      code: `sessionStorage.setItem(

"username",

"Harish"

);


console.log(

sessionStorage.getItem(

"username"

)

);`,
      language: "javascript",
      output: "Harish",
    },


    {
      title: "Date Object",
      content: `
The Date object is used to work with dates and times.


It provides methods for:

• Getting dates
• Setting dates
• Formatting dates
      `,
      code: `let today = new Date();


console.log(today);`,
      language: "javascript",
      output: "Current Date and Time",
    },


    {
      title: "Date Methods",
      content: `
Common Date methods:


getFullYear()

Returns year.


getMonth()

Returns month.


getDate()

Returns day.


getDay()

Returns weekday.
      `,
      code: `let date = new Date();


console.log(

date.getFullYear()

);


console.log(

date.getDate()

);`,
      language: "javascript",
      output: `
Current Year

Current Date
      `,
    },


    {
      title: "Math Object",
      content: `
The Math object provides mathematical functions.


Common Methods:


Math.round()

Math.floor()

Math.ceil()

Math.max()

Math.min()

Math.random()
      `,
      code: `console.log(

Math.round(4.6)

);


console.log(

Math.floor(4.9)

);


console.log(

Math.ceil(4.1)

);`,
      language: "javascript",
      output: `
5

4

5
      `,
    },


    {
      title: "Math.random() Method",
      content: `
Math.random() generates a random number between 0 and 1.
      `,
      code: `let random = Math.random();


console.log(random);`,
      language: "javascript",
      output: "Random Number",
    },


    {
      title: "Error Handling in JavaScript",
      content: `
Errors are problems that occur during program execution.

JavaScript provides error handling mechanisms to prevent program crashes.


Main keywords:

• try

• catch

• finally

• throw
      `,
    },


    {
      title: "try...catch Statement",
      content: `
The try...catch statement handles runtime errors.

The code inside try is executed first.

If an error occurs, catch handles the error.
      `,
      code: `try

{

console.log(
undefinedVariable
);

}

catch(error)

{

console.log(
"Error Found"
);

}`,
      language: "javascript",
      output: "Error Found",
      tip: "Use try...catch when working with risky operations.",
    },


    {
      title: "finally Statement",
      content: `
The finally block always executes whether an error occurs or not.

It is commonly used for cleanup operations.
      `,
      code: `try

{

console.log(
"Try Block"
);

}

catch(error)

{

console.log(
"Error"
);

}

finally

{

console.log(
"Finally Executed"
);

}`,
      language: "javascript",
      output: `
Try Block

Finally Executed
      `,
    },


    {
      title: "throw Keyword",
      content: `
The throw keyword creates custom errors.


It is used when developers want to generate their own error messages.
      `,
      code: `let age = 15;


if(age < 18)

{

throw "Not Eligible";

}`,
      language: "javascript",
      output: "Not Eligible",
    },


    {
      title: "JavaScript DOM Introduction",
      content: `
DOM stands for Document Object Model.


The DOM represents an HTML document as a tree structure.


JavaScript uses DOM to:

• Change HTML content
• Change CSS styles
• Add elements
• Remove elements
• Handle events
      `,
    },


    {
      title: "Selecting HTML Elements",
      content: `
JavaScript provides different methods to select HTML elements.


Methods:


getElementById()


getElementsByClassName()


getElementsByTagName()


querySelector()


querySelectorAll()
      `,
    },


    {
      title: "getElementById()",
      content: `
getElementById() selects an element using its id attribute.
      `,
      code: `<!DOCTYPE html>

<html>

<body>


<h1 id="title">

Hello

</h1>


<script>

let heading =

document.getElementById(
"title"
);


console.log(heading);

</script>


</body>

</html>`,
      language: "javascript",
      output: "HTML Element Selected",
    },


    {
      title: "querySelector()",
      content: `
querySelector() selects the first element matching a CSS selector.
      `,
      code: `let element =

document.querySelector(
".box"
);


console.log(element);`,
      language: "javascript",
      output: "First matching element",
    },


    {
      title: "querySelectorAll()",
      content: `
querySelectorAll() selects all elements matching a CSS selector.
      `,
      code: `let buttons =

document.querySelectorAll(
"button"
);


console.log(buttons);`,
      language: "javascript",
      output: "NodeList of buttons",
    },


    {
      title: "Changing HTML Content",
      content: `
JavaScript can modify HTML content using:

innerHTML

innerText

textContent
      `,
      code: `document.getElementById(

"title"

).innerHTML =

"JavaScript Changed";`,
      language: "javascript",
      output: "HTML Content Updated",
    },


    {
      title: "Changing CSS Using JavaScript",
      content: `
JavaScript can modify CSS styles dynamically.
      `,
      code: `let heading =

document.getElementById(
"title"
);


heading.style.color =

"blue";`,
      language: "javascript",
      output: "CSS Updated",
    },


    {
      title: "Creating HTML Elements",
      content: `
JavaScript can create new HTML elements dynamically.


Methods:


createElement()


appendChild()
      `,
      code: `let heading =

document.createElement(
"h1"
);


heading.innerHTML =

"Hello JavaScript";


document.body.appendChild(
heading
);`,
      language: "javascript",
      output: "New Element Created",
    },


    {
      title: "Removing HTML Elements",
      content: `
JavaScript can remove existing HTML elements from the DOM.
      `,
      code: `let element =

document.getElementById(
"box"
);


element.remove();`,
      language: "javascript",
      output: "Element Removed",
    },


    {
      title: "JavaScript Events",
      content: `
Events are actions performed by users or browsers.


Examples:


• Click

• Mouse Movement

• Keyboard Input

• Form Submission

• Page Loading
      `,
    },


    {
      title: "onclick Event",
      content: `
The onclick event runs when an element is clicked.
      `,
      code: `<!DOCTYPE html>

<html>

<body>


<button onclick="showMessage()">

Click Me

</button>


<script>

function showMessage()

{

alert(
"Button Clicked"
);

}

</script>


</body>

</html>`,
      language: "javascript",
      output: "Button Clicked",
    },


    {
      title: "addEventListener()",
      content: `
addEventListener() attaches events to elements.


It is the recommended modern method.
      `,
      code: `let button =

document.querySelector(
"button"
);


button.addEventListener(

"click",

function()

{

console.log(
"Clicked"
);

}

);`,
      language: "javascript",
      output: "Clicked",
      tip: "Use addEventListener instead of inline events.",
    },


    {
      title: "Mouse Events",
      content: `
Common mouse events:


click

Runs on click.


mouseover

Runs when mouse enters.


mouseout

Runs when mouse leaves.


mousedown

Mouse button pressed.


mouseup

Mouse button released.
      `,
    },


    {
      title: "Keyboard Events",
      content: `
Keyboard events detect user keyboard actions.


Events:


keydown

keyup

keypress
      `,
      code: `document.addEventListener(

"keydown",

function(event)

{

console.log(
event.key
);

}

);`,
      language: "javascript",
      output: "Pressed Key",
    },


    {
      title: "Form Events",
      content: `
Forms use events for validation and processing.


Common events:


submit

change

input

focus

blur
      `,
    },


    {
      title: "setTimeout() Function",
      content: `
setTimeout() executes a function after a specified delay.


Time is measured in milliseconds.
      `,
      code: `setTimeout(

function()

{

console.log(
"Executed After 2 Seconds"
);

},

2000

);`,
      language: "javascript",
      output: "Executed After 2 Seconds",
    },


    {
      title: "setInterval() Function",
      content: `
setInterval() repeatedly executes a function after a fixed time interval.
      `,
      code: `setInterval(

function()

{

console.log(
"Running"
);

},

1000

);`,
      language: "javascript",
      output: "Running Every Second",
    },


    {
      title: "clearTimeout()",
      content: `
clearTimeout() stops a timeout before execution.
      `,
      code: `let timer = setTimeout(

function()

{

console.log(
"Hello"
);

},

3000

);


clearTimeout(timer);`,
      language: "javascript",
      output: "Timer Cancelled",
    },


    {
      title: "clearInterval()",
      content: `
clearInterval() stops a running interval.
      `,
      code: `let counter = setInterval(

function()

{

console.log(
"Running"
);

},

1000

);


clearInterval(counter);`,
      language: "javascript",
      output: "Interval Stopped",
    },

    {
      title: "Asynchronous JavaScript",
      content: `
Asynchronous JavaScript allows programs to perform tasks without blocking the execution of other code.


Examples:

• Fetching data from APIs
• Reading files
• Timers
• Database operations


JavaScript handles asynchronous operations using:

• Callbacks
• Promises
• async/await
      `,
    },


    {
      title: "Synchronous vs Asynchronous JavaScript",
      content: `
Synchronous:

• Executes code line by line.
• Next operation waits until previous operation finishes.


Asynchronous:

• Allows multiple operations to run.
• Does not block program execution.
      `,
      code: `console.log(
"Start"
);


setTimeout(

()=>{

console.log(
"Async Task"
);

},

2000

);


console.log(
"End"
);`,
      language: "javascript",
      output: `
Start

End

Async Task
      `,
    },


    {
      title: "Callback Functions",
      content: `
A callback function is passed as an argument to another function.


Callbacks are commonly used in asynchronous programming.
      `,
      code: `function message(callback)

{

console.log(
"Hello"
);


callback();

}


function complete()

{

console.log(
"Completed"
);

}


message(complete);`,
      language: "javascript",
      output: `
Hello

Completed
      `,
    },


    {
      title: "Callback Hell",
      content: `
Callback hell occurs when many callbacks are nested inside each other.


Problems:

• Difficult to read
• Hard to debug
• Poor code maintenance


Promises solve this problem.
      `,
      code: `login(function(){

getUser(function(){

getData(function(){

console.log(
"Completed"
);

});

});

});`,
      language: "javascript",
      output: "Nested Callbacks",
    },


    {
      title: "JavaScript Promises",
      content: `
A Promise represents the completion or failure of an asynchronous operation.


A Promise has three states:


1. Pending

Operation is running.


2. Fulfilled

Operation completed successfully.


3. Rejected

Operation failed.
      `,
    },


    {
      title: "Creating a Promise",
      content: `
A Promise is created using the Promise constructor.
      `,
      code: `let promise = new Promise(

function(resolve,reject)

{


let success = true;


if(success)

{

resolve(
"Task Completed"
);

}

else

{

reject(
"Task Failed"
);

}


}

);


console.log(promise);`,
      language: "javascript",
      output: "Promise Object",
    },


    {
      title: "Promise then() Method",
      content: `
The then() method runs when a promise is successfully completed.
      `,
      code: `let promise = Promise.resolve(

"Success"

);


promise.then(

result => {

console.log(result);

}

);`,
      language: "javascript",
      output: "Success",
    },


    {
      title: "Promise catch() Method",
      content: `
The catch() method handles rejected promises.
      `,
      code: `let promise = Promise.reject(

"Error Occurred"

);


promise.catch(

error => {

console.log(error);

}

);`,
      language: "javascript",
      output: "Error Occurred",
    },


    {
      title: "Promise finally() Method",
      content: `
The finally() method executes after promise completion.

It runs whether the promise succeeds or fails.
      `,
      code: `Promise.resolve(

"Done"

)

.finally(

()=>{

console.log(
"Finished"
);

}

);`,
      language: "javascript",
      output: "Finished",
    },


    {
      title: "Promise Chaining",
      content: `
Promise chaining allows multiple asynchronous operations in sequence.


It improves readability compared to nested callbacks.
      `,
      code: `Promise.resolve(10)

.then(

value => value * 2

)

.then(

result => console.log(result)

);`,
      language: "javascript",
      output: "20",
    },


    {
      title: "async Function",
      content: `
The async keyword creates an asynchronous function.


An async function always returns a Promise.
      `,
      code: `async function hello()

{

return "Hello";

}


hello().then(

result => console.log(result)

);`,
      language: "javascript",
      output: "Hello",
    },


    {
      title: "await Keyword",
      content: `
The await keyword pauses execution until a Promise is resolved.


It can only be used inside async functions.
      `,
      code: `function getData()

{

return Promise.resolve(
"Data Received"
);

}


async function show()

{

let result = await getData();


console.log(result);

}


show();`,
      language: "javascript",
      output: "Data Received",
    },


    {
      title: "async/await Error Handling",
      content: `
Errors in async/await are handled using try...catch.
      `,
      code: `async function fetchData()

{

try

{

let result = await Promise.reject(

"Failed"

);


console.log(result);

}


catch(error)

{

console.log(error);

}

}


fetchData();`,
      language: "javascript",
      output: "Failed",
    },


    {
      title: "Fetch API Introduction",
      content: `
Fetch API is used to make HTTP requests from JavaScript.


It is commonly used for:

• Getting data from servers
• Sending data
• Working with REST APIs
      `,
      code: `fetch(
"https://api.example.com/data"
)

.then(

response => response.json()

)

.then(

data => console.log(data)

);`,
      language: "javascript",
      output: "API Data",
    },


    {
      title: "Fetch API with async/await",
      content: `
The fetch API works well with async/await syntax.
      `,
      code: `async function getUsers()

{

let response = await fetch(

"https://api.example.com/users"

);


let data = await response.json();


console.log(data);

}


getUsers();`,
      language: "javascript",
      output: "Users Data",
    },


    {
      title: "HTTP Methods",
      content: `
HTTP methods define actions performed on server data.


Common Methods:


GET

Retrieve data.


POST

Send new data.


PUT

Update existing data.


DELETE

Remove data.
      `,
    },


    {
      title: "JavaScript Modules",
      content: `
Modules allow JavaScript code to be separated into multiple files.


Benefits:

• Code organization
• Reusability
• Easier maintenance
      `,
    },


    {
      title: "Exporting Modules",
      content: `
The export keyword makes variables and functions available to other files.
      `,
      code: `export function add(a,b)

{

return a+b;

}`,
      language: "javascript",
      output: "Module Exported",
    },


    {
      title: "Importing Modules",
      content: `
The import keyword loads exported code from another file.
      `,
      code: `import {

add

}

from "./math.js";


console.log(

add(10,20)

);`,
      language: "javascript",
      output: "30",
    },


    {
      title: "ES6 Features",
      content: `
ECMAScript 6 introduced many modern JavaScript features.


Important ES6 Features:


• let and const

• Arrow Functions

• Template Literals

• Destructuring

• Spread Operator

• Classes

• Modules

• Promises
      `,
    },


    {
      title: "Regular Expressions",
      content: `
Regular Expressions (Regex) are patterns used for searching and validating text.


Uses:

• Email validation
• Password checking
• Searching text
      `,
      code: `let pattern =

/javascript/i;


console.log(

pattern.test(
"JavaScript"
)

);`,
      language: "javascript",
      output: "true",
    },

    {
      title: "Regular Expression Patterns",
      content: `
Regular expressions use special symbols to create search patterns.

Common Symbols:

.
Any character

*
Zero or more occurrences

+
One or more occurrences

?
Optional character

[]
Character set

^
Starts with

$
Ends with
      `,
      code: `let pattern =

/^Hello/;


console.log(

pattern.test(
"Hello World"
)

);`,
      language: "javascript",
      output: "true",
    },


    {
      title: "Email Validation Using Regex",
      content: `
Regular expressions are commonly used to validate email formats.
      `,
      code: `function validateEmail(email)

{

let pattern =

/^[^ ]+@[^ ]+\\.[a-z]{2,3}$/;


return pattern.test(email);

}


console.log(

validateEmail(
"test@gmail.com"
)

);`,
      language: "javascript",
      output: "true",
      tip: "Regex validation improves user input quality.",
    },


    {
      title: "Password Validation",
      content: `
Password validation checks whether a password follows security rules.


Common Rules:

• Minimum length
• Uppercase letters
• Lowercase letters
• Numbers
• Special characters
      `,
      code: `let password =

"Hello@123";


let pattern =

/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;


console.log(

pattern.test(password)

);`,
      language: "javascript",
      output: "true",
    },


    {
      title: "Form Validation Introduction",
      content: `
Form validation checks user input before submitting data.


Benefits:

• Prevents invalid data
• Improves security
• Better user experience
      `,
    },


    {
      title: "Checking Empty Fields",
      content: `
JavaScript can check whether form fields are empty.
      `,
      code: `let username = "";


if(username === "")

{

console.log(
"Username Required"
);

}

else

{

console.log(
"Valid"
);

}`,
      language: "javascript",
      output: "Username Required",
    },


    {
      title: "Input Validation Example",
      content: `
Example of validating user age before submission.
      `,
      code: `let age = 15;


if(age >= 18)

{

console.log(
"Allowed"
);

}

else

{

console.log(
"Not Allowed"
);

}`,
      language: "javascript",
      output: "Not Allowed",
    },


    {
      title: "Prevent Form Submission",
      content: `
preventDefault() stops the default browser behavior.

It is commonly used in form validation.
      `,
      code: `form.addEventListener(

"submit",

function(event)

{

event.preventDefault();


console.log(
"Form Stopped"
);

}

);`,
      language: "javascript",
      output: "Form Stopped",
    },


    {
      title: "Cookies in JavaScript",
      content: `
Cookies store small pieces of information inside the browser.


Uses:

• Remember login
• Store preferences
• Track sessions
      `,
      code: `document.cookie =

"username=Harish";


console.log(

document.cookie

);`,
      language: "javascript",
      output: "username=Harish",
    },


    {
      title: "Creating Cookie with Expiry",
      content: `
Cookies can have expiration dates.

After expiry, the browser removes them.
      `,
      code: `document.cookie =

"username=Harish; expires=Fri, 31 Dec 2026 12:00:00 UTC";`,
      language: "javascript",
      output: "Cookie Created",
    },


    {
      title: "Deleting Cookies",
      content: `
A cookie can be deleted by setting its expiry date in the past.
      `,
      code: `document.cookie =

"username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";`,
      language: "javascript",
      output: "Cookie Deleted",
    },


    {
      title: "Advanced Local Storage",
      content: `
Local Storage stores data permanently in the browser.


It stores data as strings.


Objects need JSON conversion.
      `,
      code: `let user = {

name:"Harish",

age:21

};


localStorage.setItem(

"user",

JSON.stringify(user)

);


console.log(

localStorage.getItem("user")

);`,
      language: "javascript",
      output: `
{
name:"Harish",
age:21
}
      `,
    },


    {
      title: "Reading Objects from Local Storage",
      content: `
JSON.parse() converts stored JSON strings back into objects.
      `,
      code: `let data =

localStorage.getItem(
"user"
);


let user =

JSON.parse(data);


console.log(user.name);`,
      language: "javascript",
      output: "Harish",
    },


    {
      title: "Geolocation API",
      content: `
The Geolocation API provides the user's location.


Used in:

• Maps
• Weather Applications
• Delivery Apps
      `,
      code: `navigator.geolocation.getCurrentPosition(

function(position)

{

console.log(

position.coords.latitude

);

}

);`,
      language: "javascript",
      output: "User Latitude",
      tip: "Browser permission is required for location access.",
    },


    {
      title: "Browser History API",
      content: `
The History API allows JavaScript to interact with browser history.


Methods:

back()

forward()

go()
      `,
      code: `history.back();`,
      language: "javascript",
      output: "Previous Page",
    },


    {
      title: "Browser Location API",
      content: `
The Location API provides information about the current URL.


Common properties:

href

hostname

pathname

reload()
      `,
      code: `console.log(

location.href

);`,
      language: "javascript",
      output: "Current URL",
    },


    {
      title: "Web Workers",
      content: `
Web Workers allow JavaScript code to run in the background.


Benefits:

• Improves performance
• Prevents page freezing
• Handles heavy calculations
      `,
      code: `let worker =

new Worker(
"worker.js"
);


worker.postMessage(
"Hello"
);`,
      language: "javascript",
      output: "Worker Started",
    },


    {
      title: "Object-Oriented JavaScript",
      content: `
JavaScript supports Object-Oriented Programming (OOP).


Main Concepts:

• Objects
• Classes
• Inheritance
• Encapsulation
• Polymorphism
      `,
    },


    {
      title: "JavaScript Classes",
      content: `
Classes provide a blueprint for creating objects.


Introduced in ES6.
      `,
      code: `class Student

{

constructor(name)

{

this.name = name;

}


display()

{

console.log(this.name);

}

}


let student =

new Student(
"Harish"
);


student.display();`,
      language: "javascript",
      output: "Harish",
    },


    {
      title: "Class Constructor",
      content: `
The constructor method runs automatically when an object is created.


It initializes object properties.
      `,
      code: `class Car

{

constructor(model)

{

this.model = model;

}

}


let car =

new Car(
"BMW"
);


console.log(car.model);`,
      language: "javascript",
      output: "BMW",
    },


    {
      title: "Class Methods",
      content: `
Methods are functions defined inside a class.
      `,
      code: `class Calculator

{

add(a,b)

{

return a+b;

}

}


let calc =

new Calculator();


console.log(

calc.add(10,20)

);`,
      language: "javascript",
      output: "30",
    },


    {
      title: "JavaScript Prototype",
      content: `
Every JavaScript object has a hidden property called prototype.


Prototypes allow objects to share properties and methods.


JavaScript uses prototype-based inheritance.
      `,
      code: `function Student(name)

{

this.name = name;

}


Student.prototype.show = function()

{

console.log(this.name);

};


let student =

new Student(
"Harish"
);


student.show();`,
      language: "javascript",
      output: "Harish",
    },


    {
      title: "Prototype Chain",
      content: `
Prototype chain is the mechanism JavaScript uses to search for properties and methods.


When a property is not found in an object, JavaScript looks in its prototype.
      `,
      code: `let user = {

name:"Harish"

};


console.log(

user.toString()

);`,
      language: "javascript",
      output: "[object Object]",
    },


    {
      title: "Constructor Functions",
      content: `
Constructor functions create multiple objects with the same structure.


They are an older way of creating objects before classes.
      `,
      code: `function Person(name,age)

{

this.name = name;

this.age = age;

}


let person1 =

new Person(
"Harish",
21
);


console.log(person1.name);`,
      language: "javascript",
      output: "Harish",
    },


    {
      title: "Inheritance Using Prototype",
      content: `
Prototype inheritance allows one object to access properties of another object.
      `,
      code: `function Animal()

{

this.type = "Animal";

}


Animal.prototype.sound = function()

{

console.log(
"Sound"
);

};


function Dog()

{

}


Dog.prototype =

new Animal();


let dog =

new Dog();


dog.sound();`,
      language: "javascript",
      output: "Sound",
    },


    {
      title: "Encapsulation in JavaScript",
      content: `
Encapsulation means hiding internal data and allowing controlled access.


Benefits:

• Data security
• Better code organization
• Prevent unwanted changes
      `,
      code: `class BankAccount

{

#balance = 0;


deposit(amount)

{

this.#balance += amount;

}


getBalance()

{

return this.#balance;

}

}


let account =

new BankAccount();


account.deposit(100);


console.log(

account.getBalance()

);`,
      language: "javascript",
      output: "100",
      tip: "Private fields use # symbol.",
    },


    {
      title: "Private Class Fields",
      content: `
Private fields cannot be accessed directly outside the class.


They are declared using #.
      `,
      code: `class User

{

#password = "12345";


show()

{

console.log(this.#password);

}

}


let user =

new User();


user.show();`,
      language: "javascript",
      output: "12345",
    },


    {
      title: "Static Methods",
      content: `
Static methods belong to the class itself, not objects.


They are called using the class name.
      `,
      code: `class MathHelper

{

static add(a,b)

{

return a+b;

}

}


console.log(

MathHelper.add(10,20)

);`,
      language: "javascript",
      output: "30",
    },


    {
      title: "Getters in JavaScript",
      content: `
Getters allow accessing methods like properties.


They are used to read values.
      `,
      code: `class Student

{

constructor(name)

{

this._name = name;

}


get name()

{

return this._name;

}

}


let student =

new Student(
"Harish"
);


console.log(student.name);`,
      language: "javascript",
      output: "Harish",
    },


    {
      title: "Setters in JavaScript",
      content: `
Setters allow modifying values with validation.
      `,
      code: `class Student

{

set name(value)

{

this._name = value;

}


}


let student =

new Student();


student.name = "Harish";


console.log(student._name);`,
      language: "javascript",
      output: "Harish",
    },


    {
      title: "Object Methods",
      content: `
JavaScript provides built-in methods for working with objects.


Common Methods:


Object.keys()

Object.values()

Object.entries()

Object.assign()
      `,
      code: `let user = {

name:"Harish",

age:21

};


console.log(

Object.keys(user)

);`,
      language: "javascript",
      output: `
[
name,
age
]
      `,
    },


    {
      title: "Object.keys()",
      content: `
Object.keys() returns all property names of an object.
      `,
      code: `let student = {

name:"Harish",

age:21

};


console.log(

Object.keys(student)

);`,
      language: "javascript",
      output: `
[
"name",
"age"
]
      `,
    },


    {
      title: "Object.values()",
      content: `
Object.values() returns all property values.
      `,
      code: `let user = {

name:"Harish",

age:21

};


console.log(

Object.values(user)

);`,
      language: "javascript",
      output: `
[
Harish,
21
]
      `,
    },


    {
      title: "Object.entries()",
      content: `
Object.entries() converts object properties into key-value arrays.
      `,
      code: `let user = {

name:"Harish",

age:21

};


console.log(

Object.entries(user)

);`,
      language: "javascript",
      output: `
[
[name,Harish],
[age,21]
]
      `,
    },


    {
      title: "Object.assign()",
      content: `
Object.assign() copies properties from one object to another.
      `,
      code: `let first = {

name:"Harish"

};


let second = {};


Object.assign(

second,

first

);


console.log(second);`,
      language: "javascript",
      output: `
{
name:"Harish"
}
      `,
    },


    {
      title: "Map Object",
      content: `
Map stores data in key-value pairs.


Features:

• Keys can be any data type
• Maintains insertion order
• Better than objects for frequent changes
      `,
      code: `let map = new Map();


map.set(
"name",
"Harish"
);


console.log(

map.get("name")

);`,
      language: "javascript",
      output: "Harish",
    },


    {
      title: "Map Methods",
      content: `
Common Map methods:


set()

Adds value.


get()

Gets value.


has()

Checks key.


delete()

Removes value.


clear()

Removes all values.
      `,
      code: `let users = new Map();


users.set(
"id",
101
);


console.log(

users.has("id")

);`,
      language: "javascript",
      output: "true",
    },


    {
      title: "Set Object",
      content: `
Set stores unique values only.


Duplicate values are automatically removed.
      `,
      code: `let numbers = new Set(

[1,2,2,3,3]

);


console.log(numbers);`,
      language: "javascript",
      output: `
{
1,
2,
3
}
      `,
    },


    {
      title: "WeakMap",
      content: `
WeakMap stores key-value pairs where keys must be objects.


It allows automatic memory cleanup.
      `,
      code: `let weak = new WeakMap();


let user = {};


weak.set(

user,

"Data"

);


console.log(

weak.get(user)

);`,
      language: "javascript",
      output: "Data",
    },


    {
      title: "WeakSet",
      content: `
WeakSet stores only objects.


Objects can be garbage collected automatically.
      `,
      code: `let weakSet = new WeakSet();


let user = {};


weakSet.add(user);


console.log(

weakSet.has(user)

);`,
      language: "javascript",
      output: "true",
    },


    {
      title: "Symbol Data Type Advanced",
      content: `
Symbol is a primitive data type used to create unique identifiers.


Features:

• Every Symbol value is unique
• Used as object keys
• Prevents property name conflicts
      `,
      code: `let id1 = Symbol(
"user"
);


let id2 = Symbol(
"user"
);


console.log(
id1 === id2
);`,
      language: "javascript",
      output: "false",
    },


    {
      title: "Symbol as Object Property",
      content: `
Symbols can be used as unique object properties.


They are not visible in normal object loops.
      `,
      code: `let id = Symbol(
"id"
);


let user = {

name:"Harish",

[id]:101

};


console.log(
user[id]
);`,
      language: "javascript",
      output: "101",
    },


    {
      title: "Symbol.iterator",
      content: `
Symbol.iterator allows objects to become iterable.


Iterable objects can be used with:

• for...of loop
• Spread operator
      `,
      code: `let numbers = {

data:[1,2,3],


[Symbol.iterator]()

{

return this.data.values();

}

};


for(let value of numbers)

{

console.log(value);

}`,
      language: "javascript",
      output: `
1

2

3
      `,
    },


    {
      title: "Iterators in JavaScript",
      content: `
An iterator is an object that provides a sequence of values.


It contains a next() method.


next() returns:

value

done
      `,
      code: `let iterator = [

10,

20,

30

][Symbol.iterator]();


console.log(

iterator.next()

);


console.log(

iterator.next()

);`,
      language: "javascript",
      output: `
{
value:10,
done:false
}

{
value:20,
done:false
}
      `,
    },


    {
      title: "for...of Loop",
      content: `
The for...of loop is used to iterate over iterable objects.


Works with:

• Arrays
• Strings
• Maps
• Sets
      `,
      code: `let colors = [

"Red",

"Green",

"Blue"

];


for(let color of colors)

{

console.log(color);

}`,
      language: "javascript",
      output: `
Red

Green

Blue
      `,
    },


    {
      title: "Generators in JavaScript",
      content: `
Generators are special functions that can pause and resume execution.


They use the * symbol and yield keyword.
      `,
      code: `function* numbers()

{

yield 1;

yield 2;

yield 3;

}


let generator = numbers();


console.log(

generator.next()

);`,
      language: "javascript",
      output: `
{
value:1,
done:false
}
      `,
    },


    {
      title: "yield Keyword",
      content: `
The yield keyword pauses generator execution.


Execution continues when next() is called.
      `,
      code: `function* message()

{

yield "Hello";

yield "JavaScript";

}


let result = message();


console.log(

result.next().value

);


console.log(

result.next().value

);`,
      language: "javascript",
      output: `
Hello

JavaScript
      `,
    },


    {
      title: "Iterable Objects",
      content: `
An iterable object is an object that implements Symbol.iterator.


Built-in iterables:

• Array
• String
• Map
• Set
      `,
    },


    {
      title: "JavaScript Memory Management",
      content: `
JavaScript automatically manages memory.


The engine allocates memory when values are created and releases memory when no longer needed.
      `,
    },


    {
      title: "Garbage Collection",
      content: `
Garbage collection automatically removes unused objects from memory.


JavaScript engines use automatic garbage collection.
      `,
      code: `let user = {

name:"Harish"

};


user = null;


// Object can now be removed`,
      language: "javascript",
      output: "Memory Released",
    },


    {
      title: "JavaScript Closures",
      content: `
A closure is created when an inner function remembers variables from its outer function.


Closures allow data privacy and state management.
      `,
      code: `function counter()

{

let count = 0;


return function()

{

count++;

console.log(count);

};

}


let add = counter();


add();

add();`,
      language: "javascript",
      output: `
1

2
      `,
      tip: "Closures are widely used in React hooks and advanced JavaScript.",
    },


    {
      title: "Higher Order Functions",
      content: `
A higher-order function is a function that:

• Takes another function as argument
• Returns a function


Examples:

map()

filter()

reduce()
      `,
      code: `function calculate(

operation,

a,

b

)

{

return operation(a,b);

}


function add(x,y)

{

return x+y;

}


console.log(

calculate(add,10,20)

);`,
      language: "javascript",
      output: "30",
    },


    {
      title: "Callback as Higher Order Function",
      content: `
Functions passed as arguments are called callback functions.
      `,
      code: `function greet(

name,

callback

)

{

console.log(
"Hello "+name
);


callback();

}


greet(

"Harish",

function()

{

console.log(
"Welcome"
);

}

);`,
      language: "javascript",
      output: `
Hello Harish

Welcome
      `,
    },


    {
      title: "Functional Programming",
      content: `
Functional programming is a programming style based on functions.


Principles:

• Pure Functions
• Immutability
• Function Composition
• Higher Order Functions
      `,
    },


    {
      title: "Pure Functions",
      content: `
A pure function always produces the same output for the same input.


It does not modify external data.
      `,
      code: `function add(a,b)

{

return a+b;

}


console.log(

add(10,20)

);`,
      language: "javascript",
      output: "30",
    },


    {
      title: "Currying in JavaScript",
      content: `
Currying converts a function with multiple arguments into a sequence of functions.
      `,
      code: `function multiply(a)

{

return function(b)

{

return a*b;

};

}


let result =

multiply(5)(3);


console.log(result);`,
      language: "javascript",
      output: "15",
    },


    {
      title: "Debouncing",
      content: `
Debouncing delays function execution until the user stops performing an action.


Used in:

• Search boxes
• Auto suggestions
• Resize events
      `,
      code: `function debounce(func,delay)

{

let timer;


return function()

{

clearTimeout(timer);


timer=setTimeout(

func,

delay

);

};

}`,
      language: "javascript",
      output: "Function Delayed",
    },


    {
      title: "Throttling",
      content: `
Throttling limits how often a function can execute.


Used in:

• Scroll events
• Mouse movement
• Performance optimization
      `,
      code: `function throttle(func,limit)

{

let waiting=false;


return function()

{

if(!waiting)

{

func();


waiting=true;


setTimeout(

()=>waiting=false,

limit

);

}

};

}`,
      language: "javascript",
      output: "Function Limited",
    },


    {
      title: "JavaScript Event Loop",
      content: `
The Event Loop allows JavaScript to perform asynchronous operations.


Components:

• Call Stack
• Web APIs
• Callback Queue
• Microtask Queue
      `,
    },


    {
      title: "Call Stack",
      content: `
The call stack manages function execution.


JavaScript uses a Last In First Out (LIFO) structure.
      `,
      code: `function first()

{

second();

}


function second()

{

console.log(
"Second"
);

}


first();`,
      language: "javascript",
      output: "Second",
    },


    {
      title: "Microtask Queue",
      content: `
Microtask Queue contains high-priority asynchronous tasks.


Examples:

• Promise callbacks
• queueMicrotask()
      `,
      code: `Promise.resolve()

.then(

()=>console.log(
"Promise"
)

);


console.log(
"Normal"
);`,
      language: "javascript",
      output: `
Normal

Promise
      `,
    },


    {
      title: "Macrotask Queue",
      content: `
Macrotask Queue contains lower priority tasks.


Examples:

• setTimeout()
• setInterval()
• DOM events
      `,
      code: `setTimeout(

()=>console.log(
"Timeout"
),

0

);


console.log(
"Start"
);`,
      language: "javascript",
      output: `
Start

Timeout
      `,
    },

    {
      title: "JavaScript Design Patterns",
      content: `
Design patterns are reusable solutions to common programming problems.


Benefits:

• Better code structure
• Code reusability
• Easier maintenance
• Scalable applications


Common JavaScript patterns:

• Singleton Pattern
• Factory Pattern
• Module Pattern
• Observer Pattern
• MVC Pattern
      `,
    },


    {
      title: "Singleton Pattern",
      content: `
Singleton pattern ensures that only one instance of an object exists.


Used in:

• Database connections
• Configuration settings
• Application state management
      `,
      code: `class Database

{

constructor()

{

if(Database.instance)

{

return Database.instance;

}


Database.instance = this;

}

}


let db1 = new Database();

let db2 = new Database();


console.log(
db1 === db2
);`,
      language: "javascript",
      output: "true",
    },


    {
      title: "Factory Pattern",
      content: `
Factory pattern creates objects without exposing the creation logic.


It provides a common interface for creating objects.
      `,
      code: `function createUser(type)

{

if(type === "admin")

{

return {

role:"Admin"

};

}


return {

role:"User"

};

}


let user = createUser(
"admin"
);


console.log(user.role);`,
      language: "javascript",
      output: "Admin",
    },


    {
      title: "Module Pattern",
      content: `
Module pattern is used to create private and public members.


It helps organize large applications.
      `,
      code: `let Counter = (function()

{

let count = 0;


return {


increment()

{

count++;

},


getCount()

{

return count;

}


};


})();


Counter.increment();


console.log(

Counter.getCount()

);`,
      language: "javascript",
      output: "1",
    },


    {
      title: "Observer Pattern",
      content: `
Observer pattern allows objects to subscribe and receive updates when data changes.


Used in:

• Event systems
• Notifications
• State management
      `,
      code: `class Subject

{

constructor()

{

this.observers=[];

}


subscribe(observer)

{

this.observers.push(observer);

}


notify()

{

this.observers.forEach(

observer=>observer()

);

}

}


let subject = new Subject();


subject.subscribe(

()=>console.log(
"Updated"
)

);


subject.notify();`,
      language: "javascript",
      output: "Updated",
    },


    {
      title: "MVC Architecture",
      content: `
MVC stands for:

Model

Handles data.


View

Handles user interface.


Controller

Connects Model and View.


Used in:

• Web applications
• Large software projects
      `,
    },


    {
      title: "Model Example",
      content: `
The Model manages application data.
      `,
      code: `const user = {

name:"Harish",

age:21

};


console.log(user);`,
      language: "javascript",
      output: `
{
name:"Harish",
age:21
}
      `,
    },


    {
      title: "Controller Example",
      content: `
Controllers handle application logic between user actions and data.
      `,
      code: `function getUser()

{

return {

name:"Harish"

};

}


console.log(

getUser()

);`,
      language: "javascript",
      output: "User Data",
    },


    {
      title: "Advanced Error Handling",
      content: `
Advanced applications require custom error handling.


Benefits:

• Better debugging
• Improved user experience
• Application stability
      `,
      code: `class AppError extends Error

{

constructor(message)

{

super(message);

this.name="AppError";

}

}


throw new AppError(
"Something went wrong"
);`,
      language: "javascript",
      output: "AppError",
    },


    {
      title: "Custom Error Classes",
      content: `
Custom errors allow developers to create meaningful error messages.
      `,
      code: `class ValidationError extends Error

{

constructor(message)

{

super(message);

}

}


try

{

throw new ValidationError(
"Invalid Input"
);

}


catch(error)

{

console.log(error.message);

}`,
      language: "javascript",
      output: "Invalid Input",
    },


    {
      title: "JavaScript Performance Optimization",
      content: `
Performance optimization improves application speed.


Techniques:

• Reduce DOM operations
• Minimize loops
• Use caching
• Lazy loading
• Optimize images
      `,
    },


    {
      title: "Memoization",
      content: `
Memoization stores previous results to avoid repeated calculations.
      `,
      code: `function memoize(fn)

{

let cache={};


return function(value)

{

if(cache[value])

return cache[value];


cache[value]=fn(value);


return cache[value];

};

}`,
      language: "javascript",
      output: "Cached Result",
    },


    {
      title: "Lazy Loading",
      content: `
Lazy loading loads resources only when needed.


Benefits:

• Faster initial loading
• Better performance
• Reduced bandwidth usage
      `,
      code: `const image = document.createElement(
"img"
);


image.loading="lazy";


document.body.appendChild(image);`,
      language: "javascript",
      output: "Lazy Image Loaded",
    },


    {
      title: "Canvas API Introduction",
      content: `
Canvas API allows drawing graphics using JavaScript.


Used for:

• Games
• Charts
• Animations
• Digital drawing
      `,
      code: `let canvas =

document.querySelector(
"canvas"
);


let ctx =

canvas.getContext(
"2d"
);


ctx.fillRect(

10,

10,

100,

100

);`,
      language: "javascript",
      output: "Rectangle Drawn",
    },


    {
      title: "Drawing Shapes with Canvas",
      content: `
Canvas can create:

• Rectangles
• Circles
• Lines
• Custom graphics
      `,
      code: `ctx.beginPath();


ctx.arc(

100,

100,

50,

0,

Math.PI*2

);


ctx.stroke();`,
      language: "javascript",
      output: "Circle Created",
    },


    {
      title: "File API",
      content: `
File API allows JavaScript to work with files selected by users.


Used for:

• Uploading files
• Reading files
• Processing data
      `,
      code: `let fileInput =

document.querySelector(
"input"
);


fileInput.addEventListener(

"change",

function(event)

{

console.log(

event.target.files

);

}

);`,
      language: "javascript",
      output: "File Object",
    },


    {
      title: "Drag and Drop API",
      content: `
Drag and Drop API allows users to drag elements and drop them in different locations.
      `,
      code: `element.addEventListener(

"dragstart",

function()

{

console.log(
"Dragging"
);

}

);`,
      language: "javascript",
      output: "Dragging",
    },


    {
      title: "Web Audio API",
      content: `
Web Audio API allows creating and controlling audio using JavaScript.


Used in:

• Music applications
• Games
• Audio effects
      `,
      code: `let audioContext =

new AudioContext();


console.log(audioContext);`,
      language: "javascript",
      output: "Audio Context Created",
    },


    {
      title: "JavaScript Security Practices",
      content: `
Security is important in JavaScript applications.


Best Practices:

• Validate user input
• Avoid eval()
• Protect sensitive data
• Use HTTPS
• Prevent XSS attacks
      `,
    },


    {
      title: "Cross Site Scripting (XSS)",
      content: `
XSS is a security vulnerability where attackers inject malicious scripts.


Prevention:

• Sanitize input
• Avoid unsafe innerHTML
• Use security headers
      `,
    },


    {
      title: "WebSocket API",
      content: `
WebSocket provides real-time two-way communication between client and server.


Unlike HTTP requests, WebSocket keeps a continuous connection open.


Used in:

• Chat applications
• Online games
• Live notifications
• Stock updates
• Collaboration tools
      `,
      code: `let socket =

new WebSocket(

"ws://example.com"

);


socket.onopen = function()

{

console.log(
"Connected"
);

};


socket.onmessage = function(event)

{

console.log(
event.data
);

};`,
      language: "javascript",
      output: `
Connected

Message Received
      `,
    },


    {
      title: "Service Workers",
      content: `
Service Workers are background scripts that run separately from web pages.


They are used for:

• Offline applications
• Push notifications
• Background sync
• Caching resources
      `,
      code: `navigator.serviceWorker.register(

"service-worker.js"

)

.then(

function()

{

console.log(
"Service Worker Registered"
);

}

);`,
      language: "javascript",
      output: "Service Worker Registered",
    },


    {
      title: "Progressive Web Apps (PWA)",
      content: `
PWA combines web applications with native app features.


Features:

• Installable
• Offline support
• Fast loading
• Push notifications
• App-like experience
      `,
    },


    {
      title: "PWA Manifest File",
      content: `
A manifest file provides information about a web application.


It contains:

• App name
• Icons
• Theme colors
• Start URL
      `,
      code: `{

"name":

"My JavaScript App",


"short_name":

"JS App",


"display":

"standalone"

}`,
      language: "json",
      output: "Application Configuration",
    },


    {
      title: "JavaScript Testing Introduction",
      content: `
Testing ensures that JavaScript applications work correctly.


Benefits:

• Finds bugs early
• Improves reliability
• Makes code maintainable
      `,
    },


    {
      title: "Unit Testing",
      content: `
Unit testing checks individual parts of code such as functions.


A unit test verifies expected output.
      `,
      code: `function add(a,b)

{

return a+b;

}


console.log(

add(5,10)

);`,
      language: "javascript",
      output: "15",
    },


    {
      title: "Testing Frameworks",
      content: `
Popular JavaScript testing frameworks:


• Jest

• Mocha

• Jasmine

• Vitest


They help automate testing.
      `,
    },


    {
      title: "Debugging JavaScript",
      content: `
Debugging is the process of finding and fixing errors.


Common debugging tools:

• console.log()
• Browser DevTools
• Breakpoints
• Debugger keyword
      `,
      code: `function calculate()

{

debugger;


let result = 10 + 20;


return result;

}


calculate();`,
      language: "javascript",
      output: "Debugger Paused",
    },


    {
      title: "Browser Developer Tools",
      content: `
Browser DevTools help developers inspect and debug applications.


Main Panels:

• Console
• Elements
• Network
• Sources
• Performance
• Application
      `,
    },


    {
      title: "Network Debugging",
      content: `
Network tools help analyze:

• API requests
• Response data
• Loading speed
• Errors
      `,
    },


    {
      title: "npm Introduction",
      content: `
npm stands for Node Package Manager.


It is used to install and manage JavaScript packages.


Commands:


npm init

Creates project.


npm install

Installs packages.


npm run

Runs scripts.
      `,
    },


    {
      title: "Installing Packages",
      content: `
Packages provide ready-made functionality.


Examples:

• React
• Express
• Lodash
• Axios
      `,
      code: `npm install axios`,
      language: "bash",
      output: "Package Installed",
    },


    {
      title: "package.json File",
      content: `
package.json stores project information and dependencies.


It contains:

• Project name
• Version
• Scripts
• Packages
      `,
      code: `{

"name":

"javascript-project",


"version":

"1.0.0",


"scripts":

{

"start":

"node app.js"

}

}`,
      language: "json",
      output: "Project Configuration",
    },


    {
      title: "JavaScript Build Tools",
      content: `
Build tools transform and optimize JavaScript code.


Popular tools:

• Vite
• Webpack
• Parcel
• Rollup
      `,
    },


    {
      title: "Introduction to TypeScript",
      content: `
TypeScript is a superset of JavaScript developed by Microsoft.


It adds static typing features.


Benefits:

• Better error detection
• Improved code quality
• Better developer experience
      `,
      code: `let age:number = 21;


let name:string = "Harish";


console.log(name);`,
      language: "typescript",
      output: "Harish",
    },


    {
      title: "JavaScript Interview Questions",
      content: `
Common JavaScript interview topics:


• Difference between var, let, const

• Closures

• Hoisting

• Event Loop

• Promises

• Async/Await

• Prototypes

• this keyword

• DOM Manipulation
      `,
    },


    {
      title: "JavaScript Hoisting",
      content: `
Hoisting moves variable and function declarations to the top of their scope before execution.
      `,
      code: `hello();


function hello()

{

console.log(
"Hello JavaScript"
);

}`,
      language: "javascript",
      output: "Hello JavaScript",
    },


    {
      title: "this Keyword",
      content: `
The this keyword refers to the object that is executing the current function.


Its value depends on how a function is called.
      `,
      code: `let user = {

name:"Harish",


show()

{

console.log(this.name);

}

};


user.show();`,
      language: "javascript",
      output: "Harish",
    },


    {
      title: "JavaScript Real World Projects",
      content: `
Projects help improve practical JavaScript skills.


Beginner Projects:

• Calculator
• Digital Clock
• Todo App
• Weather App


Intermediate Projects:

• Quiz Application
• Expense Tracker
• Notes App
• Movie Search App


Advanced Projects:

• Chat Application
• E-commerce Website
• Social Media App
• Real-time Dashboard
      `,
    },


    {
      title: "JavaScript Learning Roadmap",
      content: `
Complete JavaScript Learning Path:


1. Basics

Variables, Data Types, Operators


2. Control Flow

Conditions and Loops


3. Functions

Callbacks and Scope


4. Objects and Arrays


5. DOM Manipulation


6. Async JavaScript


7. APIs


8. Advanced Concepts


9. Frameworks

React, Node.js, Express


10. Real Projects
      `,
    },

  ],
};