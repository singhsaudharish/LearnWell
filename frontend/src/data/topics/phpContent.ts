export const phpContent = {
  title: "PHP",
  description: "Learn PHP from beginner to advanced.",

  sections:[
  {
  title: "Introduction to PHP",
  content: `
PHP is a popular server-side scripting language used for creating dynamic and interactive websites.

PHP stands for:

PHP: Hypertext Preprocessor

It is mainly used for:

• Web Development

• Server-side Programming

• Database Applications

• API Development

• Content Management Systems
  `,
},

{
  title: "What is PHP?",
  content: `
PHP is an open-source scripting language that runs on a web server.

Unlike HTML and CSS which run in the browser, PHP executes on the server and sends the generated output to the user's browser.

Example:

User Request → Server → PHP Code Execution → HTML Response → Browser
  `,
  code: `<?php

echo "Hello PHP";

?>`,
  language: "php",
  output: `
Hello PHP
  `,
},

{
  title: "History of PHP",
  content: `
PHP was created by Rasmus Lerdorf in 1995.

Initially, PHP was created as a collection of Common Gateway Interface (CGI) scripts.

Later, it evolved into a complete programming language used for modern web development.

Important PHP versions:

• PHP 1.0 - 1995

• PHP 3 - 1998

• PHP 5 - 2004

• PHP 7 - 2015

• PHP 8 - 2020
  `,
},

{
  title: "Features of PHP",
  content: `
Important features of PHP:

• Open Source

• Easy to Learn

• Platform Independent

• Fast Execution

• Database Support

• Server-Side Scripting

• Object-Oriented Programming Support

• Large Community Support

• Secure Development Features
  `,
},

{
  title: "Advantages of PHP",
  content: `
Advantages of PHP:

✓ Free and Open Source

✓ Easy Integration with Databases

✓ Works on Multiple Platforms

✓ Large Developer Community

✓ Supports Many Frameworks

✓ Faster Web Development

✓ Good Hosting Support
  `,
},

{
  title: "Applications of PHP",
  content: `
PHP is used in many real-world applications:

• Dynamic Websites

• E-commerce Platforms

• Content Management Systems

• Blogs

• Social Media Websites

• Web APIs

• Enterprise Applications

Popular platforms using PHP:

• WordPress

• Drupal

• Magento
  `,
},

{
  title: "Installing PHP",
  content: `
PHP can be installed in different ways.

Common methods:

1. Install PHP directly

2. Use XAMPP

3. Use WAMP

4. Use Docker

5. Use Laravel Development Environment

For beginners, XAMPP is commonly used because it includes:

• PHP

• Apache Server

• MySQL Database
  `,
},

{
  title: "Setting Up PHP Environment",
  content: `
A PHP development environment requires:

1. PHP Interpreter

2. Web Server

3. Database Server

4. Code Editor

Recommended tools:

• VS Code

• XAMPP

• MySQL

• Browser
  `,
},

{
  title: "First PHP Program",
  content: `
Every PHP program starts with PHP opening and closing tags.

PHP code is written inside:

<?php

?>

The echo statement displays output.
  `,
  code: `<?php

echo "Welcome to PHP";

?>`,
  language: "php",
  output: `
Welcome to PHP
  `,
},

{
  title: "PHP Syntax",
  content: `
PHP syntax defines the rules for writing PHP programs.

Rules:

• PHP code starts with <?php

• Statements end with ;

• Variables start with $

• PHP is case-sensitive

Example:
  `,
  code: `<?php

$name = "John";

echo $name;

?>`,
  language: "php",
  output: `
John
  `,
},

{
  title: "PHP Comments",
  content: `
Comments are used to explain code.

PHP supports:

1. Single Line Comments

2. Multi Line Comments
  `,
  code: `<?php

// This is a single line comment

/*
This is
a multi-line comment
*/

echo "PHP";

?>`,
  language: "php",
  output: `
PHP
  `,
},

{
  title: "PHP Variables",
  content: `
Variables store data values.

PHP variables:

• Start with $

• Do not require data type declaration

• Automatically detect data type
  `,
  code: `<?php

$name = "Alice";

$age = 25;

echo $name;

echo $age;

?>`,
  language: "php",
  output: `
Alice
25
  `,
},

{
  title: "Variable Rules in PHP",
  content: `
Rules for creating PHP variables:

✓ Must start with $

✓ Must begin with a letter or underscore

✓ Cannot start with a number

✓ Variable names are case-sensitive

Valid:

$name

$_value

$age1


Invalid:

$1name

$user-name
  `,
},

{
  title: "PHP Data Types",
  content: `
PHP supports different data types:

• String

• Integer

• Float

• Boolean

• Array

• Object

• NULL
  `,
},

{
  title: "String Data Type",
  content: `
A string stores text values.

Strings can be written using:

• Double Quotes

• Single Quotes
  `,
  code: `<?php

$name = "PHP";

echo $name;

?>`,
  language: "php",
  output: `
PHP
  `,
},

{
  title: "Integer Data Type",
  content: `
Integers store whole numbers without decimal values.
  `,
  code: `<?php

$number = 100;

echo $number;

?>`,
  language: "php",
  output: `
100
  `,
},

{
  title: "Float Data Type",
  content: `
Float stores decimal numbers.
  `,
  code: `<?php

$price = 99.99;

echo $price;

?>`,
  language: "php",
  output: `
99.99
  `,
},

{
  title: "Boolean Data Type",
  content: `
Boolean stores only two values:

true

false
  `,
  code: `<?php

$isLogin = true;

echo $isLogin;

?>`,
  language: "php",
  output: `
1
  `,
},

{
  title: "Array Data Type",
  content: `
Arrays store multiple values in a single variable.
  `,
  code: `<?php

$colors = array(

"Red",

"Blue",

"Green"

);

echo $colors[0];

?>`,
  language: "php",
  output: `
Red
  `,
},

{
  title: "NULL Data Type",
  content: `
NULL represents a variable with no value.
  `,
  code: `<?php

$value = NULL;

var_dump($value);

?>`,
  language: "php",
  output: `
NULL
  `,
},

{
  title: "Constants in PHP",
  content: `
Constants are values that cannot be changed after creation.

They are created using define().
  `,
  code: `<?php

define(

"PI",

3.14

);

echo PI;

?>`,
  language: "php",
  output: `
3.14
  `,
},

{
  title: "Echo Statement",
  content: `
echo is used to display output.

It can print strings, variables, and HTML.
  `,
  code: `<?php

echo "Hello PHP";

?>`,
  language: "php",
  output: `
Hello PHP
  `,
},

{
  title: "Print Statement",
  content: `
print is another output statement.

Difference:

echo → Faster and can output multiple values

print → Returns value 1
  `,
  code: `<?php

print "Learning PHP";

?>`,
  language: "php",
  output: `
Learning PHP
  `,
},

{
  title: "User Input in PHP",
  content: `
PHP receives user input through HTML forms.

Common methods:

• GET

• POST
  `,
  code: `<form method="post">

<input name="username">

<input type="submit">

</form>`,
  language: "html",
  output: `
User Data Submitted
  `,
},

{
  title: "Type Casting in PHP",
  content: `
Type casting converts one data type into another.

Common casts:

• (int)

• (float)

• (string)

• (bool)
  `,
  code: `<?php

$value = "100";

$number = (int)$value;

echo $number;

?>`,
  language: "php",
  output: `
100
  `,
},

{
  title: "PHP Configuration Basics",
  content: `
PHP configuration is controlled using php.ini file.

Important settings:

• Error Reporting

• Memory Limit

• Upload Size

• Time Zone

• Extensions

The phpinfo() function displays PHP configuration details.
  `,
  code: `<?php

phpinfo();

?>`,
  language: "php",
  output: `
PHP Configuration Information Displayed
  `,
},{
  title: "Introduction to PHP Control Flow",
  content: `
Control flow statements decide the order in which PHP code executes.

They allow programs to make decisions and repeat tasks.

Main control flow categories:

• Conditional Statements

• Loop Statements

• Jump Statements
  `,
},

{
  title: "if Statement",
  content: `
The if statement executes a block of code when a condition is true.
  `,
  code: `<?php

$age = 20;

if($age >= 18)
{
    echo "Eligible to Vote";
}

?>`,
  language: "php",
  output: `
Eligible to Vote
  `,
},

{
  title: "if-else Statement",
  content: `
The if-else statement executes one block when a condition is true and another block when it is false.
  `,
  code: `<?php

$number = 10;

if($number > 0)
{
    echo "Positive Number";
}
else
{
    echo "Negative Number";
}

?>`,
  language: "php",
  output: `
Positive Number
  `,
},

{
  title: "if-elseif-else Statement",
  content: `
The if-elseif-else statement checks multiple conditions.

It is useful when there are several possible outcomes.
  `,
  code: `<?php

$marks = 75;

if($marks >= 90)
{
    echo "Grade A";
}
elseif($marks >= 60)
{
    echo "Grade B";
}
else
{
    echo "Grade C";
}

?>`,
  language: "php",
  output: `
Grade B
  `,
},

{
  title: "Nested if Statement",
  content: `
A nested if statement contains one if statement inside another if statement.

It is used for checking dependent conditions.
  `,
  code: `<?php

$username = "admin";

$password = "1234";

if($username == "admin")
{
    if($password == "1234")
    {
        echo "Login Successful";
    }
}

?>`,
  language: "php",
  output: `
Login Successful
  `,
},

{
  title: "Switch Statement",
  content: `
The switch statement is used when comparing one value with multiple possible values.

It makes code cleaner than multiple if-else statements.
  `,
  code: `<?php

$day = 3;

switch($day)
{
    case 1:
        echo "Monday";
        break;

    case 2:
        echo "Tuesday";
        break;

    case 3:
        echo "Wednesday";
        break;

    default:
        echo "Invalid Day";
}

?>`,
  language: "php",
  output: `
Wednesday
  `,
},

{
  title: "Introduction to PHP Loops",
  content: `
Loops execute a block of code repeatedly until a condition becomes false.

PHP supports:

• for Loop

• while Loop

• do-while Loop

• foreach Loop
  `,
},

{
  title: "for Loop",
  content: `
The for loop is used when the number of repetitions is known.
  `,
  code: `<?php

for($i = 1; $i <= 5; $i++)
{
    echo $i;
}

?>`,
  language: "php",
  output: `
12345
  `,
},

{
  title: "while Loop",
  content: `
The while loop executes code as long as the condition remains true.
  `,
  code: `<?php

$i = 1;

while($i <= 5)
{
    echo $i;

    $i++;
}

?>`,
  language: "php",
  output: `
12345
  `,
},

{
  title: "do-while Loop",
  content: `
The do-while loop executes the code at least once before checking the condition.
  `,
  code: `<?php

$i = 1;

do
{
    echo $i;

    $i++;

}
while($i <= 5);

?>`,
  language: "php",
  output: `
12345
  `,
},

{
  title: "foreach Loop",
  content: `
The foreach loop is specially designed for working with arrays.

It automatically moves through each array element.
  `,
  code: `<?php

$colors = array(

"Red",

"Blue",

"Green"

);

foreach($colors as $color)
{
    echo $color;
}

?>`,
  language: "php",
  output: `
RedBlueGreen
  `,
},

{
  title: "Break Statement",
  content: `
The break statement stops loop execution immediately.
  `,
  code: `<?php

for($i=1; $i<=10; $i++)
{
    if($i==5)
    {
        break;
    }

    echo $i;
}

?>`,
  language: "php",
  output: `
1234
  `,
},

{
  title: "Continue Statement",
  content: `
The continue statement skips the current iteration and moves to the next iteration.
  `,
  code: `<?php

for($i=1; $i<=5; $i++)
{
    if($i==3)
    {
        continue;
    }

    echo $i;
}

?>`,
  language: "php",
  output: `
1245
  `,
},

{
  title: "Introduction to PHP Functions",
  content: `
A function is a reusable block of code that performs a specific task.

Benefits:

• Code Reusability

• Better Organization

• Easier Maintenance
  `,
},

{
  title: "Creating Functions",
  content: `
Functions are created using the function keyword.
  `,
  code: `<?php

function greet()
{
    echo "Hello PHP";
}

greet();

?>`,
  language: "php",
  output: `
Hello PHP
  `,
},

{
  title: "Function Parameters",
  content: `
Parameters allow functions to receive values.

They make functions more flexible.
  `,
  code: `<?php

function add($a,$b)
{
    echo $a+$b;
}

add(10,20);

?>`,
  language: "php",
  output: `
30
  `,
},

{
  title: "Default Parameters",
  content: `
Default parameters provide a default value when no argument is passed.
  `,
  code: `<?php

function welcome($name="Guest")
{
    echo $name;
}

welcome();

?>`,
  language: "php",
  output: `
Guest
  `,
},

{
  title: "Return Values",
  content: `
Functions can return values using the return statement.
  `,
  code: `<?php

function square($num)
{
    return $num*$num;
}

$result = square(5);

echo $result;

?>`,
  language: "php",
  output: `
25
  `,
},

{
  title: "Variable Scope",
  content: `
Variable scope defines where a variable can be accessed.

Types:

• Local Scope

• Global Scope

• Static Scope
  `,
},

{
  title: "Local Scope",
  content: `
Variables created inside a function have local scope.

They cannot be accessed outside the function.
  `,
  code: `<?php

function test()
{
    $x = 10;

    echo $x;
}

test();

?>`,
  language: "php",
  output: `
10
  `,
},

{
  title: "Global Scope",
  content: `
Variables created outside functions have global scope.

The global keyword allows access inside functions.
  `,
  code: `<?php

$x = 100;

function show()
{
    global $x;

    echo $x;
}

show();

?>`,
  language: "php",
  output: `
100
  `,
},

{
  title: "Static Variables",
  content: `
Static variables maintain their value between function calls.
  `,
  code: `<?php

function counter()
{
    static $count = 0;

    $count++;

    echo $count;
}

counter();

counter();

?>`,
  language: "php",
  output: `
12
  `,
},

{
  title: "Anonymous Functions",
  content: `
Anonymous functions are functions without a name.

They are commonly stored in variables.
  `,
  code: `<?php

$hello = function()
{
    echo "Hello";
};

$hello();

?>`,
  language: "php",
  output: `
Hello
  `,
},

{
  title: "Arrow Functions",
  content: `
Arrow functions provide a shorter syntax for anonymous functions.

They were introduced in PHP 7.4.
  `,
  code: `<?php

$square = fn($x) => $x*$x;

echo $square(5);

?>`,
  language: "php",
  output: `
25
  `,
},

{
  title: "Recursive Functions",
  content: `
A recursive function calls itself.

It is useful for solving problems like:

• Factorial

• Tree Traversal

• Searching Algorithms
  `,
  code: `<?php

function factorial($n)
{
    if($n==1)
        return 1;

    return $n * factorial($n-1);
}

echo factorial(5);

?>`,
  language: "php",
  output: `
120
  `,
},

{
  title: "Built-in PHP Functions",
  content: `
PHP provides many built-in functions.

Examples:

• strlen()

• count()

• date()

• rand()

• isset()

• empty()

• var_dump()
  `,
  code: `<?php

$text = "PHP";

echo strlen($text);

?>`,
  language: "php",
  output: `
3
  `,
},{
  title: "Introduction to PHP Arrays",
  content: `
An array is a data structure that stores multiple values in a single variable.

Arrays are useful when working with collections of data.

Example:

A list of students, products, or employees can be stored in an array.
  `,
},

{
  title: "Indexed Arrays",
  content: `
Indexed arrays store values with numeric indexes.

Index starts from 0 by default.
  `,
  code: `<?php

$students = array(

    "John",

    "Alex",

    "David"

);

echo $students[0];

?>`,
  language: "php",
  output: `
John
  `,
},

{
  title: "Creating Indexed Arrays",
  content: `
PHP provides multiple ways to create indexed arrays.
  `,
  code: `<?php

$numbers = [10,20,30,40];

echo $numbers[2];

?>`,
  language: "php",
  output: `
30
  `,
},

{
  title: "Associative Arrays",
  content: `
Associative arrays use named keys instead of numeric indexes.

They store data in key-value pairs.
  `,
  code: `<?php

$student = array(

    "name"=>"John",

    "age"=>20,

    "course"=>"PHP"

);

echo $student["name"];

?>`,
  language: "php",
  output: `
John
  `,
},

{
  title: "Multidimensional Arrays",
  content: `
Multidimensional arrays contain one or more arrays inside another array.

They are useful for storing complex data.
  `,
  code: `<?php

$students = array(

    array("John",20),

    array("Alex",22)

);

echo $students[0][0];

?>`,
  language: "php",
  output: `
John
  `,
},

{
  title: "Accessing Array Elements",
  content: `
Array elements are accessed using their index or key.
  `,
  code: `<?php

$colors = [

    "Red",

    "Blue",

    "Green"

];

echo $colors[1];

?>`,
  language: "php",
  output: `
Blue
  `,
},

{
  title: "Looping Through Arrays",
  content: `
Loops are commonly used to display array values.

foreach is the most commonly used loop for arrays.
  `,
  code: `<?php

$colors = [

"Red",

"Blue",

"Green"

];

foreach($colors as $color)
{

echo $color;

}

?>`,
  language: "php",
  output: `
RedBlueGreen
  `,
},

{
  title: "count() Function",
  content: `
The count() function returns the number of elements in an array.
  `,
  code: `<?php

$numbers = [10,20,30,40];

echo count($numbers);

?>`,
  language: "php",
  output: `
4
  `,
},

{
  title: "sort() Function",
  content: `
The sort() function sorts indexed arrays in ascending order.
  `,
  code: `<?php

$numbers = [40,10,30,20];

sort($numbers);

print_r($numbers);

?>`,
  language: "php",
  output: `
10 20 30 40
  `,
},

{
  title: "rsort() Function",
  content: `
The rsort() function sorts indexed arrays in descending order.
  `,
  code: `<?php

$numbers = [10,30,20];

rsort($numbers);

print_r($numbers);

?>`,
  language: "php",
  output: `
30 20 10
  `,
},

{
  title: "array_push() Function",
  content: `
array_push() adds one or more elements to the end of an array.
  `,
  code: `<?php

$colors = [

"Red",

"Blue"

];

array_push(

$colors,

"Green"

);

print_r($colors);

?>`,
  language: "php",
  output: `
Red Blue Green
  `,
},

{
  title: "array_pop() Function",
  content: `
array_pop() removes the last element from an array.
  `,
  code: `<?php

$colors = [

"Red",

"Blue",

"Green"

];

array_pop($colors);

print_r($colors);

?>`,
  language: "php",
  output: `
Red Blue
  `,
},

{
  title: "array_merge() Function",
  content: `
array_merge() combines two or more arrays.
  `,
  code: `<?php

$a = [

"PHP"

];

$b = [

"MySQL"

];

$result = array_merge(

$a,

$b

);

print_r($result);

?>`,
  language: "php",
  output: `
PHP MySQL
  `,
},

{
  title: "array_search() Function",
  content: `
array_search() searches for a value inside an array and returns its key.
  `,
  code: `<?php

$colors = [

"Red",

"Blue",

"Green"

];

echo array_search(

"Blue",

$colors

);

?>`,
  language: "php",
  output: `
1
  `,
},

{
  title: "Introduction to PHP Strings",
  content: `
A string is a sequence of characters.

Strings are used to store text data.
  `,
},

{
  title: "Creating Strings",
  content: `
PHP strings can be created using:

• Single Quotes

• Double Quotes
  `,
  code: `<?php

$name = "PHP";

echo $name;

?>`,
  language: "php",
  output: `
PHP
  `,
},

{
  title: "String Concatenation",
  content: `
Concatenation joins multiple strings together.

PHP uses the dot(.) operator for concatenation.
  `,
  code: `<?php

$first = "Hello";

$second = "PHP";

echo $first . " " . $second;

?>`,
  language: "php",
  output: `
Hello PHP
  `,
},

{
  title: "strlen() Function",
  content: `
strlen() returns the length of a string.
  `,
  code: `<?php

$text = "Programming";

echo strlen($text);

?>`,
  language: "php",
  output: `
11
  `,
},

{
  title: "str_replace() Function",
  content: `
str_replace() replaces text inside a string.
  `,
  code: `<?php

$text = "I like Java";

echo str_replace(

"Java",

"PHP",

$text

);

?>`,
  language: "php",
  output: `
I like PHP
  `,
},

{
  title: "strtolower() Function",
  content: `
strtolower() converts a string into lowercase letters.
  `,
  code: `<?php

$text = "HELLO";

echo strtolower($text);

?>`,
  language: "php",
  output: `
hello
  `,
},

{
  title: "strtoupper() Function",
  content: `
strtoupper() converts a string into uppercase letters.
  `,
  code: `<?php

$text = "php";

echo strtoupper($text);

?>`,
  language: "php",
  output: `
PHP
  `,
},

{
  title: "explode() Function",
  content: `
explode() converts a string into an array using a separator.
  `,
  code: `<?php

$text = "PHP,MySQL,HTML";

$result = explode(

",",

$text

);

print_r($result);

?>`,
  language: "php",
  output: `
PHP MySQL HTML
  `,
},

{
  title: "implode() Function",
  content: `
implode() joins array elements into a string.
  `,
  code: `<?php

$data = [

"PHP",

"MySQL",

"HTML"

];

echo implode(

"-",

$data

);

?>`,
  language: "php",
  output: `
PHP-MySQL-HTML
  `,
},

{
  title: "Introduction to PHP Forms",
  content: `
Forms allow users to send data to a server.

PHP processes form data and performs required actions.

Examples:

• Login Forms

• Registration Forms

• Search Forms
  `,
},

{
  title: "HTML Form with PHP",
  content: `
PHP receives form values using superglobal variables.

Common methods:

• GET

• POST
  `,
  code: `<form method="post">

Name:

<input type="text" name="username">

<input type="submit">

</form>`,
  language: "html",
  output: `
User Form Created
  `,
},

{
  title: "GET Method",
  content: `
GET sends form data through the URL.

It is commonly used for:

• Search

• Filters

• Non-sensitive data
  `,
  code: `<?php

echo $_GET["name"];

?>`,
  language: "php",
  output: `
User Input Displayed
  `,
},

{
  title: "POST Method",
  content: `
POST sends data securely through HTTP request body.

It is commonly used for:

• Login

• Registration

• Password Forms
  `,
  code: `<?php

echo $_POST["username"];

?>`,
  language: "php",
  output: `
Username Displayed
  `,
},

{
  title: "Form Validation",
  content: `
Form validation checks whether user input is correct.

Common validations:

• Required Fields

• Email Validation

• Length Checking

• Data Type Checking
  `,
},

{
  title: "Handling User Input",
  content: `
User input should always be cleaned before processing.

Useful functions:

• htmlspecialchars()

• trim()

• filter_var()
  `,
  code: `<?php

$name = htmlspecialchars(

$_POST["name"]

);

echo $name;

?>`,
  language: "php",
  output: `
Safe User Input
  `,
},

{
  title: "File Uploads in PHP",
  content: `
PHP supports uploading files through forms.

Common uploaded files:

• Images

• Documents

• Videos

Important:

Use validation before storing uploaded files.
  `,
  code: `<form method="post" enctype="multipart/form-data">

<input type="file" name="file">

<input type="submit">

</form>`,
  language: "html",
  output: `
File Upload Form Created
  `,
},

{
  title: "Error Handling Introduction",
  content: `
Error handling helps developers detect and manage program errors.

PHP supports:

• Error Reporting

• Exceptions

• Custom Error Handling
  `,
},{
  title: "Introduction to Object-Oriented Programming in PHP",
  content: `
Object-Oriented Programming (OOP) is a programming approach based on objects and classes.

PHP supports OOP concepts that help developers build large and maintainable applications.

Main OOP concepts:

• Classes

• Objects

• Inheritance

• Encapsulation

• Polymorphism

• Abstraction
  `,
},

{
  title: "Classes and Objects",
  content: `
A class is a blueprint for creating objects.

An object is an instance of a class that contains properties and methods.
  `,
  code: `<?php

class Student
{

    public $name;

    function showName()
    {
        echo $this->name;
    }

}


$student = new Student();

$student->name = "John";

$student->showName();

?>`,
  language: "php",
  output: `
John
  `,
},

{
  title: "Properties and Methods",
  content: `
Properties store data inside a class.

Methods define behaviors or actions performed by objects.
  `,
  code: `<?php

class Car
{

    public $color;


    function drive()
    {
        echo "Car is running";
    }

}


$car = new Car();

$car->drive();

?>`,
  language: "php",
  output: `
Car is running
  `,
},

{
  title: "Access Modifiers",
  content: `
Access modifiers control visibility of class properties and methods.

PHP provides:

• public

• private

• protected
  `,
},

{
  title: "Public Members",
  content: `
Public members can be accessed from anywhere.

They are accessible outside the class.
  `,
  code: `<?php

class User
{

    public $name = "Alex";

}


$user = new User();

echo $user->name;

?>`,
  language: "php",
  output: `
Alex
  `,
},

{
  title: "Private Members",
  content: `
Private members can only be accessed inside the same class.

They provide data protection.
  `,
  code: `<?php

class Account
{

    private $balance = 5000;


    function showBalance()
    {
        echo $this->balance;
    }

}


$obj = new Account();

$obj->showBalance();

?>`,
  language: "php",
  output: `
5000
  `,
},

{
  title: "Protected Members",
  content: `
Protected members can be accessed inside the class and child classes.

They are commonly used with inheritance.
  `,
},

{
  title: "Constructors",
  content: `
A constructor is a special method that automatically runs when an object is created.

PHP uses:

__construct()
  `,
  code: `<?php

class Student
{

    function __construct()
    {
        echo "Object Created";
    }

}


$obj = new Student();

?>`,
  language: "php",
  output: `
Object Created
  `,
},

{
  title: "Destructors",
  content: `
A destructor runs when an object is destroyed.

PHP uses:

__destruct()
  `,
  code: `<?php

class Test
{

    function __destruct()
    {
        echo "Object Destroyed";
    }

}


$obj = new Test();

?>`,
  language: "php",
  output: `
Object Destroyed
  `,
},

{
  title: "Inheritance",
  content: `
Inheritance allows one class to use properties and methods of another class.

It improves code reusability.
  `,
  code: `<?php

class Animal
{

    function sound()
    {
        echo "Animal Sound";
    }

}


class Dog extends Animal
{

}


$dog = new Dog();

$dog->sound();

?>`,
  language: "php",
  output: `
Animal Sound
  `,
},

{
  title: "Encapsulation",
  content: `
Encapsulation combines data and methods into a single unit.

It protects data by restricting direct access.

Benefits:

• Security

• Better Control

• Maintainability
  `,
},

{
  title: "Polymorphism",
  content: `
Polymorphism means one interface with multiple implementations.

It allows methods to behave differently in different classes.
  `,
  code: `<?php

class Cat
{

    function sound()
    {
        echo "Meow";
    }

}


class Dog
{

    function sound()
    {
        echo "Bark";
    }

}

?>`,
  language: "php",
  output: `
Different behaviors using same method name
  `,
},

{
  title: "Interfaces",
  content: `
Interfaces define methods that classes must implement.

They provide a standard structure for classes.
  `,
  code: `<?php

interface Payment
{

    function pay();

}


class CardPayment implements Payment
{

    function pay()
    {
        echo "Payment Done";
    }

}

?>`,
  language: "php",
  output: `
Interface Implemented
  `,
},

{
  title: "Traits",
  content: `
Traits allow code reuse between multiple classes.

They are useful when multiple classes need the same methods.
  `,
  code: `<?php

trait Message
{

    function show()
    {
        echo "Hello";
    }

}


class User
{

    use Message;

}


$user = new User();

$user->show();

?>`,
  language: "php",
  output: `
Hello
  `,
},

{
  title: "Static Members",
  content: `
Static properties and methods belong to the class instead of objects.

They are accessed using the class name.
  `,
  code: `<?php

class Counter
{

    public static $count = 0;


}


echo Counter::$count;

?>`,
  language: "php",
  output: `
0
  `,
},

{
  title: "Namespaces",
  content: `
Namespaces prevent naming conflicts between classes, functions, and constants.

They organize large PHP applications.
  `,
  code: `<?php

namespace App;

class User
{

}


?>`,
  language: "php",
  output: `
Namespace Created
  `,
},

{
  title: "Exception Handling",
  content: `
Exception handling manages runtime errors without stopping the complete application.

PHP uses:

• try

• catch

• finally

• throw
  `,
  code: `<?php

try
{

    throw new Exception(
        "Error Occurred"
    );

}
catch(Exception $e)
{

    echo $e->getMessage();

}

?>`,
  language: "php",
  output: `
Error Occurred
  `,
},

{
  title: "Cookies in PHP",
  content: `
Cookies store small pieces of information in the user's browser.

Common uses:

• Remember Login

• User Preferences

• Tracking
  `,
  code: `<?php

setcookie(

"username",

"John",

time()+3600

);

echo "Cookie Created";

?>`,
  language: "php",
  output: `
Cookie Created
  `,
},

{
  title: "Sessions in PHP",
  content: `
Sessions store user information on the server.

Common uses:

• Login Systems

• Shopping Carts

• User Authentication
  `,
  code: `<?php

session_start();


$_SESSION["user"] = "John";


echo $_SESSION["user"];

?>`,
  language: "php",
  output: `
John
  `,
},

{
  title: "Authentication System in PHP",
  content: `
Authentication verifies user identity.

A basic authentication system includes:

1. Registration

2. Password Storage

3. Login

4. Session Creation

5. Logout
  `,
},

{
  title: "Introduction to PHP Database Connection",
  content: `
PHP can connect with databases to store and retrieve data.

Popular databases:

• MySQL

• PostgreSQL

• SQLite
  `,
},

{
  title: "Connecting PHP with MySQL using MySQLi",
  content: `
MySQLi is a PHP extension used to communicate with MySQL databases.
  `,
  code: `<?php

$conn = new mysqli(

"localhost",

"root",

"",

"database"

);


if($conn->connect_error)
{

echo "Connection Failed";

}
else
{

echo "Connected";

}

?>`,
  language: "php",
  output: `
Connected
  `,
},

{
  title: "PHP MySQL CRUD Operations",
  content: `
CRUD represents basic database operations:

C - Create

R - Read

U - Update

D - Delete
  `,
},

{
  title: "Create Operation",
  content: `
Create operation inserts new records into a database.
  `,
  code: `<?php

$sql = "INSERT INTO users(name)
VALUES('John')";

mysqli_query($conn,$sql);

?>`,
  language: "php",
  output: `
Data Inserted
  `,
},

{
  title: "Read Operation",
  content: `
Read operation retrieves records from database.
  `,
  code: `<?php

$result = mysqli_query(

$conn,

"SELECT * FROM users"

);

while($row=mysqli_fetch_assoc($result))
{

echo $row["name"];

}

?>`,
  language: "php",
  output: `
Database Records Displayed
  `,
},

{
  title: "Update Operation",
  content: `
Update operation modifies existing records.
  `,
  code: `<?php

$sql = "UPDATE users

SET name='Alex'

WHERE id=1";


mysqli_query($conn,$sql);

?>`,
  language: "php",
  output: `
Data Updated
  `,
},

{
  title: "Delete Operation",
  content: `
Delete operation removes records from database.
  `,
  code: `<?php

$sql = "DELETE FROM users

WHERE id=1";


mysqli_query($conn,$sql);

?>`,
  language: "php",
  output: `
Data Deleted
  `,
},

{
  title: "Prepared Statements",
  content: `
Prepared statements protect applications from SQL Injection attacks.

They separate SQL commands from user input.
  `,
},

{
  title: "PDO in PHP",
  content: `
PDO (PHP Data Objects) provides a secure and flexible way to connect with databases.

Advantages:

• Multiple Database Support

• Prepared Statements

• Better Error Handling
  `,
},

{
  title: "MySQLi vs PDO",
  content: `
MySQLi:

• Works only with MySQL

• Supports procedural and OOP styles


PDO:

• Supports multiple databases

• More flexible

• Recommended for modern applications
  `,
},{
  title: "Introduction to PHP Real-World Development",
  content: `
Professional PHP development focuses on building secure, scalable, and maintainable web applications.

Modern PHP applications usually include:

• Backend Logic

• Database Management

• Authentication

• APIs

• Security

• Deployment
  `,
},

{
  title: "PHP Project Structure",
  content: `
A well-organized PHP project separates different responsibilities.

Common structure:

project/

├── assets/

├── config/

├── controllers/

├── models/

├── views/

├── public/

├── uploads/

└── index.php

Benefits:

• Easy Maintenance

• Better Code Organization

• Team Collaboration
  `,
},

{
  title: "MVC Architecture Introduction",
  content: `
MVC stands for:

M - Model

V - View

C - Controller


MVC separates application logic into three parts.

Model:

Handles database operations.


View:

Handles user interface.


Controller:

Connects Model and View.
  `,
},

{
  title: "PHP Framework Introduction",
  content: `
PHP frameworks provide ready-made structures and tools for faster development.

Benefits:

• Faster Development

• Better Security

• Code Reusability

• Database Support

• Routing System
  `,
},

{
  title: "Laravel Framework",
  content: `
Laravel is the most popular modern PHP framework.

Features:

• MVC Architecture

• Authentication System

• Routing

• ORM

• Database Migration

• API Development

• Blade Template Engine
  `,
},

{
  title: "Symfony Framework",
  content: `
Symfony is a powerful PHP framework used for enterprise-level applications.

Features:

• High Performance

• Reusable Components

• Flexible Architecture

• Large Applications Support
  `,
},

{
  title: "CodeIgniter Framework",
  content: `
CodeIgniter is a lightweight PHP framework.

Features:

• Simple Structure

• Fast Performance

• Easy Learning Curve

• Small Footprint
  `,
},

{
  title: "Composer Package Manager",
  content: `
Composer is a dependency management tool for PHP.

It manages external libraries and packages.

Common commands:

composer install

composer update

composer require package-name
  `,
  code: `composer --version`,
  language: "bash",
  output: `
Composer Version Displayed
  `,
},

{
  title: "REST API Development in PHP",
  content: `
REST API allows applications to communicate through HTTP requests.

Common HTTP methods:

GET:

Retrieve Data


POST:

Create Data


PUT:

Update Data


DELETE:

Remove Data
  `,
},

{
  title: "Creating JSON Response",
  content: `
JSON is commonly used for exchanging data between frontend and backend.

PHP provides json_encode() for converting data into JSON format.
  `,
  code: `<?php

$data = array(

"name"=>"John",

"age"=>25

);


echo json_encode($data);

?>`,
  language: "php",
  output: `
{"name":"John","age":25}
  `,
},

{
  title: "Handling JSON Data",
  content: `
json_decode() converts JSON data into PHP objects or arrays.
  `,
  code: `<?php

$json = '{"name":"Alex"}';


$data = json_decode($json);


echo $data->name;

?>`,
  language: "php",
  output: `
Alex
  `,
},

{
  title: "Authentication API in PHP",
  content: `
Authentication APIs verify users through credentials.

Common flow:

1. User Registration

2. Password Hashing

3. Login Request

4. Token Generation

5. Protected Routes
  `,
},

{
  title: "Password Hashing",
  content: `
Passwords should never be stored as plain text.

PHP provides password_hash() and password_verify().
  `,
  code: `<?php

$password = "123456";


$hash = password_hash(

$password,

PASSWORD_DEFAULT

);


echo $hash;

?>`,
  language: "php",
  output: `
Encrypted Password Generated
  `,
},

{
  title: "PHP Security Best Practices",
  content: `
Security is important for protecting applications and user data.

Important practices:

• Validate User Input

• Use Prepared Statements

• Hash Passwords

• Protect Sessions

• Prevent XSS

• Prevent CSRF
  `,
},

{
  title: "SQL Injection Prevention",
  content: `
SQL Injection happens when attackers insert malicious SQL commands through user input.

Prevention:

✓ Prepared Statements

✓ Input Validation

✓ ORM Usage
  `,
},

{
  title: "XSS Protection",
  content: `
Cross-Site Scripting (XSS) allows attackers to inject malicious scripts.

Prevention:

• htmlspecialchars()

• Input Filtering

• Output Escaping
  `,
  code: `<?php

echo htmlspecialchars(

"<script>alert('XSS')</script>"

);

?>`,
  language: "php",
  output: `
Safe HTML Output
  `,
},

{
  title: "CSRF Protection",
  content: `
CSRF (Cross-Site Request Forgery) tricks users into performing unwanted actions.

Protection methods:

• CSRF Tokens

• Session Validation

• Secure Cookies
  `,
},

{
  title: "PHP with JavaScript",
  content: `
PHP works with JavaScript to create dynamic web applications.

PHP:

Handles server-side operations.


JavaScript:

Handles browser interactions.
  `,
},

{
  title: "PHP with AJAX",
  content: `
AJAX allows web pages to communicate with PHP without refreshing the page.

Common uses:

• Live Search

• Form Submission

• Dynamic Content Loading
  `,
  code: `$.ajax({

url:"data.php",

method:"GET",

success:function(data){

console.log(data);

}

});`,
  language: "javascript",
  output: `
Data Loaded Without Page Refresh
  `,
},

{
  title: "PHP Deployment",
  content: `
Deployment means publishing a PHP application on a server.

Deployment steps:

1. Prepare Application

2. Upload Files

3. Configure Database

4. Set Environment Variables

5. Test Application
  `,
},

{
  title: "Hosting PHP Applications",
  content: `
PHP applications can be hosted on:

• Shared Hosting

• VPS Servers

• Cloud Platforms

• Dedicated Servers

Popular hosting options:

• cPanel Hosting

• AWS

• DigitalOcean
  `,
},

{
  title: "PHP Testing Introduction",
  content: `
Testing ensures that applications work correctly.

Types of testing:

• Unit Testing

• Integration Testing

• Functional Testing

• Security Testing
  `,
},

{
  title: "PHP Debugging",
  content: `
Debugging helps developers find and fix errors.

Useful tools:

• error_reporting()

• var_dump()

• Xdebug

• Logs
  `,
  code: `<?php

error_reporting(E_ALL);

ini_set(

"display_errors",

1

);

?>`,
  language: "php",
  output: `
PHP Errors Displayed
  `,
},

{
  title: "PHP Performance Optimization",
  content: `
Improve PHP application performance using:

✓ Database Optimization

✓ Caching

✓ Code Optimization

✓ Image Compression

✓ Efficient Queries

✓ Load Balancing
  `,
},

{
  title: "PHP Developer Interview Questions",
  content: `
Common interview questions:

• What is PHP?

• Difference between GET and POST?

• Explain Sessions and Cookies.

• What is MVC?

• Explain OOP concepts in PHP.

• What is PDO?

• Difference between MySQLi and PDO?

• How do you prevent SQL Injection?

• What are Traits?

• What is Composer?
  `,
},

{
  title: "PHP Developer Roadmap",
  content: `
Learning path for PHP Developer:

1. HTML

2. CSS

3. JavaScript

4. PHP Basics

5. MySQL

6. OOP PHP

7. MVC

8. Laravel

9. REST APIs

10. Security

11. Deployment

12. Real Projects
  `,
},

{
  title: "Real-World PHP Projects",
  content: `
Build projects to improve PHP skills:

• Login and Registration System

• Blog Website

• E-commerce Website

• Student Management System

• Employee Management System

• Online Examination System

• Banking Management System

• Content Management System

• REST API Backend
  `,
},

{
  title: "PHP Career Opportunities",
  content: `
PHP skills can lead to careers as:

• PHP Developer

• Backend Developer

• Laravel Developer

• Full Stack Developer

• Web Application Developer

• API Developer
  `,
},
  ],
};