export const flaskContent = {
  title: "Flask Programming",
  description:
    "Learn Flask from beginner to advanced with practical examples and hands-on projects.",

  sections: [
    {
      title: "Introduction to Flask",
      content: `
Flask is a lightweight, open-source web framework for Python used to build web applications, RESTful APIs, and backend services.

It was created by Armin Ronacher and released in 2010. Flask is based on the Werkzeug WSGI toolkit and the Jinja2 template engine.

Unlike full-stack frameworks, Flask follows the micro-framework philosophy. This means it provides only the essential components required for web development, allowing developers to add additional libraries and extensions as needed.

Flask is one of the most popular Python frameworks because it is simple, flexible, and easy to learn. It is suitable for beginners as well as experienced developers building scalable web applications.

Flask is widely used for:

• Web Applications
• RESTful APIs
• Backend Development
• Authentication Systems
• Machine Learning Deployment
• Data Dashboards
• Portfolio Websites
• Blog Applications
• Admin Panels
• Microservices

Flask's lightweight design makes it an excellent choice for projects of all sizes.
      `,
    },

    {
      title: "Features of Flask",
      content: `
Flask provides many powerful features that simplify web development while giving developers complete control over their applications.

Major Features of Flask:

• Lightweight Framework
• Easy to Learn
• Minimal Setup
• Built-in Development Server
• URL Routing
• Jinja2 Template Engine
• REST API Support
• Secure Session Management
• Cookie Support
• Extension Support
• Database Integration
• Debug Mode
• Modular Development using Blueprints
• Highly Customizable

Advantages:

✓ Fast Development
✓ Simple Syntax
✓ Flexible Architecture
✓ Excellent Documentation
✓ Large Community Support
✓ Easy Database Connectivity
✓ Perfect for APIs
✓ Supports Third-Party Extensions
      `,
    },

    {
      title: "History of Flask",
      content: `
Flask was created by Armin Ronacher as part of the Pocoo project.

The goal was to create a lightweight framework that provides only the essentials for web development while allowing developers to choose additional components when needed.

Evolution of Flask:

• 2010 – Initial Release
• Built on Werkzeug
• Integrated Jinja2 Template Engine
• Rapid Community Adoption
• Flask 1.x Released
• Flask 2.x Introduced Async Support
• Flask 3.x Added Modern Python Features

Today Flask is one of the most widely used Python web frameworks for developing APIs and web applications.
      `,
    },

    {
      title: "Applications of Flask",
      content: `
Flask is used in many industries because it is lightweight, flexible, and scalable.

Applications include:

• Portfolio Websites
• Business Websites
• Blog Applications
• Content Management Systems
• RESTful APIs
• Authentication Systems
• Admin Dashboards
• Chat Applications
• E-Commerce Websites
• Machine Learning Deployment
• AI Applications
• Data Visualization Dashboards
• Mobile Application Backends
• IoT Platforms
• Cloud-Based Services
• Microservices

Many startups and enterprises choose Flask because of its simplicity and performance.
      `,
    },

    {
      title: "Why Learn Flask?",
      content: `
Flask is one of the best frameworks for Python developers interested in backend web development.

Reasons to Learn Flask:

• Beginner-Friendly
• Easy Installation
• Clean Syntax
• Flexible Project Structure
• Great for REST APIs
• Perfect for Small and Medium Projects
• Easy Database Integration
• Supports Authentication
• High Industry Demand
• Large Developer Community

Learning Flask enables you to build complete backend applications and modern APIs using Python.
      `,
    },

    {
      title: "Advantages and Disadvantages",
      content: `
Advantages of Flask:

• Lightweight Framework
• Easy to Understand
• Highly Flexible
• Fast Development
• Easy Testing
• Excellent Documentation
• Supports Multiple Databases
• Large Extension Ecosystem
• Great Community Support

Disadvantages:

• Fewer Built-in Features
• Requires Extensions for Advanced Functionality
• No Built-in ORM
• No Built-in Authentication System
• Large Projects Need Better Organization

Despite these limitations, Flask remains one of the most popular Python frameworks.
      `,
    },

    {
      title: "Installing Flask",
      content: `
Before installing Flask, make sure Python is installed on your computer.

Step 1: Check Python Installation

Windows:

python --version

Linux/macOS:

python3 --version

Step 2: Create a Virtual Environment (Recommended)

Windows:

python -m venv venv

Linux/macOS:

python3 -m venv venv

Step 3: Activate the Virtual Environment

Windows (Command Prompt):

venv\\Scripts\\activate

Windows (PowerShell):

venv\\Scripts\\Activate.ps1

Linux/macOS:

source venv/bin/activate

Step 4: Install Flask

pip install flask

Step 5: Verify Installation

python -c "import flask; print(flask.__version__)"

Step 6: View Package Information

pip show flask

Creating a virtual environment is recommended because it keeps project dependencies isolated and avoids conflicts with other Python projects.
      `,
      code: `# Install Flask

pip install flask

# Verify Installation

python -c "import flask; print(flask.__version__)"

# Package Information

pip show flask`,
      language: "bash",
    },

    {
      title: "Flask vs Django",
      content: `
Flask and Django are two of the most popular Python web frameworks.

Flask:

• Lightweight
• Flexible
• Easy to Learn
• Minimal Components
• Excellent for APIs
• Requires Extensions

Django:

• Full-Stack Framework
• Built-in Authentication
• Built-in ORM
• Admin Panel Included
• Better for Large Applications
• More Opinionated Structure

Choose Flask when you need flexibility and lightweight development.

Choose Django when you need many built-in features and rapid development for large applications.
      `,
    },

    {
      title: "Companies Using Flask",
      content: `
Many well-known companies use Flask in production for APIs, internal tools, dashboards, and web services.

Some companies using Flask include:

• Netflix
• Reddit
• Lyft
• Twilio
• Zillow

These organizations use Flask because of its simplicity, flexibility, and ability to build scalable backend services.
      `,
    },

        {
      title: "Creating Your First Flask Application",
      content: `
Now that Flask is installed, let's create our first web application.

Step 1: Create a new project folder.

Example:

my_flask_app/

Step 2: Create a Python file named app.py.

Step 3: Import the Flask class.

Step 4: Create a Flask application object.

Step 5: Create your first route.

Step 6: Run the application.

Open your browser and visit:

http://127.0.0.1:5000/

If everything is configured correctly, your browser will display:

Hello, Flask!

This is the simplest Flask application and serves as the starting point for every Flask project.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Flask!"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Project Structure",
      content: `
A well-organized project structure makes applications easier to maintain and scale.

Basic Flask Project Structure:

my_flask_app/
│
├── app.py
├── templates/
│   └── index.html
├── static/
│   ├── css/
│   ├── js/
│   └── images/
├── requirements.txt
└── venv/

Folder Description:

• app.py - Main application file.
• templates - Stores HTML templates.
• static - Stores CSS, JavaScript, and images.
• requirements.txt - Stores project dependencies.
• venv - Virtual environment.

As your project grows, additional folders such as models, routes, controllers, and configuration files can be added.
      `,
    },

    {
      title: "Flask Application Object",
      content: `
Every Flask application starts by creating an application object.

Syntax:

app = Flask(__name__)

The Flask object represents your web application.

The __name__ variable tells Flask where your application is located. It helps Flask locate templates, static files, and other project resources.

Only one main application object is typically created for a Flask application.
      `,
      code: `from flask import Flask

app = Flask(__name__)`,
      language: "python",
    },

    {
      title: "Running the Development Server",
      content: `
Flask includes a built-in development server for testing applications during development.

There are two common ways to start the server.

Method 1:

Run the Python file directly.

Method 2:

Use the Flask command.

When debug mode is enabled, Flask automatically reloads the server whenever source code changes.

Debug mode also provides detailed error messages that make debugging much easier.

Remember that the built-in server is only intended for development and should not be used in production environments.
      `,
      code: `# Method 1

python app.py

# Method 2

flask run`,
      language: "bash",
    },

    {
      title: "Debug Mode",
      content: `
Debug mode is a special feature that helps developers during application development.

Benefits of Debug Mode:

• Automatic Server Restart
• Detailed Error Messages
• Faster Development
• Easier Debugging

Enable Debug Mode:

app.run(debug=True)

Never enable debug mode in production because it can expose sensitive application information.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Debug Mode Enabled"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Creating Routes",
      content: `
A route connects a URL with a Python function.

When a user visits a specific URL, Flask executes the corresponding function and returns the response.

Syntax:

@app.route("/")

Each route should have its own function.

Routes allow users to navigate through different pages of your application.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Home Page"

@app.route("/about")
def about():
    return "About Page"

@app.route("/contact")
def contact():
    return "Contact Page"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Multiple Routes",
      content: `
A Flask application can contain multiple routes.

Each route corresponds to a different URL.

Examples:

/

Home Page

/about

About Page

/contact

Contact Page

/services

Services Page

Every route performs a specific task and returns a response to the user.

Using multiple routes allows developers to build complete websites with multiple pages.
      `,
      code: `@app.route("/")
def home():
    return "Home"

@app.route("/about")
def about():
    return "About"

@app.route("/services")
def services():
    return "Services"

@app.route("/contact")
def contact():
    return "Contact"`,
      language: "python",
    },

    {
      title: "Flask Command Line Interface (CLI)",
      content: `
Flask provides a Command Line Interface (CLI) that simplifies development tasks.

Common Flask Commands:

• flask run
• flask shell
• flask routes
• flask --help

The CLI can automatically discover your application and start the development server.

It also provides useful commands for debugging and inspecting your project.
      `,
      code: `flask --help

flask run

flask shell

flask routes`,
      language: "bash",
    },

    {
      title: "Best Practices for Beginners",
      content: `
While learning Flask, follow these best practices:

• Create a virtual environment for every project.
• Keep your project organized.
• Use meaningful route names.
• Enable debug mode only during development.
• Separate HTML templates into the templates folder.
• Store CSS, JavaScript, and images in the static folder.
• Use comments to explain complex code.
• Test your application regularly.
• Learn routing before moving to databases.
• Practice by building small projects.

Following these practices will help you write clean, maintainable, and scalable Flask applications.
      `,
    },

        {
      title: "URL Routing",
      content: `
Routing is one of the most important features of Flask.

A route maps a URL to a Python function. Whenever a user visits a URL, Flask executes the corresponding function and returns a response.

Syntax:

@app.route("/")

A route decorator tells Flask which URL should trigger a specific function.

Example URLs:

• /
• /about
• /contact
• /services
• /login

Each URL is handled by a different function, making it easy to organize your application.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Welcome to Flask"

@app.route("/about")
def about():
    return "About Page"

@app.route("/contact")
def contact():
    return "Contact Page"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Dynamic Routes",
      content: `
Dynamic routes allow parts of the URL to change.

Instead of creating separate routes for every page, Flask can capture values directly from the URL.

Dynamic routes are created using angle brackets (< >).

Examples:

• /user/John
• /student/Alice
• /product/Laptop

The captured value is passed as a parameter to the view function.

Dynamic routing makes applications flexible and reduces repetitive code.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.route("/user/<name>")
def user(name):
    return f"Welcome, {name}!"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "URL Variables",
      content: `
URL variables allow data to be passed directly through the URL.

The value entered in the URL becomes a function parameter.

Examples:

• /student/Rahul
• /city/Mumbai
• /country/India

This feature is commonly used to display user profiles, product pages, blog posts, and more.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.route("/student/<name>")
def student(name):
    return f"Student Name: {name}"

@app.route("/city/<city>")
def city(city):
    return f"City: {city}"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "URL Converters",
      content: `
Flask supports URL converters that automatically convert URL values into specific data types.

Common URL Converters:

• string (default)
• int
• float
• path
• uuid

Using converters helps validate incoming data before it reaches your function.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.route("/age/<int:age>")
def age(age):
    return f"Age: {age}"

@app.route("/price/<float:price>")
def price(price):
    return f"Price: {price}"

@app.route("/files/<path:filename>")
def files(filename):
    return f"File: {filename}"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Default URL Converter",
      content: `
If no converter is specified, Flask treats the value as a string.

Example:

/user/Harish

The value "Harish" is automatically passed as a string to the function.

String conversion is the default behavior in Flask routing.
      `,
      code: `@app.route("/user/<name>")
def user(name):
    return f"Hello {name}"`,
      language: "python",
    },

    {
      title: "Handling Multiple Routes",
      content: `
A single function can handle multiple URLs by using multiple route decorators.

This is useful when different URLs should display the same content.

Examples:

• /
• /home

Both routes can point to the same function.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return "Welcome Home"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Route Parameters",
      content: `
Routes can accept multiple parameters.

Each parameter is passed separately to the function.

Example URL:

/add/15/25

The values 15 and 25 are received as function arguments and can be used to perform calculations or retrieve data.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.route("/add/<int:a>/<int:b>")
def add(a, b):
    return f"Sum = {a + b}"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Generating URLs with url_for()",
      content: `
Flask provides the url_for() function to generate URLs dynamically.

Instead of hardcoding URLs, url_for() generates the correct path based on the function name.

Benefits:

• Easier maintenance
• Avoids broken links
• Cleaner code
• Automatically updates URLs if routes change
      `,
      code: `from flask import Flask, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return url_for("about")

@app.route("/about")
def about():
    return "About Page"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "404 Error Handling",
      content: `
If a user visits a URL that does not exist, Flask returns a 404 (Not Found) error.

You can create a custom 404 page to improve the user experience.

Custom error pages help users understand that the requested page could not be found instead of displaying the default browser message.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.errorhandler(404)
def page_not_found(error):
    return "404 - Page Not Found", 404

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Best Practices for Routing",
      content: `
Follow these best practices when creating routes in Flask:

• Keep URLs short and meaningful.
• Use lowercase letters in route names.
• Avoid spaces in URLs.
• Use dynamic routes whenever appropriate.
• Use URL converters to validate data.
• Generate URLs using url_for().
• Keep route functions small and focused.
• Group related routes using Blueprints in large projects.

Following these practices makes your application easier to maintain and scale.
      `,
    },

        {
      title: "HTTP Methods",
      content: `
HTTP methods define the type of action a client wants to perform on a server.

Whenever a browser or application sends a request to a Flask application, it uses an HTTP method.

The most common HTTP methods are:

• GET
• POST
• PUT
• PATCH
• DELETE

Each method has a different purpose.

GET retrieves data from the server.

POST sends new data to the server.

PUT updates an existing resource completely.

PATCH updates only specific fields of a resource.

DELETE removes a resource from the server.

Understanding HTTP methods is essential for building web applications and RESTful APIs.
      `,
    },

    {
      title: "GET Method",
      content: `
The GET method is used to request data from the server.

It is the default HTTP method in Flask.

GET requests should only retrieve data and should not modify server resources.

Examples of GET requests:

• Opening a web page
• Viewing a profile
• Searching for products
• Reading blog posts

GET requests can include query parameters in the URL.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Welcome to Flask"

@app.route("/about")
def about():
    return "About Page"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "POST Method",
      content: `
The POST method is used to send data to the server.

It is commonly used for:

• User Registration
• Login Forms
• Contact Forms
• File Uploads
• Creating Database Records

Unlike GET requests, POST requests send data inside the request body instead of the URL.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/login", methods=["POST"])
def login():
    username = request.form["username"]
    return f"Welcome {username}"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Using Multiple HTTP Methods",
      content: `
A single route can support multiple HTTP methods.

This allows the same URL to perform different actions depending on the request method.

For example:

GET displays a form.

POST processes the submitted form.

This approach is commonly used in login and registration pages.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":
        username = request.form["username"]
        return f"Welcome {username}"

    return "Login Page"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "PUT Method",
      content: `
The PUT method is used to completely update an existing resource.

If a resource already exists, its data is replaced with the new information.

PUT is mainly used in REST APIs.

Example uses:

• Updating user information
• Updating product details
• Replacing an existing record
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/user/<int:id>", methods=["PUT"])
def update_user(id):

    data = request.get_json()

    return {
        "id": id,
        "updated_data": data
    }

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "PATCH Method",
      content: `
PATCH is used to update only specific fields of a resource.

Unlike PUT, PATCH does not replace the entire resource.

It is useful when only a few values need to be modified.

Examples:

• Updating email address
• Changing password
• Updating profile picture
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/profile/<int:id>", methods=["PATCH"])
def update_profile(id):

    data = request.get_json()

    return {
        "message": "Profile Updated",
        "data": data
    }

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "DELETE Method",
      content: `
DELETE removes an existing resource from the server.

Examples include:

• Deleting a user
• Removing a product
• Deleting a blog post
• Removing a comment

DELETE requests are commonly used in RESTful APIs.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.route("/user/<int:id>", methods=["DELETE"])
def delete_user(id):

    return {
        "message": f"User {id} deleted successfully"
    }

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Request Methods in Flask",
      content: `
Flask provides the request.method attribute to determine which HTTP method was used.

Common values include:

• GET
• POST
• PUT
• PATCH
• DELETE

This allows a single route to handle multiple types of requests.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/example", methods=["GET", "POST"])
def example():

    if request.method == "GET":
        return "GET Request"

    if request.method == "POST":
        return "POST Request"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "HTTP Status Codes",
      content: `
HTTP status codes indicate the result of a request.

Common status codes include:

• 200 OK – Request completed successfully.
• 201 Created – Resource created successfully.
• 400 Bad Request – Invalid request.
• 401 Unauthorized – Authentication required.
• 403 Forbidden – Permission denied.
• 404 Not Found – Resource not found.
• 500 Internal Server Error – Server encountered an unexpected error.

Status codes help clients understand whether a request succeeded or failed.
      `,
    },

    {
      title: "Best Practices for HTTP Methods",
      content: `
Follow these best practices when working with HTTP methods:

• Use GET only for retrieving data.
• Use POST for creating new resources.
• Use PUT for complete updates.
• Use PATCH for partial updates.
• Use DELETE for removing resources.
• Return appropriate HTTP status codes.
• Validate all incoming data.
• Avoid exposing sensitive information in URLs.
• Keep API endpoints consistent and meaningful.
      `,
    },

        {
      title: "Request Object",
      content: `
The Request Object represents the HTTP request sent by the client to the Flask application.

Whenever a user visits a page, submits a form, uploads a file, or sends data to an API, Flask stores all request information inside the request object.

The request object allows developers to access:

• Request Method
• URL Parameters
• Form Data
• JSON Data
• Cookies
• Headers
• Uploaded Files

The request object is available after importing it from the flask module.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def home():
    return f"Request Method: {request.method}"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Importing the Request Object",
      content: `
Before using the request object, it must be imported from Flask.

Syntax:

from flask import request

Once imported, it can be used inside route functions to retrieve information sent by the client.

The request object is only available while handling an active request.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)`,
      language: "python",
    },

    {
      title: "Request Method",
      content: `
The request.method attribute returns the HTTP method used by the client.

Common values include:

• GET
• POST
• PUT
• PATCH
• DELETE

This is useful when a single route supports multiple HTTP methods.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":
        return "POST Request"

    return "GET Request"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Query Parameters",
      content: `
Query parameters are values passed through the URL after a question mark (?).

Example:

/search?q=python

The request.args object is used to retrieve query parameters.

If a parameter does not exist, the get() method returns None or a default value.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/search")
def search():

    keyword = request.args.get("q")

    return f"Searching for: {keyword}"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Form Data",
      content: `
When users submit HTML forms using the POST method, the submitted values are available through request.form.

Form data is commonly used for:

• Login Forms
• Registration Forms
• Contact Forms
• Feedback Forms
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/login", methods=["POST"])
def login():

    username = request.form["username"]

    password = request.form["password"]

    return f"Welcome {username}"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "JSON Data",
      content: `
Modern web applications and REST APIs often exchange data in JSON format.

Flask provides request.get_json() to retrieve JSON data sent by the client.

JSON is commonly used when communicating with frontend frameworks like React, Angular, or Vue.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/user", methods=["POST"])
def create_user():

    data = request.get_json()

    return {
        "received": data
    }

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Accessing Headers",
      content: `
HTTP headers contain additional information about the request.

Examples include:

• Content-Type
• Authorization
• User-Agent
• Accept

Headers are useful for authentication, API requests, and browser information.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def home():

    browser = request.headers.get("User-Agent")

    return browser

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Cookies",
      content: `
Cookies store small pieces of data inside the user's browser.

The request.cookies object is used to read cookies sent by the client.

Cookies are commonly used for:

• Authentication
• User Preferences
• Remember Me Functionality
• Tracking Sessions
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def home():

    username = request.cookies.get("username")

    return f"Cookie: {username}"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "File Uploads",
      content: `
Uploaded files are available through request.files.

This is commonly used for:

• Profile Pictures
• Documents
• PDFs
• Images
• Videos

Each uploaded file can be saved on the server.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/upload", methods=["POST"])
def upload():

    file = request.files["image"]

    file.save(file.filename)

    return "File Uploaded Successfully"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Useful Request Attributes",
      content: `
The request object contains many useful attributes.

Common attributes include:

• request.method
• request.args
• request.form
• request.files
• request.cookies
• request.headers
• request.path
• request.url
• request.host
• request.remote_addr
• request.endpoint
• request.scheme

These attributes provide detailed information about the incoming request.
      `,
    },

    {
      title: "Best Practices",
      content: `
Follow these best practices when using the request object:

• Validate all user input.
• Never trust client-side data.
• Use request.get_json() for APIs.
• Use request.form for HTML forms.
• Check whether uploaded files exist before saving them.
• Validate file types before uploading.
• Handle missing query parameters safely using get().
• Never expose sensitive request data.
• Sanitize all user input before storing it in a database.
      `,
    },

    
      {
      title: "Response Object",
      content: `
The Response Object represents the data that a Flask application sends back to the client after processing a request.

Whenever a user visits a web page or an API endpoint, Flask generates a response and sends it to the browser or client application.

A response may contain:

• Plain Text
• HTML
• JSON
• Files
• Redirects
• HTTP Status Codes
• Custom Headers

Every Flask route returns a response, either automatically or by creating a custom Response object.
      `,
    },

    {
      title: "Returning Plain Text",
      content: `
The simplest response in Flask is a plain text string.

When a route returns a string, Flask automatically converts it into an HTTP response.

This is commonly used for testing applications or creating simple endpoints.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Welcome to LearnWell Flask Course"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Returning HTML",
      content: `
Flask can return HTML directly from a route.

Although this approach works, large HTML pages should be placed inside template files instead of writing HTML inside Python code.

Returning HTML directly is useful for simple examples and testing.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return """
    <h1>Welcome to Flask</h1>
    <p>This page is generated by Flask.</p>
    """

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Returning JSON Data",
      content: `
JSON (JavaScript Object Notation) is the standard format used for exchanging data between clients and servers.

Flask provides the jsonify() function to return JSON responses.

JSON responses are widely used in RESTful APIs.
      `,
      code: `from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/student")
def student():

    return jsonify({
        "id": 1,
        "name": "Harish",
        "course": "Flask"
    })

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Returning Status Codes",
      content: `
Every HTTP response contains a status code indicating whether the request was successful.

Common status codes include:

• 200 OK
• 201 Created
• 400 Bad Request
• 401 Unauthorized
• 403 Forbidden
• 404 Not Found
• 500 Internal Server Error

Flask allows you to specify a custom status code while returning a response.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.route("/created")
def created():
    return "User Created Successfully", 201

@app.route("/error")
def error():
    return "Bad Request", 400

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Creating a Custom Response",
      content: `
Flask provides the make_response() function to create custom HTTP responses.

Using make_response(), developers can:

• Change status codes
• Add custom headers
• Set cookies
• Modify the response before sending it
      `,
      code: `from flask import Flask, make_response

app = Flask(__name__)

@app.route("/")
def home():

    response = make_response("Welcome to Flask")

    response.status_code = 200

    return response

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Adding Custom Headers",
      content: `
Headers contain additional information about the response.

Some common response headers are:

• Content-Type
• Cache-Control
• Authorization
• Server

Custom headers are useful for APIs and browser communication.
      `,
      code: `from flask import Flask, make_response

app = Flask(__name__)

@app.route("/")
def home():

    response = make_response("Hello")

    response.headers["Author"] = "LearnWell"

    response.headers["Course"] = "Flask"

    return response

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Setting Cookies",
      content: `
Cookies allow a server to store small amounts of information inside the user's browser.

Cookies are commonly used for:

• Login Sessions
• User Preferences
• Authentication
• Remember Me Features

The set_cookie() method is used to create cookies.
      `,
      code: `from flask import Flask, make_response

app = Flask(__name__)

@app.route("/")
def home():

    response = make_response("Cookie Created")

    response.set_cookie("username", "Harish")

    return response

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Returning Files",
      content: `
Flask can send files such as PDFs, images, text files, and documents to users.

The send_file() function is commonly used for downloading files.
      `,
      code: `from flask import Flask, send_file

app = Flask(__name__)

@app.route("/download")
def download():

    return send_file("notes.pdf", as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Redirecting Users",
      content: `
Sometimes users need to be redirected to another page.

Flask provides the redirect() function to send users to a different route.

The url_for() function is usually used together with redirect().
      `,
      code: `from flask import Flask, redirect, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return redirect(url_for("about"))

@app.route("/about")
def about():
    return "About Page"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Best Practices",
      content: `
Follow these best practices while creating responses:

• Use jsonify() for APIs.
• Return meaningful status codes.
• Avoid returning sensitive information.
• Use make_response() when custom headers or cookies are required.
• Return HTML using templates instead of writing HTML inside Python code.
• Use redirect() for navigation.
• Keep responses clear and consistent.
      `,
    },

        {
      title: "Templates in Flask",
      content: `
Templates allow developers to separate the application's logic from its presentation.

Instead of writing HTML directly inside Python code, Flask stores HTML pages in the templates folder and renders them when requested.

Flask uses the Jinja2 template engine to create dynamic web pages.

Benefits of Templates:

• Cleaner Code
• Better Project Organization
• Reusable HTML
• Dynamic Content
• Easier Maintenance

The templates folder is automatically recognized by Flask.
      `,
    },

    {
      title: "Creating Your First Template",
      content: `
Create a folder named templates in your project directory.

Inside the templates folder, create an HTML file named index.html.

Use the render_template() function to display the HTML page.

Flask automatically searches for template files inside the templates directory.
      `,
      code: `from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "HTML Template Example",
      content: `
A template is simply an HTML file with optional Jinja2 syntax.

Templates can contain normal HTML along with dynamic placeholders.

Example file:

templates/index.html
      `,
      code: `<!DOCTYPE html>
<html>
<head>
    <title>LearnWell Flask</title>
</head>
<body>

    <h1>Welcome to Flask</h1>

</body>
</html>`,
      language: "html",
    },

    {
      title: "Passing Variables to Templates",
      content: `
Flask allows data to be passed from Python to HTML templates.

Variables are passed as keyword arguments to render_template().

Inside the template, variables are displayed using double curly braces.

Syntax:

{{ variable_name }}

This allows web pages to display dynamic information.
      `,
      code: `from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():

    return render_template(
        "index.html",
        name="Harish",
        course="Flask"
    )

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Displaying Variables",
      content: `
Variables passed from Flask can be displayed anywhere inside the HTML template.

Jinja2 automatically replaces the placeholders with actual values before sending the page to the browser.
      `,
      code: `<!DOCTYPE html>
<html>
<body>

<h1>Hello {{ name }}</h1>

<p>Welcome to {{ course }} Programming.</p>

</body>
</html>`,
      language: "html",
    },

    {
      title: "Using Expressions",
      content: `
Jinja2 supports expressions inside templates.

Expressions allow developers to perform calculations and display results dynamically.

Examples include:

• Addition
• Subtraction
• Multiplication
• Division
• String Concatenation
      `,
      code: `<h2>{{ 10 + 5 }}</h2>

<p>{{ "Hello " + "Flask" }}</p>

<p>{{ 100 / 5 }}</p>`,
      language: "html",
    },

    {
      title: "If Statement in Templates",
      content: `
Jinja2 provides conditional statements similar to Python.

The if statement allows content to be displayed only when a condition is true.

Supported statements include:

• if
• elif
• else

Conditional rendering is useful for login systems, dashboards, and user roles.
      `,
      code: `{% if age >= 18 %}

<p>Eligible to Vote</p>

{% else %}

<p>Not Eligible</p>

{% endif %}`,
      language: "html",
    },

    {
      title: "For Loop in Templates",
      content: `
The for loop is used to display multiple items.

It is commonly used for:

• Product Lists
• Student Records
• Blog Posts
• Tables
• Menus

Each item in the collection is rendered automatically.
      `,
      code: `<ul>

{% for language in languages %}

<li>{{ language }}</li>

{% endfor %}

</ul>`,
      language: "html",
    },

    {
      title: "Passing Lists to Templates",
      content: `
Python lists can be passed directly to templates.

The template can iterate through the list using a for loop.

This approach is commonly used when displaying database records.
      `,
      code: `from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():

    languages = [
        "Python",
        "Java",
        "C++",
        "Flask"
    ]

    return render_template(
        "index.html",
        languages=languages
    )

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Comments in Jinja2",
      content: `
Jinja2 supports comments that are ignored during rendering.

Comments are useful for documenting template code without displaying them in the browser.

Syntax:

{# Comment #}
      `,
      code: `{# This is a Jinja2 Comment #}`,
      language: "html",
    },

    {
      title: "Whitespace Control",
      content: `
Jinja2 provides whitespace control to remove unnecessary spaces and blank lines in rendered HTML.

Whitespace control makes the generated HTML cleaner and more readable.

Syntax:

{%- ... -%}
      `,
      code: `{%- for item in items -%}

{{ item }}

{%- endfor -%}`,
      language: "html",
    },

    {
      title: "Best Practices for Templates",
      content: `
Follow these best practices while working with templates:

• Keep HTML and Python code separate.
• Store all HTML files inside the templates folder.
• Use descriptive template names.
• Pass only required data to templates.
• Avoid placing business logic inside templates.
• Reuse common layouts using template inheritance.
• Keep templates clean and organized.
• Use loops and conditions only for presentation purposes.
      `,
    },

        {
      title: "Templates in Flask",
      content: `
Templates allow developers to separate the application's logic from its presentation.

Instead of writing HTML directly inside Python code, Flask stores HTML pages in the templates folder and renders them when requested.

Flask uses the Jinja2 template engine to create dynamic web pages.

Benefits of Templates:

• Cleaner Code
• Better Project Organization
• Reusable HTML
• Dynamic Content
• Easier Maintenance

The templates folder is automatically recognized by Flask.
      `,
    },

    {
      title: "Creating Your First Template",
      content: `
Create a folder named templates in your project directory.

Inside the templates folder, create an HTML file named index.html.

Use the render_template() function to display the HTML page.

Flask automatically searches for template files inside the templates directory.
      `,
      code: `from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "HTML Template Example",
      content: `
A template is simply an HTML file with optional Jinja2 syntax.

Templates can contain normal HTML along with dynamic placeholders.

Example file:

templates/index.html
      `,
      code: `<!DOCTYPE html>
<html>
<head>
    <title>LearnWell Flask</title>
</head>
<body>

    <h1>Welcome to Flask</h1>

</body>
</html>`,
      language: "html",
    },

    {
      title: "Passing Variables to Templates",
      content: `
Flask allows data to be passed from Python to HTML templates.

Variables are passed as keyword arguments to render_template().

Inside the template, variables are displayed using double curly braces.

Syntax:

{{ variable_name }}

This allows web pages to display dynamic information.
      `,
      code: `from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():

    return render_template(
        "index.html",
        name="Harish",
        course="Flask"
    )

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Displaying Variables",
      content: `
Variables passed from Flask can be displayed anywhere inside the HTML template.

Jinja2 automatically replaces the placeholders with actual values before sending the page to the browser.
      `,
      code: `<!DOCTYPE html>
<html>
<body>

<h1>Hello {{ name }}</h1>

<p>Welcome to {{ course }} Programming.</p>

</body>
</html>`,
      language: "html",
    },

    {
      title: "Using Expressions",
      content: `
Jinja2 supports expressions inside templates.

Expressions allow developers to perform calculations and display results dynamically.

Examples include:

• Addition
• Subtraction
• Multiplication
• Division
• String Concatenation
      `,
      code: `<h2>{{ 10 + 5 }}</h2>

<p>{{ "Hello " + "Flask" }}</p>

<p>{{ 100 / 5 }}</p>`,
      language: "html",
    },

    {
      title: "If Statement in Templates",
      content: `
Jinja2 provides conditional statements similar to Python.

The if statement allows content to be displayed only when a condition is true.

Supported statements include:

• if
• elif
• else

Conditional rendering is useful for login systems, dashboards, and user roles.
      `,
      code: `{% if age >= 18 %}

<p>Eligible to Vote</p>

{% else %}

<p>Not Eligible</p>

{% endif %}`,
      language: "html",
    },

    {
      title: "For Loop in Templates",
      content: `
The for loop is used to display multiple items.

It is commonly used for:

• Product Lists
• Student Records
• Blog Posts
• Tables
• Menus

Each item in the collection is rendered automatically.
      `,
      code: `<ul>

{% for language in languages %}

<li>{{ language }}</li>

{% endfor %}

</ul>`,
      language: "html",
    },

    {
      title: "Passing Lists to Templates",
      content: `
Python lists can be passed directly to templates.

The template can iterate through the list using a for loop.

This approach is commonly used when displaying database records.
      `,
      code: `from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():

    languages = [
        "Python",
        "Java",
        "C++",
        "Flask"
    ]

    return render_template(
        "index.html",
        languages=languages
    )

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Comments in Jinja2",
      content: `
Jinja2 supports comments that are ignored during rendering.

Comments are useful for documenting template code without displaying them in the browser.

Syntax:

{# Comment #}
      `,
      code: `{# This is a Jinja2 Comment #}`,
      language: "html",
    },

    {
      title: "Whitespace Control",
      content: `
Jinja2 provides whitespace control to remove unnecessary spaces and blank lines in rendered HTML.

Whitespace control makes the generated HTML cleaner and more readable.

Syntax:

{%- ... -%}
      `,
      code: `{%- for item in items -%}

{{ item }}

{%- endfor -%}`,
      language: "html",
    },

    {
      title: "Best Practices for Templates",
      content: `
Follow these best practices while working with templates:

• Keep HTML and Python code separate.
• Store all HTML files inside the templates folder.
• Use descriptive template names.
• Pass only required data to templates.
• Avoid placing business logic inside templates.
• Reuse common layouts using template inheritance.
• Keep templates clean and organized.
• Use loops and conditions only for presentation purposes.
      `,
    },

    
      {
      title: "Static Files",
      content: `
Static files are files that do not change while the application is running.

Unlike HTML templates, static files are served directly to the browser without being processed by Flask.

Examples of static files include:

• CSS Files
• JavaScript Files
• Images
• Icons
• Fonts
• Videos
• PDF Files

Flask automatically serves static files from the static folder.

Using static files keeps your project organized and separates design resources from application logic.
      `,
    },

    {
      title: "Static Folder Structure",
      content: `
By default, Flask looks for static resources inside the static folder.

A common project structure is:

my_flask_app/

├── app.py
├── templates/
│   ├── index.html
│   └── about.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   ├── images/
│   │   └── logo.png
│   │
│   └── fonts/

Keeping files in separate folders makes them easier to manage.
      `,
    },

    {
      title: "Using CSS Files",
      content: `
CSS files are used to style HTML pages.

Instead of writing CSS inside HTML files, it is recommended to place CSS files inside the static/css folder.

The url_for() function generates the correct path to the CSS file.
      `,
      code: `<link rel="stylesheet"
href="{{ url_for('static', filename='css/style.css') }}">`,
      language: "html",
    },

    {
      title: "Creating a CSS File",
      content: `
Create a file named style.css inside the static/css folder.

This file contains all the styles used by your website.

Separating CSS from HTML improves readability and makes maintenance easier.
      `,
      code: `body{
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
}

h1{
    color: #2563eb;
}

p{
    font-size:18px;
}`,
      language: "css",
    },

    {
      title: "Using JavaScript Files",
      content: `
JavaScript files add interactivity to web pages.

Store JavaScript files inside the static/js folder.

Examples include:

• Form Validation
• Animations
• API Requests
• Button Events
• DOM Manipulation

Use url_for() to include JavaScript files.
      `,
      code: `<script src="{{ url_for('static', filename='js/script.js') }}"></script>`,
      language: "html",
    },

    {
      title: "Creating a JavaScript File",
      content: `
Create a file named script.js inside the static/js folder.

This file contains JavaScript code used by your application.
      `,
      code: `document.addEventListener("DOMContentLoaded", () => {

    console.log("Welcome to LearnWell Flask Course");

});`,
      language: "javascript",
    },

    {
      title: "Displaying Images",
      content: `
Images are usually stored inside the static/images folder.

Flask uses url_for() to generate the correct path for image files.

Supported image formats include:

• PNG
• JPG
• JPEG
• SVG
• GIF
• WEBP
      `,
      code: `<img
src="{{ url_for('static', filename='images/logo.png') }}"
alt="LearnWell Logo">`,
      language: "html",
    },

    {
      title: "Using Custom Fonts",
      content: `
Custom fonts can be stored inside the static/fonts folder.

These fonts can then be loaded using CSS.

Custom fonts improve the visual appearance of websites and help create unique designs.
      `,
      code: `@font-face{

    font-family: "MyFont";

    src: url("../fonts/MyFont.ttf");

}

body{

    font-family: "MyFont";

}`,
      language: "css",
    },

    {
      title: "Serving Static Files",
      content: `
Flask automatically serves files placed inside the static folder.

The url_for() function generates the correct URL for every static file.

Syntax:

url_for('static', filename='path/to/file')

Examples:

• css/style.css
• js/script.js
• images/logo.png
• fonts/font.ttf

Using url_for() ensures that file paths remain correct even if the application structure changes.
      `,
      code: `{{ url_for('static', filename='css/style.css') }}

{{ url_for('static', filename='js/script.js') }}

{{ url_for('static', filename='images/logo.png') }}`,
      language: "html",
    },

    {
      title: "Best Practices",
      content: `
Follow these best practices while working with static files:

• Keep CSS files inside static/css.
• Store JavaScript files inside static/js.
• Place images inside static/images.
• Use descriptive file names.
• Always use url_for() instead of hardcoding file paths.
• Compress images to improve performance.
• Minify CSS and JavaScript for production.
• Organize static files into separate folders.
• Remove unused files regularly.
      `,
    },

       {
      title: "Working with Forms",
      content: `
Forms allow users to send data from a web page to a Flask application.

They are one of the most important components of web development and are commonly used for:

• User Registration
• Login Systems
• Contact Forms
• Feedback Forms
• Search Boxes
• File Uploads
• Profile Updates

When a user submits a form, the data is sent to the server using an HTTP request. Flask receives the submitted data through the request object and processes it accordingly.

Forms make web applications interactive by allowing users to communicate with the server.
      `,
    },

    {
      title: "Creating an HTML Form",
      content: `
HTML forms are created using the <form> element.

The action attribute specifies where the form data should be sent.

The method attribute specifies the HTTP method used to submit the form.

The two most common methods are:

• GET
• POST

Input fields allow users to enter information, while the submit button sends the form data to the server.
      `,
      code: `<!DOCTYPE html>
<html>

<body>

<form action="/login" method="POST">

    <label>Username</label>

    <input
        type="text"
        name="username"
        placeholder="Enter Username">

    <br><br>

    <label>Password</label>

    <input
        type="password"
        name="password"
        placeholder="Enter Password">

    <br><br>

    <button type="submit">
        Login
    </button>

</form>

</body>

</html>`,
      language: "html",
    },

    {
      title: "Handling Form Data",
      content: `
Flask uses request.form to access data submitted through HTML forms.

Each input field is identified by its name attribute.

Submitted values can then be stored, validated, or processed inside the route function.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/login", methods=["POST"])
def login():

    username = request.form["username"]

    password = request.form["password"]

    return f"Welcome {username}"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "GET vs POST Forms",
      content: `
Forms can submit data using either GET or POST.

GET Method:

• Sends data in the URL.
• Suitable for searches.
• Data is visible in the browser address bar.
• Can be bookmarked.

POST Method:

• Sends data inside the request body.
• More secure than GET.
• Suitable for login and registration forms.
• Used for creating or updating data.

Choose the appropriate method based on the type of data being submitted.
      `,
    },

    {
      title: "Using request.form.get()",
      content: `
The get() method safely retrieves form values.

Unlike dictionary indexing, get() returns None or a default value if the field does not exist.

This helps prevent runtime errors when optional form fields are missing.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/register", methods=["POST"])
def register():

    name = request.form.get("name")

    email = request.form.get("email")

    return f"Welcome {name}"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Basic Form Validation",
      content: `
Validation ensures that user input is correct before it is processed.

Common validation checks include:

• Required Fields
• Minimum Length
• Maximum Length
• Email Format
• Password Strength
• Numeric Values

Always validate user input to improve security and maintain data integrity.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/register", methods=["POST"])
def register():

    username = request.form.get("username")

    if not username:
        return "Username is required."

    return "Registration Successful"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Displaying Form Data",
      content: `
After processing a form, Flask can display the submitted information back to the user.

This is useful for testing and understanding how form data is received by the server.

In production applications, sensitive information such as passwords should never be displayed.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/contact", methods=["POST"])
def contact():

    name = request.form.get("name")

    message = request.form.get("message")

    return f"""
    Name: {name}

    Message: {message}
    """

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Resetting Forms",
      content: `
HTML provides a reset button that clears all input fields.

This allows users to remove entered values without refreshing the page.

The reset button restores all form fields to their default values.
      `,
      code: `<form>

<input type="text" name="username">

<input type="password" name="password">

<button type="reset">
Reset
</button>

</form>`,
      language: "html",
    },

    {
      title: "Common Form Elements",
      content: `
HTML forms provide various input controls for collecting user information.

Common form elements include:

• Text Box
• Password Field
• Email Field
• Number Field
• Textarea
• Checkbox
• Radio Button
• Select Dropdown
• Date Picker
• File Upload
• Submit Button
• Reset Button

Choosing the appropriate input type improves usability and data accuracy.
      `,
    },

    {
      title: "Best Practices",
      content: `
Follow these best practices while working with forms:

• Use POST for sensitive data.
• Validate all user input.
• Never trust client-side validation alone.
• Use request.form.get() for optional fields.
• Display user-friendly validation messages.
• Protect forms against CSRF attacks in production.
• Never store passwords in plain text.
• Sanitize user input before storing it in a database.
• Keep forms simple and easy to use.
      `,
    },

        {
      title: "Redirects and URL Building",
      content: `
Redirecting allows a Flask application to send users from one URL to another.

Instead of displaying content directly, the browser is instructed to visit a different route.

Redirects are commonly used after:

• Login
• Registration
• Logout
• Form Submission
• Page Updates
• Authentication

Flask provides the redirect() function to perform URL redirection and the url_for() function to generate URLs dynamically.

Using redirect() with url_for() makes applications easier to maintain because route URLs do not need to be hardcoded.
      `,
    },

    {
      title: "The redirect() Function",
      content: `
The redirect() function sends the user to another route or URL.

Syntax:

redirect(location)

When a redirect occurs, the browser automatically makes a new request to the specified location.

Redirects improve navigation and user experience.
      `,
      code: `from flask import Flask, redirect

app = Flask(__name__)

@app.route("/")
def home():
    return redirect("/about")

@app.route("/about")
def about():
    return "Welcome to About Page"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "The url_for() Function",
      content: `
The url_for() function generates URLs using the function name instead of writing URLs manually.

Syntax:

url_for("function_name")

Advantages of url_for():

• Prevents broken links
• Easier maintenance
• Cleaner code
• Automatically updates URLs if routes change

Using url_for() is considered a best practice in Flask applications.
      `,
      code: `from flask import Flask, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return url_for("about")

@app.route("/about")
def about():
    return "About Page"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Using redirect() with url_for()",
      content: `
The redirect() and url_for() functions are often used together.

Instead of redirecting to a hardcoded URL, Flask generates the correct URL automatically.

This makes applications more flexible and easier to update.
      `,
      code: `from flask import Flask, redirect, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return redirect(url_for("dashboard"))

@app.route("/dashboard")
def dashboard():
    return "Welcome to Dashboard"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Passing Parameters with url_for()",
      content: `
The url_for() function can generate dynamic URLs by passing values as arguments.

These values are inserted into the URL automatically.

Dynamic URL generation is useful for:

• User Profiles
• Product Pages
• Blog Posts
• Student Records
      `,
      code: `from flask import Flask, redirect, url_for

app = Flask(__name__)

@app.route("/user/<name>")
def user(name):
    return f"Welcome {name}"

@app.route("/")
def home():
    return redirect(
        url_for("user", name="Harish")
    )

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Redirect After Form Submission",
      content: `
After successfully processing a form, users are often redirected to another page.

Examples include:

• Login → Dashboard
• Registration → Login
• Contact Form → Thank You Page
• Checkout → Payment Success

Redirecting prevents duplicate form submissions when the user refreshes the page.
      `,
      code: `from flask import Flask, request, redirect, url_for

app = Flask(__name__)

@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":
        return redirect(url_for("dashboard"))

    return "Login Page"

@app.route("/dashboard")
def dashboard():
    return "Welcome to Dashboard"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Redirecting to External Websites",
      content: `
Flask can also redirect users to external websites.

Simply provide the complete URL to the redirect() function.

This is useful for:

• Documentation
• Payment Gateways
• OAuth Login
• Third-party Services
      `,
      code: `from flask import Flask, redirect

app = Flask(__name__)

@app.route("/docs")
def docs():
    return redirect("https://flask.palletsprojects.com")

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "URL Building with Query Parameters",
      content: `
The url_for() function can generate URLs with query parameters.

Query parameters are appended to the URL after a question mark (?).

Example:

/search?q=flask

This is commonly used for search functionality and filtering data.
      `,
      code: `from flask import Flask, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return url_for("search", q="flask")

@app.route("/search")
def search():
    return "Search Results"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Best Practices",
      content: `
Follow these best practices when using redirects and URL building:

• Use url_for() instead of hardcoding URLs.
• Redirect users after successful form submissions.
• Keep route names meaningful.
• Avoid unnecessary redirects.
• Test redirects to ensure they work correctly.
• Use HTTPS for external redirects.
• Keep navigation simple and consistent.
• Organize related routes using Blueprints in larger applications.
      `,
    },

        {
      title: "Sessions and Cookies",
      content: `
Sessions and cookies allow Flask applications to remember information between different requests.

Normally, HTTP is a stateless protocol, which means the server does not remember previous requests from a client.

Sessions and cookies solve this problem by storing user-related information.

Cookies are stored in the user's browser.

Sessions store data securely on the server (using a session cookie to identify the user).

They are commonly used for:

• User Authentication
• Login Systems
• Shopping Carts
• User Preferences
• Language Selection
• Remember Me Functionality
• Tracking User Activity

Using sessions and cookies improves the user experience by maintaining state across multiple pages.
      `,
    },

    {
      title: "Working with Sessions",
      content: `
A session stores temporary information about a user during their interaction with the application.

To use sessions in Flask, a secret key must be configured.

The secret key is used to securely sign session data and prevent tampering.

Session data remains available until the user logs out or the session expires.
      `,
      code: `from flask import Flask, session

app = Flask(__name__)

app.secret_key = "my_secret_key"

@app.route("/")
def home():

    session["username"] = "Harish"

    return "Session Created"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Reading Session Data",
      content: `
Values stored in a session can be retrieved using their keys.

If the requested key does not exist, the get() method can be used to return a default value instead of raising an error.

Sessions make it easy to access user-specific information throughout the application.
      `,
      code: `from flask import Flask, session

app = Flask(__name__)

app.secret_key = "my_secret_key"

@app.route("/")
def home():

    username = session.get("username", "Guest")

    return f"Welcome {username}"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Removing Session Data",
      content: `
Individual session values can be removed using the pop() method.

To clear all stored session data, use the clear() method.

Removing session data is commonly performed during logout to ensure that user information is no longer available.
      `,
      code: `from flask import Flask, session

app = Flask(__name__)

app.secret_key = "my_secret_key"

@app.route("/logout")
def logout():

    session.pop("username", None)

    return "Logged Out"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Clearing All Sessions",
      content: `
The clear() method removes all data stored in the current session.

This is useful when a user logs out completely or when the application needs to reset the session.
      `,
      code: `from flask import Flask, session

app = Flask(__name__)

app.secret_key = "my_secret_key"

@app.route("/clear")
def clear_session():

    session.clear()

    return "Session Cleared"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Working with Cookies",
      content: `
Cookies are small pieces of data stored in the user's browser.

Unlike sessions, cookies are stored on the client side and are sent with every request to the server.

Cookies are commonly used for:

• Remember Me
• User Preferences
• Theme Settings
• Language Selection
• Tracking Information

Sensitive information should never be stored directly in cookies.
      `,
      code: `from flask import Flask, make_response

app = Flask(__name__)

@app.route("/")
def home():

    response = make_response("Cookie Created")

    response.set_cookie("username", "Harish")

    return response

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Reading Cookies",
      content: `
Cookies sent by the browser can be accessed using the request.cookies object.

The get() method returns the value associated with a cookie name.

If the cookie does not exist, None or a default value is returned.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def home():

    username = request.cookies.get("username")

    return f"Cookie Value: {username}"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Deleting Cookies",
      content: `
Cookies can be removed by setting their expiration date in the past.

Flask provides the delete_cookie() method to simplify this process.

Deleting cookies is commonly performed during logout.
      `,
      code: `from flask import Flask, make_response

app = Flask(__name__)

@app.route("/logout")
def logout():

    response = make_response("Cookie Deleted")

    response.delete_cookie("username")

    return response

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Sessions vs Cookies",
      content: `
Although sessions and cookies are often used together, they have important differences.

Sessions:

• Stored on the server.
• More secure.
• Suitable for sensitive information.
• Identified using a session cookie.

Cookies:

• Stored in the browser.
• Limited storage capacity.
• Suitable for user preferences.
• Should not contain confidential information.

Choose sessions for authentication and cookies for storing non-sensitive user settings.
      `,
    },

    {
      title: "Best Practices",
      content: `
Follow these best practices when working with sessions and cookies:

• Always configure a strong secret key.
• Never store passwords in sessions or cookies.
• Use sessions for authentication.
• Store only non-sensitive information in cookies.
• Clear session data during logout.
• Delete unnecessary cookies.
• Set appropriate expiration times.
• Use HTTPS in production to protect session cookies.
• Rotate secret keys securely when required.
      `,
    },

      {
      title: "Flash Messages",
      content: `
Flash messages allow Flask applications to display temporary notifications to users.

These messages are stored for one request and automatically removed after being displayed.

Flash messages are commonly used to provide feedback after user actions.

Common examples include:

• Login Successful
• Registration Completed
• Profile Updated
• Password Changed
• File Uploaded
• Invalid Username or Password
• Form Validation Errors

Flash messages improve the user experience by providing clear feedback about the result of an action.
      `,
    },

    {
      title: "Using Flash Messages",
      content: `
Before using flash messages, you must configure a secret key for your Flask application.

The flash() function stores a message that can be displayed on the next page.

Syntax:

flash(message)

Flash messages remain available for only one request and are removed after being displayed.
      `,
      code: `from flask import Flask, flash

app = Flask(__name__)

app.secret_key = "my_secret_key"

@app.route("/")
def home():

    flash("Welcome to LearnWell!")

    return "Flash Message Created"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Displaying Flash Messages",
      content: `
Flashed messages are displayed inside HTML templates using the get_flashed_messages() function.

This function returns all messages stored during the previous request.

Messages are usually displayed at the top of the page so users can easily notice them.
      `,
      code: `{% with messages = get_flashed_messages() %}

    {% if messages %}

        <ul>

        {% for message in messages %}

            <li>{{ message }}</li>

        {% endfor %}

        </ul>

    {% endif %}

{% endwith %}`,
      language: "html",
    },

    {
      title: "Flash Message Categories",
      content: `
Flask allows messages to be grouped into categories.

Common categories include:

• success
• error
• warning
• info

Categories help apply different styles to different types of messages.

For example, success messages may appear in green, while error messages appear in red.
      `,
      code: `from flask import Flask, flash

app = Flask(__name__)

app.secret_key = "my_secret_key"

@app.route("/")
def home():

    flash("Login Successful", "success")

    flash("Invalid Password", "error")

    flash("Profile Updated", "info")

    return "Messages Created"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Displaying Categories",
      content: `
To access both the category and the message, use the with_categories parameter.

This returns each flash message as a pair containing its category and message.

Templates can then display different styles based on the category.
      `,
      code: `{% with messages = get_flashed_messages(with_categories=true) %}

{% if messages %}

    {% for category, message in messages %}

        <div class="{{ category }}">

            {{ message }}

        </div>

    {% endfor %}

{% endif %}

{% endwith %}`,
      language: "html",
    },

    {
      title: "Flashing Messages After Login",
      content: `
Flash messages are commonly used after login attempts.

If the login is successful, a success message can be displayed.

If the credentials are incorrect, an error message can inform the user.

This improves usability by providing immediate feedback.
      `,
      code: `from flask import Flask, flash, redirect, url_for

app = Flask(__name__)

app.secret_key = "my_secret_key"

@app.route("/login")
def login():

    flash("Login Successful!", "success")

    return redirect(url_for("dashboard"))

@app.route("/dashboard")
def dashboard():

    return "Dashboard"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Common Uses of Flash Messages",
      content: `
Flash messages can be used in many situations.

Examples include:

• Login
• Logout
• Registration
• Password Reset
• Email Verification
• File Upload
• Form Validation
• Profile Updates
• Successful Payments
• Error Notifications

Using flash messages makes applications more interactive and user-friendly.
      `,
    },

    {
      title: "Styling Flash Messages",
      content: `
Flash messages are usually styled using CSS.

Different colors help users quickly identify the type of message.

Example styles:

• Green for Success
• Red for Error
• Yellow for Warning
• Blue for Information

Good styling improves readability and enhances the overall user experience.
      `,
      code: `.success{
    background:#d1fae5;
    color:#065f46;
    padding:10px;
}

.error{
    background:#fee2e2;
    color:#991b1b;
    padding:10px;
}

.warning{
    background:#fef3c7;
    color:#92400e;
    padding:10px;
}

.info{
    background:#dbeafe;
    color:#1e40af;
    padding:10px;
}`,
      language: "css",
    },

    {
      title: "Best Practices",
      content: `
Follow these best practices while using flash messages:

• Keep messages short and meaningful.
• Use categories for different message types.
• Display messages in a consistent location.
• Avoid exposing sensitive information.
• Clear messages automatically after display.
• Use appropriate colors for different categories.
• Provide helpful feedback instead of technical errors.
• Combine flash messages with redirects after successful actions.
      `,
    },

        {
      title: "Error Handling",
      content: `
Error handling is the process of detecting and managing errors that occur while a Flask application is running.

Without proper error handling, users may see confusing error messages or the application may stop unexpectedly.

Flask provides tools to handle errors gracefully and display user-friendly error pages.

Common types of errors include:

• 400 Bad Request
• 401 Unauthorized
• 403 Forbidden
• 404 Not Found
• 405 Method Not Allowed
• 500 Internal Server Error

Proper error handling improves application reliability, security, and user experience.
      `,
    },

    {
      title: "Handling 404 Errors",
      content: `
A 404 error occurs when a user requests a page that does not exist.

Flask allows you to create a custom 404 page using the errorhandler() decorator.

Custom error pages provide a better experience than the default browser error page.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.errorhandler(404)
def page_not_found(error):

    return "404 - Page Not Found", 404

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Handling 500 Errors",
      content: `
A 500 Internal Server Error occurs when an unexpected error happens while processing a request.

Instead of exposing technical details to users, create a custom error page.

This helps keep the application secure and user-friendly.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.errorhandler(500)
def internal_server_error(error):

    return "500 - Internal Server Error", 500

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Handling Multiple Errors",
      content: `
A Flask application can define separate handlers for different HTTP errors.

Each handler returns an appropriate response for the corresponding error.

Common error handlers include:

• 400
• 401
• 403
• 404
• 500

This makes it easier to provide customized responses for different situations.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.errorhandler(400)
def bad_request(error):
    return "400 - Bad Request", 400

@app.errorhandler(403)
def forbidden(error):
    return "403 - Forbidden", 403

@app.errorhandler(404)
def not_found(error):
    return "404 - Not Found", 404

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Using try and except",
      content: `
Python's try-except block is commonly used to handle exceptions inside Flask routes.

If an exception occurs, the application can return a meaningful response instead of crashing.

Exception handling is useful when working with:

• Databases
• Files
• External APIs
• User Input
• Calculations
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():

    try:
        result = 10 / 0

        return str(result)

    except ZeroDivisionError:
        return "Cannot divide by zero."

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Logging Errors",
      content: `
Logging records information about application events and errors.

Logs help developers identify problems and debug applications.

Instead of displaying detailed errors to users, applications should log them for later analysis.

Python's built-in logging module can be used to record errors.
      `,
      code: `import logging
from flask import Flask

app = Flask(__name__)

logging.basicConfig(level=logging.ERROR)

@app.route("/")
def home():

    try:
        result = 10 / 0

    except Exception as error:

        app.logger.error(error)

        return "An error occurred."

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Displaying Custom Error Pages",
      content: `
Instead of returning plain text, Flask applications usually display HTML templates for errors.

Common error pages include:

• 404.html
• 500.html
• 403.html

Custom templates provide a more professional appearance and allow users to navigate back to the application.
      `,
      code: `from flask import Flask, render_template

app = Flask(__name__)

@app.errorhandler(404)
def page_not_found(error):

    return render_template("404.html"), 404

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Debug Mode",
      content: `
Flask provides a debug mode that displays detailed error information during development.

Debug mode automatically reloads the application whenever code changes are detected.

Advantages:

• Faster Development
• Detailed Error Messages
• Automatic Reloading

Debug mode should only be enabled during development and never in production because it may expose sensitive information.
      `,
      code: `from flask import Flask

app = Flask(__name__)

if __name__ == "__main__":

    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Common Error Handling Practices",
      content: `
When handling errors in Flask, follow these practices:

• Validate all user input.
• Catch expected exceptions.
• Return meaningful HTTP status codes.
• Log unexpected errors.
• Display user-friendly error pages.
• Avoid exposing stack traces to users.
• Test error handlers regularly.
• Keep debug mode disabled in production.
      `,
    },

    {
      title: "Best Practices",
      content: `
Follow these best practices for error handling:

• Handle common HTTP errors.
• Use try-except blocks where appropriate.
• Create custom HTML error pages.
• Log errors instead of displaying technical details.
• Use proper HTTP status codes.
• Validate data before processing it.
• Monitor application logs.
• Disable debug mode in production.
• Test all error scenarios before deployment.
      `,
    },

        {
      title: "File Uploads",
      content: `
File uploading allows users to send files from their devices to a Flask application.

Uploaded files can be stored on the server, processed, or saved in cloud storage.

Common use cases include:

• Profile Pictures
• Documents
• PDF Files
• Images
• Videos
• Audio Files
• Assignment Submissions

Flask provides the request.files object to access uploaded files.

To upload files, HTML forms must use the POST method and the multipart/form-data encoding type.
      `,
    },

    {
      title: "Creating a File Upload Form",
      content: `
An HTML form is required to allow users to select and upload files.

The form must include:

• method="POST"
• enctype="multipart/form-data"

The enctype attribute ensures that file data is sent correctly to the server.
      `,
      code: `<!DOCTYPE html>
<html>

<body>

<form action="/upload"
      method="POST"
      enctype="multipart/form-data">

    <input
        type="file"
        name="file">

    <br><br>

    <button type="submit">
        Upload File
    </button>

</form>

</body>

</html>`,
      language: "html",
    },

    {
      title: "Accessing Uploaded Files",
      content: `
Uploaded files are available through the request.files object.

Each uploaded file can be accessed using its input field name.

After receiving the file, it can be saved or processed as needed.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/upload", methods=["POST"])
def upload():

    file = request.files["file"]

    return f"Uploaded File: {file.filename}"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Saving Uploaded Files",
      content: `
The save() method stores the uploaded file on the server.

Before saving files, create a folder (such as uploads) to organize uploaded content.

Always verify that the file exists before attempting to save it.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/upload", methods=["POST"])
def upload():

    file = request.files["file"]

    file.save("uploads/" + file.filename)

    return "File Uploaded Successfully"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Using secure_filename()",
      content: `
User-provided file names may contain unsafe characters or malicious paths.

Flask recommends using secure_filename() from the Werkzeug library to sanitize file names before saving them.

This helps prevent directory traversal attacks and invalid file names.
      `,
      code: `from flask import Flask, request
from werkzeug.utils import secure_filename

app = Flask(__name__)

@app.route("/upload", methods=["POST"])
def upload():

    file = request.files["file"]

    filename = secure_filename(file.filename)

    file.save("uploads/" + filename)

    return "File Saved Securely"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Allowing Specific File Types",
      content: `
For security reasons, applications should only accept approved file types.

Common allowed extensions include:

• png
• jpg
• jpeg
• gif
• pdf
• txt

Rejecting unsupported file types helps protect the application from malicious uploads.
      `,
      code: `ALLOWED_EXTENSIONS = {
    "png",
    "jpg",
    "jpeg",
    "gif",
    "pdf"
}

def allowed_file(filename):

    return "." in filename and \
filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS`,
      language: "python",
    },

    {
      title: "Validating Uploaded Files",
      content: `
Always validate uploaded files before saving them.

Validation should include:

• File Exists
• Valid File Name
• Allowed Extension
• Maximum File Size

Proper validation improves application security and prevents unwanted uploads.
      `,
      code: `from flask import Flask, request

app = Flask(__name__)

@app.route("/upload", methods=["POST"])
def upload():

    if "file" not in request.files:
        return "No File Selected"

    file = request.files["file"]

    if file.filename == "":
        return "No File Chosen"

    return "Validation Successful"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Configuring Upload Folder",
      content: `
Flask allows you to configure a default upload folder using the application configuration.

This keeps the upload path centralized and easier to manage.

The upload folder can then be reused throughout the application.
      `,
      code: `from flask import Flask

app = Flask(__name__)

app.config["UPLOAD_FOLDER"] = "uploads"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Common File Upload Workflow",
      content: `
A typical file upload process includes the following steps:

1. User selects a file.
2. Browser submits the form.
3. Flask receives the file.
4. Validate the uploaded file.
5. Secure the file name.
6. Save the file.
7. Return a success or error message.

Following this workflow helps build secure and reliable upload features.
      `,
    },

    {
      title: "Best Practices",
      content: `
Follow these best practices when implementing file uploads:

• Use multipart/form-data for upload forms.
• Validate every uploaded file.
• Use secure_filename() before saving files.
• Restrict allowed file extensions.
• Limit maximum file size.
• Store uploads outside sensitive directories when possible.
• Scan uploaded files if required.
• Never trust user-provided file names.
• Display meaningful upload success or error messages.
      `,
    },

        {
      title: "Flask Blueprints",
      content: `
As Flask applications grow, keeping all routes, views, and logic inside a single file becomes difficult.

Blueprints provide a way to organize an application into smaller, reusable modules.

Each Blueprint can contain its own:

• Routes
• Views
• Templates
• Static Files
• Forms
• Error Handlers

Using Blueprints improves code organization, readability, and maintainability.

Large Flask applications commonly separate features into different Blueprints such as authentication, users, products, and administration.
      `,
    },

    {
      title: "Why Use Blueprints?",
      content: `
Without Blueprints, every route is usually placed inside one file, making the project difficult to manage.

Blueprints solve this problem by dividing the application into logical modules.

Advantages of Blueprints:

• Better Code Organization
• Easier Maintenance
• Reusable Modules
• Team Collaboration
• Scalable Project Structure
• Cleaner Codebase

Blueprints are recommended for medium and large Flask applications.
      `,
    },

    {
      title: "Creating a Blueprint",
      content: `
A Blueprint is created using the Blueprint class.

Syntax:

Blueprint(name, import_name)

The first argument is the blueprint name, and the second argument is usually __name__.

Routes related to a specific feature are added to the Blueprint instead of the main Flask application.
      `,
      code: `from flask import Blueprint

user_bp = Blueprint(
    "users",
    __name__
)

@user_bp.route("/")
def home():
    return "Users Home Page"`,
      language: "python",
    },

    {
      title: "Project Structure with Blueprints",
      content: `
A common Flask project structure using Blueprints looks like this:

project/

├── app.py
├── users/
│   ├── __init__.py
│   └── routes.py
│
├── admin/
│   ├── __init__.py
│   └── routes.py
│
├── templates/
├── static/

Each module manages its own routes and functionality, making the project easier to understand.
      `,
    },

    {
      title: "Registering a Blueprint",
      content: `
After creating a Blueprint, it must be registered with the Flask application.

The register_blueprint() method makes all Blueprint routes available.

Without registration, Flask will not recognize the Blueprint.
      `,
      code: `from flask import Flask
from users.routes import user_bp

app = Flask(__name__)

app.register_blueprint(user_bp)

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Using URL Prefixes",
      content: `
Blueprints support URL prefixes.

A URL prefix automatically adds a common path before every route in the Blueprint.

Example:

Without Prefix:

/
 /profile

With Prefix:

/users/
/users/profile

URL prefixes help organize application routes.
      `,
      code: `app.register_blueprint(
    user_bp,
    url_prefix="/users"
)`,
      language: "python",
    },

    {
      title: "Blueprint Templates",
      content: `
Each Blueprint can have its own templates.

This allows different modules to maintain separate HTML files.

Example:

users/
├── templates/
│   └── users/
│       └── profile.html

Organizing templates by Blueprint reduces naming conflicts and improves maintainability.
      `,
    },

    {
      title: "Blueprint Static Files",
      content: `
Blueprints can also contain their own static files.

These files may include:

• CSS
• JavaScript
• Images
• Fonts

Keeping static resources inside each Blueprint helps organize feature-specific assets.
      `,
      code: `user_bp = Blueprint(
    "users",
    __name__,
    static_folder="static",
    template_folder="templates"
)`,
      language: "python",
    },

    {
      title: "Using Multiple Blueprints",
      content: `
Large applications usually contain several Blueprints.

Examples include:

• Authentication
• Users
• Products
• Orders
• Dashboard
• Administration
• API

Each Blueprint manages a separate feature, making development more modular and efficient.
      `,
      code: `app.register_blueprint(auth_bp)

app.register_blueprint(user_bp)

app.register_blueprint(admin_bp)

app.register_blueprint(product_bp)`,
      language: "python",
    },

    {
      title: "Best Practices",
      content: `
Follow these best practices when using Blueprints:

• Create separate Blueprints for major features.
• Use meaningful Blueprint names.
• Organize templates inside Blueprint folders.
• Keep routes related to the same feature together.
• Use URL prefixes for better organization.
• Avoid placing all routes in a single file.
• Reuse Blueprints when appropriate.
• Follow a consistent project structure.
      `,
    },

        {
      title: "Database Integration with Flask",
      content: `
Most web applications need to store and retrieve data.

A database allows applications to save information permanently instead of losing it when the server restarts.

Flask supports many databases, including:

• SQLite
• MySQL
• PostgreSQL
• MariaDB
• Oracle
• Microsoft SQL Server

Flask commonly uses SQLAlchemy, an Object Relational Mapper (ORM), to interact with databases using Python classes instead of writing SQL queries manually.

Database integration is essential for building applications such as:

• User Management Systems
• Blogs
• E-commerce Websites
• Learning Platforms
• Inventory Systems
• Banking Applications
      `,
    },

    {
      title: "Installing Flask-SQLAlchemy",
      content: `
Flask-SQLAlchemy is an extension that integrates SQLAlchemy with Flask.

Install it using pip before creating database applications.

Package to install:

• Flask-SQLAlchemy

After installation, import SQLAlchemy into your Flask project.
      `,
      code: `pip install flask-sqlalchemy`,
      language: "bash",
    },

    {
      title: "Configuring the Database",
      content: `
Before using a database, Flask must know which database to connect to.

This is done using configuration variables.

SQLite is commonly used for learning because it does not require a separate database server.

The SQLALCHEMY_DATABASE_URI configuration specifies the database connection string.
      `,
      code: `from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///learnwell.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Creating a Database Model",
      content: `
A model represents a table in the database.

Each attribute in the model represents a column.

SQLAlchemy automatically maps Python classes to database tables.

Models make it easier to work with database records using Python objects.
      `,
      code: `from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Student(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    name = db.Column(
        db.String(100),
        nullable=False
    )

    age = db.Column(
        db.Integer
    )`,
      language: "python",
    },

    {
      title: "Creating Database Tables",
      content: `
After defining models, the corresponding database tables must be created.

Flask uses the create_all() method to create all tables defined in the application.

This method only creates tables that do not already exist.
      `,
      code: `from app import app, db

with app.app_context():

    db.create_all()

print("Database Created Successfully")`,
      language: "python",
    },

    {
      title: "Inserting Data",
      content: `
To add a new record:

1. Create an object of the model.
2. Add it to the session.
3. Commit the session.

The commit() method permanently saves changes to the database.
      `,
      code: `student = Student(
    name="Harish",
    age=21
)

db.session.add(student)

db.session.commit()`,
      language: "python",
    },

    {
      title: "Retrieving Data",
      content: `
SQLAlchemy provides several methods for retrieving records.

Common methods include:

• all()
• first()
• get()
• filter_by()

Retrieved records are returned as Python objects.
      `,
      code: `students = Student.query.all()

for student in students:

    print(student.name)`,
      language: "python",
    },

    {
      title: "Updating Records",
      content: `
Updating a record involves retrieving the object, modifying its values, and committing the changes.

SQLAlchemy automatically tracks changes made to objects.
      `,
      code: `student = Student.query.get(1)

student.age = 22

db.session.commit()`,
      language: "python",
    },

    {
      title: "Deleting Records",
      content: `
Records can be removed from the database using the delete() method.

After deleting an object, commit() must be called to save the changes permanently.
      `,
      code: `student = Student.query.get(1)

db.session.delete(student)

db.session.commit()`,
      language: "python",
    },

    {
      title: "CRUD Operations",
      content: `
CRUD stands for:

• Create
• Read
• Update
• Delete

These four operations form the foundation of most database-driven applications.

Examples include:

• Creating user accounts
• Reading product information
• Updating profile details
• Deleting old records

Mastering CRUD operations is essential for backend development.
      `,
    },

    {
      title: "Best Practices",
      content: `
Follow these best practices while working with databases:

• Use SQLAlchemy ORM for better readability.
• Keep models organized in separate files.
• Validate data before saving it.
• Handle database exceptions gracefully.
• Commit transactions only after successful operations.
• Use meaningful model and column names.
• Avoid unnecessary database queries.
• Back up important data regularly.
      `,
    },

        {
      title: "Database Migrations with Flask-Migrate",
      content: `
As a Flask application grows, database structures often change.

For example, you may need to:

• Add a new column
• Remove a column
• Rename a table
• Modify a data type
• Create new tables

Recreating the database every time is not practical because existing data would be lost.

Flask-Migrate helps manage database schema changes safely using migration files.

It works together with SQLAlchemy and Alembic to track database changes and apply them without losing existing data.
      `,
    },

    {
      title: "Installing Flask-Migrate",
      content: `
Flask-Migrate is an extension that integrates Alembic with Flask.

Install it using pip before working with migrations.

Required packages:

• Flask-Migrate
• Alembic (installed automatically)

After installation, import Migrate into your application.
      `,
      code: `pip install flask-migrate`,
      language: "bash",
    },

    {
      title: "Configuring Flask-Migrate",
      content: `
To use Flask-Migrate, create a Migrate object by passing the Flask application and SQLAlchemy database instance.

This enables migration support for your project.
      `,
      code: `from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///learnwell.db"

db = SQLAlchemy(app)

migrate = Migrate(app, db)

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Initializing Migrations",
      content: `
Before creating migration files, initialize the migration environment.

This creates a migrations folder that stores migration scripts and configuration files.

Run the following command only once for a project.
      `,
      code: `flask db init`,
      language: "bash",
    },

    {
      title: "Creating a Migration",
      content: `
Whenever models change, generate a new migration file.

Flask-Migrate compares the current models with the existing database schema and creates a migration script.

Provide a meaningful message describing the changes.
      `,
      code: `flask db migrate -m "Create student table"`,
      language: "bash",
    },

    {
      title: "Applying Migrations",
      content: `
Migration files do not modify the database until they are applied.

Use the upgrade command to execute pending migrations.

This updates the database schema while preserving existing data.
      `,
      code: `flask db upgrade`,
      language: "bash",
    },

    {
      title: "Downgrading Migrations",
      content: `
If a migration introduces problems, it can be reversed using the downgrade command.

Downgrading restores the database to a previous migration version.

This is useful during testing and development.
      `,
      code: `flask db downgrade`,
      language: "bash",
    },

    {
      title: "Migration Workflow",
      content: `
A typical migration workflow consists of the following steps:

1. Modify the SQLAlchemy model.
2. Generate a migration file.
3. Review the generated migration.
4. Apply the migration.
5. Verify the database changes.

Following this workflow ensures that database changes are applied consistently across different environments.
      `,
    },

    {
      title: "Example: Adding a New Column",
      content: `
Suppose the Student model needs an email field.

After updating the model, create and apply a migration.

The database schema will be updated without deleting existing records.
      `,
      code: `class Student(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    name = db.Column(
        db.String(100),
        nullable=False
    )

    age = db.Column(
        db.Integer
    )

    email = db.Column(
        db.String(120),
        unique=True
    )`,
      language: "python",
    },

    {
      title: "Common Migration Commands",
      content: `
Flask-Migrate provides several useful commands.

Common commands include:

• flask db init
• flask db migrate
• flask db upgrade
• flask db downgrade
• flask db current
• flask db history
• flask db stamp

These commands help manage and inspect database schema versions.
      `,
      code: `flask db current

flask db history`,
      language: "bash",
    },

    {
      title: "Best Practices",
      content: `
Follow these best practices when working with database migrations:

• Initialize migrations only once per project.
• Review generated migration files before applying them.
• Write meaningful migration messages.
• Back up important databases before upgrading.
• Commit migration files to version control.
• Test migrations in a development environment first.
• Keep models and migrations synchronized.
• Avoid manually editing the database schema whenever possible.
      `,
    },

      {
      title: "Building RESTful APIs with Flask",
      content: `
A RESTful API (Representational State Transfer Application Programming Interface) allows different applications to communicate over HTTP.

Instead of returning HTML pages, REST APIs usually exchange data in JSON format.

REST APIs are widely used by:

• Web Applications
• Mobile Applications
• Desktop Applications
• IoT Devices
• Third-Party Services

Flask is an excellent framework for building lightweight and powerful REST APIs.

A RESTful API is built around resources such as users, products, courses, or orders. Each resource is accessed through a unique URL and manipulated using standard HTTP methods.
      `,
    },

    {
      title: "REST Principles",
      content: `
REST follows a set of architectural principles to ensure consistency and scalability.

Key principles include:

• Client-Server Architecture
• Stateless Communication
• Resource-Based URLs
• Standard HTTP Methods
• JSON Data Exchange
• Uniform Interface

Following REST principles makes APIs easier to understand and integrate with different applications.
      `,
    },

    {
      title: "Creating Your First API",
      content: `
A Flask route can act as an API endpoint by returning JSON instead of HTML.

The jsonify() function converts Python objects into JSON responses.

API endpoints are usually prefixed with /api.
      `,
      code: `from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api")
def api():

    return jsonify({
        "message": "Welcome to LearnWell API"
    })

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Returning JSON Data",
      content: `
JSON is the standard format used by REST APIs.

It represents data as key-value pairs and is easy for both humans and machines to read.

Flask automatically sets the appropriate Content-Type header when using jsonify().
      `,
      code: `from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/student")
def student():

    return jsonify({
        "id": 1,
        "name": "Harish",
        "course": "Flask"
    })

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "Receiving JSON Requests",
      content: `
Clients can send JSON data to the server using POST, PUT, or PATCH requests.

Flask provides request.get_json() to read the JSON body of a request.

The received data can then be validated and processed.
      `,
      code: `from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/api/student", methods=["POST"])
def create_student():

    data = request.get_json()

    return jsonify({
        "received": data
    })

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "CRUD API Example",
      content: `
Most REST APIs implement CRUD operations.

CRUD stands for:

• Create
• Read
• Update
• Delete

Each operation is mapped to an HTTP method.
      `,
      code: `from flask import Flask

app = Flask(__name__)

@app.route("/api/students", methods=["GET"])
def get_students():
    return "Read Students"

@app.route("/api/students", methods=["POST"])
def add_student():
    return "Create Student"

@app.route("/api/students/<int:id>", methods=["PUT"])
def update_student(id):
    return f"Update Student {id}"

@app.route("/api/students/<int:id>", methods=["DELETE"])
def delete_student(id):
    return f"Delete Student {id}"

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "HTTP Status Codes in APIs",
      content: `
REST APIs should return meaningful HTTP status codes.

Common status codes include:

• 200 OK
• 201 Created
• 204 No Content
• 400 Bad Request
• 401 Unauthorized
• 403 Forbidden
• 404 Not Found
• 500 Internal Server Error

Returning appropriate status codes helps clients understand the result of their requests.
      `,
      code: `from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/create")
def create():

    return jsonify({
        "message": "Created Successfully"
    }), 201

if __name__ == "__main__":
    app.run(debug=True)`,
      language: "python",
    },

    {
      title: "REST API URL Design",
      content: `
Good API URLs should represent resources rather than actions.

Examples:

• GET /api/students
• GET /api/students/1
• POST /api/students
• PUT /api/students/1
• DELETE /api/students/1

Use nouns for resource names and let the HTTP method describe the action.
      `,
    },

    {
      title: "Testing REST APIs",
      content: `
REST APIs can be tested using various tools.

Popular tools include:

• Postman
• Insomnia
• Thunder Client (VS Code)
• cURL

Testing APIs ensures that endpoints return the expected data and status codes.
      `,
    },

    {
      title: "Best Practices",
      content: `
Follow these best practices when building RESTful APIs:

• Use meaningful endpoint names.
• Return JSON responses consistently.
• Validate all incoming data.
• Use proper HTTP methods.
• Return appropriate status codes.
• Handle errors gracefully.
• Keep APIs stateless.
• Version APIs when necessary (for example, /api/v1).
• Document API endpoints for developers.
      `,
    },

   {
  title: "Authentication in Flask",
  content: `
Authentication is the process of verifying the identity of a user before allowing access to an application.

Authentication ensures that only authorized users can access protected resources.

Common authentication features include:

• User Registration
• User Login
• User Logout
• Password Hashing
• Session Management
• Protected Routes
• Remember Me
• Role-Based Access

Authentication is one of the most important parts of modern web applications because it protects sensitive data and user accounts.
  `,
},

{
  title: "Authentication Workflow",
  content: `
A typical authentication process follows these steps:

1. User registers an account.
2. User provides login credentials.
3. Flask verifies the credentials.
4. If valid, the user is authenticated.
5. A session or token is created.
6. The user gains access to protected pages.
7. The user logs out, ending the session.

This workflow helps maintain secure access throughout the application.
  `,
},

{
  title: "User Registration",
  content: `
Registration allows new users to create an account.

Typical registration information includes:

• Username
• Email Address
• Password
• Confirm Password

Before storing user information:

• Validate all fields.
• Check for duplicate usernames or emails.
• Hash the password.
• Save the user in the database.

Never store plain-text passwords.
  `,
},

{
  title: "Password Hashing",
  content: `
Passwords should always be hashed before being stored in the database.

Hashing converts a password into an unreadable string.

Even if the database is compromised, hashed passwords are much more difficult to recover.

Flask commonly uses Werkzeug's password hashing utilities.

Functions:

• generate_password_hash()
• check_password_hash()
  `,
  code: `from werkzeug.security import (
    generate_password_hash,
    check_password_hash
)

password = "mypassword"

hashed_password = generate_password_hash(password)

print(hashed_password)

print(check_password_hash(
    hashed_password,
    "mypassword"
))`,
  language: "python",
},

{
  title: "Creating a Login Route",
  content: `
During login, the application receives the user's credentials and verifies them against the stored data.

If authentication succeeds, the user is logged in.

Otherwise, an error message is returned.

Passwords should always be verified using the hash instead of comparing plain text.
  `,
  code: `from flask import Flask, request
from werkzeug.security import check_password_hash

app = Flask(__name__)

stored_password = "hashed_password"

@app.route("/login", methods=["POST"])
def login():

    password = request.form["password"]

    if check_password_hash(
        stored_password,
        password
    ):
        return "Login Successful"

    return "Invalid Credentials"

if __name__ == "__main__":
    app.run(debug=True)`,
  language: "python",
},

{
  title: "Session-Based Authentication",
  content: `
After successful login, user information can be stored in a session.

The session identifies authenticated users across multiple requests.

When the user logs out, the session is removed.

Session-based authentication is commonly used in traditional Flask web applications.
  `,
  code: `from flask import Flask, session

app = Flask(__name__)

app.secret_key = "my_secret_key"

@app.route("/login")
def login():

    session["user"] = "Harish"

    return "Logged In"

if __name__ == "__main__":
    app.run(debug=True)`,
  language: "python",
},

{
  title: "Protecting Routes",
  content: `
Some pages should only be accessible to authenticated users.

Before displaying a protected page, check whether the user exists in the session.

If not authenticated, redirect the user to the login page.

Examples of protected pages:

• Dashboard
• Profile
• Settings
• Admin Panel
• Payment History
  `,
  code: `from flask import Flask, session, redirect, url_for

app = Flask(__name__)

app.secret_key = "my_secret_key"

@app.route("/dashboard")
def dashboard():

    if "user" not in session:
        return redirect(url_for("login"))

    return "Welcome to Dashboard"

@app.route("/login")
def login():

    session["user"] = "Harish"

    return "Logged In"

if __name__ == "__main__":
    app.run(debug=True)`,
  language: "python",
},

{
  title: "Logging Out",
  content: `
Logging out removes the user's authentication information from the session.

This prevents unauthorized access after the user leaves the application.

Always clear session data during logout.
  `,
  code: `from flask import Flask, session

app = Flask(__name__)

app.secret_key = "my_secret_key"

@app.route("/logout")
def logout():

    session.pop("user", None)

    return "Logged Out"

if __name__ == "__main__":
    app.run(debug=True)`,
  language: "python",
},

{
  title: "Authentication Best Practices",
  content: `
Follow these best practices when implementing authentication:

• Hash every password before storing it.
• Never store plain-text passwords.
• Use strong secret keys.
• Validate all user input.
• Protect sensitive routes.
• Use HTTPS in production.
• Expire inactive sessions.
• Limit failed login attempts.
• Use secure cookies.
• Keep authentication logic separate from business logic.
  `,
},
{
  title: "Popular Flask Extensions",
  content: `
Flask has a minimal core, but its functionality can be expanded using extensions.

Extensions are reusable packages that add features without requiring developers to build everything from scratch.

They help speed up development and follow best practices.

Popular Flask extensions include:

• Flask-Login
• Flask-SQLAlchemy
• Flask-Migrate
• Flask-WTF
• Flask-Mail
• Flask-CORS
• Flask-JWT-Extended
• Flask-Bcrypt
• Flask-Caching
• Flask-Limiter

Using the right extensions makes Flask applications more secure, scalable, and easier to maintain.
  `,
},

{
  title: "Flask-Login",
  content: `
Flask-Login simplifies user authentication and session management.

It provides features such as:

• User Login
• User Logout
• Remember Me
• Login Required Decorator
• Current User Management
• Session Protection

Flask-Login does not store user information in the database. It only manages authenticated user sessions.
  `,
  code: `from flask_login import LoginManager

login_manager = LoginManager()

login_manager.init_app(app)

login_manager.login_view = "login"`,
  language: "python",
},

{
  title: "Flask-WTF",
  content: `
Flask-WTF simplifies form handling and validation.

It integrates WTForms with Flask and provides protection against Cross-Site Request Forgery (CSRF) attacks.

Features include:

• Form Validation
• CSRF Protection
• Built-in Form Fields
• Custom Validators
• Error Handling

Using Flask-WTF reduces the amount of manual form validation code.
  `,
  code: `pip install flask-wtf`,
  language: "bash",
},

{
  title: "Flask-Mail",
  content: `
Flask-Mail allows applications to send emails.

Common use cases include:

• Email Verification
• Password Reset
• Welcome Emails
• Order Confirmation
• Notifications

SMTP settings must be configured before sending emails.
  `,
  code: `from flask_mail import Mail

mail = Mail(app)`,
  language: "python",
},

{
  title: "Flask-CORS",
  content: `
CORS (Cross-Origin Resource Sharing) allows frontend applications hosted on different domains or ports to access Flask APIs.

This is especially useful for React, Angular, or Vue applications communicating with a Flask backend.

Without proper CORS configuration, browsers block cross-origin requests.
  `,
  code: `from flask_cors import CORS

app = Flask(__name__)

CORS(app)`,
  language: "python",
},

{
  title: "Flask-JWT-Extended",
  content: `
Flask-JWT-Extended provides JSON Web Token (JWT) authentication.

JWT authentication is commonly used in REST APIs.

Features include:

• Access Tokens
• Refresh Tokens
• Protected API Routes
• Token Verification
• User Identity Management

JWT is widely used for mobile applications and single-page applications (SPAs).
  `,
  code: `from flask_jwt_extended import JWTManager

app.config["JWT_SECRET_KEY"] = "secret"

jwt = JWTManager(app)`,
  language: "python",
},

{
  title: "Flask-Bcrypt",
  content: `
Flask-Bcrypt provides strong password hashing using the bcrypt algorithm.

Compared to basic hashing algorithms, bcrypt is designed specifically for password security.

Benefits include:

• Secure Password Hashing
• Salt Generation
• Password Verification
• Protection Against Brute Force Attacks
  `,
  code: `from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)`,
  language: "python",
},

{
  title: "Flask-Caching",
  content: `
Flask-Caching improves application performance by storing frequently accessed data.

Instead of repeatedly performing expensive operations, cached data can be returned immediately.

Common caching targets include:

• Database Queries
• API Responses
• Reports
• Dashboard Statistics

Caching reduces server load and improves response time.
  `,
  code: `from flask_caching import Cache

cache = Cache(app)`,
  language: "python",
},

{
  title: "Flask-Limiter",
  content: `
Flask-Limiter protects applications against abuse by limiting the number of requests a client can make.

Examples:

• 100 requests per hour
• 10 login attempts per minute
• 1000 API requests per day

Rate limiting helps prevent spam and denial-of-service attacks.
  `,
  code: `from flask_limiter import Limiter

limiter = Limiter(
    key_func=lambda: "user"
)`,
  language: "python",
},

{
  title: "Choosing the Right Extension",
  content: `
Different projects require different Flask extensions.

Examples:

Authentication:
• Flask-Login
• Flask-JWT-Extended

Database:
• Flask-SQLAlchemy
• Flask-Migrate

Forms:
• Flask-WTF

Security:
• Flask-Bcrypt
• Flask-Limiter

API Development:
• Flask-CORS
• Flask-JWT-Extended

Performance:
• Flask-Caching

Choose extensions based on your application's requirements rather than installing unnecessary packages.
  `,
},

{
  title: "Best Practices",
  content: `
Follow these best practices when using Flask extensions:

• Install only the extensions your project needs.
• Read the official documentation before implementation.
• Keep extensions updated.
• Configure extensions centrally.
• Store secrets in environment variables.
• Combine extensions with proper security practices.
• Avoid conflicting extensions.
• Test extension configurations thoroughly.
  `,
},
{
  title: "Deploying Flask Applications",
  content: `
After developing a Flask application, the next step is to deploy it so users can access it over the internet.

Deployment is the process of moving an application from a development environment to a production environment.

A production environment is designed to be secure, reliable, and scalable.

Common deployment platforms include:

• Render
• Railway
• Heroku
• PythonAnywhere
• DigitalOcean
• AWS
• Microsoft Azure
• Google Cloud Platform (GCP)

A production deployment is different from development because it focuses on performance, security, and availability.
  `,
},

{
  title: "Development vs Production",
  content: `
Development and production environments serve different purposes.

Development Environment:

• Used while building the application.
• Debug mode is enabled.
• Automatic code reloading.
• Detailed error messages.

Production Environment:

• Used by real users.
• Debug mode is disabled.
• Optimized for performance.
• Secure configuration.
• Error logging enabled.

Always deploy applications in production mode.
  `,
},

{
  title: "Using Environment Variables",
  content: `
Sensitive information should never be written directly into source code.

Instead, store configuration values in environment variables.

Examples include:

• Secret Keys
• Database URLs
• API Keys
• Email Credentials
• JWT Secrets

Environment variables improve security and make applications easier to configure across different environments.
  `,
  code: `import os

SECRET_KEY = os.getenv("SECRET_KEY")

DATABASE_URL = os.getenv("DATABASE_URL")

API_KEY = os.getenv("API_KEY")`,
  language: "python",
},

{
  title: "Using Gunicorn",
  content: `
The built-in Flask development server is not intended for production.

Gunicorn is a production-ready WSGI server commonly used to deploy Flask applications.

Benefits of Gunicorn:

• High Performance
• Multiple Worker Processes
• Better Stability
• Production Ready

Gunicorn is widely used on Linux servers and cloud platforms.
  `,
  code: `pip install gunicorn`,
  language: "bash",
},

{
  title: "Running a Flask App with Gunicorn",
  content: `
After installing Gunicorn, start the application using the following command.

Syntax:

gunicorn module_name:app

Here, module_name is the Python file containing the Flask application (without the .py extension), and app is the Flask application object.
  `,
  code: `gunicorn app:app`,
  language: "bash",
},

{
  title: "Using a Requirements File",
  content: `
A requirements.txt file lists all Python packages required by the project.

Deployment platforms automatically install these dependencies.

Generate the file using:

pip freeze > requirements.txt

Keeping this file updated ensures consistent deployments.
  `,
  code: `pip freeze > requirements.txt`,
  language: "bash",
},

{
  title: "Creating a Procfile",
  content: `
Some hosting platforms use a Procfile to determine how the application should start.

A Procfile contains the command used to launch the web application.

Example:

web: gunicorn app:app

The Procfile should not have a file extension.
  `,
  code: `web: gunicorn app:app`,
  language: "text",
},

{
  title: "Deployment Checklist",
  content: `
Before deploying your Flask application, verify the following:

• Debug mode is disabled.
• Environment variables are configured.
• Requirements file is updated.
• Secret keys are secured.
• Database connection is working.
• Static files are configured.
• Error logging is enabled.
• Application has been tested.

Completing this checklist reduces deployment issues.
  `,
},

{
  title: "Common Deployment Platforms",
  content: `
Several cloud platforms support Flask deployment.

Popular choices include:

• Render
• Railway
• PythonAnywhere
• Heroku
• AWS Elastic Beanstalk
• Google Cloud Run
• Microsoft Azure App Service
• DigitalOcean App Platform

Each platform provides tools for automatic deployment, scaling, and monitoring.
  `,
},

{
  title: "Best Practices",
  content: `
Follow these best practices for deploying Flask applications:

• Never enable debug mode in production.
• Store secrets in environment variables.
• Use Gunicorn or another production WSGI server.
• Keep dependencies updated.
• Monitor application logs.
• Enable HTTPS.
• Regularly back up databases.
• Test deployments before releasing updates.
• Use version control for your source code.
• Automate deployments using CI/CD pipelines when possible.
  `,
},



{
  title: "Flask Projects and Next Steps",
  content: `
Congratulations on completing the Flask course!

The best way to master Flask is by building real-world projects.

Projects help you:

• Apply theoretical knowledge.
• Improve problem-solving skills.
• Learn project structure.
• Practice debugging.
• Build a strong portfolio.
• Prepare for technical interviews.

Start with small projects and gradually move to larger applications.
  `,
},

{
  title: "Beginner Projects",
  content: `
These projects are ideal for beginners who have just completed the Flask basics.

Project Ideas:

• Calculator
• To-Do List
• Notes App
• Student Management System
• Contact Form
• Personal Portfolio Backend
• Blog Website
• URL Shortener
• Weather Application
• Quiz Application

These projects help reinforce Flask fundamentals such as routing, templates, forms, and databases.
  `,
},

{
  title: "Intermediate Projects",
  content: `
Once you're comfortable with Flask, try building more advanced applications.

Examples include:

• Authentication System
• Expense Tracker
• Library Management System
• Online Examination Portal
• Learning Management System
• Employee Management System
• Food Ordering Website
• Chat Application
• Inventory Management System
• File Sharing Platform

These projects introduce authentication, REST APIs, file uploads, and database relationships.
  `,
},

{
  title: "Advanced Projects",
  content: `
Advanced projects combine multiple Flask concepts and external services.

Examples include:

• E-Commerce Website
• Social Media Platform
• Video Streaming Backend
• Online Banking System
• Hospital Management System
• Hotel Booking System
• AI Chatbot Backend
• Online Code Compiler
• Real-Time Chat Application
• Online Learning Platform

These projects improve architecture, scalability, and backend development skills.
  `,
},

{
  title: "Common Flask Interview Questions",
  content: `
Frequently asked interview questions include:

• What is Flask?
• Why is Flask called a micro framework?
• What is WSGI?
• Explain Routing in Flask.
• What are Blueprints?
• What are Jinja Templates?
• Explain Sessions and Cookies.
• What is SQLAlchemy?
• What is Flask-Migrate?
• Explain Flask Authentication.
• What are REST APIs?
• Difference between GET and POST?
• What is jsonify()?
• What is CORS?
• What is JWT?
• How do you deploy a Flask application?

Preparing these questions will strengthen your interview readiness.
  `,
},

{
  title: "Flask Best Practices",
  content: `
When building production applications:

• Follow a modular project structure.
• Use Blueprints for large projects.
• Store secrets in environment variables.
• Validate all user input.
• Hash passwords securely.
• Use SQLAlchemy ORM.
• Implement proper error handling.
• Write reusable code.
• Keep dependencies updated.
• Write unit tests.
• Use version control with Git.
• Document your APIs.

Following these practices results in secure, maintainable, and scalable applications.
  `,
},

{
  title: "Learning Roadmap After Flask",
  content: `
After mastering Flask, continue learning the following technologies:

Backend:

• FastAPI
• Django
• GraphQL
• Celery
• Redis

Database:

• PostgreSQL
• MySQL
• MongoDB

DevOps:

• Docker
• Nginx
• Gunicorn
• GitHub Actions
• Linux

Cloud:

• AWS
• Google Cloud
• Microsoft Azure

Frontend:

• HTML
• CSS
• JavaScript
• React
• TypeScript

Learning these technologies will prepare you for full-stack development.
  `,
},

{
  title: "Career Opportunities",
  content: `
Knowledge of Flask opens the door to many software development roles.

Common job roles include:

• Python Developer
• Backend Developer
• Full Stack Developer
• API Developer
• Web Developer
• Software Engineer
• AI Backend Developer
• Data Engineering Developer
• DevOps Engineer
• Cloud Developer

Flask is widely used in startups, enterprise applications, and AI-powered systems.
  `,
},

{
  title: "Practice Recommendations",
  content: `
To become confident with Flask:

• Build at least 10 real-world projects.
• Solve backend development challenges.
• Read Flask documentation.
• Contribute to open-source projects.
• Deploy your applications online.
• Learn API testing using Postman.
• Practice SQL regularly.
• Build portfolio projects.
• Participate in coding competitions.
• Continue improving your Python skills.

Consistent practice is the key to becoming a proficient Flask developer.
  `,
},

{
  title: "Course Completion",
  content: `
🎉 Congratulations!

You have successfully completed the LearnWell Flask course.

You learned:

• Flask Fundamentals
• Routing
• Templates
• Static Files
• Forms
• Request & Response Handling
• Redirects
• Sessions and Cookies
• Flash Messages
• Error Handling
• File Uploads
• Blueprints
• Database Integration
• Flask-Migrate
• REST APIs
• Authentication
• Flask Extensions
• Deployment
• Project Development

You now have a strong foundation to build modern, secure, and scalable Flask applications.

Keep building projects, keep learning, and continue improving your development skills.

Happy Coding! 🚀
  `,
},
  ],
};