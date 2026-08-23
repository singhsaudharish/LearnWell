export const cContent = {
  title: "C Programming",
  description:
    "Learn C Programming from beginner to advanced with examples and practice questions.",

  sections: [
    {
      title: "Introduction to C",
      content: `
C is a powerful, general-purpose programming language developed by Dennis Ritchie at Bell Labs in 1972.

It is one of the most popular programming languages and is considered the foundation of many modern programming languages such as C++, Java, and C#.

C is widely used in:

• System Programming
• Operating Systems
• Embedded Systems
• Device Drivers
• Compilers
• Database Systems
• Networking
• Game Development

C is known for its speed, efficiency, portability, and low-level memory access, making it ideal for performance-critical applications.
      `,
    },

    {
      title: "Features of C",
      content: `
Major Features of C:

• Simple and Easy to Learn
• Fast Execution
• Portable (Platform Independent Source Code)
• Structured Programming
• Rich Standard Library
• Efficient Memory Management
• Pointer Support
• Dynamic Memory Allocation
• Modular Programming using Functions
• Extensible Language

Advantages:

✓ High Performance
✓ Easy to Maintain
✓ Portable Programs
✓ Large Community Support
✓ Ideal for System Programming
✓ Supports Low-Level Programming
✓ Efficient Memory Usage
      `,
    },

    {
      title: "History of C",
      content: `
The C programming language was developed by Dennis Ritchie in 1972 at Bell Laboratories.

Evolution of C:

• BCPL (1967)
• B Language (1970)
• C Language (1972)
• ANSI C (1989)
• C99
• C11
• C17
• C23

Today, C remains one of the most widely used programming languages in software development and education.
      `,
    },

    {
      title: "Applications of C",
      content: `
C programming is used in many fields due to its speed and efficiency.

Applications include:

• Operating Systems (Windows, Linux)
• Embedded Systems
• Microcontrollers
• Device Drivers
• Database Systems
• Compilers
• Game Engines
• Networking Software
• IoT Devices
• Robotics
• High Performance Applications

Learning C also makes it easier to learn C++, Java, and other programming languages.
      `,
    },

    {
      title: "Installation of C",
      content: `
To write and run C programs, you need a C compiler.

Popular Compilers:

• GCC (GNU Compiler Collection)
• Clang
• Turbo C (Old)
• MinGW (Windows)

Popular IDEs:

• Visual Studio Code
• Code::Blocks
• Dev-C++
• CLion

Steps:

1. Install a C Compiler.
2. Install an IDE or Code Editor.
3. Write your C program.
4. Compile the source code.
5. Run the executable program.
      `,
    },

    {
      title: "Basic Structure of a C Program",
      content: `
Every C program follows a basic structure.

Main Components:

• Preprocessor Directives
• main() Function
• Variable Declarations
• Statements
• return Statement

Execution of every C program begins from the main() function.
      `,
      code: `#include <stdio.h>

int main()
{
    printf("Hello World");

    return 0;
}`,
      language: "c",
      output: "Hello World",
      tip: "Every C program starts execution from the main() function.",
    },

    {
      title: "Comments in C",
      content: `
Comments are used to explain code and improve readability.

The compiler ignores comments.

Types of Comments:

1. Single Line Comment
2. Multi Line Comment

Comments are helpful for documentation and debugging.
      `,
      code: `// Single Line Comment

/*
Multi Line
Comment
*/

#include <stdio.h>

int main()
{
    printf("Comments Example");

    return 0;
}`,
      language: "c",
      output: "Comments Example",
    },

    {
      title: "First C Program",
      content: `
A simple C program prints text on the screen using the printf() function.

The printf() function is declared in the stdio.h header file.
      `,
      code: `#include <stdio.h>

int main()
{
    printf("Welcome to C Programming!");

    return 0;
}`,
      language: "c",
      output: "Welcome to C Programming!",
      tip: "Always include stdio.h when using printf() and scanf().",
    },     {
      title: "Variables",
      content: `
Variables are named memory locations used to store data.

A variable must be declared before it is used.

Rules for Naming Variables:

• Must begin with a letter or underscore (_)
• Cannot begin with a number
• Cannot contain spaces
• Cannot use C keywords
• Variable names are case-sensitive

Examples:

age
salary
studentName
marks
_total
      `,
      code: `#include <stdio.h>

int main()
{
    int age = 20;
    float salary = 35000.50;
    char grade = 'A';

    printf("Age: %d\\n", age);
    printf("Salary: %.2f\\n", salary);
    printf("Grade: %c", grade);

    return 0;
}`,
      language: "c",
      output: `Age: 20
Salary: 35000.50
Grade: A`,
      tip: "Choose meaningful variable names to make your code easier to read.",
    },

    {
      title: "Rules for Naming Variables",
      content: `
A variable name (identifier) should follow these rules:

• Must start with a letter or underscore (_)
• Can contain letters, digits, and underscores
• Cannot start with a digit
• Cannot contain spaces
• Cannot use special characters except underscore (_)
• Cannot use reserved keywords
• C is case-sensitive

Valid Names:

age
studentName
_marks
total1

Invalid Names:

1age
student name
float
total-price
      `,
    },

    {
      title: "Data Types",
      content: `
Data types specify the type of value a variable can store.

Common Data Types:

int
Stores integer values.

float
Stores decimal numbers.

double
Stores double-precision decimal values.

char
Stores a single character.

void
Represents no value.
      `,
      code: `#include <stdio.h>

int main()
{
    int number = 100;
    float price = 19.99f;
    double pi = 3.1415926535;
    char grade = 'A';

    printf("%d\\n", number);
    printf("%.2f\\n", price);
    printf("%.10lf\\n", pi);
    printf("%c", grade);

    return 0;
}`,
      language: "c",
      output: `100
19.99
3.1415926535
A`,
    },

    {
      title: "Constants",
      content: `
Constants are fixed values that cannot be modified during program execution.

Constants improve code readability and prevent accidental changes.

You can create constants using the const keyword or the #define preprocessor directive.
      `,
      code: `#include <stdio.h>

int main()
{
    const float PI = 3.14159;

    printf("%.5f", PI);

    return 0;
}`,
      language: "c",
      output: "3.14159",
      tip: "Use constants for values like PI, tax rates, or mathematical constants.",
    },

    {
      title: "Keywords",
      content: `
Keywords are reserved words that have predefined meanings in C.

Keywords cannot be used as variable or function names.

Some common keywords are:

int
char
float
double
if
else
switch
case
for
while
do
break
continue
return
const
void
struct
union
enum
typedef
sizeof

The C language has 32 reserved keywords in the ANSI C standard.
      `,
    },

    {
      title: "Escape Sequences",
      content: `
Escape sequences are special characters used inside strings.

Common Escape Sequences:

\\n  New Line
\\t  Horizontal Tab
\\\\  Backslash
\\"  Double Quote
\\'  Single Quote
\\r  Carriage Return
\\b  Backspace
      `,
      code: `#include <stdio.h>

int main()
{
    printf("Hello\\nWorld\\n");
    printf("Name:\\tHarish\\n");
    printf("C:\\\\Program Files");

    return 0;
}`,
      language: "c",
      output: `Hello
World
Name:	Harish
C:\Program Files`,
      tip: "Use \\n to print output on a new line and \\t to align text neatly.",
    },    {
      title: "Operators",
      content: `
Operators are special symbols used to perform operations on variables and values.

Types of Operators in C:

• Arithmetic Operators
• Relational Operators
• Logical Operators
• Assignment Operators
• Increment & Decrement Operators
• Bitwise Operators
• Conditional (Ternary) Operator
• sizeof Operator
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
%   Modulus (Remainder)
      `,
      code: `#include <stdio.h>

int main()
{
    int a = 20, b = 10;

    printf("Addition = %d\\n", a + b);
    printf("Subtraction = %d\\n", a - b);
    printf("Multiplication = %d\\n", a * b);
    printf("Division = %d\\n", a / b);
    printf("Modulus = %d", a % b);

    return 0;
}`,
      language: "c",
      output: `Addition = 30
Subtraction = 10
Multiplication = 200
Division = 2
Modulus = 0`,
      tip: "The modulus (%) operator works only with integer values.",
    },

    {
      title: "Relational Operators",
      content: `
Relational operators compare two values.

Operators:

==   Equal to
!=   Not equal to
>    Greater than
<    Less than
>=   Greater than or equal to
<=   Less than or equal to

The result is either 1 (true) or 0 (false).
      `,
      code: `#include <stdio.h>

int main()
{
    int a = 10, b = 20;

    printf("%d\\n", a == b);
    printf("%d\\n", a != b);
    printf("%d\\n", a > b);
    printf("%d\\n", a < b);
    printf("%d\\n", a >= b);
    printf("%d", a <= b);

    return 0;
}`,
      language: "c",
      output: `0
1
0
1
0
1`,
    },

    {
      title: "Logical Operators",
      content: `
Logical operators combine multiple conditions.

Operators:

&&   Logical AND
||   Logical OR
!    Logical NOT

Logical operators return either 1 or 0.
      `,
      code: `#include <stdio.h>

int main()
{
    int age = 20;

    printf("%d\\n", age >= 18 && age <= 60);
    printf("%d\\n", age < 18 || age > 60);
    printf("%d", !(age == 20));

    return 0;
}`,
      language: "c",
      output: `1
0
0`,
      tip: "Use logical operators when checking multiple conditions together.",
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

These operators provide a shorter way to update variable values.
      `,
      code: `#include <stdio.h>

int main()
{
    int number = 10;

    number += 5;
    printf("%d\\n", number);

    number -= 2;
    printf("%d\\n", number);

    number *= 3;
    printf("%d\\n", number);

    number /= 2;
    printf("%d", number);

    return 0;
}`,
      language: "c",
      output: `15
13
39
19`,
    },

    {
      title: "Increment and Decrement Operators",
      content: `
Increment (++) increases a variable by one.

Decrement (--) decreases a variable by one.

Types:

• Pre-increment (++a)
• Post-increment (a++)
• Pre-decrement (--a)
• Post-decrement (a--)
      `,
      code: `#include <stdio.h>

int main()
{
    int a = 5;

    printf("%d\\n", ++a);
    printf("%d\\n", a++);
    printf("%d\\n", a);
    printf("%d\\n", --a);
    printf("%d", a--);

    return 0;
}`,
      language: "c",
      output: `6
6
7
6
6`,
      tip: "Understand the difference between pre and post increment while writing expressions.",
    },

    {
      title: "Bitwise Operators",
      content: `
Bitwise operators work directly on the binary representation of numbers.

Operators:

&   Bitwise AND
|   Bitwise OR
^   Bitwise XOR
~   Bitwise NOT
<<  Left Shift
>>  Right Shift

They are commonly used in embedded systems and low-level programming.
      `,
      code: `#include <stdio.h>

int main()
{
    int a = 5;
    int b = 3;

    printf("AND = %d\\n", a & b);
    printf("OR = %d\\n", a | b);
    printf("XOR = %d\\n", a ^ b);
    printf("Left Shift = %d\\n", a << 1);
    printf("Right Shift = %d", a >> 1);

    return 0;
}`,
      language: "c",
      output: `AND = 1
OR = 7
XOR = 6
Left Shift = 10
Right Shift = 2`,
    },

    {
      title: "Conditional (Ternary) Operator",
      content: `
The conditional operator is a shorthand form of the if...else statement.

Syntax:

(condition) ? expression1 : expression2;

If the condition is true, expression1 is executed.
Otherwise, expression2 is executed.
      `,
      code: `#include <stdio.h>

int main()
{
    int age = 20;

    (age >= 18) ? printf("Eligible to Vote")
                : printf("Not Eligible");

    return 0;
}`,
      language: "c",
      output: "Eligible to Vote",
      tip: "Use the ternary operator for simple conditions to make code shorter.",
    },

    {
      title: "sizeof Operator",
      content: `
The sizeof operator returns the size (in bytes) of a data type or variable.

It is evaluated at compile time.

Syntax:

sizeof(data_type)
sizeof(variable)
      `,
      code: `#include <stdio.h>

int main()
{
    printf("int = %zu bytes\\n", sizeof(int));
    printf("float = %zu bytes\\n", sizeof(float));
    printf("double = %zu bytes\\n", sizeof(double));
    printf("char = %zu bytes", sizeof(char));

    return 0;
}`,
      language: "c",
      output: `int = 4 bytes
float = 4 bytes
double = 8 bytes
char = 1 bytes`,
      tip: "Use sizeof when allocating memory or working with arrays.",
    },    {
      title: "Input and Output",
      content: `
Input and Output are used to communicate with the user.

The stdio.h header file provides the standard input and output functions.

Common Functions:

• printf() → Displays output on the screen.
• scanf() → Reads input from the keyboard.

Syntax:

printf("message");

scanf("format_specifier", &variable);

The & (address-of) operator is required with scanf() for most data types.
      `,
      code: `#include <stdio.h>

int main()
{
    char name[30];
    int age;

    printf("Enter your name: ");
    scanf("%s", name);

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("\\nName: %s\\n", name);
    printf("Age: %d", age);

    return 0;
}`,
      language: "c",
      output: `Enter your name: Harish
Enter your age: 21

Name: Harish
Age: 21`,
      tip: "Use fgets() instead of scanf() when reading strings containing spaces.",
    },

    {
      title: "Format Specifiers",
      content: `
Format specifiers tell printf() and scanf() the type of data being printed or read.

Common Format Specifiers:

%d   Integer
%f   Float
%lf  Double
%c   Character
%s   String
%u   Unsigned Integer
%x   Hexadecimal
%o   Octal
%p   Pointer Address

Using the correct format specifier ensures proper input and output.
      `,
      code: `#include <stdio.h>

int main()
{
    int age = 20;
    float marks = 95.5f;
    double pi = 3.1415926535;
    char grade = 'A';
    char name[] = "Harish";

    printf("%d\\n", age);
    printf("%.1f\\n", marks);
    printf("%.10lf\\n", pi);
    printf("%c\\n", grade);
    printf("%s", name);

    return 0;
}`,
      language: "c",
      output: `20
95.5
3.1415926535
A
Harish`,
    },

    {
      title: "Type Casting",
      content: `
Type casting converts one data type into another.

There are two types:

• Implicit Type Casting
• Explicit Type Casting

Syntax:

(data_type) value

Type casting helps prevent data loss and performs calculations correctly.
      `,
      code: `#include <stdio.h>

int main()
{
    int a = 10;
    int b = 3;

    float result = (float)a / b;

    printf("%.2f", result);

    return 0;
}`,
      language: "c",
      output: "3.33",
      tip: "Cast at least one operand to float or double for decimal division.",
    },

    {
      title: "If Statement",
      content: `
The if statement executes a block of code only when a condition is true.

Syntax:

if(condition)
{
    // statements
}

If the condition evaluates to false, the statements inside the if block are skipped.
      `,
      code: `#include <stdio.h>

int main()
{
    int age = 20;

    if(age >= 18)
    {
        printf("Eligible to Vote");
    }

    return 0;
}`,
      language: "c",
      output: "Eligible to Vote",
      tip: "Use an if statement when only one condition needs to be checked.",
    },

    {
      title: "If...Else Statement",
      content: `
The if...else statement executes one block when the condition is true and another block when the condition is false.

Syntax:

if(condition)
{
    // true block
}
else
{
    // false block
}
      `,
      code: `#include <stdio.h>

int main()
{
    int number = 7;

    if(number % 2 == 0)
    {
        printf("Even Number");
    }
    else
    {
        printf("Odd Number");
    }

    return 0;
}`,
      language: "c",
      output: "Odd Number",
    },

    {
      title: "Nested If Statement",
      content: `
A nested if statement is an if statement inside another if statement.

It is useful when multiple conditions depend on each other.

Syntax:

if(condition1)
{
    if(condition2)
    {
        // statements
    }
}
      `,
      code: `#include <stdio.h>

int main()
{
    int age = 20;
    int citizen = 1;

    if(age >= 18)
    {
        if(citizen == 1)
        {
            printf("Eligible to Vote");
        }
    }

    return 0;
}`,
      language: "c",
      output: "Eligible to Vote",
      tip: "Avoid deeply nested if statements to keep your code readable.",
    },

    {
      title: "Else If Ladder",
      content: `
The else if ladder is used to check multiple conditions.

The first condition that evaluates to true is executed.

Syntax:

if(condition1)
{
    // code
}
else if(condition2)
{
    // code
}
else
{
    // code
}
      `,
      code: `#include <stdio.h>

int main()
{
    int marks = 82;

    if(marks >= 90)
    {
        printf("Grade A");
    }
    else if(marks >= 75)
    {
        printf("Grade B");
    }
    else if(marks >= 50)
    {
        printf("Grade C");
    }
    else
    {
        printf("Fail");
    }

    return 0;
}`,
      language: "c",
      output: "Grade B",
      tip: "Arrange conditions from highest priority to lowest for correct results.",
    },    {
      title: "Switch Statement",
      content: `
The switch statement selects one block of code from multiple choices.

It is an alternative to writing many if...else statements when comparing the same variable.

Syntax:

switch(expression)
{
    case value1:
        // statements
        break;

    case value2:
        // statements
        break;

    default:
        // statements
}
      `,
      code: `#include <stdio.h>

int main()
{
    int day = 3;

    switch(day)
    {
        case 1:
            printf("Monday");
            break;

        case 2:
            printf("Tuesday");
            break;

        case 3:
            printf("Wednesday");
            break;

        case 4:
            printf("Thursday");
            break;

        default:
            printf("Invalid Day");
    }

    return 0;
}`,
      language: "c",
      output: "Wednesday",
      tip: "Always use break unless you intentionally want fall-through behavior.",
    },

    {
      title: "For Loop",
      content: `
A for loop repeats a block of code a fixed number of times.

Syntax:

for(initialization; condition; update)
{
    // statements
}

The loop continues until the condition becomes false.
      `,
      code: `#include <stdio.h>

int main()
{
    int i;

    for(i = 1; i <= 5; i++)
    {
        printf("%d\\n", i);
    }

    return 0;
}`,
      language: "c",
      output: `1
2
3
4
5`,
      tip: "Use a for loop when the number of iterations is known.",
    },

    {
      title: "While Loop",
      content: `
A while loop executes as long as the given condition is true.

Syntax:

while(condition)
{
    // statements
}

The condition is checked before each iteration.
      `,
      code: `#include <stdio.h>

int main()
{
    int i = 1;

    while(i <= 5)
    {
        printf("%d\\n", i);
        i++;
    }

    return 0;
}`,
      language: "c",
      output: `1
2
3
4
5`,
      tip: "Initialize the loop variable before entering the while loop.",
    },

    {
      title: "Do...While Loop",
      content: `
A do...while loop executes the loop body at least once before checking the condition.

Syntax:

do
{
    // statements
}
while(condition);
      `,
      code: `#include <stdio.h>

int main()
{
    int i = 1;

    do
    {
        printf("%d\\n", i);
        i++;
    }
    while(i <= 5);

    return 0;
}`,
      language: "c",
      output: `1
2
3
4
5`,
      tip: "Use a do...while loop when the code must execute at least once.",
    },

    {
      title: "Infinite Loops",
      content: `
An infinite loop keeps executing because its condition never becomes false.

Examples:

while(1)

for(;;)

Infinite loops are commonly used in operating systems, embedded systems, and game development.
      `,
      code: `#include <stdio.h>

int main()
{
    while(1)
    {
        printf("Running...\\n");
        break;
    }

    return 0;
}`,
      language: "c",
      output: "Running...",
      tip: "Always provide a way to exit an infinite loop unless it is intentionally designed to run forever.",
    },

    {
      title: "Break Statement",
      content: `
The break statement immediately terminates the nearest loop or switch statement.

Syntax:

break;

Control moves to the first statement after the loop or switch.
      `,
      code: `#include <stdio.h>

int main()
{
    int i;

    for(i = 1; i <= 10; i++)
    {
        if(i == 6)
        {
            break;
        }

        printf("%d ", i);
    }

    return 0;
}`,
      language: "c",
      output: "1 2 3 4 5 ",
      tip: "Use break to stop a loop when the required result has been found.",
    },

    {
      title: "Continue Statement",
      content: `
The continue statement skips the remaining statements in the current iteration and moves to the next iteration.

Syntax:

continue;

Unlike break, it does not terminate the loop.
      `,
      code: `#include <stdio.h>

int main()
{
    int i;

    for(i = 1; i <= 5; i++)
    {
        if(i == 3)
        {
            continue;
        }

        printf("%d ", i);
    }

    return 0;
}`,
      language: "c",
      output: "1 2 4 5 ",
      tip: "Use continue when you want to skip specific iterations without ending the loop.",
    },

    {
      title: "Goto Statement",
      content: `
The goto statement transfers control to another part of the program using a label.

Syntax:

goto label;

...

label:
    // statements

Although valid, goto should be avoided in most programs because it can make code difficult to read and maintain.
      `,
      code: `#include <stdio.h>

int main()
{
    printf("Start\\n");

    goto end;

    printf("This line will not execute\\n");

end:
    printf("End");

    return 0;
}`,
      language: "c",
      output: `Start
End`,
      tip: "Prefer loops and functions over goto for clearer and more maintainable code.",
    },    {
      title: "Functions",
      content: `
A function is a reusable block of code that performs a specific task.

Functions help in:

• Code Reusability
• Easy Maintenance
• Better Readability
• Modular Programming
• Reduced Code Duplication

Every C program contains at least one function, the main() function.
      `,
      code: `#include <stdio.h>

void message()
{
    printf("Welcome to C Programming");
}

int main()
{
    message();

    return 0;
}`,
      language: "c",
      output: "Welcome to C Programming",
      tip: "Write small functions that perform one task well.",
    },

    {
      title: "Function Declaration (Prototype)",
      content: `
A function declaration tells the compiler about a function before it is used.

Syntax:

return_type function_name(parameters);

Function declarations are usually placed before the main() function.
      `,
      code: `#include <stdio.h>

int add(int, int);

int main()
{
    printf("%d", add(10, 20));

    return 0;
}

int add(int a, int b)
{
    return a + b;
}`,
      language: "c",
      output: "30",
    },

    {
      title: "Function Definition",
      content: `
A function definition contains the actual implementation of a function.

Syntax:

return_type function_name(parameters)
{
    // statements
}
      `,
      code: `#include <stdio.h>

int square(int n)
{
    return n * n;
}

int main()
{
    printf("%d", square(5));

    return 0;
}`,
      language: "c",
      output: "25",
    },

    {
      title: "Function Call",
      content: `
A function call executes the code inside a function.

Syntax:

function_name(arguments);

A function can be called multiple times from different parts of the program.
      `,
      code: `#include <stdio.h>

void greet()
{
    printf("Hello\\n");
}

int main()
{
    greet();
    greet();
    greet();

    return 0;
}`,
      language: "c",
      output: `Hello
Hello
Hello`,
    },

    {
      title: "Function Arguments",
      content: `
Arguments are values passed to a function.

Types of Arguments:

• Actual Arguments
• Formal Parameters

Arguments allow functions to work with different values.
      `,
      code: `#include <stdio.h>

int multiply(int a, int b)
{
    return a * b;
}

int main()
{
    printf("%d", multiply(5, 6));

    return 0;
}`,
      language: "c",
      output: "30",
    },

    {
      title: "Return Statement",
      content: `
The return statement ends a function and optionally returns a value to the caller.

Syntax:

return value;

A void function does not return any value.
      `,
      code: `#include <stdio.h>

int cube(int n)
{
    return n * n * n;
}

int main()
{
    int result = cube(3);

    printf("%d", result);

    return 0;
}`,
      language: "c",
      output: "27",
    },

    {
      title: "Call by Value",
      content: `
In Call by Value, a copy of the actual argument is passed to the function.

Changes made inside the function do not affect the original variable.
      `,
      code: `#include <stdio.h>

void change(int x)
{
    x = 100;
}

int main()
{
    int number = 10;

    change(number);

    printf("%d", number);

    return 0;
}`,
      language: "c",
      output: "10",
      tip: "Call by Value is the default method of passing arguments in C.",
    },

    {
      title: "Call by Reference (Using Pointers)",
      content: `
C does not support Call by Reference directly.

It is achieved using pointers.

Changes made through pointers affect the original variable.
      `,
      code: `#include <stdio.h>

void change(int *x)
{
    *x = 100;
}

int main()
{
    int number = 10;

    change(&number);

    printf("%d", number);

    return 0;
}`,
      language: "c",
      output: "100",
      tip: "Use pointers when a function needs to modify the original variable.",
    },

    {
      title: "Recursion",
      content: `
Recursion is a technique in which a function calls itself.

Every recursive function must have:

• Base Case
• Recursive Call

Without a base case, recursion continues indefinitely and causes a stack overflow.
      `,
      code: `#include <stdio.h>

int factorial(int n)
{
    if(n == 1)
    {
        return 1;
    }

    return n * factorial(n - 1);
}

int main()
{
    printf("%d", factorial(5));

    return 0;
}`,
      language: "c",
      output: "120",
      tip: "Always define a base case to stop recursive calls.",
    },    {
      title: "Arrays",
      content: `
An array is a collection of elements of the same data type stored in contiguous memory locations.

Each element is accessed using an index.

Characteristics:

• Stores multiple values
• Fixed size
• Index starts from 0
• All elements have the same data type

Syntax:

data_type array_name[size];
      `,
      code: `#include <stdio.h>

int main()
{
    int numbers[5] = {10, 20, 30, 40, 50};

    printf("%d", numbers[2]);

    return 0;
}`,
      language: "c",
      output: "30",
      tip: "Array indexing starts from 0. The first element is at index 0.",
    },

    {
      title: "One-Dimensional Arrays",
      content: `
A one-dimensional array stores data in a single row.

Syntax:

data_type array_name[size];

Elements are accessed using a single index.
      `,
      code: `#include <stdio.h>

int main()
{
    int marks[5] = {80, 85, 90, 95, 100};

    int i;

    for(i = 0; i < 5; i++)
    {
        printf("%d ", marks[i]);
    }

    return 0;
}`,
      language: "c",
      output: "80 85 90 95 100 ",
    },

    {
      title: "Two-Dimensional Arrays",
      content: `
A two-dimensional array stores data in rows and columns.

Syntax:

data_type array_name[rows][columns];

It is commonly used to represent matrices.
      `,
      code: `#include <stdio.h>

int main()
{
    int matrix[2][2] = {
        {1, 2},
        {3, 4}
    };

    int i, j;

    for(i = 0; i < 2; i++)
    {
        for(j = 0; j < 2; j++)
        {
            printf("%d ", matrix[i][j]);
        }

        printf("\\n");
    }

    return 0;
}`,
      language: "c",
      output: `1 2
3 4`,
      tip: "Nested loops are commonly used to traverse two-dimensional arrays.",
    },

    {
      title: "Strings",
      content: `
A string is a sequence of characters terminated by the null character ('\\0').

Strings are stored in character arrays.

Example:

char name[] = "Harish";
      `,
      code: `#include <stdio.h>

int main()
{
    char name[] = "Harish";

    printf("%s", name);

    return 0;
}`,
      language: "c",
      output: "Harish",
    },

    {
      title: "Character Arrays",
      content: `
Character arrays are used to store strings in C.

Each string ends with the null character ('\\0').

Example:

char city[20];
      `,
      code: `#include <stdio.h>

int main()
{
    char city[] = {'D','e','l','h','i','\\0'};

    printf("%s", city);

    return 0;
}`,
      language: "c",
      output: "Delhi",
      tip: "Always leave space for the null character when declaring character arrays manually.",
    },

    {
      title: "String Functions",
      content: `
The string.h header file provides useful string manipulation functions.

Common Functions:

• strlen()
• strcpy()
• strcat()
• strcmp()

Include:

#include <string.h>
      `,
      code: `#include <stdio.h>
#include <string.h>

int main()
{
    char text[] = "Programming";

    printf("Length = %lu", strlen(text));

    return 0;
}`,
      language: "c",
      output: "Length = 11",
    },

    {
      title: "strlen() Function",
      content: `
The strlen() function returns the number of characters in a string.

Syntax:

strlen(string);

The null character ('\\0') is not counted.
      `,
      code: `#include <stdio.h>
#include <string.h>

int main()
{
    char name[] = "Harish";

    printf("%lu", strlen(name));

    return 0;
}`,
      language: "c",
      output: "6",
    },

    {
      title: "strcpy() Function",
      content: `
The strcpy() function copies one string into another.

Syntax:

strcpy(destination, source);
      `,
      code: `#include <stdio.h>
#include <string.h>

int main()
{
    char source[] = "Hello";
    char destination[20];

    strcpy(destination, source);

    printf("%s", destination);

    return 0;
}`,
      language: "c",
      output: "Hello",
      tip: "Ensure the destination array is large enough to hold the copied string.",
    },

    {
      title: "strcat() Function",
      content: `
The strcat() function appends one string to the end of another.

Syntax:

strcat(destination, source);
      `,
      code: `#include <stdio.h>
#include <string.h>

int main()
{
    char first[30] = "Hello ";
    char second[] = "World";

    strcat(first, second);

    printf("%s", first);

    return 0;
}`,
      language: "c",
      output: "Hello World",
    },

    {
      title: "strcmp() Function",
      content: `
The strcmp() function compares two strings.

Syntax:

strcmp(string1, string2);

Return Values:

0   -> Strings are equal
<0  -> First string is smaller
>0  -> First string is larger
      `,
      code: `#include <stdio.h>
#include <string.h>

int main()
{
    char first[] = "Apple";
    char second[] = "Apple";

    if(strcmp(first, second) == 0)
    {
        printf("Strings are Equal");
    }
    else
    {
        printf("Strings are Not Equal");
    }

    return 0;
}`,
      language: "c",
      output: "Strings are Equal",
      tip: "Never compare strings using ==. Always use strcmp().",
    },    {
      title: "Pointers",
      content: `
A pointer is a variable that stores the memory address of another variable.

The * operator is used to declare a pointer, while the & operator returns the address of a variable.

Syntax:

data_type *pointer_name;

Pointers are widely used in dynamic memory allocation, arrays, strings, and function arguments.
      `,
      code: `#include <stdio.h>

int main()
{
    int number = 10;
    int *ptr = &number;

    printf("Value: %d\\n", *ptr);
    printf("Address: %p", (void *)ptr);

    return 0;
}`,
      language: "c",
      output: `Value: 10
Address: (memory address)`,
      tip: "Always initialize pointers before using them to avoid undefined behavior.",
    },

    {
      title: "Pointer Arithmetic",
      content: `
Pointer arithmetic allows moving through memory locations.

Supported operations:

• Increment (ptr++)
• Decrement (ptr--)
• Addition
• Subtraction
• Difference between pointers

Pointer arithmetic moves by the size of the data type.
      `,
      code: `#include <stdio.h>

int main()
{
    int numbers[] = {10, 20, 30};

    int *ptr = numbers;

    printf("%d\\n", *ptr);

    ptr++;

    printf("%d", *ptr);

    return 0;
}`,
      language: "c",
      output: `10
20`,
    },

    {
      title: "Pointers and Arrays",
      content: `
The name of an array acts as a pointer to its first element.

Array elements can be accessed using pointer notation.

Example:

*(arr + i)
      `,
      code: `#include <stdio.h>

int main()
{
    int arr[] = {5, 10, 15, 20, 25};
    int *ptr = arr;

    int i;

    for(i = 0; i < 5; i++)
    {
        printf("%d ", *(ptr + i));
    }

    return 0;
}`,
      language: "c",
      output: "5 10 15 20 25 ",
      tip: "Array indexing and pointer arithmetic are closely related in C.",
    },

    {
      title: "Pointers to Functions",
      content: `
A function pointer stores the address of a function.

Syntax:

return_type (*pointer_name)(parameters);

Function pointers are commonly used for callbacks and dynamic function selection.
      `,
      code: `#include <stdio.h>

int add(int a, int b)
{
    return a + b;
}

int main()
{
    int (*operation)(int, int) = add;

    printf("%d", operation(10, 20));

    return 0;
}`,
      language: "c",
      output: "30",
    },

    {
      title: "Dynamic Memory Allocation",
      content: `
Dynamic memory allocation allows memory to be allocated during program execution.

The stdlib.h library provides:

• malloc()
• calloc()
• realloc()
• free()

These functions allocate memory from the heap.
      `,
      code: `#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *ptr;

    ptr = (int *)malloc(sizeof(int));

    *ptr = 100;

    printf("%d", *ptr);

    free(ptr);

    return 0;
}`,
      language: "c",
      output: "100",
      tip: "Always free dynamically allocated memory to prevent memory leaks.",
    },

    {
      title: "malloc()",
      content: `
malloc() allocates a block of memory.

Syntax:

malloc(size_in_bytes);

The allocated memory contains garbage values.
      `,
      code: `#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *ptr = (int *)malloc(sizeof(int));

    *ptr = 50;

    printf("%d", *ptr);

    free(ptr);

    return 0;
}`,
      language: "c",
      output: "50",
    },

    {
      title: "calloc()",
      content: `
calloc() allocates memory for multiple elements and initializes them to zero.

Syntax:

calloc(number_of_elements, size_of_each_element);
      `,
      code: `#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *ptr = (int *)calloc(5, sizeof(int));

    printf("%d", ptr[0]);

    free(ptr);

    return 0;
}`,
      language: "c",
      output: "0",
    },

    {
      title: "realloc()",
      content: `
