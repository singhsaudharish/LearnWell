export const pandasContent = {
  title: "Pandas",
  description:
    "Learn Pandas from beginner to advanced for data analysis, cleaning, manipulation, and visualization with practical examples.",

  sections: [

    {
      title: "Introduction to Pandas",
      content: `
Pandas is one of the most popular Python libraries for data analysis and data manipulation.

It provides powerful tools to work with structured data such as tables, spreadsheets, and CSV files.

Pandas is widely used in Data Science, Machine Learning, Artificial Intelligence, Data Analytics, and Business Intelligence.
      `,
    },

    {
      title: "What is Pandas?",
      content: `
Pandas is an open-source Python library built on top of NumPy.

It provides two primary data structures:

• Series (1-dimensional)

• DataFrame (2-dimensional)

These structures make storing, analyzing, and manipulating data simple and efficient.
      `,
    },

    {
      title: "History of Pandas",
      content: `
Pandas was created by Wes McKinney in 2008.

It was developed to simplify financial data analysis and has since become one of the most widely used Python libraries for data processing.
      `,
    },

    {
      title: "Features of Pandas",
      content: `
Major features include:

• Fast Data Analysis

• Data Cleaning

• Handling Missing Values

• Reading Multiple File Formats

• Powerful Indexing

• Data Aggregation

• Grouping

• Time Series Support

• Integration with NumPy and Matplotlib
      `,
    },

    {
      title: "Advantages of Pandas",
      content: `
Advantages:

✓ Easy to Learn

✓ High Performance

✓ Powerful Data Manipulation

✓ Flexible Data Structures

✓ Excellent Documentation

✓ Large Community

✓ Works with Large Datasets
      `,
    },

    {
      title: "Applications of Pandas",
      content: `
Pandas is commonly used in:

• Data Science

• Machine Learning

• Business Analytics

• Financial Analysis

• Data Cleaning

• Data Visualization

• Research

• Artificial Intelligence
      `,
    },

    {
      title: "Installing Pandas",
      content: `
Install Pandas using pip.
      `,
      code: `pip install pandas`,
      language: "bash",
      output: `
Successfully installed pandas
      `,
      tip: "Use the latest stable version of Pandas for new projects.",
    },

    {
      title: "Importing Pandas",
      content: `
Import Pandas using the standard alias pd.
      `,
      code: `import pandas as pd`,
      language: "python",
      output: `
Pandas Imported Successfully
      `,
    },

    {
      title: "Series",
      content: `
A Series is a one-dimensional labeled array.

It can store:

• Integers

• Floating-point Numbers

• Strings

• Boolean Values

• Objects
      `,
    },

    {
      title: "Creating a Series",
      content: `
Create a Series using pd.Series().
      `,
      code: `import pandas as pd

numbers = pd.Series([10, 20, 30, 40, 50])

print(numbers)`,
      language: "python",
      output: `0    10
1    20
2    30
3    40
4    50
dtype: int64`,
    },

    {
      title: "DataFrame",
      content: `
A DataFrame is the most commonly used Pandas data structure.

It stores data in rows and columns, similar to an Excel spreadsheet or SQL table.
      `,
    },

    {
      title: "Creating a DataFrame",
      content: `
Create a DataFrame using a dictionary.
      `,
      code: `import pandas as pd

data = {

    "Name": ["Harish", "Rahul", "Priya"],

    "Age": [21, 22, 20],

    "Course": ["MERN", "Python", "Java"]

}

df = pd.DataFrame(data)

print(df)`,
      language: "python",
      output: `      Name  Age  Course
0   Harish   21    MERN
1    Rahul   22  Python
2    Priya   20    Java`,
    },

    {
      title: "Reading CSV Files",
      content: `
Use read_csv() to load CSV files.
      `,
      code: `import pandas as pd

df = pd.read_csv("students.csv")

print(df.head())`,
      language: "python",
      output: `
First five rows displayed
      `,
    },

    {
      title: "Reading Excel Files",
      content: `
Use read_excel() to load Excel spreadsheets.
      `,
      code: `import pandas as pd

df = pd.read_excel("students.xlsx")

print(df.head())`,
      language: "python",
      output: `
Excel Data Loaded
      `,
    },

    {
      title: "Viewing Data",
      content: `
Useful methods for viewing data:

• head()

• tail()

• sample()

These methods help inspect datasets quickly.
      `,
      code: `print(df.head())

print(df.tail())

print(df.sample(3))`,
      language: "python",
      output: `
Dataset Preview Displayed
      `,
    },

    {
      title: "Data Types",
      content: `
Use dtypes to view the data type of each column.
      `,
      code: `print(df.dtypes)`,
      language: "python",
      output: `Name      object
Age        int64
Course    object
dtype: object`,
    },

    {
      title: "DataFrame Attributes",
      content: `
Useful DataFrame attributes:

• shape

• size

• columns

• index

• values

These provide information about the dataset.
      `,
      code: `print(df.shape)

print(df.columns)

print(df.size)`,
      language: "python",
      output: `
(3, 3)

Index(['Name', 'Age', 'Course'], dtype='object')

9
      `,
    },

    {
      title: "Basic Information",
      content: `
Use info() to display detailed information about a DataFrame.
      `,
      code: `df.info()`,
      language: "python",
      output: `
<class 'pandas.core.frame.DataFrame'>
Columns: 3
Entries: 3
Data columns: 3
      `,
    },

    {
      title: "Statistical Summary",
      content: `
describe() generates summary statistics for numerical columns.
      `,
      code: `print(df.describe())`,
      language: "python",
      output: `
Statistical Summary Displayed
      `,
      tip: "describe() is one of the first methods used when exploring a new dataset.",
    },

        {
      title: "Introduction to Data Selection & Manipulation",
      content: `
Data selection and manipulation are essential skills in Pandas.

They allow you to:

• Select rows and columns

• Filter data

• Modify values

• Handle missing data

• Prepare datasets for analysis
      `,
    },


    {
      title: "Selecting Columns",
      content: `
You can select one or more columns from a DataFrame.
      `,
      code: `import pandas as pd

df = pd.read_csv("students.csv")

print(df["Name"])

print(df[["Name", "Age"]])`,
      language: "python",
      output: `
Single and Multiple Columns Displayed
      `,
    },


    {
      title: "Selecting Rows",
      content: `
Rows can be selected using slicing.
      `,
      code: `print(df[0:5])

print(df[2:8])`,
      language: "python",
      output: `
Selected Rows Displayed
      `,
    },


    {
      title: "Using loc[]",
      content: `
loc[] selects data using row and column labels.
      `,
      code: `print(df.loc[0])

print(df.loc[0:3])

print(df.loc[:, ["Name", "Age"]])`,
      language: "python",
      output: `
Rows Selected by Labels
      `,
      tip: "Use loc[] when working with row labels or column names.",
    },


    {
      title: "Using iloc[]",
      content: `
iloc[] selects data using integer positions.
      `,
      code: `print(df.iloc[0])

print(df.iloc[0:4])

print(df.iloc[:, 0:2])`,
      language: "python",
      output: `
Rows Selected by Position
      `,
    },


    {
      title: "Filtering Data",
      content: `
Filtering returns rows that satisfy a condition.
      `,
      code: `print(df[df["Age"] > 20])`,
      language: "python",
      output: `
Students Older Than 20 Displayed
      `,
    },


    {
      title: "Boolean Indexing",
      content: `
Boolean indexing applies True or False conditions to filter data.
      `,
      code: `result = df[df["Course"] == "Python"]

print(result)`,
      language: "python",
      output: `
Python Students Displayed
      `,
    },


    {
      title: "Sorting Data",
      content: `
sort_values() sorts data by one or more columns.
      `,
      code: `print(df.sort_values("Age"))

print(df.sort_values("Age", ascending=False))`,
      language: "python",
      output: `
Sorted Data Displayed
      `,
    },


    {
      title: "Renaming Columns",
      content: `
rename() changes column names.
      `,
      code: `df.rename(

    columns={

        "Name": "Student Name"

    },

    inplace=True

)

print(df.head())`,
      language: "python",
      output: `
Column Renamed
      `,
    },


    {
      title: "Adding a New Column",
      content: `
New columns can be created by assigning values.
      `,
      code: `df["Marks"] = [90, 85, 88]

print(df)`,
      language: "python",
      output: `
Marks Column Added
      `,
    },


    {
      title: "Updating Column Values",
      content: `
Modify existing values by assigning new values.
      `,
      code: `df["Age"] = df["Age"] + 1

print(df)`,
      language: "python",
      output: `
Age Updated
      `,
    },


    {
      title: "Dropping Rows",
      content: `
drop() removes rows from a DataFrame.
      `,
      code: `df.drop(0, inplace=True)

print(df)`,
      language: "python",
      output: `
First Row Removed
      `,
    },


    {
      title: "Dropping Columns",
      content: `
Columns can also be removed using drop().
      `,
      code: `df.drop(

    columns=["Marks"],

    inplace=True

)

print(df)`,
      language: "python",
      output: `
Marks Column Removed
      `,
    },


    {
      title: "Handling Missing Values",
      content: `
Missing values are represented by NaN.

Common methods:

• isnull()

• notnull()

• fillna()

• dropna()
      `,
      code: `print(df.isnull().sum())`,
      language: "python",
      output: `
Missing Values Count Displayed
      `,
    },


    {
      title: "Using fillna()",
      content: `
fillna() replaces missing values.
      `,
      code: `df.fillna(

    0,

    inplace=True

)

print(df)`,
      language: "python",
      output: `
Missing Values Filled
      `,
    },


    {
      title: "Using dropna()",
      content: `
dropna() removes rows containing missing values.
      `,
      code: `df.dropna(inplace=True)

print(df)`,
      language: "python",
      output: `
Rows with Missing Values Removed
      `,
    },


    {
      title: "Handling Duplicate Data",
      content: `
Duplicate records can affect analysis.

Useful methods:

• duplicated()

• drop_duplicates()
      `,
      code: `print(df.duplicated())

df.drop_duplicates(inplace=True)`,
      language: "python",
      output: `
Duplicates Removed
      `,
    },


    {
      title: "Using replace()",
      content: `
replace() substitutes specific values with new ones.
      `,
      code: `df.replace(

    "Python",

    "Django"

)

print(df)`,
      language: "python",
      output: `
Values Replaced
      `,
    },


        {
      title: "Introduction to Data Analysis",
      content: `
Data analysis is the process of examining, transforming, and summarizing data to extract useful insights.

Pandas provides powerful functions that make analyzing large datasets fast and efficient.

Common tasks include:

• Aggregation

• Grouping

• Counting

• Merging

• Date Analysis

• Pivot Tables
      `,
    },


    {
      title: "Aggregation Functions",
      content: `
Aggregation functions summarize data.

Common aggregation functions include:

• sum()

• mean()

• median()

• min()

• max()

• count()

• std()

• var()
      `,
      code: `print(df["Marks"].sum())

print(df["Marks"].mean())

print(df["Marks"].max())

print(df["Marks"].min())`,
      language: "python",
      output: `
263
87.67
90
85
      `,
    },


    {
      title: "Using groupby()",
      content: `
groupby() groups data based on one or more columns.

It is commonly used for reports and analytics.
      `,
      code: `result = df.groupby("Course")["Marks"].mean()

print(result)`,
      language: "python",
      output: `
Course
Java      88.0
MERN      90.0
Python    85.0
      `,
      tip: "groupby() is one of the most frequently used functions in data analysis.",
    },


    {
      title: "Using value_counts()",
      content: `
value_counts() counts the frequency of unique values.
      `,
      code: `print(df["Course"].value_counts())`,
      language: "python",
      output: `
MERN      5
Python    3
Java      2
      `,
    },


    {
      title: "Using unique()",
      content: `
unique() returns all unique values in a column.
      `,
      code: `print(df["Course"].unique())`,
      language: "python",
      output: `
['MERN' 'Python' 'Java']
      `,
    },


    {
      title: "Using nunique()",
      content: `
nunique() returns the number of unique values.
      `,
      code: `print(df["Course"].nunique())`,
      language: "python",
      output: `
3
      `,
    },


    {
      title: "Using apply()",
      content: `
apply() executes a function on each value of a column or row.
      `,
      code: `df["Marks"] = df["Marks"].apply(lambda x: x + 5)

print(df)`,
      language: "python",
      output: `
Marks Increased by 5
      `,
    },


    {
      title: "Using map()",
      content: `
map() transforms values in a Series using a dictionary or function.
      `,
      code: `course_map = {

    "MERN": "Web",

    "Python": "Programming",

    "Java": "Programming"

}

df["Category"] = df["Course"].map(course_map)

print(df)`,
      language: "python",
      output: `
Mapped Values Displayed
      `,
    },


    {
      title: "Lambda Functions",
      content: `
Lambda functions are anonymous functions used for short operations.
      `,
      code: `df["Age"] = df["Age"].apply(

    lambda x: x + 1

)

print(df)`,
      language: "python",
      output: `
Age Updated
      `,
    },


    {
      title: "String Operations",
      content: `
The .str accessor provides powerful string operations.
      `,
      code: `print(df["Name"].str.upper())

print(df["Name"].str.lower())

print(df["Name"].str.len())`,
      language: "python",
      output: `
String Operations Performed
      `,
    },


    {
      title: "Date and Time Operations",
      content: `
Pandas provides datetime support for handling dates and times.
      `,
      code: `df["Joining Date"] = pd.to_datetime(

    df["Joining Date"]

)

print(df["Joining Date"].dt.year)

print(df["Joining Date"].dt.month)`,
      language: "python",
      output: `
Year and Month Extracted
      `,
    },


    {
      title: "Correlation",
      content: `
corr() measures the relationship between numerical columns.

Values range from:

• -1 (Strong Negative)

• 0 (No Relationship)

• 1 (Strong Positive)
      `,
      code: `print(df.corr(numeric_only=True))`,
      language: "python",
      output: `
Correlation Matrix Displayed
      `,
    },


    {
      title: "Covariance",
      content: `
cov() measures how two variables change together.
      `,
      code: `print(df.cov(numeric_only=True))`,
      language: "python",
      output: `
Covariance Matrix Displayed
      `,
    },


    {
      title: "Creating a Pivot Table",
      content: `
pivot_table() summarizes data into a spreadsheet-style table.
      `,
      code: `table = df.pivot_table(

    values="Marks",

    index="Course",

    aggfunc="mean"

)

print(table)`,
      language: "python",
      output: `
Average Marks by Course
      `,
    },


    {
      title: "Using crosstab()",
      content: `
crosstab() creates a frequency table between two columns.
      `,
      code: `print(

pd.crosstab(

    df["Course"],

    df["Gender"]

)

)`,
      language: "python",
      output: `
Cross Tabulation Displayed
      `,
    },


    {
      title: "Merging DataFrames",
      content: `
merge() combines two DataFrames based on a common column.
      `,
      code: `merged = pd.merge(

    students,

    courses,

    on="Course_ID"

)

print(merged)`,
      language: "python",
      output: `
Merged DataFrame Displayed
      `,
    },


    {
      title: "Joining DataFrames",
      content: `
join() combines DataFrames using their indexes.
      `,
      code: `result = df1.join(df2)

print(result)`,
      language: "python",
      output: `
Joined DataFrame Displayed
      `,
    },


    {
      title: "Concatenating DataFrames",
      content: `
concat() combines multiple DataFrames vertically or horizontally.
      `,
      code: `result = pd.concat(

    [df1, df2],

    ignore_index=True

)

print(result)`,
      language: "python",
      output: `
DataFrames Concatenated
      `,
    },

    {
      title: "Introduction to Advanced Pandas",
      content: `
Advanced Pandas features help you work efficiently with large datasets, time series data, hierarchical indexes, and high-performance operations.

These features are commonly used in data science, business intelligence, finance, and machine learning projects.
      `,
    },


    {
      title: "MultiIndex",
      content: `
A MultiIndex (Hierarchical Index) allows multiple index levels in a DataFrame.

It helps organize complex datasets with grouped information.
      `,
      code: `import pandas as pd

data = {

    "Department": ["IT", "IT", "HR", "HR"],

    "Employee": ["Alice", "Bob", "John", "Emma"],

    "Salary": [60000, 70000, 50000, 55000]

}

df = pd.DataFrame(data)

df = df.set_index(["Department", "Employee"])

print(df)`,
      language: "python",
      output: `
                       Salary
Department Employee
IT         Alice       60000
           Bob         70000
HR         John        50000
           Emma        55000
      `,
    },


    {
      title: "Index Operations",
      content: `
Indexes make data retrieval faster.

Useful index operations include:

• index

• set_index()

• reset_index()

• sort_index()
      `,
      code: `print(df.index)

print(df.sort_index())`,
      language: "python",
      output: `
MultiIndex Displayed
Sorted Index Displayed
      `,
    },


    {
      title: "Resetting the Index",
      content: `
reset_index() converts the index back into normal columns.
      `,
      code: `df = df.reset_index()

print(df)`,
      language: "python",
      output: `
Default Integer Index Restored
      `,
    },


    {
      title: "Setting an Index",
      content: `
set_index() sets one or more columns as the DataFrame index.
      `,
      code: `df = df.set_index("Employee")

print(df)`,
      language: "python",
      output: `
Employee Column Set as Index
      `,
    },


    {
      title: "Rolling Window Operations",
      content: `
Rolling windows calculate statistics over a moving window.

Common uses:

• Moving Average

• Rolling Sum

• Rolling Maximum
      `,
      code: `print(

df["Salary"].rolling(

window=2

).mean()

)`,
      language: "python",
      output: `
Rolling Mean Calculated
      `,
    },


    {
      title: "Expanding Window Operations",
      content: `
Expanding windows include all previous values while calculating statistics.
      `,
      code: `print(

df["Salary"]

.expanding()

.mean()

)`,
      language: "python",
      output: `
Expanding Mean Calculated
      `,
    },


    {
      title: "Resampling Time Series",
      content: `
Resampling changes the frequency of time-series data.

Examples:

• Daily

• Weekly

• Monthly

• Yearly
      `,
      code: `df = pd.read_csv(

"sales.csv",

parse_dates=["Date"],

index_col="Date"

)

print(

df.resample("M").sum()

)`,
      language: "python",
      output: `
Monthly Sales Summary Displayed
      `,
      tip: "Use 'ME' instead of 'M' in newer Pandas versions if you see a deprecation warning for month-end frequency.",
    },


    {
      title: "Time Series Analysis",
      content: `
Pandas provides excellent support for time-series data.

Useful datetime properties include:

• dt.year

• dt.month

• dt.day

• dt.weekday

• dt.hour
      `,
      code: `df["Date"] = pd.to_datetime(

df["Date"]

)

print(df["Date"].dt.year)

print(df["Date"].dt.month)`,
      language: "python",
      output: `
Year and Month Extracted
      `,
    },


    {
      title: "Reading JSON Files",
      content: `
Use read_json() to load JSON data into a DataFrame.
      `,
      code: `import pandas as pd

df = pd.read_json("students.json")

print(df.head())`,
      language: "python",
      output: `
JSON Data Loaded Successfully
      `,
    },


    {
      title: "Reading Data from SQL",
      content: `
Pandas can directly read data from SQL databases.
      `,
      code: `import sqlite3
import pandas as pd

conn = sqlite3.connect("students.db")

df = pd.read_sql(

"SELECT * FROM students",

conn

)

print(df.head())`,
      language: "python",
      output: `
SQL Data Loaded Successfully
      `,
    },


    {
      title: "Exporting to CSV",
      content: `
Use to_csv() to save a DataFrame as a CSV file.
      `,
      code: `df.to_csv(

"output.csv",

index=False

)`,
      language: "python",
      output: `
CSV File Created
      `,
    },


    {
      title: "Exporting to Excel",
      content: `
Use to_excel() to export a DataFrame to an Excel file.
      `,
      code: `df.to_excel(

"output.xlsx",

index=False

)`,
      language: "python",
      output: `
Excel File Created
      `,
    },


    {
      title: "Performance Optimization",
      content: `
Improve Pandas performance by:

• Selecting only required columns

• Using vectorized operations

• Avoiding unnecessary loops

• Using appropriate data types

• Reading large files in chunks

• Using categorical data when appropriate
      `,
    },


    {
      title: "Vectorization",
      content: `
Vectorized operations perform calculations on entire columns at once.

They are much faster than iterating through rows with loops.
      `,
      code: `df["Bonus"] = df["Salary"] * 0.10

print(df)`,
      language: "python",
      output: `
Bonus Column Added
      `,
    },


    {
      title: "Method Chaining",
      content: `
Method chaining combines multiple operations into a single readable statement.
      `,
      code: `result = (

    df

    .dropna()

    .sort_values("Salary")

    .reset_index(drop=True)

)

print(result)`,
      language: "python",
      output: `
Processed DataFrame Displayed
      `,
    },


    {
      title: "Pandas Best Practices",
      content: `
Professional recommendations:

✓ Use Meaningful Column Names

✓ Handle Missing Values Carefully

✓ Avoid Loops When Possible

✓ Use Vectorized Operations

✓ Keep Data Types Optimized

✓ Save Intermediate Results

✓ Write Clean and Readable Code

✓ Validate Data Before Analysis
      `,
      tip: "Efficient Pandas code is easier to maintain and performs significantly better on large datasets.",
    },


        {
      title: "Introduction to Exploratory Data Analysis (EDA)",
      content: `
Exploratory Data Analysis (EDA) is the process of analyzing datasets to understand their structure, identify patterns, detect anomalies, and summarize their main characteristics.

EDA is usually the first step before building Machine Learning models.
      `,
    },

    {
      title: "Basic EDA Workflow",
      content: `
A typical EDA workflow includes:

• Load Dataset

• View Sample Data

• Check Data Types

• Handle Missing Values

• Remove Duplicates

• Analyze Statistics

• Visualize Data

• Detect Outliers

• Feature Engineering

• Save Cleaned Data
      `,
    },

    {
      title: "Loading a Dataset",
      content: `
Load a CSV file using Pandas.
      `,
      code: `import pandas as pd

df = pd.read_csv("employees.csv")

print(df.head())`,
      language: "python",
      output: `
Dataset Loaded Successfully
      `,
    },

    {
      title: "Data Cleaning Workflow",
      content: `
Data cleaning improves the quality of data.

Common cleaning tasks:

• Remove Missing Values

• Replace Invalid Values

• Remove Duplicate Rows

• Convert Data Types

• Rename Columns

• Handle Outliers
      `,
      code: `df.drop_duplicates(inplace=True)

df.fillna(0, inplace=True)

print(df.info())`,
      language: "python",
      output: `
Dataset Cleaned Successfully
      `,
    },

    {
      title: "Feature Engineering",
      content: `
Feature engineering creates new columns from existing data.

It improves machine learning model performance.
      `,
      code: `df["Annual Salary"] = df["Monthly Salary"] * 12

print(df.head())`,
      language: "python",
      output: `
New Feature Created
      `,
      tip: "Create features that provide meaningful information instead of simply duplicating existing columns.",
    },

    {
      title: "Descriptive Statistics",
      content: `
Useful statistical methods:

• mean()

• median()

• mode()

• std()

• var()

• describe()
      `,
      code: `print(df.describe())`,
      language: "python",
      output: `
Statistical Summary Displayed
      `,
    },

    {
      title: "Finding Outliers",
      content: `
Outliers are values significantly different from the rest of the dataset.

A simple way to identify potential outliers is by using the Interquartile Range (IQR).
      `,
      code: `Q1 = df["Salary"].quantile(0.25)

Q3 = df["Salary"].quantile(0.75)

IQR = Q3 - Q1

outliers = df[(df["Salary"] < Q1 - 1.5 * IQR) |

              (df["Salary"] > Q3 + 1.5 * IQR)]

print(outliers)`,
      language: "python",
      output: `
Potential Outliers Displayed
      `,
    },

    {
      title: "Data Visualization with Pandas",
      content: `
Pandas provides built-in plotting capabilities.

Common charts include:

• Line Chart

• Bar Chart

• Histogram

• Box Plot

• Pie Chart
      `,
      code: `df["Salary"].plot(kind="hist")`,
      language: "python",
      output: `
Histogram Displayed
      `,
    },

    {
      title: "Pandas with Matplotlib",
      content: `
Matplotlib is the default plotting library used by Pandas.
      `,
      code: `import matplotlib.pyplot as plt

df.plot(

x="Name",

y="Salary",

kind="bar"

)

plt.show()`,
      language: "python",
      output: `
Bar Chart Displayed
      `,
    },

    {
      title: "Pandas with Seaborn",
      content: `
Seaborn provides attractive statistical visualizations built on top of Matplotlib.
      `,
      code: `import seaborn as sns

sns.scatterplot(

data=df,

x="Age",

y="Salary"

)`,
      language: "python",
      output: `
Scatter Plot Displayed
      `,
    },

    {
      title: "Pandas with NumPy",
      content: `
Pandas and NumPy work together for numerical computing.

NumPy provides fast mathematical operations, while Pandas manages structured data.
      `,
      code: `import numpy as np

df["Square"] = np.square(df["Age"])

print(df.head())`,
      language: "python",
      output: `
NumPy Operation Applied
      `,
    },

    {
      title: "Pandas with Scikit-learn",
      content: `
Scikit-learn uses Pandas DataFrames for machine learning tasks.

Typical workflow:

• Load Data

• Clean Data

• Split Dataset

• Train Model

• Evaluate Model
      `,
      code: `from sklearn.model_selection import train_test_split

X = df[["Age"]]

y = df["Salary"]

X_train, X_test, y_train, y_test = train_test_split(

X,

y,

test_size=0.2,

random_state=42

)`,
      language: "python",
      output: `
Dataset Split Successfully
      `,
    },

    {
      title: "Working with Large Datasets",
      content: `
For very large datasets:

• Read only required columns

• Load data in chunks

• Optimize data types

• Use vectorized operations

• Avoid unnecessary copies
      `,
      code: `df = pd.read_csv(

"large_file.csv",

chunksize=10000

)

for chunk in df:

    print(chunk.head())`,
      language: "python",
      output: `
Large Dataset Processed in Chunks
      `,
    },

    {
      title: "Memory Optimization",
      content: `
Reduce memory usage by choosing appropriate data types.

Examples:

• int8

• int16

• float32

• category
      `,
      code: `df["Department"] = df["Department"].astype("category")

print(df.info())`,
      language: "python",
      output: `
Memory Usage Reduced
      `,
    },

    {
      title: "Common Pandas Errors",
      content: `
Frequently encountered errors:

• KeyError

• IndexError

• ValueError

• TypeError

• FileNotFoundError

• ParserError

Read error messages carefully to identify the cause and fix the issue.
      `,
    },

    {
      title: "Pandas Interview Questions",
      content: `
Popular interview questions:

• What is Pandas?

• What is a Series?

• What is a DataFrame?

• Difference between loc[] and iloc[]?

• What is groupby()?

• How do you handle missing values?

• Difference between merge() and join()?

• What is a MultiIndex?

• What is vectorization?

• Why is Pandas widely used in Data Science?
      `,
    },

    {
      title: "Pandas Developer Roadmap",
      content: `
Recommended learning path:

1. Python Fundamentals

2. NumPy

3. Pandas Basics

4. Data Cleaning

5. Data Analysis

6. Visualization

7. Statistics

8. SQL

9. Machine Learning

10. Scikit-learn

11. Deep Learning

12. Real Projects
      `,
    },

    {
      title: "Pandas Best Practices",
      content: `
Professional recommendations:

✓ Use Meaningful Column Names

✓ Keep Data Clean

✓ Prefer Vectorized Operations

✓ Avoid Unnecessary Loops

✓ Validate Data Before Analysis

✓ Optimize Memory Usage

✓ Save Cleaned Datasets

✓ Document Your Analysis

✓ Write Modular Code

✓ Practice with Real Datasets
      `,
      tip: "Strong Pandas skills come from working with real-world datasets and combining Pandas with NumPy, Matplotlib, Seaborn, SQL, and Scikit-learn.",
    },

    {
      title: "Complete Pandas Course Summary",
      content: `
🎉 Congratulations!

You have successfully completed the Pandas Course.

Topics Covered:

✓ Introduction to Pandas

✓ Series

✓ DataFrame

✓ Reading CSV & Excel Files

✓ Data Selection

✓ loc[] and iloc[]

✓ Filtering

✓ Sorting

✓ Data Cleaning

✓ Missing Values

✓ Duplicates

✓ Aggregation Functions

✓ groupby()

✓ Pivot Tables

✓ Merging & Joining

✓ MultiIndex

✓ Time Series Analysis

✓ Reading JSON & SQL

✓ Exporting Data

✓ Vectorization

✓ Performance Optimization

✓ Exploratory Data Analysis (EDA)

✓ Feature Engineering

✓ Data Visualization

✓ Pandas with NumPy

✓ Pandas with Matplotlib

✓ Pandas with Seaborn

✓ Pandas with Scikit-learn

✓ Working with Large Datasets

✓ Memory Optimization

✓ Common Errors

✓ Interview Questions

✓ Pandas Developer Roadmap

You are now ready to use Pandas for professional data analysis, business intelligence, machine learning, artificial intelligence, and data science projects.
      `,
      tip: "Build projects such as Sales Dashboard, Student Performance Analysis, COVID-19 Data Analysis, IPL Statistics Dashboard, Financial Data Analysis, HR Analytics, and Customer Segmentation to master Pandas in real-world scenarios.",
    },
  ],
};