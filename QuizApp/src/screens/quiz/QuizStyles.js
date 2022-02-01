import {Dimensions, StyleSheet} from 'react-native';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
const QuizStyles = StyleSheet.create({
  mainContainer: {
    marginTop: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    height: screenHeight,
    width: screenWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  scoreBox: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0D0D0D',
    padding: 40,
  },
  questionContainer: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    textAlign: 'center',
    height: '20%',
    textAlignVertical: 'center',
    marginTop: '10%',
    fontWeight: 'bold',
    color: '#0D0D0D',
  },
  choiceButtons: {
    margin: 10,
    width: '42%',
    height: '10%',

    borderStyle: 'solid',
    borderWidth: 1,
    textAlign: 'center',
    padding: 10,
  },
  choiceButtonsWrong: {
    backgroundColor: '#FF6666',
  },
  choiceButtonsRight: {
    backgroundColor: '#38CC77',
  },
  newQuiz: {
    marginTop: 10,

    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 100,
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderColor: '#424242',
  },
});

export default QuizStyles;
