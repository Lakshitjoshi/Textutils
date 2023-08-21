import React,{useState} from 'react'

export default function Form(props) {
    const [text, setText] = useState("");
    const handleClick=()=>{
        // console.log("uppercase was clicked")
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase","success")
    }

    const handleloClick=()=>{
      let newtext = text.toLowerCase();
      setText(newtext)
      props.showAlert("Converted to lowercase","success")
    }
    const handleOnChange=(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    const handleClearClick=()=>{
      let newtext = "";
      setText(newtext)
      props.showAlert("Text cleared","success")
    }
    const handleCopyClick = ()=>{
      var textArea = document.getElementById("myBox")
      textArea.select();
      navigator.clipboard.writeText(textArea.value)
      document.getSelection().removeAllRanges()
      props.showAlert("Copied to clipboard","success")
    }

    const handleExspClick = ()=>{
      let newtext = text.split(/[ ]+/)
      setText(newtext.join(" "))
      props.showAlert("Extra spaces has been removed","success")
    }

  return (
    <>
    <div className="container" style={{ color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3  " >
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==="dark"?"#042743":"white" , color:props.mode==="dark"?"white":"black"}}></textarea>
        
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClick}>To Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>To Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy</button> 
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExspClick}>Remove Extra Spaces</button> 
    </div>

    <div className="container my-3"  style={{backgroundColor:props.mode==="dark"?"#042743":"white" , color:props.mode==="dark"?"white":"black"}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((word)=>{return word.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((word)=>{return word.length!==0}).length} minutes to read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here."}</p>
        
    </div>
    </>
   
  )
}
