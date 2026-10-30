# QurbaniHat – Livestock Booking Platform

## 🌐 Live Website
https://qurbani-hat-delta.vercel.app

## 📌 Project Purpose
QurbaniHat is a livestock booking web application that allows users to explore and book animals for Qurbani. Users can browse animals, view detailed information, create accounts, log in securely, and submit booking requests.

## 🚀 Key Features
- Browse available livestock, including cows and goats
- View detailed information about each animal
- Register and log in using email and password
- Sign in with a real Google account using Google OAuth
- Secure authentication using Better Auth
- Protected routes for animal details and user profiles
- View and update user profile information
- Submit livestock booking requests
- Sort animals by price
- Responsive design
- Toast notifications for user actions
- Logout functionality

## 🛠️ Technologies Used

**Frontend**
- React
- Vite
- React Router DOM
- React Toastify
- React Icons
- Animate.css

**Backend**
- Node.js
- Express.js
- Better Auth
- PostgreSQL (Neon)
- pg
- CORS
- dotenv

## 🔐 Authentication
QurbaniHat uses Better Auth for real user authentication.

Supported authentication methods:
- Email and password registration
- Email and password login
- Google OAuth login
- Persistent user sessions
- Secure logout
- User profile updates

Authentication data is stored in a Neon PostgreSQL database.

## ☁️ Deployment
- Frontend: Vercel
- Backend: Render
- Database: Neon PostgreSQL

## 💻 Run Locally

1. Clone the repository.
2. Run `npm install`.
3. Create a `.env.local` file using `.env.example` as a reference.
4. Configure the database connection, Better Auth secret, authentication URLs, and Google OAuth credentials.
5. Run `npm run db:migrate` to create the authentication tables.
6. Start the backend using `npm run server`.
7. Open another terminal and start the frontend using `npm run dev`.

## 📦 Booking System
Users can submit booking requests by providing their contact information.

The application displays a success notification after submission. Booking requests are currently demonstrated through the frontend and are not permanently stored in the database.

## 📁 Repository
https://github.com/nelomelma/qurbani-hat
