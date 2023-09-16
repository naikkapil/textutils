import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, 
  } from 'react-router-dom';

import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [Mode,SetMode] = useState('light')
  const [alert,setAlert] = useState('null')

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode = () =>{
    if(Mode === 'dark'){
      SetMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode Enabled",'warning')
      document.title = "Textutils Light"
    }
    else{
      SetMode('dark')
      document.body.style.backgroundColor = '#172e3f'
      showAlert("Dark mode Enabled",'danger')
      document.title = "Textutils Dark"
    }
  }
  return (
  <Router>
  <>
  <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} about="About"/>
  <Alert alert={alert}/>
  <Routes>
  <Route path='/' element={<TextForm heading="Enter the text to analyze" mode={Mode} showAlert={showAlert}/>}/>
  <Route path='/about' element={<About/>}/>
  </Routes>
  </>
  </Router>
  );
}

export default App;
