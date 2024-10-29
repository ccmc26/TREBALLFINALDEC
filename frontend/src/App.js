import './App.css';
import React, { useEffect } from 'react';

function App() {
  const getUsers = () =>{
    fetch("/api/users")
     .then(res => res.json())
     .then(json => console.log(json))
  }

  useEffect(() =>{
    getUsers()
  })

  return (
    <div className="App">
      <p>Hola igualment</p>
    </div>
  );
}

export default App;
