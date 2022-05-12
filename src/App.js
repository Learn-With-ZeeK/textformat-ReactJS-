import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import {
  BrowserRouter ,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  //Using State to Generate dismissable alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  // Using State to apply Dark Mode and Light Mode CSS
  const [Mode, setMode] = useState('dark');
  const [Mode1, setMode1] = useState('dark');


  const toggleMode = () => {
    if (Mode === 'dark') {
      setMode("light");
      setMode1("dark");
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode is Enabled', 'Success:')

    }
    else {
      setMode("dark");
      setMode1("light")
      document.body.style.backgroundColor = 'blue';
      showAlert('Dark Mode is Enabled', 'Success:')
    }

  }

  return (
    
    <BrowserRouter>
     

        <Navbar mode={Mode} mode1={Mode1} ToggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
         
          <Route  path="/about"element={<About />}>
          </Route>

          <Route  path="/"element={ <TextForm heading="Enter your text to analyse" mode={Mode} mode1={Mode1} ToggleMode={toggleMode} showAlert={showAlert} />}>
          </Route>
       
       </Routes>



      
    </BrowserRouter>

  );
}


export default App;
