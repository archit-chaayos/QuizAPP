const {createNativeStackNavigator} = require('@react-navigation/native-stack');
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import HomeScreen from './screens/home/HomeScreen';
import QuizScreen from './screens/quiz/QuizScreen';
import SummaryScreen from './screens/summary/SummaryScreen';
import {navigationRef} from './services/NavigationService';
export default class NavigationScreen extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    const Stack = createNativeStackNavigator();
    return (
      <View style={{flex: 1}}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            headerMode={'none'}
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Quiz" component={QuizScreen} />
            <Stack.Screen name="Summary" component={SummaryScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
