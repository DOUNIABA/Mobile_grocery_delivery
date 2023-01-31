import React from 'react';
import {SafeAreaView,TouchableOpacity, StyleSheet, View, Text, Image,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailsScreen = ({navigation}) => {

  return (
    <SafeAreaView style={{backgroundColor:"white"}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={require('../assets/pomme-de-terre.jpg')} style={{height: 220, width: 220}} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color:"white"}}>
             Pomme de Terre
            </Text>
            <View style={style.iconContainer}>
              <Icon name="favorite-border" color={"green"} size={25} />
            </View>
          </View>
          <Text style={style.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
         <View><Text>Price</Text></View> 
          <View style={{ marginTop: 20}}>
          <TouchableOpacity style={style.button}>
        <Text onPress={() =>navigation.navigate("Cart")} style={{fontWeight:'bold' ,color:'yellowgreen', fontSize:18}}>Add To Cart</Text>
      </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: "yellowgreen",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: "white",
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: "white",
  },
  button:{
    backgroundColor: 'white',
    height:50,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    // marginBottom:50
  }
});

export default DetailsScreen;