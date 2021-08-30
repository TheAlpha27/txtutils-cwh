import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';
import { useState } from 'react'
import Alert from './Components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor=`#01203f`;
      showAlert('success', 'Dark mode enabled');
      document.title = 'TextUtils- Dark';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor=`#d1d2d3`;
      showAlert('success', 'Dark mode disabled');
      document.title = 'TextUtils- Light';
    }
  }

  const showAlert = (type, message)=>{
    setAlert({
      type: type,
      msg: message
    });
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      <Navbar title="TextUtils" toggleMode = {toggleMode} mode={mode}/>
      <Alert alert={alert}/>
      <TextForm mode={mode} showAlert={showAlert}/>
      {/* <About/> */}
    </>
  );
}
export default App;
