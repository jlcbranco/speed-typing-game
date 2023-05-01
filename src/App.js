import React from "react"
import useWordGame from "./hooks/useWordGame";

function App() {

    const [
        inputRef, 
        handleTextChange, 
        text, 
        isGameRuning, 
        countdown, 
        startGame, 
        wordCount
    ] = useWordGame(7);

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
