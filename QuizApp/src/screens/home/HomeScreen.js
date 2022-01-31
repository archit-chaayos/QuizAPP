import React from 'react';
import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import LevelBar from './components/LevelBar';
import {start} from './HomeActions';
import {homeStyles} from './HomeStyles';
import * as HomeActions from './HomeActions';

class HomeScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      noOfQuestions: '10',
    };
  }

  render() {
    const start = () => {
      this.props.start(this.state.noOfQuestions, this.props.level);
    };
    return (
      <View style={homeStyles.mainContainer}>
        {!this.props.loading ? (
          <View style={homeStyles.mainContainer}>
            <TextInput
              style={homeStyles.inputContainer}
              placeholder="No of Questions (default is 10)"
              value={this.state.noOfQuestions}
              keyboardType="numeric"
              onChangeText={text => {
                this.setState({noOfQuestions: text});
              }}
            />
            <View style={homeStyles.levelContainer}>
              {/* <TouchableOpacity
                style={
                  this.state.level == 'easy'
                    ? homeStyles.levelButtonsPress
                    : homeStyles.levelButtonsNormal
                }
                onPress={() => {
                  this.setState({level: 'easy'});
                }}>
                <Text>EASY</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.level == 'medium'
                    ? homeStyles.levelButtonsPress
                    : homeStyles.levelButtonsNormal
                }
                onPress={() => {
                  this.setState({level: 'medium'});
                }}>
                <Text>MEDIUM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.level == 'hard'
                    ? homeStyles.levelButtonsPress
                    : homeStyles.levelButtonsNormal
                }
                onPress={() => {
                  this.setState({level: 'hard'});
                }}>
                <Text>HARD</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.level == 'randam'
                    ? homeStyles.levelButtonsPress
                    : homeStyles.levelButtonsNormal
                }
                onPress={() => {
                  this.setState({level: 'randam'});
                }}>
                <Text>RANDAM</Text>
              </TouchableOpacity>
            </View>
            <View style={homeStyles.loginContainer}>
              <TouchableOpacity style={homeStyles.startButton} onPress={start}>
                <Text>Start Quiz</Text>
              </TouchableOpacity>*/}
              <LevelBar
                level={this.props.level}
                name="easy"
                onPress={this.props.setLevel}
              />
              <LevelBar
                level={this.props.level}
                name="medium"
                onPress={this.props.setLevel}
              />
              <LevelBar
                level={this.props.level}
                name="hard"
                onPress={this.props.setLevel}
              />
              <LevelBar
                level={this.props.level}
                name="randam"
                onPress={this.props.setLevel}
              />
            </View>
            <View style={homeStyles.loginContainer}>
              <TouchableOpacity style={homeStyles.startButton} onPress={start}>
                <Text>Start Quiz</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <ActivityIndicator size={'large'} />
          </View>
        )}
      </View>
    );
  }
}

function mapStateToProps(store) {
  return {
    loading: store.HomeReducer.loading,
    level: store.HomeReducer.level,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    start: (numberOfQuestions, level) => {
      dispatch(HomeActions.start(numberOfQuestions, level));
    },
    setLevel: level => {
      dispatch({type: 'SET_LEVEL', payload: level});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