realloc() changes the size of previously allocated memory.

Syntax:

realloc(pointer, new_size);

It can increase or decrease memory size.
      `,
      code: `#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *ptr = (int *)malloc(2 * sizeof(int));

    ptr = (int *)realloc(ptr, 5 * sizeof(int));

    ptr[0] = 10;
    ptr[1] = 20;
    ptr[2] = 30;

    printf("%d %d %d", ptr[0], ptr[1], ptr[2]);

    free(ptr);

    return 0;
}`,
      language: "c",
      output: "10 20 30",
    },

    {
      title: "free()",
      content: `
free() releases dynamically allocated memory.

Syntax:

free(pointer);

After calling free(), the memory becomes available for reuse.
      `,
      code: `#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *ptr = (int *)malloc(sizeof(int));

    *ptr = 99;

    printf("%d\\n", *ptr);

    free(ptr);

    ptr = NULL;

    return 0;
}`,
      language: "c",
      output: "99",
      tip: "Set pointers to NULL after calling free() to avoid dangling pointers.",
    },

    {
      title: "Structures (struct)",
      content: `
A structure groups different data types into a single user-defined data type.

Structures are commonly used to represent real-world entities such as students or employees.
      `,
      code: `#include <stdio.h>

struct Student
{
    char name[20];
    int age;
};

