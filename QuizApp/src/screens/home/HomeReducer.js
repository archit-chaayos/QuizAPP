import {act} from 'react-test-renderer';

export default function HomeReducer(
  state = {numberOfQuestions: 0, level: 'randam', loading: false},
  action,
) {
  switch (action.type) {
    case 'SET_NO_OF_QUESTIONS':
      return {...state, numberOfQuestions: action.payload};
    case 'SET_LEVEL':
      return {...state, level: action.payload};
    case 'SET_LOADING':
      return {...state, loading: action.payload};
    default:
      return state;
  }
}