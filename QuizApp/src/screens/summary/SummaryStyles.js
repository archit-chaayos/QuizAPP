import {Dimensions, StyleSheet} from 'react-native';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
export const summaryItemStyles = StyleSheet.create({
  container: {
    width: screenWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 10,
    height: 130,
    backgroundColor: '#c7c7c7',
  },
  answer: {
    textAlign: 'center',
    width: '100%',
    marginTop: 20,
    fontWeight: 'bold',
    color: '#242B2E',
  },
  answerRight: {
    backgroundColor: '#38CC77',
  },
  answerWrong: {
    backgroundColor: '#FF6666',
  },
  question: {
    textAlign: 'center',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    fontWeight: 'bold',
    color: '#242B2E',
    backgroundColor: '#c7c7c7',
  },
});

export const SummaryStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: screenWidth,
    padding: 20,
    overflow: 'scroll',
    marginBottom: 10,
  },
  newQuiz: {
    marginTop: 10,
    marginBottom: 10,
  },
});
