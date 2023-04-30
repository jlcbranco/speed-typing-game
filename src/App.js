import React, { useState, useEffect } from "react"

function App() {

    const [text, setText] = useState("");
    const [countdown, setCountdown] = useState(3);

    function handleTextChange(event) {
        const {value} = event.target;
        setText(value);
    }

    function handleCountWords(text) {
        const wordsArr = text.trim().split(" ");
        return wordsArr.filter(word => word !== "").length;
    }

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            countdown !== 0 ? setCountdown(time => time - 1) : clearTimeout(timeoutID);
        }, 1000);
    }, [countdown]);

    return (
        <main>
            <h1>How fast do you type?</h1>
            <textarea 
                placeholder="Type anything..."
                onChange={handleTextChange}
                value={text}
            />
            <h4>Time remaining: {countdown}</h4>
            <button onClick={() => console.log(handleCountWords(text))}>Start</button>
            <h1>Word count:</h1>
        </main>
    );

}

export default App;
