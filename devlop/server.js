import 'dotenv/config';

import express from 'express';
const app = express();

const ports = Number(process.env.PORT) || 3000;


app.get('/',(req,res)=>{
    res.send("hello this is my first try");
});

app.get('/githubdata',(req,res)=>{
    res.send({
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
  "public_repos": 11,
  "public_gists": 0,
  "followers": 3,
  "following": 5,
  "created_at": "2023-12-14T07:40:49Z",
  "updated_at": "2026-04-28T17:21:06Z"
})
});

app.listen(ports,()=>{
    console.log(`the port is active ${ports}`);
});