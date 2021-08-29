import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';
import { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor=`#01203f`;
    }
    else {
      setMode('light');
      document.body.style.backgroundColor=`#d1d2d3`;
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      <Navbar title="TextUtils" toggleMode = {toggleMode} mode={mode}/>
      <TextForm mode={mode}/>
      {/* <About/> */}
    </>
  );
}

export default App;
