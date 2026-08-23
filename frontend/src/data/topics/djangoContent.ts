export const djangoContent = {
  title: "Django Framework",
  description:
    "Learn Django from beginner to advanced with projects, database integration, authentication, APIs, deployment, and best practices.",

  sections: [

    {
      title: "Introduction to Django",
      content: `
Django is a high-level Python web framework used for building secure, scalable, and maintainable web applications.

It follows the DRY (Don't Repeat Yourself) principle and encourages rapid development.

Django was originally developed by the Lawrence Journal-World newspaper and is now maintained by the Django Software Foundation.
      `,
    },

    {
      title: "What is Django?",
      content: `
Django is an open-source web framework written in Python.

It provides built-in tools for:

• User Authentication

• Database Management

• URL Routing

• Template Rendering

• Form Handling

• Security

• Admin Dashboard

Developers can build powerful web applications with minimal code.
      `,
    },

    {
      title: "Features of Django",
      content: `
Major features of Django:

• Fast Development

• MVT Architecture

• ORM (Object Relational Mapper)

• Built-in Admin Panel

• Authentication System

• URL Routing

• Form Handling

• Middleware

• Security Protection

• Scalability
      `,
    },

    {
      title: "Advantages of Django",
      content: `
Advantages:

✓ Easy to Learn

✓ Rapid Development

✓ Secure by Default

✓ Reusable Components

✓ Excellent Documentation

✓ Large Community

✓ Scalable

✓ Cross Platform
      `,
    },

    {
      title: "Applications of Django",
      content: `
Django is widely used for:

• E-Commerce Websites

• Social Media Platforms

• Content Management Systems

• REST APIs

• Educational Platforms

• Banking Systems

• Healthcare Applications

• Machine Learning Dashboards
      `,
    },

    {
      title: "Django Architecture (MVT)",
      content: `
Django follows the MVT architecture.

M → Model

Stores and manages data.

V → View

Contains business logic.

T → Template

Displays data to users.

The framework automatically connects these components together.
      `,
    },

    {
      title: "Installing Django",
      content: `
Install Django using pip.

Ensure Python is installed before running the command.
      `,
      code: `pip install django`,
      language: "bash",
      output: `
Successfully installed django
      `,
      tip: "It is recommended to install Django inside a virtual environment.",
    },

    {
      title: "Checking Django Version",
      content: `
Verify that Django has been installed successfully.
      `,
      code: `django-admin --version`,
      language: "bash",
      output: `
5.x.x
      `,
    },

    {
      title: "Creating a Django Project",
      content: `
Create a new Django project using the django-admin command.
      `,
      code: `django-admin startproject myproject`,
      language: "bash",
      output: `
Project created successfully
      `,
    },

    {
      title: "Project Structure",
      content: `
A Django project contains several important files.

manage.py

Used to execute Django commands.

settings.py

Contains project configuration.

urls.py

Defines URL routes.

wsgi.py

Used for deployment.

asgi.py

Supports asynchronous applications.
      `,
    },

    {
      title: "Running the Development Server",
      content: `
Run the local development server.
      `,
      code: `python manage.py runserver`,
      language: "bash",
      output: `
Starting development server at

http://127.0.0.1:8000/
      `,
    },

    {
      title: "Creating an Application",
      content: `
A Django project can contain multiple applications.

Create a new app using:
      `,
      code: `python manage.py startapp blog`,
      language: "bash",
      output: `
App created successfully
      `,
    },

    {
      title: "Registering an Application",
      content: `
After creating an app, add it to INSTALLED_APPS in settings.py.

This allows Django to recognize and use the application.
      `,
      code: `INSTALLED_APPS = [
    ...
    'blog',
]`,
      language: "python",
      output: "Application registered",
    },

    {
      title: "First Django View",
      content: `
Views contain the business logic of a Django application.

A view receives a request and returns a response.
      `,
      code: `from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to Django!")`,
      language: "python",
      output: `
Welcome to Django!
      `,
    },

    {
      title: "URL Routing",
      content: `
URL routing connects browser URLs to views.

Each URL pattern maps to a specific view function.
      `,
      code: `from django.urls import path
from . import views

urlpatterns = [
    path("", views.home),
]`,
      language: "python",
      output: "Home page route configured",
    },

    {
      title: "Complete Request Flow",
      content: `
Request Flow:

Browser

↓

urls.py

↓

View

↓

Model (if required)

↓

Template

↓

Browser Response

This is the standard request lifecycle in Django.
      `,
    },
    {
      title: "Introduction to Models",
      content: `
Models define the structure of your database.

Each model represents a database table.

Each attribute inside the model becomes a column in the table.

Django automatically converts models into database tables using migrations.
      `,
    },


    {
      title: "Creating Your First Model",
      content: `
Models are created inside the models.py file of an application.
      `,
      code: `from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()

    def __str__(self):
        return self.name`,
      language: "python",
      output: "Student model created",
      tip: "Always define the __str__() method to display meaningful object names in the Django Admin panel.",
    },


    {
      title: "Common Model Fields",
      content: `
Django provides many built-in field types.

Common fields:

• CharField

• TextField

• IntegerField

• FloatField

• BooleanField

• DateField

• DateTimeField

• EmailField

• ImageField

• FileField
      `,
    },


    {
      title: "CharField",
      content: `
CharField stores short text values.

It requires the max_length attribute.
      `,
      code: `title = models.CharField(max_length=200)`,
      language: "python",
      output: "Character field created",
    },


    {
      title: "TextField",
      content: `
TextField stores long text such as articles, descriptions, or comments.

Unlike CharField, it does not require max_length.
      `,
      code: `description = models.TextField()`,
      language: "python",
      output: "Text field created",
    },


    {
      title: "IntegerField",
      content: `
IntegerField stores whole numbers.

Examples:

• Age

• Quantity

• Marks

• Stock
      `,
      code: `age = models.IntegerField()`,
      language: "python",
      output: "Integer field created",
    },


    {
      title: "BooleanField",
      content: `
BooleanField stores only two values.

• True

• False
      `,
      code: `is_active = models.BooleanField(default=True)`,
      language: "python",
      output: "Boolean field created",
    },


    {
      title: "DateField and DateTimeField",
      content: `
DateField stores only the date.

DateTimeField stores both date and time.
      `,
      code: `dob = models.DateField()

created_at = models.DateTimeField(auto_now_add=True)`,
      language: "python",
      output: "Date fields created",
    },


    {
      title: "Running Migrations",
      content: `
After creating or modifying models, generate migration files.

Migration files describe changes to the database schema.
      `,
      code: `python manage.py makemigrations`,
      language: "bash",
      output: `
Migrations for 'blog':
  blog/migrations/0001_initial.py
      `,
    },


    {
      title: "Applying Migrations",
      content: `
Apply migrations to create or update database tables.
      `,
      code: `python manage.py migrate`,
      language: "bash",
      output: `
Operations to perform...
Applying migrations... OK
      `,
    },


    {
      title: "Django ORM",
      content: `
ORM stands for Object Relational Mapper.

It allows developers to interact with the database using Python code instead of writing SQL queries directly.

Benefits:

• Easy to use

• Database independent

• Secure

• Readable
      `,
    },


    {
      title: "Creating Records",
      content: `
Create a new object using the ORM.
      `,
      code: `student = Student(
    name="Harish",
    age=21
)

student.save()`,
      language: "python",
      output: "Record inserted successfully",
    },


    {
      title: "Retrieving All Records",
      content: `
Retrieve every object from a model.
      `,
      code: `students = Student.objects.all()

for student in students:
    print(student.name)`,
      language: "python",
      output: `
Harish
Rahul
Priya
      `,
    },


    {
      title: "Filtering Records",
      content: `
Use filter() to retrieve records matching a condition.
      `,
      code: `students = Student.objects.filter(age=21)`,
      language: "python",
      output: "Filtered records returned",
    },


    {
      title: "Getting a Single Record",
      content: `
Use get() to retrieve exactly one object.

If no object or multiple objects exist, Django raises an exception.
      `,
      code: `student = Student.objects.get(id=1)

print(student.name)`,
      language: "python",
      output: `
Harish
      `,
    },


    {
      title: "Updating Records",
      content: `
Retrieve an object, modify its fields, and save it.
      `,
      code: `student = Student.objects.get(id=1)

student.age = 22

student.save()`,
      language: "python",
      output: "Record updated",
    },


    {
      title: "Deleting Records",
      content: `
Delete an object permanently from the database.
      `,
      code: `student = Student.objects.get(id=1)

student.delete()`,
      language: "python",
      output: "Record deleted",
    },


    {
      title: "Ordering Records",
      content: `
Sort query results using order_by().
      `,
      code: `students = Student.objects.order_by("name")`,
      language: "python",
      output: "Records sorted alphabetically",
    },


    {
      title: "Counting Records",
      content: `
Use count() to determine how many objects exist.
      `,
      code: `total = Student.objects.count()

print(total)`,
      language: "python",
      output: `
15
      `,
    },


    {
      title: "Model Relationships",
      content: `
Relationships connect multiple database tables.

Django supports:

• ForeignKey

• OneToOneField

• ManyToManyField
      `,
    },


    {
      title: "ForeignKey Relationship",
      content: `
A ForeignKey creates a one-to-many relationship.

Example:

One Author can write many Books.
      `,
      code: `class Author(models.Model):
    name = models.CharField(max_length=100)

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(
        Author,
        on_delete=models.CASCADE
    )`,
      language: "python",
      output: "One-to-many relationship created",
    },


    {
      title: "OneToOneField Relationship",
      content: `
OneToOneField creates a one-to-one relationship.

Example:

One User has one Profile.
      `,
      code: `class Profile(models.Model):
    user = models.OneToOneField(
        "auth.User",
        on_delete=models.CASCADE
    )`,
      language: "python",
      output: "One-to-one relationship created",
    },


    {
      title: "ManyToManyField Relationship",
      content: `
ManyToManyField creates a many-to-many relationship.

Example:

Students can enroll in many Courses.

Courses can contain many Students.
      `,
      code: `class Course(models.Model):
    title = models.CharField(max_length=100)

class Student(models.Model):
    name = models.CharField(max_length=100)
    courses = models.ManyToManyField(Course)`,
      language: "python",
      output: "Many-to-many relationship created",
    },


    {
      title: "Database Best Practices",
      content: `
Professional recommendations:

✓ Keep models simple

✓ Use meaningful field names

✓ Create relationships instead of duplicating data

✓ Run migrations after model changes

✓ Always back up production databases

✓ Use indexes for frequently searched fields
      `,
      tip: "A well-designed database improves application performance and maintainability.",
    },    {
      title: "Introduction to Django Forms",
      content: `
Forms are used to collect user input.

Django provides built-in support for forms that simplifies:

• Input Collection

• Validation

• Error Handling

• Security

Forms reduce the amount of code required to process user input.
      `,
    },


    {
      title: "Creating a Form",
      content: `
Forms are created inside forms.py.

Example:
      `,
      code: `from django import forms

class StudentForm(forms.Form):
    name = forms.CharField(max_length=100)
    age = forms.IntegerField()`,
      language: "python",
      output: "Form created successfully",
    },


    {
      title: "Rendering a Form",
      content: `
A Django form can be rendered inside a template.

The form object is passed from the view to the template.
      `,
      code: `

<form method="POST">

    {% csrf_token %}

    {{ form.as_p }}

    <button type="submit">

        Submit

    </button>

</form>
`,
      language: "html",
      output: "Form displayed in browser",
    },


    {
      title: "Form Validation",
      content: `
Django automatically validates form fields.

Validation checks include:

• Required fields

• Data type

• Maximum length

• Custom validation
      `,
      code: `if form.is_valid():
    print("Valid Form")`,
      language: "python",
      output: `
Valid Form
`,
    },


    {
      title: "Model Forms",
      content: `
ModelForm automatically creates forms from Django models.

Advantages:

• Less code

• Automatic validation

• Easy CRUD operations
      `,
      code: `from django.forms import ModelForm
from .models import Student

class StudentForm(ModelForm):

    class Meta:
        model = Student
        fields = "__all__"`,
      language: "python",
      output: "ModelForm created",
    },


    {
      title: "Saving Model Forms",
      content: `
Model forms can save data directly into the database.
      `,
      code: `if form.is_valid():
    form.save()`,
      language: "python",
      output: "Data saved successfully",
    },


    {
      title: "Introduction to Authentication",
      content: `
Authentication verifies the identity of users.

Django provides a complete authentication system including:

• Registration

• Login

• Logout

• Password Reset

• Permissions
      `,
    },


    {
      title: "Creating a User",
      content: `
Create a new user using Django's built-in User model.
      `,
      code: `from django.contrib.auth.models import User

User.objects.create_user(
    username="harish",
    password="password123"
)`,
      language: "python",
      output: "User created successfully",
    },


    {
      title: "User Registration View",
      content: `
A registration view allows users to create accounts.
      `,
      code: `from django.contrib.auth.forms import UserCreationForm

def register(request):

    form = UserCreationForm()

    return render(
        request,
        "register.html",
        {"form": form}
    )`,
      language: "python",
      output: "Registration page loaded",
    },


    {
      title: "User Login",
      content: `
Authenticate users using Django's authenticate() function.
      `,
      code: `from django.contrib.auth import authenticate

user = authenticate(
    username="harish",
    password="password123"
)`,
      language: "python",
      output: "User authenticated",
    },


    {
      title: "Logging In Users",
      content: `
After authentication, log the user into the application.
      `,
      code: `from django.contrib.auth import login

login(request, user)`,
      language: "python",
      output: "User logged in",
    },


    {
      title: "Logging Out Users",
      content: `
Logout removes the user's authenticated session.
      `,
      code: `from django.contrib.auth import logout

logout(request)`,
      language: "python",
      output: "User logged out",
    },


    {
      title: "Protecting Views",
      content: `
Protect views so only authenticated users can access them.
      `,
      code: `from django.contrib.auth.decorators import login_required

@login_required
def dashboard(request):
    return render(request, "dashboard.html")`,
      language: "python",
      output: "Protected view created",
    },


    {
      title: "Password Reset",
      content: `
Django includes built-in password reset functionality.

Users can reset passwords using email verification.
      `,
    },


    {
      title: "Django Sessions",
      content: `
Sessions allow Django to remember users between requests.

Session data is stored securely on the server.
      `,
      code: `request.session["username"] = "Harish"

print(request.session["username"])`,
      language: "python",
      output: `
Harish
`,
    },


    {
      title: "Messages Framework",
      content: `
The Messages Framework displays notifications to users.

Examples:

• Success

• Error

• Warning

• Information
      `,
      code: `from django.contrib import messages

messages.success(
    request,
    "Registration Successful"
)`,
      language: "python",
      output: "Success message displayed",
    },


    {
      title: "Uploading Files",
      content: `
Django supports uploading files such as:

• PDF

• Images

• Documents

• Videos
      `,
      code: `class Document(models.Model):

    file = models.FileField(
        upload_to="documents/"
    )`,
      language: "python",
      output: "File upload model created",
    },


    {
      title: "Uploading Images",
      content: `
Images can be uploaded using ImageField.

Pillow must be installed before using ImageField.
      `,
      code: `class Profile(models.Model):

    photo = models.ImageField(
        upload_to="profiles/"
    )`,
      language: "python",
      output: "Image upload enabled",
      tip: "Install Pillow using: pip install pillow",
    },


    {
      title: "Serving Media Files",
      content: `
Configure MEDIA_URL and MEDIA_ROOT in settings.py.
      `,
      code: `MEDIA_URL = "/media/"

MEDIA_ROOT = BASE_DIR / "media"`,
      language: "python",
      output: "Media configuration completed",
    },


    {
      title: "Pagination",
      content: `
Pagination divides large datasets into multiple pages.

Benefits:

• Faster page loading

• Better user experience

• Cleaner interface
      `,
      code: `from django.core.paginator import Paginator

paginator = Paginator(students, 10)

page = request.GET.get("page")

students = paginator.get_page(page)`,
      language: "python",
      output: "Pagination implemented",
    },


    {
      title: "Best Practices for Forms and Authentication",
      content: `
Professional recommendations:

✓ Always validate forms

✓ Use CSRF protection

✓ Never store plain text passwords

✓ Protect private pages

✓ Display user-friendly error messages

✓ Validate uploaded files

✓ Limit upload size

✓ Use pagination for large datasets
      `,
      tip: "Django's built-in authentication system is secure and should be preferred over building your own from scratch.",
    },    {
      title: "Advanced Django",
      content: `
Advanced Django provides powerful tools for building scalable and maintainable web applications.

Topics include:

• Function-Based Views

• Class-Based Views

• Generic Views

• Middleware

• Signals

• Context Processors

• Custom Template Tags

• Custom User Model

• Django REST Framework

• JWT Authentication
      `,
    },


    {
      title: "Function-Based Views (FBV)",
      content: `
Function-Based Views are Python functions that receive a request and return a response.

Advantages:

• Easy to understand

• Flexible

• Best for beginners
      `,
      code: `from django.shortcuts import render

def home(request):
    return render(request, "home.html")`,
      language: "python",
      output: "Home page rendered",
    },


    {
      title: "Class-Based Views (CBV)",
      content: `
Class-Based Views organize logic inside Python classes.

Advantages:

• Reusable

• Less code

• Better organization

• Supports inheritance
      `,
      code: `from django.views import View
from django.http import HttpResponse

class HomeView(View):

    def get(self, request):
        return HttpResponse("Welcome")`,
      language: "python",
      output: "Welcome",
    },


    {
      title: "Generic Views",
      content: `
Generic Views reduce repetitive code.

Common Generic Views:

• ListView

• DetailView

• CreateView

• UpdateView

• DeleteView
      `,
    },


    {
      title: "ListView",
      content: `
ListView automatically displays multiple records.
      `,
      code: `from django.views.generic import ListView
from .models import Student

class StudentListView(ListView):
    model = Student`,
      language: "python",
      output: "Student list displayed",
    },


    {
      title: "DetailView",
      content: `
DetailView displays information about a single object.
      `,
      code: `from django.views.generic import DetailView

class StudentDetailView(DetailView):
    model = Student`,
      language: "python",
      output: "Student details displayed",
    },


    {
      title: "CreateView",
      content: `
CreateView automatically creates new objects using forms.
      `,
      code: `from django.views.generic import CreateView

class StudentCreateView(CreateView):
    model = Student
    fields = "__all__"`,
      language: "python",
      output: "Create view ready",
    },


    {
      title: "UpdateView",
      content: `
UpdateView edits existing database records.
      `,
      code: `from django.views.generic import UpdateView

class StudentUpdateView(UpdateView):
    model = Student
    fields = "__all__"`,
      language: "python",
      output: "Update view ready",
    },


    {
      title: "DeleteView",
      content: `
DeleteView removes database records after confirmation.
      `,
      code: `from django.views.generic import DeleteView

class StudentDeleteView(DeleteView):
    model = Student`,
      language: "python",
      output: "Delete view ready",
    },


    {
      title: "Middleware",
      content: `
Middleware executes during every request and response.

Common middleware:

• Authentication

• Sessions

• CSRF Protection

• Security

• Caching
      `,
    },


    {
      title: "Creating Custom Middleware",
      content: `
Custom middleware allows developers to execute code before or after each request.
      `,
      code: `class SimpleMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        return response`,
      language: "python",
      output: "Middleware created",
    },


    {
      title: "Signals",
      content: `
Signals allow Django applications to react automatically to events.

Examples:

• User registration

• Object creation

• Object deletion

• Saving data
      `,
    },


    {
      title: "Creating a Signal",
      content: `
Signals can automatically execute code after saving a model.
      `,
      code: `from django.db.models.signals import post_save
from django.dispatch import receiver

@receiver(post_save)
def saved(sender, **kwargs):
    print("Object Saved")`,
      language: "python",
      output: "Object Saved",
    },


    {
      title: "Context Processors",
      content: `
Context Processors make data available in every template.

Examples:

• Site name

• Logged-in user

• Navigation menu
      `,
    },


    {
      title: "Custom Template Tags",
      content: `
Custom template tags extend Django templates with reusable functionality.
      `,
      code: `from django import template

register = template.Library()

@register.simple_tag
def website_name():
    return "LearnWell"`,
      language: "python",
      output: "LearnWell",
    },


    {
      title: "Custom User Model",
      content: `
A custom user model allows additional fields such as:

• Phone Number

• Profile Image

• Date of Birth

It should be created before running initial migrations.
      `,
    },


    {
      title: "Introduction to Django REST Framework",
      content: `
Django REST Framework (DRF) is a toolkit for building RESTful APIs.

Features:

• Serialization

• Authentication

• Permissions

• Browsable API

• ViewSets

• Routers
      `,
    },


    {
      title: "Installing Django REST Framework",
      content: `
Install DRF using pip.
      `,
      code: `pip install djangorestframework`,
      language: "bash",
      output: "Successfully installed djangorestframework",
    },


    {
      title: "Registering Django REST Framework",
      content: `
Add DRF to INSTALLED_APPS.
      `,
      code: `INSTALLED_APPS = [
    ...
    "rest_framework",
]`,
      language: "python",
      output: "REST Framework registered",
    },


    {
      title: "Serializers",
      content: `
Serializers convert model objects into JSON and validate incoming data.
      `,
      code: `from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = "__all__"`,
      language: "python",
      output: "Serializer created",
    },


    {
      title: "APIView",
      content: `
APIView provides complete control for creating REST API endpoints.
      `,
      code: `from rest_framework.views import APIView
from rest_framework.response import Response

class HelloAPI(APIView):

    def get(self, request):
        return Response({"message": "Hello Django"})`,
      language: "python",
      output: `
{
  "message": "Hello Django"
}
`,
    },


    {
      title: "Permissions",
      content: `
Permissions control access to API endpoints.

Common permission classes:

• AllowAny

• IsAuthenticated

• IsAdminUser

• IsAuthenticatedOrReadOnly
      `,
    },


    {
      title: "JWT Authentication",
      content: `
JWT (JSON Web Token) is commonly used for API authentication.

Advantages:

• Stateless authentication

• Secure token-based login

• Widely used with React, Angular, and Vue frontends
      `,
      code: `pip install djangorestframework-simplejwt`,
      language: "bash",
      output: "JWT package installed",
      tip: "JWT is commonly used for Django REST APIs consumed by mobile and frontend applications.",
    },


    {
      title: "Advanced Django Best Practices",
      content: `
Professional recommendations:

✓ Prefer Class-Based Views for reusable logic

✓ Use Generic Views when appropriate

✓ Keep middleware lightweight

✓ Use signals only when necessary

✓ Build APIs using Django REST Framework

✓ Protect APIs with authentication

✓ Organize reusable code into separate apps

✓ Follow Django's project structure
      `,
    },    {
      title: "Introduction to Testing",
      content: `
Testing ensures that your Django application works correctly and helps prevent bugs.

Benefits of testing:

• Detects bugs early

• Improves code quality

• Makes refactoring safer

• Increases application reliability

Django includes a built-in testing framework based on Python's unittest module.
      `,
    },


    {
      title: "Creating Your First Test",
      content: `
Tests are usually written inside the tests.py file of an application.
      `,
      code: `from django.test import TestCase

class StudentTest(TestCase):

    def test_addition(self):
        self.assertEqual(2 + 2, 4)`,
      language: "python",
      output: `
OK
      `,
    },


    {
      title: "Running Tests",
      content: `
Execute all project tests using the Django test runner.
      `,
      code: `python manage.py test`,
      language: "bash",
      output: `
Found 5 test(s).

OK
      `,
    },


    {
      title: "Logging",
      content: `
Logging records important information while your application is running.

Logs help developers:

• Debug errors

• Monitor applications

• Track user activity

• Diagnose production issues
      `,
    },


    {
      title: "Configuring Logging",
      content: `
Logging is configured inside settings.py.
      `,
      code: `LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
}`,
      language: "python",
      output: "Logging configured",
    },


    {
      title: "Caching",
      content: `
Caching stores frequently used data temporarily.

Benefits:

• Faster page loading

• Reduced database queries

• Better application performance
      `,
    },


    {
      title: "Local Memory Cache",
      content: `
Configure Django to use local memory caching.
      `,
      code: `CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.locmem.LocMemCache",
    }
}`,
      language: "python",
      output: "Cache configured",
    },


    {
      title: "Environment Variables",
      content: `
Environment variables keep sensitive information outside the source code.

Common examples:

• SECRET_KEY

• Database Password

• Email Credentials

• API Keys
      `,
    },


    {
      title: "Using python-dotenv",
      content: `
Store configuration values in a .env file.
      `,
      code: `pip install python-dotenv`,
      language: "bash",
      output: "python-dotenv installed",
      tip: "Never commit your .env file to Git. Add it to .gitignore.",
    },


    {
      title: "Django Security Best Practices",
      content: `
Improve application security by following these practices:

✓ Enable DEBUG=False in production

✓ Use HTTPS

✓ Protect SECRET_KEY

✓ Enable CSRF protection

✓ Validate user input

✓ Escape template output

✓ Keep dependencies updated
      `,
    },


    {
      title: "Deploying Django Applications",
      content: `
Deployment publishes your application so users can access it online.

Common deployment components:

• Gunicorn

• Nginx

• PostgreSQL

• Linux Server

• Cloud Hosting
      `,
    },


    {
      title: "Gunicorn",
      content: `
Gunicorn is a production-ready WSGI server for Django applications.
      `,
      code: `pip install gunicorn`,
      language: "bash",
      output: "Gunicorn installed",
    },


    {
      title: "Running Gunicorn",
      content: `
Start the Django application using Gunicorn.
      `,
      code: `gunicorn myproject.wsgi:application`,
      language: "bash",
      output: "Application started successfully",
    },


    {
      title: "Nginx",
      content: `
Nginx is commonly used as a reverse proxy server.

Responsibilities:

• Serve static files

• Forward requests to Gunicorn

• Improve performance

• Provide HTTPS support
      `,
    },


    {
      title: "Docker",
      content: `
Docker packages your Django application and its dependencies into containers.

Benefits:

• Consistent environments

• Easy deployment

• Better scalability

• Simplified configuration
      `,
    },


    {
      title: "CI/CD",
      content: `
Continuous Integration and Continuous Deployment automate software delivery.

Typical CI/CD pipeline:

• Run Tests

• Build Application

• Deploy Automatically

• Monitor Deployment
      `,
    },


    {
      title: "Performance Optimization",
      content: `
Optimize Django applications by:

• Using caching

• Optimizing database queries

• Using select_related()

• Using prefetch_related()

• Compressing static files

• Reducing HTTP requests
      `,
    },


    {
      title: "Django Project Structure",
      content: `
A professional Django project usually contains:

project/

apps/

templates/

static/

media/

requirements.txt

.env

manage.py

README.md
      `,
    },


    {
      title: "Real-World Django Workflow",
      content: `
Professional development workflow:

1. Create virtual environment

2. Install dependencies

3. Create project

4. Create apps

5. Build models

6. Run migrations

7. Create templates

8. Test application

9. Deploy project

10. Monitor and maintain
      `,
    },


    {
      title: "Django Interview Questions",
      content: `
Frequently asked interview questions:

• What is Django?

• Explain MVT Architecture.

• What is Django ORM?

• What are migrations?

• Difference between FBV and CBV?

• What is Middleware?

• What is Django REST Framework?

• Explain Signals.

• What are Context Processors?

• What is JWT Authentication?
      `,
    },


    {
      title: "Django Career Roadmap",
      content: `
Recommended learning path:

1. Python

2. HTML & CSS

3. JavaScript

4. Django Basics

5. Django ORM

6. Authentication

7. REST APIs

8. PostgreSQL

9. Docker

10. Git & GitHub

11. Cloud Deployment

12. DevOps Basics
      `,
    },


    {
      title: "Django Best Practices",
      content: `
Professional recommendations:

✓ Follow PEP 8 coding standards

✓ Use virtual environments

✓ Keep apps modular

✓ Use environment variables

✓ Write automated tests

✓ Optimize database queries

✓ Keep dependencies updated

✓ Document your code

✓ Secure your application

✓ Regularly back up your database
      `,
      tip: "Following Django best practices makes applications easier to maintain, scale, and deploy.",
    },


    {
      title: "Complete Django Course Summary",
      content: `
Congratulations!

You have completed the Django Framework course.

Topics covered:

✓ Django Fundamentals

✓ MVT Architecture

✓ Projects & Apps

✓ URL Routing

✓ Templates

✓ Models

✓ Django ORM

✓ CRUD Operations

✓ Relationships

✓ Forms

✓ Authentication

✓ Sessions

✓ File Uploads

✓ Pagination

✓ Function-Based Views

✓ Class-Based Views

✓ Generic Views

✓ Middleware

✓ Signals

✓ Context Processors

✓ Django REST Framework

✓ Serializers

✓ JWT Authentication

✓ Testing

✓ Logging

✓ Caching

✓ Security

✓ Deployment

✓ Docker

✓ CI/CD

✓ Performance Optimization

✓ Interview Preparation

✓ Career Roadmap

You are now ready to build modern, secure, and scalable web applications using Django.
      `,
      tip: "The best way to master Django is by building real-world projects such as blogs, e-commerce sites, learning management systems, chat applications, and REST APIs.",
    },

  ],
};