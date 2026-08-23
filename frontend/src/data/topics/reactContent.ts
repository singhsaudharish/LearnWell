export const reactJsContent = {
  title: "React.js Programming",
  description:
    "Learn React.js from beginner to advanced with components, hooks, routing, state management, APIs, performance optimization, and real-world projects.",

  sections: [

    {
      title: "Introduction to React.js",
      content: `
React.js is a popular open-source JavaScript library used for building modern, interactive user interfaces.

It was developed by Meta (formerly Facebook) and is widely used for creating Single Page Applications (SPAs).

React allows developers to build reusable UI components, making applications easier to develop and maintain.

React is one of the most popular frontend libraries in the world.
      `,
    },


    {
      title: "What is React?",
      content: `
React is a JavaScript library used for building user interfaces.

Instead of manipulating the DOM manually, React updates only the necessary parts using its Virtual DOM.

React focuses only on the View layer of an application.

It can be combined with libraries like React Router, Redux, and Axios to build complete applications.
      `,
    },


    {
      title: "History of React",
      content: `
React was created by Jordan Walke, a software engineer at Facebook.

Timeline:

• 2011 – First used inside Facebook

• 2013 – Open-sourced by Facebook

• 2015 – React Native released

• 2022 – React 18 introduced Concurrent Features

Today React powers millions of websites and applications.
      `,
    },


    {
      title: "Features of React",
      content: `
Major features of React:

• Component-Based Architecture

• Virtual DOM

• JSX

• One-Way Data Binding

• Reusable Components

• Fast Rendering

• Strong Community Support

• Cross Platform Development (React Native)

• Excellent Ecosystem
      `,
    },


    {
      title: "Advantages of React",
      content: `
Advantages of React:

✓ Easy to Learn

✓ High Performance

✓ Reusable Components

✓ Better Code Organization

✓ SEO Friendly

✓ Huge Community

✓ Rich Ecosystem

✓ Excellent Developer Tools
      `,
    },


    {
      title: "Applications of React",
      content: `
React is used for building:

• Single Page Applications

• Dashboards

• E-commerce Websites

• Social Media Platforms

• Learning Management Systems

• Admin Panels

• Chat Applications

• Portfolio Websites
      `,
    },


    {
      title: "Prerequisites for React",
      content: `
Before learning React, you should know:

• HTML

• CSS

• JavaScript (ES6+)

• DOM Basics

• Functions

• Objects

• Arrays

• Modules
      `,
      tip: "A strong JavaScript foundation makes learning React much easier.",
    },


    {
      title: "Installing Node.js",
      content: `
React development requires Node.js and npm.

Download and install the latest LTS version.

Verify installation using:
      `,
      code: `node -v

npm -v`,
      language: "bash",
      output: `
v22.x.x

10.x.x
      `,
    },


    {
      title: "Creating a React Project with Vite",
      content: `
Vite is the recommended tool for creating modern React applications.

It provides faster startup and hot module replacement.
      `,
      code: `npm create vite@latest my-app

cd my-app

npm install

npm run dev`,
      language: "bash",
      output: `
Local: http://localhost:5173/
      `,
      tip: "Vite is faster and lighter than Create React App.",
    },


    {
      title: "Vite vs Create React App",
      content: `
Vite:

• Faster Startup

• Faster Build

• Better Development Experience

• Modern Tooling

Create React App:

• Older Tool

• Slower Startup

• Larger Bundle

Most modern React projects use Vite.
      `,
    },


    {
      title: "React Project Structure",
      content: `
A typical React project contains:

• node_modules/

• public/

• src/

• App.jsx

• main.jsx

• package.json

• vite.config.js

The src folder contains most application code.
      `,
    },


    {
      title: "Understanding JSX",
      content: `
JSX stands for JavaScript XML.

It allows developers to write HTML-like syntax inside JavaScript.

JSX makes React code more readable and easier to write.
      `,
      code: `function App() {

    return <h1>Hello React</h1>;

}`,
      language: "jsx",
      output: `
Hello React
      `,
    },


    {
      title: "JSX Rules",
      content: `
Important JSX Rules:

• Return one parent element.

• Close all tags.

• Use className instead of class.

• Use camelCase for attributes.

• Expressions are written inside {}.
      `,
      code: `function App() {

    return (

        <div>

            <h1>Hello</h1>

        </div>

    );

}`,
      language: "jsx",
      output: `
Hello
      `,
    },


    {
      title: "Rendering Elements",
      content: `
React renders UI elements into the DOM using createRoot().

The root element is usually inside index.html.
      `,
      code: `import ReactDOM from "react-dom/client";

ReactDOM.createRoot(
    document.getElementById("root")
).render(<App />);`,
      language: "jsx",
      output: `
Application Rendered
      `,
    },


    {
      title: "React Components",
      content: `
Components are the building blocks of React applications.

Each component represents a reusable part of the user interface.

Examples:

• Navbar

• Footer

• Login Form

• Card

• Sidebar
      `,
    },


    {
      title: "Functional Components",
      content: `
Functional Components are JavaScript functions that return JSX.

They are the recommended way to build React applications.
      `,
      code: `function Welcome() {

    return <h2>Welcome</h2>;

}`,
      language: "jsx",
      output: `
Welcome
      `,
      tip: "Modern React applications primarily use functional components with Hooks.",
    },


    {
      title: "Class Components (Overview)",
      content: `
Class Components were widely used before React Hooks.

Modern applications generally prefer Functional Components.

You may still encounter Class Components in older projects.
      `,
    },


    {
      title: "Component Naming Rules",
      content: `
React component names must:

• Start with a capital letter.

Valid:

Navbar

LoginForm

ProfileCard

Invalid:

navbar

login
      `,
    },


    {
      title: "React Fragments",
      content: `
Fragments allow multiple elements without creating extra DOM nodes.

Syntax:

<></>

or

<React.Fragment>
      `,
      code: `function App() {

    return (

        <>

            <h1>Hello</h1>

            <p>React Fragment</p>

        </>

    );

}`,
      language: "jsx",
      output: `
Hello

React Fragment
      `,
    },


    {
      title: "React Strict Mode",
      content: `
StrictMode helps identify potential problems during development.

Benefits:

• Detects Unsafe Code

• Highlights Deprecated APIs

• Encourages Best Practices
      `,
      code: `import React from "react";

<React.StrictMode>

    <App />

</React.StrictMode>`,
      language: "jsx",
      output: `
Application Running
      `,
    },


    {
      title: "Your First React Application",
      content: `
Let's build a simple React application.
      `,
      code: `function App() {

    return (

        <h1>

            Welcome to React.js

        </h1>

    );

}

export default App;`,
      language: "jsx",
      output: `
Welcome to React.js
      `,
    },


    {
      title: "Part 1 Summary",
      content: `
Congratulations!

You have completed Part 1 of the React.js course.

Topics covered:

✓ Introduction to React

✓ What is React

✓ History

✓ Features

✓ Advantages

✓ Applications

✓ Prerequisites

✓ Installing Node.js

✓ Creating a React Project

✓ Vite

✓ Project Structure

✓ JSX

✓ JSX Rules

✓ Rendering Elements

✓ Components

✓ Functional Components

✓ Class Components

✓ Component Naming

✓ React Fragments

✓ Strict Mode

✓ First React Application

You are now ready to learn Components, Props, Event Handling, Lists, Conditional Rendering, and Styling in Part 2.
      `,
      tip: "Practice creating small reusable components before moving on to Props and State.",
    },
    {
      title: "Introduction to Components",
      content: `
Components are the building blocks of a React application.

A component is an independent, reusable piece of the user interface.

Examples of components:

• Navbar

• Sidebar

• Footer

• Login Form

• Product Card

Large applications are built by combining many small components.
      `,
    },


    {
      title: "Creating Reusable Components",
      content: `
Reusable components help reduce duplicate code.

Once created, a component can be used multiple times throughout the application.
      `,
      code: `function Button() {

    return <button>Click Me</button>;

}

export default Button;`,
      language: "jsx",
      output: `
Click Me
      `,
      tip: "Create small, reusable components whenever possible.",
    },


    {
      title: "Using Components",
      content: `
Components can be imported and used inside other components.
      `,
      code: `import Button from "./Button";

function App() {

    return (

        <div>

            <Button />

            <Button />

        </div>

    );

}`,
      language: "jsx",
      output: `
Click Me

Click Me
      `,
    },


    {
      title: "Introduction to Props",
      content: `
Props (Properties) allow data to be passed from a parent component to a child component.

Props are read-only.

They make components dynamic and reusable.
      `,
    },


    {
      title: "Passing Props",
      content: `
Pass values to a component using attributes.
      `,
      code: `function Welcome(props) {

    return <h2>Hello {props.name}</h2>;

}

function App() {

    return <Welcome name="Harish" />;

}`,
      language: "jsx",
      output: `
Hello Harish
      `,
    },


    {
      title: "Destructuring Props",
      content: `
Props can be destructured for cleaner code.
      `,
      code: `function Welcome({ name, age }) {

    return (

        <h2>

            {name} - {age}

        </h2>

    );

}`,
      language: "jsx",
      output: `
Harish - 21
      `,
      tip: "Destructuring makes components easier to read.",
    },


    {
      title: "Default Props",
      content: `
Default values can be provided when a prop is not passed.
      `,
      code: `function Welcome({ name = "Guest" }) {

    return <h2>Hello {name}</h2>;

}`,
      language: "jsx",
      output: `
Hello Guest
      `,
    },


    {
      title: "Children Props",
      content: `
The children prop allows components to render nested content.
      `,
      code: `function Card({ children }) {

    return (

        <div>

            {children}

        </div>

    );

}

function App() {

    return (

        <Card>

            <h2>React Card</h2>

        </Card>

    );

}`,
      language: "jsx",
      output: `
React Card
      `,
    },


    {
      title: "Component Composition",
      content: `
Component Composition means combining smaller components to create larger interfaces.

Benefits:

• Reusability

• Better Organization

• Easier Maintenance
      `,
    },


    {
      title: "Nested Components",
      content: `
Components can contain other components.
      `,
      code: `function Header() {

    return <h1>Header</h1>;

}

function App() {

    return (

        <div>

            <Header />

        </div>

    );

}`,
      language: "jsx",
      output: `
Header
      `,
    },


    {
      title: "Event Handling",
      content: `
React handles events using camelCase event names.

Examples:

• onClick

• onChange

• onSubmit

• onMouseEnter
      `,
      code: `function App() {

    function greet() {

        alert("Welcome!");

    }

    return (

        <button onClick={greet}>

            Click

        </button>

    );

}`,
      language: "jsx",
      output: `
Welcome!
      `,
    },


    {
      title: "Event Object",
      content: `
React automatically passes an event object to event handlers.

The event object contains useful information about the event.
      `,
      code: `function App() {

    function handleClick(event) {

        console.log(event.type);

    }

    return (

        <button onClick={handleClick}>

            Click

        </button>

    );

}`,
      language: "jsx",
      output: `
click
      `,
    },


    {
      title: "Conditional Rendering",
      content: `
Conditional Rendering displays different UI based on conditions.

Common techniques:

• if statement

• Ternary Operator

• Logical &&
      `,
      code: `function App() {

    const isLoggedIn = true;

    return (

        <h2>

            {isLoggedIn ? "Welcome" : "Login"}

        </h2>

    );

}`,
      language: "jsx",
      output: `
Welcome
      `,
    },


    {
      title: "Rendering Lists",
      content: `
React uses the map() function to render lists of data.
      `,
      code: `function App() {

    const fruits = [

        "Apple",

        "Banana",

        "Mango"

    ];

    return (

        <ul>

            {fruits.map((fruit) => (

                <li>{fruit}</li>

            ))}

        </ul>

    );

}`,
      language: "jsx",
      output: `
Apple

Banana

Mango
      `,
    },


    {
      title: "Keys in React",
      content: `
Keys help React identify which list items have changed.

Keys should be unique.

Avoid using array indexes when possible.
      `,
      code: `const users = [

    { id: 1, name: "Harish" },

    { id: 2, name: "Rahul" }

];

users.map(user => (

    <p key={user.id}>

        {user.name}

    </p>

));`,
      language: "jsx",
      output: `
Harish

Rahul
      `,
      tip: "Use database IDs or UUIDs as keys whenever possible.",
    },


    {
      title: "Dynamic UI",
      content: `
React updates the UI automatically when data changes.

This makes applications interactive without manually updating the DOM.
      `,
    },


    {
      title: "Inline Styling",
      content: `
Styles can be applied directly using JavaScript objects.
      `,
      code: `function App() {

    return (

        <h1 style={{

            color: "blue",

            fontSize: "32px"

        }}>

            React

        </h1>

    );

}`,
      language: "jsx",
      output: `
React
      `,
    },


    {
      title: "CSS Modules",
      content: `
CSS Modules provide locally scoped CSS.

Benefits:

• No Style Conflicts

• Better Organization

• Easier Maintenance
      `,
      code: `import styles from "./App.module.css";

<h1 className={styles.title}>

    Hello React

</h1>`,
      language: "jsx",
      output: `
Hello React
      `,
    },


    {
      title: "Tailwind CSS with React",
      content: `
Tailwind CSS is a utility-first CSS framework commonly used with React.

Advantages:

• Fast Development

• Responsive Design

• Utility Classes

• Highly Customizable
      `,
      code: `function App() {

    return (

        <h1 className="text-3xl font-bold text-blue-600">

            React + Tailwind

        </h1>

    );

}`,
      language: "jsx",
      output: `
React + Tailwind
      `,
    },


    {
      title: "Styled Components (Introduction)",
      content: `
Styled Components is a CSS-in-JS library.

It allows writing CSS directly inside JavaScript components.

Benefits:

• Component-based styling

• Dynamic styles

• Better maintainability
      `,
    },


    {
      title: "Part 2 Summary",
      content: `
Congratulations!

You have completed Part 2.

Topics covered:

✓ Components

✓ Reusable Components

✓ Using Components

✓ Props

✓ Destructuring Props

✓ Default Props

✓ Children Props

✓ Component Composition

✓ Nested Components

✓ Event Handling

✓ Event Object

✓ Conditional Rendering

✓ Lists

✓ Keys

✓ Dynamic UI

✓ Inline Styling

✓ CSS Modules

✓ Tailwind CSS

✓ Styled Components

You are now ready to learn State Management and React Hooks in Part 3.
      `,
      tip: "Master components and props before moving to state and hooks. Almost every React application relies heavily on these concepts.",
    },    {
      title: "Introduction to State",
      content: `
State is a built-in React object used to store data that can change over time.

Unlike props, state is managed inside a component.

Whenever state changes, React automatically re-renders the component.

State is commonly used for:

• Counters

• Forms

• User Input

• API Data

• UI Toggles
      `,
    },


    {
      title: "useState Hook",
      content: `
The useState Hook allows functional components to store and update state.

Syntax:

const [state, setState] = useState(initialValue);
      `,
      code: `import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    return <h1>{count}</h1>;

}`,
      language: "jsx",
      output: `
0
      `,
    },


    {
      title: "Updating State",
      content: `
State is updated using the setter function returned by useState().
      `,
      code: `import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    return (

        <button onClick={() => setCount(count + 1)}>

            Count: {count}

        </button>

    );

}`,
      language: "jsx",
      output: `
Count: 1
      `,
      tip: "Never modify state directly. Always use the setter function.",
    },


    {
      title: "Multiple State Variables",
      content: `
A component can have multiple state variables.
      `,
      code: `const [name, setName] = useState("Harish");

const [age, setAge] = useState(21);`,
      language: "jsx",
      output: `
Harish
21
      `,
    },


    {
      title: "Updating Object State",
      content: `
Objects can be stored in state.

Use the spread operator (...) to update properties.
      `,
      code: `const [user, setUser] = useState({

    name: "Harish",

    age: 21

});

setUser({

    ...user,

    age: 22

});`,
      language: "jsx",
      output: `
Age Updated
      `,
    },


    {
      title: "Updating Array State",
      content: `
Arrays stored in state should also be updated immutably.
      `,
      code: `const [fruits, setFruits] = useState([

    "Apple",

    "Banana"

]);

setFruits([...fruits, "Mango"]);`,
      language: "jsx",
      output: `
Apple
Banana
Mango
      `,
    },


    {
      title: "Controlled Components",
      content: `
Controlled components store form values inside React state.

This gives React complete control over form inputs.
      `,
      code: `const [name, setName] = useState("");

<input

    value={name}

    onChange={(e) => setName(e.target.value)}

/>`,
      language: "jsx",
      output: `
Input Controlled
      `,
    },


    {
      title: "Working with Forms",
      content: `
React forms use state to manage user input.

Forms commonly include:

• Text Fields

• Passwords

• Checkboxes

• Radio Buttons

• Select Menus
      `,
      code: `function App() {

    const [email, setEmail] = useState("");

    return (

        <input

            value={email}

            onChange={(e) => setEmail(e.target.value)}

        />

    );

}`,
      language: "jsx",
      output: `
User Input Updated
      `,
    },


    {
      title: "Basic Form Validation",
      content: `
Validation checks whether user input is correct before submission.

Examples:

• Required Fields

• Email Format

• Password Length

• Mobile Number
      `,
      code: `if(email === ""){

    alert("Email is required");

}`,
      language: "javascript",
      output: `
Email is required
      `,
    },


    {
      title: "Introduction to useEffect",
      content: `
useEffect performs side effects in React components.

Common uses:

• Fetching API Data

• Timers

• Event Listeners

• Updating Document Title
      `,
    },


    {
      title: "Using useEffect",
      content: `
useEffect executes after the component renders.
      `,
      code: `import { useEffect } from "react";

useEffect(() => {

    console.log("Component Mounted");

}, []);`,
      language: "jsx",
      output: `
Component Mounted
      `,
    },


    {
      title: "Dependency Array",
      content: `
The dependency array controls when useEffect executes.

Examples:

[]

Runs once.

[count]

Runs when count changes.
      `,
      code: `useEffect(() => {

    console.log(count);

}, [count]);`,
      language: "jsx",
      output: `
Updated Value
      `,
    },


    {
      title: "Cleanup Function",
      content: `
Cleanup functions remove subscriptions, timers, or event listeners before a component unmounts.
      `,
      code: `useEffect(() => {

    const id = setInterval(() => {

        console.log("Running");

    },1000);

    return () => clearInterval(id);

}, []);`,
      language: "jsx",
      output: `
Timer Cleared
      `,
      tip: "Always clean up timers and subscriptions to avoid memory leaks.",
    },


    {
      title: "useRef Hook",
      content: `
useRef stores mutable values without causing re-renders.

It is commonly used for:

• Accessing DOM Elements

• Storing Timers

• Previous Values
      `,
      code: `const inputRef = useRef(null);

inputRef.current.focus();`,
      language: "jsx",
      output: `
Input Focused
      `,
    },


    {
      title: "useMemo Hook",
      content: `
useMemo caches expensive calculations.

It prevents unnecessary recalculations during rendering.
      `,
      code: `const total = useMemo(() => {

    return price * quantity;

}, [price, quantity]);`,
      language: "jsx",
      output: `
Calculated Once
      `,
    },


    {
      title: "useCallback Hook",
      content: `
useCallback memoizes functions.

It prevents unnecessary function recreation.
      `,
      code: `const handleClick = useCallback(() => {

    console.log("Clicked");

}, []);`,
      language: "jsx",
      output: `
Clicked
      `,
    },


    {
      title: "Custom Hooks",
      content: `
Custom Hooks allow reusable stateful logic.

Hook names always begin with "use".
      `,
      code: `function useCounter() {

    const [count, setCount] = useState(0);

    return { count, setCount };

}`,
      language: "jsx",
      output: `
Reusable Counter Hook
      `,
    },


    {
      title: "Rules of Hooks",
      content: `
Important Rules:

• Call Hooks only at the top level.

• Never call Hooks inside loops.

• Never call Hooks inside conditions.

• Hooks can only be used inside React components or custom Hooks.
      `,
    },


    {
      title: "React Component Lifecycle",
      content: `
A React component goes through three phases:

• Mounting

• Updating

• Unmounting

useEffect can be used to perform actions during these lifecycle stages.
      `,
    },


    {
      title: "Part 3 Summary",
      content: `
Congratulations!

You have completed Part 3.

Topics covered:

✓ State

✓ useState

✓ Updating State

✓ Object State

✓ Array State

✓ Controlled Components

✓ Forms

✓ Form Validation

✓ useEffect

✓ Dependency Array

✓ Cleanup Function

✓ useRef

✓ useMemo

✓ useCallback

✓ Custom Hooks

✓ Rules of Hooks

✓ Component Lifecycle

You are now ready to learn React Router, API Integration, CRUD Operations, Axios, Fetch API, and React Query in Part 4.
      `,
      tip: "Understanding state and hooks is the foundation of modern React development. Practice building small projects like counters, forms, and todo lists before moving to routing and APIs.",
    },    {
      title: "Introduction to React Router",
      content: `
React Router is a library used to add navigation between pages in React applications.

It enables Single Page Applications (SPA) by updating the URL without refreshing the browser.

Benefits:

• Client-side Routing

• Faster Navigation

• Better User Experience

• Nested Routes

• Dynamic Routes
      `,
    },


    {
      title: "Installing React Router",
      content: `
Install React Router using npm.
      `,
      code: `npm install react-router-dom`,
      language: "bash",
      output: `
react-router-dom installed successfully
      `,
      tip: "React Router is the standard routing library for React applications.",
    },


    {
      title: "BrowserRouter",
      content: `
BrowserRouter enables routing using the browser's history API.

Wrap your application inside BrowserRouter.
      `,
      code: `import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>

        <App />

    </BrowserRouter>

);`,
      language: "jsx",
      output: `
Application Running
      `,
    },


    {
      title: "Routes and Route",
      content: `
Routes contains all Route components.

Each Route maps a URL path to a React component.
      `,
      code: `import { Routes, Route } from "react-router-dom";

<Routes>

    <Route path="/" element={<Home />} />

    <Route path="/about" element={<About />} />

</Routes>`,
      language: "jsx",
      output: `
Routes Configured
      `,
    },


    {
      title: "Link Component",
      content: `
The Link component navigates between pages without reloading the browser.
      `,
      code: `import { Link } from "react-router-dom";

<Link to="/">Home</Link>

<Link to="/about">About</Link>`,
      language: "jsx",
      output: `
Navigation Links Displayed
      `,
    },


    {
      title: "NavLink Component",
      content: `
NavLink works like Link but automatically applies styles to the active route.
      `,
      code: `import { NavLink } from "react-router-dom";

<NavLink to="/home">

    Home

</NavLink>`,
      language: "jsx",
      output: `
Active Navigation Link
      `,
    },


    {
      title: "useNavigate Hook",
      content: `
useNavigate allows programmatic navigation.
      `,
      code: `import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (

        <button onClick={() => navigate("/about")}>

            Go to About

        </button>

    );

}`,
      language: "jsx",
      output: `
Navigated to About Page
      `,
    },


    {
      title: "URL Parameters",
      content: `
Dynamic route parameters are used to pass values through the URL.
      `,
      code: `<Route path="/user/:id" element={<User />} />`,
      language: "jsx",
      output: `
Dynamic Route Created
      `,
    },


    {
      title: "useParams Hook",
      content: `
useParams retrieves route parameters.
      `,
      code: `import { useParams } from "react-router-dom";

function User() {

    const { id } = useParams();

    return <h2>User ID: {id}</h2>;

}`,
      language: "jsx",
      output: `
User ID: 5
      `,
    },


    {
      title: "Query Parameters",
      content: `
Query parameters store optional information in the URL.

Example:

/search?q=react
      `,
      code: `import { useSearchParams } from "react-router-dom";

const [searchParams] = useSearchParams();

console.log(searchParams.get("q"));`,
      language: "jsx",
      output: `
react
      `,
    },


    {
      title: "Nested Routes",
      content: `
Nested routes allow child pages inside parent pages.

Useful for dashboards and admin panels.
      `,
      code: `<Route path="/dashboard" element={<Dashboard />}>

    <Route path="profile" element={<Profile />} />

</Route>`,
      language: "jsx",
      output: `
Nested Route Created
      `,
    },


    {
      title: "Layout Routes",
      content: `
Layout routes allow multiple pages to share common layouts such as Navbar and Footer.
      `,
      code: `<Route element={<Layout />}>

    <Route path="/" element={<Home />} />

    <Route path="/about" element={<About />} />

</Route>`,
      language: "jsx",
      output: `
Shared Layout Applied
      `,
    },


    {
      title: "Protected Routes",
      content: `
Protected routes prevent unauthorized users from accessing specific pages.

They are commonly used for:

• Dashboard

• Profile

• Admin Pages
      `,
      code: `return isLoggedIn ? <Dashboard /> : <Navigate to="/login" />;`,
      language: "jsx",
      output: `
User Redirected if Not Logged In
      `,
      tip: "Protected routes are typically implemented using authentication state and React Router.",
    },


    {
      title: "Fetching Data with Fetch API",
      content: `
Fetch API is built into modern browsers and can retrieve data from APIs.
      `,
      code: `useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(res => res.json())

        .then(data => console.log(data));

}, []);`,
      language: "jsx",
      output: `
User Data Loaded
      `,
    },


    {
      title: "Fetching Data with Axios",
      content: `
Axios is a popular HTTP client with simpler syntax than Fetch.
      `,
      code: `import axios from "axios";

useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/users")

        .then(res => console.log(res.data));

}, []);`,
      language: "jsx",
      output: `
User Data Loaded
      `,
    },


    {
      title: "Loading States",
      content: `
Loading states improve user experience while waiting for data.
      `,
      code: `if (loading) {

    return <h2>Loading...</h2>;

}`,
      language: "jsx",
      output: `
Loading...
      `,
    },


    {
      title: "Error Handling",
      content: `
Always handle API errors gracefully.
      `,
      code: `try {

    const response = await axios.get("/users");

} catch (error) {

    console.log(error);

}`,
      language: "jsx",
      output: `
Error Handled
      `,
    },


    {
      title: "CRUD Operations",
      content: `
CRUD stands for:

• Create

• Read

• Update

• Delete

Most React applications communicate with backend APIs using CRUD operations.
      `,
    },


    {
      title: "Environment Variables",
      content: `
Environment variables store configuration values.

In Vite, variables must begin with VITE_.
      `,
      code: `VITE_API_URL=http://localhost:5000`,
      language: "text",
      output: `
Environment Variable Created
      `,
    },


    {
      title: "Using Environment Variables",
      content: `
Access Vite environment variables using import.meta.env.
      `,
      code: `const API = import.meta.env.VITE_API_URL;

console.log(API);`,
      language: "jsx",
      output: `
http://localhost:5000
      `,
    },


    {
      title: "Introduction to TanStack Query",
      content: `
TanStack Query (formerly React Query) simplifies data fetching and server-state management.

Benefits:

• Automatic Caching

• Background Refetching

• Retry Failed Requests

• Loading & Error States
      `,
    },


    {
      title: "Installing TanStack Query",
      content: `
Install TanStack Query using npm.
      `,
      code: `npm install @tanstack/react-query`,
      language: "bash",
      output: `
Package Installed Successfully
      `,
    },


    {
      title: "Part 4 Summary",
      content: `
Congratulations!

You have completed Part 4.

Topics covered:

✓ React Router

✓ BrowserRouter

✓ Routes

✓ Route

✓ Link

✓ NavLink

✓ useNavigate

✓ URL Parameters

✓ useParams

✓ Query Parameters

✓ Nested Routes

✓ Layout Routes

✓ Protected Routes

✓ Fetch API

✓ Axios

✓ Loading States

✓ Error Handling

✓ CRUD Operations

✓ Environment Variables

✓ TanStack Query

You are now ready to learn Context API, Redux Toolkit, Authentication, Performance Optimization, Testing, Deployment, and React Best Practices in Part 5.
      `,
      tip: "Routing and API integration are essential skills for building real-world React applications. Practice by creating a multi-page app that fetches data from an API.",
    },    {
      title: "Introduction to Context API",
      content: `
Context API is a built-in React feature used for sharing data between components without passing props manually.

It is useful for:

• Authentication

• Themes

• Language Settings

• User Information

• Global State
      `,
    },


    {
      title: "Creating Context",
      content: `
React provides createContext() for creating a global context.
      `,
      code: `import { createContext } from "react";

export const UserContext = createContext(null);`,
      language: "jsx",
      output: "Context Created",
    },


    {
      title: "Context Provider",
      content: `
The Provider makes data available to all child components.
      `,
      code: `import { UserContext } from "./UserContext";

<UserContext.Provider value={{ name: "Harish" }}>

    <App />

</UserContext.Provider>`,
      language: "jsx",
      output: "Data Shared",
    },


    {
      title: "useContext Hook",
      content: `
useContext allows components to access data from Context.
      `,
      code: `import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {

    const user = useContext(UserContext);

    return <h2>{user.name}</h2>;

}`,
      language: "jsx",
      output: `
Harish
      `,
      tip: "Context API is ideal for small to medium-sized global state management.",
    },


    {
      title: "Introduction to useReducer",
      content: `
useReducer is an alternative to useState for managing complex state.

It is useful when:

• State has multiple values

• State logic is complex

• Multiple actions update state
      `,
    },


    {
      title: "Using useReducer",
      content: `
useReducer uses a reducer function and dispatches actions.
      `,
      code: `import { useReducer } from "react";

function reducer(state, action) {

    switch(action.type) {

        case "increment":

            return { count: state.count + 1 };

        default:

            return state;

    }

}

const [state, dispatch] = useReducer(reducer, { count: 0 });`,
      language: "jsx",
      output: `
Reducer Initialized
      `,
    },


    {
      title: "Redux Toolkit Introduction",
      content: `
Redux Toolkit is the recommended way to manage global state in large React applications.

Features:

• Centralized State

• Predictable Updates

• DevTools Support

• Easy Configuration
      `,
    },


    {
      title: "Zustand Introduction",
      content: `
Zustand is a lightweight state management library.

Advantages:

• Minimal Boilerplate

• Fast Performance

• Easy to Learn

• Simple API
      `,
    },


    {
      title: "Authentication in React",
      content: `
Authentication verifies the identity of users.

Common authentication methods include:

• Email & Password

• JWT Authentication

• Google Login

• GitHub Login

• OAuth
      `,
    },


    {
      title: "JWT Authentication",
      content: `
JWT (JSON Web Token) is commonly used for authentication.

Workflow:

Login

↓

Server Generates Token

↓

Client Stores Token

↓

Protected Requests Include Token

↓

Server Verifies Token
      `,
    },


    {
      title: "Local Storage",
      content: `
Local Storage stores data permanently inside the browser.

Example uses:

• JWT Token

• Theme Preference

• User Settings
      `,
      code: `localStorage.setItem("token", "abc123");

const token = localStorage.getItem("token");

console.log(token);`,
      language: "javascript",
      output: `
abc123
      `,
    },


    {
      title: "Session Storage",
      content: `
Session Storage stores data until the browser tab is closed.

It works similarly to Local Storage but has a shorter lifetime.
      `,
      code: `sessionStorage.setItem("username", "Harish");

console.log(sessionStorage.getItem("username"));`,
      language: "javascript",
      output: `
Harish
      `,
    },


    {
      title: "Lazy Loading",
      content: `
Lazy loading loads components only when needed.

Benefits:

• Faster Initial Load

• Better Performance

• Smaller Initial Bundle
      `,
      code: `import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));`,
      language: "jsx",
      output: `
Component Loaded Lazily
      `,
    },


    {
      title: "React.memo",
      content: `
React.memo prevents unnecessary component re-renders when props have not changed.
      `,
      code: `const Profile = React.memo(function Profile() {

    return <h2>Profile</h2>;

});`,
      language: "jsx",
      output: `
Optimized Component
      `,
    },


    {
      title: "Code Splitting",
      content: `
Code splitting divides JavaScript into smaller bundles.

Benefits:

• Faster Loading

• Better Performance

• Reduced Initial Bundle Size
      `,
    },


    {
      title: "Error Boundaries",
      content: `
Error Boundaries catch JavaScript errors in child components and display a fallback UI.

They improve application stability and user experience.
      `,
    },


    {
      title: "Portals",
      content: `
Portals render React components outside the normal component hierarchy.

Common uses:

• Modals

• Dialog Boxes

• Tooltips
      `,
    },


    {
      title: "Performance Optimization",
      content: `
Optimize React applications by:

• Using React.memo

• Lazy Loading

• Code Splitting

• Memoization

• Optimized State Updates

• Image Optimization

• Avoiding Unnecessary Re-renders
      `,
      tip: "Performance optimization becomes important as your application grows.",
    },


    {
      title: "Testing React Applications",
      content: `
Testing ensures your application behaves correctly.

Popular testing tools:

• Jest

• React Testing Library

• Vitest

• Cypress
      `,
    },


    {
      title: "Deploying React Applications",
      content: `
Popular deployment platforms include:

• Vercel

• Netlify

• Render

• GitHub Pages

• Firebase Hosting

• AWS
      `,
      code: `npm run build`,
      language: "bash",
      output: `
Production Build Created
      `,
    },


    {
      title: "React Best Practices",
      content: `
Professional recommendations:

✓ Keep Components Small

✓ Use Functional Components

✓ Reuse Components

✓ Follow Folder Structure

✓ Avoid Duplicate Code

✓ Use Environment Variables

✓ Handle Errors Properly

✓ Write Clean JSX

✓ Optimize Performance

✓ Write Tests
      `,
    },


    {
      title: "React Interview Questions",
      content: `
Frequently Asked Questions:

• What is React?

• What is JSX?

• Difference between State and Props?

• What is Virtual DOM?

• Explain Hooks.

• What is useEffect?

• What is Context API?

• What is Redux?

• Difference between useMemo and useCallback?

• What is React Router?
      `,
    },


    {
      title: "React Developer Roadmap",
      content: `
Recommended Learning Path:

1. HTML

2. CSS

3. JavaScript (ES6+)

4. Git & GitHub

5. React.js

6. React Router

7. Tailwind CSS

8. APIs & Axios

9. Context API

10. Redux Toolkit

11. Node.js

12. Express.js

13. MongoDB

14. MERN Stack

15. TypeScript

16. Testing

17. Deployment
      `,
    },


    {
      title: "Complete React.js Course Summary",
      content: `
🎉 Congratulations!

You have successfully completed the React.js Course.

Topics Covered:

✓ React Fundamentals

✓ JSX

✓ Components

✓ Props

✓ State

✓ Hooks

✓ Forms

✓ Event Handling

✓ Conditional Rendering

✓ Lists & Keys

✓ React Router

✓ API Integration

✓ Axios

✓ Fetch API

✓ CRUD Operations

✓ Context API

✓ useReducer

✓ Redux Toolkit

✓ Zustand

✓ Authentication

✓ JWT

✓ Local Storage

✓ Session Storage

✓ Lazy Loading

✓ React.memo

✓ Code Splitting

✓ Error Boundaries

✓ Portals

✓ Performance Optimization

✓ Testing

✓ Deployment

✓ Best Practices

✓ Interview Questions

✓ React Developer Roadmap

You are now ready to build professional React applications such as dashboards, e-commerce websites, LMS platforms, chat applications, admin panels, and full MERN stack projects.
      `,
      tip: "Build projects like a Todo App, Weather App, Blog, E-commerce Store, Chat App, Learning Management System, and Admin Dashboard to master React.js.",
    },

  ],
};