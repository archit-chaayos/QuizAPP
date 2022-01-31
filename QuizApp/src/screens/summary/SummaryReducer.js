export default function SummaryReducer(
  state = {summary: [], total: 0, correct: 0},
  action,
) {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        summary: [
          ...state.summary,
          {
            question: action.payload.question,
            userAnswer: action.payload.userAnswer,
            correctAnswer: action.payload.correctAnswer,
          },
        ],
        total: state.total + 1,
        correct: state.correct + action.payload.correct,
      };
    case 'ERASE_DATA':
      return {
        summary: [],
        total: 0,
        correct: 0,
      };
    default:
      return state;
  }
}

//summary : [{ question : '' , userAnswer : '' , correctAnswer : ''}]
