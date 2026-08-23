export const expressContent = {
  title: "Express.js Framework",
  description:
    "Learn Express.js from beginner to advanced with routing, middleware, REST APIs, authentication, MongoDB integration, deployment, and best practices.",

  sections: [

    {
      title: "Introduction to Express.js",
      content: `
Express.js is a fast, minimal, and flexible web application framework for Node.js.

It simplifies backend development by providing features for:

• Routing

• Middleware

• REST APIs

• Authentication

• Static File Serving

• Error Handling

Express.js is one of the most popular backend frameworks in the JavaScript ecosystem.
      `,
    },


    {
      title: "What is Express.js?",
      content: `
Express.js is an open-source framework built on top of Node.js.

It helps developers build web servers and APIs quickly with less code.

Express is commonly used for:

• REST APIs

• MERN Stack Applications

• Authentication Systems

• Real-time Applications

• Backend Services
      `,
    },


    {
      title: "Features of Express.js",
      content: `
Major features of Express.js:

• Lightweight Framework

• Fast Routing

• Middleware Support

• REST API Development

• Template Engine Support

• Static File Serving

• Error Handling

• Third-party Middleware

• Scalable Architecture
      `,
    },


    {
      title: "Advantages of Express.js",
      content: `
Advantages:

✓ Easy to Learn

✓ Minimal Boilerplate

✓ Fast Performance

✓ Large Community

✓ Huge npm Ecosystem

✓ Flexible Structure

✓ Perfect for MERN Stack

✓ Easy API Development
      `,
    },


    {
      title: "Applications of Express.js",
      content: `
Express.js is used for:

• REST APIs

• E-Commerce Backends

• Chat Applications

• Learning Management Systems

• Social Media Platforms

• Authentication Servers

• File Upload Services

• Real-time Applications
      `,
    },


    {
      title: "Prerequisites",
      content: `
Before learning Express.js you should know:

• HTML

• CSS

• JavaScript

• ES6+

• Node.js

• npm

Basic knowledge of HTTP is also recommended.
      `,
    },


    {
      title: "Installing Express.js",
      content: `
Create a new Node.js project and install Express.
      `,
      code: `npm init -y

npm install express`,
      language: "bash",
      output: `
package.json created

Express installed successfully
      `,
      tip: "Initialize your project before installing Express.",
    },


    {
      title: "Project Folder Structure",
      content: `
A simple Express project structure:

project/

node_modules/

public/

routes/

controllers/

package.json

server.js
      `,
    },


    {
      title: "Creating Your First Express Server",
      content: `
Create a file named server.js and initialize an Express application.
      `,
      code: `const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Running");
});`,
      language: "javascript",
      output: `
Server Running
      `,
    },


    {
      title: "Starting the Server",
      content: `
Run the Express server using Node.js.
      `,
      code: `node server.js`,
      language: "bash",
      output: `
Server Running
      `,
    },


    {
      title: "Using Nodemon",
      content: `
Nodemon automatically restarts the server whenever files change.
      `,
      code: `npm install --save-dev nodemon

npx nodemon server.js`,
      language: "bash",
      output: `
[nodemon] starting server.js
      `,
      tip: "Nodemon improves development speed by eliminating manual restarts.",
    },


    {
      title: "Hello World Example",
      content: `
Create your first route that returns a simple response.
      `,
      code: `const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express!");
});

app.listen(3000);`,
      language: "javascript",
      output: `
Hello Express!
      `,
    },


    {
      title: "Understanding app.listen()",
      content: `
app.listen() starts the web server and listens for incoming requests.

Syntax:

app.listen(PORT, callback)
      `,
      code: `app.listen(3000, () => {
    console.log("Server Started");
});`,
      language: "javascript",
      output: `
Server Started
      `,
    },


    {
      title: "HTTP Request Lifecycle",
      content: `
Request Flow:

Client

↓

Express Server

↓

Route

↓

Middleware

↓

Response

Every incoming request follows this lifecycle.
      `,
    },


    {
      title: "Understanding Routes",
      content: `
Routes determine how the server responds to client requests.

Example routes:

/

about

contact

login

register

products
      `,
    },


    {
      title: "Creating Multiple Routes",
      content: `
Express allows multiple routes inside the same application.
      `,
      code: `app.get("/", (req, res) => {
    res.send("Home");
});

app.get("/about", (req, res) => {
    res.send("About");
});

app.get("/contact", (req, res) => {
    res.send("Contact");
});`,
      language: "javascript",
      output: `
Home

About

Contact
      `,
    },


    {
      title: "HTTP Methods",
      content: `
Express supports all HTTP methods.

Common methods:

GET

POST

PUT

PATCH

DELETE
      `,
    },


    {
      title: "GET Request",
      content: `
GET requests retrieve data from the server.
      `,
      code: `app.get("/users", (req, res) => {
    res.send("All Users");
});`,
      language: "javascript",
      output: `
All Users
      `,
    },


    {
      title: "POST Request",
      content: `
POST requests send new data to the server.
      `,
      code: `app.post("/users", (req, res) => {
    res.send("User Created");
});`,
      language: "javascript",
      output: `
User Created
      `,
    },


    {
      title: "Request and Response Objects",
      content: `
Every route receives two important objects:

req

Contains request information.

res

Used to send responses back to the client.
      `,
    },


    {
      title: "Sending JSON Response",
      content: `
Express can easily return JSON data.
      `,
      code: `app.get("/student", (req, res) => {

    res.json({
        name: "Harish",
        age: 21,
        course: "Express.js"
    });

});`,
      language: "javascript",
      output: `
{
  "name":"Harish",
  "age":21,
  "course":"Express.js"
}
      `,
    },


    {
      title: "Serving Static Files",
      content: `
Static files include:

• HTML

• CSS

• JavaScript

• Images

Use express.static() to serve them.
      `,
      code: `app.use(express.static("public"));`,
      language: "javascript",
      output: "Static files enabled",
    },


    {
      title: "Environment Variables",
      content: `
Environment variables store sensitive information.

Examples:

• PORT

• Database URL

• JWT Secret

• API Keys
      `,
      code: `PORT=5000`,
      language: "text",
      output: "Environment variable defined",
      tip: "Store environment variables in a .env file and never commit it to Git.",
    },


    {
      title: "Part 1 Summary",
      content: `
Congratulations!

You have completed Part 1.

Topics covered:

✓ Introduction to Express.js

✓ Installing Express

✓ Creating Server

✓ Running Server

✓ Nodemon

✓ Routes

✓ HTTP Methods

✓ Request & Response

✓ JSON Responses

✓ Static Files

✓ Environment Variables

You are now ready to learn Middleware and Routing in Part 2.
      `,
      tip: "Practice by building a small Express server with multiple routes before moving to the next part.",
    },
    {
      title: "Introduction to Middleware",
      content: `
Middleware is a function that executes between receiving a request and sending a response.

It can:

• Execute code

• Modify requests

• Modify responses

• End request-response cycle

• Call the next middleware

Middleware is one of the most important features of Express.js.
      `,
    },


    {
      title: "Middleware Flow",
      content: `
Request Flow:

Client

↓

Middleware

↓

Route Handler

↓

Response

Multiple middleware functions can run for a single request.
      `,
    },


    {
      title: "Creating Custom Middleware",
      content: `
A middleware function receives three parameters:

req

res

next

The next() function passes control to the next middleware.
      `,
      code: `const logger = (req, res, next) => {

    console.log("Request Received");

    next();

};

app.use(logger);`,
      language: "javascript",
      output: `
Request Received
      `,
      tip: "Always call next() unless you are sending a response.",
    },


    {
      title: "Application-Level Middleware",
      content: `
Application-level middleware runs for every request in the application.
      `,
      code: `app.use((req, res, next) => {

    console.log("Application Middleware");

    next();

});`,
      language: "javascript",
      output: `
Application Middleware
      `,
    },


    {
      title: "Route-Level Middleware",
      content: `
Route middleware runs only for specific routes.
      `,
      code: `const auth = (req, res, next) => {

    console.log("Authentication");

    next();

};

app.get("/dashboard", auth, (req, res) => {

    res.send("Dashboard");

});`,
      language: "javascript",
      output: `
Authentication

Dashboard
      `,
    },


    {
      title: "Built-in Middleware",
      content: `
Express provides several built-in middleware.

Common middleware:

• express.json()

• express.urlencoded()

• express.static()
      `,
    },


    {
      title: "express.json()",
      content: `
express.json() parses incoming JSON request bodies.

Without this middleware, req.body will be undefined for JSON requests.
      `,
      code: `app.use(express.json());`,
      language: "javascript",
      output: "JSON middleware enabled",
    },


    {
      title: "express.urlencoded()",
      content: `
Parses form data submitted using HTML forms.
      `,
      code: `app.use(express.urlencoded({
    extended: true
}));`,
      language: "javascript",
      output: "URL encoded middleware enabled",
    },


    {
      title: "Reading Request Body",
      content: `
Access submitted data using req.body.
      `,
      code: `app.post("/users", (req, res) => {

    console.log(req.body);

    res.send("Data Received");

});`,
      language: "javascript",
      output: `
Data Received
      `,
    },


    {
      title: "Express Router",
      content: `
Express Router organizes routes into separate files.

Benefits:

• Cleaner code

• Better organization

• Easy maintenance

• Modular structure
      `,
    },


    {
      title: "Creating a Router",
      content: `
Create a separate routes file.
      `,
      code: `const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

    res.send("Users Route");

});

module.exports = router;`,
      language: "javascript",
      output: `
Users Route
      `,
    },


    {
      title: "Using Express Router",
      content: `
Import and register the router inside the main application.
      `,
      code: `const userRoutes = require("./routes/users");

app.use("/users", userRoutes);`,
      language: "javascript",
      output: "Router connected",
    },


    {
      title: "Route Parameters",
      content: `
Route parameters capture dynamic values from URLs.
      `,
      code: `app.get("/users/:id", (req, res) => {

    res.send(req.params.id);

});`,
      language: "javascript",
      output: `
25
      `,
    },


    {
      title: "Multiple Route Parameters",
      content: `
Routes can have multiple parameters.
      `,
      code: `app.get("/users/:id/books/:bookId",

(req, res) => {

    res.json(req.params);

});`,
      language: "javascript",
      output: `
{
  "id":"10",
  "bookId":"5"
}
      `,
    },


    {
      title: "Query Parameters",
      content: `
Query parameters provide optional values in URLs.

Example:

/products?page=2
      `,
      code: `app.get("/products", (req, res) => {

    res.send(req.query.page);

});`,
      language: "javascript",
      output: `
2
      `,
    },


    {
      title: "Request Headers",
      content: `
Headers contain metadata about the request.

Examples:

• Authorization

• Content-Type

• User-Agent
      `,
      code: `console.log(req.headers);`,
      language: "javascript",
      output: `
Request headers displayed
      `,
    },


    {
      title: "Sending Status Codes",
      content: `
Use status() before sending responses.
      `,
      code: `res.status(200).send("Success");`,
      language: "javascript",
      output: `
Success
      `,
    },


    {
      title: "Sending JSON with Status",
      content: `
Return JSON along with an HTTP status code.
      `,
      code: `res.status(201).json({

    success: true,

    message: "User Created"

});`,
      language: "javascript",
      output: `
{
  "success": true,
  "message":"User Created"
}
      `,
    },


    {
      title: "Serving HTML Files",
      content: `
Express can send HTML files using sendFile().
      `,
      code: `const path = require("path");

app.get("/", (req, res) => {

    res.sendFile(

        path.join(__dirname, "index.html")

    );

});`,
      language: "javascript",
      output: "HTML page displayed",
    },


    {
      title: "CORS",
      content: `
CORS (Cross-Origin Resource Sharing) allows requests from different domains.

Required for frontend-backend communication in MERN applications.
      `,
      code: `npm install cors`,
      language: "bash",
      output: "CORS installed",
    },


    {
      title: "Using CORS",
      content: `
Enable CORS middleware.
      `,
      code: `const cors = require("cors");

app.use(cors());`,
      language: "javascript",
      output: "CORS enabled",
      tip: "Restrict allowed origins in production instead of allowing all origins.",
    },


    {
      title: "Morgan Logger",
      content: `
Morgan logs incoming HTTP requests.

Useful during development.
      `,
      code: `npm install morgan`,
      language: "bash",
      output: "Morgan installed",
    },


    {
      title: "Using Morgan",
      content: `
Enable request logging.
      `,
      code: `const morgan = require("morgan");

app.use(morgan("dev"));`,
      language: "javascript",
      output: `
GET /users 200
      `,
    },


    {
      title: "Helmet",
      content: `
Helmet helps secure Express applications by setting HTTP headers.

It protects against several common web vulnerabilities.
      `,
      code: `npm install helmet`,
      language: "bash",
      output: "Helmet installed",
    },


    {
      title: "Using Helmet",
      content: `
Enable Helmet middleware.
      `,
      code: `const helmet = require("helmet");

app.use(helmet());`,
      language: "javascript",
      output: "Security headers enabled",
    },


    {
      title: "Cookie Parser",
      content: `
cookie-parser reads cookies sent by the browser.
      `,
      code: `npm install cookie-parser`,
      language: "bash",
      output: "Cookie Parser installed",
    },


    {
      title: "Using Cookie Parser",
      content: `
Register the cookie-parser middleware.
      `,
      code: `const cookieParser = require("cookie-parser");

app.use(cookieParser());`,
      language: "javascript",
      output: "Cookies parsed",
    },


    {
      title: "Basic Error Handling",
      content: `
Handle unexpected errors using error-handling middleware.
      `,
      code: `app.use((err, req, res, next) => {

    res.status(500).json({

        message: "Internal Server Error"

    });

});`,
      language: "javascript",
      output: `
{
  "message":"Internal Server Error"
}
      `,
    },


    {
      title: "Express Best Practices",
      content: `
Professional recommendations:

✓ Keep routes modular

✓ Use middleware wisely

✓ Validate request data

✓ Return proper status codes

✓ Organize controllers

✓ Handle errors centrally

✓ Use environment variables

✓ Secure APIs with Helmet and CORS
      `,
      tip: "A well-structured Express application is easier to maintain, test, and scale.",
    },    {
      title: "Introduction to MongoDB",
      content: `
MongoDB is a NoSQL database that stores data as JSON-like documents.

Express.js is commonly used with MongoDB in the MERN stack.

Benefits:

• Flexible Schema

• High Performance

• Scalable

• JSON Documents

• Easy Integration with Node.js
      `,
    },


    {
      title: "Installing Mongoose",
      content: `
Mongoose is an Object Data Modeling (ODM) library for MongoDB.

Install it using npm.
      `,
      code: `npm install mongoose`,
      language: "bash",
      output: "Mongoose installed successfully",
      tip: "Mongoose simplifies database operations and provides schema validation.",
    },


    {
      title: "Connecting to MongoDB",
      content: `
Connect your Express application to MongoDB using Mongoose.
      `,
      code: `const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/learnwell")
.then(() => {
    console.log("Database Connected");
})
.catch((err) => {
    console.log(err);
});`,
      language: "javascript",
      output: `
Database Connected
      `,
    },


    {
      title: "Using Environment Variables",
      content: `
Store your MongoDB connection string inside a .env file.
      `,
      code: `.env

MONGO_URI=mongodb://127.0.0.1:27017/learnwell`,
      language: "text",
      output: "Environment variable created",
    },


    {
      title: "Loading Environment Variables",
      content: `
Use the dotenv package to load environment variables.
      `,
      code: `npm install dotenv`,
      language: "bash",
      output: "dotenv installed",
    },


    {
      title: "Using dotenv",
      content: `
Load environment variables before starting your application.
      `,
      code: `require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);`,
      language: "javascript",
      output: "Database connected using .env",
    },


    {
      title: "Creating a Schema",
      content: `
A schema defines the structure of documents inside a collection.
      `,
      code: `const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    name: String,

    age: Number,

    course: String

});`,
      language: "javascript",
      output: "Schema created",
    },


    {
      title: "Creating a Model",
      content: `
Models are created from schemas and interact with MongoDB collections.
      `,
      code: `const Student = mongoose.model(
    "Student",
    studentSchema
);`,
      language: "javascript",
      output: "Model created",
    },


    {
      title: "Creating a Document",
      content: `
Insert a new document into the database.
      `,
      code: `const student = new Student({

    name: "Harish",

    age: 21,

    course: "Express.js"

});

student.save();`,
      language: "javascript",
      output: "Student saved successfully",
    },


    {
      title: "Finding Documents",
      content: `
Retrieve all documents from a collection.
      `,
      code: `Student.find()
.then((students) => {
    console.log(students);
});`,
      language: "javascript",
      output: `
[
  {
    "name":"Harish",
    "age":21
  }
]
      `,
    },


    {
      title: "Finding One Document",
      content: `
Retrieve a single document matching a condition.
      `,
      code: `Student.findOne({

    name: "Harish"

});`,
      language: "javascript",
      output: "Student document returned",
    },


    {
      title: "Finding by ID",
      content: `
Use findById() when searching by MongoDB ObjectId.
      `,
      code: `Student.findById(
    "64ab1234567890abcdef1234"
);`,
      language: "javascript",
      output: "Document found",
    },


    {
      title: "Updating Documents",
      content: `
Update an existing document.
      `,
      code: `Student.findByIdAndUpdate(

    id,

    { age: 22 }

);`,
      language: "javascript",
      output: "Document updated",
    },


    {
      title: "Deleting Documents",
      content: `
Remove documents from the database.
      `,
      code: `Student.findByIdAndDelete(id);`,
      language: "javascript",
      output: "Document deleted",
    },


    {
      title: "CRUD Operations",
      content: `
CRUD stands for:

Create

Read

Update

Delete

These operations are the foundation of database applications.
      `,
    },


    {
      title: "Schema Validation",
      content: `
Mongoose validates data before saving it.
      `,
      code: `const studentSchema = new mongoose.Schema({

    name: {

        type: String,

        required: true

    },

    age: {

        type: Number,

        min: 1

    }

});`,
      language: "javascript",
      output: "Validation enabled",
    },


    {
      title: "Default Values",
      content: `
Schemas can automatically assign default values.
      `,
      code: `createdAt: {

    type: Date,

    default: Date.now

}`,
      language: "javascript",
      output: "Default value configured",
    },


    {
      title: "Unique Fields",
      content: `
Prevent duplicate values using the unique option.
      `,
      code: `email: {

    type: String,

    unique: true

}`,
      language: "javascript",
      output: "Unique field created",
    },


    {
      title: "Query Operators",
      content: `
Mongoose supports MongoDB query operators.

Examples:

$gt

$lt

$gte

$lte

$in
      `,
      code: `Student.find({

    age: {

        $gte: 18

    }

});`,
      language: "javascript",
      output: "Matching documents returned",
    },


    {
      title: "Sorting Documents",
      content: `
Sort query results using sort().
      `,
      code: `Student.find()

.sort({ age: -1 });`,
      language: "javascript",
      output: "Students sorted",
    },


    {
      title: "Limiting Results",
      content: `
Use limit() to reduce the number of returned documents.
      `,
      code: `Student.find()

.limit(5);`,
      language: "javascript",
      output: "First five documents returned",
    },


    {
      title: "Skipping Documents",
      content: `
skip() is commonly used for pagination.
      `,
      code: `Student.find()

.skip(10)

.limit(5);`,
      language: "javascript",
      output: "Paginated results returned",
    },


    {
      title: "Population",
      content: `
Population replaces referenced ObjectIds with actual documents.

It is commonly used to connect collections.
      `,
      code: `Student.find()

.populate("course");`,
      language: "javascript",
      output: "Referenced documents loaded",
    },


    {
      title: "Aggregation",
      content: `
Aggregation performs advanced data analysis.

Examples:

• Grouping

• Counting

• Summing

• Filtering
      `,
      code: `Student.aggregate([
    {
        $group: {
            _id: "$course",
            total: {
                $sum: 1
            }
        }
    }
]);`,
      language: "javascript",
      output: "Aggregation completed",
    },


    {
      title: "MVC Architecture",
      content: `
Professional Express applications follow the MVC pattern.

Model

Handles database logic.

View

Displays information (optional in APIs).

Controller

Contains business logic.

Benefits:

• Clean code

• Easy maintenance

• Better scalability
      `,
    },


    {
      title: "Recommended Folder Structure",
      content: `
project/

controllers/

models/

routes/

middleware/

config/

public/

uploads/

utils/

server.js
      `,
    },


    {
      title: "Part 3 Summary",
      content: `
Congratulations!

You have completed Part 3.

Topics covered:

✓ MongoDB

✓ Mongoose

✓ Database Connection

✓ Environment Variables

✓ Schemas

✓ Models

✓ CRUD Operations

✓ Validation

✓ Query Operators

✓ Sorting

✓ Pagination

✓ Population

✓ Aggregation

✓ MVC Architecture

You are now ready to build complete database-driven Express applications.
      `,
      tip: "Always separate models, controllers, and routes to keep your code organized and maintainable.",
    },    {
      title: "Introduction to MongoDB",
      content: `
MongoDB is a NoSQL database that stores data as JSON-like documents.

Express.js is commonly used with MongoDB in the MERN stack.

Benefits:

• Flexible Schema

• High Performance

• Scalable

• JSON Documents

• Easy Integration with Node.js
      `,
    },


    {
      title: "Installing Mongoose",
      content: `
Mongoose is an Object Data Modeling (ODM) library for MongoDB.

Install it using npm.
      `,
      code: `npm install mongoose`,
      language: "bash",
      output: "Mongoose installed successfully",
      tip: "Mongoose simplifies database operations and provides schema validation.",
    },


    {
      title: "Connecting to MongoDB",
      content: `
Connect your Express application to MongoDB using Mongoose.
      `,
      code: `const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/learnwell")
.then(() => {
    console.log("Database Connected");
})
.catch((err) => {
    console.log(err);
});`,
      language: "javascript",
      output: `
Database Connected
      `,
    },


    {
      title: "Using Environment Variables",
      content: `
Store your MongoDB connection string inside a .env file.
      `,
      code: `.env

MONGO_URI=mongodb://127.0.0.1:27017/learnwell`,
      language: "text",
      output: "Environment variable created",
    },


    {
      title: "Loading Environment Variables",
      content: `
Use the dotenv package to load environment variables.
      `,
      code: `npm install dotenv`,
      language: "bash",
      output: "dotenv installed",
    },


    {
      title: "Using dotenv",
      content: `
Load environment variables before starting your application.
      `,
      code: `require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);`,
      language: "javascript",
      output: "Database connected using .env",
    },


    {
      title: "Creating a Schema",
      content: `
A schema defines the structure of documents inside a collection.
      `,
      code: `const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    name: String,

    age: Number,

    course: String

});`,
      language: "javascript",
      output: "Schema created",
    },


    {
      title: "Creating a Model",
      content: `
Models are created from schemas and interact with MongoDB collections.
      `,
      code: `const Student = mongoose.model(
    "Student",
    studentSchema
);`,
      language: "javascript",
      output: "Model created",
    },


    {
      title: "Creating a Document",
      content: `
Insert a new document into the database.
      `,
      code: `const student = new Student({

    name: "Harish",

    age: 21,

    course: "Express.js"

});

student.save();`,
      language: "javascript",
      output: "Student saved successfully",
    },


    {
      title: "Finding Documents",
      content: `
Retrieve all documents from a collection.
      `,
      code: `Student.find()
.then((students) => {
    console.log(students);
});`,
      language: "javascript",
      output: `
[
  {
    "name":"Harish",
    "age":21
  }
]
      `,
    },


    {
      title: "Finding One Document",
      content: `
Retrieve a single document matching a condition.
      `,
      code: `Student.findOne({

    name: "Harish"

});`,
      language: "javascript",
      output: "Student document returned",
    },


    {
      title: "Finding by ID",
      content: `
Use findById() when searching by MongoDB ObjectId.
      `,
      code: `Student.findById(
    "64ab1234567890abcdef1234"
);`,
      language: "javascript",
      output: "Document found",
    },


    {
      title: "Updating Documents",
      content: `
Update an existing document.
      `,
      code: `Student.findByIdAndUpdate(

    id,

    { age: 22 }

);`,
      language: "javascript",
      output: "Document updated",
    },


    {
      title: "Deleting Documents",
      content: `
Remove documents from the database.
      `,
      code: `Student.findByIdAndDelete(id);`,
      language: "javascript",
      output: "Document deleted",
    },


    {
      title: "CRUD Operations",
      content: `
CRUD stands for:

Create

Read

Update

Delete

These operations are the foundation of database applications.
      `,
    },


    {
      title: "Schema Validation",
      content: `
Mongoose validates data before saving it.
      `,
      code: `const studentSchema = new mongoose.Schema({

    name: {

        type: String,

        required: true

    },

    age: {

        type: Number,

        min: 1

    }

});`,
      language: "javascript",
      output: "Validation enabled",
    },


    {
      title: "Default Values",
      content: `
Schemas can automatically assign default values.
      `,
      code: `createdAt: {

    type: Date,

    default: Date.now

}`,
      language: "javascript",
      output: "Default value configured",
    },


    {
      title: "Unique Fields",
      content: `
Prevent duplicate values using the unique option.
      `,
      code: `email: {

    type: String,

    unique: true

}`,
      language: "javascript",
      output: "Unique field created",
    },


    {
      title: "Query Operators",
      content: `
Mongoose supports MongoDB query operators.

Examples:

$gt

$lt

$gte

$lte

$in
      `,
      code: `Student.find({

    age: {

        $gte: 18

    }

});`,
      language: "javascript",
      output: "Matching documents returned",
    },


    {
      title: "Sorting Documents",
      content: `
Sort query results using sort().
      `,
      code: `Student.find()

.sort({ age: -1 });`,
      language: "javascript",
      output: "Students sorted",
    },


    {
      title: "Limiting Results",
      content: `
Use limit() to reduce the number of returned documents.
      `,
      code: `Student.find()

.limit(5);`,
      language: "javascript",
      output: "First five documents returned",
    },


    {
      title: "Skipping Documents",
      content: `
skip() is commonly used for pagination.
      `,
      code: `Student.find()

.skip(10)

.limit(5);`,
      language: "javascript",
      output: "Paginated results returned",
    },


    {
      title: "Population",
      content: `
Population replaces referenced ObjectIds with actual documents.

It is commonly used to connect collections.
      `,
      code: `Student.find()

.populate("course");`,
      language: "javascript",
      output: "Referenced documents loaded",
    },


    {
      title: "Aggregation",
      content: `
Aggregation performs advanced data analysis.

Examples:

• Grouping

• Counting

• Summing

• Filtering
      `,
      code: `Student.aggregate([
    {
        $group: {
            _id: "$course",
            total: {
                $sum: 1
            }
        }
    }
]);`,
      language: "javascript",
      output: "Aggregation completed",
    },


    {
      title: "MVC Architecture",
      content: `
Professional Express applications follow the MVC pattern.

Model

Handles database logic.

View

Displays information (optional in APIs).

Controller

Contains business logic.

Benefits:

• Clean code

• Easy maintenance

• Better scalability
      `,
    },


    {
      title: "Recommended Folder Structure",
      content: `
project/

controllers/

models/

routes/

middleware/

config/

public/

uploads/

utils/

server.js
      `,
    },


    {
      title: "Part 3 Summary",
      content: `
Congratulations!

You have completed Part 3.

Topics covered:

✓ MongoDB

✓ Mongoose

✓ Database Connection

✓ Environment Variables

✓ Schemas

✓ Models

✓ CRUD Operations

✓ Validation

✓ Query Operators

✓ Sorting

✓ Pagination

✓ Population

✓ Aggregation

✓ MVC Architecture

You are now ready to build complete database-driven Express applications.
      `,
      tip: "Always separate models, controllers, and routes to keep your code organized and maintainable.",
    },    {
      title: "Introduction to REST API",
      content: `
REST (Representational State Transfer) is a standard architecture for building web APIs.

A REST API allows communication between a client and a server using HTTP requests.

REST APIs are widely used in:

• MERN Stack Applications

• Mobile Applications

• Web Services

• Third-party Integrations
      `,
    },


    {
      title: "REST API Principles",
      content: `
A good REST API follows these principles:

• Client-Server Architecture

• Stateless Communication

• Resource-Based URLs

• Standard HTTP Methods

• JSON Data Exchange
      `,
    },


    {
      title: "REST API Endpoints",
      content: `
Example endpoints for managing users:

GET     /api/users

GET     /api/users/:id

POST    /api/users

PUT     /api/users/:id

DELETE  /api/users/:id
      `,
    },


    {
      title: "Controllers",
      content: `
Controllers contain the application's business logic.

Instead of writing all logic inside routes, routes call controller functions.

Benefits:

• Cleaner code

• Better organization

• Easier testing

• Reusability
      `,
    },


    {
      title: "Creating a Controller",
      content: `
Create a controller inside the controllers folder.
      `,
      code: `exports.getUsers = (req, res) => {

    res.json({
        message: "All Users"
    });

};`,
      language: "javascript",
      output: `
{
  "message":"All Users"
}
      `,
    },


    {
      title: "Using Controllers in Routes",
      content: `
Import controller functions into route files.
      `,
      code: `const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", userController.getUsers);

module.exports = router;`,
      language: "javascript",
      output: "Controller connected",
    },


    {
      title: "Password Hashing with bcrypt",
      content: `
Passwords should never be stored in plain text.

bcrypt converts passwords into secure hashes before storing them in the database.
      `,
      code: `npm install bcrypt`,
      language: "bash",
      output: "bcrypt installed",
      tip: "Always hash passwords before saving them.",
    },


    {
      title: "Hashing a Password",
      content: `
Generate a secure password hash using bcrypt.
      `,
      code: `const bcrypt = require("bcrypt");

const password = "123456";

const hashedPassword = await bcrypt.hash(password, 10);

console.log(hashedPassword);`,
      language: "javascript",
      output: "$2b$10$...",
    },


    {
      title: "Comparing Passwords",
      content: `
Use bcrypt.compare() to verify a user's password during login.
      `,
      code: `const isMatch = await bcrypt.compare(

    "123456",

    hashedPassword

);

console.log(isMatch);`,
      language: "javascript",
      output: `
true
      `,
    },


    {
      title: "JSON Web Token (JWT)",
      content: `
JWT is used for user authentication.

After successful login, the server generates a token that the client sends with future requests.

Advantages:

• Stateless Authentication

• Secure

• Fast

• Widely Used
      `,
    },


    {
      title: "Installing JWT",
      content: `
Install the jsonwebtoken package.
      `,
      code: `npm install jsonwebtoken`,
      language: "bash",
      output: "jsonwebtoken installed",
    },


    {
      title: "Generating a JWT",
      content: `
Create a token after successful login.
      `,
      code: `const jwt = require("jsonwebtoken");

const token = jwt.sign(

    { id: user._id },

    process.env.JWT_SECRET,

    { expiresIn: "1d" }

);

console.log(token);`,
      language: "javascript",
      output: "JWT generated",
    },


    {
      title: "Verifying a JWT",
      content: `
Verify incoming JWT tokens before allowing access.
      `,
      code: `const decoded = jwt.verify(

    token,

    process.env.JWT_SECRET

);

console.log(decoded);`,
      language: "javascript",
      output: "Token verified",
    },


    {
      title: "Authentication Middleware",
      content: `
Authentication middleware protects private routes.
      `,
      code: `const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    next();

};

module.exports = auth;`,
      language: "javascript",
      output: "Authentication middleware created",
    },


    {
      title: "Protected Routes",
      content: `
Only authenticated users can access protected routes.
      `,
      code: `router.get(

    "/profile",

    auth,

    (req, res) => {

        res.send("Protected Route");

    }

);`,
      language: "javascript",
      output: "Protected Route",
    },


    {
      title: "User Registration API",
      content: `
Register a new user by validating input, hashing the password, and saving the user.
      `,
      code: `router.post("/register", registerUser);`,
      language: "javascript",
      output: "User registered successfully",
    },


    {
      title: "User Login API",
      content: `
Authenticate the user and return a JWT token.
      `,
      code: `router.post("/login", loginUser);`,
      language: "javascript",
      output: "Login successful",
    },


    {
      title: "Authorization",
      content: `
Authentication identifies the user.

Authorization determines what the user is allowed to access.
      `,
    },


    {
      title: "Role-Based Access Control",
      content: `
Applications often define roles such as:

• Admin

• Teacher

• Student

• User

Each role has different permissions.
      `,
      code: `if (user.role !== "admin") {

    return res.status(403).json({

        message: "Access Denied"

    });

}`,
      language: "javascript",
      output: `
Access Denied
      `,
    },


    {
      title: "Request Validation",
      content: `
Validate incoming request data before processing it.

Validation prevents invalid or malicious input from reaching the database.
      `,
    },


    {
      title: "Express Validator",
      content: `
Express Validator provides powerful validation rules.
      `,
      code: `npm install express-validator`,
      language: "bash",
      output: "express-validator installed",
    },


    {
      title: "Validating Input",
      content: `
Check whether an email is valid before saving it.
      `,
      code: `const { body } = require("express-validator");

router.post(

    "/register",

    body("email").isEmail(),

    registerUser

);`,
      language: "javascript",
      output: "Validation enabled",
    },


    {
      title: "Refresh Tokens",
      content: `
Refresh tokens allow users to remain logged in without repeatedly entering credentials.

Common flow:

Login

↓

Access Token

↓

Refresh Token

↓

Generate New Access Token
      `,
    },


    {
      title: "Password Reset",
      content: `
Password reset flow usually includes:

• Request Reset

• Generate Secure Token

• Send Email

• Verify Token

• Set New Password
      `,
    },


    {
      title: "Email Verification",
      content: `
Email verification confirms that a user owns the provided email address.

Typical process:

Register

↓

Verification Email

↓

Click Verification Link

↓

Account Activated
      `,
    },


    {
      title: "API Security Best Practices",
      content: `
Professional recommendations:

✓ Hash passwords using bcrypt

✓ Never expose JWT secrets

✓ Validate request data

✓ Use HTTPS

✓ Limit login attempts

✓ Protect private routes

✓ Store secrets in .env

✓ Return proper HTTP status codes

✓ Sanitize user input
      `,
      tip: "Security should be considered from the beginning of every Express.js project, not added later.",
    },


    {
      title: "Part 4 Summary",
      content: `
Congratulations!

You have completed Part 4.

Topics covered:

✓ REST APIs

✓ Controllers

✓ bcrypt

✓ JWT Authentication

✓ Authentication Middleware

✓ Protected Routes

✓ User Registration

✓ User Login

✓ Authorization

✓ Role-Based Access Control

✓ Request Validation

✓ Refresh Tokens

✓ Password Reset

✓ Email Verification

✓ API Security Best Practices

You are now ready to build secure, production-ready Express.js APIs.
      `,
    },    {
      title: "Global Error Handling",
      content: `
Global error handling catches unexpected errors in one place.

Benefits:

• Cleaner code

• Consistent error responses

• Easier debugging

• Better maintenance
      `,
      code: `app.use((err, req, res, next) => {

    console.error(err);

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });

});`,
      language: "javascript",
      output: `
{
  "success": false,
  "message": "Internal Server Error"
}
      `,
      tip: "Place the global error handler after all routes.",
    },


    {
      title: "Async Error Handling",
      content: `
Async functions may throw errors.

Use try...catch or an async error handler to catch exceptions.
      `,
      code: `app.get("/users", async (req, res) => {

    try {

        const users = await User.find();

        res.json(users);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});`,
      language: "javascript",
      output: "Users returned successfully",
    },


    {
      title: "Logging",
      content: `
Logging helps monitor application behavior.

Common logging tools:

• Morgan

• Winston

• Pino

Logs can record:

• Requests

• Errors

• Warnings

• System events
      `,
    },


    {
      title: "File Upload with Multer",
      content: `
Multer is middleware for handling multipart/form-data.

It is commonly used for uploading:

• Images

• PDFs

• Videos

• Documents
      `,
      code: `npm install multer`,
      language: "bash",
      output: "Multer installed",
    },


    {
      title: "Configuring Multer",
      content: `
Configure disk storage for uploaded files.
      `,
      code: `const multer = require("multer");

const upload = multer({
    dest: "uploads/"
});

app.post(
    "/upload",
    upload.single("image"),
    (req, res) => {
        res.send("File Uploaded");
    }
);`,
      language: "javascript",
      output: "File Uploaded",
    },


    {
      title: "Cloudinary Integration",
      content: `
Cloudinary provides cloud-based media storage.

Benefits:

• Image Optimization

• CDN Delivery

• Automatic Compression

• Secure Storage
      `,
      code: `npm install cloudinary`,
      language: "bash",
      output: "Cloudinary installed",
    },


    {
      title: "Rate Limiting",
      content: `
Rate limiting prevents abuse by restricting the number of requests.

Useful for:

• Login APIs

• Authentication

• Public APIs
      `,
      code: `npm install express-rate-limit`,
      language: "bash",
      output: "Rate limiter installed",
    },


    {
      title: "Using Rate Limiter",
      content: `
Protect your API from excessive requests.
      `,
      code: `const rateLimit = require("express-rate-limit");

const limiter = rateLimit({

    windowMs: 15 * 60 * 1000,

    max: 100

});

app.use(limiter);`,
      language: "javascript",
      output: "Rate limiting enabled",
    },


    {
      title: "Caching",
      content: `
Caching improves application performance.

Popular caching solutions:

• Redis

• Memory Cache

Benefits:

• Faster responses

• Reduced database load

• Better scalability
      `,
    },


    {
      title: "API Testing",
      content: `
Testing ensures your APIs work correctly.

Popular testing tools:

• Jest

• Supertest

• Postman

• Thunder Client
      `,
    },


    {
      title: "Socket.IO",
      content: `
Socket.IO enables real-time communication.

Applications include:

• Chat Apps

• Live Notifications

• Online Games

• Collaboration Tools
      `,
      code: `npm install socket.io`,
      language: "bash",
      output: "Socket.IO installed",
    },


    {
      title: "Basic Socket.IO Server",
      content: `
Create a simple Socket.IO server.
      `,
      code: `const { Server } = require("socket.io");

const io = new Server(server);

io.on("connection", (socket) => {

    console.log("User Connected");

});`,
      language: "javascript",
      output: "User Connected",
    },


    {
      title: "Performance Optimization",
      content: `
Improve Express performance by:

• Compressing responses

• Caching

• Database indexing

• Pagination

• Efficient queries

• Using async operations
      `,
    },


    {
      title: "PM2",
      content: `
PM2 is a production process manager for Node.js.

Features:

• Auto Restart

• Monitoring

• Log Management

• Cluster Mode
      `,
      code: `npm install -g pm2`,
      language: "bash",
      output: "PM2 installed",
    },


    {
      title: "Running with PM2",
      content: `
Start an Express application using PM2.
      `,
      code: `pm2 start server.js`,
      language: "bash",
      output: "Application started with PM2",
    },


    {
      title: "Docker",
      content: `
Docker packages your Express application with all dependencies.

Benefits:

• Consistent environments

• Easy deployment

• Better scalability

• Platform independence
      `,
    },


    {
      title: "Nginx",
      content: `
Nginx acts as a reverse proxy for Express applications.

Responsibilities:

• Load Balancing

• HTTPS

• Static File Serving

• Reverse Proxy
      `,
    },


    {
      title: "Deployment",
      content: `
Popular deployment platforms:

• Render

• Railway

• DigitalOcean

• AWS

• Azure

• Google Cloud

Deployment Checklist:

✓ Environment Variables

✓ Database

✓ Build

✓ HTTPS

✓ Monitoring
      `,
    },


    {
      title: "CI/CD",
      content: `
Continuous Integration and Continuous Deployment automate development workflows.

Typical pipeline:

• Install Dependencies

• Run Tests

• Build Application

• Deploy Automatically
      `,
    },


    {
      title: "Express.js Best Practices",
      content: `
Professional recommendations:

✓ Follow MVC Architecture

✓ Keep routes modular

✓ Use Controllers

✓ Validate user input

✓ Hash passwords

✓ Protect routes with JWT

✓ Handle errors globally

✓ Use environment variables

✓ Optimize database queries

✓ Write tests

✓ Keep dependencies updated
      `,
      tip: "Following best practices makes your applications secure, scalable, and maintainable.",
    },


    {
      title: "Express.js Interview Questions",
      content: `
Frequently asked interview questions:

• What is Express.js?

• What is middleware?

• Explain Express Router.

• Difference between app.use() and app.get().

• What is JWT?

• How does bcrypt work?

• What is MVC?

• What is CORS?

• What is Multer?

• How do you handle errors in Express?
      `,
    },


    {
      title: "Express.js Career Roadmap",
      content: `
Recommended learning path:

1. HTML

2. CSS

3. JavaScript

4. Node.js

5. Express.js

6. MongoDB

7. Mongoose

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
      title: "Complete Express.js Course Summary",
      content: `
Congratulations!

You have completed the Express.js course.

Topics covered:

✓ Express Fundamentals

✓ Routing

✓ Middleware

✓ Request & Response

✓ Express Router

✓ Route Parameters

✓ Query Parameters

✓ CORS

✓ Morgan

✓ Helmet

✓ Cookie Parser

✓ MongoDB

✓ Mongoose

✓ CRUD Operations

✓ Validation

✓ MVC Architecture

✓ REST APIs

✓ Controllers

✓ bcrypt

✓ JWT Authentication

✓ Authorization

✓ Protected Routes

✓ Request Validation

✓ File Uploads (Multer)

✓ Cloudinary

✓ Rate Limiting

✓ Caching

✓ Logging

✓ Testing

✓ Socket.IO

✓ PM2

✓ Docker

✓ Nginx

✓ Deployment

✓ CI/CD

✓ Performance Optimization

✓ Best Practices

✓ Interview Preparation

✓ Career Roadmap

You are now ready to build secure, scalable, and production-ready backend applications using Express.js.
      `,
      tip: "Build real-world projects like authentication systems, e-commerce APIs, chat applications, LMS platforms, and social media backends to master Express.js.",
    },


  ],
};