# Authentication System - Sign Up & Sign In

This project demonstrates a full-stack authentication system with React frontend and Express backend using MongoDB.

## Project Structure

```
connecting/
├── backend/
│   ├── models/
│   │   └── User.js (MongoDB User model)
│   ├── routes/
│   │   └── auth.js (Authentication routes)
│   ├── .env (Environment variables)
│   ├── package.json
│   └── server.js
└── frontend/
    └── front_end/
        ├── src/
        │   ├── components/
        │   │   ├── SignUp.jsx
        │   │   ├── SignIn.jsx
        │   │   ├── Dashboard.jsx
        │   │   ├── Auth.css
        │   │   └── Dashboard.css
        │   ├── App.jsx (Router setup)
        │   └── main.jsx
        ├── package.json
        └── vite.config.js
```

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally or via MongoDB Atlas)
- npm

## Installation

### 1. Install Backend Dependencies

```bash
cd connecting/backend
npm install
```

### 2. Install Frontend Dependencies

```bash
cd ../frontend/front_end
npm install
```

## Configuration

### Backend (.env)

Update `connecting/backend/.env`:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth-app
JWT_SECRET=your_jwt_secret_key_change_in_production
```

**For MongoDB Atlas:**
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/auth-app?retryWrites=true&w=majority
```

## Running the Application

### 1. Start MongoDB

**Local MongoDB:**
```bash
mongod
```

**Or use MongoDB Atlas** (update .env with connection string)

### 2. Start Backend Server

```bash
cd connecting/backend
npm start
```

The backend will run on `http://localhost:5000`

### 3. Start Frontend Server

```bash
cd connecting/frontend/front_end
npm run dev
```

The frontend will run on `http://localhost:5173`

## Features

### Backend API Endpoints

**Sign Up**
- **URL:** `POST /api/auth/signup`
- **Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```
- **Response:** Returns JWT token and user info

**Sign In**
- **URL:** `POST /api/auth/signin`
- **Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
- **Response:** Returns JWT token and user info

**Get Current User**
- **URL:** `GET /api/auth/me`
- **Headers:** `Authorization: Bearer <token>`
- **Response:** Returns user info

### Frontend Routes

- `/` - Redirects to sign up
- `/signup` - Sign up page
- `/signin` - Sign in page
- `/dashboard` - User dashboard (protected)

## How It Works

1. **User Registration:**
   - User enters name, email, password
   - Frontend validates inputs
   - Backend hashes password using bcrypt
   - User saved to MongoDB
   - JWT token generated and returned

2. **User Login:**
   - User enters email and password
   - Backend verifies credentials
   - Password compared with stored hash
   - JWT token generated and returned

3. **Protected Access:**
   - Token stored in localStorage
   - Token sent with API requests
   - Dashboard shows user info from localStorage
   - Automatic redirect to sign in if not authenticated

## Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT token-based authentication
- ✅ CORS enabled for cross-origin requests
- ✅ Environment variables for sensitive data
- ✅ Password confirmation validation
- ✅ Email validation

## Testing

1. Open http://localhost:5173 in browser
2. Click "Sign Up" or use the form
3. Fill in details and submit
4. On success, redirected to dashboard
5. Dashboard shows your user information
6. Click "Logout" to return to sign in page

## Common Issues

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod`
- Check MONGO_URI in .env

### CORS Error
- Backend already has CORS enabled for localhost:5173
- If running on different port, update backend server.js

### Port Already in Use
- Backend: Change PORT in .env and .cors() origin
- Frontend: Change in vite.config.js

## Next Steps

- Add email verification
- Add password reset functionality
- Add role-based access control
- Add Google/GitHub OAuth
- Deploy to production

## License

MIT
