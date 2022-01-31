import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as Navigation from '../../../services/NavigationService';
import QuizStyles from '../QuizStyles';

export default class ScoreBoard extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          style={QuizStyles.scoreBox}
          onPress={() => {
            Navigation.navigate('Summary');
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            <Text style={{color: '#38CC77'}}>{this.props.correctTotal}</Text>
            <Text
              style={{
                color: '#0D0D0D',
              }}>
              /{this.props.total}
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