int main()
{
    struct Student s = {"Harish", 20};

    printf("%s\\n", s.name);
    printf("%d", s.age);

    return 0;
}`,
      language: "c",
      output: `Harish
20`,
    },

    {
      title: "Unions",
      content: `
A union is similar to a structure, but all members share the same memory location.

Only one member can store a meaningful value at a time.
      `,
      code: `#include <stdio.h>

union Data
{
    int number;
    float price;
};

int main()
{
    union Data d;

    d.number = 100;

    printf("%d", d.number);

    return 0;
}`,
      language: "c",
      output: "100",
    },

    {
      title: "Enumerations (enum)",
      content: `
An enumeration is a user-defined data type consisting of named integer constants.

Syntax:

enum Name
{
    value1,
    value2,
    ...
};
      `,
      code: `#include <stdio.h>

enum Day
{
    Monday,
    Tuesday,
    Wednesday
};

int main()
{
    enum Day today = Tuesday;

    printf("%d", today);

    return 0;
}`,
      language: "c",
      output: "1",
    },

    {
      title: "typedef",
      content: `
The typedef keyword creates an alias for an existing data type.

It improves code readability.

Syntax:

typedef existing_type new_name;
      `,
      code: `#include <stdio.h>

typedef unsigned int uint;

int main()
{
    uint age = 20;

    printf("%u", age);

    return 0;
}`,
      language: "c",
      output: "20",
      tip: "Use typedef to simplify complex type declarations.",
    },    {
      title: "File Handling",
      content: `
