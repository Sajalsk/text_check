import "./App.css";
import React, { useState} from "react";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import Alert from "./Components/Alert";

import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";

function App() 
{
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode is Enable", "success");
      document.title = "Text-Utilis Dark Mode";

      // setInterval(() => {
      //   document.title = 'Text- Utlis is Amazing'
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install it Now Text- Utilis'
      // }, 1500);
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enable", "success");
      document.title = "Text-Utilis Light Mode";
    }
  };


return (
    <>
    <BrowserRouter>
    <Navbar title="Text-Utilis" aboutus="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
      <Routes>
          <Route exact path="/" element={<Textform showAlert={showAlert} Heading="Enter your text below" mode={mode}/>}/>
          <Route exact path="/about" element={<About/>} />
          {/* <Textform showAlert={showAlert} Heading="Enter your text below" mode={mode} /> */}
      </Routes>
      </div>
   </BrowserRouter>

    </>
  );
}

export default App;
