export const mongoDbContent = {
  title: "MongoDB",
  description:
    "Learn MongoDB from beginner to advanced with databases, collections, CRUD operations, aggregation, indexing, Mongoose, Atlas, and best practices.",

  sections: [

    {
      title: "Introduction to MongoDB",
      content: `
MongoDB is an open-source, NoSQL document-oriented database.

Instead of storing data in tables like relational databases, MongoDB stores data as flexible JSON-like documents.

MongoDB is one of the most popular databases for modern web applications and is widely used with the MERN Stack.

MongoDB is developed by MongoDB Inc.
      `,
    },


    {
      title: "What is MongoDB?",
      content: `
MongoDB is a NoSQL database that stores data in collections and documents.

Unlike SQL databases, MongoDB does not require a fixed schema, allowing developers to store different document structures in the same collection.

MongoDB uses BSON (Binary JSON) internally for storing data efficiently.
      `,
    },


    {
      title: "History of MongoDB",
      content: `
MongoDB was first released in 2009 by MongoDB Inc.

Important milestones:

• 2009 - MongoDB released

• 2013 - MongoDB Enterprise introduced

• 2016 - MongoDB Atlas launched

• 2018 - Multi-document transactions added

Today MongoDB is one of the world's most widely used NoSQL databases.
      `,
    },


    {
      title: "Features of MongoDB",
      content: `
Major features of MongoDB:

• NoSQL Database

• Document-Oriented Storage

• Flexible Schema

• High Performance

• Horizontal Scaling

• Replication

• Aggregation Framework

• Indexing

• Atlas Cloud Support
      `,
    },


    {
      title: "Advantages of MongoDB",
      content: `
Advantages:

✓ Easy to Learn

✓ Fast Performance

✓ Flexible Data Model

✓ High Availability

✓ Automatic Scaling

✓ JSON-like Documents

✓ Large Community

✓ Excellent Cloud Support
      `,
    },


    {
      title: "Applications of MongoDB",
      content: `
MongoDB is commonly used for:

• E-commerce Websites

• Social Media Platforms

• Learning Management Systems

• Chat Applications

• Content Management Systems

• Real-Time Analytics

• IoT Applications

• MERN Stack Projects
      `,
    },


    {
      title: "SQL vs MongoDB",
      content: `
SQL Database

• Uses Tables

• Rows & Columns

• Fixed Schema

• SQL Queries

MongoDB

• Uses Collections

• Documents

• Flexible Schema

• JSON-style Queries
      `,
    },


    {
      title: "Installing MongoDB",
      content: `
Download and install MongoDB Community Server.

After installation verify using:
      `,
      code: `mongod --version

mongosh`,
      language: "bash",
      output: `
MongoDB Server Running
      `,
      tip: "If mongod is not recognized, add the MongoDB bin folder to your system PATH.",
    },


    {
      title: "MongoDB Compass",
      content: `
MongoDB Compass is the official graphical user interface (GUI) for MongoDB.

Features:

• Browse Databases

• Execute Queries

• Create Collections

• View Documents

• Aggregation Builder

Compass is beginner-friendly and useful for database management.
      `,
    },


    {
      title: "MongoDB Atlas",
      content: `
MongoDB Atlas is MongoDB's cloud database platform.

Advantages:

• Free Cluster

• Automatic Backups

• Global Deployment

• Monitoring

• High Availability

Atlas allows you to access your database from anywhere.
      `,
    },


    {
      title: "MongoDB Shell (mongosh)",
      content: `
mongosh is the official MongoDB shell.

It allows you to execute MongoDB commands from the terminal.
      `,
      code: `mongosh`,
      language: "bash",
      output: `
Current Mongosh Session Started
      `,
    },


    {
      title: "Database",
      content: `
A database is a container that stores collections.

Examples:

• school

• ecommerce

• learnwell

• company

Each MongoDB server can contain multiple databases.
      `,
    },


    {
      title: "Collection",
      content: `
A collection is similar to a table in SQL.

Collections store related documents.

Examples:

• users

• courses

• students

• products
      `,
    },


    {
      title: "Document",
      content: `
A document is the basic unit of data in MongoDB.

Documents are stored in BSON format and look similar to JSON.
      `,
      code: `{
    "name": "Harish",
    "age": 21,
    "city": "Mumbai"
}`,
      language: "json",
    },


    {
      title: "BSON",
      content: `
BSON stands for Binary JSON.

MongoDB stores data internally using BSON because it supports additional data types and provides faster processing than plain JSON.
      `,
    },


    {
      title: "Creating a Database",
      content: `
Use the use command to create or switch to a database.
      `,
      code: `use learnwell`,
      language: "mongodb",
      output: `
switched to db learnwell
      `,
    },


    {
      title: "Creating a Collection",
      content: `
Collections are created automatically when the first document is inserted.

You can also create them manually.
      `,
      code: `db.createCollection("students")`,
      language: "mongodb",
      output: `
{ ok: 1 }
      `,
    },


    {
      title: "Inserting a Document",
      content: `
Use insertOne() to insert a single document.
      `,
      code: `db.students.insertOne({

    name: "Harish",

    age: 21,

    course: "MERN"

});`,
      language: "mongodb",
      output: `
{
    acknowledged: true,
    insertedId: ObjectId(...)
}
      `,
    },


    {
      title: "Finding Documents",
      content: `
Use find() to retrieve documents from a collection.
      `,
      code: `db.students.find();`,
      language: "mongodb",
      output: `
{
    name: "Harish",
    age: 21,
    course: "MERN"
}
      `,
    },


    {
      title: "MongoDB Data Types",
      content: `
Common MongoDB data types:

• String

• Number

• Boolean

• Date

• Array

• Object

• ObjectId

• Null

• Binary Data
      `,
    },
        {
      title: "Introduction to CRUD Operations",
      content: `
CRUD stands for:

• Create

• Read

• Update

• Delete

CRUD operations are the foundation of working with MongoDB databases.

MongoDB provides built-in methods to perform each of these operations efficiently.
      `,
    },


    {
      title: "insertOne()",
      content: `
insertOne() inserts a single document into a collection.
      `,
      code: `db.students.insertOne({

    name: "Harish",

    age: 21,

    course: "MERN"

});`,
      language: "mongodb",
      output: `
{
  acknowledged: true,
  insertedId: ObjectId("...")
}
      `,
    },


    {
      title: "insertMany()",
      content: `
insertMany() inserts multiple documents into a collection.
      `,
      code: `db.students.insertMany([

    {

        name: "Rahul",

        age: 20

    },

    {

        name: "Priya",

        age: 22

    }

]);`,
      language: "mongodb",
      output: `
{
  acknowledged: true,
  insertedIds: [...]
}
      `,
    },


    {
      title: "find()",
      content: `
find() retrieves all matching documents from a collection.

If no filter is provided, all documents are returned.
      `,
      code: `db.students.find();`,
      language: "mongodb",
      output: `
[
  {
    name: "Harish",
    age: 21
  }
]
      `,
    },


    {
      title: "findOne()",
      content: `
findOne() returns the first matching document.
      `,
      code: `db.students.findOne({

    name: "Harish"

});`,
      language: "mongodb",
      output: `
{
  name: "Harish",
  age: 21
}
      `,
    },


    {
      title: "Comparison Operators",
      content: `
Comparison operators filter documents.

Common operators:

• $eq

• $ne

• $gt

• $gte

• $lt

• $lte

• $in

• $nin
      `,
    },


    {
      title: "Using $gt",
      content: `
$gt means Greater Than.
      `,
      code: `db.students.find({

    age: {

        $gt: 20

    }

});`,
      language: "mongodb",
      output: `
Students older than 20 displayed
      `,
    },


    {
      title: "Using $lt",
      content: `
$lt means Less Than.
      `,
      code: `db.students.find({

    age: {

        $lt: 22

    }

});`,
      language: "mongodb",
      output: `
Students younger than 22 displayed
      `,
    },


    {
      title: "Logical Operators",
      content: `
Logical operators combine multiple conditions.

Common operators:

• $and

• $or

• $not

• $nor
      `,
    },


    {
      title: "Using $and",
      content: `
$and returns documents that satisfy all conditions.
      `,
      code: `db.students.find({

    $and: [

        {

            age: {

                $gte: 20

            }

        },

        {

            course: "MERN"

        }

    ]

});`,
      language: "mongodb",
      output: `
Matching Students
      `,
    },


    {
      title: "Using $or",
      content: `
$or returns documents matching at least one condition.
      `,
      code: `db.students.find({

    $or: [

        {

            age: 18

        },

        {

            course: "Python"

        }

    ]

});`,
      language: "mongodb",
      output: `
Matching Documents
      `,
    },


    {
      title: "Projection",
      content: `
Projection selects specific fields from documents.

It reduces unnecessary data retrieval.
      `,
      code: `db.students.find(

    {},

    {

        name: 1,

        age: 1,

        _id: 0

    }

);`,
      language: "mongodb",
      output: `
{
  name: "Harish",
  age: 21
}
      `,
    },


    {
      title: "Sorting Documents",
      content: `
sort() arranges documents.

1 → Ascending

-1 → Descending
      `,
      code: `db.students.find().sort({

    age: -1

});`,
      language: "mongodb",
      output: `
Students sorted by age
      `,
    },


    {
      title: "Limiting Results",
      content: `
limit() restricts the number of returned documents.
      `,
      code: `db.students.find().limit(5);`,
      language: "mongodb",
      output: `
First 5 Documents
      `,
    },


    {
      title: "Skipping Documents",
      content: `
skip() ignores a specified number of documents.

Useful for pagination.
      `,
      code: `db.students.find()

.skip(5)

.limit(5);`,
      language: "mongodb",
      output: `
Documents 6 to 10
      `,
    },


    {
      title: "updateOne()",
      content: `
updateOne() updates the first matching document.
      `,
      code: `db.students.updateOne(

    {

        name: "Harish"

    },

    {

        $set: {

            age: 22

        }

    }

);`,
      language: "mongodb",
      output: `
{
  modifiedCount: 1
}
      `,
    },


    {
      title: "updateMany()",
      content: `
updateMany() updates all matching documents.
      `,
      code: `db.students.updateMany(

    {

        course: "MERN"

    },

    {

        $set: {

            active: true

        }

    }

);`,
      language: "mongodb",
      output: `
Multiple Documents Updated
      `,
    },


    {
      title: "replaceOne()",
      content: `
replaceOne() completely replaces a document except its _id.
      `,
      code: `db.students.replaceOne(

    {

        name: "Harish"

    },

    {

        name: "Harish",

        age: 22,

        city: "Delhi"

    }

);`,
      language: "mongodb",
      output: `
Document Replaced
      `,
    },


    {
      title: "deleteOne()",
      content: `
deleteOne() removes the first matching document.
      `,
      code: `db.students.deleteOne({

    name: "Harish"

});`,
      language: "mongodb",
      output: `
1 Document Deleted
      `,
    },


    {
      title: "deleteMany()",
      content: `
deleteMany() removes all matching documents.
      `,
      code: `db.students.deleteMany({

    active: false

});`,
      language: "mongodb",
      output: `
Multiple Documents Deleted
      `,
    },


    {
      title: "countDocuments()",
      content: `
countDocuments() returns the total number of matching documents.
      `,
      code: `db.students.countDocuments();`,
      language: "mongodb",
      output: `
25
      `,
    },


    {
      title: "distinct()",
      content: `
distinct() returns unique values from a specified field.
      `,
      code: `db.students.distinct("course");`,
      language: "mongodb",
      output: `
[
  "MERN",
  "Python",
  "Java"
]
      `,
    },


        {
      title: "Introduction to Aggregation",
      content: `
Aggregation is one of MongoDB's most powerful features.

It processes multiple documents and returns computed results.

Aggregation is commonly used for:

• Reports

• Analytics

• Dashboards

• Sales Statistics

• Data Transformation
      `,
    },


    {
      title: "Aggregation Pipeline",
      content: `
The Aggregation Pipeline processes documents through multiple stages.

Each stage performs a specific operation and passes the result to the next stage.

Common stages:

• $match

• $project

• $group

• $sort

• $limit

• $skip
      `,
      code: `db.students.aggregate([

    { $match: { course: "MERN" } },

    { $sort: { age: 1 } }

]);`,
      language: "mongodb",
      output: `
Filtered and Sorted Documents
      `,
    },


    {
      title: "$match Stage",
      content: `
$match filters documents in the aggregation pipeline.

It works similarly to find() but is used inside aggregate().
      `,
      code: `db.students.aggregate([

    {

        $match: {

            age: {

                $gte: 20

            }

        }

    }

]);`,
      language: "mongodb",
      output: `
Students aged 20 or above
      `,
    },


    {
      title: "$project Stage",
      content: `
$project selects, removes, or renames fields.

It is useful for controlling the output of aggregation queries.
      `,
      code: `db.students.aggregate([

    {

        $project: {

            _id: 0,

            name: 1,

            course: 1

        }

    }

]);`,
      language: "mongodb",
      output: `
Selected Fields Displayed
      `,
    },


    {
      title: "$group Stage",
      content: `
$group groups documents by a specified field.

It is commonly used with aggregation operators such as:

• $sum

• $avg

• $min

• $max

• $push
      `,
      code: `db.students.aggregate([

    {

        $group: {

            _id: "$course",

            totalStudents: {

                $sum: 1

            }

        }

    }

]);`,
      language: "mongodb",
      output: `
Student Count by Course
      `,
    },


    {
      title: "$sort Stage",
      content: `
$sort orders aggregation results.

1 → Ascending

-1 → Descending
      `,
      code: `db.students.aggregate([

    {

        $sort: {

            age: -1

        }

    }

]);`,
      language: "mongodb",
      output: `
Sorted Results
      `,
    },


    {
      title: "$limit Stage",
      content: `
$limit restricts the number of documents returned by the pipeline.
      `,
      code: `db.students.aggregate([

    {

        $limit: 5

    }

]);`,
      language: "mongodb",
      output: `
Top 5 Documents
      `,
    },


    {
      title: "$skip Stage",
      content: `
$skip ignores a specified number of documents.

Useful for pagination.
      `,
      code: `db.students.aggregate([

    {

        $skip: 10

    }

]);`,
      language: "mongodb",
      output: `
Documents After Skipping 10
      `,
    },


    {
      title: "$unwind Stage",
      content: `
$unwind separates each element of an array into individual documents.
      `,
      code: `db.students.aggregate([

    {

        $unwind: "$skills"

    }

]);`,
      language: "mongodb",
      output: `
Each Skill Displayed Separately
      `,
    },


    {
      title: "$lookup Stage",
      content: `
$lookup performs a left outer join between collections.

It is similar to SQL JOIN.
      `,
      code: `db.orders.aggregate([

    {

        $lookup: {

            from: "users",

            localField: "userId",

            foreignField: "_id",

            as: "user"

        }

    }

]);`,
      language: "mongodb",
      output: `
Joined Documents
      `,
      tip: "Use $lookup to combine related data stored in different collections.",
    },


    {
      title: "$facet Stage",
      content: `
$facet runs multiple aggregation pipelines simultaneously.

Useful for dashboards and analytics.
      `,
      code: `db.students.aggregate([

    {

        $facet: {

            total: [

                {

                    $count: "students"

                }

            ],

            courses: [

                {

                    $group: {

                        _id: "$course"

                    }

                }

            ]

        }

    }

]);`,
      language: "mongodb",
      output: `
Multiple Results Returned
      `,
    },


    {
      title: "$bucket Stage",
      content: `
$bucket groups documents into ranges.

Useful for reports and age categorization.
      `,
      code: `db.students.aggregate([

    {

        $bucket: {

            groupBy: "$age",

            boundaries: [18, 21, 25, 30],

            default: "Other"

        }

    }

]);`,
      language: "mongodb",
      output: `
Documents Grouped by Age Range
      `,
    },


    {
      title: "Regular Expressions",
      content: `
Regular expressions search text patterns.

Useful for:

• Name Search

• Email Search

• Product Search
      `,
      code: `db.students.find({

    name: {

        $regex: "^H",

        $options: "i"

    }

});`,
      language: "mongodb",
      output: `
Names Starting with H
      `,
    },


    {
      title: "Indexes",
      content: `
Indexes improve query performance.

Without indexes, MongoDB scans every document.

Common index types:

• Single Field

• Compound

• Text

• Unique
      `,
      code: `db.students.createIndex({

    email: 1

});`,
      language: "mongodb",
      output: `
Index Created
      `,
    },


    {
      title: "Text Search",
      content: `
Text indexes enable full-text search.
      `,
      code: `db.posts.createIndex({

    title: "text",

    content: "text"

});

db.posts.find({

    $text: {

        $search: "mongodb"

    }

});`,
      language: "mongodb",
      output: `
Matching Articles
      `,
    },


    {
      title: "Explain Plan",
      content: `
The explain() method shows how MongoDB executes a query.

It helps identify slow queries and determine whether indexes are being used.
      `,
      code: `db.students.find({

    age: 21

}).explain("executionStats");`,
      language: "mongodb",
      output: `
Execution Statistics Displayed
      `,
    },


    {
      title: "Performance Optimization",
      content: `
Improve MongoDB performance by:

• Creating Indexes

• Returning Only Required Fields

• Using Aggregation Efficiently

• Limiting Result Sets

• Avoiding Unnecessary $lookup Operations

• Designing Good Schemas
      `,
    },


    {
      title: "Aggregation Best Practices",
      content: `
Professional recommendations:

✓ Filter Early Using $match

✓ Project Only Required Fields

✓ Use Indexes

✓ Avoid Deep Pipelines

✓ Monitor Query Performance

✓ Test with explain()

✓ Keep Aggregations Readable
      `,
      tip: "A well-designed aggregation pipeline can significantly improve application performance.",
    },
    {
      title: "Introduction to Mongoose",
      content: `
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.

It provides a structured way to interact with MongoDB using JavaScript objects.

Benefits of Mongoose:

• Schema-Based Modeling

• Data Validation

• Middleware Support

• Population

• Built-in Query Functions

• Easy Integration with Express.js
      `,
    },


    {
      title: "Installing Mongoose",
      content: `
Install Mongoose using npm.
      `,
      code: `npm install mongoose`,
      language: "bash",
      output: `
Mongoose Installed Successfully
      `,
      tip: "Always install the latest stable version of Mongoose for new projects.",
    },


    {
      title: "Connecting to MongoDB",
      content: `
Use mongoose.connect() to establish a connection with MongoDB.
      `,
      code: `const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/learnwell")
.then(() => console.log("Database Connected"))
.catch(err => console.log(err));`,
      language: "javascript",
      output: `
Database Connected
      `,
    },


    {
      title: "Using Environment Variables",
      content: `
Store sensitive information like the MongoDB connection string in environment variables.
      `,
      code: `.env

MONGO_URI=mongodb://127.0.0.1:27017/learnwell`,
      language: "text",
      output: `
Environment Variable Created
      `,
    },


    {
      title: "Connecting Using .env",
      content: `
Use the dotenv package to load environment variables.
      `,
      code: `require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected"));`,
      language: "javascript",
      output: `
Connected
      `,
    },


    {
      title: "Creating a Schema",
      content: `
A Schema defines the structure of documents inside a collection.
      `,
      code: `const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    name: String,

    age: Number,

    course: String

});`,
      language: "javascript",
      output: `
Schema Created
      `,
    },


    {
      title: "Common Schema Data Types",
      content: `
Mongoose supports many data types.

Common types include:

• String

• Number

• Boolean

• Date

• Array

• Object

• Buffer

• ObjectId

• Mixed
      `,
    },


    {
      title: "Schema Validation",
      content: `
Validation ensures that documents meet specific requirements before being saved.
      `,
      code: `const studentSchema = new mongoose.Schema({

    name: {

        type: String,

        required: true

    },

    age: {

        type: Number,

        min: 18

    }

});`,
      language: "javascript",
      output: `
Validation Applied
      `,
      tip: "Always validate user input to maintain data integrity.",
    },


    {
      title: "Creating a Model",
      content: `
A Model is created from a schema and provides methods for interacting with the database.
      `,
      code: `const Student = mongoose.model(

    "Student",

    studentSchema

);`,
      language: "javascript",
      output: `
Model Created
      `,
    },


    {
      title: "Saving a Document",
      content: `
Create an instance of the model and save it using save().
      `,
      code: `const student = new Student({

    name: "Harish",

    age: 21,

    course: "MERN"

});

student.save();`,
      language: "javascript",
      output: `
Document Saved
      `,
    },


    {
      title: "Finding Documents",
      content: `
Models provide methods for retrieving documents.
      `,
      code: `Student.find()

.then(data => console.log(data));`,
      language: "javascript",
      output: `
Student List Displayed
      `,
    },


    {
      title: "Finding One Document",
      content: `
findOne() returns the first matching document.
      `,
      code: `Student.findOne({

    name: "Harish"

});`,
      language: "javascript",
      output: `
Student Found
      `,
    },


    {
      title: "Updating Documents",
      content: `
updateOne() updates the first matching document.
      `,
      code: `Student.updateOne(

{

    name: "Harish"

},

{

    age: 22

}

);`,
      language: "javascript",
      output: `
Document Updated
      `,
    },


    {
      title: "Deleting Documents",
      content: `
deleteOne() removes the first matching document.
      `,
      code: `Student.deleteOne({

    name: "Harish"

});`,
      language: "javascript",
      output: `
Document Deleted
      `,
    },


    {
      title: "Population",
      content: `
Population replaces referenced ObjectIds with actual documents.

It is similar to SQL JOIN.
      `,
      code: `Student.find()

.populate("course");`,
      language: "javascript",
      output: `
Referenced Data Loaded
      `,
    },


    {
      title: "Middleware",
      content: `
Middleware (Hooks) executes before or after certain operations.

Common middleware:

• pre()

• post()

Examples:

• Password Hashing

• Logging

• Validation
      `,
      code: `studentSchema.pre("save", function(next){

    console.log("Before Saving");

    next();

});`,
      language: "javascript",
      output: `
Before Saving
      `,
    },


    {
      title: "Virtual Properties",
      content: `
Virtuals create computed properties that are not stored in MongoDB.
      `,
      code: `studentSchema.virtual("info")

.get(function(){

    return this.name + " - " + this.course;

});`,
      language: "javascript",
      output: `
Harish - MERN
      `,
    },


    {
      title: "Transactions",
      content: `
Transactions ensure multiple database operations succeed or fail together.

They help maintain data consistency in complex applications.
      `,
    },


    {
      title: "Error Handling",
      content: `
Always handle database errors properly using try/catch or promise catch().
      `,
      code: `try {

    const students = await Student.find();

} catch(error) {

    console.log(error);

}`,
      language: "javascript",
      output: `
Errors Handled Successfully
      `,
    },


    {
      title: "Mongoose Best Practices",
      content: `
Professional recommendations:

✓ Use Environment Variables

✓ Validate User Input

✓ Use Async/Await

✓ Keep Schemas Organized

✓ Handle Errors

✓ Use Indexes

✓ Avoid Duplicate Data

✓ Use Population Carefully

✓ Separate Models into Individual Files
      `,
      tip: "A well-structured Mongoose project is easier to maintain and scale.",
    },


      {
      title: "Embedding vs Referencing",
      content: `
MongoDB provides two primary ways to model relationships between data:

Embedding:
• Stores related data inside the same document.
• Faster reads.
• Simpler queries.

Referencing:
• Stores related documents in separate collections.
• Uses ObjectId references.
• Better for large or reusable data.

Choose the approach based on your application's requirements.
      `,
    },


    {
      title: "One-to-One Relationship",
      content: `
A one-to-one relationship connects one document with exactly one other document.

Example:

User
↓

Profile
      `,
      code: `const userSchema = new mongoose.Schema({

    name: String,

    profile: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "Profile"

    }

});`,
      language: "javascript",
      output: `
One-to-One Relationship Created
      `,
    },


    {
      title: "One-to-Many Relationship",
      content: `
One document is associated with multiple documents.

Example:

Course
↓

Students
      `,
      code: `const courseSchema = new mongoose.Schema({

    title: String,

    students: [

        {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Student"

        }

    ]

});`,
      language: "javascript",
      output: `
One-to-Many Relationship Created
      `,
    },


    {
      title: "Many-to-Many Relationship",
      content: `
Many documents can be related to many other documents.

Example:

Students

↓

Courses
      `,
      code: `const studentSchema = new mongoose.Schema({

    name: String,

    courses: [

        {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Course"

        }

    ]

});`,
      language: "javascript",
      output: `
Many-to-Many Relationship Created
      `,
    },


    {
      title: "Transactions",
      content: `
Transactions execute multiple operations as a single unit.

If one operation fails, all changes are rolled back.

Transactions are useful for:

• Banking

• Payments

• Inventory

• Order Processing
      `,
      code: `const session = await mongoose.startSession();

session.startTransaction();

// Database Operations

await session.commitTransaction();

session.endSession();`,
      language: "javascript",
      output: `
Transaction Completed
      `,
    },


    {
      title: "Replication",
      content: `
Replication copies data across multiple MongoDB servers.

Benefits:

• High Availability

• Automatic Failover

• Data Redundancy

• Disaster Recovery

Replication uses Replica Sets.
      `,
    },


    {
      title: "Sharding",
      content: `
Sharding distributes data across multiple servers.

Benefits:

• Horizontal Scaling

• Better Performance

• Supports Very Large Databases

• High Throughput

MongoDB uses shard keys to distribute data.
      `,
    },


    {
      title: "Backup and Restore",
      content: `
MongoDB provides tools for creating backups.

Common commands:

• mongodump

• mongorestore

Backups protect against accidental data loss.
      `,
      code: `mongodump

mongorestore`,
      language: "bash",
      output: `
Backup and Restore Completed
      `,
    },


    {
      title: "MongoDB Security",
      content: `
Best security practices:

• Enable Authentication

• Use Strong Passwords

• Restrict Network Access

• Enable TLS/SSL

• Encrypt Sensitive Data

• Keep MongoDB Updated
      `,
    },


    {
      title: "Authentication",
      content: `
Authentication verifies user identity before granting database access.

MongoDB supports:

• Username & Password

• X.509 Certificates

• LDAP

• Kerberos
      `,
    },


    {
      title: "Authorization",
      content: `
Authorization determines what authenticated users are allowed to do.

Common roles include:

• read

• readWrite

• dbAdmin

• userAdmin

• clusterAdmin
      `,
    },


    {
      title: "MongoDB Atlas Deployment",
      content: `
MongoDB Atlas is the official cloud platform.

Deployment Steps:

1. Create an Atlas Account.

2. Create a Cluster.

3. Add a Database User.

4. Whitelist Your IP Address.

5. Connect Using the Connection String.

Atlas simplifies cloud deployment and management.
      `,
    },


    {
      title: "Performance Tuning",
      content: `
Improve MongoDB performance by:

• Creating Proper Indexes

• Using Projection

• Limiting Returned Data

• Optimizing Aggregation Pipelines

• Avoiding Duplicate Data

• Monitoring Query Performance

• Using explain()
      `,
    },


    {
      title: "MongoDB Compass",
      content: `
MongoDB Compass provides a graphical interface for:

• Viewing Collections

• Editing Documents

• Running Queries

• Building Aggregation Pipelines

• Managing Indexes

It is ideal for beginners and professionals.
      `,
    },


    {
      title: "MongoDB Atlas Features",
      content: `
Atlas provides:

• Free Shared Clusters

• Dedicated Clusters

• Automatic Scaling

• Monitoring

• Backup

• Global Deployment

• Built-in Security
      `,
    },


    {
      title: "MongoDB Interview Questions",
      content: `
Common interview questions:

• What is MongoDB?

• Difference between SQL and MongoDB?

• What is BSON?

• Explain Collections and Documents.

• What is Aggregation?

• What are Indexes?

• Explain Replication.

• What is Sharding?

• What is Mongoose?

• Difference between Embedding and Referencing?
      `,
    },


    {
      title: "MongoDB Developer Roadmap",
      content: `
Recommended Learning Path:

1. JSON

2. MongoDB Basics

3. CRUD Operations

4. Query Operators

5. Aggregation

6. Indexing

7. Mongoose

8. Express.js

9. Node.js

10. Authentication

11. REST APIs

12. MERN Stack

13. MongoDB Atlas

14. Deployment

15. Performance Optimization
      `,
    },


    {
      title: "MongoDB Best Practices",
      content: `
Professional recommendations:

✓ Design Proper Schemas

✓ Use Indexes Wisely

✓ Keep Documents Small

✓ Validate Data

✓ Use Environment Variables

✓ Handle Errors Properly

✓ Backup Regularly

✓ Monitor Performance

✓ Secure Database Access

✓ Use Transactions When Required
      `,
      tip: "Good schema design and indexing have a major impact on MongoDB application performance.",
    },


    {
      title: "Complete MongoDB Course Summary",
      content: `
🎉 Congratulations!

You have successfully completed the MongoDB Course.

Topics Covered:

✓ MongoDB Fundamentals

✓ Databases

✓ Collections

✓ Documents

✓ BSON

✓ MongoDB Atlas

✓ MongoDB Compass

✓ CRUD Operations

✓ Query Operators

✓ Projection

✓ Sorting

✓ Pagination

✓ Aggregation Framework

✓ $match

✓ $project

✓ $group

✓ $lookup

✓ $facet

✓ Indexes

✓ Text Search

✓ Performance Optimization

✓ Mongoose

✓ Schemas

✓ Models

✓ Validation

✓ Population

✓ Middleware

✓ Virtuals

✓ Relationships

✓ Transactions

✓ Replication

✓ Sharding

✓ Backup & Restore

✓ Security

✓ Authentication

✓ Authorization

✓ Atlas Deployment

✓ Best Practices

✓ Interview Questions

✓ MongoDB Developer Roadmap

You are now ready to build production-ready MongoDB databases and integrate them into Node.js, Express.js, and full MERN Stack applications such as e-commerce websites, learning management systems, chat applications, admin dashboards, and enterprise APIs.
      `,
      tip: "Build projects like a Student Management System, Blog API, E-commerce Backend, Chat Application, LMS, and Inventory Management System to master MongoDB in real-world scenarios.",
    },

  ],
};