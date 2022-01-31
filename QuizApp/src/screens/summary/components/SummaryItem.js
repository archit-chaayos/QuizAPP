import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {summaryItemStyles} from '../SummaryStyles';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const wrongAnswer = () => {
  return [summaryItemStyles.answer, summaryItemStyles.answerWrong];
};
const rightAnswer = () => {
  return [summaryItemStyles.answer, summaryItemStyles.answerRight];
};

export default class SummaryItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={summaryItemStyles.container}>
        <Text style={summaryItemStyles.question}>
          {this.props.summary.question}
        </Text>
        <Text
          style={
            this.props.summary.userAnswer === this.props.summary.correctAnswer
              ? rightAnswer()
              : wrongAnswer()
          }>
          Your Answer : {this.props.summary.userAnswer}
        </Text>
        <Text style={[summaryItemStyles.answer, summaryItemStyles.answerRight]}>
          Correct Answer : {this.props.summary.correctAnswer}
        </Text>
      </View>
    );
  }
}
