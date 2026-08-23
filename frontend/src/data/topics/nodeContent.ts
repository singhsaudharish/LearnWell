export const nodeJsContent = {
  title: "Node.js Programming",
  description:
    "Learn Node.js from beginner to advanced with core modules, asynchronous programming, npm, APIs, authentication, deployment, and best practices.",

  sections: [

    {
      title: "Introduction to Node.js",
      content: `
Node.js is an open-source, cross-platform JavaScript runtime environment.

It allows developers to run JavaScript outside the web browser.

Node.js is built on Google's V8 JavaScript Engine, which makes it fast and efficient.

It is widely used for:

• Backend Development

• REST APIs

• Real-time Applications

• Command Line Tools

• Microservices

• Streaming Applications
      `,
    },


    {
      title: "What is Node.js?",
      content: `
Node.js is a runtime environment that executes JavaScript code on the server.

Unlike traditional server-side languages, Node.js uses JavaScript for both frontend and backend development.

This allows developers to build full-stack applications using a single programming language.
      `,
    },


    {
      title: "History of Node.js",
      content: `
Node.js was created by Ryan Dahl in 2009.

Important milestones:

• 2009 - Node.js released

• V8 JavaScript Engine introduced

• npm package manager released

• Became one of the most popular backend technologies

Today, Node.js powers millions of applications worldwide.
      `,
    },


    {
      title: "Features of Node.js",
      content: `
Major features of Node.js:

• Open Source

• Cross Platform

• Fast Execution

• Event Driven

• Non-blocking I/O

• Asynchronous Programming

• Large npm Ecosystem

• Lightweight

• Scalable
      `,
    },


    {
      title: "Advantages of Node.js",
      content: `
Advantages:

✓ High Performance

✓ Fast Development

✓ JavaScript Everywhere

✓ Huge Community

✓ Large Package Ecosystem

✓ Easy API Development

✓ Excellent for Real-time Applications

✓ Highly Scalable
      `,
    },


    {
      title: "Applications of Node.js",
      content: `
Node.js is commonly used for:

• REST APIs

• Chat Applications

• Video Streaming

• Online Games

• E-Commerce Websites

• CMS Systems

• Real-time Dashboards

• Microservices
      `,
    },


    {
      title: "Installing Node.js",
      content: `
Download and install Node.js from the official website.

Installation includes:

• Node.js Runtime

• npm (Node Package Manager)

After installation, verify it using the terminal.
      `,
      code: `node -v

npm -v`,
      language: "bash",
      output: `
v22.x.x

10.x.x
      `,
      tip: "Always install the latest LTS (Long Term Support) version for production projects.",
    },


    {
      title: "Your First Node.js Program",
      content: `
Create a file named app.js and write your first Node.js program.
      `,
      code: `console.log("Welcome to Node.js");`,
      language: "javascript",
      output: `
Welcome to Node.js
      `,
    },


    {
      title: "Running a Node.js Program",
      content: `
Execute a JavaScript file using Node.js from the terminal.
      `,
      code: `node app.js`,
      language: "bash",
      output: `
Welcome to Node.js
      `,
    },


    {
      title: "Node.js REPL",
      content: `
REPL stands for:

Read

Evaluate

Print

Loop

It allows you to execute JavaScript interactively.
      `,
      code: `node

> 5 + 10

> "Hello"`

,
      language: "bash",
      output: `
15

Hello
      `,
    },


    {
      title: "Node.js Architecture",
      content: `
Node.js follows an event-driven, non-blocking architecture.

Main Components:

• Client

• Event Loop

• Thread Pool

• Operating System

This architecture allows Node.js to handle many requests efficiently.
      `,
    },


    {
      title: "Single Threaded Event Loop",
      content: `
Node.js uses a single-threaded event loop.

Instead of creating a new thread for every request, it efficiently handles multiple requests using asynchronous operations.

Benefits:

• Better Performance

• Low Memory Usage

• High Scalability
      `,
    },


    {
      title: "Blocking vs Non-Blocking Code",
      content: `
Blocking Code:

The program waits until the current task finishes.

Non-Blocking Code:

The program continues executing while waiting for long-running operations.

Node.js mainly uses non-blocking operations.
      `,
    },


    {
      title: "Synchronous Programming",
      content: `
Synchronous code executes line by line.

Each statement waits until the previous one completes.
      `,
      code: `console.log("Start");

console.log("Processing");

console.log("End");`,
      language: "javascript",
      output: `
Start

Processing

End
      `,
    },


    {
      title: "Asynchronous Programming",
      content: `
Asynchronous programming allows tasks to execute without blocking the main thread.

Examples:

• File Reading

• Database Queries

• API Calls

• Timers
      `,
      code: `console.log("Start");

setTimeout(() => {

    console.log("Finished");

}, 2000);

console.log("End");`,
      language: "javascript",
      output: `
Start

End

Finished
      `,
      tip: "Asynchronous programming is one of Node.js's biggest strengths.",
    },


    {
      title: "Event-Driven Programming",
      content: `
Node.js follows an event-driven architecture.

Events trigger functions when specific actions occur.

Examples:

• HTTP Requests

• File Uploads

• Button Clicks

• Database Connections
      `,
    },


    {
      title: "Global Objects",
      content: `
Global objects are available everywhere in a Node.js application.

Examples:

• console

• process

• Buffer

• setTimeout()

• setInterval()
      `,
    },


    {
      title: "__dirname",
      content: `
__dirname returns the absolute path of the current directory.
      `,
      code: `console.log(__dirname);`,
      language: "javascript",
      output: `
C:\\Projects\\NodeApp
      `,
    },


    {
      title: "__filename",
      content: `
__filename returns the absolute path of the current file.
      `,
      code: `console.log(__filename);`,
      language: "javascript",
      output: `
C:\\Projects\\NodeApp\\app.js
      `,
    },


    {
      title: "process Object",
      content: `
The process object provides information about the currently running Node.js process.

Common Uses:

• Environment Variables

• Command Line Arguments

• Exit Process
      `,
      code: `console.log(process.version);

console.log(process.platform);`,
      language: "javascript",
      output: `
v22.x.x

win32
      `,
    },


    {
      title: "console Object",
      content: `
The console object is used for debugging and displaying information.

Common methods:

• console.log()

• console.error()

• console.warn()

• console.table()
      `,
      code: `console.log("Node.js");

console.error("Error");

console.warn("Warning");`,
      language: "javascript",
      output: `
Node.js

Error

Warning
      `,
    },


    {
      title: "Timers",
      content: `
Node.js provides built-in timer functions.

Common timers:

• setTimeout()

• setInterval()

• clearTimeout()

• clearInterval()
      `,
      code: `setTimeout(() => {

    console.log("Executed");

}, 1000);`,
      language: "javascript",
      output: `
Executed
      `,
    },


    {
      title: "Command Line Arguments",
      content: `
Command-line arguments allow users to pass values while running a Node.js program.

They are accessed using process.argv.
      `,
      code: `console.log(process.argv);`,
      language: "javascript",
      output: `
[
  "node",
  "app.js",
  "Hello"
]
      `,
      tip: "Command-line arguments are useful for building CLI applications.",
    },


    {
      title: "Part 1 Summary",
      content: `
Congratulations!

You have completed Part 1 of the Node.js course.

Topics covered:

✓ Introduction to Node.js

✓ Features

✓ Advantages

✓ Applications

✓ Installing Node.js

✓ REPL

✓ First Program

✓ Running Programs

✓ Architecture

✓ Event Loop

✓ Blocking vs Non-Blocking

✓ Synchronous vs Asynchronous

✓ Event-Driven Programming

✓ Global Objects

✓ __dirname

✓ __filename

✓ process Object

✓ console Object

✓ Timers

✓ Command Line Arguments

You are now ready to learn Node.js Core Modules in Part 2.
      `,
      tip: "Practice running small Node.js programs from the terminal before moving to file handling and core modules.",
    },
    {
      title: "Introduction to Core Modules",
      content: `
Node.js provides many built-in modules called Core Modules.

These modules come pre-installed with Node.js, so you don't need to install them using npm.

Common Core Modules:

• fs

• path

• os

• http

• url

• events

• stream

• buffer

• crypto
      `,
    },


    {
      title: "Importing Core Modules",
      content: `
Core modules can be imported using require() in CommonJS.
      `,
      code: `const fs = require("fs");

const path = require("path");

const os = require("os");`,
      language: "javascript",
      output: "Core modules imported successfully",
    },


    {
      title: "File System (fs) Module",
      content: `
The fs module allows you to work with files and directories.

Common Operations:

• Create Files

• Read Files

• Write Files

• Append Data

• Delete Files

• Rename Files

• Create Directories
      `,
    },


    {
      title: "Writing a File",
      content: `
Use writeFile() to create or overwrite a file.
      `,
      code: `const fs = require("fs");

fs.writeFile(
    "demo.txt",
    "Welcome to Node.js",
    (err) => {

        if(err) throw err;

        console.log("File Created");

    }
);`,
      language: "javascript",
      output: `
File Created
      `,
    },


    {
      title: "Reading a File",
      content: `
Use readFile() to read the contents of a file asynchronously.
      `,
      code: `const fs = require("fs");

fs.readFile(
    "demo.txt",
    "utf8",
    (err, data) => {

        if(err) throw err;

        console.log(data);

    }
);`,
      language: "javascript",
      output: `
Welcome to Node.js
      `,
    },


    {
      title: "Appending Data to a File",
      content: `
appendFile() adds data to the end of an existing file.
      `,
      code: `const fs = require("fs");

fs.appendFile(
    "demo.txt",
    "\\nLearning Core Modules",
    (err) => {

        if(err) throw err;

        console.log("Data Added");

    }
);`,
      language: "javascript",
      output: `
Data Added
      `,
    },


    {
      title: "Deleting a File",
      content: `
unlink() removes a file from the file system.
      `,
      code: `const fs = require("fs");

fs.unlink(
    "demo.txt",
    (err) => {

        if(err) throw err;

        console.log("File Deleted");

    }
);`,
      language: "javascript",
      output: `
File Deleted
      `,
    },


    {
      title: "Renaming a File",
      content: `
rename() changes the name of a file.
      `,
      code: `const fs = require("fs");

fs.rename(
    "old.txt",
    "new.txt",
    (err) => {

        if(err) throw err;

        console.log("File Renamed");

    }
);`,
      language: "javascript",
      output: `
File Renamed
      `,
    },


    {
      title: "Creating a Directory",
      content: `
mkdir() creates a new directory.
      `,
      code: `const fs = require("fs");

fs.mkdir(
    "uploads",
    (err) => {

        if(err) throw err;

        console.log("Folder Created");

    }
);`,
      language: "javascript",
      output: `
Folder Created
      `,
    },


    {
      title: "Reading Directory Contents",
      content: `
readdir() returns all files and folders inside a directory.
      `,
      code: `const fs = require("fs");

fs.readdir(
    ".",
    (err, files) => {

        if(err) throw err;

        console.log(files);

    }
);`,
      language: "javascript",
      output: `
[
  "app.js",
  "package.json"
]
      `,
    },


    {
      title: "Path Module",
      content: `
The path module works with file and directory paths.

Common Methods:

• join()

• basename()

• dirname()

• extname()

• resolve()
      `,
    },


    {
      title: "Joining Paths",
      content: `
join() combines path segments into a single path.
      `,
      code: `const path = require("path");

const filePath = path.join(
    "public",
    "images",
    "logo.png"
);

console.log(filePath);`,
      language: "javascript",
      output: `
public/images/logo.png
      `,
    },


    {
      title: "Getting File Extension",
      content: `
extname() returns the file extension.
      `,
      code: `const path = require("path");

console.log(

    path.extname("photo.png")

);`,
      language: "javascript",
      output: `
.png
      `,
    },


    {
      title: "OS Module",
      content: `
The os module provides information about the operating system.
      `,
      code: `const os = require("os");

console.log(os.platform());

console.log(os.arch());

console.log(os.hostname());`,
      language: "javascript",
      output: `
win32

x64

DESKTOP
      `,
    },


    {
      title: "URL Module",
      content: `
The URL module parses and creates URLs.
      `,
      code: `const url = require("url");

const myUrl = new URL(
    "https://example.com/users?id=10"
);

console.log(myUrl.hostname);

console.log(myUrl.pathname);`,
      language: "javascript",
      output: `
example.com

/users
      `,
    },


    {
      title: "HTTP Module",
      content: `
The http module allows Node.js to create web servers without Express.
      `,
    },


    {
      title: "Creating an HTTP Server",
      content: `
Create a simple HTTP server using the built-in http module.
      `,
      code: `const http = require("http");

const server = http.createServer((req, res) => {

    res.write("Hello Node.js");

    res.end();

});

server.listen(3000);`,
      language: "javascript",
      output: `
Server running on port 3000
      `,
    },


    {
      title: "Sending HTML Response",
      content: `
The HTTP server can return HTML content.
      `,
      code: `const http = require("http");

http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end("<h1>Welcome</h1>");

}).listen(3000);`,
      language: "javascript",
      output: `
<h1>Welcome</h1>
      `,
    },


    {
      title: "Events Module",
      content: `
The events module allows objects to emit and listen for custom events.
      `,
    },


    {
      title: "Creating an EventEmitter",
      content: `
EventEmitter is used to create and handle custom events.
      `,
      code: `const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("login", () => {

    console.log("User Logged In");

});

emitter.emit("login");`,
      language: "javascript",
      output: `
User Logged In
      `,
    },


    {
      title: "Buffer Module",
      content: `
Buffers store binary data.

They are commonly used when working with:

• Files

• Images

• Videos

• Network Streams
      `,
      code: `const buffer = Buffer.from("Node");

console.log(buffer);

console.log(buffer.toString());`,
      language: "javascript",
      output: `
<Buffer 4e 6f 64 65>

Node
      `,
    },


    {
      title: "Streams",
      content: `
Streams process data piece by piece instead of loading everything into memory.

Types:

• Readable

• Writable

• Duplex

• Transform
      `,
    },


    {
      title: "Reading with Streams",
      content: `
Read a file using a readable stream.
      `,
      code: `const fs = require("fs");

const stream = fs.createReadStream("demo.txt");

stream.on("data", (chunk) => {

    console.log(chunk.toString());

});`,
      language: "javascript",
      output: `
File content displayed
      `,
    },


    {
      title: "Pipes",
      content: `
Pipes connect readable streams to writable streams.

This is useful for copying files efficiently.
      `,
      code: `const fs = require("fs");

const readStream = fs.createReadStream("input.txt");

const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);`,
      language: "javascript",
      output: `
File Copied Successfully
      `,
    },


    {
      title: "zlib Module",
      content: `
The zlib module compresses and decompresses files.

Benefits:

• Faster file transfer

• Reduced storage

• Better performance
      `,
      code: `const zlib = require("zlib");

console.log("Compression Ready");`,
      language: "javascript",
      output: `
Compression Ready
      `,
    },


    {
      title: "Part 2 Summary",
      content: `
Congratulations!

You have completed Part 2.

Topics covered:

✓ Core Modules

✓ fs Module

✓ Reading Files

✓ Writing Files

✓ Appending Files

✓ Deleting Files

✓ Creating Directories

✓ Path Module

✓ OS Module

✓ URL Module

✓ HTTP Module

✓ EventEmitter

✓ Buffer

✓ Streams

✓ Pipes

✓ zlib

You are now ready to learn npm, package management, and third-party libraries in Part 3.
      `,
      tip: "Practice using the fs and http modules before moving on to npm packages and Express.js.",
    },    {
      title: "Introduction to npm",
      content: `
npm (Node Package Manager) is the default package manager for Node.js.

It helps developers:

• Install Packages

• Update Packages

• Remove Packages

• Manage Project Dependencies

• Publish Packages

npm is automatically installed when you install Node.js.
      `,
    },


    {
      title: "Checking npm Version",
      content: `
Use the following command to check the installed npm version.
      `,
      code: `npm -v`,
      language: "bash",
      output: `
10.x.x
      `,
    },


    {
      title: "Initializing a Node.js Project",
      content: `
Every Node.js project should contain a package.json file.

Create it using npm.
      `,
      code: `npm init`,
      language: "bash",
      output: `
package.json created
      `,
      tip: "Use npm init -y to generate package.json with default values.",
    },


    {
      title: "Using npm init -y",
      content: `
The -y flag skips all prompts and creates package.json automatically.
      `,
      code: `npm init -y`,
      language: "bash",
      output: `
package.json created
      `,
    },


    {
      title: "Understanding package.json",
      content: `
package.json stores project information.

Common fields include:

• name

• version

• description

• scripts

• dependencies

• devDependencies

• author

• license
      `,
      code: `{
  "name": "node-course",
  "version": "1.0.0",
  "main": "app.js"
}`,
      language: "json",
    },


    {
      title: "package-lock.json",
      content: `
package-lock.json records the exact versions of installed packages.

Benefits:

• Consistent installations

• Faster npm install

• Dependency locking
      `,
    },


    {
      title: "Installing Packages",
      content: `
Install third-party packages using npm install.
      `,
      code: `npm install axios`,
      language: "bash",
      output: `
Package installed successfully
      `,
    },


    {
      title: "Installing Multiple Packages",
      content: `
You can install multiple packages with one command.
      `,
      code: `npm install express mongoose dotenv`,
      language: "bash",
      output: `
Packages installed
      `,
    },


    {
      title: "Local vs Global Packages",
      content: `
Local Packages:

Installed only for the current project.

Global Packages:

Available from any terminal location.

Examples:

Local:
npm install express

Global:
npm install -g nodemon
      `,
    },


    {
      title: "Installing Global Packages",
      content: `
Use the -g flag to install packages globally.
      `,
      code: `npm install -g nodemon`,
      language: "bash",
      output: `
nodemon installed globally
      `,
    },


    {
      title: "Development Dependencies",
      content: `
Development dependencies are required only during development.

Install them using --save-dev.
      `,
      code: `npm install --save-dev nodemon`,
      language: "bash",
      output: `
Development dependency installed
      `,
    },


    {
      title: "Updating Packages",
      content: `
Update installed packages to newer versions.
      `,
      code: `npm update`,
      language: "bash",
      output: `
Packages updated
      `,
    },


    {
      title: "Uninstalling Packages",
      content: `
Remove unnecessary packages from your project.
      `,
      code: `npm uninstall axios`,
      language: "bash",
      output: `
Package removed
      `,
    },


    {
      title: "Semantic Versioning",
      content: `
Node.js packages follow Semantic Versioning.

Format:

MAJOR.MINOR.PATCH

Example:

1.2.5

MAJOR → Breaking Changes

MINOR → New Features

PATCH → Bug Fixes
      `,
    },


    {
      title: "npm Scripts",
      content: `
Scripts automate common tasks.

Examples:

• Start Server

• Run Tests

• Build Project
      `,
      code: `{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}`,
      language: "json",
    },


    {
      title: "Running npm Scripts",
      content: `
Execute scripts using npm run.
      `,
      code: `npm run dev`,
      language: "bash",
      output: `
Server started
      `,
    },


    {
      title: "Using Nodemon",
      content: `
Nodemon automatically restarts the server whenever files change.

This improves development speed.
      `,
      code: `nodemon app.js`,
      language: "bash",
      output: `
[nodemon] starting app.js
      `,
      tip: "Use nodemon during development instead of repeatedly restarting Node.js manually.",
    },


    {
      title: "dotenv Package",
      content: `
dotenv loads environment variables from a .env file.

Sensitive information should never be hardcoded.
      `,
      code: `npm install dotenv`,
      language: "bash",
      output: `
dotenv installed
      `,
    },


    {
      title: "Using dotenv",
      content: `
Load environment variables before accessing them.
      `,
      code: `require("dotenv").config();

console.log(process.env.PORT);`,
      language: "javascript",
      output: `
5000
      `,
    },


    {
      title: "Environment Variables",
      content: `
Environment variables store configuration values.

Common examples:

PORT

MONGO_URI

JWT_SECRET

API_KEY
      `,
      code: `.env

PORT=5000

JWT_SECRET=mysecret`,
      language: "text",
    },


    {
      title: "Using Chalk",
      content: `
Chalk styles terminal output with colors.

It improves console readability.
      `,
      code: `npm install chalk`,
      language: "bash",
      output: `
chalk installed
      `,
    },


    {
      title: "Axios Package",
      content: `
Axios is a popular HTTP client for making API requests.
      `,
      code: `npm install axios`,
      language: "bash",
      output: `
axios installed
      `,
    },


    {
      title: "Making a GET Request",
      content: `
Use Axios to fetch data from an API.
      `,
      code: `const axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/users")
.then((res) => {

    console.log(res.data);

});`,
      language: "javascript",
      output: `
User data received
      `,
    },


    {
      title: "UUID Package",
      content: `
UUID generates unique identifiers.

Useful for:

• IDs

• Tokens

• Session Keys
      `,
      code: `npm install uuid`,
      language: "bash",
      output: `
uuid installed
      `,
    },


    {
      title: "Generating UUID",
      content: `
Generate a random unique ID.
      `,
      code: `const { v4: uuid } = require("uuid");

console.log(uuid());`,
      language: "javascript",
      output: `
550e8400-e29b-41d4-a716-446655440000
      `,
    },


    {
      title: "Cross-env",
      content: `
cross-env allows environment variables to work consistently across Windows, macOS, and Linux.
      `,
      code: `npm install cross-env`,
      language: "bash",
      output: `
cross-env installed
      `,
    },


    {
      title: "Debugging Node.js",
      content: `
Node.js provides built-in debugging support.

Common debugging methods:

• console.log()

• VS Code Debugger

• Chrome DevTools

• node inspect
      `,
    },


    {
      title: "Publishing npm Packages",
      content: `
Developers can publish their own packages to the npm registry.

Basic steps:

• Create package

• Login using npm login

• Publish using npm publish
      `,
    },


    {
      title: "npm Best Practices",
      content: `
Professional recommendations:

✓ Keep dependencies updated

✓ Use package-lock.json

✓ Store secrets in .env

✓ Remove unused packages

✓ Use development dependencies correctly

✓ Use semantic versioning

✓ Keep scripts organized
      `,
      tip: "Well-managed dependencies make Node.js projects easier to maintain and deploy.",
    },


    {
      title: "Part 3 Summary",
      content: `
Congratulations!

You have completed Part 3.

Topics covered:

✓ npm

✓ package.json

✓ package-lock.json

✓ Installing Packages

✓ Local & Global Packages

✓ Development Dependencies

✓ Updating Packages

✓ Uninstalling Packages

✓ Semantic Versioning

✓ npm Scripts

✓ Nodemon

✓ dotenv

✓ Environment Variables

✓ Chalk

✓ Axios

✓ UUID

✓ Cross-env

✓ Debugging

✓ Publishing Packages

✓ npm Best Practices

You are now ready to learn Asynchronous Programming in Part 4.
      `,
      tip: "Master npm and package management before building large-scale Node.js applications.",
    },    {
      title: "Introduction to Asynchronous Programming",
      content: `
Asynchronous programming allows Node.js to perform multiple tasks without blocking the execution of other code.

Instead of waiting for one task to finish, Node.js continues executing the remaining code.

Common asynchronous operations:

• File Reading

• Database Queries

• API Requests

• Timers

• Network Operations
      `,
    },


    {
      title: "Why Asynchronous Programming?",
      content: `
Node.js uses asynchronous programming because it improves performance.

Benefits:

• Faster Applications

• Better Resource Utilization

• Handles Thousands of Requests

• Non-blocking Execution

• Scalable Applications
      `,
    },


    {
      title: "Callbacks",
      content: `
A callback is a function passed as an argument to another function.

It executes after a task has completed.

Callbacks were the first approach used for asynchronous programming in Node.js.
      `,
      code: `function greet(name, callback) {

    console.log("Hello " + name);

    callback();

}

greet("Harish", () => {

    console.log("Welcome!");

});`,
      language: "javascript",
      output: `
Hello Harish
Welcome!
      `,
    },


    {
      title: "Callback Hell",
      content: `
Callback Hell occurs when multiple callbacks are nested inside one another.

Problems:

• Difficult to Read

• Difficult to Debug

• Difficult to Maintain

Promises and async/await solve this problem.
      `,
      code: `login(() => {

    getProfile(() => {

        getOrders(() => {

            makePayment();

        });

    });

});`,
      language: "javascript",
    },


    {
      title: "Promises",
      content: `
A Promise represents the eventual completion or failure of an asynchronous operation.

Promise States:

• Pending

• Fulfilled

• Rejected
      `,
    },


    {
      title: "Creating a Promise",
      content: `
Create a Promise using the Promise constructor.
      `,
      code: `const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {

        resolve("Operation Successful");

    } else {

        reject("Operation Failed");

    }

});

promise
.then(result => console.log(result))
.catch(error => console.log(error));`,
      language: "javascript",
      output: `
Operation Successful
      `,
    },


    {
      title: "Promise Chaining",
      content: `
Promises can be chained using multiple .then() methods.
      `,
      code: `Promise.resolve(5)

.then(num => num * 2)

.then(num => num + 10)

.then(console.log);`,
      language: "javascript",
      output: `
20
      `,
    },


    {
      title: "async and await",
      content: `
async and await simplify asynchronous programming.

Advantages:

• Cleaner Code

• Easy Error Handling

• Similar to Synchronous Code
      `,
    },


    {
      title: "Using async/await",
      content: `
Await pauses execution until the Promise is resolved.
      `,
      code: `async function fetchData() {

    return "Node.js Data";

}

async function display() {

    const data = await fetchData();

    console.log(data);

}

display();`,
      language: "javascript",
      output: `
Node.js Data
      `,
      tip: "Use async/await for modern Node.js applications.",
    },


    {
      title: "Error Handling with try...catch",
      content: `
Errors inside async functions should be handled using try...catch.
      `,
      code: `async function example() {

    try {

        throw new Error("Something went wrong");

    } catch (error) {

        console.log(error.message);

    }

}

example();`,
      language: "javascript",
      output: `
Something went wrong
      `,
    },


    {
      title: "Fetch API",
      content: `
The Fetch API allows HTTP requests in modern Node.js versions.

It returns a Promise.
      `,
      code: `async function users() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    console.log(data.length);

}

users();`,
      language: "javascript",
      output: `
10
      `,
    },


    {
      title: "Using Axios",
      content: `
Axios is another popular library for making HTTP requests.

It automatically converts JSON responses.
      `,
      code: `const axios = require("axios");

async function users() {

    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );

    console.log(response.data.length);

}

users();`,
      language: "javascript",
      output: `
10
      `,
    },


    {
      title: "Working with JSON",
      content: `
JSON (JavaScript Object Notation) is used for data exchange.

Node.js provides:

JSON.parse()

JSON.stringify()
      `,
      code: `const user = {

    name: "Harish",

    age: 21

};

const json = JSON.stringify(user);

console.log(json);`,
      language: "javascript",
      output: `
{"name":"Harish","age":21}
      `,
    },


    {
      title: "Event Loop",
      content: `
The Event Loop manages asynchronous operations.

Responsibilities:

• Executes Callbacks

• Handles Timers

• Processes Events

• Coordinates Non-blocking Operations

The Event Loop is the heart of Node.js.
      `,
    },


    {
      title: "Microtasks",
      content: `
Microtasks execute immediately after the current operation.

Examples:

• Promise.then()

• queueMicrotask()

Microtasks have higher priority than timers.
      `,
    },


    {
      title: "Macrotasks",
      content: `
Macrotasks are scheduled by the Event Loop.

Examples:

• setTimeout()

• setInterval()

• setImmediate()
      `,
    },


    {
      title: "Child Process Module",
      content: `
The child_process module creates new operating system processes.

Useful for:

• Running Shell Commands

• Executing Scripts

• Automation
      `,
      code: `const { exec } = require("child_process");

exec("node -v", (err, stdout) => {

    console.log(stdout);

});`,
      language: "javascript",
      output: `
v22.x.x
      `,
    },


    {
      title: "Worker Threads",
      content: `
Worker Threads execute CPU-intensive tasks on separate threads.

Benefits:

• Better Performance

• Parallel Processing

• Prevents Blocking
      `,
    },


    {
      title: "Cluster Module",
      content: `
The Cluster module creates multiple Node.js processes.

Advantages:

• Better CPU Utilization

• High Availability

• Increased Performance
      `,
    },


    {
      title: "Performance Optimization",
      content: `
Improve Node.js performance by:

• Avoid Blocking Code

• Use Streams

• Cache Frequently Used Data

• Compress Responses

• Use Worker Threads

• Optimize Database Queries
      `,
      tip: "Performance optimization becomes important as your application grows.",
    },


    {
      title: "Part 4 Summary",
      content: `
Congratulations!

You have completed Part 4.

Topics covered:

✓ Asynchronous Programming

✓ Callbacks

✓ Callback Hell

✓ Promises

✓ Promise Chaining

✓ async/await

✓ try...catch

✓ Fetch API

✓ Axios

✓ JSON

✓ Event Loop

✓ Microtasks

✓ Macrotasks

✓ Child Processes

✓ Worker Threads

✓ Cluster Module

✓ Performance Optimization

You are now ready to learn Advanced Node.js concepts in Part 5.
      `,
      tip: "Master async/await and the Event Loop before building large-scale Node.js applications.",
    },    {
      title: "Introduction to Modules",
      content: `
Modules are reusable pieces of code that help organize Node.js applications.

Benefits of Modules:

• Code Reusability

• Better Organization

• Easier Maintenance

• Separation of Concerns

Node.js supports:

• CommonJS Modules

• ES Modules
      `,
    },


    {
      title: "Creating Your Own Module",
      content: `
You can create your own modules and reuse them across different files.
      `,
      code: `// math.js

function add(a, b) {
    return a + b;
}

module.exports = add;`,
      language: "javascript",
      output: "Module Created",
    },


    {
      title: "Importing a Module",
      content: `
Import exported modules using require().
      `,
      code: `const add = require("./math");

console.log(add(10, 20));`,
      language: "javascript",
      output: `
30
      `,
    },


    {
      title: "CommonJS Modules",
      content: `
CommonJS is the default module system in Node.js.

Keywords:

• require()

• module.exports

It is widely used in existing Node.js projects.
      `,
    },


    {
      title: "ES Modules",
      content: `
Modern Node.js also supports ES Modules.

Keywords:

• import

• export

Enable ES Modules by setting:

"type": "module"

inside package.json.
      `,
      code: `export function greet() {
    console.log("Hello");
}`,
      language: "javascript",
      output: `
Module Exported
      `,
    },


    {
      title: "Importing ES Modules",
      content: `
Import exported members using the import keyword.
      `,
      code: `import { greet } from "./app.js";

greet();`,
      language: "javascript",
      output: `
Hello
      `,
    },


    {
      title: "REST API Basics",
      content: `
REST APIs allow communication between clients and servers.

Common HTTP Methods:

• GET

• POST

• PUT

• PATCH

• DELETE

REST APIs usually exchange JSON data.
      `,
    },


    {
      title: "Express.js Introduction",
      content: `
Express.js is the most popular framework for Node.js.

Advantages:

• Simple Routing

• Middleware Support

• Fast Development

• REST API Development
      `,
      code: `npm install express`,
      language: "bash",
      output: `
Express Installed
      `,
    },


    {
      title: "MongoDB Introduction",
      content: `
MongoDB is a NoSQL database widely used with Node.js.

Features:

• Document Database

• Flexible Schema

• High Performance

• Scalable
      `,
    },


    {
      title: "Authentication Basics",
      content: `
Authentication verifies the identity of users.

Common methods:

• Username & Password

• JWT

• OAuth

• Google Login

• GitHub Login
      `,
    },


    {
      title: "JWT Authentication",
      content: `
JSON Web Tokens (JWT) are used for secure authentication.

Workflow:

Login

↓

Generate Token

↓

Send Token

↓

Verify Token

↓

Access Protected Routes
      `,
    },


    {
      title: "Password Hashing",
      content: `
Passwords should never be stored in plain text.

bcrypt converts passwords into secure hashes before storing them.
      `,
      code: `const bcrypt = require("bcrypt");

bcrypt.hash("123456", 10)
.then(console.log);`,
      language: "javascript",
      output: `
$2b$10$...
      `,
    },


    {
      title: "Logging",
      content: `
Logging helps monitor application activity.

Popular logging libraries:

• Morgan

• Winston

• Pino

Logs help during debugging and production monitoring.
      `,
    },


    {
      title: "Testing Node.js Applications",
      content: `
Testing ensures application quality.

Popular Testing Frameworks:

• Jest

• Mocha

• Chai

• Supertest
      `,
    },


    {
      title: "Socket.IO",
      content: `
Socket.IO enables real-time communication.

Applications:

• Chat Applications

• Online Games

• Notifications

• Live Dashboards
      `,
      code: `npm install socket.io`,
      language: "bash",
      output: `
Socket.IO Installed
      `,
    },


    {
      title: "File Uploads",
      content: `
Node.js applications commonly upload files using Multer.

Supported uploads:

• Images

• Videos

• PDFs

• Documents
      `,
    },


    {
      title: "Application Security",
      content: `
Best security practices:

✓ Validate Input

✓ Hash Passwords

✓ Use HTTPS

✓ Store Secrets in .env

✓ Prevent SQL/NoSQL Injection

✓ Protect APIs with JWT

✓ Enable CORS Properly
      `,
    },


    {
      title: "Performance Optimization",
      content: `
Ways to improve performance:

• Caching

• Compression

• Streams

• Database Indexing

• Load Balancing

• Worker Threads
      `,
    },


    {
      title: "Deployment",
      content: `
Deploy Node.js applications using:

• Render

• Railway

• Vercel

• DigitalOcean

• AWS

• Azure

• Google Cloud
      `,
    },


    {
      title: "PM2",
      content: `
PM2 is a production process manager.

Features:

• Auto Restart

• Monitoring

• Clustering

• Log Management
      `,
      code: `npm install -g pm2

pm2 start app.js`,
      language: "bash",
      output: `
Application Started
      `,
    },


    {
      title: "Docker",
      content: `
Docker packages your Node.js application with all required dependencies.

Benefits:

• Easy Deployment

• Consistent Environment

• Better Scalability
      `,
    },


    {
      title: "Node.js Best Practices",
      content: `
Professional recommendations:

✓ Follow MVC Architecture

✓ Keep Code Modular

✓ Handle Errors Properly

✓ Validate Input

✓ Use Environment Variables

✓ Keep Dependencies Updated

✓ Write Unit Tests

✓ Use Async/Await

✓ Secure Sensitive Data

✓ Optimize Performance
      `,
      tip: "Writing clean and maintainable code is as important as making the application work.",
    },


    {
      title: "Node.js Interview Questions",
      content: `
Frequently Asked Questions:

• What is Node.js?

• Explain Event Loop.

• Difference between require() and import?

• What is npm?

• What is Express?

• What are Streams?

• What is Buffer?

• What are Worker Threads?

• Explain JWT.

• Explain Middleware.
      `,
    },


    {
      title: "Node.js Career Roadmap",
      content: `
Recommended Learning Path:

1. HTML

2. CSS

3. JavaScript

4. Git & GitHub

5. Node.js

6. Express.js

7. MongoDB

8. REST APIs

9. Authentication

10. React

11. MERN Stack

12. Docker

13. CI/CD

14. Cloud Deployment
      `,
    },


    {
      title: "Complete Node.js Course Summary",
      content: `
🎉 Congratulations!

You have successfully completed the Node.js Course.

Topics Covered:

✓ Node.js Fundamentals

✓ Architecture

✓ Event Loop

✓ Core Modules

✓ File System

✓ HTTP Server

✓ npm

✓ Package Management

✓ Environment Variables

✓ Asynchronous Programming

✓ Promises

✓ Async/Await

✓ Event Loop Internals

✓ Modules

✓ CommonJS

✓ ES Modules

✓ Express Introduction

✓ MongoDB Basics

✓ Authentication

✓ JWT

✓ bcrypt

✓ File Uploads

✓ Socket.IO

✓ Testing

✓ Security

✓ Performance Optimization

✓ Deployment

✓ PM2

✓ Docker

✓ Best Practices

✓ Interview Questions

✓ Career Roadmap

You are now ready to build professional backend applications using Node.js and continue your journey with the MERN Stack.
      `,
      tip: "Build projects like a Blog API, Authentication System, Chat Application, E-commerce Backend, LMS Backend, and REST API to master Node.js.",
    },


  ],
};