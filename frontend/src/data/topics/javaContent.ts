export const javaContent = {
  title: "Java Programming",
  description:
    "Learn Java from beginner to advanced with concepts, examples, projects, and practice questions.",

  sections: [

    {
      title: "Introduction to Java",
      content: `
Java is a high-level, object-oriented programming language used to build secure, powerful, and platform-independent applications.

Java was created by James Gosling and his team at Sun Microsystems in 1995.

Java follows the principle:

"Write Once, Run Anywhere"

This means Java programs can run on any device that has a Java Virtual Machine (JVM).


Java is used in:

• Web Development
• Android Applications
• Desktop Applications
• Enterprise Software
• Banking Systems
• Cloud Applications
• Game Development
• Big Data Technologies
      `,
    },


    {
      title: "History of Java",
      content: `
Java was developed by James Gosling at Sun Microsystems.

Important milestones:

1991:
Java project started as Oak.

1995:
Java was officially released.

2009:
Oracle acquired Sun Microsystems.

Today:
Java is maintained by Oracle and a large developer community.
      `,
    },


    {
      title: "Features of Java",
      content: `
Major features of Java:


1. Simple

Java syntax is easy to learn and understand.


2. Object-Oriented

Java is based on classes and objects.


3. Platform Independent

Java programs run on different operating systems using JVM.


4. Secure

Java provides security features like bytecode verification.


5. Robust

Java has strong memory management and exception handling.


6. Multithreaded

Java supports multiple tasks running simultaneously.


7. Portable

Java applications can run on different platforms.


8. High Performance

Java uses Just-In-Time (JIT) compilation.
      `,
    },


    {
      title: "Applications of Java",
      content: `
Java is used in many areas of software development.


Web Applications:

• Banking websites
• E-commerce platforms
• Enterprise applications


Mobile Applications:

• Android apps


Desktop Applications:

• GUI applications
• Software tools


Enterprise Applications:

• Large business systems
• ERP systems


Other Uses:

• Cloud computing
• Artificial Intelligence
• Big Data
• IoT applications
      `,
    },


    {
      title: "Java Platform Architecture",
      content: `
Java platform consists of three main components:


1. JVM

Java Virtual Machine runs Java bytecode.


2. JRE

Java Runtime Environment provides libraries and JVM to run Java programs.


3. JDK

Java Development Kit provides tools to develop Java applications.


JDK = JRE + Development Tools

JRE = JVM + Libraries
      `,
    },


    {
      title: "JDK (Java Development Kit)",
      content: `
JDK is used by developers to create Java programs.


It contains:

• Java Compiler (javac)
• Java Interpreter
• Debugger
• Documentation Tools
• JVM
      `,
      code: `javac Hello.java`,
      language: "java",
      output: "Java File Compiled",
    },


    {
      title: "JRE (Java Runtime Environment)",
      content: `
JRE provides the environment required to run Java applications.


It contains:

• JVM
• Java Libraries
• Supporting Files


Users need JRE to run Java programs.
      `,
    },


    {
      title: "JVM (Java Virtual Machine)",
      content: `
JVM is the core component of Java.

It converts Java bytecode into machine code.


Working:

Java Source Code

↓

Compiler

↓

Bytecode

↓

JVM

↓

Machine Code


JVM makes Java platform independent.
      `,
    },


    {
      title: "Installing Java",
      content: `
To run Java programs, install JDK.


Steps:

1. Download JDK

2. Install JDK

3. Configure Environment Variables

4. Verify Installation


Check Java version:
      `,
      code: `java -version`,
      language: "bash",
      output: "java version installed",
    },


    {
      title: "First Java Program",
      content: `
Every Java program starts from the main() method.


The main method is the entry point of a Java application.
      `,
      code: `class HelloJava

{

public static void main(String[] args)

{

System.out.println(
"Hello Java"
);

}

}`,
      language: "java",
      output: "Hello Java",
      tip: "The class name and file name should be the same.",
    },


    {
      title: "Java Program Structure",
      content: `
A Java program contains:


Class

A blueprint for creating objects.


Main Method

Execution starts from here.


Statements

Instructions executed by JVM.


Example:

class ClassName

{

public static void main(String args[])

{

// code

}

}
      `,
    },


    {
      title: "Java Syntax Rules",
      content: `
Important Java syntax rules:


• Java is case-sensitive.

Example:

Age and age are different.


• Every statement ends with semicolon (;).


• Blocks are enclosed inside curly braces {}.


• Class names start with uppercase letters.


• Method names usually start with lowercase letters.
      `,
      code: `class Student

{

public static void main(String[] args)

{

System.out.println(
"Java Syntax"
);

}

}`,
      language: "java",
      output: "Java Syntax",
    },


    {
      title: "Java Comments",
      content: `
Comments are notes written inside code.


They are ignored by the compiler.


Types of comments:


1. Single Line Comment


2. Multi Line Comment


3. Documentation Comment
      `,
      code: `
// Single Line Comment


/*
Multi Line

Comment
*/


/**

Documentation Comment

*/`,
      language: "java",
      output: "Comments Example",
    },


    {
      title: "Java Variables",
      content: `
A variable is a container used to store data values.


Syntax:

dataType variableName = value;


Example:

int age = 21;


Java variables must have a data type.
      `,
      code: `int age = 21;


System.out.println(age);`,
      language: "java",
      output: "21",
    },


    {
      title: "Types of Variables in Java",
      content: `
Java has three types of variables:


1. Local Variables

Declared inside methods.


2. Instance Variables

Declared inside a class but outside methods.


3. Static Variables

Declared using static keyword.
      `,
    },


    {
      title: "Java Data Types",
      content: `
Data types define the type of data stored in variables.


Two categories:


1. Primitive Data Types


2. Non-Primitive Data Types
      `,
    },


    {
      title: "Primitive Data Types",
      content: `
Java provides 8 primitive data types:


byte

Short integer values.


short

Larger integer values.


int

Normal integer values.


long

Large integer values.


float

Decimal values.


double

Large decimal values.


char

Single character.


boolean

true or false values.
      `,
      code: `int age = 21;

double price = 99.99;

char grade = 'A';

boolean status = true;`,
      language: "java",
      output: "Primitive Values Stored",
    },


    {
      title: "Integer Data Types",
      content: `
Integer data types store whole numbers.


Types:

byte

short

int

long


Example:
      `,
      code: `int number = 100;


System.out.println(number);`,
      language: "java",
      output: "100",
    },


    {
      title: "Floating Point Data Types",
      content: `
Floating point types store decimal values.


Types:

float

double


double provides higher precision.
      `,
      code: `double pi = 3.14159;


System.out.println(pi);`,
      language: "java",
      output: "3.14159",
    },


    {
      title: "Character Data Type",
      content: `
char stores a single character.


Characters are written inside single quotes.
      `,
      code: `char grade = 'A';


System.out.println(grade);`,
      language: "java",
      output: "A",
    },


    {
      title: "Boolean Data Type",
      content: `
boolean stores logical values.


Possible values:

true

false
      `,
      code: `boolean isJavaEasy = true;


System.out.println(isJavaEasy);`,
      language: "java",
      output: "true",
    },


    {
      title: "Java Operators",
      content: `
Operators are symbols used to perform operations on variables and values.


Types of Java Operators:


• Arithmetic Operators

• Assignment Operators

• Relational Operators

• Logical Operators

• Unary Operators

• Bitwise Operators

• Ternary Operator
      `,
    },


    {
      title: "Arithmetic Operators",
      content: `
Arithmetic operators are used to perform mathematical calculations.


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
      `,
      code: `int a = 10;

int b = 5;


System.out.println(a + b);

System.out.println(a - b);

System.out.println(a * b);

System.out.println(a / b);

System.out.println(a % b);`,
      language: "java",
      output: `
15

5

50

2

0
      `,
    },


    {
      title: "Assignment Operators",
      content: `
Assignment operators are used to assign values to variables.


Operators:


=

+=

-=

*=

/=

%=
      `,
      code: `int number = 10;


number += 5;


System.out.println(number);`,
      language: "java",
      output: "15",
    },


    {
      title: "Relational Operators",
      content: `
Relational operators compare two values.


They return boolean values:

true

false


Operators:


>

<

>=

<=

==

!=
      `,
      code: `int a = 10;

int b = 20;


System.out.println(a < b);

System.out.println(a == b);`,
      language: "java",
      output: `
true

false
      `,
    },


    {
      title: "Logical Operators",
      content: `
Logical operators combine multiple conditions.


Operators:


&&

Logical AND


||

Logical OR


!

Logical NOT
      `,
      code: `int age = 20;


System.out.println(

age >= 18 && age <= 60

);`,
      language: "java",
      output: "true",
    },


    {
      title: "Unary Operators",
      content: `
Unary operators work with only one operand.


Operators:


+

Positive


-

Negative


++

Increment


--

Decrement
      `,
      code: `int count = 10;


count++;


System.out.println(count);`,
      language: "java",
      output: "11",
    },


    {
      title: "Increment and Decrement Operators",
      content: `
Increment increases a value by 1.


Decrement decreases a value by 1.


Types:


Pre Increment

++value


Post Increment

value++
      `,
      code: `int a = 5;


System.out.println(++a);


System.out.println(a++);`,
      language: "java",
      output: `
6

6
      `,
    },


    {
      title: "Ternary Operator",
      content: `
The ternary operator is a short form of if-else.


Syntax:


condition ? value1 : value2
      `,
      code: `int age = 20;


String result =

(age >= 18)

?

"Adult"

:

"Minor";


System.out.println(result);`,
      language: "java",
      output: "Adult",
    },


    {
      title: "Bitwise Operators",
      content: `
Bitwise operators perform operations on binary values.


Operators:


&

AND


|

OR


^

XOR


~

Complement


<<

Left Shift


>>

Right Shift
      `,
      code: `int a = 5;

int b = 3;


System.out.println(a & b);`,
      language: "java",
      output: "1",
    },


    {
      title: "Taking Input in Java",
      content: `
Java uses Scanner class to take input from users.


Scanner belongs to java.util package.
      `,
      code: `import java.util.Scanner;


class InputExample

{

public static void main(String[] args)

{

Scanner sc = new Scanner(System.in);


System.out.println(
"Enter name"
);


String name = sc.nextLine();


System.out.println(name);

}

}`,
      language: "java",
      output: "User Input Displayed",
    },


    {
      title: "Scanner Methods",
      content: `
Common Scanner methods:


nextInt()

Reads integer.


nextDouble()

Reads decimal.


next()

Reads single word.


nextLine()

Reads complete line.


nextBoolean()

Reads boolean value.
      `,
    },


    {
      title: "Java Type Casting",
      content: `
Type casting converts one data type into another.


Types:


1. Widening Casting


2. Narrowing Casting
      `,
    },


    {
      title: "Widening Type Casting",
      content: `
Widening converts smaller data type into larger data type.


It happens automatically.


Example:


int → long → float → double
      `,
      code: `int number = 100;


double value = number;


System.out.println(value);`,
      language: "java",
      output: "100.0",
    },


    {
      title: "Narrowing Type Casting",
      content: `
Narrowing converts larger data type into smaller data type.


It requires manual casting.
      `,
      code: `double price = 99.99;


int value = (int) price;


System.out.println(value);`,
      language: "java",
      output: "99",
    },


    {
      title: "Java Strings",
      content: `
A String is a sequence of characters.


Strings are objects in Java.


Strings can be created using:


String literal


new String()
      `,
      code: `String name = "Harish";


System.out.println(name);`,
      language: "java",
      output: "Harish",
    },


    {
      title: "String Methods",
      content: `
Java provides many built-in String methods.


Common Methods:


length()

Returns string length.


toUpperCase()

Converts to uppercase.


toLowerCase()

Converts to lowercase.


charAt()

Returns character at index.


contains()

Checks text existence.
      `,
      code: `String text = "Java";


System.out.println(

text.length()

);


System.out.println(

text.toUpperCase()

);`,
      language: "java",
      output: `
4

JAVA
      `,
    },


    {
      title: "String Comparison",
      content: `
Strings can be compared using:


equals()

Compares content.


==

Compares references.
      `,
      code: `String a = "Java";


String b = "Java";


System.out.println(

a.equals(b)

);`,
      language: "java",
      output: "true",
      tip: "Use equals() for comparing String values.",
    },


    {
      title: "StringBuilder",
      content: `
StringBuilder is used to create mutable strings.


Unlike String, StringBuilder can be modified without creating new objects.
      `,
      code: `StringBuilder sb =

new StringBuilder(
"Java"
);


sb.append(
" Programming"
);


System.out.println(sb);`,
      language: "java",
      output: "Java Programming",
    },


    {
      title: "Java Arrays",
      content: `
An array stores multiple values of the same data type.


Array index starts from 0.


Syntax:


dataType[] arrayName;
      `,
      code: `int numbers[] = {

10,

20,

30

};


System.out.println(numbers[0]);`,
      language: "java",
      output: "10",
    },


    {
      title: "Creating Arrays",
      content: `
Arrays can be created in two ways:


1. Declaration and allocation


2. Direct initialization
      `,
      code: `int marks[] = new int[3];


marks[0] = 90;

marks[1] = 85;

marks[2] = 95;


System.out.println(marks[0]);`,
      language: "java",
      output: "90",
    },


    {
      title: "Array Length",
      content: `
The length property returns the size of an array.
      `,
      code: `int numbers[] = {

1,

2,

3,

4

};


System.out.println(

numbers.length

);`,
      language: "java",
      output: "4",
    },


    {
      title: "Multidimensional Arrays",
      content: `
Multidimensional arrays store data in multiple dimensions.


A two-dimensional array represents rows and columns.
      `,
      code: `int matrix[][] = {

{1,2},

{3,4}

};


System.out.println(

matrix[0][1]

);`,
      language: "java",
      output: "2",
    },


    {
      title: "Java Conditional Statements",
      content: `
Conditional statements are used to make decisions in a program.


Java provides:


• if statement

• if-else statement

• else-if ladder

• nested if

• switch statement


They execute different blocks of code based on conditions.
      `,
    },


    {
      title: "if Statement",
      content: `
The if statement executes a block of code when a condition is true.


Syntax:


if(condition)

{

// code

}
      `,
      code: `int age = 20;


if(age >= 18)

{

System.out.println(
"Eligible to Vote"
);

}`,
      language: "java",
      output: "Eligible to Vote",
    },


    {
      title: "if-else Statement",
      content: `
The if-else statement executes one block when the condition is true and another block when it is false.
      `,
      code: `int age = 15;


if(age >= 18)

{

System.out.println(
"Adult"
);

}

else

{

System.out.println(
"Minor"
);

}`,
      language: "java",
      output: "Minor",
    },


    {
      title: "else-if Ladder",
      content: `
else-if is used when multiple conditions need to be checked.


Java checks conditions from top to bottom.
      `,
      code: `int marks = 85;


if(marks >= 90)

{

System.out.println(
"Grade A"
);

}

else if(marks >= 75)

{

System.out.println(
"Grade B"
);

}

else

{

System.out.println(
"Grade C"
);

}`,
      language: "java",
      output: "Grade B",
    },


    {
      title: "Nested if Statement",
      content: `
A nested if statement means an if statement inside another if statement.


It is useful for checking dependent conditions.
      `,
      code: `int age = 20;

boolean id = true;


if(age >= 18)

{

if(id)

{

System.out.println(
"Allowed"
);

}

}`,
      language: "java",
      output: "Allowed",
    },


    {
      title: "switch Statement",
      content: `
The switch statement selects one option from multiple choices.


It is an alternative to multiple if-else statements.


Syntax:


switch(expression)

{

case value:

// code

break;

}
      `,
      code: `int day = 3;


switch(day)

{

case 1:

System.out.println(
"Monday"
);

break;


case 2:

System.out.println(
"Tuesday"
);

break;


case 3:

System.out.println(
"Wednesday"
);

break;


default:

System.out.println(
"Invalid Day"
);

}`,
      language: "java",
      output: "Wednesday",
    },


    {
      title: "switch with String",
      content: `
Java switch statements can also work with String values.
      `,
      code: `String language = "Java";


switch(language)

{

case "Java":

System.out.println(
"Programming Language"
);

break;


case "Python":

System.out.println(
"Python Language"
);

break;

}`,
      language: "java",
      output: "Programming Language",
    },


    {
      title: "Java Loops",
      content: `
Loops are used to execute a block of code repeatedly.


Types of loops:


• for loop

• while loop

• do-while loop

• enhanced for loop
      `,
    },


    {
      title: "for Loop",
      content: `
The for loop is used when the number of iterations is known.


Syntax:


for(initialization; condition; update)

{

// code

}
      `,
      code: `for(int i = 1; i <= 5; i++)

{

System.out.println(i);

}`,
      language: "java",
      output: `
1

2

3

4

5
      `,
    },


    {
      title: "while Loop",
      content: `
The while loop executes code while a condition remains true.


It is useful when the number of iterations is unknown.
      `,
      code: `int i = 1;


while(i <= 5)

{

System.out.println(i);


i++;

}`,
      language: "java",
      output: `
1

2

3

4

5
      `,
    },


    {
      title: "do-while Loop",
      content: `
The do-while loop executes the code at least once before checking the condition.


Syntax:


do

{

// code

}

while(condition);
      `,
      code: `int i = 1;


do

{

System.out.println(i);


i++;

}

while(i <= 5);`,
      language: "java",
      output: `
1

2

3

4

5
      `,
    },


    {
      title: "Difference Between while and do-while",
      content: `
while loop:


• Condition checked first

• May execute zero times


do-while loop:


• Code executes first

• Condition checked later

• Executes at least once
      `,
    },


    {
      title: "Nested Loops",
      content: `
A loop inside another loop is called a nested loop.


Commonly used for:


• Patterns

• Matrix operations

• Tables
      `,
      code: `for(int i = 1; i <= 3; i++)

{

for(int j = 1; j <= 3; j++)

{

System.out.print("*");

}


System.out.println();

}`,
      language: "java",
      output: `
***

***

***
      `,
    },


    {
      title: "Java Break Statement",
      content: `
The break statement terminates the loop immediately.


It is used when we want to stop execution.
      `,
      code: `for(int i = 1; i <= 10; i++)

{

if(i == 5)

{

break;

}


System.out.println(i);

}`,
      language: "java",
      output: `
1

2

3

4
      `,
    },


    {
      title: "Java Continue Statement",
      content: `
The continue statement skips the current iteration and moves to the next iteration.
      `,
      code: `for(int i = 1; i <= 5; i++)

{

if(i == 3)

{

continue;

}


System.out.println(i);

}`,
      language: "java",
      output: `
1

2

4

5
      `,
    },


    {
      title: "Enhanced for Loop",
      content: `
Enhanced for loop (for-each) is used to iterate through arrays and collections.


Syntax:


for(dataType variable : array)

{

// code

}
      `,
      code: `int numbers[] = {

10,

20,

30

};


for(int number : numbers)

{

System.out.println(number);

}`,
      language: "java",
      output: `
10

20

30
      `,
    },


    {
      title: "Pattern Printing in Java",
      content: `
Pattern programs are common Java practice problems.


They help improve loop logic.
      `,
      code: `for(int i = 1; i <= 5; i++)

{

for(int j = 1; j <= i; j++)

{

System.out.print("*");

}


System.out.println();

}`,
      language: "java",
      output: `
*

**

***

****

*****
      `,
    },


    {
      title: "Java Number Patterns",
      content: `
Loops can be used to print number patterns.
      `,
      code: `for(int i = 1; i <= 5; i++)

{

for(int j = 1; j <= i; j++)

{

System.out.print(j);

}


System.out.println();

}`,
      language: "java",
      output: `
1

12

123

1234

12345
      `,
    },


    {
      title: "Java Methods Introduction",
      content: `
A method is a block of code that performs a specific task.


Benefits of methods:

• Code reusability
• Better organization
• Easier debugging
• Reduces code duplication


Syntax:


returnType methodName(parameters)

{

// code

}
      `,
    },


    {
      title: "Creating a Method",
      content: `
A method is created inside a class and called whenever required.
      `,
      code: `class Main

{

static void greet()

{

System.out.println(
"Hello Java"
);

}


public static void main(String[] args)

{

greet();

}

}`,
      language: "java",
      output: "Hello Java",
    },


    {
      title: "Calling a Method",
      content: `
A method executes only when it is called.


Methods can be called:


• Directly

• Using object

• Using class name for static methods
      `,
      code: `public class Main

{

static void display()

{

System.out.println(
"Java Method"
);

}


public static void main(String[] args)

{

display();

}

}`,
      language: "java",
      output: "Java Method",
    },


    {
      title: "Method Parameters",
      content: `
Parameters are values passed to a method.


They allow methods to work with different data.
      `,
      code: `class Main

{

static void printName(String name)

{

System.out.println(name);

}


public static void main(String[] args)

{

printName(
"Harish"
);

}

}`,
      language: "java",
      output: "Harish",
    },


    {
      title: "Multiple Method Parameters",
      content: `
A method can accept multiple parameters separated by commas.
      `,
      code: `static void add(int a, int b)

{

System.out.println(a+b);

}


public static void main(String[] args)

{

add(10,20);

}`,
      language: "java",
      output: "30",
    },


    {
      title: "Return Values in Methods",
      content: `
A method can return a value using the return keyword.


The return type must match the returned value.
      `,
      code: `static int add(int a,int b)

{

return a+b;

}


public static void main(String[] args)

{

int result = add(10,20);


System.out.println(result);

}`,
      language: "java",
      output: "30",
    },


    {
      title: "Void Methods",
      content: `
A void method does not return any value.


It performs an action and ends.
      `,
      code: `static void message()

{

System.out.println(
"Welcome"
);

}`,
      language: "java",
      output: "Welcome",
    },


    {
      title: "Method Overloading",
      content: `
Method overloading allows multiple methods with the same name but different parameters.


It is an example of compile-time polymorphism.
      `,
      code: `class Calculator

{

static int add(int a,int b)

{

return a+b;

}


static int add(int a,int b,int c)

{

return a+b+c;

}


public static void main(String[] args)

{

System.out.println(add(10,20));


System.out.println(add(10,20,30));

}

}`,
      language: "java",
      output: `
30

60
      `,
    },


    {
      title: "Types of Method Overloading",
      content: `
Method overloading can be achieved by changing:


1. Number of parameters


2. Data type of parameters


3. Order of parameters
      `,
    },


    {
      title: "Recursion in Java",
      content: `
Recursion is a technique where a method calls itself.


A recursive method must have a stopping condition called base case.
      `,
      code: `class Main

{

static void count(int n)

{

if(n == 0)

return;


System.out.println(n);


count(n-1);

}


public static void main(String[] args)

{

count(5);

}

}`,
      language: "java",
      output: `
5

4

3

2

1
      `,
    },


    {
      title: "Factorial Using Recursion",
      content: `
Factorial of a number can be calculated using recursion.
      `,
      code: `class Main

{

static int factorial(int n)

{

if(n == 1)

return 1;


return n * factorial(n-1);

}


public static void main(String[] args)

{

System.out.println(

factorial(5)

);

}

}`,
      language: "java",
      output: "120",
    },


    {
      title: "Variable Scope in Java",
      content: `
Scope defines where a variable can be accessed.


Types:


• Local Scope

• Instance Scope

• Static Scope
      `,
    },


    {
      title: "Local Variables",
      content: `
Local variables are declared inside methods.


They can only be accessed within that method.
      `,
      code: `class Main

{

public static void main(String[] args)

{

int age = 21;


System.out.println(age);

}

}`,
      language: "java",
      output: "21",
    },


    {
      title: "Instance Variables",
      content: `
Instance variables belong to an object.


They are declared inside a class but outside methods.
      `,
      code: `class Student

{

String name;


void display()

{

System.out.println(name);

}

}`,
      language: "java",
      output: "Object Variable",
    },


    {
      title: "Static Variables",
      content: `
Static variables belong to the class instead of objects.


They are shared among all objects.
      `,
      code: `class Student

{

static String school =
"ABC School";


public static void main(String[] args)

{

System.out.println(school);

}

}`,
      language: "java",
      output: "ABC School",
    },


    {
      title: "Java Packages",
      content: `
A package is a group of related classes and interfaces.


Benefits:


• Organizes code

• Avoids naming conflicts

• Provides access control
      `,
    },


    {
      title: "Creating a Package",
      content: `
The package keyword is used to create packages.
      `,
      code: `package mypackage;


class Student

{

public void show()

{

System.out.println(
"Student"
);

}

}`,
      language: "java",
      output: "Package Created",
    },


    {
      title: "Importing Packages",
      content: `
The import keyword allows using classes from other packages.
      `,
      code: `import java.util.Scanner;


class Main

{

public static void main(String[] args)

{

Scanner sc = new Scanner(System.in);

}

}`,
      language: "java",
      output: "Package Imported",
    },


    {
      title: "Java Access Modifiers",
      content: `
Access modifiers control the visibility of classes, variables, and methods.


Types:


• public

• private

• protected

• default
      `,
    },


    {
      title: "public Access Modifier",
      content: `
public members can be accessed from anywhere.
      `,
      code: `public class Student

{

public String name;

}`,
      language: "java",
      output: "Public Member",
    },


    {
      title: "private Access Modifier",
      content: `
private members can only be accessed inside the same class.


Used for data hiding.
      `,
      code: `class Bank

{

private int balance;

}`,
      language: "java",
      output: "Private Member",
    },


    {
      title: "protected Access Modifier",
      content: `
protected members can be accessed within the same package and subclasses.
      `,
    },


    {
      title: "Java Wrapper Classes",
      content: `
Wrapper classes convert primitive data types into objects.


Primitive → Wrapper


int → Integer

double → Double

char → Character

boolean → Boolean
      `,
      code: `int number = 10;


Integer obj = number;


System.out.println(obj);`,
      language: "java",
      output: "10",
    },


    {
      title: "Autoboxing and Unboxing",
      content: `
Autoboxing:

Automatic conversion of primitive type into wrapper object.


Unboxing:

Conversion of wrapper object back into primitive type.
      `,
      code: `Integer value = 100;


int number = value;


System.out.println(number);`,
      language: "java",
      output: "100",
    },


    {
      title: "Java Math Class",
      content: `
Math class provides mathematical operations.


Common methods:


Math.max()

Math.min()

Math.sqrt()

Math.pow()

Math.random()
      `,
      code: `System.out.println(

Math.sqrt(25)

);


System.out.println(

Math.max(10,20)

);`,
      language: "java",
      output: `
5.0

20
      `,
    },

    {
      title: "Object-Oriented Programming (OOP)",
      content: `
Object-Oriented Programming is a programming approach based on objects and classes.


Java is a fully object-oriented programming language.


Main concepts of OOP:


• Class

• Object

• Encapsulation

• Inheritance

• Polymorphism

• Abstraction
      `,
    },


    {
      title: "Class in Java",
      content: `
A class is a blueprint used to create objects.


A class contains:


• Variables (attributes)

• Methods (behaviors)


Syntax:


class ClassName

{

// variables

// methods

}
      `,
      code: `class Student

{

String name;


void display()

{

System.out.println(name);

}

}`,
      language: "java",
      output: "Class Created",
    },


    {
      title: "Object in Java",
      content: `
An object is an instance of a class.


Objects represent real-world entities.


Example:

Student

Car

Bank Account
      `,
      code: `class Student

{

String name;

}


class Main

{

public static void main(String[] args)

{

Student s1 = new Student();


s1.name = "Harish";


System.out.println(s1.name);

}

}`,
      language: "java",
      output: "Harish",
    },


    {
      title: "Creating Multiple Objects",
      content: `
A class can create multiple objects.


Each object has its own data.
      `,
      code: `class Student

{

String name;

}


class Main

{

public static void main(String[] args)

{

Student s1 = new Student();

Student s2 = new Student();


s1.name = "Rahul";

s2.name = "Amit";


System.out.println(s1.name);

System.out.println(s2.name);

}

}`,
      language: "java",
      output: `
Rahul

Amit
      `,
    },


    {
      title: "Class Variables and Methods",
      content: `
A class can contain:


Variables:

Store object data.


Methods:

Define object behavior.
      `,
      code: `class Car

{

String color;


void drive()

{

System.out.println(
"Car is moving"
);

}

}`,
      language: "java",
      output: "Class Members",
    },


    {
      title: "Java Constructors",
      content: `
A constructor is a special method used to initialize objects.


Features:


• Same name as class

• No return type

• Runs automatically when object is created
      `,
      code: `class Student

{

String name;


Student()

{

name = "Harish";

}


public static void main(String[] args)

{

Student s = new Student();


System.out.println(s.name);

}

}`,
      language: "java",
      output: "Harish",
    },


    {
      title: "Default Constructor",
      content: `
A constructor without parameters is called a default constructor.


Java provides a default constructor if no constructor is created.
      `,
      code: `class Student

{

Student()

{

System.out.println(
"Constructor Called"
);

}

}`,
      language: "java",
      output: "Constructor Called",
    },


    {
      title: "Parameterized Constructor",
      content: `
A constructor that accepts parameters is called a parameterized constructor.


It allows assigning different values to different objects.
      `,
      code: `class Student

{

String name;


Student(String n)

{

name = n;

}


public static void main(String[] args)

{

Student s = new Student(
"Harish"
);


System.out.println(s.name);

}

}`,
      language: "java",
      output: "Harish",
    },


    {
      title: "Constructor Overloading",
      content: `
Constructor overloading means creating multiple constructors with different parameters.
      `,
      code: `class Student

{

Student()

{

System.out.println(
"Empty Constructor"
);

}


Student(String name)

{

System.out.println(name);

}

}`,
      language: "java",
      output: "Multiple Constructors",
    },


    {
      title: "this Keyword",
      content: `
The this keyword refers to the current object.


Uses:


• Access current object variables

• Call current class methods

• Call constructors
      `,
      code: `class Student

{

String name;


Student(String name)

{

this.name = name;

}

}`,
      language: "java",
      output: "Current Object Reference",
    },


    {
      title: "Using this with Methods",
      content: `
this can be used to call methods of the current object.
      `,
      code: `class Student

{

void show()

{

System.out.println(
"Student"
);

}


void display()

{

this.show();

}

}`,
      language: "java",
      output: "Student",
    },


    {
      title: "static Keyword in Java",
      content: `
The static keyword creates members that belong to the class instead of objects.


Static members are shared among all objects.
      `,
      code: `class Student

{

static String school =
"ABC";


public static void main(String[] args)

{

System.out.println(school);

}

}`,
      language: "java",
      output: "ABC",
    },


    {
      title: "Static Methods",
      content: `
Static methods can be called without creating objects.
      `,
      code: `class Main

{

static void message()

{

System.out.println(
"Hello Java"
);

}


public static void main(String[] args)

{

message();

}

}`,
      language: "java",
      output: "Hello Java",
    },


    {
      title: "Static Block",
      content: `
A static block executes once when the class is loaded.


It is used for initialization.
      `,
      code: `class Main

{

static

{

System.out.println(
"Static Block"
);

}


public static void main(String[] args)

{

System.out.println(
"Main Method"
);

}

}`,
      language: "java",
      output: `
Static Block

Main Method
      `,
    },


    {
      title: "Encapsulation in Java",
      content: `
Encapsulation is the process of wrapping data and methods into a single unit.


It is achieved using:


• private variables

• public getter and setter methods


Benefits:


• Data security

• Controlled access

• Better maintenance
      `,
    },


    {
      title: "Implementing Encapsulation",
      content: `
Private variables cannot be accessed directly.


Getter methods read values.


Setter methods modify values.
      `,
      code: `class Student

{

private String name;


public void setName(String name)

{

this.name = name;

}


public String getName()

{

return name;

}


}


class Main

{

public static void main(String[] args)

{

Student s = new Student();


s.setName(
"Harish"
);


System.out.println(

s.getName()

);

}

}`,
      language: "java",
      output: "Harish",
    },


    {
      title: "Getter and Setter Methods",
      content: `
Getter:

Used to retrieve private data.


Setter:

Used to update private data.


They provide controlled access to class variables.
      `,
    },


    {
      title: "Java Memory Management",
      content: `
Java automatically manages memory using the JVM.


Memory areas:


• Stack Memory

• Heap Memory

• Method Area
      `,
    },


    {
      title: "Stack Memory",
      content: `
Stack memory stores:


• Local variables

• Method calls

• References


It works using LIFO principle.
      `,
    },


    {
      title: "Heap Memory",
      content: `
Heap memory stores:


• Objects

• Instance variables


Objects created using new keyword are stored in heap memory.
      `,
      code: `Student s = new Student();`,
      language: "java",
      output: "Object Stored in Heap",
    },


    {
      title: "Garbage Collection",
      content: `
Garbage collection automatically removes unused objects from memory.


The JVM manages garbage collection.
      `,
      code: `System.gc();`,
      language: "java",
      output: "Garbage Collector Requested",
    },


    {
      title: "Object Lifecycle",
      content: `
An object lifecycle contains:


1. Object Creation


2. Object Usage


3. Object Destruction


Java automatically handles memory cleanup.
      `,
    },


    {
      title: "Inheritance in Java",
      content: `
Inheritance is an OOP concept where one class acquires properties and methods of another class.


The existing class is called:

Parent Class / Super Class


The new class is called:

Child Class / Sub Class


Benefits:


• Code reusability

• Reduces duplicate code

• Supports method overriding
      `,
    },


    {
      title: "Inheritance Syntax",
      content: `
Java uses the extends keyword to implement inheritance.


Syntax:


class Child extends Parent

{

// code

}
      `,
      code: `class Animal

{

void eat()

{

System.out.println(
"Eating"
);

}

}


class Dog extends Animal

{

void bark()

{

System.out.println(
"Barking"
);

}

}`,
      language: "java",
      output: "Inheritance Created",
    },


    {
      title: "Single Inheritance",
      content: `
Single inheritance means one child class inherits from one parent class.


Example:


Animal

↓

Dog
      `,
      code: `class Animal

{

void sound()

{

System.out.println(
"Animal Sound"
);

}

}


class Dog extends Animal

{

}


class Main

{

public static void main(String[] args)

{

Dog d = new Dog();


d.sound();

}

}`,
      language: "java",
      output: "Animal Sound",
    },


    {
      title: "Multilevel Inheritance",
      content: `
Multilevel inheritance occurs when a class inherits from another derived class.


Example:


Animal

↓

Dog

↓

Puppy
      `,
      code: `class Animal

{

void eat()

{

System.out.println(
"Eating"
);

}

}


class Dog extends Animal

{

void bark()

{

System.out.println(
"Barking"
);

}

}


class Puppy extends Dog

{

void play()

{

System.out.println(
"Playing"
);

}

}`,
      language: "java",
      output: "Multilevel Inheritance",
    },


    {
      title: "Hierarchical Inheritance",
      content: `
Hierarchical inheritance occurs when multiple child classes inherit from one parent class.


Example:


       Animal

       /   \

     Dog   Cat
      `,
      code: `class Animal

{

void eat()

{

System.out.println(
"Eating"
);

}

}


class Dog extends Animal

{

}


class Cat extends Animal

{

}`,
      language: "java",
      output: "Hierarchical Inheritance",
    },


    {
      title: "Multiple Inheritance",
      content: `
Java does not support multiple inheritance using classes.


Reason:


It can create ambiguity when two parent classes contain the same method.


Java supports multiple inheritance through interfaces.
      `,
    },


    {
      title: "super Keyword",
      content: `
The super keyword refers to the parent class object.


Uses:


• Access parent variables

• Call parent methods

• Call parent constructors
      `,
      code: `class Animal

{

String name =
"Animal";

}


class Dog extends Animal

{

String name =
"Dog";


void show()

{

System.out.println(super.name);

System.out.println(name);

}

}`,
      language: "java",
      output: `
Animal

Dog
      `,
    },


    {
      title: "Calling Parent Constructor Using super",
      content: `
super() is used to call the constructor of the parent class.
      `,
      code: `class Animal

{

Animal()

{

System.out.println(
"Animal Constructor"
);

}

}


class Dog extends Animal

{

Dog()

{

super();


System.out.println(
"Dog Constructor"
);

}

}`,
      language: "java",
      output: `
Animal Constructor

Dog Constructor
      `,
    },


    {
      title: "Method Overriding",
      content: `
Method overriding occurs when a child class provides a new implementation of a parent class method.


Rules:


• Same method name

• Same parameters

• Same return type
      `,
      code: `class Animal

{

void sound()

{

System.out.println(
"Animal Sound"
);

}

}


class Dog extends Animal

{

void sound()

{

System.out.println(
"Dog Bark"
);

}

}`,
      language: "java",
      output: "Dog Bark",
    },


    {
      title: "Runtime Polymorphism",
      content: `
Runtime polymorphism is achieved through method overriding.


The method call is decided during runtime.
      `,
      code: `class Animal

{

void sound()

{

System.out.println(
"Animal"
);

}

}


class Dog extends Animal

{

void sound()

{

System.out.println(
"Dog"
);

}

}


class Main

{

public static void main(String[] args)

{

Animal a = new Dog();


a.sound();

}

}`,
      language: "java",
      output: "Dog",
    },


    {
      title: "final Keyword",
      content: `
The final keyword is used to restrict modification.


It can be used with:


• Variables

• Methods

• Classes
      `,
    },


    {
      title: "final Variable",
      content: `
A final variable value cannot be changed after initialization.
      `,
      code: `final int age = 21;


age = 25;`,
      language: "java",
      output: "Compilation Error",
    },


    {
      title: "final Method",
      content: `
A final method cannot be overridden by child classes.
      `,
      code: `class Parent

{

final void display()

{

System.out.println(
"Final Method"
);

}

}`,
      language: "java",
      output: "Method Cannot Override",
    },


    {
      title: "final Class",
      content: `
A final class cannot be inherited.


Example:

String class is final in Java.
      `,
      code: `final class Student

{

}`,
      language: "java",
      output: "Final Class",
    },


    {
      title: "Abstraction in Java",
      content: `
Abstraction means hiding implementation details and showing only essential features.


It focuses on:

"What an object does"

instead of:

"How it does"
      `,
    },


    {
      title: "Abstract Class",
      content: `
An abstract class is declared using the abstract keyword.


It can contain:


• Abstract methods

• Normal methods


An abstract class cannot create objects.
      `,
      code: `abstract class Animal

{

abstract void sound();


void eat()

{

System.out.println(
"Eating"
);

}

}`,
      language: "java",
      output: "Abstract Class",
    },


    {
      title: "Abstract Method",
      content: `
An abstract method has no body.


The child class must provide its implementation.
      `,
      code: `abstract void display();`,
      language: "java",
      output: "Abstract Method",
    },


    {
      title: "Implementing Abstract Class",
      content: `
A child class must override abstract methods.
      `,
      code: `abstract class Animal

{

abstract void sound();

}


class Dog extends Animal

{

void sound()

{

System.out.println(
"Bark"
);

}

}`,
      language: "java",
      output: "Bark",
    },


    {
      title: "Interface in Java",
      content: `
An interface is a blueprint of a class.


It is used to achieve abstraction and multiple inheritance.


Interfaces contain:


• Abstract methods

• Constants
      `,
      code: `interface Animal

{

void sound();

}`,
      language: "java",
      output: "Interface Created",
    },


    {
      title: "Implementing Interface",
      content: `
A class uses the implements keyword to implement an interface.
      `,
      code: `interface Animal

{

void sound();

}


class Dog implements Animal

{

public void sound()

{

System.out.println(
"Bark"
);

}

}`,
      language: "java",
      output: "Bark",
    },


    {
      title: "Multiple Inheritance Using Interfaces",
      content: `
Java supports multiple inheritance through interfaces.


A class can implement multiple interfaces.
      `,
      code: `interface A

{

void show();

}


interface B

{

void display();

}


class Test implements A,B

{

public void show(){}


public void display(){}

}`,
      language: "java",
      output: "Multiple Interfaces Implemented",
    },


    {
      title: "Difference Between Abstract Class and Interface",
      content: `
Abstract Class:


• Can have constructors

• Can have normal methods

• Uses extends


Interface:


• Uses implements

• Supports multiple inheritance

• Mainly provides abstraction
      `,
    },

    {
      title: "Exception Handling in Java",
      content: `
Exception handling is a mechanism used to handle runtime errors and prevent program termination.


An exception is an unexpected event that interrupts normal program execution.


Examples:


• Division by zero

• Invalid array index

• File not found

• Null value access
      `,
    },


    {
      title: "Errors vs Exceptions",
      content: `
Errors and exceptions are different types of problems.


Errors:

• Serious problems

• Usually cannot be handled

• Occur due to system failures


Examples:

OutOfMemoryError

StackOverflowError


Exceptions:

• Can be handled

• Occur during program execution


Examples:

ArithmeticException

NullPointerException
      `,
    },


    {
      title: "Exception Hierarchy",
      content: `
All exceptions and errors are derived from Throwable class.


Hierarchy:


Throwable

|

|-- Error

|

|-- Exception


Exception contains:


• Checked Exceptions

• Unchecked Exceptions
      `,
    },


    {
      title: "try-catch Block",
      content: `
The try-catch block is used to handle exceptions.


The code that may produce an exception is written inside try block.


The handling code is written inside catch block.
      `,
      code: `class Main

{

public static void main(String[] args)

{

try

{

int result = 10 / 0;


System.out.println(result);

}


catch(Exception e)

{

System.out.println(
"Error Occurred"
);

}

}

}`,
      language: "java",
      output: "Error Occurred",
    },


    {
      title: "ArithmeticException",
      content: `
ArithmeticException occurs when an illegal arithmetic operation is performed.


Example:

Division by zero.
      `,
      code: `int a = 10;

int b = 0;


System.out.println(a / b);`,
      language: "java",
      output: "ArithmeticException",
    },


    {
      title: "Multiple Catch Blocks",
      content: `
A try block can have multiple catch blocks.


Java checks catch blocks from top to bottom.
      `,
      code: `try

{

int arr[] = {1,2,3};


System.out.println(arr[5]);

}


catch(ArrayIndexOutOfBoundsException e)

{

System.out.println(
"Invalid Index"
);

}


catch(Exception e)

{

System.out.println(
"Error"
);

}`,
      language: "java",
      output: "Invalid Index",
    },


    {
      title: "Nested try Block",
      content: `
A try block inside another try block is called nested try.


It is useful for handling complex operations.
      `,
      code: `try

{

try

{

int x = 10 / 0;

}

catch(Exception e)

{

System.out.println(
"Inner Exception"
);

}

}

catch(Exception e)

{

System.out.println(
"Outer Exception"
);

}`,
      language: "java",
      output: "Inner Exception",
    },


    {
      title: "finally Block",
      content: `
The finally block always executes whether an exception occurs or not.


It is commonly used for cleanup operations.
      `,
      code: `try

{

System.out.println(
"Try Block"
);

}

catch(Exception e)

{

System.out.println(
"Catch Block"
);

}

finally

{

System.out.println(
"Finally Block"
);

}`,
      language: "java",
      output: `
Try Block

Finally Block
      `,
    },


    {
      title: "throw Keyword",
      content: `
The throw keyword is used to manually create an exception.


It is used when developers want to generate custom errors.
      `,
      code: `class Main

{

public static void main(String[] args)

{

int age = 15;


if(age < 18)

{

throw new ArithmeticException(
"Not Eligible"
);

}

}

}`,
      language: "java",
      output: "Not Eligible",
    },


    {
      title: "throws Keyword",
      content: `
The throws keyword declares exceptions that a method may generate.


It passes responsibility to the calling method.
      `,
      code: `class Main

{

static void check()

throws Exception

{

throw new Exception(
"Error"
);

}


public static void main(String[] args)

throws Exception

{

check();

}

}`,
      language: "java",
      output: "Error",
    },


    {
      title: "Checked Exceptions",
      content: `
Checked exceptions are checked during compile time.


The programmer must handle them.


Examples:


• IOException

• SQLException

• FileNotFoundException
      `,
      code: `import java.io.*;


class Main

{

public static void main(String[] args)

throws IOException

{

FileReader file =

new FileReader(
"data.txt"
);

}

}`,
      language: "java",
      output: "File Accessed",
    },


    {
      title: "Unchecked Exceptions",
      content: `
Unchecked exceptions occur during runtime.


They are subclasses of RuntimeException.


Examples:


• ArithmeticException

• NullPointerException

• ArrayIndexOutOfBoundsException
      `,
    },


    {
      title: "NullPointerException",
      content: `
NullPointerException occurs when we try to access methods or properties of a null object.
      `,
      code: `String name = null;


System.out.println(

name.length()

);`,
      language: "java",
      output: "NullPointerException",
    },


    {
      title: "ArrayIndexOutOfBoundsException",
      content: `
This exception occurs when accessing an invalid array index.
      `,
      code: `int numbers[] = {

10,

20

};


System.out.println(

numbers[5]

);`,
      language: "java",
      output: "ArrayIndexOutOfBoundsException",
    },


    {
      title: "NumberFormatException",
      content: `
NumberFormatException occurs when converting an invalid string into a number.
      `,
      code: `String value = "abc";


int number = Integer.parseInt(value);`,
      language: "java",
      output: "NumberFormatException",
    },


    {
      title: "Custom Exception",
      content: `
Java allows developers to create their own exceptions.


Custom exceptions improve code readability.
      `,
      code: `class AgeException

extends Exception

{


AgeException(String message)

{

super(message);

}


}`,
      language: "java",
      output: "Custom Exception Created",
    },


    {
      title: "Using Custom Exception",
      content: `
Custom exceptions are thrown using throw keyword.
      `,
      code: `class Main

{

static void checkAge(int age)

throws AgeException

{

if(age < 18)

{

throw new AgeException(
"Not Allowed"
);

}

}

}`,
      language: "java",
      output: "Custom Exception Used",
    },


    {
      title: "Exception Propagation",
      content: `
Exception propagation means passing an exception from one method to another until it is handled.
      `,
      code: `class Main

{

void method3()

{

int x = 10 / 0;

}


void method2()

{

method3();

}


void method1()

{

method2();

}

}`,
      language: "java",
      output: "Exception Propagated",
    },


    {
      title: "Best Practices for Exception Handling",
      content: `
Good practices:


✓ Use specific exceptions

✓ Avoid empty catch blocks

✓ Use meaningful error messages

✓ Clean resources using finally

✓ Do not use exceptions for normal logic
      `,
    },


    {
      title: "Java Collections Framework",
      content: `
The Java Collections Framework provides ready-made classes and interfaces to store and manipulate groups of objects.


It is part of:

java.util package


Benefits:

• Dynamic storage
• Reusable data structures
• Efficient searching and sorting
• Reduces programming effort


Main collection types:

• List
• Set
• Queue
• Map
      `,
    },


    {
      title: "Collection Framework Hierarchy",
      content: `
Java Collections Framework contains interfaces and classes.


Main Interfaces:


Collection

|

|-- List

|-- Set

|-- Queue


Map is a separate interface.
      `,
    },


    {
      title: "Collection Interface",
      content: `
Collection is the root interface of the Java collection hierarchy.


Common methods:


add()

remove()

size()

contains()

clear()

isEmpty()
      `,
      code: `import java.util.*;


class Main

{

public static void main(String[] args)

{

ArrayList<String> names =

new ArrayList<>();


names.add(
"Java"
);


System.out.println(names);

}

}`,
      language: "java",
      output: "[Java]",
    },


    {
      title: "List Interface",
      content: `
List stores elements in an ordered manner.


Features:


• Allows duplicate values

• Maintains insertion order

• Allows index-based access


Implementations:


• ArrayList

• LinkedList

• Vector

• Stack
      `,
    },


    {
      title: "ArrayList in Java",
      content: `
ArrayList is a resizable array implementation of List.


Features:


• Dynamic size

• Fast searching

• Allows duplicates

• Maintains order
      `,
      code: `import java.util.ArrayList;


class Main

{

public static void main(String[] args)

{

ArrayList<String> list =

new ArrayList<>();


list.add(
"Java"
);


list.add(
"Python"
);


System.out.println(list);

}

}`,
      language: "java",
      output: "[Java, Python]",
    },


    {
      title: "ArrayList Methods",
      content: `
Common ArrayList methods:


add()

Adds element.


get()

Access element.


set()

Updates element.


remove()

Deletes element.


size()

Returns size.
      `,
      code: `ArrayList<Integer> numbers =

new ArrayList<>();


numbers.add(10);

numbers.add(20);


System.out.println(

numbers.get(0)

);`,
      language: "java",
      output: "10",
    },


    {
      title: "Iterating ArrayList",
      content: `
ArrayList elements can be accessed using:


• for loop

• enhanced for loop

• Iterator
      `,
      code: `ArrayList<String> cars =

new ArrayList<>();


cars.add(
"BMW"
);

cars.add(
"Audi"
);


for(String car : cars)

{

System.out.println(car);

}`,
      language: "java",
      output: `
BMW

Audi
      `,
    },


    {
      title: "LinkedList in Java",
      content: `
LinkedList stores elements using nodes.


Features:


• Faster insertion and deletion

• Allows duplicates

• Maintains order
      `,
      code: `import java.util.LinkedList;


class Main

{

public static void main(String[] args)

{

LinkedList<String> list =

new LinkedList<>();


list.add(
"Java"
);


list.add(
"Python"
);


System.out.println(list);

}

}`,
      language: "java",
      output: "[Java, Python]",
    },


    {
      title: "ArrayList vs LinkedList",
      content: `
ArrayList:


• Uses dynamic array

• Faster searching

• Slower insertion/deletion


LinkedList:


• Uses nodes

• Faster insertion/deletion

• Slower searching
      `,
    },


    {
      title: "Vector in Java",
      content: `
Vector is a synchronized dynamic array.


Features:


• Thread safe

• Allows duplicates

• Maintains insertion order


Vector is an older collection class.
      `,
      code: `import java.util.Vector;


Vector<Integer> v =

new Vector<>();


v.add(10);


System.out.println(v);`,
      language: "java",
      output: "[10]",
    },


    {
      title: "Stack in Java",
      content: `
Stack follows:

LIFO

(Last In First Out)


Common methods:


push()

pop()

peek()
      `,
      code: `import java.util.Stack;


class Main

{

public static void main(String[] args)

{

Stack<Integer> stack =

new Stack<>();


stack.push(10);

stack.push(20);


System.out.println(

stack.pop()

);

}

}`,
      language: "java",
      output: "20",
    },


    {
      title: "Set Interface",
      content: `
Set stores unique elements.


Features:


• Does not allow duplicates

• No index-based access


Types:


• HashSet

• LinkedHashSet

• TreeSet
      `,
    },


    {
      title: "HashSet in Java",
      content: `
HashSet stores unique values using hashing.


Features:


• No duplicates

• No guaranteed order

• Fast operations
      `,
      code: `import java.util.HashSet;


class Main

{

public static void main(String[] args)

{

HashSet<Integer> set =

new HashSet<>();


set.add(10);

set.add(20);

set.add(10);


System.out.println(set);

}

}`,
      language: "java",
      output: "[10, 20]",
    },


    {
      title: "LinkedHashSet",
      content: `
LinkedHashSet maintains insertion order while storing unique elements.
      `,
      code: `LinkedHashSet<String> set =

new LinkedHashSet<>();


set.add(
"Java"
);

set.add(
"Python"
);


System.out.println(set);`,
      language: "java",
      output: "[Java, Python]",
    },


    {
      title: "TreeSet in Java",
      content: `
TreeSet stores unique elements in sorted order.


Features:


• Sorted collection

• No duplicates
      `,
      code: `TreeSet<Integer> numbers =

new TreeSet<>();


numbers.add(30);

numbers.add(10);

numbers.add(20);


System.out.println(numbers);`,
      language: "java",
      output: "[10, 20, 30]",
    },


    {
      title: "Queue Interface",
      content: `
Queue stores elements in:

FIFO

(First In First Out)


Common implementation:

PriorityQueue
      `,
      code: `import java.util.Queue;

import java.util.LinkedList;


Queue<String> q =

new LinkedList<>();


q.add(
"Java"
);


System.out.println(q);`,
      language: "java",
      output: "[Java]",
    },


    {
      title: "PriorityQueue",
      content: `
PriorityQueue processes elements according to priority.


By default, smaller values have higher priority.
      `,
      code: `PriorityQueue<Integer> pq =

new PriorityQueue<>();


pq.add(30);

pq.add(10);

pq.add(20);


System.out.println(

pq.poll()

);`,
      language: "java",
      output: "10",
    },


    {
      title: "Map Interface",
      content: `
Map stores data in key-value pairs.


Features:


• Keys must be unique

• Values can duplicate


Implementations:


• HashMap

• LinkedHashMap

• TreeMap
      `,
    },


    {
      title: "HashMap in Java",
      content: `
HashMap stores key-value pairs using hashing.


Features:


• Fast access

• Allows one null key

• No order guarantee
      `,
      code: `import java.util.HashMap;


HashMap<Integer,String> map =

new HashMap<>();


map.put(
1,
"Java"
);


map.put(
2,
"Python"
);


System.out.println(map);`,
      language: "java",
      output: "{1=Java, 2=Python}",
    },


    {
      title: "HashMap Methods",
      content: `
Common HashMap methods:


put()

Adds key-value pair.


get()

Returns value.


remove()

Deletes entry.


containsKey()

Checks key.
      `,
      code: `map.put(
101,
"Student"
);


System.out.println(

map.get(101)

);`,
      language: "java",
      output: "Student",
    },


    {
      title: "Iterator in Java",
      content: `
Iterator is used to traverse collection elements.


Methods:


hasNext()

next()

remove()
      `,
      code: `ArrayList<String> list =

new ArrayList<>();


list.add(
"Java"
);


Iterator<String> itr =

list.iterator();


while(itr.hasNext())

{

System.out.println(

itr.next()

);

}`,
      language: "java",
      output: "Java",
    },


    {
      title: "Comparable Interface",
      content: `
Comparable is used for natural sorting of objects.


It contains:


compareTo() method
      `,
    },


    {
      title: "Comparator Interface",
      content: `
Comparator is used for custom sorting.


It allows sorting objects in different ways.
      `,
    },


    {
      title: "Collections Utility Class",
      content: `
Collections class provides utility methods for collection operations.


Common methods:


sort()

reverse()

max()

min()

shuffle()
      `,
      code: `ArrayList<Integer> list =

new ArrayList<>();


list.add(30);

list.add(10);


Collections.sort(list);


System.out.println(list);`,
      language: "java",
      output: "[10, 30]",
    },


    {
      title: "Java Generics",
      content: `
Generics allow classes, interfaces, and methods to work with different data types safely.


Generics provide:


• Type safety

• Code reusability

• Compile-time checking


Generics were introduced in Java 5.
      `,
    },


    {
      title: "Generic Class",
      content: `
A generic class can work with different data types using type parameters.


Common type parameter:

T → Type
      `,
      code: `class Box<T>

{

T value;


void set(T value)

{

this.value = value;

}


T get()

{

return value;

}

}


class Main

{

public static void main(String[] args)

{

Box<Integer> box =

new Box<>();


box.set(100);


System.out.println(

box.get()

);

}

}`,
      language: "java",
      output: "100",
    },


    {
      title: "Generic Method",
      content: `
A generic method can accept different types of parameters.
      `,
      code: `class Main

{

static <T> void display(T value)

{

System.out.println(value);

}


public static void main(String[] args)

{

display(
"Java"
);


display(
100
);

}

}`,
      language: "java",
      output: `
Java

100
      `,
    },


    {
      title: "Multiple Type Parameters",
      content: `
A generic class can use multiple type parameters.


Example:


T → Type

K → Key

V → Value
      `,
      code: `class Pair<K,V>

{

K key;

V value;


Pair(K key,V value)

{

this.key = key;

this.value = value;

}

}`,
      language: "java",
      output: "Multiple Generic Types",
    },


    {
      title: "Generic Wildcards",
      content: `
Wildcards represent unknown types.


Symbol:

?


Types:


• Upper bounded wildcard

• Lower bounded wildcard

• Unbounded wildcard
      `,
      code: `List<?> list;`,
      language: "java",
      output: "Unknown Type",
    },


    {
      title: "Lambda Expressions in Java",
      content: `
Lambda expressions were introduced in Java 8.


They provide a shorter way to write anonymous functions.


Syntax:


(parameters) -> expression
      `,
      code: `interface Message

{

void show();

}


class Main

{

public static void main(String[] args)

{

Message m = () ->

System.out.println(
"Hello Java"
);


m.show();

}

}`,
      language: "java",
      output: "Hello Java",
    },


    {
      title: "Advantages of Lambda Expressions",
      content: `
Benefits:


• Less code

• Improves readability

• Supports functional programming

• Works with Stream API
      `,
    },


    {
      title: "Functional Interface",
      content: `
A functional interface contains exactly one abstract method.


It can be used with lambda expressions.


Examples:


• Runnable

• Comparator

• Predicate

• Consumer

• Function
      `,
    },


    {
      title: "Creating Functional Interface",
      content: `
The @FunctionalInterface annotation ensures that an interface contains only one abstract method.
      `,
      code: `@FunctionalInterface

interface Calculator

{

int add(int a,int b);

}`,
      language: "java",
      output: "Functional Interface",
    },


    {
      title: "Predicate Functional Interface",
      content: `
Predicate represents a condition that returns true or false.


Method:


test()
      `,
      code: `import java.util.function.Predicate;


class Main

{

public static void main(String[] args)

{

Predicate<Integer> check =

age -> age >= 18;


System.out.println(

check.test(20)

);

}

}`,
      language: "java",
      output: "true",
    },


    {
      title: "Consumer Functional Interface",
      content: `
Consumer accepts a value and performs an operation.


It does not return anything.
      `,
      code: `import java.util.function.Consumer;


Consumer<String> print =

name -> System.out.println(name);


print.accept(
"Java"
);`,
      language: "java",
      output: "Java",
    },


    {
      title: "Function Functional Interface",
      content: `
Function accepts one value and returns another value.


Method:

apply()
      `,
      code: `import java.util.function.Function;


Function<Integer,Integer> square =

x -> x*x;


System.out.println(

square.apply(5)

);`,
      language: "java",
      output: "25",
    },


    {
      title: "Stream API Introduction",
      content: `
Stream API was introduced in Java 8.


It is used to process collections in a functional style.


Operations:


• Filtering

• Sorting

• Mapping

• Reducing
      `,
    },


    {
      title: "Creating a Stream",
      content: `
Streams can be created from collections.
      `,
      code: `import java.util.*;


class Main

{

public static void main(String[] args)

{

List<Integer> numbers =

Arrays.asList(
1,2,3,4,5
);


numbers.stream()

.forEach(System.out::println);

}

}`,
      language: "java",
      output: `
1

2

3

4

5
      `,
    },


    {
      title: "Stream filter() Method",
      content: `
filter() selects elements based on a condition.


It uses Predicate.
      `,
      code: `List<Integer> numbers =

Arrays.asList(
10,20,30,40
);


numbers.stream()

.filter(n -> n > 20)

.forEach(System.out::println);`,
      language: "java",
      output: `
30

40
      `,
    },


    {
      title: "Stream map() Method",
      content: `
map() transforms each element into another value.
      `,
      code: `List<Integer> numbers =

Arrays.asList(
1,2,3
);


numbers.stream()

.map(n -> n*n)

.forEach(System.out::println);`,
      language: "java",
      output: `
1

4

9
      `,
    },


    {
      title: "Stream sorted() Method",
      content: `
sorted() arranges stream elements in order.
      `,
      code: `List<Integer> numbers =

Arrays.asList(
30,10,20
);


numbers.stream()

.sorted()

.forEach(System.out::println);`,
      language: "java",
      output: `
10

20

30
      `,
    },


    {
      title: "Stream reduce() Method",
      content: `
reduce() combines elements into a single result.


Commonly used for:


• Sum

• Product

• Maximum
      `,
      code: `List<Integer> numbers =

Arrays.asList(
1,2,3,4
);


int sum = numbers.stream()

.reduce(
0,
(a,b)->a+b
);


System.out.println(sum);`,
      language: "java",
      output: "10",
    },


    {
      title: "Optional Class",
      content: `
Optional is a container object used to avoid NullPointerException.


Introduced in Java 8.
      `,
      code: `import java.util.Optional;


class Main

{

public static void main(String[] args)

{

Optional<String> name =

Optional.of(
"Java"
);


System.out.println(

name.get()

);

}

}`,
      language: "java",
      output: "Java",
    },


    {
      title: "Creating Optional Objects",
      content: `
Optional provides methods:


of()

ofNullable()

empty()
      `,
      code: `Optional<String> value =

Optional.empty();


System.out.println(value);`,
      language: "java",
      output: "Optional.empty",
    },


    {
      title: "Java Date and Time API",
      content: `
Java Date and Time API was introduced in Java 8.


Package:

java.time


Classes:


• LocalDate

• LocalTime

• LocalDateTime
      `,
    },


    {
      title: "LocalDate Class",
      content: `
LocalDate represents date without time.


Format:


YYYY-MM-DD
      `,
      code: `import java.time.LocalDate;


class Main

{

public static void main(String[] args)

{

LocalDate date =

LocalDate.now();


System.out.println(date);

}

}`,
      language: "java",
      output: "Current Date",
    },


    {
      title: "LocalTime Class",
      content: `
LocalTime represents time without date.
      `,
      code: `import java.time.LocalTime;


LocalTime time =

LocalTime.now();


System.out.println(time);`,
      language: "java",
      output: "Current Time",
    },


    {
      title: "LocalDateTime Class",
      content: `
LocalDateTime represents both date and time.
      `,
      code: `import java.time.LocalDateTime;


LocalDateTime now =

LocalDateTime.now();


System.out.println(now);`,
      language: "java",
      output: "Current Date and Time",
    },


    {
      title: "Date Formatting",
      content: `
DateTimeFormatter is used to format dates and times.
      `,
      code: `import java.time.LocalDate;

import java.time.format.DateTimeFormatter;


LocalDate date =

LocalDate.now();


DateTimeFormatter format =

DateTimeFormatter.ofPattern(
"dd-MM-yyyy"
);


System.out.println(

date.format(format)

);`,
      language: "java",
      output: "31-07-2026",
    },


    {
      title: "Java File Handling",
      content: `
File handling allows Java programs to create, read, write, and modify files.


Java provides file handling through:


java.io package


Common operations:


• Create file

• Read file

• Write file

• Delete file
      `,
    },


    {
      title: "File Class in Java",
      content: `
The File class is used to represent files and directories.


Package:


java.io.File


It provides methods to manage files.
      `,
      code: `import java.io.File;


class Main

{

public static void main(String[] args)

{

File file = new File(
"data.txt"
);


System.out.println(

file.exists()

);

}

}`,
      language: "java",
      output: "false",
    },


    {
      title: "Creating a File",
      content: `
The createNewFile() method creates a new file.
      `,
      code: `import java.io.File;

import java.io.IOException;


class Main

{

public static void main(String[] args)

throws IOException

{

File file = new File(
"example.txt"
);


if(file.createNewFile())

{

System.out.println(
"File Created"
);

}

}

}`,
      language: "java",
      output: "File Created",
    },


    {
      title: "File Class Methods",
      content: `
Common File methods:


exists()

Checks file existence.


createNewFile()

Creates a file.


delete()

Deletes a file.


getName()

Returns file name.


length()

Returns file size.
      `,
    },


    {
      title: "Writing Data into File",
      content: `
FileWriter is used to write characters into files.
      `,
      code: `import java.io.FileWriter;


class Main

{

public static void main(String[] args)

throws Exception

{

FileWriter writer =

new FileWriter(
"data.txt"
);


writer.write(
"Hello Java"
);


writer.close();

}

}`,
      language: "java",
      output: "Data Written",
    },


    {
      title: "Reading File Data",
      content: `
FileReader is used to read characters from a file.
      `,
      code: `import java.io.FileReader;


class Main

{

public static void main(String[] args)

throws Exception

{

FileReader reader =

new FileReader(
"data.txt"
);


int ch;


while((ch = reader.read()) != -1)

{

System.out.print(
(char)ch
);

}


reader.close();

}

}`,
      language: "java",
      output: "Hello Java",
    },


    {
      title: "BufferedReader",
      content: `
BufferedReader reads text efficiently by buffering characters.


It provides faster reading compared to FileReader.
      `,
      code: `import java.io.*;


class Main

{

public static void main(String[] args)

throws Exception

{

BufferedReader br =

new BufferedReader(

new FileReader(
"data.txt"
)

);


String line = br.readLine();


System.out.println(line);


br.close();

}

}`,
      language: "java",
      output: "Hello Java",
    },


    {
      title: "BufferedWriter",
      content: `
BufferedWriter writes text efficiently using a buffer.
      `,
      code: `import java.io.*;


class Main

{

public static void main(String[] args)

throws Exception

{

BufferedWriter bw =

new BufferedWriter(

new FileWriter(
"data.txt"
)

);


bw.write(
"Java Programming"
);


bw.close();

}

}`,
      language: "java",
      output: "Data Written Successfully",
    },


    {
      title: "FileInputStream",
      content: `
FileInputStream reads data in byte format.


Used for:


• Images

• Videos

• Binary files
      `,
      code: `FileInputStream input =

new FileInputStream(
"image.png"
);`,
      language: "java",
      output: "Binary File Reading",
    },


    {
      title: "FileOutputStream",
      content: `
FileOutputStream writes byte data into files.
      `,
      code: `FileOutputStream output =

new FileOutputStream(
"file.txt"
);


output.write(65);


output.close();`,
      language: "java",
      output: "File Written",
    },


    {
      title: "Serialization in Java",
      content: `
Serialization converts an object into a byte stream.


Purpose:


• Store objects permanently

• Transfer objects over network


Uses:

ObjectOutputStream
      `,
    },


    {
      title: "Serializable Interface",
      content: `
A class must implement Serializable interface to make objects serializable.


Serializable is a marker interface.
      `,
      code: `import java.io.Serializable;


class Student implements Serializable

{

String name;

int age;

}`,
      language: "java",
      output: "Serializable Class",
    },


    {
      title: "Object Serialization Example",
      content: `
ObjectOutputStream writes objects into files.
      `,
      code: `ObjectOutputStream out =

new ObjectOutputStream(

new FileOutputStream(
"student.txt"
)

);


out.writeObject(student);


out.close();`,
      language: "java",
      output: "Object Stored",
    },


    {
      title: "Deserialization in Java",
      content: `
Deserialization converts byte stream back into an object.


Uses:

ObjectInputStream
      `,
      code: `ObjectInputStream in =

new ObjectInputStream(

new FileInputStream(
"student.txt"
)

);


Student s =

(Student) in.readObject();`,
      language: "java",
      output: "Object Restored",
    },


    {
      title: "Java Multithreading",
      content: `
Multithreading allows multiple tasks to execute simultaneously.


A thread is a lightweight subprocess.


Benefits:


• Better performance

• Faster execution

• Resource sharing
      `,
    },


    {
      title: "Thread Class",
      content: `
Java provides Thread class to create and manage threads.


Package:


java.lang.Thread
      `,
      code: `class MyThread extends Thread

{

public void run()

{

System.out.println(
"Thread Running"
);

}

}


class Main

{

public static void main(String[] args)

{

MyThread t = new MyThread();


t.start();

}

}`,
      language: "java",
      output: "Thread Running",
    },


    {
      title: "Runnable Interface",
      content: `
Runnable interface is another way to create threads.


It contains:


run() method
      `,
      code: `class Task implements Runnable

{

public void run()

{

System.out.println(
"Task Running"
);

}


}


class Main

{

public static void main(String[] args)

{

Thread t =

new Thread(
new Task()
);


t.start();

}

}`,
      language: "java",
      output: "Task Running",
    },


    {
      title: "Thread Methods",
      content: `
Common thread methods:


start()

Starts a thread.


run()

Contains thread task.


sleep()

Pauses execution.


join()

Waits for another thread.


isAlive()

Checks thread status.
      `,
    },


    {
      title: "Thread Lifecycle",
      content: `
A thread passes through different states:


1. New


2. Runnable


3. Running


4. Waiting


5. Terminated
      `,
    },


    {
      title: "Thread Priority",
      content: `
Thread priority determines execution preference.


Range:


1 to 10


Default priority:

5
      `,
      code: `Thread t = new Thread();


t.setPriority(10);`,
      language: "java",
      output: "Priority Set",
    },


    {
      title: "Thread Synchronization",
      content: `
Synchronization controls access to shared resources.


It prevents data inconsistency when multiple threads access the same data.
      `,
    },


    {
      title: "synchronized Keyword",
      content: `
The synchronized keyword allows only one thread to access a method or block at a time.
      `,
      code: `class Counter

{

int count = 0;


synchronized void increment()

{

count++;

}

}`,
      language: "java",
      output: "Thread Safe Method",
    },


    {
      title: "Race Condition",
      content: `
A race condition occurs when multiple threads modify shared data at the same time.


Synchronization helps prevent race conditions.
      `,
    },


    {
      title: "Deadlock in Java",
      content: `
Deadlock occurs when two or more threads wait forever for each other.


It causes program execution to stop.
      `,
    },


    {
      title: "Avoiding Deadlock",
      content: `
Ways to avoid deadlock:


• Avoid unnecessary locks

• Lock resources in fixed order

• Use timeout locks

• Reduce synchronized blocks
      `,
    },

    {
      title: "JDBC Introduction",
      content: `
JDBC (Java Database Connectivity) is an API used to connect Java applications with databases.


JDBC allows Java programs to:


• Connect with databases

• Execute SQL queries

• Retrieve data

• Update records


Supported databases:


• MySQL

• Oracle

• PostgreSQL

• SQL Server
      `,
    },


    {
      title: "JDBC Architecture",
      content: `
JDBC architecture contains:


Java Application

↓

JDBC API

↓

JDBC Driver

↓

Database


The JDBC driver acts as a bridge between Java and database.
      `,
    },


    {
      title: "JDBC Components",
      content: `
Main JDBC components:


1. Driver Manager

Manages database drivers.


2. Connection

Creates connection with database.


3. Statement

Executes SQL queries.


4. ResultSet

Stores query results.


5. SQLException

Handles database errors.
      `,
    },


    {
      title: "Installing JDBC Driver",
      content: `
To connect Java with MySQL, we need MySQL JDBC Driver.


Driver dependency:


mysql-connector-j


It allows communication between Java and MySQL database.
      `,
    },


    {
      title: "Database Connection",
      content: `
Connection class establishes communication between Java application and database.


Steps:


1. Load driver

2. Create connection

3. Execute queries

4. Close connection
      `,
      code: `import java.sql.*;


class Main

{

public static void main(String[] args)

throws Exception

{


Class.forName(
"com.mysql.cj.jdbc.Driver"
);


Connection con =

DriverManager.getConnection(

"jdbc:mysql://localhost:3306/test",

"root",

"password"

);


System.out.println(
"Connected"
);


con.close();

}

}`,
      language: "java",
      output: "Connected",
    },


    {
      title: "Connection Interface",
      content: `
Connection represents an active database connection.


Common methods:


createStatement()

prepareStatement()

close()

commit()

rollback()
      `,
    },


    {
      title: "Statement Interface",
      content: `
Statement is used to execute SQL queries.


Methods:


executeQuery()

executeUpdate()
      `,
      code: `Statement stmt =

con.createStatement();


stmt.executeUpdate(

"CREATE TABLE student(id INT)"

);`,
      language: "java",
      output: "Table Created",
    },


    {
      title: "PreparedStatement",
      content: `
PreparedStatement is used for executing precompiled SQL queries.


Advantages:


• Faster execution

• Prevents SQL injection

• Supports parameters
      `,
      code: `PreparedStatement ps =

con.prepareStatement(

"insert into student values(?,?)"

);


ps.setInt(
1,
101
);


ps.setString(
2,
"Harish"
);


ps.executeUpdate();`,
      language: "java",
      output: "Record Inserted",
    },


    {
      title: "ResultSet Interface",
      content: `
ResultSet stores data returned by SELECT queries.


It works like a cursor that moves through records.
      `,
      code: `ResultSet rs =

stmt.executeQuery(

"select * from student"

);


while(rs.next())

{

System.out.println(

rs.getString(
"name"
)

);

}`,
      language: "java",
      output: "Student Data",
    },


    {
      title: "JDBC CRUD Operations",
      content: `
CRUD means:


C → Create

R → Read

U → Update

D → Delete


JDBC supports all database operations.
      `,
    },


    {
      title: "Insert Data Using JDBC",
      content: `
INSERT operation adds new records into database.
      `,
      code: `String query =

"insert into student values(1,'Java')";


Statement stmt =

con.createStatement();


stmt.executeUpdate(query);`,
      language: "java",
      output: "Data Inserted",
    },


    {
      title: "Select Data Using JDBC",
      content: `
SELECT operation retrieves records from database.
      `,
      code: `ResultSet rs =

stmt.executeQuery(

"select * from student"

);


while(rs.next())

{

System.out.println(

rs.getInt(1)

);

}`,
      language: "java",
      output: "Data Retrieved",
    },


    {
      title: "Update Data Using JDBC",
      content: `
UPDATE modifies existing database records.
      `,
      code: `String query =

"update student set name='Java' where id=1";


stmt.executeUpdate(query);`,
      language: "java",
      output: "Data Updated",
    },


    {
      title: "Delete Data Using JDBC",
      content: `
DELETE removes records from database.
      `,
      code: `String query =

"delete from student where id=1";


stmt.executeUpdate(query);`,
      language: "java",
      output: "Data Deleted",
    },


    {
      title: "Java Networking",
      content: `
Java networking allows communication between computers through networks.


Uses:


• Internet applications

• Client-server programs

• Data transfer
      `,
    },


    {
      title: "Networking Classes",
      content: `
Important networking classes:


• InetAddress

• Socket

• ServerSocket

• URL

• URLConnection
      `,
    },


    {
      title: "InetAddress Class",
      content: `
InetAddress represents an IP address.


It is used to get information about hosts.
      `,
      code: `import java.net.*;


class Main

{

public static void main(String[] args)

throws Exception

{

InetAddress ip =

InetAddress.getLocalHost();


System.out.println(ip);

}

}`,
      language: "java",
      output: "Local Host Address",
    },


    {
      title: "Socket Programming",
      content: `
Socket programming enables communication between client and server.


Socket:

Used by client.


ServerSocket:

Used by server.
      `,
    },


    {
      title: "Client Socket Example",
      content: `
A client uses Socket class to connect with server.
      `,
      code: `import java.net.Socket;


class Client

{

public static void main(String[] args)

throws Exception

{

Socket socket =

new Socket(

"localhost",

5000

);


System.out.println(
"Connected"
);

}

}`,
      language: "java",
      output: "Connected",
    },


    {
      title: "ServerSocket Example",
      content: `
ServerSocket listens for client requests.
      `,
      code: `import java.net.ServerSocket;


class Server

{

public static void main(String[] args)

throws Exception

{

ServerSocket server =

new ServerSocket(
5000
);


System.out.println(
"Server Started"
);

}

}`,
      language: "java",
      output: "Server Started",
    },


    {
      title: "URL Class in Java",
      content: `
URL class represents a Uniform Resource Locator.


It is used to access resources on the internet.
      `,
      code: `import java.net.URL;


class Main

{

public static void main(String[] args)

throws Exception

{

URL url =

new URL(
"https://example.com"
);


System.out.println(

url.getProtocol()

);

}

}`,
      language: "java",
      output: "https",
    },


    {
      title: "URLConnection Class",
      content: `
URLConnection allows communication with resources pointed by URLs.


It can read data from websites.
      `,
    },


    {
      title: "Java GUI Introduction",
      content: `
Java provides GUI programming libraries:


• AWT

• Swing

• JavaFX


GUI allows developers to create desktop applications.
      `,
    },


    {
      title: "AWT in Java",
      content: `
AWT (Abstract Window Toolkit) is Java's original GUI framework.


Components:


• Button

• Label

• TextField

• Frame
      `,
      code: `import java.awt.*;


class Main

{

public static void main(String[] args)

{

Frame f = new Frame();


f.setSize(
300,
300
);


f.setVisible(true);

}

}`,
      language: "java",
      output: "Window Created",
    },


    {
      title: "Swing in Java",
      content: `
Swing is a modern GUI toolkit built on top of AWT.


Components:


• JFrame

• JButton

• JLabel

• JTextField
      `,
      code: `import javax.swing.*;


class Main

{

public static void main(String[] args)

{

JFrame frame =

new JFrame(
"Java GUI"
);


frame.setSize(
300,
300
);


frame.setVisible(true);

}

}`,
      language: "java",
      output: "GUI Window Created",
    },


    {
      title: "JFrame Component",
      content: `
JFrame is the main window container in Swing applications.
      `,
    },


    {
      title: "JButton Component",
      content: `
JButton creates clickable buttons in Swing.
      `,
      code: `JButton button =

new JButton(
"Click"
);`,
      language: "java",
      output: "Button Created",
    },


    {
      title: "JTextField Component",
      content: `
JTextField allows users to enter text.
      `,
      code: `JTextField field =

new JTextField();`,
      language: "java",
      output: "Text Field Created",
    },

    {
      title: "Java Design Patterns",
      content: `
Design patterns are reusable solutions to common software design problems.


They provide standard approaches for writing maintainable and scalable code.


Types of Design Patterns:


• Creational Patterns

• Structural Patterns

• Behavioral Patterns
      `,
    },


    {
      title: "Creational Design Patterns",
      content: `
Creational patterns deal with object creation mechanisms.


They help create objects in a flexible way.


Examples:


• Singleton Pattern

• Factory Pattern

• Builder Pattern
      `,
    },


    {
      title: "Singleton Design Pattern",
      content: `
Singleton pattern ensures that only one object of a class exists.


Uses:


• Database connection

• Configuration management

• Logging systems
      `,
      code: `class Singleton

{

private static Singleton obj;


private Singleton()

{

}


public static Singleton getInstance()

{

if(obj == null)

{

obj = new Singleton();

}


return obj;

}

}`,
      language: "java",
      output: "Single Object Created",
    },


    {
      title: "Factory Design Pattern",
      content: `
Factory pattern creates objects without exposing object creation logic.


It provides an interface for creating objects.
      `,
      code: `interface Animal

{

void sound();

}


class Dog implements Animal

{

public void sound()

{

System.out.println(
"Bark"
);

}

}


class Factory

{

static Animal create()

{

return new Dog();

}

}`,
      language: "java",
      output: "Factory Object Created",
    },


    {
      title: "Builder Design Pattern",
      content: `
Builder pattern is used to create complex objects step by step.


Benefits:


• Improves readability

• Handles many parameters

• Flexible object creation
      `,
    },


    {
      title: "Structural Design Patterns",
      content: `
Structural patterns deal with relationships between classes and objects.


Examples:


• Adapter Pattern

• Decorator Pattern

• Proxy Pattern
      `,
    },


    {
      title: "Adapter Design Pattern",
      content: `
Adapter pattern allows incompatible classes to work together.


It acts as a bridge between two interfaces.
      `,
    },


    {
      title: "Behavioral Design Patterns",
      content: `
Behavioral patterns focus on communication between objects.


Examples:


• Observer Pattern

• Strategy Pattern

• Iterator Pattern
      `,
    },


    {
      title: "Observer Design Pattern",
      content: `
Observer pattern creates a one-to-many dependency between objects.


When one object changes, all dependent objects are notified.
      `,
    },


    {
      title: "MVC Architecture",
      content: `
MVC stands for:


Model

View

Controller


It separates application logic into different layers.
      `,
    },


    {
      title: "Model in MVC",
      content: `
Model represents data and business logic.


Responsibilities:


• Database operations

• Data management

• Application rules
      `,
    },


    {
      title: "View in MVC",
      content: `
View represents the user interface.


Responsibilities:


• Display data

• User interaction

• Presentation
      `,
    },


    {
      title: "Controller in MVC",
      content: `
Controller connects Model and View.


Responsibilities:


• Handles requests

• Processes input

• Updates model
      `,
    },


    {
      title: "SOLID Principles",
      content: `
SOLID principles are guidelines for writing clean and maintainable object-oriented code.


SOLID stands for:


S → Single Responsibility Principle


O → Open/Closed Principle


L → Liskov Substitution Principle


I → Interface Segregation Principle


D → Dependency Inversion Principle
      `,
    },


    {
      title: "Single Responsibility Principle",
      content: `
A class should have only one reason to change.


A class should perform one specific responsibility.
      `,
      code: `class Invoice

{

void calculateTotal()

{

}


void printInvoice()

{

}

}`,
      language: "java",
      output: "Single Responsibility",
    },


    {
      title: "Open Closed Principle",
      content: `
Software entities should be:


Open for extension

Closed for modification


New features should be added without changing existing code.
      `,
    },


    {
      title: "Liskov Substitution Principle",
      content: `
Child classes should be replaceable with their parent classes without breaking the program.
      `,
    },


    {
      title: "Interface Segregation Principle",
      content: `
A class should not be forced to implement methods it does not use.


Prefer smaller interfaces.
      `,
    },


    {
      title: "Dependency Inversion Principle",
      content: `
High-level modules should depend on abstractions instead of concrete classes.
      `,
    },


    {
      title: "Java Annotations",
      content: `
Annotations provide metadata about Java code.


They do not directly change program behavior.


Common annotations:


• @Override

• @Deprecated

• @SuppressWarnings

• @FunctionalInterface
      `,
    },


    {
      title: "@Override Annotation",
      content: `
@Override indicates that a method is overriding a parent class method.
      `,
      code: `class Animal

{

void sound()

{

}

}


class Dog extends Animal

{

@Override

void sound()

{

System.out.println(
"Bark"
);

}

}`,
      language: "java",
      output: "Method Overridden",
    },


    {
      title: "@Deprecated Annotation",
      content: `
@Deprecated marks methods or classes that should not be used in new code.
      `,
      code: `class Test

{

@Deprecated

void oldMethod()

{

}

}`,
      language: "java",
      output: "Deprecated Method",
    },


    {
      title: "Reflection API",
      content: `
Reflection allows a Java program to inspect and modify classes during runtime.


It can access:


• Class information

• Methods

• Fields

• Constructors
      `,
      code: `Class obj =

String.class;


System.out.println(

obj.getName()

);`,
      language: "java",
      output: "java.lang.String",
    },


    {
      title: "Java Modules",
      content: `
Java Module System was introduced in Java 9.


Modules help organize large applications.


Benefits:


• Better encapsulation

• Improved security

• Easier dependency management
      `,
    },


    {
      title: "module-info.java",
      content: `
module-info.java defines a Java module.


It specifies:


• Module name

• Required modules

• Exported packages
      `,
      code: `module mymodule

{

exports com.example;

}`,
      language: "java",
      output: "Module Created",
    },


    {
      title: "JVM Architecture",
      content: `
JVM (Java Virtual Machine) executes Java bytecode.


Main components:


• Class Loader

• Runtime Memory Area

• Execution Engine

• Native Interface
      `,
    },


    {
      title: "Class Loader",
      content: `
Class Loader loads .class files into JVM memory.


Types:


• Bootstrap Class Loader

• Extension Class Loader

• Application Class Loader
      `,
    },


    {
      title: "Runtime Memory Areas",
      content: `
JVM memory is divided into:


• Heap

• Stack

• Method Area

• PC Register

• Native Method Stack
      `,
    },


    {
      title: "Heap Memory",
      content: `
Heap stores objects created during program execution.


It is managed by Garbage Collector.
      `,
    },


    {
      title: "Stack Memory",
      content: `
Stack stores:


• Local variables

• Method calls

• References


Each thread has its own stack.
      `,
    },


    {
      title: "Garbage Collector Types",
      content: `
Java provides different garbage collectors:


• Serial GC

• Parallel GC

• G1 Garbage Collector

• Z Garbage Collector
      `,
    },


    {
      title: "Java Performance Optimization",
      content: `
Ways to improve Java performance:


✓ Use efficient data structures


✓ Avoid unnecessary objects


✓ Optimize database queries


✓ Use StringBuilder for string operations


✓ Manage memory properly
      `,
    },


    {
      title: "String vs StringBuilder vs StringBuffer",
      content: `
String:


• Immutable

• Slow for modifications


StringBuilder:


• Mutable

• Faster

• Not thread safe


StringBuffer:


• Mutable

• Thread safe
      `,
    },


    {
      title: "Java 8 Features",
      content: `
Java 8 introduced many powerful features that changed Java programming.


Major Java 8 features:


• Lambda Expressions

• Functional Interfaces

• Stream API

• Method References

• Default Methods

• Optional Class

• Date and Time API

• CompletableFuture
      `,
    },


    {
      title: "Functional Programming in Java",
      content: `
Functional programming focuses on using functions as first-class citizens.


Java supports functional programming using:


• Lambda Expressions

• Functional Interfaces

• Stream API
      `,
    },


    {
      title: "Method References",
      content: `
Method reference is a shorter form of lambda expression.


It refers to an existing method.


Symbol:


::
      `,
      code: `import java.util.*;


class Main

{

public static void main(String[] args)

{

List<String> names =

Arrays.asList(
"Java",
"Python"
);


names.forEach(

System.out::println

);

}

}`,
      language: "java",
      output: `
Java

Python
      `,
    },


    {
      title: "Types of Method References",
      content: `
There are four types of method references:


1. Static Method Reference


2. Instance Method Reference


3. Constructor Reference


4. Arbitrary Object Method Reference
      `,
    },


    {
      title: "Static Method Reference",
      content: `
A static method reference refers to a static method of a class.
      `,
      code: `class Demo

{

static void show(String msg)

{

System.out.println(msg);

}

}


class Main

{

public static void main(String[] args)

{

Consumer<String> c =

Demo::show;


c.accept(
"Java"
);

}

}`,
      language: "java",
      output: "Java",
    },


    {
      title: "Constructor Reference",
      content: `
Constructor reference is used to create objects using the :: operator.
      `,
      code: `interface StudentFactory

{

Student create();

}


class Student

{

Student()

{

System.out.println(
"Student Created"
);

}

}


class Main

{

public static void main(String[] args)

{

StudentFactory s =

Student::new;


s.create();

}

}`,
      language: "java",
      output: "Student Created",
    },


    {
      title: "Default Methods in Interfaces",
      content: `
Java 8 introduced default methods in interfaces.


Default methods contain method implementation.


They allow adding new methods without breaking existing classes.
      `,
      code: `interface Vehicle

{

default void start()

{

System.out.println(
"Starting"
);

}

}`,
      language: "java",
      output: "Default Method",
    },


    {
      title: "Static Methods in Interfaces",
      content: `
Interfaces can contain static methods.


They are called using interface name.
      `,
      code: `interface Math

{

static void display()

{

System.out.println(
"Math"
);

}

}


class Main

{

public static void main(String[] args)

{

Math.display();

}

}`,
      language: "java",
      output: "Math",
    },


    {
      title: "Stream API Advanced Operations",
      content: `
Stream API provides powerful operations for processing collections.


Operations:


• filter()

• map()

• flatMap()

• sorted()

• distinct()

• limit()

• skip()
      `,
    },


    {
      title: "Stream distinct() Method",
      content: `
distinct() removes duplicate elements from a stream.
      `,
      code: `List<Integer> numbers =

Arrays.asList(
1,2,2,3
);


numbers.stream()

.distinct()

.forEach(

System.out::println

);`,
      language: "java",
      output: `
1

2

3
      `,
    },


    {
      title: "Stream limit() Method",
      content: `
limit() returns only the first specified number of elements.
      `,
      code: `Stream.of(
1,2,3,4,5
)

.limit(3)

.forEach(

System.out::println

);`,
      language: "java",
      output: `
1

2

3
      `,
    },


    {
      title: "Stream skip() Method",
      content: `
skip() ignores the first specified number of elements.
      `,
      code: `Stream.of(
1,2,3,4,5
)

.skip(2)

.forEach(

System.out::println

);`,
      language: "java",
      output: `
3

4

5
      `,
    },


    {
      title: "flatMap() Method",
      content: `
flatMap() is used to transform and flatten nested collections.
      `,
      code: `List<List<Integer>> list =

Arrays.asList(

Arrays.asList(1,2),

Arrays.asList(3,4)

);


list.stream()

.flatMap(

x -> x.stream()

)

.forEach(

System.out::println

);`,
      language: "java",
      output: `
1

2

3

4
      `,
    },


    {
      title: "Collectors in Stream API",
      content: `
Collectors are used to collect stream results into collections.


Common collectors:


• toList()

• toSet()

• joining()

• groupingBy()
      `,
      code: `List<Integer> list =

Stream.of(
1,2,3
)

.collect(

Collectors.toList()

);


System.out.println(list);`,
      language: "java",
      output: "[1, 2, 3]",
    },


    {
      title: "Grouping Data Using Streams",
      content: `
groupingBy() groups elements based on a condition.
      `,
      code: `Map<Integer,List<Integer>> result =

numbers.stream()

.collect(

Collectors.groupingBy(

n -> n % 2

)

);`,
      language: "java",
      output: "Grouped Data",
    },


    {
      title: "Parallel Streams",
      content: `
Parallel streams divide tasks into multiple threads.


They improve performance for large datasets.
      `,
      code: `list.parallelStream()

.forEach(

System.out::println

);`,
      language: "java",
      output: "Parallel Processing",
    },


    {
      title: "CompletableFuture Introduction",
      content: `
CompletableFuture is used for asynchronous programming.


It allows tasks to run independently without blocking the main thread.


Introduced in Java 8.
      `,
    },


    {
      title: "Creating CompletableFuture",
      content: `
supplyAsync() runs tasks asynchronously and returns a result.
      `,
      code: `import java.util.concurrent.*;


class Main

{

public static void main(String[] args)

{

CompletableFuture<String> future =

CompletableFuture.supplyAsync(

() -> "Java"

);


System.out.println(

future.join()

);

}

}`,
      language: "java",
      output: "Java",
    },


    {
      title: "CompletableFuture Methods",
      content: `
Important methods:


thenApply()

Transforms result.


thenAccept()

Consumes result.


thenCombine()

Combines futures.


exceptionally()

Handles errors.
      `,
    },


    {
      title: "Java Concurrency Utilities",
      content: `
java.util.concurrent package provides advanced concurrency tools.


Features:


• Thread pools

• Locks

• Synchronizers

• Concurrent collections
      `,
    },


    {
      title: "Executor Framework",
      content: `
Executor Framework manages thread creation and execution.


It improves thread management.
      `,
      code: `ExecutorService service =

Executors.newFixedThreadPool(2);


service.submit(

() ->

System.out.println(
"Task Running"
)

);


service.shutdown();`,
      language: "java",
      output: "Task Running",
    },


    {
      title: "Thread Pool",
      content: `
Thread pool is a collection of reusable threads.


Benefits:


• Better performance

• Reduced thread creation cost

• Resource management
      `,
    },


    {
      title: "Callable Interface",
      content: `
Callable is similar to Runnable but can return a value and throw exceptions.
      `,
      code: `Callable<Integer> task =

() -> 100;`,
      language: "java",
      output: "Returns Value",
    },


    {
      title: "Future Interface",
      content: `
Future represents the result of an asynchronous computation.


Methods:


get()

isDone()

cancel()
      `,
    },


    {
      title: "ReentrantLock",
      content: `
ReentrantLock provides advanced locking compared to synchronized keyword.


Features:


• Manual locking

• Fair locking

• Try locking
      `,
      code: `Lock lock =

new ReentrantLock();


lock.lock();


try

{

System.out.println(
"Locked"
);

}

finally

{

lock.unlock();

}`,
      language: "java",
      output: "Locked",
    },


    {
      title: "Concurrent Collections",
      content: `
Concurrent collections are thread-safe collection classes.


Examples:


• ConcurrentHashMap

• CopyOnWriteArrayList

• BlockingQueue
      `,
    },


    {
      title: "Atomic Classes",
      content: `
Atomic classes provide lock-free thread-safe operations.


Examples:


• AtomicInteger

• AtomicBoolean

• AtomicLong
      `,
      code: `AtomicInteger count =

new AtomicInteger(0);


count.incrementAndGet();`,
      language: "java",
      output: "Atomic Operation",
    },


    {
      title: "Advanced Java Projects",
      content: `
After learning core and advanced concepts, Java can be used to build real-world applications.


Project categories:


• Console Applications

• Desktop Applications

• Web Applications

• Enterprise Applications

• Backend APIs
      `,
    },


    {
      title: "Project 1: Student Management System",
      content: `
Student Management System is a console-based application.


Features:


• Add student

• View students

• Update records

• Delete student

• Search student


Concepts Used:


• OOP

• Collections

• File Handling
      `,
    },


    {
      title: "Project 2: Banking System",
      content: `
Banking System simulates basic banking operations.


Features:


• Create account

• Deposit money

• Withdraw money

• Check balance

• Transaction history


Concepts Used:


• Classes and Objects

• Exception Handling

• Encapsulation
      `,
    },


    {
      title: "Project 3: Library Management System",
      content: `
Library Management System manages books and users.


Features:


• Add books

• Issue books

• Return books

• Search books


Concepts Used:


• Inheritance

• Collections

• Database Connectivity
      `,
    },


    {
      title: "Java Web Development",
      content: `
Java is widely used for backend web development.


Technologies:


• Servlet

• JSP

• Spring Framework

• Spring Boot

• Hibernate
      `,
    },


    {
      title: "Introduction to Servlet",
      content: `
Servlet is a Java program that runs on a server.


It handles client requests and generates responses.


Used for:


• Web applications

• Dynamic websites
      `,
    },


    {
      title: "Servlet Lifecycle",
      content: `
Servlet lifecycle contains:


1. Loading


2. Initialization


3. Request Handling


4. Destruction


Important methods:


init()

service()

destroy()
      `,
    },


    {
      title: "Java Server Pages (JSP)",
      content: `
JSP allows developers to create dynamic web pages using Java.


JSP combines:


• HTML

• Java Code
      `,
    },


    {
      title: "Spring Framework Introduction",
      content: `
Spring is a popular Java framework for building enterprise applications.


Features:


• Dependency Injection

• MVC Architecture

• Security

• Transaction Management
      `,
    },


    {
      title: "Spring Boot Introduction",
      content: `
Spring Boot simplifies Java application development.


It provides:


• Auto configuration

• Embedded servers

• Production-ready features


Used for building REST APIs and microservices.
      `,
    },


    {
      title: "Spring Boot Project Structure",
      content: `
Typical Spring Boot project:


src/main/java

Contains Java source code.


src/main/resources

Contains configuration files.


application.properties

Stores application settings.
      `,
    },


    {
      title: "Creating REST API with Spring Boot",
      content: `
REST API allows applications to communicate through HTTP requests.


Common HTTP methods:


GET

POST

PUT

DELETE
      `,
      code: `@RestController

class UserController

{


@GetMapping("/users")

public String users()

{

return "User List";

}

}`,
      language: "java",
      output: "User List",
    },


    {
      title: "REST API Annotations",
      content: `
Common Spring Boot annotations:


@RestController

Handles REST requests.


@RequestMapping

Defines URL paths.


@GetMapping

Reads data.


@PostMapping

Creates data.


@PutMapping

Updates data.


@DeleteMapping

Deletes data.
      `,
    },


    {
      title: "Hibernate Introduction",
      content: `
Hibernate is an Object Relational Mapping (ORM) framework.


It connects Java applications with databases.


Benefits:


• Reduces SQL code

• Automatic mapping

• Database independence
      `,
    },


    {
      title: "ORM Concept",
      content: `
ORM maps Java objects to database tables.


Example:


Java Class

↓

Database Table


Object

↓

Row
      `,
    },


    {
      title: "Hibernate Entity",
      content: `
An entity is a Java class mapped to a database table.
      `,
      code: `@Entity

class Student

{

@Id

int id;


String name;

}`,
      language: "java",
      output: "Entity Created",
    },


    {
      title: "JPA Introduction",
      content: `
JPA (Java Persistence API) is a specification for managing database operations using objects.


Hibernate is one implementation of JPA.
      `,
    },


    {
      title: "JPA Annotations",
      content: `
Common JPA annotations:


@Entity

Defines entity class.


@Table

Maps class to table.


@Id

Defines primary key.


@Column

Maps column.
      `,
    },


    {
      title: "Microservices Introduction",
      content: `
Microservices architecture divides an application into small independent services.


Each service performs a specific business function.


Benefits:


• Scalability

• Easy maintenance

• Independent deployment
      `,
    },


    {
      title: "Microservices Components",
      content: `
Common microservices components:


• API Gateway

• Service Registry

• Configuration Server

• Database Service

• Authentication Service
      `,
    },


    {
      title: "Java Testing Introduction",
      content: `
Testing ensures that Java applications work correctly.


Types:


• Unit Testing

• Integration Testing

• System Testing
      `,
    },


    {
      title: "JUnit Framework",
      content: `
JUnit is a popular testing framework for Java.


Used for writing and running automated tests.
      `,
      code: `import org.junit.Test;


class TestExample

{


@Test

public void test()

{

System.out.println(
"Testing"
);

}

}`,
      language: "java",
      output: "Testing",
    },


    {
      title: "JUnit Assertions",
      content: `
Assertions verify expected results.


Common methods:


assertEquals()

assertTrue()

assertFalse()

assertNull()
      `,
      code: `assertEquals(

10,

5 + 5

);`,
      language: "java",
      output: "Test Passed",
    },


    {
      title: "Maven Build Tool",
      content: `
Maven is a build automation and dependency management tool.


It manages:


• Libraries

• Compilation

• Testing

• Packaging
      `,
    },


    {
      title: "Maven pom.xml",
      content: `
pom.xml is Maven configuration file.


It contains:


• Project information

• Dependencies

• Plugins
      `,
      code: `<dependency>

<groupId>
org.springframework.boot
</groupId>


<artifactId>
spring-boot-starter-web
</artifactId>

</dependency>`,
      language: "xml",
      output: "Dependency Added",
    },


    {
      title: "Gradle Build Tool",
      content: `
Gradle is another build automation tool.


Advantages:


• Faster builds

• Flexible configuration

• Used in Android development
      `,
    },


    {
      title: "Java Best Practices",
      content: `
Best practices for professional Java development:


✓ Use meaningful names


✓ Follow SOLID principles


✓ Handle exceptions properly


✓ Write reusable code


✓ Use design patterns


✓ Keep classes small


✓ Write unit tests


✓ Document code
      `,
    },


    {
      title: "Java Coding Standards",
      content: `
Naming conventions:


Class:

StudentManager


Method:

calculateTotal()


Variable:

studentName


Constant:

MAX_VALUE
      `,
    },


    {
      title: "Java Security Practices",
      content: `
Security practices:


• Validate user input

• Avoid SQL injection

• Encrypt sensitive data

• Use secure authentication

• Keep dependencies updated
      `,
    },


    {
      title: "Java Interview Preparation",
      content: `
Java interviews usually test:


• Core Java Concepts

• Object-Oriented Programming

• Collections

• Multithreading

• Exception Handling

• Java 8 Features

• Database Connectivity

• Framework Knowledge
      `,
    },


    {
      title: "Important Java Interview Questions",
      content: `
1. What is Java?


Java is a high-level, object-oriented programming language that runs on JVM.


2. Difference between JDK, JRE, and JVM?


JDK:

Development tools + JRE


JRE:

Libraries + JVM


JVM:

Executes Java bytecode


3. Why is Java platform independent?


Because Java code runs on JVM available for different platforms.
      `,
    },


    {
      title: "OOP Interview Questions",
      content: `
Common questions:


What is inheritance?


What is polymorphism?


Difference between abstraction and encapsulation.


What are interfaces?


What is method overriding?


What is method overloading?
      `,
    },


    {
      title: "Collections Interview Questions",
      content: `
Important topics:


• ArrayList vs LinkedList

• HashMap vs Hashtable

• HashSet vs TreeSet

• Iterator vs ListIterator

• Comparable vs Comparator
      `,
    },


    {
      title: "Multithreading Interview Questions",
      content: `
Common questions:


What is a thread?


Difference between process and thread.


What is synchronization?


What is deadlock?


Difference between Runnable and Thread class.
      `,
    },


    {
      title: "Java Coding Problems",
      content: `
Common Java programming problems:


• Reverse a String

• Check palindrome

• Find factorial

• Generate Fibonacci series

• Sort an array

• Find duplicate elements

• Count characters

• Reverse a number
      `,
    },


    {
      title: "Reverse a String Program",
      content: `
Reverse characters of a string.
      `,
      code: `class Main

{

public static void main(String[] args)

{

String str = "Java";


String reverse = "";


for(int i=str.length()-1;i>=0;i--)

{

reverse += str.charAt(i);

}


System.out.println(reverse);

}

}`,
      language: "java",
      output: "avaJ",
    },


    {
      title: "Palindrome Program",
      content: `
A palindrome is a word that reads the same forward and backward.
      `,
      code: `class Main

{

public static void main(String[] args)

{

String str = "madam";


String rev = "";


for(int i=str.length()-1;i>=0;i--)

{

rev += str.charAt(i);

}


if(str.equals(rev))

System.out.println(
"Palindrome"
);

else

System.out.println(
"Not Palindrome"
);

}

}`,
      language: "java",
      output: "Palindrome",
    },


    {
      title: "Factorial Program",
      content: `
Factorial of a number:


5! = 5 × 4 × 3 × 2 × 1
      `,
      code: `class Main

{

public static void main(String[] args)

{

int num = 5;

int fact = 1;


for(int i=1;i<=num;i++)

{

fact *= i;

}


System.out.println(fact);

}

}`,
      language: "java",
      output: "120",
    },


    {
      title: "Fibonacci Series Program",
      content: `
Fibonacci series:


0 1 1 2 3 5 8...
      `,
      code: `class Main

{

public static void main(String[] args)

{

int a = 0;

int b = 1;


for(int i=0;i<10;i++)

{

System.out.println(a);


int c = a+b;


a=b;

b=c;

}

}

}`,
      language: "java",
      output: "Fibonacci Series",
    },


    {
      title: "Sorting Array Program",
      content: `
Sorting arranges elements in ascending or descending order.
      `,
      code: `import java.util.Arrays;


class Main

{

public static void main(String[] args)

{

int arr[] = {

5,2,8,1

};


Arrays.sort(arr);


System.out.println(

Arrays.toString(arr)

);

}

}`,
      language: "java",
      output: "[1, 2, 5, 8]",
    },


    {
      title: "Data Structures in Java",
      content: `
Java provides built-in support for data structures.


Important structures:


• Arrays

• Linked List

• Stack

• Queue

• HashMap

• Tree

• Graph
      `,
    },


    {
      title: "Array Data Structure",
      content: `
Array stores multiple values of the same type.


Features:


• Fixed size

• Fast access

• Index based storage
      `,
    },


    {
      title: "Linked List",
      content: `
Linked List stores elements as nodes.


Each node contains:


• Data

• Reference to next node


Java provides:


LinkedList class
      `,
    },


    {
      title: "Stack Data Structure",
      content: `
Stack follows:


LIFO


Last In First Out


Operations:


push()

pop()

peek()
      `,
    },


    {
      title: "Queue Data Structure",
      content: `
Queue follows:


FIFO


First In First Out


Operations:


offer()

poll()

peek()
      `,
    },


    {
      title: "HashMap Data Structure",
      content: `
HashMap stores data in key-value pairs.


Features:


• Fast searching

• Unique keys

• Allows null values
      `,
      code: `HashMap<Integer,String> map =

new HashMap<>();


map.put(
1,
"Java"
);


System.out.println(

map.get(1)

);`,
      language: "java",
      output: "Java",
    },


    {
      title: "Algorithms in Java",
      content: `
Important algorithms:


Searching:


• Linear Search

• Binary Search


Sorting:


• Bubble Sort

• Selection Sort

• Insertion Sort

• Merge Sort

• Quick Sort
      `,
    },


    {
      title: "Binary Search Algorithm",
      content: `
Binary search finds elements in sorted arrays.


Time Complexity:


O(log n)
      `,
    },


    {
      title: "Java Competitive Programming",
      content: `
Java is widely used in competitive programming.


Important topics:


• Arrays

• Strings

• Recursion

• Dynamic Programming

• Graph Algorithms

• Mathematics
      `,
    },


    {
      title: "Java Project Ideas",
      content: `
Beginner Projects:


• Calculator

• Number Guessing Game

• Student Management System


Intermediate Projects:


• Banking Application

• Library Management System

• Chat Application


Advanced Projects:


• E-Commerce Backend

• REST API Application

• Microservices System
      `,
    },


    {
      title: "Java Career Roadmap",
      content: `
Complete Java developer roadmap:


Step 1:

Learn Core Java


Step 2:

Master OOP


Step 3:

Learn Collections


Step 4:

Learn Advanced Java


Step 5:

Learn SQL and JDBC


Step 6:

Learn Spring Boot


Step 7:

Build Projects


Step 8:

Prepare for Interviews
      `,
    },


    {
      title: "Java Developer Skills",
      content: `
A professional Java developer should know:


Programming:


✓ Java

✓ SQL

✓ Data Structures


Backend:


✓ Spring Boot

✓ Hibernate

✓ REST APIs


Tools:


✓ Git

✓ Maven

✓ Docker


Database:


✓ MySQL

✓ PostgreSQL
      `,
    },


    {
      title: "Complete Java Course Summary",
      content: `
Congratulations!


You have completed Java Programming from beginner to advanced level.


Covered Topics:


✓ Java Basics

✓ Variables and Data Types

✓ OOP Concepts

✓ Exception Handling

✓ Collections Framework

✓ Generics

✓ Lambda Expressions

✓ Stream API

✓ Multithreading

✓ JDBC

✓ Networking

✓ GUI Programming

✓ Spring Boot Basics

✓ Testing

✓ Projects

✓ Interview Preparation


You are now ready to build real-world Java applications.
      `,
    },


    {
      title: "Final Java Practice Challenge",
      content: `
Build a complete Java application using:


• OOP

• Collections

• File Handling

• Exception Handling

• Database Connectivity


Suggested Projects:


1. Online Banking System


2. Employee Management System


3. E-Commerce Backend


4. Student Portal


5. Chat Application


Use clean code and professional programming practices.
      `,
    },
  ],
};