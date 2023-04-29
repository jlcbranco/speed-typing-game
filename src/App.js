import React, { useState } from "react"

function App() {

    const [text, setText] = useState("");

    function handleTextChange(event) {
        const {value} = event.target;
        setText(value);
    }

    return (
        <main>
            <h1>How fast do you type?</h1>
            <textarea 
                placeholder="Type anything..."
                onChange={handleTextChange}
                value={text}
            />
            <h4>Time remaining:</h4>
            <button>Start</button>
            <h1>Word count:</h1>
        </main>
    );

}

export default App;
