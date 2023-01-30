import React from 'react'
import { View,Text, StyleSheet, Image,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { ScrollView,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/MaterialIcons'

const  Home=()=> {
    
  return(
   
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
    <View style={style.header}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 28}}>Hello,</Text>
          <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
            Dounia
          </Text>
        </View>
        <Text style={{marginTop: 5, fontSize: 22, color: Colors.grey}}>
          What do you want today
        </Text>
      </View>
   
    </View>
    <View
      style={{
        marginTop: 40,
        flexDirection: 'row',
        paddingHorizontal: 20,
      }}>
      <View style={style.inputContainer}>
        <Icon name="search" size={28} />
        <TextInput
          style={{flex: 1, fontSize: 18}}
          placeholder="Search for food"
        />
      </View>
      <View style={style.sortBtn}>
        <Icons name="tune" size={28} color={Colors.white}></Icons>
      </View>
    </View>
    <View style={{flexDirection:'row'}}>
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    contentContainerStyle={style.categoriesListContainer}>
        <TouchableOpacity activeOpacity={0.8}>
            <View style={{backgroundColor:Colors.primary}}></View>
            <View style={style.categoryBtnImgCon}>
            <Image
            style={{height:35,width:35,resizeMode:'cover'}}
        source={require('../assets/backs.jpg')}>   
      </Image>             
      </View>
        </TouchableOpacity>
    </ScrollView>
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    contentContainerStyle={style.categoriesListContainer}>
        <TouchableOpacity activeOpacity={0.8}>
            <View style={{backgroundColor:Colors.primary}}></View>
            <View style={style.categoryBtnImgCon}>
            <Image
            style={{height:35,width:35,resizeMode:'cover'}}
        source={require('../assets/backs.jpg')}>   
      </Image>             
      </View>
        </TouchableOpacity>
    </ScrollView>

    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    contentContainerStyle={style.categoriesListContainer}>
        <TouchableOpacity activeOpacity={0.8}>
            <View style={{backgroundColor:Colors.primary}}></View>
            <View style={style.categoryBtnImgCon}>
            <Image
            style={{height:35,width:35,resizeMode:'cover'}}
        source={require('../assets/backs.jpg')}>   
      </Image>    
      </View>
        </TouchableOpacity>
    </ScrollView>
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    contentContainerStyle={style.categoriesListContainer}>
        <TouchableOpacity activeOpacity={0.8}>
            <View style={{backgroundColor:Colors.primary}}></View>
            <View style={style.categoryBtnImgCon}>
            <Image
            style={{height:35,width:35,resizeMode:'cover'}}
        source={require('../assets/backs.jpg')}>   
      </Image>             
      </View>
        </TouchableOpacity>
    </ScrollView>
    </View>
   <View>
   </View>
    
    <View style={style.card}>
        <View style={{alignItems:'center',top:-40}}>
            <Image source={require('../assets/pizza.jpg')} 
            style={{height:120,width:120,borderRadius:70}}></Image>
        </View>
        <Text style={{fontSize:14,fontWeight:'bold'}}>Pizza</Text>
        <Text style={{fontSize:14, color:Colors.grey,marginTop:2}}></Text>
    </View>
    
    <View style={style.card}>
        <View style={{alignItems:'center',top:-40}}>
            <Image source={require('../assets/pizza.jpg')} 
            style={{height:120,width:120,borderRadius:70}}></Image>
        </View>
        <Text style={{fontSize:14,fontWeight:'bold'}}>Pizza</Text>
        <Text style={{fontSize:14, color:Colors.grey,marginTop:2}}></Text>
    </View>
  
  </SafeAreaView>
  )
}

export default Home
const style = StyleSheet.create({
    header:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,

    },
    inputContainer:{
        flex:1,
        height:50,
        borderRadius:10,
        flexDirection:'row',
        backgroundColor:Colors.light,
        alignItems:'center',
        paddingHorizontal:20

    },
    sortBtn: {
        width: 50,
        height: 50,
        marginLeft: 10,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      categoriesListContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      categoryBtnImgCon: {
        height: 35,
        width: 35,
        backgroundColor: Colors.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      card: {
        flex:1,
        height: 220,
        width: "50%",
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: Colors.white,
      },
})
