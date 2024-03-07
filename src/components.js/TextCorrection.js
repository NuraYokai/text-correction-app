import React, { useState } from 'react';
import './TextCorrection.css'; // Import the CSS file

const TextCorrection = () => {
    const [textToCorrect, setTextToCorrect] = useState('');
    const [correctedText, setCorrectedText] = useState('');

    const correctText = async () => {
        const apiUrl = `https://api.textgears.com/correct?text=${encodeURIComponent(textToCorrect)}&language=en-GB&key=Wz2Hm6SjWxcapALU`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.status) {
                setCorrectedText(data.response.corrected);
            } else {
                alert("An error occurred while correcting the text.");
            }
        } catch (error) {
            alert("Failed to connect to the TextGears API.");
        }
    };

    return (
        <div className="text-correction-container">
            <h1 className="text-correction-title">Text Correction</h1>
            <input
                className="text-input"
                type="text"
                value={textToCorrect}
                onChange={(e) => setTextToCorrect(e.target.value)}
                placeholder="Enter the text you want to correct"
            />
            <button className="correct-button" onClick={correctText}>Correct Text</button>
            {correctedText && <p className="corrected-text">{correctedText}</p>}
        </div>
    );
};

export default TextCorrection;
