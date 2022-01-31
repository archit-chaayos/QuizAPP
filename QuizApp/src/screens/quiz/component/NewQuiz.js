import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import QuizStyles from '../QuizStyles';

export default class NewQuiz extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={QuizStyles.newQuiz}>
          <Text style={{fontWeight: 'bold', color: '#0D0D0D'}}>
            Start New Quiz
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
