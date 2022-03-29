import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';

function App() {

  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({name: '',email: '',role: ''});

 const onsubmit = () => {
  setMembers([values, ...members]);
  }

  const onchange = (name, value) => {
    setValues({...values, [name]: value})
  }
  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <Form values="values"></Form>
    </div>
  );
}

export default App;
