import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screen/Login'
import Signup from './screen/Signup'
import Home from './screen/Home';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome'

const Stack = createNativeStackNavigator();

function MyStack(){
  return(
    
    <Stack.Navigator screenOptions={{headerShown:false}}
       tabBarOptions={{
        style:{
          height:55,
          borderTopWidth:0,
          elevation:0,
        },
        showLabel:false,
        activeTintColor:Colors.primary,

       }}>
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Signup" component={Signup} />
       <Stack.Screen name='Home' component={Home}
       options={{
        tabBarIcon:({color})=>(
          <Icon name="home" color={color} size={28}/>
        )
       }} />
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
  