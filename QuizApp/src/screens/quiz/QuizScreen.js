import React from 'react';
import {
  ActivityIndicator,
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
  render() {
    const check = choice => {
      if (choice === this.state.userAnswer) {
        if (this.state.isCorrect) {
          return [QuizStyles.choiceButtons, QuizStyles.choiceButtonsRight];
        }

        return [QuizStyles.choiceButtons, QuizStyles.choiceButtonsWrong];
      }
      return QuizStyles.choiceButtons;
    };
    const answer = choice => {
      if (choice === this.props.answer) {
        this.setState({isCorrect: 1, userAnswer: choice});
      } else {
        this.setState({isCorrect: 0, userAnswer: choice});
      }
    };
    const getNextQuestion = () => {
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
                  style={check(choice)}
                  onPress={() => {
                    answer(choice);
                    getNextQuestion();
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
            <View style={quizStyles.newQuiz}>
              <NewQuiz onPress={this.props.newQuiz} />
            </View>
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
