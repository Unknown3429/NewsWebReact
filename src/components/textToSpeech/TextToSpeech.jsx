import React, { useState, useEffect } from "react";
import { BsFillPlayFill, BsFillStopFill } from "react-icons/bs"
import { FaPause } from "react-icons/fa"

import "./style.css"

const TextToSpeech = ({ text }) => {
    const [isPaused, setIsPaused] = useState(false);
    const [isResume, setIsResume] = useState(false);
    const [utterance, setUtterance] = useState(null);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);

        setUtterance(u);

        return () => {
            synth.cancel();
        };
    }, [text]);

    const handlePlay = () => {
        const synth = window.speechSynthesis;

        if (isPaused) {
            synth.resume();
        }

        synth.speak(utterance);
        let r = setInterval(() => {
            // console.log(speechSynthesis.speaking);
            if (!speechSynthesis.speaking) {
                clearInterval(r);
            } else {
                speechSynthesis.pause();
                speechSynthesis.resume();
            }
        }, 14000);

        setIsPaused(false);
    };

    const handlePause = () => {
        const synth = window.speechSynthesis;

        synth.pause();

        setIsPaused(true);
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;

        synth.cancel();

        setIsPaused(false);
    };

    return (
        <div className="textToSpeech">
            {/* <button onClick={handlePlay}>{isPaused ? "Resume" : "Play"}</button> */}
            {/* <button onClick={handlePause}>Pause</button> */}
            {/* <button onClick={handleStop}>Stop</button> */}
            <h4>Listen Article</h4>
            <div className="textSpeech">
            <BsFillPlayFill className="icons BsFillPlayFill" onClick={handlePlay} />
            <FaPause className="icons" onClick={handlePause} />
            <BsFillStopFill className="icons BsFillStopFill" onClick={handleStop} />
            </div>
        </div>
    );
};

export default TextToSpeech;