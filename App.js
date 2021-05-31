import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Question from './screens/Question'
import Result from './screens/Result';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Question' component={Question}/>
        <Stack.Screen name = 'Result' component = {Result}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


