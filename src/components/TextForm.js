import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case","success");
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    
    const handleClearClick = ()=>{
        // console.log("clear text")
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared","success");
    }
    const handleCopy =() =>{
        console.log("I am a copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }

    const handleExtraSpaces = () => {
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces has been removed","success");
        
    }
    
    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the state
    // setText = "new text"; //correct way to change the state
    
  return (
    <>
    <div className="container" style = {{color: props.mode==='dark'? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark'? 'grey' : 'white',
        color: props.mode==='dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick ={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick ={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick ={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick ={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick ={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className = "containe my-3" style = {{color: props.mode==='dark'? 'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split (" ").length} words and {text.length} characters</p>
        <p>{0.008 *text.split (" ").length }Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
