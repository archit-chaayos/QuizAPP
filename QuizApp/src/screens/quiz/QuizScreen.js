import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import store from '../../Store';
import * as quizActions from './QuizActions';
import {connect} from 'react-redux';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
import {StyleSheet} from 'react-native';

const QuizStyles = StyleSheet.create({
  choiceButtons: {
    margin: 10,
    width: '42%',
    height: '10%',

    borderStyle: 'solid',
    borderWidth: 1,
    textAlign: 'center',
    padding: 20,
  },
  choiceButtonsWrong: {
    margin: 10,
    width: '42%',
    height: '10%',

    borderStyle: 'solid',
    borderWidth: 1,
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#FF6666',
  },
  choiceButtonsRight: {
    margin: 10,
    width: '42%',
    height: '10%',

    borderStyle: 'solid',
    borderWidth: 1,
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#38CC77',
  },
});

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
          return QuizStyles.choiceButtonsRight;
        }
        return QuizStyles.choiceButtonsWrong;
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
      }, 500);
    };
    return (
      <View>
        {!this.props.loading ? (
          <View
            style={{
              marginTop: '20%',
              alignItems: 'center',
              height: screenHeight,
              width: screenWidth,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <Text>
              {' '}
              {this.props.correctTotal}/{this.props.total}
            </Text>
            <Text
              style={{
                width: '100%',
                borderStyle: 'solid',
                borderWidth: 1,
                textAlign: 'center',
                height: '20%',
                textAlignVertical: 'center',
                marginTop: '10%',
              }}>
              {this.props.question}
            </Text>
            {this.props.choices.map(choice => {
              return (
                <TouchableOpacity
                  style={check(choice)}
                  onPress={() => {
                    answer(choice);
                    getNextQuestion();
                  }}>
                  <Text>{choice}</Text>
                </TouchableOpacity>
              );
            })}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
