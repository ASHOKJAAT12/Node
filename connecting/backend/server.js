import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/auth-app';

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Vite default port
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);

app.get('/github/data', (req, res) => {
    const data = 
        {
            "login": "ASHOKJAAT12",
            "id": 153806900,
            "node_id": "U_kgDOCSroNA",
            "avatar_url": "https://avatars.githubusercontent.com/u/153806900?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ASHOKJAAT12",
            "html_url": "https://github.com/ASHOKJAAT12",
            "followers_url": "https://api.github.com/users/ASHOKJAAT12/followers",
            "following_url": "https://api.github.com/users/ASHOKJAAT12/following{/other_user}",
            "gists_url": "https://api.github.com/users/ASHOKJAAT12/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ASHOKJAAT12/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ASHOKJAAT12/subscriptions",
            "organizations_url": "https://api.github.com/users/ASHOKJAAT12/orgs",
            "repos_url": "https://api.github.com/users/ASHOKJAAT12/repos",
            "events_url": "https://api.github.com/users/ASHOKJAAT12/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ASHOKJAAT12/received_events",
            "type": "User",
            "user_view_type": "public",
            "site_admin": false,
            "name": "Ashok Jaat",
            "company": null,
            "blog": "vedicgharat.vercel.app",
            "location": "Jaipur",
            "email": null,
            "hireable": null,
            "bio": "Welcome",
            "twitter_username": null,
            "public_repos": 12,
            "public_gists": 0,
            "followers": 3,
            "following": 5,
            "created_at": "2023-12-14T07:40:49Z",
            "updated_at": "2026-04-28T17:21:06Z"
        }
    res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