File handling allows programs to store and retrieve data from files.

The stdio.h library provides functions for file operations.

Common Functions:

• fopen()
• fclose()
• fprintf()
• fscanf()
• fgets()
• fputs()

Modes:

r   Read
w   Write
a   Append
r+  Read & Write
w+  Write & Read
a+  Append & Read
      `,
      code: `#include <stdio.h>

int main()
{
    FILE *file = fopen("data.txt", "w");

    if(file == NULL)
    {
        printf("Unable to open file.");
        return 1;
    }

    fprintf(file, "Welcome to C Programming!");

    fclose(file);

    printf("File created successfully.");

    return 0;
}`,
      language: "c",
      output: "File created successfully.",
      tip: "Always check whether fopen() returns NULL before using the file.",
    },

    {
      title: "Preprocessor Directives",
      content: `
Preprocessor directives are processed before compilation.

They begin with the # symbol.

Common Directives:

• #include
• #define
• #ifdef
• #ifndef
• #endif
• #undef
• #pragma

They are used to include header files, define constants, and control compilation.
      `,
      code: `#include <stdio.h>

#define PI 3.14159

int main()
{
    printf("%.5f", PI);

    return 0;
}`,
      language: "c",
      output: "3.14159",
    },

    {
      title: "Macros",
      content: `
