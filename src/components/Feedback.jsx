import React from 'react';

function Feedback({ feedback, total, positivePercentage }) {
    return (
        <div>
            <h2>Feedback Summary</h2>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total feedback: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </div>
    );
}

export default Feedback;


