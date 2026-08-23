export const typescriptContent = {
  title: "TypeScript Programming",
  description: " Learn TypeScript programming language, its features, and how to use it for building scalable applications.",
sections : [
{
  title: "Introduction to TypeScript",
  content: `
TypeScript is a strongly typed programming language built on top of JavaScript.

It was developed by Microsoft and released in 2012.

TypeScript adds:

• Static Typing

• Better Code Quality

• Error Detection

• Modern JavaScript Features

TypeScript code is compiled into JavaScript before running in browsers or Node.js.
  `,
},

{
  title: "Why Use TypeScript?",
  content: `
JavaScript is dynamically typed, which means errors can appear during runtime.

TypeScript detects many errors during development.

Benefits:

✓ Early Error Detection

✓ Better Code Maintainability

✓ Improved Developer Experience

✓ Better IDE Support

✓ Easier Large Application Development
  `,
},

{
  title: "TypeScript vs JavaScript",
  content: `
JavaScript:

• Dynamically Typed

• Errors Found at Runtime

• Flexible


TypeScript:

• Statically Typed

• Errors Found During Development

• More Structured

• Compiles to JavaScript
  `,
},

{
  title: "Installing TypeScript",
  content: `
TypeScript requires Node.js and npm.

Install TypeScript globally using npm.
  `,
  code: `npm install -g typescript`,
  language: "bash",
  output: `
TypeScript Installed
  `,
},

{
  title: "Checking TypeScript Version",
  content: `
The TypeScript compiler command is:

tsc

It is used to compile TypeScript files into JavaScript.
  `,
  code: `tsc --version`,
  language: "bash",
  output: `
Version Displayed
  `,
},

{
  title: "TypeScript Compiler",
  content: `
The TypeScript Compiler (tsc) converts TypeScript code into JavaScript.

Process:

TypeScript File (.ts)

↓

TypeScript Compiler

↓

JavaScript File (.js)
  `,
  code: `tsc app.ts`,
  language: "bash",
  output: `
app.js Generated
  `,
},

{
  title: "Creating First TypeScript Program",
  content: `
A TypeScript file uses the .ts extension.
  `,
  code: `let message: string = "Hello TypeScript";

console.log(message);`,
  language: "typescript",
  output: `
Hello TypeScript
  `,
},

{
  title: "tsconfig.json",
  content: `
tsconfig.json is a configuration file for TypeScript projects.

It controls:

• Compiler Options

• JavaScript Version

• File Locations

• Strict Checking
  `,
  code: `tsc --init`,
  language: "bash",
  output: `
tsconfig.json Created
  `,
},

{
  title: "Basic TypeScript Syntax",
  content: `
TypeScript syntax is similar to JavaScript.

The main difference is adding type information.
  `,
  code: `let username: string = "John";

let age: number = 25;

console.log(username, age);`,
  language: "typescript",
  output: `
John 25
  `,
},

{
  title: "Variables in TypeScript",
  content: `
Variables store data values.

TypeScript supports:

• let

• const

• var
  `,
  code: `let name: string = "Alex";

const pi: number = 3.14;`,
  language: "typescript",
  output: `
Variables Created
  `,
},

{
  title: "Type Annotations",
  content: `
Type annotations explicitly define the data type of a variable.

Syntax:

variableName: type
  `,
  code: `let city: string = "London";

let population: number = 9000000;`,
  language: "typescript",
  output: `
Variables With Types
  `,
},

{
  title: "Type Inference",
  content: `
TypeScript can automatically detect types based on assigned values.

This is called type inference.
  `,
  code: `let language = "TypeScript";

console.log(language);`,
  language: "typescript",
  output: `
TypeScript
  `,
},

{
  title: "String Type",
  content: `
The string type stores text values.

Strings can use:

• Double quotes

• Single quotes

• Template literals
  `,
  code: `let username: string = "Developer";

console.log(username);`,
  language: "typescript",
  output: `
Developer
  `,
},

{
  title: "Number Type",
  content: `
The number type stores numeric values.

It supports:

• Integers

• Floating point numbers
  `,
  code: `let score: number = 95;

let price: number = 99.99;`,
  language: "typescript",
  output: `
Number Values Stored
  `,
},

{
  title: "Boolean Type",
  content: `
Boolean stores true or false values.

Commonly used in conditions.
  `,
  code: `let isActive: boolean = true;

console.log(isActive);`,
  language: "typescript",
  output: `
true
  `,
},

{
  title: "Array Type",
  content: `
Arrays store multiple values of the same type.

Two syntaxes are available.
  `,
  code: `let numbers: number[] = [1,2,3];

let names: Array<string> = [
"John",
"Alex"
];`,
  language: "typescript",
  output: `
Array Created
  `,
},

{
  title: "Tuple Type",
  content: `
A tuple is an array with fixed number of elements and fixed types.

The order of values matters.
  `,
  code: `let user: [string, number];

user = [
"John",
25
];

console.log(user);`,
  language: "typescript",
  output: `
["John",25]
  `,
},

{
  title: "Enum Type",
  content: `
Enum allows developers to create a collection of named constants.

It improves code readability.
  `,
  code: `enum Role {

Admin,

User,

Guest

}


let userRole: Role = Role.Admin;

console.log(userRole);`,
  language: "typescript",
  output: `
0
  `,
},

{
  title: "Any Type",
  content: `
The any type disables type checking.

It allows any value.

It should be avoided when possible.
  `,
  code: `let data: any = 10;

data = "Hello";

data = true;`,
  language: "typescript",
  output: `
Different Types Allowed
  `,
},

{
  title: "Unknown Type",
  content: `
unknown is a safer alternative to any.

Values must be checked before use.
  `,
  code: `let value: unknown = "Hello";


if(typeof value === "string")
{
console.log(value);
}`,
  language: "typescript",
  output: `
Hello
  `,
},

{
  title: "Void Type",
  content: `
void represents functions that do not return a value.
  `,
  code: `function showMessage(): void {

console.log("Hello");

}`,
  language: "typescript",
  output: `
Hello
  `,
},

{
  title: "Never Type",
  content: `
never represents values that never occur.

Common uses:

• Errors

• Infinite loops
  `,
  code: `function error(): never {

throw new Error(
"Something went wrong"
);

}`,
  language: "typescript",
  output: `
Error Thrown
  `,
},

{
  title: "Null and Undefined Types",
  content: `
TypeScript has separate types for:

null

undefined

They represent missing values.
  `,
  code: `let value: null = null;

let data: undefined = undefined;`,
  language: "typescript",
  output: `
Null and Undefined Values
  `,
},

{
  title: "Type Alias",
  content: `
Type aliases create custom names for types.

They improve code readability.
  `,
  code: `type UserID = number;


let id: UserID = 101;

console.log(id);`,
  language: "typescript",
  output: `
101
  `,
},

{
  title: "Interface Introduction",
  content: `
Interfaces define the structure of objects.

They are commonly used in large TypeScript applications.
  `,
  code: `interface User {

name: string;

age: number;

}


let user: User = {

name:"John",

age:25

};`,
  language: "typescript",
  output: `
Object Created
  `,
},

{
  title: "Functions in TypeScript",
  content: `
Functions can have typed parameters and return values.
  `,
  code: `function add(
a:number,
b:number
):number
{

return a+b;

}


console.log(add(5,10));`,
  language: "typescript",
  output: `
15
  `,
},

{
  title: "Function Parameters",
  content: `
Parameters can have specific data types.

TypeScript prevents incorrect arguments.
  `,
  code: `function greet(
name:string
)
{

console.log(
"Hello "+name
);

}


greet("Alex");`,
  language: "typescript",
  output: `
Hello Alex
  `,
},

{
  title: "Function Return Types",
  content: `
Return types define what a function returns.
  `,
  code: `function square(
num:number
):number
{

return num*num;

}


console.log(square(5));`,
  language: "typescript",
  output: `
25
  `,
},

{
  title: "Optional Parameters",
  content: `
Optional parameters may or may not receive values.

They use the ? symbol.
  `,
  code: `function message(
name?:string
)
{

console.log(name);

}


message();`,
  language: "typescript",
  output: `
undefined
  `,
},

{
  title: "Default Parameters",
  content: `
Default parameters provide fallback values.
  `,
  code: `function greet(
name:string="User"
)
{

console.log(name);

}


greet();`,
  language: "typescript",
  output: `
User
  `,
},{
  title: "Union Types in TypeScript",
  content: `
Union types allow a variable to store multiple possible types.

The pipe (|) symbol is used to create union types.

Example:

A value can be either string or number.
  `,
  code: `let id: string | number;

id = 101;

id = "USER101";

console.log(id);`,
  language: "typescript",
  output: `
USER101
  `,
},

{
  title: "Union Types with Functions",
  content: `
Functions can accept multiple types using union types.

This provides flexibility while maintaining type safety.
  `,
  code: `function display(
value: string | number
)
{

console.log(value);

}


display("Hello");

display(100);`,
  language: "typescript",
  output: `
Hello
100
  `,
},

{
  title: "Intersection Types",
  content: `
Intersection types combine multiple types into one.

The & symbol is used.

An object must contain properties from all combined types.
  `,
  code: `interface Person {

name:string;

}


interface Employee {

employeeId:number;

}


type Staff = Person & Employee;


const user: Staff = {

name:"John",

employeeId:101

};`,
  language: "typescript",
  output: `
Staff Object Created
  `,
},

{
  title: "Literal Types",
  content: `
Literal types allow only specific values.

They make code more predictable.
  `,
  code: `let status:
"success" | "error";


status = "success";

console.log(status);`,
  language: "typescript",
  output: `
success
  `,
},

{
  title: "Type Guards",
  content: `
Type guards check the type of a value before using it.

Common methods:

• typeof

• instanceof

• in operator
  `,
  code: `function print(
value:string | number
)
{

if(typeof value === "string")
{

console.log(value.toUpperCase());

}

else
{

console.log(value + 10);

}

}`,
  language: "typescript",
  output: `
Type Checked Value
  `,
},

{
  title: "typeof Type Guard",
  content: `
typeof checks primitive data types.

It works with:

• string

• number

• boolean

• object
  `,
  code: `let value:
string | number = "Hello";


if(typeof value === "string")
{

console.log(value.length);

}`,
  language: "typescript",
  output: `
5
  `,
},

{
  title: "instanceof Type Guard",
  content: `
instanceof checks whether an object belongs to a specific class.
  `,
  code: `class User {}

let user = new User();


if(user instanceof User)
{

console.log("Valid User");

}`,
  language: "typescript",
  output: `
Valid User
  `,
},

{
  title: "Generics Introduction",
  content: `
Generics allow creating reusable components that work with different types.

They provide type safety while keeping flexibility.
  `,
  code: `function identity<T>(
value:T
):T
{

return value;

}


console.log(identity<string>("Hello"));

console.log(identity<number>(100));`,
  language: "typescript",
  output: `
Hello
100
  `,
},

{
  title: "Generic Functions",
  content: `
Generic functions use type parameters.

The common naming convention is:

<T>

<T> represents a dynamic type.
  `,
  code: `function getArray<T>(
items:T[]
):T[]
{

return items;

}


let numbers =
getArray<number>([1,2,3]);`,
  language: "typescript",
  output: `
[1,2,3]
  `,
},

{
  title: "Generic Interfaces",
  content: `
Interfaces can also use generics.

They allow reusable object structures.
  `,
  code: `interface Box<T>
{

value:T;

}


let numberBox:Box<number> = {

value:100

};


let stringBox:Box<string> = {

value:"Hello"

};`,
  language: "typescript",
  output: `
Generic Objects Created
  `,
},

{
  title: "Generic Constraints",
  content: `
Generic constraints restrict the types that can be used.

The extends keyword creates restrictions.
  `,
  code: `function length<T extends string>
(
value:T
)
{

return value.length;

}


console.log(length("Hello"));`,
  language: "typescript",
  output: `
5
  `,
},

{
  title: "Classes in TypeScript",
  content: `
Classes are blueprints for creating objects.

TypeScript classes support:

• Properties

• Methods

• Constructors

• Access Modifiers
  `,
  code: `class Student
{

name:string;


constructor(name:string)
{

this.name=name;

}

}


let s =
new Student("Alex");`,
  language: "typescript",
  output: `
Student Object Created
  `,
},

{
  title: "Class Constructor",
  content: `
A constructor initializes class properties when an object is created.
  `,
  code: `class Car
{

brand:string;


constructor(
brand:string
)
{

this.brand=brand;

}

}


let car =
new Car("BMW");`,
  language: "typescript",
  output: `
BMW
  `,
},

{
  title: "Access Modifiers",
  content: `
Access modifiers control visibility of class members.

Types:

• public

• private

• protected
  `,
},

{
  title: "Public Modifier",
  content: `
Public members can be accessed anywhere.

It is the default modifier.
  `,
  code: `class User
{

public name:string = "John";

}


let user =
new User();


console.log(user.name);`,
  language: "typescript",
  output: `
John
  `,
},

{
  title: "Private Modifier",
  content: `
Private members can only be accessed inside the class.
  `,
  code: `class Account
{

private balance:number=500;

}


let acc =
new Account();`,
  language: "typescript",
  output: `
Private Property Created
  `,
},

{
  title: "Protected Modifier",
  content: `
Protected members can be accessed inside the class and subclasses.
  `,
  code: `class Parent
{

protected value:number=10;

}


class Child extends Parent
{

show()
{

console.log(this.value);

}

}`,
  language: "typescript",
  output: `
Protected Value Accessed
  `,
},

{
  title: "Inheritance in TypeScript",
  content: `
Inheritance allows one class to reuse another class properties and methods.

The extends keyword is used.
  `,
  code: `class Animal
{

sound()
{

console.log("Sound");

}

}


class Dog extends Animal
{


}


let dog =
new Dog();

dog.sound();`,
  language: "typescript",
  output: `
Sound
  `,
},

{
  title: "Method Overriding",
  content: `
Child classes can provide their own implementation of parent methods.
  `,
  code: `class Animal
{

move()
{

console.log("Walking");

}

}


class Bird extends Animal
{

move()
{

console.log("Flying");

}

}


let b =
new Bird();

b.move();`,
  language: "typescript",
  output: `
Flying
  `,
},

{
  title: "Abstract Classes",
  content: `
Abstract classes define a base structure for other classes.

They cannot be directly instantiated.
  `,
  code: `abstract class Shape
{

abstract area():number;

}


class Circle extends Shape
{

area()
{

return 10;

}

}`,
  language: "typescript",
  output: `
Abstract Class Implemented
  `,
},

{
  title: "Interfaces with Classes",
  content: `
Interfaces define rules that classes must follow.

A class uses the implements keyword.
  `,
  code: `interface Printable
{

print():void;

}


class Document implements Printable
{

print()
{

console.log("Printing");

}

}`,
  language: "typescript",
  output: `
Printing
  `,
},

{
  title: "Modules in TypeScript",
  content: `
Modules allow code separation into multiple files.

They improve:

• Organization

• Reusability

• Maintenance
  `,
},

{
  title: "Export in TypeScript",
  content: `
export makes variables, functions, or classes available to other files.
  `,
  code: `export const name =
"TypeScript";`,
  language: "typescript",
  output: `
Export Created
  `,
},

{
  title: "Import in TypeScript",
  content: `
import brings exported code into another file.
  `,
  code: `import { name }
from "./data";


console.log(name);`,
  language: "typescript",
  output: `
TypeScript
  `,
},

{
  title: "Namespaces in TypeScript",
  content: `
Namespaces organize related code inside a single scope.

They help avoid naming conflicts.
  `,
  code: `namespace MathTools
{

export function add(
a:number,
b:number
)
{

return a+b;

}

}`,
  language: "typescript",
  output: `
Namespace Created
  `,
},

{
  title: "Utility Types Introduction",
  content: `
Utility types are built-in TypeScript tools for transforming types.

Common utility types:

• Partial

• Required

• Readonly

• Pick

• Omit

• Record
  `,
},

{
  title: "Partial Utility Type",
  content: `
Partial makes all properties optional.
  `,
  code: `interface User
{

name:string;

age:number;

}


let updateUser:
Partial<User> = {

name:"Alex"

};`,
  language: "typescript",
  output: `
Partial Object Created
  `,
},

{
  title: "Required Utility Type",
  content: `
Required makes all optional properties mandatory.
  `,
  code: `interface Config
{

name?:string;

}


let app:
Required<Config> = {

name:"App"

};`,
  language: "typescript",
  output: `
Required Object Created
  `,
},

{
  title: "Readonly Utility Type",
  content: `
Readonly prevents properties from being modified.
  `,
  code: `interface User
{

readonly id:number;

}


let user:User = {

id:1

};`,
  language: "typescript",
  output: `
Readonly Property Created
  `,
},

{
  title: "Pick Utility Type",
  content: `
Pick creates a new type by selecting specific properties.
  `,
  code: `interface User
{

name:string;

age:number;

email:string;

}


type UserName =
Pick<User,"name">;`,
  language: "typescript",
  output: `
Selected Property Type Created
  `,
},

{
  title: "Omit Utility Type",
  content: `
Omit creates a new type by removing specific properties.
  `,
  code: `type UserWithoutEmail =
Omit<User,"email">;`,
  language: "typescript",
  output: `
Property Removed
  `,
},

{
  title: "Record Utility Type",
  content: `
Record creates object types with specific keys and values.
  `,
  code: `type Users =
Record<string,number>;


let data:Users = {

John:100

};`,
  language: "typescript",
  output: `
Record Created
  `,
},{
  title: "Introduction to TypeScript with Frontend Development",
  content: `
TypeScript is widely used in frontend development to build scalable applications.

Popular frontend technologies with TypeScript:

• React

• Angular

• Vue

• Next.js

Benefits:

• Better Component Safety

• Improved Code Completion

• Easier Debugging
  `,
},

{
  title: "TypeScript with HTML",
  content: `
TypeScript can interact with HTML elements using the DOM API.

The DOM represents the structure of a webpage.
  `,
  code: `const title =
document.getElementById("title");


title!.innerHTML =
"Hello TypeScript";`,
  language: "typescript",
  output: `
HTML Updated
  `,
},

{
  title: "DOM Element Typing",
  content: `
TypeScript provides specific types for DOM elements.

Examples:

• HTMLElement

• HTMLInputElement

• HTMLButtonElement

• HTMLFormElement
  `,
  code: `const input:
HTMLInputElement =
document.querySelector("#name")!;


input.value = "John";`,
  language: "typescript",
  output: `
Input Value Updated
  `,
},

{
  title: "TypeScript Event Handling",
  content: `
Events can be typed in TypeScript.

Common events:

• click

• submit

• change

• input
  `,
  code: `const button =
document.querySelector("button");


button?.addEventListener(
"click",
(event: MouseEvent)=>{

console.log("Clicked");

}
);`,
  language: "typescript",
  output: `
Clicked
  `,
},

{
  title: "TypeScript with Forms",
  content: `
TypeScript helps manage form values safely.

It prevents incorrect data handling.
  `,
  code: `const form =
document.querySelector("form");


form?.addEventListener(
"submit",
(event:SubmitEvent)=>{

event.preventDefault();

console.log("Form Submitted");

}
);`,
  language: "typescript",
  output: `
Form Submitted
  `,
},

{
  title: "Introduction to React with TypeScript",
  content: `
React with TypeScript uses TSX files.

File extension:

.tsx

Benefits:

• Type Safe Components

• Better Props Handling

• Better Developer Experience
  `,
},

{
  title: "Creating React TypeScript Component",
  content: `
React components written in TypeScript use TSX syntax.
  `,
  code: `function App()
{

return (

<h1>
Hello React TypeScript
</h1>

);

}


export default App;`,
  language: "tsx",
  output: `
Component Created
  `,
},

{
  title: "React Component Props Typing",
  content: `
Props define data passed from parent components.

TypeScript allows defining prop types using interfaces.
  `,
  code: `interface UserProps
{

name:string;

age:number;

}


const User =
(
props:UserProps
)=>
{

return (

<h2>
{props.name}
</h2>

);

};`,
  language: "tsx",
  output: `
Typed Props Component
  `,
},

{
  title: "Using Props Destructuring",
  content: `
Props can be destructured for cleaner code.
  `,
  code: `interface Props
{

title:string;

}


const Card =
({
title}:Props)=>
{

return <h1>{title}</h1>;

};`,
  language: "tsx",
  output: `
Title Displayed
  `,
},

{
  title: "React State Typing",
  content: `
useState can be typed using TypeScript generics.

Syntax:

useState<Type>()
  `,
  code: `import {useState}
from "react";


const [count,setCount] =
useState<number>(0);`,
  language: "tsx",
  output: `
State Created
  `,
},

{
  title: "useState with Objects",
  content: `
Objects in state should have defined interfaces.
  `,
  code: `interface User
{

name:string;

age:number;

}


const [user,setUser] =
useState<User>({

name:"John",

age:20

});`,
  language: "tsx",
  output: `
Object State Created
  `,
},

{
  title: "useState with Arrays",
  content: `
Arrays can also be typed using generics.
  `,
  code: `const [items,setItems] =
useState<string[]>([]);


setItems([
"React",
"TypeScript"
]);`,
  language: "tsx",
  output: `
Array State Updated
  `,
},

{
  title: "React Event Typing",
  content: `
React events have built-in TypeScript types.

Examples:

• MouseEvent

• ChangeEvent

• FormEvent
  `,
  code: `import {
ChangeEvent
}
from "react";


function handleChange(
event:ChangeEvent<HTMLInputElement>
)
{

console.log(event.target.value);

}`,
  language: "tsx",
  output: `
Input Value Received
  `,
},

{
  title: "Typing Button Events",
  content: `
Buttons use MouseEvent types.
  `,
  code: `import {
MouseEvent
}
from "react";


const clickHandler =
(
event:MouseEvent<HTMLButtonElement>
)=>
{

console.log("Clicked");

};`,
  language: "tsx",
  output: `
Button Event Typed
  `,
},

{
  title: "Typing Forms in React",
  content: `
Forms commonly use FormEvent.

It prevents default browser behavior.
  `,
  code: `import {
FormEvent
}
from "react";


function submit(
event:FormEvent<HTMLFormElement>
)
{

event.preventDefault();

}`,
  language: "tsx",
  output: `
Form Typed
  `,
},

{
  title: "useRef with TypeScript",
  content: `
useRef stores mutable values or DOM references.

Types must be defined.
  `,
  code: `import {
useRef
}
from "react";


const inputRef =
useRef<HTMLInputElement>(null);`,
  language: "tsx",
  output: `
Reference Created
  `,
},

{
  title: "useEffect with TypeScript",
  content: `
useEffect works the same way but supports typed data.
  `,
  code: `import {
useEffect
}
from "react";


useEffect(()=>{

console.log(
"Component Loaded"
);

},[]);`,
  language: "tsx",
  output: `
Effect Executed
  `,
},

{
  title: "Custom Hooks with TypeScript",
  content: `
Custom hooks can have typed parameters and return values.
  `,
  code: `function useCounter()
{

let count:number = 0;


return count;

}`,
  language: "typescript",
  output: `
Custom Hook Created
  `,
},

{
  title: "TypeScript with API Calls",
  content: `
TypeScript improves API data handling.

Interfaces define API response structure.
  `,
  code: `interface User
{

id:number;

name:string;

}


fetch("/api/user")
.then(
response=>response.json()
)
.then(
(data:User)=>{

console.log(data.name);

}
);`,
  language: "typescript",
  output: `
API Data Received
  `,
},

{
  title: "Axios with TypeScript",
  content: `
Axios supports generic types for API responses.

It provides better type safety.
  `,
  code: `import axios from "axios";


interface User
{

id:number;

name:string;

}


axios.get<User>(
"/users/1"
)
.then(response=>{

console.log(
response.data.name
);

});`,
  language: "typescript",
  output: `
Typed API Response
  `,
},

{
  title: "Handling API Errors",
  content: `
TypeScript helps handle unknown errors safely.
  `,
  code: `try
{

throw new Error(
"Failed"
);

}
catch(error:unknown)
{

console.log(error);

}`,
  language: "typescript",
  output: `
Error Handled
  `,
},

{
  title: "TypeScript Configuration for React",
  content: `
React TypeScript projects use tsconfig.json.

Important options:

• strict

• jsx

• target

• module

• moduleResolution
  `,
},

{
  title: "Vite React TypeScript Setup",
  content: `
Vite provides a fast way to create React TypeScript projects.
  `,
  code: `npm create vite@latest app

Select:

React

TypeScript`,
  language: "bash",
  output: `
React TypeScript Project Created
  `,
},

{
  title: "TypeScript File Extensions",
  content: `
Common TypeScript extensions:

.ts

Used for normal TypeScript files.


.tsx

Used for TypeScript files containing JSX.
  `,
},

{
  title: "TypeScript with Next.js",
  content: `
Next.js has built-in TypeScript support.

Benefits:

• Server Components

• API Routes

• Type Safe Routing

• Better Performance
  `,
},

{
  title: "Frontend TypeScript Best Practices",
  content: `
Best practices:

✓ Avoid any type

✓ Use Interfaces

✓ Enable Strict Mode

✓ Type API Responses

✓ Reuse Types

✓ Keep Components Small
  `,
},

{
  title: "Frontend TypeScript Project Ideas",
  content: `
Practice projects:

• Todo Application

• Weather Dashboard

• E-commerce UI

• Admin Dashboard

• Portfolio Website

• Chat Application

• Learning Management System
  `,
},{
  title: "Introduction to TypeScript Backend Development",
  content: `
TypeScript is widely used for backend development because it provides type safety and better maintainability.

Popular backend technologies with TypeScript:

• Node.js

• Express.js

• NestJS

• MongoDB

• PostgreSQL

Benefits:

• Fewer Runtime Errors

• Better Code Organization

• Easier Team Development

• Improved Scalability
  `,
},

{
  title: "TypeScript with Node.js",
  content: `
Node.js allows JavaScript to run outside the browser.

TypeScript adds static typing to Node.js applications.

Common uses:

• REST APIs

• Backend Services

• Real-Time Applications

• Microservices
  `,
},

{
  title: "Creating Node.js TypeScript Project",
  content: `
Steps to create a TypeScript Node.js project:

1. Create project

2. Initialize npm

3. Install TypeScript

4. Configure compiler

5. Create source files
  `,
  code: `mkdir backend

cd backend

npm init -y

npm install typescript ts-node @types/node

npx tsc --init`,
  language: "bash",
  output: `
Node.js TypeScript Project Created
  `,
},

{
  title: "Node.js TypeScript Project Structure",
  content: `
A common backend structure:

src/

 ├── controllers/

 ├── routes/

 ├── models/

 ├── middleware/

 ├── services/

 ├── utils/

 └── server.ts
  `,
},

{
  title: "tsconfig.json for Backend",
  content: `
Important TypeScript compiler options for backend projects:

target:

JavaScript version


module:

Module system


strict:

Enable type checking


outDir:

Compiled output folder
  `,
},

{
  title: "Installing Express with TypeScript",
  content: `
Express is a popular Node.js framework for creating APIs.

Install Express and TypeScript types.
  `,
  code: `npm install express

npm install -D @types/express`,
  language: "bash",
  output: `
Express Installed
  `,
},

{
  title: "Creating Express Server with TypeScript",
  content: `
A basic Express server written in TypeScript.
  `,
  code: `import express from "express";


const app = express();


app.get("/",(req,res)=>{

res.send(
"API Running"
);

});


app.listen(5000,()=>{

console.log(
"Server Started"
);

});`,
  language: "typescript",
  output: `
Server Started
  `,
},

{
  title: "Express Request and Response Types",
  content: `
Express provides built-in types for:

• Request

• Response

• NextFunction
  `,
  code: `import {
Request,
Response
}
from "express";


const controller = 
(
req:Request,
res:Response
)=>
{

res.json({
message:"Success"
});

};`,
  language: "typescript",
  output: `
Typed Response Sent
  `,
},

{
  title: "Express Router with TypeScript",
  content: `
Routes separate API endpoints into different files.

This improves project organization.
  `,
  code: `import {
Router
}
from "express";


const router =
Router();


router.get(
"/users",
(req,res)=>{

res.json([]);

});


export default router;`,
  language: "typescript",
  output: `
Router Created
  `,
},

{
  title: "Controller Pattern",
  content: `
Controllers contain business logic for API requests.

Benefits:

• Clean Code

• Easy Testing

• Better Organization
  `,
  code: `export const getUsers =
(
req:Request,
res:Response
)=>
{

res.json([
"John",
"Alex"
]);

};`,
  language: "typescript",
  output: `
Controller Created
  `,
},

{
  title: "Middleware with TypeScript",
  content: `
Middleware functions run between request and response.

Common uses:

• Authentication

• Logging

• Validation

• Error Handling
  `,
},

{
  title: "Custom Middleware Typing",
  content: `
Middleware uses Request, Response and NextFunction types.
  `,
  code: `import {
Request,
Response,
NextFunction
}
from "express";


const logger =
(
req:Request,
res:Response,
next:NextFunction
)=>
{

console.log(
req.url
);

next();

};`,
  language: "typescript",
  output: `
Middleware Executed
  `,
},

{
  title: "Environment Variables in TypeScript",
  content: `
Environment variables store sensitive configuration.

Examples:

• Database URL

• API Keys

• JWT Secret

• Server Port
  `,
},

{
  title: "Using dotenv with TypeScript",
  content: `
dotenv loads environment variables from .env files.
  `,
  code: `npm install dotenv`,
  language: "bash",
  output: `
dotenv Installed
  `,
},

{
  title: "Reading Environment Variables",
  content: `
process.env stores environment variables.

TypeScript requires checking values because they can be undefined.
  `,
  code: `import dotenv from "dotenv";


dotenv.config();


const port =
process.env.PORT || 5000;`,
  language: "typescript",
  output: `
Port Loaded
  `,
},

{
  title: "Database Integration with TypeScript",
  content: `
TypeScript can work with different databases.

Popular choices:

• MongoDB

• PostgreSQL

• MySQL

• Redis
  `,
},

{
  title: "MongoDB with TypeScript",
  content: `
MongoDB is a NoSQL database commonly used with Node.js.

Mongoose provides TypeScript support for MongoDB models.
  `,
},

{
  title: "Installing Mongoose",
  content: `
Mongoose provides schema and model management for MongoDB.
  `,
  code: `npm install mongoose`,
  language: "bash",
  output: `
Mongoose Installed
  `,
},

{
  title: "Creating Mongoose Interface",
  content: `
Interfaces define the structure of database documents.
  `,
  code: `interface IUser
{

name:string;

email:string;

age:number;

}`,
  language: "typescript",
  output: `
Interface Created
  `,
},

{
  title: "Creating Mongoose Model",
  content: `
Models represent database collections.
  `,
  code: `import mongoose from "mongoose";


const userSchema =
new mongoose.Schema({

name:String,

email:String,

age:Number

});


const User =
mongoose.model(
"User",
userSchema
);`,
  language: "typescript",
  output: `
Model Created
  `,
},

{
  title: "PostgreSQL with TypeScript",
  content: `
PostgreSQL is a relational database used for structured data.

Popular libraries:

• Prisma

• TypeORM

• Sequelize
  `,
},

{
  title: "Prisma with TypeScript",
  content: `
Prisma is a modern database ORM.

Features:

• Type Safe Queries

• Auto Completion

• Database Migration
  `,
},

{
  title: "Authentication in TypeScript Backend",
  content: `
Authentication verifies user identity.

Common methods:

• JWT Authentication

• Session Authentication

• OAuth
  `,
},

{
  title: "JWT Authentication",
  content: `
JWT (JSON Web Token) is commonly used for securing APIs.

Flow:

1. User Login

2. Server Generates Token

3. Client Stores Token

4. Token Sent With Requests
  `,
},

{
  title: "JWT with TypeScript",
  content: `
jsonwebtoken library creates and verifies tokens.
  `,
  code: `npm install jsonwebtoken

npm install -D @types/jsonwebtoken`,
  language: "bash",
  output: `
JWT Installed
  `,
},

{
  title: "Creating JWT Token",
  content: `
JWT tokens contain user information securely.
  `,
  code: `import jwt from "jsonwebtoken";


const token =
jwt.sign(
{
id:1
},
"secret"
);`,
  language: "typescript",
  output: `
Token Created
  `,
},

{
  title: "Password Encryption",
  content: `
Passwords should never be stored directly.

bcrypt is used for hashing passwords.
  `,
  code: `npm install bcrypt

npm install -D @types/bcrypt`,
  language: "bash",
  output: `
bcrypt Installed
  `,
},

{
  title: "Error Handling in Express",
  content: `
Error handling middleware manages application errors.

Benefits:

• Better Debugging

• Clean Responses

• Improved Security
  `,
},

{
  title: "Custom Error Handler",
  content: `
Express error middleware uses four parameters.
  `,
  code: `const errorHandler =
(
err:any,
req:Request,
res:Response,
next:NextFunction
)=>
{

res.status(500)
.json({

message:err.message

});

};`,
  language: "typescript",
  output: `
Error Handled
  `,
},

{
  title: "REST API Development with TypeScript",
  content: `
REST APIs allow communication between frontend and backend.

Common HTTP methods:

GET

POST

PUT

PATCH

DELETE
  `,
},

{
  title: "TypeScript Backend Best Practices",
  content: `
Best practices:

✓ Enable strict mode

✓ Avoid any

✓ Use interfaces

✓ Separate controllers and services

✓ Validate user input

✓ Handle errors properly

✓ Protect environment variables

✓ Write reusable code
  `,
},

{
  title: "Backend TypeScript Project Ideas",
  content: `
Practice projects:

• Authentication API

• E-commerce Backend

• Blog API

• Chat Application

• Learning Management System

• Task Management API

• File Upload Service
  `,
},{
  title: "Introduction to Professional TypeScript Development",
  content: `
Professional TypeScript development focuses on building scalable, maintainable, and production-ready applications.

Advanced TypeScript is used in:

• Enterprise Applications

• Full Stack Development

• Cloud Applications

• Large React Projects

• Backend Systems

• Open Source Libraries
  `,
},

{
  title: "TypeScript Design Patterns",
  content: `
Design patterns are reusable solutions for common software problems.

Common TypeScript patterns:

• Singleton Pattern

• Factory Pattern

• Observer Pattern

• Strategy Pattern

• Repository Pattern
  `,
},

{
  title: "Singleton Pattern",
  content: `
Singleton ensures that only one instance of a class exists.

Common uses:

• Database Connection

• Configuration Manager

• Logger
  `,
  code: `class Database {

private static instance:
Database;


private constructor(){}


static getInstance(){

if(!Database.instance)
{

Database.instance =
new Database();

}

return Database.instance;

}

}


const db =
Database.getInstance();`,
  language: "typescript",
  output: `
Single Instance Created
  `,
},

{
  title: "Factory Pattern",
  content: `
Factory pattern creates objects without exposing object creation logic.

Benefits:

• Flexible Code

• Easier Maintenance
  `,
  code: `interface Vehicle {

drive():void;

}


class Car implements Vehicle {

drive(){

console.log(
"Driving Car"
);

}

}


class VehicleFactory {

create(type:string)
{

if(type==="car")
{

return new Car();

}

}

}`,
  language: "typescript",
  output: `
Object Created
  `,
},

{
  title: "Repository Pattern",
  content: `
Repository pattern separates database logic from application logic.

Used in:

• Backend Applications

• APIs

• Enterprise Systems
  `,
},

{
  title: "Clean Code Principles",
  content: `
Clean code makes applications easier to understand and maintain.

Principles:

• Meaningful Names

• Small Functions

• Avoid Duplicate Code

• Proper Typing

• Clear Structure
  `,
},

{
  title: "Avoid Using Any",
  content: `
The any type removes TypeScript safety.

Instead use:

• unknown

• Interfaces

• Generics

• Union Types
  `,
  code: `// Bad

let data:any;


// Better

let value:unknown;`,
  language: "typescript",
  output: `
Type Safety Improved
  `,
},

{
  title: "TypeScript Strict Mode",
  content: `
Strict mode enables advanced type checking.

It catches potential errors during development.
  `,
  code: `{
"compilerOptions": {

"strict": true

}

}`,
  language: "json",
  output: `
Strict Mode Enabled
  `,
},

{
  title: "ESLint with TypeScript",
  content: `
ESLint analyzes code and finds problems.

Benefits:

• Code Quality

• Consistency

• Error Prevention
  `,
},

{
  title: "Installing ESLint",
  content: `
ESLint can be configured for TypeScript projects.
  `,
  code: `npm install eslint

npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin`,
  language: "bash",
  output: `
ESLint Installed
  `,
},

{
  title: "Prettier with TypeScript",
  content: `
Prettier automatically formats code.

Benefits:

• Consistent Style

• Cleaner Code

• Faster Development
  `,
  code: `npm install -D prettier`,
  language: "bash",
  output: `
Prettier Installed
  `,
},

{
  title: "Testing TypeScript Applications",
  content: `
Testing ensures applications work correctly.

Popular testing tools:

• Jest

• Vitest

• Mocha

• Cypress
  `,
},

{
  title: "Jest with TypeScript",
  content: `
Jest is a JavaScript testing framework that supports TypeScript.

Used for:

• Unit Testing

• Integration Testing
  `,
  code: `npm install -D jest ts-jest @types/jest`,
  language: "bash",
  output: `
Jest Installed
  `,
},

{
  title: "TypeScript Unit Test Example",
  content: `
Unit tests verify individual functions or components.
  `,
  code: `function add(
a:number,
b:number
)
{

return a+b;

}


test(
"adds numbers",
()=>{

expect(
add(2,3)
)
.toBe(5);

}
);`,
  language: "typescript",
  output: `
Test Passed
  `,
},

{
  title: "Debugging TypeScript",
  content: `
Debugging helps find and fix application problems.

Tools:

• Browser DevTools

• VS Code Debugger

• Node Debugger
  `,
},

{
  title: "Source Maps",
  content: `
Source maps connect compiled JavaScript back to TypeScript source.

They make debugging easier.
  `,
  code: `{
"compilerOptions":{

"sourceMap":true

}

}`,
  language: "json",
  output: `
Source Maps Enabled
  `,
},

{
  title: "Build Tools with TypeScript",
  content: `
Build tools compile and optimize TypeScript projects.

Popular tools:

• Vite

• Webpack

• Rollup

• Parcel
  `,
},

{
  title: "Vite with TypeScript",
  content: `
Vite provides fast development and production builds.

Features:

• Fast Startup

• Hot Reload

• Modern Bundling
  `,
  code: `npm create vite@latest project

Select:

TypeScript`,
  language: "bash",
  output: `
Vite TypeScript Project Created
  `,
},

{
  title: "Webpack with TypeScript",
  content: `
Webpack bundles TypeScript applications.

It is commonly used in large projects.
  `,
},

{
  title: "TypeScript Deployment",
  content: `
Before deployment, TypeScript is compiled into JavaScript.

Deployment steps:

1. Build Project

2. Test Application

3. Configure Server

4. Deploy Files
  `,
},

{
  title: "Building TypeScript Project",
  content: `
The build command compiles TypeScript code.
  `,
  code: `tsc`,
  language: "bash",
  output: `
JavaScript Files Generated
  `,
},

{
  title: "TypeScript with Docker",
  content: `
Docker packages TypeScript applications with all dependencies.

Benefits:

• Consistent Environment

• Easy Deployment

• Scalability
  `,
},

{
  title: "TypeScript CI/CD Pipeline",
  content: `
CI/CD automates testing and deployment.

Pipeline steps:

1. Install Dependencies

2. Run Tests

3. Build Application

4. Deploy
  `,
},

{
  title: "TypeScript Cloud Deployment",
  content: `
TypeScript applications can run on:

• AWS

• Azure

• Google Cloud

• DigitalOcean

• Vercel

• Netlify
  `,
},

{
  title: "TypeScript Security Practices",
  content: `
Security best practices:

✓ Validate Input

✓ Protect Secrets

✓ Use HTTPS

✓ Sanitize Data

✓ Update Dependencies

✓ Handle Errors Safely
  `,
},

{
  title: "Advanced TypeScript Features",
  content: `
Advanced concepts include:

• Decorators

• Metadata

• Declaration Files

• Type Inference

• Advanced Generics

• Conditional Types

• Template Literal Types
  `,
},

{
  title: "Declaration Files",
  content: `
Declaration files describe types for JavaScript libraries.

They use:

.d.ts

extension.
  `,
  code: `example.d.ts

declare module "library-name";`,
  language: "typescript",
  output: `
Declaration Created
  `,
},

{
  title: "Decorators in TypeScript",
  content: `
Decorators add extra behavior to classes and methods.

Commonly used in:

• Angular

• NestJS
  `,
  code: `function Logger(
target:any
)
{

console.log(
target
);

}


@Logger

class User {

}`,
  language: "typescript",
  output: `
Decorator Applied
  `,
},

{
  title: "TypeScript Interview Questions",
  content: `
Common interview questions:

• What is TypeScript?

• Difference between interface and type?

• What are generics?

• Explain union types.

• What is type inference?

• Difference between any and unknown?

• What are utility types?

• Explain decorators.

• How does TypeScript compile?
  `,
},

{
  title: "TypeScript Developer Roadmap",
  content: `
Beginner:

1. JavaScript Basics

2. TypeScript Syntax

3. Types

4. Interfaces

5. Functions


Intermediate:

6. Generics

7. Classes

8. Modules

9. React + TypeScript

10. Node.js + TypeScript


Advanced:

11. Design Patterns

12. Testing

13. Build Tools

14. Deployment

15. Architecture
  `,
},

{
  title: "Real World TypeScript Projects",
  content: `
Projects for practice:

• Full Stack E-commerce Application

• Learning Management System

• Real-Time Chat Application

• Project Management Tool

• Social Media Platform

• Banking Dashboard

• SaaS Application

• REST API Platform
  `,
},

{
  title: "TypeScript Career Opportunities",
  content: `
TypeScript skills are useful for:

• Frontend Developer

• React Developer

• Full Stack Developer

• Node.js Developer

• Backend Engineer

• Software Engineer

• Cloud Developer

• Technical Lead
  `,
},

{
  title: "Final TypeScript Learning Goal",
  content: `
After completing TypeScript, you should be able to:

✓ Build Type Safe Applications

✓ Create React Applications

✓ Develop Node.js APIs

✓ Work With Databases

✓ Write Scalable Code

✓ Test Applications

✓ Deploy Production Systems
  `,
},
],
};