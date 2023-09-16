import React, {useState} from 'react'

function TextForm(props) {
 
    const handleOnClickUpper = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text converted to upper Case","success")
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleOnClickLower = () =>{
        setText(text.toLowerCase())
        props.showAlert("Text converted to Lower Case","success")
    }

    const clearText = () =>{
        setText("")
        props.showAlert("Text Cleared","warning")
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Processing text to speech","primary")
      }

    const [text,setText] = useState("Enter Value Here");

    let darkModeStyle = {
        backgroundColor : 'black',
        color : 'white'
    }
  return (
    <>
    <div className="container my-3" style={{backgroundColor: props.mode === 'light' ? 'white' : '#172e3f' , color: props.mode === 'light' ? 'black' : 'white'}}>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label my-3">{props.heading}</label>
        <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode === 'light' ? 'white' : '#172e3f' , color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
        <button className="btn btn-primary my-3" onClick={handleOnClickUpper}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleOnClickLower}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={speak}>Speak</button>
        </div>
    </div>
    <div className="container" style={{backgroundColor: props.mode === 'light' ? 'white' : '#172e3f', color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

export default TextForm
