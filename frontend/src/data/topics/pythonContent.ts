export const pythonContent = {
  title: "Python Programming",
  description:
    "Learn Python Programming from beginner to advanced with examples and practice questions.",

  sections: [
    {
      title: "Introduction to Python",
      content: `
Python is a high-level, interpreted, and general-purpose programming language created by Guido van Rossum in 1991.

Python is known for its simple syntax and readability, making it one of the easiest programming languages to learn.

Python is widely used in:

• Web Development
• Artificial Intelligence
• Machine Learning
• Data Science
• Automation
• Cyber Security
• Game Development
• Desktop Applications
• Cloud Computing
• Internet of Things (IoT)

Python allows developers to write clean, efficient, and maintainable code with fewer lines compared to many other programming languages.
      `,
    },

    {
      title: "Features of Python",
      content: `
Major Features of Python:

• Easy to Learn
• Simple Syntax
• High-Level Language
• Interpreted Language
• Object-Oriented Programming
• Cross Platform
• Open Source
• Large Standard Library
• Automatic Memory Management
• Dynamic Typing
• Extensive Community Support

Advantages:

✓ Beginner Friendly
✓ Fast Development
✓ Readable Code
✓ Large Ecosystem
✓ Supports Multiple Programming Paradigms
✓ Ideal for AI and Data Science
✓ Huge Collection of Third-Party Libraries
      `,
    },

    {
      title: "History of Python",
      content: `
Python was created by Guido van Rossum and first released in 1991.

The language was designed to emphasize code readability and developer productivity.

Major Versions:

• Python 1.0 (1994)
• Python 2.0 (2000)
• Python 3.0 (2008)
• Python 3.x (Current)

Today, Python is one of the world's most popular programming languages.
      `,
    },

    {
      title: "Applications of Python",
      content: `
Python is used in many different industries.

Applications include:

• Web Applications
• Artificial Intelligence
• Machine Learning
• Data Analysis
• Data Visualization
• Automation Scripts
• Cyber Security
• Cloud Computing
• Desktop Applications
• Robotics
• Scientific Computing
• Game Development
• API Development

Popular companies using Python include Google, Netflix, Instagram, Spotify, and Dropbox.
      `,
    },

    {
      title: "Installation of Python",
      content: `
To start programming in Python, install Python from the official website.

Popular Code Editors:

• Visual Studio Code
• PyCharm
• IDLE
• Jupyter Notebook
• Spyder

Steps:

1. Download Python.
2. Install Python.
3. Select "Add Python to PATH" during installation.
4. Verify installation using:

python --version

or

python3 --version
      `,
    },

    {
      title: "Basic Structure of a Python Program",
      content: `
Unlike C or C++, Python does not require a main() function.

Programs are executed from top to bottom.

Python uses indentation instead of curly braces {} to define code blocks.

Every statement should have proper indentation for correct execution.
      `,
      code: `print("Hello World")`,
      language: "python",
      output: "Hello World",
      tip: "Indentation is mandatory in Python. Incorrect indentation causes an IndentationError.",
    },

    {
      title: "First Python Program",
      content: `
The print() function is used to display output on the screen.

Syntax:

print(value)

Python programs do not require compilation before execution.
      `,
      code: `print("Welcome to Python Programming!")`,
      language: "python",
      output: "Welcome to Python Programming!",
      tip: "The print() function can display text, numbers, variables, and expressions.",
    },

    {
      title: "Comments in Python",
      content: `
Comments improve code readability and documentation.

Python supports:

1. Single-line comments
2. Multi-line comments (using triple quotes)

Comments are ignored by the Python interpreter.
      `,
      code: `# Single-line comment

"""
This is a
multi-line comment
"""

print("Comments Example")`,
      language: "python",
      output: "Comments Example",
    }, 
  {
      title: "Variables",
      content: `
Variables are used to store data in memory.

Unlike C or C++, Python does not require declaring the data type of a variable.

The data type is determined automatically when a value is assigned.

Examples:

age = 20
name = "Harish"
price = 199.99
is_student = True
      `,
      code: `age = 20
salary = 35000.50
grade = "A"

print("Age:", age)
print("Salary:", salary)
print("Grade:", grade)`,
      language: "python",
      output: `Age: 20
Salary: 35000.5
Grade: A`,
      tip: "Use meaningful variable names to improve code readability.",
    },

    {
      title: "Variable Naming Rules",
      content: `
Variable names (identifiers) must follow these rules:

• Must begin with a letter (A-Z, a-z) or underscore (_)
• Cannot begin with a number
• Can contain letters, digits, and underscores
• Cannot contain spaces
• Cannot use Python keywords
• Variable names are case-sensitive

Valid Names:

age
student_name
_marks
total1

Invalid Names:

1age
student name
class
total-price
      `,
    },

    {
      title: "Data Types",
      content: `
Python supports several built-in data types.

Common Data Types:

int
Stores integer values.

float
Stores decimal numbers.

complex
Stores complex numbers.

bool
Stores True or False.

str
Stores text.

list
Stores ordered collections.

tuple
Stores immutable collections.

set
Stores unique values.

dict
Stores key-value pairs.
      `,
      code: `number = 100
price = 19.99
name = "Harish"
passed = True

print(type(number))
print(type(price))
print(type(name))
print(type(passed))`,
      language: "python",
      output: `<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>`,
    },

    {
      title: "Type Conversion",
      content: `
Type conversion changes one data type into another.

Common Conversion Functions:

int()
float()
str()
bool()
list()
tuple()
set()

Type conversion can be:

• Implicit
• Explicit
      `,
      code: `number = "100"

value = int(number)

print(value)
print(type(value))`,
      language: "python",
      output: `100
<class 'int'>`,
      tip: "Convert user input to the required type before performing calculations.",
    },

    {
      title: "Constants",
      content: `
Python does not provide a true constant keyword.

By convention, variables written in uppercase are treated as constants.

Example:

PI = 3.14159

Developers should avoid changing constant values.
      `,
      code: `PI = 3.14159

print(PI)`,
      language: "python",
      output: "3.14159",
    },

    {
      title: "Keywords",
      content: `
Keywords are reserved words with predefined meanings.

Keywords cannot be used as variable or function names.

Some commonly used Python keywords are:

False
True
None
if
elif
else
for
while
break
continue
return
def
class
import
from
try
except
finally
with
pass
lambda
global
nonlocal
yield
match
case
      `,
      code: `import keyword

print(keyword.kwlist)`,
      language: "python",
      output: "Displays the list of all Python keywords.",
      tip: "Use the keyword module to view all reserved keywords in your Python version.",
    },

    {
      title: "Escape Sequences",
      content: `
Escape sequences are special characters used inside strings.

Common Escape Sequences:

\\n   New Line
\\t   Horizontal Tab
\\\\   Backslash
\\"   Double Quote
\\'   Single Quote
\\r   Carriage Return
\\b   Backspace
      `,
      code: `print("Hello\\nWorld")
print("Name:\\tHarish")
print("C:\\\\Users\\\\Harish")`,
      language: "python",
      output: `Hello
World
Name:	Harish
C:\Users\Harish`,
      tip: "Escape sequences make formatted text output easier to create.",
    },
        {
      title: "Operators",
      content: `
Operators are special symbols used to perform operations on variables and values.

Python provides several types of operators:

• Arithmetic Operators
• Comparison Operators
• Logical Operators
• Assignment Operators
• Identity Operators
• Membership Operators
• Bitwise Operators
      `,
    },

    {
      title: "Arithmetic Operators",
      content: `
Arithmetic operators perform mathematical calculations.

Operators:

+   Addition
-   Subtraction
*   Multiplication
/   Division
//  Floor Division
%   Modulus
**  Exponentiation
      `,
      code: `a = 20
b = 6

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Floor Division:", a // b)
print("Modulus:", a % b)
print("Power:", a ** 2)`,
      language: "python",
      output: `Addition: 26
Subtraction: 14
Multiplication: 120
Division: 3.3333333333333335
Floor Division: 3
Modulus: 2
Power: 400`,
      tip: "Use // when you need integer division without the decimal part.",
    },

    {
      title: "Comparison Operators",
      content: `
Comparison operators compare two values.

Operators:

==   Equal to
!=   Not equal to
>    Greater than
<    Less than
>=   Greater than or equal to
<=   Less than or equal to

The result is always True or False.
      `,
      code: `a = 10
b = 20

print(a == b)
print(a != b)
print(a > b)
print(a < b)
print(a >= b)
print(a <= b)`,
      language: "python",
      output: `False
True
False
True
False
True`,
    },

    {
      title: "Logical Operators",
      content: `
Logical operators combine multiple conditions.

Operators:

and
or
not

These operators return Boolean values.
      `,
      code: `age = 20

print(age >= 18 and age <= 60)
print(age < 18 or age > 60)
print(not(age == 20))`,
      language: "python",
      output: `True
False
False`,
      tip: "Use logical operators when checking multiple conditions together.",
    },

    {
      title: "Assignment Operators",
      content: `
Assignment operators assign and update variable values.

Operators:

=
+=
-=
*=
/=
//=
%=
**=
      `,
      code: `number = 10

number += 5
print(number)

number *= 2
print(number)

number -= 8
print(number)

number //= 3
print(number)`,
      language: "python",
      output: `15
30
22
7`,
    },

    {
      title: "Identity Operators",
      content: `
Identity operators compare whether two variables refer to the same object in memory.

Operators:

is
is not

These operators compare object identity, not just values.
      `,
      code: `a = [1, 2, 3]
b = a
c = [1, 2, 3]

print(a is b)
print(a is c)
print(a is not c)`,
      language: "python",
      output: `True
False
True`,
      tip: "Use == to compare values and is to compare object identity.",
    },

    {
      title: "Membership Operators",
      content: `
Membership operators check whether a value exists in a sequence.

Operators:

in
not in

They work with strings, lists, tuples, sets, and dictionaries.
      `,
      code: `fruits = ["Apple", "Banana", "Orange"]

print("Apple" in fruits)
print("Mango" in fruits)
print("Mango" not in fruits)`,
      language: "python",
      output: `True
False
True`,
    },

    {
      title: "Bitwise Operators",
      content: `
Bitwise operators perform operations on the binary representation of integers.

Operators:

&
|
^
~
<<
>>

These operators are commonly used in low-level programming and optimization.
      `,
      code: `a = 5
b = 3

print("AND:", a & b)
print("OR:", a | b)
print("XOR:", a ^ b)
print("Left Shift:", a << 1)
print("Right Shift:", a >> 1)`,
      language: "python",
      output: `AND: 1
OR: 7
XOR: 6
Left Shift: 10
Right Shift: 2`,
      tip: "Bitwise operators work only with integer values.",
    },    {
      title: "Input and Output",
      content: `
Python provides built-in functions for taking input from the user and displaying output.

Functions:

• input() → Reads input from the keyboard.
• print() → Displays output on the screen.

The input() function always returns a string. Use type conversion when numeric input is required.
      `,
      code: `name = input("Enter your name: ")
age = int(input("Enter your age: "))

print("\\nName:", name)
print("Age:", age)`,
      language: "python",
      output: `Enter your name: Harish
Enter your age: 21

Name: Harish
Age: 21`,
      tip: "Convert user input to int() or float() before performing mathematical operations.",
    },

    {
      title: "Formatted Output (f-Strings)",
      content: `
Python provides multiple ways to format output.

Common methods:

• f-Strings (Recommended)
• format() method
• % formatting (Older style)

f-Strings are available from Python 3.6 onwards and are fast, readable, and easy to use.
      `,
      code: `name = "Harish"
age = 21
marks = 95.75

print(f"Name: {name}")
print(f"Age: {age}")
print(f"Marks: {marks}")`,
      language: "python",
      output: `Name: Harish
Age: 21
Marks: 95.75`,
      tip: "Use f-strings for cleaner and more readable formatted output.",
    },

    {
      title: "Type Casting (Advanced)",
      content: `
Type casting converts values between different data types.

Common conversion functions:

int()
float()
str()
bool()
list()
tuple()
set()
dict()

Explicit type conversion is commonly used with user input.
      `,
      code: `age = "20"
price = "199.99"

age = int(age)
price = float(price)

print(age)
print(price)
print(type(age))
print(type(price))`,
      language: "python",
      output: `20
199.99
<class 'int'>
<class 'float'>`,
    },

    {
      title: "If Statement",
      content: `
The if statement executes a block of code only when the given condition is True.

Syntax:

if condition:
    # statements

Indentation is mandatory in Python.
      `,
      code: `age = 20

if age >= 18:
    print("Eligible to Vote")`,
      language: "python",
      output: "Eligible to Vote",
      tip: "Always indent the code inside an if block using the same number of spaces.",
    },

    {
      title: "If...Else Statement",
      content: `
The if...else statement executes one block if the condition is True and another block if it is False.

Syntax:

if condition:
    # code
else:
    # code
      `,
      code: `number = 7

if number % 2 == 0:
    print("Even Number")
else:
    print("Odd Number")`,
      language: "python",
      output: "Odd Number",
    },

    {
      title: "Nested If Statement",
      content: `
A nested if statement is an if statement placed inside another if statement.

Nested if statements are useful when one condition depends on another.
      `,
      code: `age = 20
citizen = True

if age >= 18:
    if citizen:
        print("Eligible to Vote")`,
      language: "python",
      output: "Eligible to Vote",
      tip: "Avoid deeply nested if statements to keep code readable.",
    },

    {
      title: "elif Ladder",
      content: `
The elif statement allows checking multiple conditions.

Python evaluates conditions from top to bottom.

The first True condition is executed.

Syntax:

if condition:
    ...
elif condition:
    ...
else:
    ...
      `,
      code: `marks = 82

if marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 50:
    print("Grade C")
else:
    print("Fail")`,
      language: "python",
      output: "Grade B",
      tip: "Arrange conditions from highest priority to lowest priority.",
    },

    {
      title: "match...case Statement",
      content: `
The match...case statement was introduced in Python 3.10.

It works similarly to the switch statement in other programming languages.

Syntax:

match value:
    case pattern:
        # statements
    case _:
        # default

The underscore (_) acts as the default case.
      `,
      code: `day = 3

match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case _:
        print("Invalid Day")`,
      language: "python",
      output: "Wednesday",
      tip: "The match...case statement requires Python 3.10 or later.",
    },    {
      title: "For Loop",
      content: `
The for loop is used to iterate over a sequence such as a list, tuple, string, set, dictionary, or range.

Syntax:

for variable in sequence:
    # statements

The range() function is commonly used to generate a sequence of numbers.
      `,
      code: `for i in range(1, 6):
    print(i)`,
      language: "python",
      output: `1
2
3
4
5`,
      tip: "Use a for loop when the number of iterations is known.",
    },

    {
      title: "range() Function",
      content: `
The range() function generates a sequence of numbers.

Syntax:

range(stop)
range(start, stop)
range(start, stop, step)

The stop value is not included in the sequence.
      `,
      code: `print(list(range(5)))
print(list(range(1, 6)))
print(list(range(2, 11, 2)))`,
      language: "python",
      output: `[0, 1, 2, 3, 4]
[1, 2, 3, 4, 5]
[2, 4, 6, 8, 10]`,
      tip: "range() returns a range object. Convert it to a list if you want to display all values.",
    },

    {
      title: "While Loop",
      content: `
A while loop executes as long as its condition remains True.

Syntax:

while condition:
    # statements

The condition is checked before every iteration.
      `,
      code: `i = 1

while i <= 5:
    print(i)
    i += 1`,
      language: "python",
      output: `1
2
3
4
5`,
      tip: "Update the loop variable to avoid infinite loops.",
    },

    {
      title: "Nested Loops",
      content: `
A nested loop is a loop inside another loop.

Nested loops are commonly used for:

• Patterns
• Matrices
• Tables
• Games

The inner loop completes all its iterations for every iteration of the outer loop.
      `,
      code: `for i in range(1, 4):
    for j in range(1, 4):
        print(i, j)`,
      language: "python",
      output: `1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3`,
    },

    {
      title: "Infinite Loops",
      content: `
An infinite loop runs forever because its condition never becomes False.

Example:

while True:

Infinite loops are useful in:

• Servers
• Games
• Event-driven programs
• Menu-driven applications

Always provide a way to exit the loop when appropriate.
      `,
      code: `while True:
    print("Running...")
    break`,
      language: "python",
      output: "Running...",
      tip: "Use break or another exit condition to terminate an infinite loop when needed.",
    },

    {
      title: "break Statement",
      content: `
The break statement immediately terminates the nearest loop.

Control moves to the first statement after the loop.

Syntax:

break
      `,
      code: `for i in range(1, 11):
    if i == 6:
        break

    print(i)`,
      language: "python",
      output: `1
2
3
4
5`,
      tip: "Use break when you have found the required result and no longer need to continue the loop.",
    },

    {
      title: "continue Statement",
      content: `
The continue statement skips the remaining statements in the current iteration and moves to the next iteration.

Unlike break, it does not terminate the loop.
      `,
      code: `for i in range(1, 6):
    if i == 3:
        continue

    print(i)`,
      language: "python",
      output: `1
2
4
5`,
      tip: "Use continue to skip specific values while allowing the loop to continue.",
    },

    {
      title: "pass Statement",
      content: `
The pass statement is a placeholder.

It performs no action and is useful when a statement is syntactically required but no code needs to be executed.

Common uses:

• Empty functions
• Empty classes
• Empty loops
• Future implementation
      `,
      code: `for i in range(5):
    if i == 3:
        pass

print("Program Finished")`,
      language: "python",
      output: "Program Finished",
      tip: "pass does nothing—it simply prevents syntax errors in empty code blocks.",
    },

    {
      title: "Loop else Clause",
      content: `
Python allows an else block with both for and while loops.

The else block executes only if the loop finishes normally.

It does not execute if the loop ends because of a break statement.

Syntax:

for ...:
    ...
else:
    ...
      `,
      code: `for i in range(1, 6):
    print(i)
else:
    print("Loop Completed Successfully")`,
      language: "python",
      output: `1
2
3
4
5
Loop Completed Successfully`,
      tip: "The loop else clause is unique to Python and is often used in search algorithms.",
    },    {
      title: "Functions",
      content: `
Functions are reusable blocks of code that perform a specific task.

Advantages of Functions:

• Code Reusability
• Easy Maintenance
• Better Readability
• Modular Programming
• Reduced Code Duplication

Python functions are created using the def keyword.
      `,
      code: `def greet():
    print("Welcome to Python Programming!")

greet()`,
      language: "python",
      output: "Welcome to Python Programming!",
      tip: "Keep each function focused on performing a single task.",
    },

    {
      title: "Function Parameters",
      content: `
Parameters allow values to be passed into a function.

Types of Parameters:

• Positional Parameters
• Default Parameters
• Keyword Parameters
• Variable-Length Parameters

Parameters make functions flexible and reusable.
      `,
      code: `def add(a, b):
    print(a + b)

add(10, 20)`,
      language: "python",
      output: "30",
    },

    {
      title: "Return Statement",
      content: `
The return statement sends a value back to the caller.

Syntax:

return value

A function without a return statement returns None by default.
      `,
      code: `def square(number):
    return number * number

result = square(5)

print(result)`,
      language: "python",
      output: "25",
      tip: "Use return instead of print() when another part of the program needs the result.",
    },

    {
      title: "Default Arguments",
      content: `
Default arguments allow a parameter to have a predefined value.

If the caller does not provide a value, the default value is used.

Syntax:

def function(parameter=value):
      `,
      code: `def greet(name="Guest"):
    print("Hello,", name)

greet()
greet("Harish")`,
      language: "python",
      output: `Hello, Guest
Hello, Harish`,
    },

    {
      title: "Keyword Arguments",
      content: `
Keyword arguments pass values using parameter names.

Advantages:

• Improves readability
• Allows arguments in any order
• Makes function calls more descriptive
      `,
      code: `def student(name, age):
    print("Name:", name)
    print("Age:", age)

student(age=21, name="Harish")`,
      language: "python",
      output: `Name: Harish
Age: 21`,
      tip: "Keyword arguments are especially useful for functions with many parameters.",
    },

    {
      title: "Variable-Length Arguments (*args)",
      content: `
The *args parameter allows a function to accept any number of positional arguments.

Inside the function, args is treated as a tuple.

Syntax:

def function(*args):
      `,
      code: `def total(*numbers):
    print(sum(numbers))

total(10, 20)
total(10, 20, 30, 40)`,
      language: "python",
      output: `30
100`,
      tip: "Use *args when the number of positional arguments is unknown.",
    },

    {
      title: "Variable-Length Keyword Arguments (**kwargs)",
      content: `
The **kwargs parameter allows a function to accept any number of keyword arguments.

Inside the function, kwargs is stored as a dictionary.

Syntax:

def function(**kwargs):
      `,
      code: `def student(**details):
    for key, value in details.items():
        print(f"{key}: {value}")

student(name="Harish", age=21, city="Delhi")`,
      language: "python",
      output: `name: Harish
age: 21
city: Delhi`,
      tip: "Use **kwargs when you want to accept flexible named arguments.",
    },

    {
      title: "Lambda Functions",
      content: `
A lambda function is an anonymous function written in a single line.

Syntax:

lambda arguments: expression

Lambda functions are commonly used with:

• map()
• filter()
• sorted()
• reduce()
      `,
      code: `square = lambda x: x * x

print(square(6))`,
      language: "python",
      output: "36",
      tip: "Use lambda functions for short, simple operations.",
    },

    {
      title: "Recursion",
      content: `
Recursion is a technique where a function calls itself.

Every recursive function must have:

• Base Case
• Recursive Call

Without a base case, recursion continues indefinitely and eventually causes a RecursionError.
      `,
      code: `def factorial(n):
    if n == 1:
        return 1

    return n * factorial(n - 1)

print(factorial(5))`,
      language: "python",
      output: "120",
      tip: "Always define a base case to stop recursive calls.",
    },    {
      title: "Lists",
      content: `
A list is an ordered, mutable collection that can store multiple values.

Characteristics:

• Ordered
• Mutable (can be modified)
• Allows duplicate values
• Can store different data types

Syntax:

list_name = [value1, value2, value3]
      `,
      code: `fruits = ["Apple", "Banana", "Orange"]

print(fruits)
print(fruits[0])
print(len(fruits))`,
      language: "python",
      output: `['Apple', 'Banana', 'Orange']
Apple
3`,
      tip: "Lists are one of the most commonly used data structures in Python.",
    },

    {
      title: "Accessing List Elements",
      content: `
List elements are accessed using indexing.

Positive Index:

0, 1, 2, ...

Negative Index:

-1, -2, -3, ...

Negative indexing starts from the end of the list.
      `,
      code: `numbers = [10, 20, 30, 40, 50]

print(numbers[1])
print(numbers[-1])`,
      language: "python",
      output: `20
50`,
    },

    {
      title: "List Methods",
      content: `
Python provides many built-in list methods.

Common Methods:

append()
insert()
extend()
remove()
pop()
clear()
sort()
reverse()
count()
index()
copy()
      `,
      code: `numbers = [10, 20, 30]

numbers.append(40)
numbers.insert(1, 15)
numbers.remove(20)

print(numbers)`,
      language: "python",
      output: `[10, 15, 30, 40]`,
      tip: "Use append() to add one element and extend() to add multiple elements.",
    },

    {
      title: "List Comprehension",
      content: `
List comprehension provides a concise way to create lists.

Syntax:

[expression for item in iterable]

It is faster and more readable than using loops in many cases.
      `,
      code: `squares = [x * x for x in range(1, 6)]

print(squares)`,
      language: "python",
      output: `[1, 4, 9, 16, 25]`,
      tip: "Use list comprehensions to write cleaner and more Pythonic code.",
    },

    {
      title: "Tuples",
      content: `
A tuple is an ordered, immutable collection.

Characteristics:

• Ordered
• Immutable
• Allows duplicate values
• Faster than lists for fixed data

Syntax:

tuple_name = (value1, value2, value3)
      `,
      code: `colors = ("Red", "Green", "Blue")

print(colors)
print(colors[1])`,
      language: "python",
      output: `('Red', 'Green', 'Blue')
Green`,
      tip: "Use tuples when the data should not be modified.",
    },

    {
      title: "Sets",
      content: `
A set is an unordered collection of unique elements.

Characteristics:

• Unordered
• Mutable
• No duplicate values
• Does not support indexing

Syntax:

set_name = {value1, value2, value3}
      `,
      code: `numbers = {10, 20, 30, 20, 10}

print(numbers)`,
      language: "python",
      output: `{10, 20, 30}`,
      tip: "Sets automatically remove duplicate values.",
    },

    {
      title: "Set Methods",
      content: `
Common set methods include:

add()
update()
remove()
discard()
pop()
clear()
union()
intersection()
difference()
      `,
      code: `fruits = {"Apple", "Banana"}

fruits.add("Orange")
fruits.update(["Mango", "Grapes"])

print(fruits)`,
      language: "python",
      output: `{'Apple', 'Banana', 'Orange', 'Mango', 'Grapes'}`,
    },

    {
      title: "Dictionaries",
      content: `
A dictionary stores data as key-value pairs.

Characteristics:

• Ordered (Python 3.7+)
• Mutable
• Keys are unique
• Values can be duplicated

Syntax:

dict_name = {
    key: value
}
      `,
      code: `student = {
    "name": "Harish",
    "age": 21,
    "course": "Python"
}

print(student)
print(student["name"])`,
      language: "python",
      output: `{'name': 'Harish', 'age': 21, 'course': 'Python'}
Harish`,
      tip: "Dictionary keys must be unique and immutable.",
    },

    {
      title: "Dictionary Methods",
      content: `
Python provides many useful dictionary methods.

Common Methods:

keys()
values()
items()
get()
update()
pop()
popitem()
clear()
copy()
      `,
      code: `student = {
    "name": "Harish",
    "age": 21
}

print(student.keys())
print(student.values())
print(student.items())`,
      language: "python",
      output: `dict_keys(['name', 'age'])
dict_values(['Harish', 21])
dict_items([('name', 'Harish'), ('age', 21)])`,
      tip: "Use get() instead of square brackets when a key might not exist.",
    },    {
      title: "Strings",
      content: `
A string is a sequence of characters enclosed in single quotes (' '), double quotes (" "), or triple quotes (''' ''' or """ """).

Characteristics:

• Ordered
• Immutable
• Supports Indexing
• Supports Slicing
• Can contain letters, numbers, and special characters

Strings are one of the most commonly used data types in Python.
      `,
      code: `name = "Harish"

print(name)
print(type(name))`,
      language: "python",
      output: `Harish
<class 'str'>`,
      tip: "Strings are immutable, meaning they cannot be changed after creation.",
    },

    {
      title: "String Indexing",
      content: `
Each character in a string has an index.

Positive Index:

0, 1, 2, ...

Negative Index:

-1, -2, -3, ...

Negative indexing starts from the last character.
      `,
      code: `text = "Python"

print(text[0])
print(text[3])
print(text[-1])`,
      language: "python",
      output: `P
h
n`,
      tip: "Access individual characters using square brackets [].",
    },

    {
      title: "String Slicing",
      content: `
Slicing extracts a portion of a string.

Syntax:

string[start:stop]
string[start:stop:step]

The stop index is not included in the result.
      `,
      code: `text = "Programming"

print(text[0:7])
print(text[3:8])
print(text[::-1])`,
      language: "python",
      output: `Program
gramm
gnimmargorP`,
      tip: "Use [::-1] to reverse a string.",
    },

    {
      title: "Common String Methods",
      content: `
Python provides many built-in methods for working with strings.

Common Methods:

upper()
lower()
title()
capitalize()
strip()
replace()
split()
join()
find()
count()
startswith()
endswith()
      `,
      code: `text = "  python programming  "

print(text.upper())
print(text.strip())
print(text.replace("python", "Python"))
print(text.count("m"))`,
      language: "python",
      output: `  PYTHON PROGRAMMING  
python programming
  Python programming  
2`,
      tip: "Most string methods return a new string because strings are immutable.",
    },

    {
      title: "String Formatting",
      content: `
String formatting allows variables and expressions to be inserted into strings.

Common methods:

• f-Strings (Recommended)
• format()
• % Formatting (Older Style)

f-Strings are the fastest and most readable approach.
      `,
      code: `name = "Harish"
marks = 95

print(f"{name} scored {marks}%.")

print("{} scored {}%.".format(name, marks))`,
      language: "python",
      output: `Harish scored 95%.
Harish scored 95%.`,
      tip: "Prefer f-strings for modern Python code.",
    },

    {
      title: "Escape Characters",
      content: `
Escape characters are used to insert special characters into strings.

Common Escape Characters:

\\n  New Line
\\t  Tab
\\\\  Backslash
\\"  Double Quote
\\'  Single Quote
      `,
      code: `print("Hello\\nWorld")
print("Python\\tProgramming")
print("C:\\\\Users\\\\Harish")`,
      language: "python",
      output: `Hello
World
Python	Programming
C:\Users\Harish`,
    },

    {
      title: "Regular Expressions (re Module)",
      content: `
The re module provides support for pattern matching using regular expressions.

Common Functions:

re.search()
re.match()
re.findall()
re.sub()
re.split()

Regular expressions are useful for searching, validating, and manipulating text.
      `,
      code: `import re

text = "Python 3 is awesome"

result = re.findall(r"\\w+", text)

print(result)`,
      language: "python",
      output: `['Python', '3', 'is', 'awesome']`,
      tip: "Use raw strings (r'...') when writing regular expression patterns.",
    },

    {
      title: "String Membership Operators",
      content: `
Membership operators check whether a substring exists within a string.

Operators:

• in
• not in

They return True or False.
      `,
      code: `language = "Python Programming"

print("Python" in language)
print("Java" in language)
print("Java" not in language)`,
      language: "python",
      output: `True
False
True`,
    },

    {
      title: "String Comparison",
      content: `
Strings can be compared using comparison operators.

Python compares strings lexicographically based on Unicode values.

Operators:

==
!=
<
>
<=
>=
      `,
      code: `print("Apple" == "Apple")
print("Apple" < "Banana")
print("Python" != "Java")`,
      language: "python",
      output: `True
True
True`,
      tip: "String comparisons are case-sensitive.",
    },    {
      title: "Modules",
      content: `
A module is a Python file (.py) containing functions, classes, and variables.

Modules help organize code into reusable components.

Advantages:

• Code Reusability
• Better Organization
• Easy Maintenance
• Modular Programming

Python provides:

• Built-in Modules
• User-defined Modules
• Third-party Modules
      `,
    },

    {
      title: "Import Statement",
      content: `
The import statement is used to access code from another module.

Syntax:

import module_name

You can also import specific functions or use aliases.
      `,
      code: `import math

print(math.sqrt(25))
print(math.pi)`,
      language: "python",
      output: `5.0
3.141592653589793`,
      tip: "Import only the modules you need to keep your code clean and efficient.",
    },

    {
      title: "Importing Specific Members",
      content: `
You can import individual functions, classes, or variables from a module.

Syntax:

from module_name import member

This avoids writing the module name repeatedly.
      `,
      code: `from math import sqrt, factorial

print(sqrt(49))
print(factorial(5))`,
      language: "python",
      output: `7.0
120`,
    },

    {
      title: "Module Alias",
      content: `
Aliases provide a shorter name for a module.

Syntax:

import module_name as alias

Aliases improve readability, especially for frequently used modules.
      `,
      code: `import math as m

print(m.pow(2, 5))
print(m.ceil(4.2))
print(m.floor(4.9))`,
      language: "python",
      output: `32.0
5
4`,
      tip: "Aliases such as 'np' for NumPy and 'pd' for pandas are common in Python projects.",
    },

    {
      title: "Built-in Modules",
      content: `
Python includes many built-in modules.

Popular built-in modules:

• math
• random
• datetime
• os
• sys
• statistics
• time
• json
• re
• pathlib

These modules provide ready-to-use functionality.
      `,
      code: `import random

print(random.randint(1, 10))
print(random.choice(["Apple", "Banana", "Orange"]))`,
      language: "python",
      output: `7
Banana`,
      tip: "The exact output may vary because random values are generated each time.",
    },

    {
      title: "User-defined Modules",
      content: `
You can create your own modules by saving Python code in a .py file.

Example:

File: calculator.py

def add(a, b):
    return a + b

Import it into another file to reuse the function.
      `,
      code: `# calculator.py

def add(a, b):
    return a + b

# main.py

import calculator

print(calculator.add(10, 20))`,
      language: "python",
      output: "30",
    },

    {
      title: "Packages",
      content: `
A package is a collection of related modules stored inside a directory.

A package helps organize large Python projects.

Example:

project/
│
├── main.py
└── utils/
    ├── __init__.py
    ├── math_utils.py
    └── string_utils.py

Packages improve project structure and maintainability.
      `,
      code: `from utils.math_utils import add

print(add(5, 10))`,
      language: "python",
      output: "15",
    },

    {
      title: "Installing Packages with pip",
      content: `
pip is Python's package manager.

It is used to install, update, and remove third-party libraries.

Common Commands:

pip install package_name
pip uninstall package_name
pip list
pip show package_name
pip freeze

Examples:

pip install numpy
pip install pandas
pip install requests
      `,
      code: `# Install NumPy

pip install numpy

# Display installed packages

pip list`,
      language: "bash",
      output: `Successfully installs the package and displays the list of installed packages.`,
      tip: "Use 'python -m pip install package_name' if pip is not recognized.",
    },

    {
      title: "Virtual Environment (venv)",
      content: `
A virtual environment creates an isolated Python environment for a project.

Benefits:

• Avoids dependency conflicts
• Keeps projects independent
• Makes deployment easier

Common Commands:

python -m venv myenv

Windows:

myenv\\Scripts\\activate

Linux/macOS:

source myenv/bin/activate
      `,
      code: `# Create virtual environment

python -m venv myenv

# Activate (Windows)

myenv\\Scripts\\activate

# Install packages

pip install requests`,
      language: "bash",
      output: `Virtual environment created and activated successfully.`,
      tip: "Always use a virtual environment for real-world Python projects.",
    },

    {
      title: "Useful Standard Library Modules",
      content: `
Python's Standard Library includes many useful modules.

Common Modules:

• math → Mathematical functions
• random → Random values
• datetime → Date and time
• os → Operating system utilities
• sys → System-specific functions
• pathlib → File system paths
• json → JSON handling
• csv → CSV file handling
• statistics → Statistical calculations
• re → Regular expressions
• collections → Specialized containers
• itertools → Efficient iterators
• functools → Higher-order functions

Learning these modules significantly improves Python programming skills.
      `,
      code: `from datetime import datetime

now = datetime.now()

print(now.strftime("%d-%m-%Y"))`,
      language: "python",
      output: `31-07-2026`,
      tip: "The Standard Library helps you accomplish many tasks without installing external packages.",
    },    {
      title: "Exception Handling",
      content: `
Exception handling allows a program to handle runtime errors gracefully without terminating unexpectedly.

Benefits:

• Prevents program crashes
• Improves user experience
• Makes debugging easier
• Separates error handling from normal code

Common Keywords:

• try
• except
• else
• finally
• raise
      `,
    },

    {
      title: "try Statement",
      content: `
The try block contains code that may generate an exception.

If an exception occurs, Python transfers control to the matching except block.

Syntax:

try:
    # risky code
except:
    # error handling
      `,
      code: `try:
    number = int(input("Enter a number: "))
    print(number)
except:
    print("Invalid Input")`,
      language: "python",
      output: `Enter a number: abc
Invalid Input`,
      tip: "Only place code that may raise an exception inside the try block.",
    },

    {
      title: "except Statement",
      content: `
The except block catches and handles exceptions.

You can catch:

• All exceptions
• Specific exceptions
• Multiple exceptions

Handling specific exceptions is considered a best practice.
      `,
      code: `try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero.")`,
      language: "python",
      output: "Cannot divide by zero.",
    },

    {
      title: "Handling Multiple Exceptions",
      content: `
A program may encounter different types of exceptions.

Multiple except blocks can handle different exceptions separately.
      `,
      code: `try:
    number = int(input("Enter a number: "))
    result = 100 / number
    print(result)

except ValueError:
    print("Please enter a valid integer.")

except ZeroDivisionError:
    print("Division by zero is not allowed.")`,
      language: "python",
      output: `Enter a number: 0
Division by zero is not allowed.`,
      tip: "Catch specific exceptions before general ones.",
    },

    {
      title: "else Statement",
      content: `
The else block executes only if no exception occurs.

Syntax:

try:
    ...
except:
    ...
else:
    ...
      `,
      code: `try:
    number = int(input("Enter a number: "))
except ValueError:
    print("Invalid Input")
else:
    print("You entered:", number)`,
      language: "python",
      output: `Enter a number: 25
You entered: 25`,
    },

    {
      title: "finally Statement",
      content: `
The finally block always executes whether an exception occurs or not.

It is commonly used for:

• Closing files
• Closing database connections
• Releasing resources
      `,
      code: `try:
    print("Program Started")
except:
    print("Error")
finally:
    print("Program Finished")`,
      language: "python",
      output: `Program Started
Program Finished`,
      tip: "Use finally for cleanup operations that must always execute.",
    },

    {
      title: "raise Statement",
      content: `
The raise statement is used to generate an exception manually.

Syntax:

raise ExceptionType("Message")

It is useful for validating data and enforcing program rules.
      `,
      code: `age = -5

if age < 0:
    raise ValueError("Age cannot be negative.")`,
      language: "python",
      output: `ValueError: Age cannot be negative.`,
    },

    {
      title: "Custom Exceptions",
      content: `
You can create your own exception classes by inheriting from Exception.

Custom exceptions make programs easier to understand and maintain.
      `,
      code: `class InvalidAgeError(Exception):
    pass

age = -2

if age < 0:
    raise InvalidAgeError("Invalid age entered.")`,
      language: "python",
      output: `InvalidAgeError: Invalid age entered.`,
      tip: "Create custom exceptions for application-specific errors.",
    },

    {
      title: "Assertions",
      content: `
Assertions are used to test whether a condition is True.

Syntax:

assert condition

If the condition is False, an AssertionError is raised.

Assertions are mainly used during development and debugging.
      `,
      code: `age = 20

assert age >= 18

print("Eligible")`,
      language: "python",
      output: "Eligible",
    },

    {
      title: "Common Built-in Exceptions",
      content: `
Python provides many built-in exception classes.

Common Exceptions:

• ValueError
• TypeError
• NameError
• IndexError
• KeyError
• ZeroDivisionError
• FileNotFoundError
• ImportError
• AttributeError
• AssertionError
• RuntimeError
• KeyboardInterrupt

Understanding these exceptions helps you write more reliable Python programs.
      `,
      code: `try:
    numbers = [10, 20, 30]

    print(numbers[5])

except IndexError:
    print("Index out of range.")`,
      language: "python",
      output: "Index out of range.",
      tip: "Read exception messages carefully—they often indicate the exact cause of the problem.",
    },    {
      title: "File Handling",
      content: `
File handling allows programs to store and retrieve data permanently.

Python provides built-in functions for working with files.

Common Operations:

• Create a file
• Open a file
• Read a file
• Write to a file
• Append data
• Close a file

Python uses the open() function to perform file operations.
      `,
    },

    {
      title: "Opening a File",
      content: `
The open() function is used to open a file.

Syntax:

open(file_name, mode)

Common File Modes:

r   Read
w   Write
a   Append
x   Create
r+  Read and Write
b   Binary Mode
t   Text Mode (Default)
      `,
      code: `file = open("data.txt", "r")

print(file)

file.close()`,
      language: "python",
      output: `<_io.TextIOWrapper name='data.txt' mode='r' encoding='UTF-8'>`,
      tip: "Always close a file after using it to free system resources.",
    },

    {
      title: "Reading a File",
      content: `
Python provides several methods for reading files.

Common Methods:

read()
readline()
readlines()

Each method serves a different purpose depending on the amount of data to read.
      `,
      code: `file = open("data.txt", "r")

content = file.read()

print(content)

file.close()`,
      language: "python",
      output: `Hello World
Welcome to Python`,
    },

    {
      title: "Writing to a File",
      content: `
The write() method writes data to a file.

If the file does not exist, it is created.

When opened in write mode (w), the existing contents are overwritten.
      `,
      code: `file = open("data.txt", "w")

file.write("Welcome to Python Programming!")

file.close()

print("File written successfully.")`,
      language: "python",
      output: "File written successfully.",
      tip: "Opening a file in 'w' mode deletes its previous contents.",
    },

    {
      title: "Appending to a File",
      content: `
Append mode (a) adds new content to the end of a file.

Existing data remains unchanged.
      `,
      code: `file = open("data.txt", "a")

file.write("\\nLearning File Handling")

file.close()

print("Data appended successfully.")`,
      language: "python",
      output: "Data appended successfully.",
    },

    {
      title: "The with Statement",
      content: `
The with statement automatically closes a file after use.

It is the recommended way to work with files because it manages resources safely.

Syntax:

with open(file, mode) as file:
    # statements
      `,
      code: `with open("data.txt", "r") as file:
    print(file.read())`,
      language: "python",
      output: `Displays the contents of data.txt`,
      tip: "Prefer using 'with' instead of calling close() manually.",
    },

    {
      title: "Working with CSV Files",
      content: `
The csv module provides tools for reading and writing CSV (Comma-Separated Values) files.

Common Functions:

csv.reader()
csv.writer()

CSV files are commonly used for storing tabular data.
      `,
      code: `import csv

with open("students.csv", "w", newline="") as file:
    writer = csv.writer(file)

    writer.writerow(["Name", "Age"])
    writer.writerow(["Harish", 21])

print("CSV file created.")`,
      language: "python",
      output: "CSV file created.",
    },

    {
      title: "Reading a CSV File",
      content: `
Use csv.reader() to read rows from a CSV file.

Each row is returned as a list of values.
      `,
      code: `import csv

with open("students.csv", "r") as file:
    reader = csv.reader(file)

    for row in reader:
        print(row)`,
      language: "python",
      output: `['Name', 'Age']
['Harish', '21']`,
    },

    {
      title: "Working with JSON Files",
      content: `
JSON (JavaScript Object Notation) is a popular format for exchanging data.

Python provides the json module.

Common Functions:

json.dump()
json.load()
json.dumps()
json.loads()
      `,
      code: `import json

student = {
    "name": "Harish",
    "age": 21
}

with open("student.json", "w") as file:
    json.dump(student, file)

print("JSON file created.")`,
      language: "python",
      output: "JSON file created.",
    },

    {
      title: "Reading a JSON File",
      content: `
Use json.load() to convert JSON data into Python objects.

JSON objects become Python dictionaries.
      `,
      code: `import json

with open("student.json", "r") as file:
    student = json.load(file)

print(student)
print(student["name"])`,
      language: "python",
      output: `{'name': 'Harish', 'age': 21}
Harish`,
      tip: "JSON is widely used for APIs, configuration files, and data storage.",
    },    {
      title: "Object-Oriented Programming (OOP)",
      content: `
Object-Oriented Programming (OOP) is a programming paradigm that organizes code using objects and classes.

OOP helps in building scalable and maintainable applications.

Four Pillars of OOP:

• Encapsulation
• Inheritance
• Polymorphism
• Abstraction

Advantages:

✓ Code Reusability
✓ Easy Maintenance
✓ Better Security
✓ Modular Design
✓ Improved Scalability
      `,
    },

    {
      title: "Classes",
      content: `
A class is a blueprint for creating objects.

It defines the properties (variables) and behaviors (methods) of an object.

Syntax:

class ClassName:
    # class body

By convention, class names use PascalCase.
      `,
      code: `class Student:
    pass

print(Student)`,
      language: "python",
      output: "<class '__main__.Student'>",
      tip: "A class describes what an object should look like, but it does not create the object itself.",
    },

    {
      title: "Objects",
      content: `
An object is an instance of a class.

Objects allow you to access the variables and methods defined in the class.

Multiple objects can be created from the same class.
      `,
      code: `class Student:
    pass

student1 = Student()
student2 = Student()

print(type(student1))
print(type(student2))`,
      language: "python",
      output: `<class '__main__.Student'>
<class '__main__.Student'>`,
    },

    {
      title: "Constructors (__init__)",
      content: `
A constructor is a special method that is automatically called when an object is created.

In Python, the constructor method is named __init__().

Syntax:

def __init__(self):
    ...
      `,
      code: `class Student:
    def __init__(self):
        print("Constructor Called")

student = Student()`,
      language: "python",
      output: "Constructor Called",
      tip: "Use the constructor to initialize object data.",
    },

    {
      title: "Instance Variables",
      content: `
Instance variables belong to individual objects.

They are created inside the constructor using the self keyword.

Each object has its own copy of instance variables.
      `,
      code: `class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

student = Student("Harish", 21)

print(student.name)
print(student.age)`,
      language: "python",
      output: `Harish
21`,
    },

    {
      title: "Instance Methods",
      content: `
Instance methods operate on object data.

They always receive self as the first parameter.

Instance methods can access both instance variables and other instance methods.
      `,
      code: `class Student:
    def __init__(self, name):
        self.name = name

    def display(self):
        print("Name:", self.name)

student = Student("Harish")

student.display()`,
      language: "python",
      output: "Name: Harish",
      tip: "Use instance methods when working with object-specific data.",
    },

    {
      title: "The self Keyword",
      content: `
The self keyword refers to the current object.

It is used to:

• Access instance variables
• Call instance methods
• Differentiate object variables from local variables

Python automatically passes self when calling instance methods.
      `,
      code: `class Demo:
    def show(self):
        print("Self refers to the current object.")

obj = Demo()

obj.show()`,
      language: "python",
      output: "Self refers to the current object.",
    },

    {
      title: "Class Variables",
      content: `
Class variables are shared by all objects of a class.

They are declared inside the class but outside any method.

Changing a class variable affects every object unless overridden.
      `,
      code: `class Student:
    school = "ABC School"

student1 = Student()
student2 = Student()

print(student1.school)
print(student2.school)`,
      language: "python",
      output: `ABC School
ABC School`,
      tip: "Use class variables for values common to all objects.",
    },

    {
      title: "Class Methods",
      content: `
Class methods work with class variables instead of instance variables.

They are declared using the @classmethod decorator.

The first parameter is cls, which refers to the class.
      `,
      code: `class Student:
    school = "ABC School"

    @classmethod
    def display_school(cls):
        print(cls.school)

Student.display_school()`,
      language: "python",
      output: "ABC School",
    },

    {
      title: "Static Methods",
      content: `
Static methods belong to a class but do not access instance or class variables.

They are declared using the @staticmethod decorator.

Static methods behave like normal functions placed inside a class.
      `,
      code: `class Calculator:

    @staticmethod
    def add(a, b):
        return a + b

print(Calculator.add(10, 20))`,
      language: "python",
      output: "30",
      tip: "Use static methods for utility functions related to a class that do not need object or class data.",
    },    {
      title: "Inheritance",
      content: `
Inheritance allows one class (child class) to acquire the properties and methods of another class (parent class).

It promotes:

• Code Reusability
• Easy Maintenance
• Extensibility

Syntax:

class ChildClass(ParentClass):
    # class body

The child class can access all public members of the parent class.
      `,
      code: `class Animal:
    def sound(self):
        print("Animal makes a sound")

class Dog(Animal):
    pass

dog = Dog()
dog.sound()`,
      language: "python",
      output: "Animal makes a sound",
      tip: "Inheritance allows you to reuse existing code instead of writing it again.",
    },

    {
      title: "Types of Inheritance",
      content: `
Python supports multiple types of inheritance.

Types:

• Single Inheritance
• Multiple Inheritance
• Multilevel Inheritance
• Hierarchical Inheritance
• Hybrid Inheritance

Each type helps model different relationships between classes.
      `,
      code: `class A:
    def display(self):
        print("Class A")

class B(A):
    pass

obj = B()
obj.display()`,
      language: "python",
      output: "Class A",
    },

    {
      title: "Method Overriding",
      content: `
Method overriding occurs when a child class provides its own implementation of a method already defined in the parent class.

The child method replaces the parent method for that object.
      `,
      code: `class Animal:
    def sound(self):
        print("Animal Sound")

class Dog(Animal):
    def sound(self):
        print("Bark")

dog = Dog()
dog.sound()`,
      language: "python",
      output: "Bark",
      tip: "Method overriding is commonly used to customize inherited behavior.",
    },

    {
      title: "The super() Function",
      content: `
The super() function allows a child class to access members of its parent class.

It is commonly used to call the parent constructor.

Benefits:

• Reuses parent code
• Avoids duplication
• Improves readability
      `,
      code: `class Person:
    def __init__(self, name):
        self.name = name

class Student(Person):
    def __init__(self, name, course):
        super().__init__(name)
        self.course = course

student = Student("Harish", "Python")

print(student.name)
print(student.course)`,
      language: "python",
      output: `Harish
Python`,
    },

    {
      title: "Polymorphism",
      content: `
Polymorphism means "many forms."

The same method name can behave differently depending on the object.

Python supports polymorphism through:

• Method Overriding
• Duck Typing
• Built-in Functions
      `,
      code: `class Dog:
    def sound(self):
        print("Bark")

class Cat:
    def sound(self):
        print("Meow")

animals = [Dog(), Cat()]

for animal in animals:
    animal.sound()`,
      language: "python",
      output: `Bark
Meow`,
      tip: "Polymorphism allows different objects to be treated using a common interface.",
    },

    {
      title: "Encapsulation",
      content: `
Encapsulation is the process of bundling data and methods into a single unit (class).

It also restricts direct access to data.

Access Levels in Python:

• Public
• Protected (_variable)
• Private (__variable)

Encapsulation improves data security.
      `,
      code: `class Student:
    def __init__(self):
        self.__marks = 95

    def display(self):
        print(self.__marks)

student = Student()
student.display()`,
      language: "python",
      output: "95",
    },

    {
      title: "Abstraction",
      content: `
Abstraction hides implementation details and shows only essential features.

It helps reduce complexity and improve maintainability.

Python provides abstraction using the abc module.
      `,
      code: `from abc import ABC, abstractmethod

class Shape(ABC):

    @abstractmethod
    def area(self):
        pass`,
      language: "python",
      output: `No output`,
      tip: "Abstract classes cannot be instantiated directly.",
    },

    {
      title: "Abstract Classes",
      content: `
An abstract class contains one or more abstract methods.

A child class must implement all abstract methods before objects can be created.

Abstract classes define a common interface for subclasses.
      `,
      code: `from abc import ABC, abstractmethod

class Shape(ABC):

    @abstractmethod
    def area(self):
        pass

class Square(Shape):

    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side * self.side

square = Square(4)

print(square.area())`,
      language: "python",
      output: "16",
    },

    {
      title: "Method Resolution Order (MRO)",
      content: `
Method Resolution Order (MRO) determines the order in which Python searches for methods in inheritance.

Python uses the C3 Linearization algorithm.

The mro() method displays the search order.
      `,
      code: `class A:
    pass

class B(A):
    pass

class C(B):
    pass

print(C.mro())`,
      language: "python",
      output: `[<class '__main__.C'>,
<class '__main__.B'>,
<class '__main__.A'>,
<class 'object'>]`,
      tip: "Understanding MRO is especially important when using multiple inheritance.",
    },    {
      title: "Iterators",
      content: `
An iterator is an object that allows you to traverse through all elements of a collection one at a time.

An iterator implements two special methods:

• __iter__()
• __next__()

Common iterable objects include:

• list
• tuple
• string
• set
• dictionary
      `,
      code: `numbers = [10, 20, 30]

iterator = iter(numbers)

print(next(iterator))
print(next(iterator))
print(next(iterator))`,
      language: "python",
      output: `10
20
30`,
      tip: "The next() function retrieves one element at a time from an iterator.",
    },

    {
      title: "Generators",
      content: `
Generators are special functions that produce values one at a time using the yield keyword.

Advantages:

• Memory Efficient
• Faster for Large Data
• Lazy Evaluation

Unlike return, yield remembers the function's state between calls.
      `,
      code: `def numbers():
    for i in range(1, 6):
        yield i

for number in numbers():
    print(number)`,
      language: "python",
      output: `1
2
3
4
5`,
      tip: "Use generators when working with very large datasets.",
    },

    {
      title: "Decorators",
      content: `
A decorator is a function that adds extra functionality to another function without modifying its code.

Decorators are commonly used for:

• Logging
• Authentication
• Timing
• Validation
• Caching

Decorators use the @ symbol.
      `,
      code: `def decorator(func):

    def wrapper():
        print("Before Function")
        func()
        print("After Function")

    return wrapper

@decorator
def greet():
    print("Hello")

greet()`,
      language: "python",
      output: `Before Function
Hello
After Function`,
      tip: "Decorators help keep your code clean by separating reusable functionality.",
    },

    {
      title: "Closures",
      content: `
A closure is a function that remembers variables from its enclosing scope even after the outer function has finished executing.

Closures are useful for:

• Function Factories
• Data Hiding
• Callbacks
      `,
      code: `def outer(message):

    def inner():
        print(message)

    return inner

greet = outer("Welcome to Python")

greet()`,
      language: "python",
      output: "Welcome to Python",
    },

    {
      title: "Namespaces and Scope (LEGB Rule)",
      content: `
Python resolves variable names using the LEGB rule.

LEGB stands for:

• Local
• Enclosing
• Global
• Built-in

Python searches these scopes in order until the variable is found.
      `,
      code: `x = "Global"

def display():
    x = "Local"
    print(x)

display()
print(x)`,
      language: "python",
      output: `Local
Global`,
      tip: "Prefer local variables over global variables whenever possible.",
    },

    {
      title: "Advanced *args and **kwargs",
      content: `
*args collects multiple positional arguments into a tuple.

**kwargs collects multiple keyword arguments into a dictionary.

They can be used together in the same function.

Order:

1. Positional arguments
2. *args
3. Keyword arguments
4. **kwargs
      `,
      code: `def display(*args, **kwargs):
    print(args)
    print(kwargs)

display(10, 20, 30, name="Harish", age=21)`,
      language: "python",
      output: `(10, 20, 30)
{'name': 'Harish', 'age': 21}`,
    },

    {
      title: "map() Function",
      content: `
The map() function applies a function to every item in an iterable.

Syntax:

map(function, iterable)

It returns a map object.
      `,
      code: `numbers = [1, 2, 3, 4]

squares = list(map(lambda x: x * x, numbers))

print(squares)`,
      language: "python",
      output: `[1, 4, 9, 16]`,
      tip: "Use map() when the same operation must be applied to every element.",
    },

    {
      title: "filter() Function",
      content: `
The filter() function selects elements that satisfy a condition.

Syntax:

filter(function, iterable)

Only elements returning True are included.
      `,
      code: `numbers = [1, 2, 3, 4, 5, 6]

even = list(filter(lambda x: x % 2 == 0, numbers))

print(even)`,
      language: "python",
      output: `[2, 4, 6]`,
    },

    {
      title: "reduce() Function",
      content: `
The reduce() function repeatedly applies a function to combine all elements into a single value.

It is available in the functools module.

Syntax:

reduce(function, iterable)
      `,
      code: `from functools import reduce

numbers = [1, 2, 3, 4]

result = reduce(lambda x, y: x + y, numbers)

print(result)`,
      language: "python",
      output: "10",
      tip: "reduce() is commonly used for cumulative calculations such as sums and products.",
    },

    {
      title: "zip() Function",
      content: `
The zip() function combines multiple iterables element by element.

It returns a zip object.

The iteration stops when the shortest iterable is exhausted.
      `,
      code: `names = ["Harish", "Aman", "Riya"]
marks = [95, 88, 91]

result = list(zip(names, marks))

print(result)`,
      language: "python",
      output: `[('Harish', 95), ('Aman', 88), ('Riya', 91)]`,
    },

    {
      title: "enumerate() Function",
      content: `
The enumerate() function adds an index to each element of an iterable.

Syntax:

enumerate(iterable, start=0)

It returns an enumerate object.
      `,
      code: `fruits = ["Apple", "Banana", "Orange"]

for index, fruit in enumerate(fruits, start=1):
    print(index, fruit)`,
      language: "python",
      output: `1 Apple
2 Banana
3 Orange`,
      tip: "Use enumerate() instead of manually maintaining a counter variable.",
    },    {
      title: "Date and Time",
      content: `
Python provides the datetime module for working with dates and times.

Common Classes:

• date
• time
• datetime
• timedelta

Common Uses:

• Display current date and time
• Calculate date differences
• Format dates
• Parse date strings
      `,
      code: `from datetime import datetime

now = datetime.now()

print(now)
print(now.strftime("%d-%m-%Y"))
print(now.strftime("%H:%M:%S"))`,
      language: "python",
      output: `2026-07-31 21:30:15.123456
31-07-2026
21:30:15`,
      tip: "Use strftime() to display dates in custom formats.",
    },

    {
      title: "Multithreading",
      content: `
Multithreading allows multiple threads to run concurrently within a program.

Advantages:

• Better responsiveness
• Concurrent execution
• Efficient I/O operations

Python provides the threading module.
      `,
      code: `import threading

def display():
    print("Thread is running")

thread = threading.Thread(target=display)

thread.start()
thread.join()`,
      language: "python",
      output: "Thread is running",
      tip: "Multithreading is best suited for I/O-bound tasks such as file operations and network requests.",
    },

    {
      title: "Multiprocessing",
      content: `
Multiprocessing creates separate processes that can run in parallel.

Advantages:

• Uses multiple CPU cores
• Faster CPU-intensive execution
• Better performance for heavy computations

Python provides the multiprocessing module.
      `,
      code: `from multiprocessing import Process

def display():
    print("Process Started")

process = Process(target=display)

process.start()
process.join()`,
      language: "python",
      output: "Process Started",
      tip: "Use multiprocessing for CPU-intensive tasks such as image processing and machine learning.",
    },

    {
      title: "Database Connectivity (SQLite)",
      content: `
SQLite is a lightweight, file-based database built into Python.

The sqlite3 module allows you to:

• Create databases
• Create tables
• Insert records
• Retrieve records
• Update data
• Delete data
      `,
      code: `import sqlite3

connection = sqlite3.connect("students.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS students(
    id INTEGER PRIMARY KEY,
    name TEXT
)
""")

print("Database Connected")

connection.close()`,
      language: "python",
      output: "Database Connected",
    },

    {
      title: "Networking (Sockets)",
      content: `
Python provides the socket module for network communication.

Sockets are commonly used for:

• Chat Applications
• File Transfer
• Client-Server Applications
• Real-Time Communication
      `,
      code: `import socket

hostname = socket.gethostname()

ip = socket.gethostbyname(hostname)

print(hostname)
print(ip)`,
      language: "python",
      output: `DESKTOP-PC
192.168.1.5`,
      tip: "The hostname and IP address displayed will vary depending on your system.",
    },

    {
      title: "Python Best Practices",
      content: `
Writing clean code improves readability and maintainability.

Best Practices:

• Use meaningful variable names.
• Write small reusable functions.
• Follow the DRY (Don't Repeat Yourself) principle.
• Handle exceptions properly.
• Use virtual environments.
• Write comments only when necessary.
• Remove unused code.
• Keep functions focused on one task.
• Use version control such as Git.
      `,
    },

    {
      title: "PEP 8 Coding Style",
      content: `
PEP 8 is Python's official style guide.

Important Guidelines:

• Use 4 spaces for indentation.
• Limit line length to 79 characters.
• Use snake_case for variables and functions.
• Use PascalCase for class names.
• Group imports properly.
• Leave blank lines between functions and classes.
• Add meaningful docstrings.
• Maintain consistent formatting.

Following PEP 8 makes code easier to read and maintain.
      `,
      code: `def calculate_area(length, width):
    """Returns the area of a rectangle."""
    return length * width

print(calculate_area(10, 5))`,
      language: "python",
      output: "50",
      tip: "Tools like black and autopep8 can automatically format Python code according to PEP 8.",
    },

    {
      title: "Common Interview Questions",
      content: `
Frequently Asked Python Interview Topics:

• Difference between List and Tuple
• List vs Set vs Dictionary
• Mutable vs Immutable Objects
• *args vs **kwargs
• Deep Copy vs Shallow Copy
• Generator vs Iterator
• Lambda Functions
• Decorators
• Exception Handling
• OOP Concepts
• File Handling
• Multithreading vs Multiprocessing
• GIL (Global Interpreter Lock)
• List Comprehensions
• Python Memory Management

Practice coding these concepts to prepare for technical interviews.
      `,
    },

    {
      title: "Mini Project Ideas",
      content: `
Beginner Projects:

• Calculator
• Number Guessing Game
• Password Generator
• To-Do List
• Digital Clock

Intermediate Projects:

• Student Management System
• Library Management System
• Expense Tracker
• Weather Application
• Quiz Application

Advanced Projects:

• Chat Application
• Face Recognition System
• AI Chatbot
• Web Scraper
• REST API with Flask/FastAPI
• Machine Learning Prediction App
• Real-Time Dashboard
      `,
    },

    {
      title: "Python Learning Roadmap",
      content: `
Follow this roadmap to master Python:

1. Python Basics
2. Variables and Data Types
3. Operators
4. Conditional Statements
5. Loops
6. Functions
7. Collections (List, Tuple, Set, Dictionary)
8. Strings
9. Modules and Packages
10. Exception Handling
11. File Handling
12. Object-Oriented Programming
13. Advanced Python Concepts
14. Database Programming
15. Networking
16. Web Development (Django/FastAPI/Flask)
17. Data Science (NumPy, Pandas, Matplotlib)
18. Machine Learning
19. Automation & Scripting
20. Build Real Projects

Consistent practice and project development are the keys to becoming proficient in Python.
      `,
      tip: "Build projects alongside learning each topic to strengthen your programming skills.",
    },
  ]
};