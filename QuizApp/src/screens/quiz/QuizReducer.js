export default function QuizReducer(
  state = {question: '', choices: [], answer: '', url: ''},
  action,
) {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        question: action.payload.question,
        choices: action.payload.choices,
        answer: action.payload.answer,
      };
    case 'SET_URL':
      return {
        ...state,
        url: action.payload,
      };
    default:
      return state;
  }
}
