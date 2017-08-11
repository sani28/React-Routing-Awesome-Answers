import React from 'react';
import QuestionSummary from './QuestionSummary'
function QuestionList (props) {
  const {questions = []} = props;

  return (
    <div className='QuestionList'>
      {
        questions.map(
          question => <QuestionSummary key={question.id} {...question} />
        )
      }
    </div>
  );
}

export default QuestionList;
