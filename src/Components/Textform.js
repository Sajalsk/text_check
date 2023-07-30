import React, {useState} from 'react'

export default function Textform(props) {
   
     const UpperCase = ()=>{
        // console.log("Upper Case Clicked" + text);
        // alert("Upper Case Clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase" , "success")
    }

    const LowerCase = ()=>{
        // console.log("Upper Case Clicked" + text);
        // alert("Upper Case Clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase" , "success")
    }

    const handleonchange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
       
    }

    const handleoncopy = (event)=>{
        var text = document.getElementById("myBox");
        text.select();
        {navigator.clipboard.writeText(text.value)}
        props.showAlert("Copied To Clipboard" , "success")
    }

    const handleonclear = (event)=>{
        let newText = '';
        setText(newText)
        props.showAlert("Cleared Text" , "danger")
    }

    const handleonspaces = (event)=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Aligned" , "warning")
    }

    const [text, setText] = useState("");
    // text=("NewText");
    // setText=("NewText");

    return (
        <>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
           <h2>{props.Heading}</h2>
    <div className="mb-5">
    <textarea className="form-control"  value={text} onChange={handleonchange}  style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={UpperCase}>Convert To Upper-Case</button>
    <button className="btn btn-primary mx-2" onClick={LowerCase}>Convert To Lower-Case</button>
    <button className="btn btn-success mx-2" onClick={handleoncopy}>Copt The Text</button>
    <button className="btn btn-danger mx-2" onClick={handleonclear}>Clear</button>
    <button className="btn btn-secondary mx-2" onClick={handleonspaces}>Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.08 * text.split(" ").length} Minutes Read </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Write Something To Preview"}</p>
    </div>
        </>
    )
}
