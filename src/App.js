import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [Mode, setMode] = useState('light');  //whether dark mode is enabled or not
 const [alert, setAlert] = useState(null);

 const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);

 }
 const toggleMode = ()=>{
  if(Mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");

 }
}
return (
<>
<Navbar title = "TextUtils" mode = {Mode} toggleMode={toggleMode} />
<Alert alert ={alert}/>
<div className="container my-3 ">
<TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode = {Mode}/>
{/* <About/> */}
</div>
</>  
);
}

export default App;
