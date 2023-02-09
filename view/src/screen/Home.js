import React ,{useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View, 
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import categories from './CategoryData';
import foods from './foods';

const Home = ({navigation}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? "yellowgreen"
                    : Colors.light,
                ...style.categoryBtn,
              }}>
              {/* <View style={style.categoryBtnImgCon}>
                <Image
                  source={require('../assets/back1.jpg')}
                  style={{height: 35, width: 35, resizeMode: 'cover'}}
                />
              </View> */}
              <Text
                style={{
                  fontSize: 14,
                  marginRight: 5,
                  // alignContent:'center',
                  color:
                    selectedCategoryIndex == index
                      ? Colors.white
                      : "black",
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const Card = ({food}) => {
    return (
      <TouchableHighlight
        underlayColor={Colors.white}
        activeOpacity={0.9}
        onPress={() =>navigation.navigate("Details")}>

          <View style={style.card}>  
       <View style={{alignItems: 'center', top: -40}}>
            <Image source={food.image} style={{height: 120, width: 120}} />
          </View>
        
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.name}</Text>
            <Text style={{fontSize: 14, color: Colors.grey, marginTop: 2}}>
              {food.description}
            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>

            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              DH{food.price}
            </Text>
            <View style={style.addToCartBtn}>
              <Icon name="add" size={20} color={Colors.white} />
            </View>
          </View>
        </View>

      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <View style={style.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28}}>Hello,</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10,color:"black"}}>
              Dounia
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color: Colors.grey}}>
            What do you want today
          </Text>
        </View>
        {/* <Image
          source={require('../../assets/person.png')}
          style={{height: 50, width: 50, borderRadius: 25}}
        /> */}
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
          <Icon name="tune" size={28} color={Colors.white} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({item}) => <Card food={item} />}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor:Colors.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: "yellowgreen",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 10,

  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: Colors.light,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: "95%",
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: Colors.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: "yellowgreen",
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;