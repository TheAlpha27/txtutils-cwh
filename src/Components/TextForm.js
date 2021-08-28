import React from 'react'
import { useState } from 'react'
export default function TextForm() {
    const [text, setText] = useState("Enter text here");
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    return (
        <div className="container">
            <h1 className="my-2">Enter text for analysis</h1>
            <div className="mb-3 my-2">
                <textarea value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>To Upper Case</button>
        </div>
    )
}
