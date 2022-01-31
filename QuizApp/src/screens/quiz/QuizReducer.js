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
    case 'ERASE_DATA':
      return {
        question: '',
        choices: [],
        url: '',
        answer: '',
      };
    default:
      return state;
  }
}
