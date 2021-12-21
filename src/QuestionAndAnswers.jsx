import React from 'react';

function QuestionAndAnswers(props) {

    const questionsAndAnswers = props.questionsAndAnswers;

    return (
        <div>
            <h2>Q & A</h2>
            {questionsAndAnswers.map(el =>
                <>
                    <p>
                        <b>Question:</b> {el.question}
                    </p>
                    <p>
                        Answer: {el.answer}
                    </p>
                </>
            )}

        </div>
    );
}

export default QuestionAndAnswers;