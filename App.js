import React from 'react';
import {View} from 'react-native';
import ListScreen from './app/screens/ListScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';

const TabStack = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <TabStack.Navigator>
        <TabStack.Screen 
          name='홈'
          component={WelcomeScreen}
          options={{
            tabBarIcon: () => (
              <Icon name="home" size={20} color="brown" />
            )
          }}
        />
        <TabStack.Screen 
          name='투두리스트'
          component={ListScreen}
          options={{
            tabBarIcon: () => (
              <Icon name="ios-book" size={20} color="brown" />
            )
          }}
        />
      </TabStack.Navigator>
    </NavigationContainer>
  );
}

export default App;