A macro is created using the #define directive.

Macros replace code before compilation.

Syntax:

#define NAME value

Macros can also accept parameters.
      `,
      code: `#include <stdio.h>

#define SQUARE(x) ((x) * (x))

int main()
{
    printf("%d", SQUARE(5));

    return 0;
}`,
      language: "c",
      output: "25",
      tip: "Wrap macro parameters in parentheses to avoid unexpected results.",
    },

    {
      title: "Command Line Arguments",
      content: `
Command line arguments allow values to be passed to a program when it starts.

Syntax:

int main(int argc, char *argv[])

argc -> Number of arguments
argv -> Array of argument strings
      `,
      code: `#include <stdio.h>

int main(int argc, char *argv[])
{
    printf("Arguments: %d", argc);

    return 0;
}`,
      language: "c",
      output: "Arguments: 1",
    },

    {
      title: "Storage Classes",
      content: `
Storage classes define the scope, lifetime, and visibility of variables.

Types:

• auto
• static
• extern
• register

Each storage class serves a different purpose in memory management.
      `,
      code: `#include <stdio.h>

void counter()
{
    static int count = 0;

    count++;

    printf("%d\\n", count);
}

int main()
{
    counter();
    counter();
    counter();

    return 0;
}`,
      language: "c",
      output: `1
