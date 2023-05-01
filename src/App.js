import React, { useState, useEffect, useRef } from "react"

function App() {

    const STARTING_TIME = 5;
    const [text, setText] = useState("");
    const [countdown, setCountdown] = useState(STARTING_TIME);
    const [isGameRuning, setIsGameRuning] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const inputRef = useRef(null);

    function handleTextChange(event) {
        const {value} = event.target;
        setText(value);
    }

    function handleCountWords(text) {
        const wordsArr = text.trim().split(" ");
        return wordsArr.filter(word => word !== "").length;
    }

    function startGame() {
        setIsGameRuning(true);
        setCountdown(STARTING_TIME);
        setText("");
        inputRef.current.disabled = false;  //force textarea enabled in order to focus() works
        inputRef.current.focus();
    }

    function endGame() {
        setIsGameRuning(false);
        setWordCount(handleCountWords(text));
    }

    useEffect(() => {
            if(isGameRuning && countdown > 0) {
                setTimeout(() => {
                    setCountdown(time => time - 1)
                }, 1000);
            } else if(countdown === 0) {
                endGame();
            };
    }, [countdown, isGameRuning]);

    return (
        <main>
            <h1>How fast do you type?</h1>
            <textarea 
                ref={inputRef}
                onChange={handleTextChange}
                value={text}
                disabled={!isGameRuning} 
            />
            <h4>Time remaining: {countdown}</h4>
            <button 
                disabled={isGameRuning} 
                onClick={startGame}
            >Start
            </button>
            <h1>Word count:{wordCount}</h1>
        </main>
    );

}

export default App;
