import React,  {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=> {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase", "success")
  }
  const handleLoClick = ()=> {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lowercase", "success")
  }
  const handleClearClick = ()=> {
    let newText = ""
    setText(newText)
    props.showAlert("TextBox Cleared", "success")
  }
  const handleOnChange = (event)=> {
    setText(event.target.value);
  }
  const handleCopy= ()=>{
    navigator.clipboard.writeText(text)
    props.showAlert("Text Copied", "success")
  }
  const handleExtraSpaces= ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed", "success")
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color : props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-2">
            <label htmlFor="myBox" className="form-label"></label>
            <textarea className="form-control" style={{backgroundColor : props.mode==='light'?'white':'rgb(36 74 104)', color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className='container my-2' style={{color : props.mode==='light'?'black':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} characters</p>
      <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
