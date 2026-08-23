# LearnWell

LearnWell is a full-stack learning platform designed to help students learn programming, explore technical topics, practice coding interview questions, and manage their learning journey.

The project is built using the **MERN stack** with a modern React/Vite frontend and a Node.js/Express backend connected to MongoDB.

## 🚀 Features

### 📚 Learning Platform

* Programming courses and tutorials
* Beginner-to-advanced learning content
* Topic-based learning sections
* Structured programming content
* C, C++, Java, Python, JavaScript, HTML, CSS, SQL, React, Node.js, MongoDB and more

### 💻 Coding Q&A

* Coding interview questions
* Topic-based coding problems
* Arrays
* Strings
* Linked Lists
* Stack
* Queue
* Trees
* Graphs
* Mathematics
* Dynamic Programming
* Difficulty levels
* Solutions and explanations
* Multiple programming language solutions

### 🔐 Authentication

* User registration
* User login
* JWT authentication
* Protected routes
* Password encryption
* Email verification
* OTP verification
* Forgot password
* Password reset
* User profile

### 🎓 Course & Enrollment

* Course management
* Course enrollment
* User enrollment tracking
* Protected enrollment APIs

### 🎨 User Interface

* Responsive design
* Modern UI
* Dark/light theme
* Navigation system
* Topic navigation
* Mobile-friendly components
* Reusable UI components

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router
* Axios
* React Hook Form
* shadcn/ui
* Lucide Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Nodemailer
* CORS
* Cookie Parser

### Development Tools

* Git
* GitHub
* ESLint
* Vitest
* Playwright

---

## 📁 Project Structure

```text
LearnWell/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── courseController.js
│   │   ├── enrollmentController.js
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── Course.js
│   │   ├── Enrollment.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── courseRouter.js
│   │   ├── enrollmentRoutes.js
│   │   └── userRouters.js
│   │
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── types/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   └── tsconfig.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/singhsaudharish/LearnWell.git
```

Go into the project:

```bash
cd LearnWell
```

---

## 🔧 Backend Setup

Go to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

EMAIL_USER=your_email
EMAIL_PASS=your_email_app_password

CLIENT_URL=http://localhost:5173
```

Start the backend:

```bash
npm start
```

For development with Nodemon:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

---

## 💻 Frontend Setup

Open another terminal and go to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file if your frontend uses environment variables:

```env
VITE_API_URL=http://localhost:5000
```

Start the development server:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

---

## 🔑 Environment Variables

### Backend

| Variable     | Description                        |
| ------------ | ---------------------------------- |
| `PORT`       | Backend server port                |
| `MONGO_URI`  | MongoDB connection string          |
| `JWT_SECRET` | Secret used for JWT authentication |
| `EMAIL_USER` | Email account used for OTP/email   |
| `EMAIL_PASS` | Email app password                 |
| `CLIENT_URL` | Frontend URL                       |

### Frontend

| Variable       | Description     |
| -------------- | --------------- |
| `VITE_API_URL` | Backend API URL |

**Never commit `.env` files or production secrets to GitHub.**

---

## 🔐 Authentication Flow

LearnWell uses JWT-based authentication.

```text
User
 │
 ├── Register
 │
 ├── Email OTP Verification
 │
 ├── Login
 │
 └── JWT Authentication
          │
          ▼
     Protected APIs
```

Password recovery follows:

```text
Forgot Password
       │
       ▼
   Email OTP
       │
       ▼
 Verify OTP
       │
       ▼
 Reset Password
```

---

## 🌐 API Structure

The backend provides API routes for:

```text
/api/auth
/api/courses
/api/enrollments
/api/users
```

Authentication-related endpoints include registration, login, email verification, OTP handling, password recovery, and password reset.

---

## 🧪 Testing

Frontend tests can be run using:

```bash
npm run test
```

Build the frontend:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🚀 Deployment

LearnWell can be deployed using:

### Frontend

**Vercel**

```text
React + Vite → Vercel
```

### Backend

**Render**

```text
Node.js + Express → Render
```

### Database

**MongoDB Atlas**

```text
MongoDB → MongoDB Atlas
```

Production architecture:

```text
                 LearnWell
                     │
          ┌──────────┴──────────┐
          │                     │
       Frontend              Backend
       Vercel                Render
          │                     │
          │              ┌──────┴──────┐
          │              │             │
          │          MongoDB        Email/OTP
          │           Atlas
          │
          └──────── API Requests ────────┘
```

---

## 🔒 Security

The project follows several security practices:

* Password hashing with bcrypt
* JWT authentication
* Protected API routes
* Environment variables for secrets
* CORS configuration
* Authentication middleware
* OTP-based verification

Never expose the following publicly:

```text
MONGO_URI
JWT_SECRET
EMAIL_PASS
API keys
Database credentials
```

---

## 📌 Future Improvements

Planned improvements may include:

* [ ] Student dashboard
* [ ] Course progress tracking
* [ ] Coding question progress
* [ ] User bookmarks
* [ ] Search functionality
* [ ] Course completion certificates
* [ ] Admin dashboard
* [ ] Course creation interface
* [ ] Coding submissions
* [ ] Leaderboard
* [ ] Online coding compiler
* [ ] Discussion/forum system
* [ ] Improved analytics
* [ ] Social login
* [ ] Custom domain
* [ ] Production monitoring

---

## 👨‍💻 Author

**Harish Singh Saud**

GitHub:

https://github.com/singhsaudharish

Project:

https://github.com/singhsaudharish/LearnWell

---

## 📄 License

This project is currently intended for educational and development purposes.

A formal open-source license can be added in the future.

---

## ⭐ Support

If you find LearnWell useful, consider giving the repository a ⭐ on GitHub.

**Learn • Practice • Build with LearnWell.**
