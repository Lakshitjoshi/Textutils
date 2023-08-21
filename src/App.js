
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';
import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  const [mode,setMode]=useState("light")
  const [alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about ="aboutUs" mode={mode} toggleMode ={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3"> 
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<Form heading  = "Enter Text To Analyze Below " mode={mode} showAlert={showAlert}/>}/>
    </Routes>
    
    </div> 
    </Router>
    </>
    
  );
}

export default App;

