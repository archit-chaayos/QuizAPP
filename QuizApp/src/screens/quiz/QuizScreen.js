import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import store from '../../Store';
import NewQuiz from './component/NewQuiz';
import ScoreBoard from './component/ScoreBoard';
import * as quizActions from './QuizActions';
import {connect} from 'react-redux';
import * as Navigation from '../../services/NavigationService';
import quizStyles from './QuizStyles';
import QuizStyles from './QuizStyles';

class QuizScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userAnswer: '',
      isCorrect: 0,
    };
  }
  check(choice) {
    if (choice === this.state.userAnswer) {
      if (this.state.isCorrect) {
        return [QuizStyles.choiceButtons, QuizStyles.choiceButtonsRight];
      }

      return [QuizStyles.choiceButtons, QuizStyles.choiceButtonsWrong];
    }
    return QuizStyles.choiceButtons;
  }

  answer(choice) {
    if (choice === this.props.answer) {
      this.setState({isCorrect: 1, userAnswer: choice});
    } else {
      this.setState({isCorrect: 0, userAnswer: choice});
    }
  }

  getNextQuestion() {
    setTimeout(() => {
      this.props.setData(
        this.props.question,
        this.state.userAnswer,
        this.props.answer,
        this.state.isCorrect,
      );
      if (this.props.total >= this.props.totalSelected) {
        this.props.quizOver();
      } else {
        this.props.nextQuestion(this.props.url);
      }
    }, 400);
  }

  render() {
    const showConfirmDialog = () => {
      return Alert.alert(
        'Are your sure?',
        'Are you sure you want to start Quiz from scratch',
        [
          // The "Yes" button
          {
            text: 'Yes',
            onPress: () => {
              this.props.newQuiz();
            },
          },
          // The "No" button
          // Does nothing but dismiss the dialog when tapped
          {
            text: 'No',
          },
        ],
      );
    };
    return (
      <View>
        {!this.props.loading ? (
          <View style={QuizStyles.mainContainer}>
            <ScoreBoard
              total={this.props.total}
              correctTotal={this.props.correctTotal}
            />
            <Text style={QuizStyles.questionContainer}>
              {this.props.question}
            </Text>

            {this.props.choices.map((choice, key) => {
              return (
                <TouchableOpacity
                  key={key}
                  style={this.check(choice)}
                  onPress={() => {
                    this.answer(choice);
                    this.getNextQuestion();
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#0D0D0D',
                    }}>
                    {choice}
                  </Text>
                </TouchableOpacity>
              );
            })}
            <NewQuiz onPress={showConfirmDialog} />
          </View>
        ) : (
          <View>
            <ActivityIndicator size="large" />
          </View>
        )}
      </View>
    );
  }
}
const mapStateToProps = store => {
  return {
    url: store.QuizReducer.url,
    question: store.QuizReducer.question,
    choices: store.QuizReducer.choices,
    answer: store.QuizReducer.answer,
    total: store.SummaryReducer.total,
    correctTotal: store.SummaryReducer.correct,
    loading: store.HomeReducer.loading,
    totalSelected: store.HomeReducer.numberOfQuestions,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setData: (question, userAnswer, correctAnswer, isCorrect) => {
      dispatch(
        quizActions.setData(question, userAnswer, correctAnswer, isCorrect),
      );
    },
    nextQuestion: url => {
      dispatch(quizActions.getData(url));
    },
    quizOver: () => {
      dispatch(quizActions.quizOver());
    },
    newQuiz: () => {
      dispatch(quizActions.newQuiz());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
