import React, { useState } from 'react';
import { Image,SafeAreaView,StyleSheet, Text, TextInput, View,TouchableOpacity,Alert } from 'react-native';

  const Signup = ({navigation}) => {
  const [username,setUserneme]= useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')

  const handleSignup=()=>{
  console.warn("Hello" +username+ "your account was created successfully")
}
  return (
    <View style={styles.container}>
      <Image
        style={styles.background} 
        source={require('../assets/backss.jpg')}>   
      </Image> 
      <View style={styles.white}></View>
      <SafeAreaView style={styles.form}>
      <Text style={styles.title}>Sign Up</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Please Enter your Username" 
        value={username}
        onChangeText={(text) => setUserneme(text)} 
      />

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
        onChange={(text) => setPassword(text)}
      /> 
          <TextInput
        style={styles.input}
        placeholder="Confirm your password "
        value={password}
        onChange={(text) => setPassword(text)}
      /> 
      <TouchableOpacity onPress={() =>navigation.navigate("Login")} style={styles.button}>
        <Text onPress={handleSignup} style={{fontWeight:'bold' ,color:'#fff', fontSize:18}}>Sign up</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row', alignItems:'center', alignSelf:'center' ,}}>
        <Text style={{marginBottom:15,color:'grey', fontWeight:'600', fontSize:15}}>You have already an account?</Text>
        <TouchableOpacity onPress={() =>navigation.navigate("Login")}>
        <Text style={{marginBottom:15,color:'#f57c00' , fontWeight:'600', fontSize:20}}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'#fff',
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
export default Signup
