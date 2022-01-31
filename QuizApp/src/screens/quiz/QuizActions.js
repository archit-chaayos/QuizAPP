import {navigate} from '../../services/NavigationService';
import * as Navigate from '../../services/NavigationService';
import SummaryReducer from '../summary/SummaryReducer';

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
export const getData = url => {
  return dispatch => {
    dispatch({type: 'SET_LOADING', payload: true});
    //console.log(url);
    fetch(url)
      .then(data => {
        return data.json();
      })
      .then(response => {
        let tempArray = [
          ...response.results[0].incorrect_answers,
          response.results[0].correct_answer,
        ];
        tempArray = shuffleArray(tempArray);
        // console.log('resposne = ', response);
        dispatch({
          type: 'SET_DATA',
          payload: {
            question: response.results[0].question,
            choices: tempArray,
            answer: response.results[0].correct_answer,
          },
        });
        dispatch({type: 'SET_LOADING', payload: false});
        // TODO navigate to quiz screen
        Navigate.navigate('Quiz');
      })
      .catch(error => {
        // console.log('error = ', error);
      });
  };
};

//TODO write setdata function to set data in summary reducer after user click on next button

export const setData = (question, userAnswer, correctAnswer, correct) => {
  return dispatch => {
    dispatch({type: 'SET_LOADING', payload: true});
    dispatch({
      type: 'SET_USER_DATA',
      payload: {
        question: question,
        userAnswer: userAnswer,
        correctAnswer: correctAnswer,
        correct: correct,
      },
    });
  };
};

export const quizOver = () => {
  return dispatch => {
    dispatch({type: 'SET_LOADING', payload: false});
    Navigate.navigate('Summary');
  };
};

export const newQuiz = () => {
  return dispatch => {
    dispatch({type: 'ERASE_DATA'});
    Navigate.navigate('Home');
  };
};
