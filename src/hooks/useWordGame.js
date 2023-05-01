import { useState, useEffect, useRef } from "react"

function useWordGame(startingTime = 10) {

    const [text, setText] = useState("");
    const [countdown, setCountdown] = useState(startingTime);
    const [isGameRuning, setIsGameRuning] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const textareaRef = useRef(null);

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
        setCountdown(startingTime);
        setText("");
        textareaRef.current.disabled = false;  //force textarea enabled in order to focus() works
        textareaRef.current.focus();
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

    return [textareaRef, handleTextChange, text, isGameRuning, countdown, startGame, wordCount]

}

export default useWordGame;