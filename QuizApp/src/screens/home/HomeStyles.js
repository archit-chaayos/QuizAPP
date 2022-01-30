import {Dimensions, StyleSheet} from 'react-native';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
export const homeStyles = StyleSheet.create({
  levelButtonsPress: {
    flex: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#38CC77',
  },
  levelButtonsNormal: {
    flex: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  startButton: {
    flex: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#38CC77',
  },
  mainContainer: {
    marginTop: '20%',
    alignItems: 'center',
    height: screenHeight,
    width: screenWidth,
  },
  levelContainer: {
    flexDirection: 'row',

    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: '20%',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: '20%',
  },
  inputContainer: {
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%',
  },
});
