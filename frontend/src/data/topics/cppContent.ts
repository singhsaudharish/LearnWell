export const cppContent = {
  title: "C++ Programming",
  description:
    "Learn C++ Programming from beginner to advanced with examples and practice questions.",

  sections: [
    {
      title: "Introduction to C++",
      content: `
C++ is a powerful, general-purpose programming language developed by Bjarne Stroustrup in 1985.

It is an extension of the C programming language and introduces Object-Oriented Programming (OOP) concepts.

C++ is widely used in:

• Software Development
• Game Development
• Operating Systems
• Embedded Systems
• Device Drivers
• Desktop Applications
• Competitive Programming
• High-Performance Computing

C++ combines the speed of C with modern programming concepts.
      `,
    },

    {
      title: "Features of C++",
      content: `
Major Features of C++:

• Object-Oriented Programming
• Fast Execution
• Platform Independent Source Code
• Rich Standard Library (STL)
• Function Overloading
• Operator Overloading
• Exception Handling
• Templates
• Dynamic Memory Allocation
• Multi-threading Support

Advantages:

✓ High Performance
✓ Memory Efficient
✓ Reusable Code
✓ Secure Programming
✓ Large Community Support
      `,
    },

    {
      title: "Basic Structure of a C++ Program",
      code: `#include <iostream>

using namespace std;

int main()
{
    cout << "Hello World";

    return 0;
}`,
      language: "cpp",
      output: "Hello World",
      tip: "Every C++ program starts execution from the main() function.",
    },

    {
      title: "Comments in C++",
      content: `
Comments improve code readability.

Types of comments:

1. Single Line Comment
2. Multi Line Comment

Comments are ignored by the compiler.
      `,
      code: `// Single Line Comment

/*
Multi Line
Comment
*/

#include <iostream>

using namespace std;

int main()
{
    cout << "Comments Example";

    return 0;
}`,
      language: "cpp",
      output: "Comments Example",
    },

    {
      title: "Variables",
      content: `
Variables are named memory locations used to store data.

Rules:

• Variable names cannot start with numbers.
• Spaces are not allowed.
• Keywords cannot be used.
• C++ is case-sensitive.

Examples:

age
salary
studentName
marks
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int age = 20;
    float salary = 35000.75;
    char grade = 'A';

    cout << age << endl;
    cout << salary << endl;
    cout << grade << endl;

    return 0;
}`,
      language: "cpp",
      output: `20
35000.8
A`,
    },

    {
      title: "Data Types",
      content: `
Common Data Types

int
Stores integers.

float
Stores decimal numbers.

double
Stores large decimal values.

char
Stores a single character.

bool
Stores true or false.

string
Stores text.

void
Represents no value.
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int number = 100;
    float price = 19.99;
    double pi = 3.1415926535;
    char grade = 'A';
    bool result = true;
    string name = "Harish";

    cout << number << endl;
    cout << price << endl;
    cout << pi << endl;
    cout << grade << endl;
    cout << result << endl;
    cout << name;

    return 0;
}`,
      language: "cpp",
      output: `100
19.99
3.14159
A
1
Harish`,
    },

    {
      title: "Constants",
      content: `
Constants are values that cannot be changed.

Use:

const keyword

Advantages:

• Prevents accidental modification
• Makes code safer
• Improves readability
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    const double PI = 3.14159;

    cout << PI;

    return 0;
}`,
      language: "cpp",
      output: "3.14159",
    },

    {
      title: "Operators",
      content: `
Types of Operators

Arithmetic
+ - * / %

Assignment
=
+=
-=

Comparison
==
!=
<
>
<=
>=

Logical
&&
||
!

Increment & Decrement
++
--
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int a = 20;
    int b = 10;

    cout << a + b << endl;
    cout << a - b << endl;
    cout << a * b << endl;
    cout << a / b << endl;
    cout << a % b;

    return 0;
}`,
      language: "cpp",
      output: `30
10
200
2
0`,
    },

    {
      title: "Input and Output",
      content: `
C++ uses:

cout → Output

cin → Input

Both are available through iostream.
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    string name;
    int age;

    cout << "Enter Name: ";
    cin >> name;

    cout << "Enter Age: ";
    cin >> age;

    cout << "Name: " << name << endl;
    cout << "Age: " << age;

    return 0;
}`,
      language: "cpp",
      output: `Enter Name: Harish
Enter Age: 21
Name: Harish
Age: 21`,
      tip: "Use getline() when reading full names with spaces.",
    },    {
      title: "If Statement",
      content: `
The if statement is used to execute a block of code when a condition is true.

Syntax:

if(condition)
{
    // code
}
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int age = 20;

    if(age >= 18)
    {
        cout << "Eligible to Vote";
    }

    return 0;
}`,
      language: "cpp",
      output: "Eligible to Vote",
      tip: "Use if when only one condition needs to be checked.",
    },

    {
      title: "If...Else Statement",
      content: `
The if...else statement executes one block if the condition is true and another block if it is false.
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int number = 7;

    if(number % 2 == 0)
    {
        cout << "Even";
    }
    else
    {
        cout << "Odd";
    }

    return 0;
}`,
      language: "cpp",
      output: "Odd",
    },

    {
      title: "Switch Statement",
      content: `
The switch statement selects one block of code from multiple choices.

It is useful instead of writing many if...else statements.
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int day = 3;

    switch(day)
    {
        case 1:
            cout << "Monday";
            break;

        case 2:
            cout << "Tuesday";
            break;

        case 3:
            cout << "Wednesday";
            break;

        default:
            cout << "Invalid";
    }

    return 0;
}`,
      language: "cpp",
      output: "Wednesday",
    },

    {
      title: "For Loop",
      content: `
A for loop repeats a block of code a fixed number of times.

Syntax:

for(initialization; condition; update)
{
    // code
}
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    for(int i = 1; i <= 5; i++)
    {
        cout << i << endl;
    }

    return 0;
}`,
      language: "cpp",
      output: `1
2
3
4
5`,
      tip: "Use for loops when the number of iterations is known.",
    },

    {
      title: "While Loop",
      content: `
A while loop executes as long as the condition remains true.
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int i = 1;

    while(i <= 5)
    {
        cout << i << endl;
        i++;
    }

    return 0;
}`,
      language: "cpp",
      output: `1
2
3
4
5`,
    },

    {
      title: "Do...While Loop",
      content: `
A do...while loop executes the code at least once before checking the condition.
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int i = 1;

    do
    {
        cout << i << endl;
        i++;

    } while(i <= 5);

    return 0;
}`,
      language: "cpp",
      output: `1
2
3
4
5`,
    },

    {
      title: "Break and Continue",
      content: `
break exits the loop immediately.

continue skips the current iteration and moves to the next one.
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    for(int i = 1; i <= 10; i++)
    {
        if(i == 5)
            break;

        cout << i << " ";
    }

    return 0;
}`,
      language: "cpp",
      output: "1 2 3 4",
    },

    {
      title: "Functions",
      content: `
Functions are reusable blocks of code.

Advantages:

• Code Reusability
• Easy Maintenance
• Better Readability
• Modular Programming
      `,
      code: `#include <iostream>

using namespace std;

int add(int a, int b)
{
    return a + b;
}

int main()
{
    cout << add(10,20);

    return 0;
}`,
      language: "cpp",
      output: "30",
      tip: "Write small functions that perform one task well.",
    },

    {
      title: "Function Overloading",
      content: `
C++ allows multiple functions with the same name but different parameters.
      `,
      code: `#include <iostream>

using namespace std;

int add(int a,int b)
{
    return a+b;
}

double add(double a,double b)
{
    return a+b;
}

int main()
{
    cout << add(10,20) << endl;
    cout << add(2.5,3.5);

    return 0;
}`,
      language: "cpp",
      output: `30
6`,
    },

    {
      title: "Recursion",
      content: `
Recursion is when a function calls itself.

Every recursive function must have a base condition.
      `,
      code: `#include <iostream>

using namespace std;

int factorial(int n)
{
    if(n==1)
        return 1;

    return n * factorial(n-1);
}

int main()
{
    cout << factorial(5);

    return 0;
}`,
      language: "cpp",
      output: "120",
    },

    {
      title: "Arrays",
      content: `
Arrays store multiple values of the same data type using one variable name.

Array indexing starts from 0.
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int numbers[5]={10,20,30,40,50};

    for(int i=0;i<5;i++)
    {
        cout<<numbers[i]<<" ";
    }

    return 0;
}`,
      language: "cpp",
      output: "10 20 30 40 50",
    },

    {
      title: "Multidimensional Arrays",
      content: `
A multidimensional array stores data in rows and columns.
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int matrix[2][2]={{1,2},{3,4}};

    for(int i=0;i<2;i++)
    {
        for(int j=0;j<2;j++)
        {
            cout<<matrix[i][j]<<" ";
        }

        cout<<endl;
    }

    return 0;
}`,
      language: "cpp",
      output: `1 2
3 4`,
    },

    {
      title: "Strings",
      content: `
The string class is used to store text.

It is available through the <string> library.
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    string name="Harish";

    cout<<name;

    return 0;
}`,
      language: "cpp",
      output: "Harish",
      tip: "Use getline() instead of cin when reading sentences with spaces.",
    },    {
      title: "Pointers",
      content: `
Pointers store the memory address of another variable.

The * operator is used to declare a pointer, while & returns the address of a variable.
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int number = 10;

    int *ptr = &number;

    cout << "Value: " << *ptr << endl;
    cout << "Address: " << ptr;

    return 0;
}`,
      language: "cpp",
      output: `Value: 10
Address: (memory address)`,
      tip: "Use pointers carefully to avoid accessing invalid memory.",
    },

    {
      title: "References",
      content: `
A reference is another name for an existing variable.

Changes made through the reference affect the original variable.
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    int number = 10;
    int &ref = number;

    ref = 20;

    cout << number;

    return 0;
}`,
      language: "cpp",
      output: "20",
    },

    {
      title: "Structures (struct)",
      content: `
A structure groups different data types into a single user-defined type.

Structures are commonly used to represent objects such as students or employees.
      `,
      code: `#include <iostream>

using namespace std;

struct Student
{
    string name;
    int age;
};

int main()
{
    Student s;

    s.name = "Harish";
    s.age = 20;

    cout << s.name << endl;
    cout << s.age;

    return 0;
}`,
      language: "cpp",
      output: `Harish
20`,
    },

    {
      title: "Classes and Objects",
      content: `
A class is a blueprint for creating objects.

Objects contain data members and member functions.
      `,
      code: `#include <iostream>

using namespace std;

class Student
{
public:
    string name;

    void display()
    {
        cout << "Name: " << name;
    }
};

int main()
{
    Student s;

    s.name = "Harish";
    s.display();

    return 0;
}`,
      language: "cpp",
      output: "Name: Harish",
      tip: "Classes are the foundation of Object-Oriented Programming in C++.",
    },

    {
      title: "Constructors",
      content: `
A constructor is a special member function that is called automatically when an object is created.

Constructors have the same name as the class.
      `,
      code: `#include <iostream>

using namespace std;

class Student
{
public:
    Student()
    {
        cout << "Constructor Called";
    }
};

int main()
{
    Student s;

    return 0;
}`,
      language: "cpp",
      output: "Constructor Called",
    },

    {
      title: "Destructor",
      content: `
A destructor is called automatically when an object goes out of scope.

It is used to release resources.
      `,
      code: `#include <iostream>

using namespace std;

class Demo
{
public:
    ~Demo()
    {
        cout << "Destructor Called";
    }
};

int main()
{
    Demo obj;

    return 0;
}`,
      language: "cpp",
      output: "Destructor Called",
    },

    {
      title: "Inheritance",
      content: `
Inheritance allows one class to acquire the properties and methods of another class.

It promotes code reuse.
      `,
      code: `#include <iostream>

using namespace std;

class Animal
{
public:
    void sound()
    {
        cout << "Animal Sound";
    }
};

class Dog : public Animal
{
};

int main()
{
    Dog d;
    d.sound();

    return 0;
}`,
      language: "cpp",
      output: "Animal Sound",
      tip: "Use inheritance when classes share common behavior.",
    },

    {
      title: "Polymorphism",
      content: `
Polymorphism allows the same function name to behave differently.

Runtime polymorphism is achieved using virtual functions.
      `,
      code: `#include <iostream>

using namespace std;

class Animal
{
public:
    virtual void sound()
    {
        cout << "Animal";
    }
};

class Dog : public Animal
{
public:
    void sound() override
    {
        cout << "Bark";
    }
};

int main()
{
    Animal *a = new Dog();
    a->sound();

    delete a;

    return 0;
}`,
      language: "cpp",
      output: "Bark",
    },

    {
      title: "File Handling",
      content: `
File handling allows programs to read from and write to files.

The fstream library provides file operations.
      `,
      code: `#include <iostream>
#include <fstream>

using namespace std;

int main()
{
    ofstream file("data.txt");

    file << "Hello World";

    file.close();

    cout << "File Created";

    return 0;
}`,
      language: "cpp",
      output: "File Created",
    },

    {
      title: "Exception Handling",
      content: `
Exception handling helps manage runtime errors without crashing the program.

C++ uses try, throw, and catch.
      `,
      code: `#include <iostream>

using namespace std;

int main()
{
    try
    {
        throw 404;
    }
    catch(int error)
    {
        cout << "Error Code: " << error;
    }

    return 0;
}`,
      language: "cpp",
      output: "Error Code: 404",
      tip: "Use exceptions for handling unexpected runtime errors gracefully.",
    },]};