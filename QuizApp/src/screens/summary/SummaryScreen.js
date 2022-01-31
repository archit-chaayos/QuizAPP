import React from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Navigation from '../../services/NavigationService';
import {StyleSheet} from 'react-native';
import store from '../../Store';
import NewQuiz from '../quiz/component/NewQuiz';
import ScoreBoard from '../quiz/component/ScoreBoard';
import quizStyles from '../quiz/QuizStyles';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
import SummaryItem from './components/SummaryItem';
import {connect} from 'react-redux';
import * as quizActions from '../quiz/QuizActions';
import {SummaryStyles} from './SummaryStyles';

class SummaryScreen extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ScrollView>
        <View style={SummaryStyles.mainContainer}>
          <ScoreBoard
            total={this.props.total}
            correctTotal={this.props.correctTotal}
          />

          <View style={SummaryStyles.newQuiz}>
            <NewQuiz onPress={this.props.newQuiz} />
          </View>

          {this.props.summaryList.map((summary, key) => (
            <SummaryItem key={key} summary={summary} />
          ))}
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = store => {
  return {
    total: store.SummaryReducer.total,
    correctTotal: store.SummaryReducer.correct,
    summaryList: store.SummaryReducer.summary,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newQuiz: () => dispatch(quizActions.newQuiz()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SummaryScreen);
