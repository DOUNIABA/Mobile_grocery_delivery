import React, { useState } from 'react';
import { Image,SafeAreaView,StyleSheet, Text, TextInput, View,TouchableOpacity,Alert } from 'react-native';

  const Login = ({navigation}) => {

  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
 
//   const handleLogin=()=>{
//   console.warn("You're logged in successfully")
// }

  return (
    <View style={styles.container}>
      <Image
        style={styles.background} 
        source={require('../assets/backss.jpg')}>   
      </Image> 
      <View style={styles.white}></View>
      <SafeAreaView style={styles.form}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Please Enter your Email" 
        value={email}
        onChangeText={(text) => setEmail(text)} 
      />

      <TextInput
        style={styles.input}
        placeholder="Please Enter your password "
        value={password}
        autoCorrect={false}
        onChange={(text) => setPassword(text)}
      /> 

      <TouchableOpacity style={styles.button}>
        <Text onPress={() =>navigation.navigate("Home")} style={{fontWeight:'bold' ,color:'#fff', fontSize:18}}>Login</Text>
      </TouchableOpacity>
      <View style={{marginTop:20,flexDirection:'row', alignItems:'center', alignSelf:'center' ,}}>
        <Text style={{color:'gray', fontWeight:'600', fontSize:15}}>Don't have an account?</Text>
        <TouchableOpacity onPress={() =>navigation.navigate("Signup")}>
        <Text style={{color:'#f57c00' , fontWeight:'600', fontSize:20}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  background:{
    width:'100%',
    height:'100%',
    position:'absolute',
    top:0,
    resizeMode:'cover'
  },
  white:{
    width:'100%',
    height:'75%',
    position:'absolute',
    bottom:40,
    // backgroundColor:'black',
    borderTopLeftRadius:60,
    borderTopRightRadius:60,
    shadowColor: '#52006A',  
    elevation: 20, 
  },
  title:{
    fontSize:30,
    color:'#fff',
    alignSelf:'center',
    marginTop:60,
    // color:"black"
  },
  form:{
  flex:1,
  justifyContent:'center',
  marginHorizontal:30,
  marginTop:95
  },
  input:{
    backgroundColor:'#fff',
    height:58,
    marginBottom:15,
    fontSize:16,
    borderRadius:10,
    padding:12
  },
  button:{
    backgroundColor: '#63D471',
    height:50,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:40
  }
})
export default Login
