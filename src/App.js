import React, { useState, useEffect } from "react"

function App() {

    const [text, setText] = useState("");
    const [countdown, setCountdown] = useState(3);
    const [isGameRuning, setIsGameRuning] = useState(false);

    function handleTextChange(event) {
        const {value} = event.target;
        setText(value);
    }

    function handleCountWords(text) {
        const wordsArr = text.trim().split(" ");
        return wordsArr.filter(word => word !== "").length;
    }

    useEffect(() => {
            if(isGameRuning && countdown > 0) {
                setTimeout(() => {
                    setCountdown(time => time - 1)
                }, 1000);
            } else if(countdown === 0) {
                setIsGameRuning(false);
            };
    }, [countdown, isGameRuning]);

    return (
        <main>
            <h1>How fast do you type?</h1>
            <textarea 
                placeholder="Type anything..."
                onChange={handleTextChange}
                value={text}
            />
            <h4>Time remaining: {countdown}</h4>
            <button onClick={() => setIsGameRuning(true)}>Start</button>
            <h1>Word count:</h1>
        </main>
    );

}

export default App;
