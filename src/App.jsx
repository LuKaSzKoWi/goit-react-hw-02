// 

import React, { useState } from 'react';
import Feedback from './components/Feedback';
import Options from './components/Options';

function App() {
    // Stan przechowujący liczbę opinii
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    // Funkcja do aktualizacji liczby ocen
    const handleFeedback = (type) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [type]: prevFeedback[type] + 1,
        }));
    };

    // Obliczanie całkowitej liczby opinii i procentu pozytywnych opinii
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positivePercentage = totalFeedback
        ? Math.round((feedback.good / totalFeedback) * 100)
        : 0;

    return (
        <div>
            <h1>Sip Happens Café</h1>
            <p>Please leave your feedback about our service by selecting one of the options below.</p>
            <Options onLeaveFeedback={handleFeedback} />
            <Feedback
                feedback={feedback}
                total={totalFeedback}
                positivePercentage={positivePercentage}
            />
        </div>
    );
}

export default App;
