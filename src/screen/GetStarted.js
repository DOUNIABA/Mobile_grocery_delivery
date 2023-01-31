import React from 'react';
import {Text,TouchableOpacity, StyleSheet, View, Image,SafeAreaView} from 'react-native';

const GetStarted = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      <View style={{height: 400}}>
        <Image
          style={{
            width: '10%',
            resizeMode: 'contain',
            bottom: 250,
            borderRadius:100
          }}
          source={require('../assets/bio.jpg')}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>
           Bio Vegetables
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              textAlign: 'center',
              color: "grey",
            }}>
            We help you to find best and delicious food
          </Text>
        </View>
        <View style={style.indicatorContainer}>
          <View style={style.currentIndicator} />
          <View style={style.indicator} />
          <View style={style.indicator} />
        </View>
        <TouchableOpacity style={style.button}>
        <Text onPress={() =>navigation.navigate("Home")} style={{fontWeight:'bold' ,color:'white', fontSize:18}}>Get Started</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: "yellowgreen",
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "grey",
    marginHorizontal: 5,
  },
  button:{
    backgroundColor: 'yellowgreen',
    height:50,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    // marginBottom:50
  }
});

export default GetStarted;