2
3`,
      tip: "A static variable retains its value between function calls.",
    },

    {
      title: "Mini Program: Factorial",
      content: `
This program calculates the factorial of a number using a loop.

Formula:

n! = n × (n-1) × ... × 1
      `,
      code: `#include <stdio.h>

int main()
{
    int n = 5;
    int fact = 1;

    for(int i = 1; i <= n; i++)
    {
        fact *= i;
    }

    printf("%d", fact);

    return 0;
}`,
      language: "c",
      output: "120",
    },

    {
      title: "Practice Questions",
      content: `
Practice the following programs:

• Print Hello World
• Swap Two Numbers
• Check Even or Odd
• Find Largest of Three Numbers
• Check Prime Number
• Reverse a Number
• Check Palindrome
• Generate Fibonacci Series
• Calculate Factorial
• Count Digits
• Find GCD and LCM
• Matrix Addition
• String Reverse
• Array Sorting
• Linear Search
• Binary Search
• File Read and Write

Try solving these problems without looking at the solution first.
      `,
    },

    {
      title: "Interview Questions",
      content: `
Frequently Asked C Interview Questions:

1. What is the difference between C and C++?
2. What is a pointer?
3. What is a dangling pointer?
4. What is the difference between malloc() and calloc()?
5. What is recursion?
6. What is a structure?
7. What is a union?
8. What is a segmentation fault?
9. What is a static variable?
10. What is the difference between call by value and call by reference?
11. What are macros?
12. What is dynamic memory allocation?
13. What is the purpose of the const keyword?
14. What is the difference between break and continue?
15. Explain the storage classes in C.

Review these questions before interviews and try answering them in your own words.
      `,
    },

    {
      title: "MCQs",
      content: `
1. Which function is the entry point of a C program?
A) start()
B) main()
C) run()
D) execute()

Answer: B

2. Which header file is required for printf()?
A) math.h
B) string.h
C) stdio.h
D) stdlib.h

Answer: C

3. Which operator is used to obtain the address of a variable?
A) *
B) &
C) %
D) #

Answer: B

4. Which function releases dynamically allocated memory?
A) delete()
B) remove()
C) free()
D) close()

Answer: C

5. Array indexing starts from:
A) 1
B) -1
C) 0
D) Depends on compiler

Answer: C
      `,
    },

    {
      title: "Exercises",
      content: `
Complete the following exercises:

✓ Create a Calculator
✓ Student Result Management
✓ Bank Account Simulation
✓ Library Management
✓ Employee Record System
✓ Inventory Management
✓ File Copy Program
✓ Number Guessing Game
✓ Matrix Multiplication
✓ Tic-Tac-Toe (Console)

These projects help strengthen your understanding of core C programming concepts.
      `,
    },
  ],
};