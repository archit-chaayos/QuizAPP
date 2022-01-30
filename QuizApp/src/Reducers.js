import {combineReducers} from 'redux';
import HomeReducer from './screens/home/HomeReducer';
import QuizReducer from './screens/quiz/QuizReducer';
import SummaryReducer from './screens/summary/SummaryReducer';

export default combineReducers({
  HomeReducer,
  QuizReducer,
  SummaryReducer,
});
