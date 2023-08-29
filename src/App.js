import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
    // setInterval(() =>{
    // document.title = 'TextUtils is Amazing Mode';
    // },1300);
    // setInterval(()=>{
    //   document.title = 'Install TextUtils Now';
    // },1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");

 }
}
return (
<>
<Router>
<Navbar title = "TextUtils" mode = {Mode} toggleMode={toggleMode} />
<Alert alert ={alert}/>
<div className="container my-3 ">
<Switch>
      <Route exact path ="/about">
      <About/>
      </Route>
      <Route exact path = "/">
      <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode = {Mode}/>
      </Route>
</Switch>
</div>
</Router>
{/* <About/> */}
</>  
);
}

export default App;
