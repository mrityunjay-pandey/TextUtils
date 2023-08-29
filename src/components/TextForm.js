import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    
    const handleClearClick = ()=>{
        // console.log("clear text")
        let newText = '';
        setText(newText)
    }
    const handleCopy =() =>{
        console.log("I am a copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    
    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the state
    // setText = "new text"; //correct way to change the state
    
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick ={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick ={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick ={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick ={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick ={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className = "containe my-3">
        <h2>Your text summary</h2>
        <p>{text.split (" ").length} words and {text.length} characters</p>
        <p>{0.008 *text.split (" ").length }Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
