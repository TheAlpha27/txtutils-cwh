import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      <Navbar title="TextUtils" />
      <TextForm />
      {/* <About/> */}
    </>
  );
}

export default App;
