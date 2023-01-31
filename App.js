import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screen/Login'
import Signup from './screen/Signup'
import Home from './screen/Home';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome'
import Details from './screen/DetailsScreen';
const Stack = createNativeStackNavigator();

function MyStack(){
  return(
    
    <Stack.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name == 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name == 'Settings') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }
        return <Icon name="home" size="20" />;
      },
      
    })}>
      
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Signup" component={Signup} />
       <Stack.Screen name='Home' component={Home} />
       <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

function RootNavigator(){
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
  const App = () => {
    return <RootNavigator />
  }
  export default App;
  