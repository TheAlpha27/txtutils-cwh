import React from 'react'
import { useState } from 'react'
export default function TextForm() {
    const [text, setText] = useState("");
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCopy = () => {
        let text = document.getElementById("area");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    return (
        <>
            <div className="container">
                <h1 className="my-2">Enter text for analysis</h1>
                <div className="mb-3 my-2">
                    <textarea value={text} onChange={handleOnChange} className="form-control" id="area" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>To Upper Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>To Lower Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container">
                <h2>Number of words: </h2>
                {text.split(' ').length}
                <h2>Number of characters: </h2>
                {text.length}
            </div>
        </>
    )
}
