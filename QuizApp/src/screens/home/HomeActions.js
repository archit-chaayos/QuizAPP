import * as quizActions from '../quiz/QuizActions';
export const start = (noOfQuestions, level) => {
  return dispatch => {
    dispatch({type: 'SET_LOADING', payload: true});
    dispatch({type: 'SET_NO_OF_QUESTIONS', payload: noOfQuestions});
    dispatch({type: 'SET_LEVEL', payload: level});

    const url = `https://opentdb.com/api.php?amount=1&difficulty=${level}&type=multiple`;
    dispatch({type: 'SET_URL', payload: url});
    dispatch(quizActions.getData(url));
  };
};
