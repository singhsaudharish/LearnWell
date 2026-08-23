export const sqlContent = {
  title: "SQL Programming",
  description:
    "Learn SQL from beginner to advanced with database concepts, queries, examples, projects, and practice questions.",

  sections: [

    {
      title: "Introduction to SQL",
      content: `
SQL stands for Structured Query Language.

SQL is used to store, manage, retrieve, and manipulate data in relational databases.

SQL is one of the most important technologies for backend development and data analysis.


SQL is used with:

• MySQL
• PostgreSQL
• Oracle Database
• Microsoft SQL Server
• SQLite


SQL is used in:

• Web Applications
• Data Analysis
• Banking Systems
• E-Commerce Platforms
• Enterprise Applications
• Data Science
      `,
    },


    {
      title: "What is a Database?",
      content: `
A database is an organized collection of data stored electronically.

A database allows users to:

• Store information
• Search data
• Update records
• Delete records
• Manage large amounts of data


Examples:

Student Database

Employee Database

Bank Database
      `,
    },


    {
      title: "Types of Databases",
      content: `
Major database types:


1. Relational Database (SQL)

Stores data in tables.


Examples:

• MySQL
• PostgreSQL
• Oracle


2. Non-Relational Database (NoSQL)

Stores flexible data formats.


Examples:

• MongoDB
• Cassandra
• Redis
      `,
    },


    {
      title: "Relational Database Management System (RDBMS)",
      content: `
RDBMS stores data in tables consisting of rows and columns.


Important concepts:


Table:

Collection of related data.


Row:

Single record.


Column:

Data attribute.
      `,
    },


    {
      title: "SQL Features",
      content: `
Major features of SQL:


• Easy to Learn

• Fast Data Processing

• Secure Data Management

• Supports Large Databases

• Standard Database Language

• Works with Multiple Platforms

• Supports Data Analysis
      `,
    },


    {
      title: "SQL Commands Categories",
      content: `
SQL commands are divided into five categories:


1. DDL

Data Definition Language


2. DML

Data Manipulation Language


3. DQL

Data Query Language


4. DCL

Data Control Language


5. TCL

Transaction Control Language
      `,
    },


    {
      title: "DDL Commands",
      content: `
DDL is used to define database structure.


Commands:


CREATE

Creates database objects.


ALTER

Modifies structure.


DROP

Deletes objects.


TRUNCATE

Removes all records.
      `,
    },


    {
      title: "Creating Database",
      content: `
CREATE DATABASE creates a new database.
      `,
      code: `CREATE DATABASE school;`,
      language: "sql",
      output: "Database Created",
    },


    {
      title: "Using Database",
      content: `
USE command selects a database.
      `,
      code: `USE school;`,
      language: "sql",
      output: "Database Selected",
    },


    {
      title: "Creating Table",
      content: `
CREATE TABLE creates a new table.

A table contains:

• Columns
• Data Types
• Constraints
      `,
      code: `CREATE TABLE students

(

id INT,

name VARCHAR(50),

age INT

);`,
      language: "sql",
      output: "Table Created",
    },


    {
      title: "SQL Data Types",
      content: `
Data types define the type of data stored in columns.


Common SQL data types:


Numeric:

INT

DECIMAL

FLOAT


String:

VARCHAR

CHAR

TEXT


Date:

DATE

TIME

DATETIME
      `,
    },


    {
      title: "SQL Constraints",
      content: `
Constraints define rules for table data.


Types:


PRIMARY KEY

FOREIGN KEY

UNIQUE

NOT NULL

CHECK

DEFAULT
      `,
    },


    {
      title: "Primary Key",
      content: `
Primary Key uniquely identifies each record in a table.


Rules:


• Cannot contain duplicate values

• Cannot contain NULL values
      `,
      code: `CREATE TABLE users

(

id INT PRIMARY KEY,

name VARCHAR(50)

);`,
      language: "sql",
      output: "Primary Key Created",
    },


    {
      title: "Foreign Key",
      content: `
Foreign Key creates a relationship between two tables.


It references a primary key of another table.
      `,
      code: `CREATE TABLE orders

(

order_id INT,

user_id INT,

FOREIGN KEY(user_id)

REFERENCES users(id)

);`,
      language: "sql",
      output: "Relationship Created",
    },


    {
      title: "INSERT Statement",
      content: `
INSERT is used to add new records into a table.
      `,
      code: `INSERT INTO students

VALUES

(1,'Harish',21);`,
      language: "sql",
      output: "Record Inserted",
    },


    {
      title: "SELECT Statement",
      content: `
SELECT retrieves data from database tables.
      `,
      code: `SELECT *

FROM students;`,
      language: "sql",
      output: "Records Displayed",
    },


    {
      title: "Selecting Specific Columns",
      content: `
You can select specific columns instead of all columns.
      `,
      code: `SELECT name,age

FROM students;`,
      language: "sql",
      output: "Selected Columns",
    },


    {
      title: "WHERE Clause",
      content: `
WHERE filters records based on conditions.
      `,
      code: `SELECT *

FROM students

WHERE age > 18;`,
      language: "sql",
      output: "Filtered Records",
    },


    {
      title: "UPDATE Statement",
      content: `
UPDATE modifies existing records.
      `,
      code: `UPDATE students

SET age = 22

WHERE id = 1;`,
      language: "sql",
      output: "Record Updated",
    },


    {
      title: "DELETE Statement",
      content: `
DELETE removes records from tables.
      `,
      code: `DELETE FROM students

WHERE id = 1;`,
      language: "sql",
      output: "Record Deleted",
    },


    {
      title: "ORDER BY Clause",
      content: `
ORDER BY sorts query results.


ASC:

Ascending order


DESC:

Descending order
      `,
      code: `SELECT *

FROM students

ORDER BY age DESC;`,
      language: "sql",
      output: "Sorted Data",
    },


    {
      title: "LIMIT Clause",
      content: `
LIMIT restricts the number of returned records.
      `,
      code: `SELECT *

FROM students

LIMIT 5;`,
      language: "sql",
      output: "First 5 Records",
    },

    {
      title: "SQL Operators",
      content: `
Operators are symbols used to perform operations on data.

Types of SQL operators:


• Arithmetic Operators

• Comparison Operators

• Logical Operators

• Bitwise Operators
      `,
    },


    {
      title: "Arithmetic Operators",
      content: `
Arithmetic operators perform mathematical operations.


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
      code: `SELECT

10 + 5 AS Addition,

10 - 5 AS Subtraction,

10 * 5 AS Multiplication,

10 / 5 AS Division;`,
      language: "sql",
      output: `
15

5

50

2
      `,
    },


    {
      title: "Comparison Operators",
      content: `
Comparison operators compare values.


Operators:


=

Equal


!= or <>

Not Equal


>

Greater Than


<

Less Than


>=

Greater or Equal


<=

Less or Equal
      `,
      code: `SELECT *

FROM students

WHERE age >= 18;`,
      language: "sql",
      output: "Students with age 18 or above",
    },


    {
      title: "Logical Operators",
      content: `
Logical operators combine multiple conditions.


AND

Returns true when all conditions are true.


OR

Returns true when any condition is true.


NOT

Reverses the condition.
      `,
      code: `SELECT *

FROM students

WHERE age > 18

AND city = 'Mumbai';`,
      language: "sql",
      output: "Filtered Records",
    },


    {
      title: "DISTINCT Keyword",
      content: `
DISTINCT removes duplicate values from query results.
      `,
      code: `SELECT DISTINCT city

FROM students;`,
      language: "sql",
      output: "Unique Cities",
    },


    {
      title: "SQL Aliases",
      content: `
Aliases provide temporary names to tables or columns.


Used for:


• Better readability

• Shorter queries
      `,
      code: `SELECT

name AS Student_Name

FROM students;`,
      language: "sql",
      output: "Renamed Column",
    },


    {
      title: "LIKE Operator",
      content: `
LIKE searches for patterns in text data.


Wildcards:


%

Represents multiple characters.


_

Represents a single character.
      `,
      code: `SELECT *

FROM students

WHERE name LIKE 'H%';`,
      language: "sql",
      output: "Names starting with H",
    },


    {
      title: "BETWEEN Operator",
      content: `
BETWEEN selects values within a range.


It includes both starting and ending values.
      `,
      code: `SELECT *

FROM students

WHERE age BETWEEN 18 AND 25;`,
      language: "sql",
      output: "Students between age 18 and 25",
    },


    {
      title: "IN Operator",
      content: `
IN checks whether a value exists in a list of values.
      `,
      code: `SELECT *

FROM students

WHERE city IN

('Mumbai','Delhi','Pune');`,
      language: "sql",
      output: "Selected Cities",
    },


    {
      title: "IS NULL Operator",
      content: `
NULL represents missing or unknown data.


IS NULL checks empty values.
      `,
      code: `SELECT *

FROM students

WHERE phone IS NULL;`,
      language: "sql",
      output: "Records with NULL phone",
    },


    {
      title: "IS NOT NULL Operator",
      content: `
IS NOT NULL returns records containing values.
      `,
      code: `SELECT *

FROM students

WHERE email IS NOT NULL;`,
      language: "sql",
      output: "Available Emails",
    },


    {
      title: "Aggregate Functions",
      content: `
Aggregate functions perform calculations on multiple rows.


Common functions:


COUNT()

SUM()

AVG()

MIN()

MAX()
      `,
    },


    {
      title: "COUNT Function",
      content: `
COUNT returns the number of records.
      `,
      code: `SELECT COUNT(*)

FROM students;`,
      language: "sql",
      output: "Total Records",
    },


    {
      title: "SUM Function",
      content: `
SUM calculates the total value of a numeric column.
      `,
      code: `SELECT SUM(salary)

FROM employees;`,
      language: "sql",
      output: "Total Salary",
    },


    {
      title: "AVG Function",
      content: `
AVG calculates the average value.
      `,
      code: `SELECT AVG(age)

FROM students;`,
      language: "sql",
      output: "Average Age",
    },


    {
      title: "MIN Function",
      content: `
MIN returns the smallest value.
      `,
      code: `SELECT MIN(price)

FROM products;`,
      language: "sql",
      output: "Minimum Price",
    },


    {
      title: "MAX Function",
      content: `
MAX returns the largest value.
      `,
      code: `SELECT MAX(price)

FROM products;`,
      language: "sql",
      output: "Maximum Price",
    },


    {
      title: "GROUP BY Clause",
      content: `
GROUP BY groups rows with the same values.


Usually used with aggregate functions.
      `,
      code: `SELECT city,

COUNT(*) AS total

FROM students

GROUP BY city;`,
      language: "sql",
      output: "Students Count By City",
    },


    {
      title: "HAVING Clause",
      content: `
HAVING filters grouped data.


Difference:


WHERE filters rows.


HAVING filters groups.
      `,
      code: `SELECT city,

COUNT(*) AS total

FROM students

GROUP BY city

HAVING COUNT(*) > 5;`,
      language: "sql",
      output: "Cities Having More Than 5 Students",
    },


    {
      title: "Difference Between WHERE and HAVING",
      content: `
WHERE:


• Works before GROUP BY

• Filters individual rows


HAVING:


• Works after GROUP BY

• Filters grouped results
      `,
    },


    {
      title: "CASE Statement",
      content: `
CASE works like if-else conditions in SQL.


It returns different values based on conditions.
      `,
      code: `SELECT name,

CASE

WHEN age >= 18

THEN 'Adult'


ELSE 'Minor'


END AS Status


FROM students;`,
      language: "sql",
      output: "Status Generated",
    },


    {
      title: "SQL String Functions",
      content: `
String functions manipulate text data.


Common functions:


CONCAT()

UPPER()

LOWER()

LENGTH()

SUBSTRING()
      `,
    },


    {
      title: "CONCAT Function",
      content: `
CONCAT joins multiple strings together.
      `,
      code: `SELECT CONCAT(

first_name,

' ',

last_name

)

FROM students;`,
      language: "sql",
      output: "Full Name",
    },


    {
      title: "UPPER Function",
      content: `
UPPER converts text into uppercase.
      `,
      code: `SELECT UPPER(name)

FROM students;`,
      language: "sql",
      output: "UPPERCASE TEXT",
    },


    {
      title: "LOWER Function",
      content: `
LOWER converts text into lowercase.
      `,
      code: `SELECT LOWER(name)

FROM students;`,
      language: "sql",
      output: "lowercase text",
    },


    {
      title: "SQL Date Functions",
      content: `
Date functions work with date and time values.


Common functions:


CURRENT_DATE()

CURRENT_TIME()

NOW()

YEAR()

MONTH()
      `,
    },


    {
      title: "Working With Dates",
      content: `
SQL can store and compare date values.
      `,
      code: `SELECT *

FROM orders

WHERE order_date >

'2026-01-01';`,
      language: "sql",
      output: "Filtered Orders",
    },


    {
      title: "SQL Query Execution Order",
      content: `
SQL queries execute in a specific order:


1. FROM


2. WHERE


3. GROUP BY


4. HAVING


5. SELECT


6. ORDER BY


7. LIMIT
      `,
    },


    {
      title: "SQL Comments",
      content: `
Comments are notes inside SQL code.


Single Line:

-- comment


Multi Line:

/* comment */
      `,
      code: `-- Select all students

SELECT *

FROM students;`,
      language: "sql",
      output: "Query Executed",
    },


    {
      title: "SQL Joins Introduction",
      content: `
SQL Joins are used to combine data from multiple tables.


Joins are based on relationships between tables.


Example:


Students Table


+

Courses Table


=

Combined Result


Types of Joins:


• INNER JOIN

• LEFT JOIN

• RIGHT JOIN

• FULL JOIN

• CROSS JOIN

• SELF JOIN
      `,
    },


    {
      title: "INNER JOIN",
      content: `
INNER JOIN returns only matching records from both tables.


It displays records where the join condition is true.
      `,
      code: `SELECT

students.name,

courses.course_name


FROM students


INNER JOIN courses


ON students.course_id = courses.id;`,
      language: "sql",
      output: "Matching Records From Both Tables",
    },


    {
      title: "LEFT JOIN",
      content: `
LEFT JOIN returns all records from the left table.


Matching records from the right table are included.


If no match exists, NULL values are returned.
      `,
      code: `SELECT

students.name,

courses.course_name


FROM students


LEFT JOIN courses


ON students.course_id = courses.id;`,
      language: "sql",
      output: "All Students With Course Information",
    },


    {
      title: "RIGHT JOIN",
      content: `
RIGHT JOIN returns all records from the right table.


Matching records from the left table are included.
      `,
      code: `SELECT

students.name,

courses.course_name


FROM students


RIGHT JOIN courses


ON students.course_id = courses.id;`,
      language: "sql",
      output: "All Courses With Student Information",
    },


    {
      title: "FULL OUTER JOIN",
      content: `
FULL OUTER JOIN returns all records from both tables.


Matched records are combined.


Unmatched records contain NULL values.
      `,
      code: `SELECT *

FROM students

FULL OUTER JOIN courses

ON students.course_id = courses.id;`,
      language: "sql",
      output: "All Records From Both Tables",
    },


    {
      title: "CROSS JOIN",
      content: `
CROSS JOIN returns the Cartesian product.


Every row from the first table is combined with every row from the second table.
      `,
      code: `SELECT *

FROM students

CROSS JOIN courses;`,
      language: "sql",
      output: "All Possible Combinations",
    },


    {
      title: "SELF JOIN",
      content: `
SELF JOIN joins a table with itself.


It is useful when rows in the same table have relationships.
      `,
      code: `SELECT

A.employee_name,

B.employee_name AS Manager


FROM employees A


JOIN employees B


ON A.manager_id = B.id;`,
      language: "sql",
      output: "Employee Manager Relationship",
    },


    {
      title: "Join Multiple Tables",
      content: `
SQL can combine multiple tables using multiple JOIN statements.


Example:


Students


Courses


Payments


can be combined together.
      `,
      code: `SELECT

s.name,

c.course_name,

p.amount


FROM students s


JOIN courses c

ON s.course_id = c.id


JOIN payments p

ON s.id = p.student_id;`,
      language: "sql",
      output: "Combined Data",
    },


    {
      title: "Subquery Introduction",
      content: `
A subquery is a query inside another SQL query.


It is also called a nested query.


Subqueries can be used with:


• SELECT

• WHERE

• FROM

• HAVING
      `,
    },


    {
      title: "Subquery With WHERE",
      content: `
A subquery can return values used by the main query.
      `,
      code: `SELECT *

FROM students


WHERE age >

(

SELECT AVG(age)

FROM students

);`,
      language: "sql",
      output: "Students Above Average Age",
    },


    {
      title: "Subquery With SELECT",
      content: `
A subquery can be used inside SELECT statements.
      `,
      code: `SELECT

name,


(

SELECT COUNT(*)

FROM courses

)

AS TotalCourses


FROM students;`,
      language: "sql",
      output: "Student Course Count",
    },


    {
      title: "Subquery With FROM",
      content: `
A subquery can act as a temporary table.
      `,
      code: `SELECT *

FROM

(

SELECT *

FROM students

) AS temp;`,
      language: "sql",
      output: "Temporary Result Table",
    },


    {
      title: "Correlated Subquery",
      content: `
A correlated subquery depends on the outer query.


It executes once for every row processed by the main query.
      `,
      code: `SELECT e1.name

FROM employees e1


WHERE salary >

(

SELECT AVG(e2.salary)

FROM employees e2

WHERE e1.department_id = e2.department_id

);`,
      language: "sql",
      output: "Employees Above Department Average",
    },


    {
      title: "EXISTS Operator",
      content: `
EXISTS checks whether a subquery returns any records.


It returns TRUE or FALSE.
      `,
      code: `SELECT *

FROM customers c


WHERE EXISTS

(

SELECT *

FROM orders o

WHERE c.id=o.customer_id

);`,
      language: "sql",
      output: "Customers With Orders",
    },


    {
      title: "ANY Operator",
      content: `
ANY compares a value with any value returned by a subquery.
      `,
      code: `SELECT *

FROM products


WHERE price >

ANY

(

SELECT price

FROM products

);`,
      language: "sql",
      output: "Products Matching Condition",
    },


    {
      title: "ALL Operator",
      content: `
ALL compares a value with all values returned by a subquery.
      `,
      code: `SELECT *

FROM products


WHERE price >

ALL

(

SELECT price

FROM products

);`,
      language: "sql",
      output: "Products Greater Than All Prices",
    },


    {
      title: "SQL Views",
      content: `
A view is a virtual table created from a SQL query.


Views do not store data directly.


Benefits:


• Security

• Reusability

• Simplified Queries
      `,
    },


    {
      title: "Creating a View",
      content: `
CREATE VIEW creates a virtual table.
      `,
      code: `CREATE VIEW student_view AS


SELECT

name,

age


FROM students;`,
      language: "sql",
      output: "View Created",
    },


    {
      title: "Using a View",
      content: `
A view can be queried like a normal table.
      `,
      code: `SELECT *

FROM student_view;`,
      language: "sql",
      output: "View Data",
    },


    {
      title: "Updating a View",
      content: `
Views can sometimes be updated depending on their complexity.
      `,
      code: `CREATE OR REPLACE VIEW student_view AS


SELECT

name


FROM students;`,
      language: "sql",
      output: "View Updated",
    },


    {
      title: "Dropping a View",
      content: `
DROP VIEW removes a view from the database.
      `,
      code: `DROP VIEW student_view;`,
      language: "sql",
      output: "View Deleted",
    },


    {
      title: "Stored Procedures Introduction",
      content: `
Stored procedures are precompiled SQL statements stored inside a database.


Benefits:


• Code Reusability

• Better Performance

• Security
      `,
    },


    {
      title: "Creating Stored Procedure",
      content: `
Stored procedures contain SQL logic that can be executed multiple times.
      `,
      code: `CREATE PROCEDURE GetStudents()


BEGIN


SELECT *

FROM students;


END;`,
      language: "sql",
      output: "Procedure Created",
    },


    {
      title: "Calling Stored Procedure",
      content: `
CALL executes a stored procedure.
      `,
      code: `CALL GetStudents();`,
      language: "sql",
      output: "Students Displayed",
    },


    {
      title: "Stored Procedure Parameters",
      content: `
Stored procedures can accept parameters.


Types:


IN

OUT

INOUT
      `,
      code: `CREATE PROCEDURE GetStudent(

IN student_id INT

)


BEGIN


SELECT *

FROM students

WHERE id = student_id;


END;`,
      language: "sql",
      output: "Student Found",
    },


    {
      title: "SQL Functions",
      content: `
Functions return a value after performing operations.


Types:


• Built-in Functions

• User Defined Functions
      `,
    },


    {
      title: "Creating SQL Function",
      content: `
User-defined functions allow reusable database logic.
      `,
      code: `CREATE FUNCTION GetAge()

RETURNS INT


BEGIN

RETURN 21;

END;`,
      language: "sql",
      output: "Function Created",
    },


    {
      title: "SQL Triggers Introduction",
      content: `
Triggers automatically execute when an event occurs.


Events:


• INSERT

• UPDATE

• DELETE
      `,
    },


    {
      title: "Creating Trigger",
      content: `
Triggers are useful for auditing and automatic actions.
      `,
      code: `CREATE TRIGGER before_insert


BEFORE INSERT ON students


FOR EACH ROW


BEGIN


SET NEW.created_at = NOW();


END;`,
      language: "sql",
      output: "Trigger Created",
    },


    {
      title: "Database Design Introduction",
      content: `
Database design is the process of creating a structured database system.


A good database design provides:


• Data consistency

• Better performance

• Reduced duplication

• Easy maintenance


Database design involves:


• Identifying entities

• Creating relationships

• Defining tables

• Applying normalization
      `,
    },


    {
      title: "Database Entities",
      content: `
An entity is an object about which data is stored.


Examples:


Student


Employee


Product


Customer


Entities become tables in a database.
      `,
    },


    {
      title: "Attributes in Database",
      content: `
Attributes describe properties of an entity.


Example:


Student Entity:


Attributes:


• Student_ID

• Name

• Age

• Email

• Course
      `,
    },


    {
      title: "Relationships in Database",
      content: `
Relationships define connections between entities.


Types:


• One-to-One

• One-to-Many

• Many-to-Many
      `,
    },


    {
      title: "One-to-One Relationship",
      content: `
One record in one table is related to one record in another table.


Example:


Person

↓

Passport
      `,
    },


    {
      title: "One-to-Many Relationship",
      content: `
One record can have many related records.


Example:


Department

↓

Employees


One department has many employees.
      `,
    },


    {
      title: "Many-to-Many Relationship",
      content: `
Multiple records in one table relate to multiple records in another table.


Example:


Students

↕

Courses


A student can join many courses.

A course can have many students.


Implemented using a junction table.
      `,
    },


    {
      title: "ER Diagram (Entity Relationship Diagram)",
      content: `
ER Diagram represents database structure visually.


Components:


• Entity

• Attribute

• Relationship


Used during database planning.
      `,
    },


    {
      title: "Database Keys",
      content: `
Keys identify and connect records in tables.


Types:


• Primary Key

• Foreign Key

• Candidate Key

• Composite Key

• Super Key
      `,
    },


    {
      title: "Candidate Key",
      content: `
A candidate key is a column that can uniquely identify records.


A table can have multiple candidate keys.


One candidate key becomes the primary key.
      `,
    },


    {
      title: "Composite Key",
      content: `
A composite key consists of multiple columns used together as a unique identifier.
      `,
      code: `CREATE TABLE enrollment

(

student_id INT,

course_id INT,


PRIMARY KEY(

student_id,

course_id

)

);`,
      language: "sql",
      output: "Composite Key Created",
    },


    {
      title: "Database Normalization",
      content: `
Normalization organizes data to reduce redundancy.


Goals:


• Remove duplicate data

• Improve consistency

• Increase efficiency


Normal Forms:


• 1NF

• 2NF

• 3NF

• BCNF
      `,
    },


    {
      title: "First Normal Form (1NF)",
      content: `
A table is in 1NF when:


• Each column contains atomic values

• No multiple values in a single column


Example:


Incorrect:


Student | Courses

John | Java, SQL


Correct:


Student | Course

John | Java

John | SQL
      `,
    },


    {
      title: "Second Normal Form (2NF)",
      content: `
A table is in 2NF when:


• It is already in 1NF

• All non-key attributes depend on the complete primary key


It removes partial dependency.
      `,
    },


    {
      title: "Third Normal Form (3NF)",
      content: `
A table is in 3NF when:


• It is already in 2NF

• No transitive dependency exists


Non-key columns should depend only on the primary key.
      `,
    },


    {
      title: "Boyce Codd Normal Form (BCNF)",
      content: `
BCNF is an advanced version of 3NF.


Every determinant must be a candidate key.
      `,
    },


    {
      title: "Denormalization",
      content: `
Denormalization combines tables to improve read performance.


Advantages:


• Faster queries

• Reduced joins


Disadvantages:


• Data duplication

• More storage
      `,
    },


    {
      title: "Database Indexes",
      content: `
Indexes improve the speed of data retrieval.


They work like an index in a book.


Benefits:


• Faster searching

• Improved query performance


Disadvantages:


• Uses extra storage

• Slows INSERT and UPDATE
      `,
    },


    {
      title: "Creating Index",
      content: `
CREATE INDEX creates an index on a column.
      `,
      code: `CREATE INDEX idx_name


ON students(name);`,
      language: "sql",
      output: "Index Created",
    },


    {
      title: "Unique Index",
      content: `
Unique index prevents duplicate values in indexed columns.
      `,
      code: `CREATE UNIQUE INDEX email_index


ON users(email);`,
      language: "sql",
      output: "Unique Index Created",
    },


    {
      title: "Composite Index",
      content: `
Composite index uses multiple columns.
      `,
      code: `CREATE INDEX student_index


ON students(name,age);`,
      language: "sql",
      output: "Composite Index Created",
    },


    {
      title: "Clustered Index",
      content: `
Clustered index determines the physical order of data storage.


Usually created on primary keys.
      `,
    },


    {
      title: "Non-Clustered Index",
      content: `
Non-clustered index stores references to actual data.


A table can have multiple non-clustered indexes.
      `,
    },


    {
      title: "SQL Transactions",
      content: `
A transaction is a group of SQL operations executed as one unit.


Example:


Bank transfer:


1. Deduct money

2. Add money


Both operations must succeed together.
      `,
    },


    {
      title: "ACID Properties",
      content: `
ACID properties ensure reliable transactions.


A → Atomicity


C → Consistency


I → Isolation


D → Durability
      `,
    },


    {
      title: "Atomicity",
      content: `
Atomicity means a transaction completes completely or does not happen at all.


Example:


Money transfer should not partially complete.
      `,
    },


    {
      title: "Consistency",
      content: `
Consistency ensures the database remains valid before and after transactions.
      `,
    },


    {
      title: "Isolation",
      content: `
Isolation prevents transactions from interfering with each other.


Multiple users can work safely at the same time.
      `,
    },


    {
      title: "Durability",
      content: `
Durability ensures committed changes are permanently stored.
      `,
    },


    {
      title: "COMMIT Command",
      content: `
COMMIT permanently saves transaction changes.
      `,
      code: `UPDATE accounts

SET balance = balance - 1000

WHERE id = 1;


COMMIT;`,
      language: "sql",
      output: "Transaction Saved",
    },


    {
      title: "ROLLBACK Command",
      content: `
ROLLBACK cancels changes made during a transaction.
      `,
      code: `DELETE FROM students;


ROLLBACK;`,
      language: "sql",
      output: "Changes Reverted",
    },


    {
      title: "SAVEPOINT Command",
      content: `
SAVEPOINT creates a temporary point inside a transaction.


You can rollback to a specific savepoint.
      `,
      code: `SAVEPOINT point1;


ROLLBACK TO point1;`,
      language: "sql",
      output: "Rolled Back To Savepoint",
    },


    {
      title: "Database Security",
      content: `
Database security protects data from unauthorized access.


Security methods:


• Authentication

• Authorization

• Encryption

• Access Control
      `,
    },


    {
      title: "SQL User Management",
      content: `
Database systems allow creating and managing users.
      `,
      code: `CREATE USER

'student'

IDENTIFIED BY

'password';`,
      language: "sql",
      output: "User Created",
    },


    {
      title: "GRANT Permission",
      content: `
GRANT provides privileges to users.
      `,
      code: `GRANT SELECT

ON students

TO user1;`,
      language: "sql",
      output: "Permission Granted",
    },


    {
      title: "REVOKE Permission",
      content: `
REVOKE removes permissions from users.
      `,
      code: `REVOKE SELECT

ON students

FROM user1;`,
      language: "sql",
      output: "Permission Removed",
    },


    {
      title: "Database Backup",
      content: `
Backup creates a copy of database data.


Benefits:


• Data recovery

• Protection against failures

• Disaster management
      `,
    },


    {
      title: "Database Recovery",
      content: `
Recovery restores database after failure.


Recovery methods:


• Backup Restore

• Transaction Logs

• Point-in-Time Recovery
      `,
    },


    {
      title: "Advanced SQL Introduction",
      content: `
Advanced SQL focuses on writing efficient, complex, and optimized queries.


Advanced SQL concepts:


• Window Functions

• Common Table Expressions

• Recursive Queries

• Query Optimization

• Execution Plans

• Performance Tuning

• Database Projects
      `,
    },


    {
      title: "Window Functions Introduction",
      content: `
Window functions perform calculations across a set of rows without grouping them into a single result.


Unlike aggregate functions, window functions keep individual rows visible.


Common Window Functions:


• ROW_NUMBER()

• RANK()

• DENSE_RANK()

• LEAD()

• LAG()
      `,
    },


    {
      title: "ROW_NUMBER() Function",
      content: `
ROW_NUMBER assigns a unique sequential number to each row.


Each row receives a different number.
      `,
      code: `SELECT

name,

salary,


ROW_NUMBER()

OVER(

ORDER BY salary DESC

) AS rank_number


FROM employees;`,
      language: "sql",
      output: "Rows Numbered Sequentially",
    },


    {
      title: "RANK() Function",
      content: `
RANK assigns ranking numbers.


Rows with the same values receive the same rank.


It leaves gaps after duplicate rankings.
      `,
      code: `SELECT

name,

salary,


RANK()

OVER(

ORDER BY salary DESC

) AS salary_rank


FROM employees;`,
      language: "sql",
      output: "Rank Generated",
    },


    {
      title: "DENSE_RANK() Function",
      content: `
DENSE_RANK is similar to RANK.


Difference:


RANK skips numbers after duplicates.


DENSE_RANK does not skip numbers.
      `,
      code: `SELECT

name,

salary,


DENSE_RANK()

OVER(

ORDER BY salary DESC

) AS rank


FROM employees;`,
      language: "sql",
      output: "Dense Ranking Created",
    },


    {
      title: "Difference Between ROW_NUMBER, RANK and DENSE_RANK",
      content: `
ROW_NUMBER:


Every row gets a unique number.


RANK:


Same values get same rank with gaps.


DENSE_RANK:


Same values get same rank without gaps.
      `,
    },


    {
      title: "PARTITION BY Clause",
      content: `
PARTITION BY divides data into groups inside window functions.


It works similar to GROUP BY but keeps individual rows.
      `,
      code: `SELECT

employee_name,

department,

salary,


RANK()

OVER(

PARTITION BY department

ORDER BY salary DESC

)


FROM employees;`,
      language: "sql",
      output: "Department Wise Ranking",
    },


    {
      title: "LEAD() Function",
      content: `
LEAD returns a value from the next row.


Used for comparing current data with future data.
      `,
      code: `SELECT

name,

salary,


LEAD(salary)

OVER(

ORDER BY id

)

AS next_salary


FROM employees;`,
      language: "sql",
      output: "Next Salary Value",
    },


    {
      title: "LAG() Function",
      content: `
LAG returns a value from the previous row.


Used for comparing current data with previous data.
      `,
      code: `SELECT

name,

salary,


LAG(salary)

OVER(

ORDER BY id

)

AS previous_salary


FROM employees;`,
      language: "sql",
      output: "Previous Salary Value",
    },


    {
      title: "Common Table Expressions (CTE)",
      content: `
CTE creates a temporary result set that can be reused inside a query.


Advantages:


• Improves readability

• Simplifies complex queries

• Supports recursion
      `,
      code: `WITH StudentData AS

(

SELECT *

FROM students

)


SELECT *

FROM StudentData;`,
      language: "sql",
      output: "CTE Result",
    },


    {
      title: "Recursive CTE",
      content: `
Recursive CTE calls itself repeatedly.


Used for hierarchical data.


Examples:


• Employee hierarchy

• Folder structures

• Organization charts
      `,
      code: `WITH Numbers AS

(

SELECT 1 AS num


UNION ALL


SELECT num + 1

FROM Numbers

WHERE num < 5

)


SELECT *

FROM Numbers;`,
      language: "sql",
      output: `
1

2

3

4

5
      `,
    },


    {
      title: "Temporary Tables",
      content: `
Temporary tables store temporary data during a session.


They are automatically removed after the session ends.
      `,
      code: `CREATE TEMPORARY TABLE temp_students

(

id INT,

name VARCHAR(50)

);`,
      language: "sql",
      output: "Temporary Table Created",
    },


    {
      title: "Views vs Temporary Tables",
      content: `
Views:


• Permanent database object

• Stores query definition


Temporary Tables:


• Temporary storage

• Stores actual data
      `,
    },


    {
      title: "SQL Query Optimization",
      content: `
Query optimization improves SQL performance.


Techniques:


• Use indexes

• Avoid unnecessary columns

• Optimize joins

• Reduce subqueries

• Analyze execution plans
      `,
    },


    {
      title: "SQL Execution Plan",
      content: `
Execution plan shows how a database executes a query.


It helps identify:


• Slow operations

• Missing indexes

• Expensive joins
      `,
    },


    {
      title: "EXPLAIN Command",
      content: `
EXPLAIN shows the execution strategy of a query.
      `,
      code: `EXPLAIN

SELECT *

FROM students

WHERE age > 20;`,
      language: "sql",
      output: "Query Execution Plan",
    },


    {
      title: "SQL Performance Tuning",
      content: `
Performance tuning improves database speed.


Best practices:


✓ Create proper indexes


✓ Avoid SELECT *


✓ Use optimized joins


✓ Normalize database


✓ Analyze slow queries
      `,
    },


    {
      title: "Avoiding SQL Injection",
      content: `
SQL injection is a security attack where malicious SQL code is inserted into queries.


Prevention:


• Use prepared statements

• Validate input

• Use parameterized queries
      `,
    },


    {
      title: "Prepared Statements",
      content: `
Prepared statements separate SQL code from user input.


They improve security and performance.
      `,
      code: `SELECT *

FROM users

WHERE username = ?;`,
      language: "sql",
      output: "Safe Query Execution",
    },


    {
      title: "Database Partitioning",
      content: `
Partitioning divides large tables into smaller sections.


Benefits:


• Faster queries

• Better management

• Improved performance
      `,
    },


    {
      title: "Horizontal Partitioning",
      content: `
Horizontal partitioning divides rows into different partitions.


Example:


Orders by year:


Orders_2025

Orders_2026
      `,
    },


    {
      title: "Vertical Partitioning",
      content: `
Vertical partitioning divides columns into separate tables.


Used when tables contain many columns.
      `,
    },


    {
      title: "SQL Real World Projects",
      content: `
Projects help apply SQL concepts practically.


Beginner Projects:


• Student Database

• Library Database

• Employee Database


Intermediate Projects:


• Banking Database

• Hospital Management System

• Inventory System


Advanced Projects:


• E-Commerce Database

• Social Media Database

• Food Delivery Database
      `,
    },


    {
      title: "Student Management Database Project",
      content: `
Tables:


Students


Courses


Attendance


Marks


Features:


• Add students

• Store marks

• Generate reports

• Search records
      `,
    },


    {
      title: "E-Commerce Database Project",
      content: `
Tables:


Users


Products


Orders


Payments


Reviews


Features:


• Product management

• Order tracking

• Sales reports
      `,
    },


    {
      title: "SQL Interview Questions",
      content: `
Important SQL interview questions:


1. Difference between DELETE, DROP and TRUNCATE?


2. Difference between WHERE and HAVING?


3. What are joins?


4. What is normalization?


5. What are indexes?


6. Explain ACID properties.


7. Difference between primary key and foreign key.


8. What are stored procedures?
      `,
    },


    {
      title: "SQL Developer Skills",
      content: `
A professional SQL developer should know:


Database:


✓ SQL Queries

✓ Database Design

✓ Normalization

✓ Indexing


Programming:


✓ Stored Procedures

✓ Functions

✓ Triggers


Tools:


✓ MySQL

✓ PostgreSQL

✓ SQL Server


Backend:


✓ Database Integration

✓ APIs
      `,
    },


    {
      title: "SQL Career Roadmap",
      content: `
Complete SQL learning path:


Step 1:

Learn Database Basics


Step 2:

Master SQL Queries


Step 3:

Learn Joins


Step 4:

Learn Database Design


Step 5:

Learn Advanced SQL


Step 6:

Practice Projects


Step 7:

Prepare Interviews


Step 8:

Learn Database Administration
      `,
    },


    {
      title: "Complete SQL Course Summary",
      content: `
Congratulations!


You have completed SQL Programming from beginner to advanced level.


Covered Topics:


✓ Database Basics

✓ SQL Commands

✓ Tables and Constraints

✓ CRUD Operations

✓ Operators

✓ Functions

✓ Joins

✓ Subqueries

✓ Views

✓ Stored Procedures

✓ Triggers

✓ Normalization

✓ Transactions

✓ Indexes

✓ Security

✓ Window Functions

✓ CTE

✓ Optimization

✓ Projects

✓ Interview Preparation


You are now ready to work with professional databases.
      `,
    },


],
};