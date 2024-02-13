import { useEffect, useState } from 'react'
import './App.css'
import { createPlayer } from "./API/index";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    createPlayer({
      name: "Rufus",
      breed: "Irish Setter",
    }).then((newPlayer) => {
      console.log(newPlayer);
    });
  }, []);

  return (
    <>
      <div>
        
      </div>
    </>
  )
}

export default App
