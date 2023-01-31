import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screen/Login'
import Signup from './src/screen/Signup';
import Home from './src/screen/Home';
import Details from './src/screen/DetailsScreen';
import Cart from './src/screen/CartScreen';
import BottomNavigator from './src/navigation/BottomNavigation';
import GetStarted from './src/screen/GetStarted';
const Stack = createNativeStackNavigator();

function MyStack(){
  return(
    
    <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name='GetStarted' component={GetStarted} />
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Signup" component={Signup} />
       <Stack.Screen name='Home' component={BottomNavigator} />
       <Stack.Screen name='Details' component={Details} />
       <Stack.Screen name='Cart' component={Cart} />

    </Stack.Navigator>
  )
}

function RootNavigator(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <MyStack />
    </NavigationContainer>
  )
}
  const App = () => {
    return <RootNavigator />
  }
  export default App;
  