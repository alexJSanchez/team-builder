import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';

function App() {

  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({name: '',email: '',role: ''});

  return (
    <div className="App">
      <h1>Team Builder App</h1>
    </div>
  );
}

export default App;
