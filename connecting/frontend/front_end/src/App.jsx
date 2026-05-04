import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios';
function App() {
  const [user,setuser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try{
        
        const res = await fetch('/github/data');
        
        if(!res.ok){
          throw new Error("api error");
        }

        const data = await res.json();

        if(!data || !data.name){
          throw new Error("wrong data data can not to be json");
        }

        setuser(data) 
      }catch(err){
        console.log(err.message);
      }
    };

    fetchData();
  }, [])

  return (
    <>
      <h1>hello to my new project</h1>
      <h1>{user.name}</h1>
    </>
    )
}

export default App
