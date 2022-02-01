import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {homeStyles} from '../HomeStyles';

export default class LevelBar extends React.Component {
  constructor() {
    super();
    this.state = {
      level: 'easy',
    };
  }
  render() {
    return (
      <TouchableOpacity
        style={
          this.props.level === this.props.name
            ? [homeStyles.levelButtonsNormal, homeStyles.levelButtonsPress]
            : homeStyles.levelButtonsNormal
        }
        onPress={() => {
          this.props.onPress(this.props.name);
        }}>
        <Text>{this.props.name.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
}
