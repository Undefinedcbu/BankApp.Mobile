//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
import { View, Text,Image,Dimensions, TouchableOpacity,StyleSheet,Platform,ScrollView } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Account from './Account';
import Home from './Home';
import Virman from './Virman'; 
import Havale from './Havale'; 



class NavigationDrawerStructure  extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };




  constructor(props) {
		super(props); 
     
    this.state = { // burası bind da kullandığım değerler
      MusteriID:'',
		};
  }
  componentDidMount(){

  fetch('https://bankappapi.azurewebsites.net/api/Hesap?id=1',{
        method: 'GET',
        headers: {
            'Accept': 'text/html',
            'Content-Type': 'text/html',
        },  
    
  })
    .then((res) => res.json()) // gelen datayı parse ediyoruz
    .then((res) => {
      
      if (res.MusteriID != null){
        console.log("bağlandı login "+res.Bakiye)       
      }                   
      else
        console.log("kullanıcı hataları "+res)
        //Alert.alert("TC Numaranız yada parolanız yanlış");
    })
   

  }

 /* componentDidMount(){
    const { navigation } = this.props;  
    const MusteriID = navigation.getParam('musteriid');   
  }*/

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{backgroundColor:'#e74c3c'}} onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('../images/menubar.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      
      </View>
    );
  }
}
 
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Ana Sayfa',
      headerLeft: <NavigationDrawerStructure  navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#e74c3c',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Account,
    navigationOptions: ({ navigation }) => ({
      title: 'Tüm Hesaplarım',
      headerLeft: <NavigationDrawerStructure  navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#e74c3c',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Third: {
    screen: Virman,
    navigationOptions: ({ navigation }) => ({
      title: 'Hesaplarım Arası Transfer(Virman)',
      headerLeft: <NavigationDrawerStructure  navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#e74c3c',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Fourth: {
    screen: Havale,
    navigationOptions: ({ navigation }) => ({
      title: 'Başka Hesaba Transfer(Havale)',
      headerLeft: <NavigationDrawerStructure  navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#e74c3c',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Home: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Ana Sayfa',
    },
  },
  Account: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Hesaplarım',
    },
  },
  Virman: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Hesaplarım Arası Transfer(Virman)',
    },
  },
  Havale: {
    //Title
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Başka Hesaba Transfer(Havale)',
    },
  },
},{
  drawerPosition:'left',
  style: {
      backgroundColor: '#333',
      
      borderBottomColor: '#fff',
      borderBottomWidth: 2,
      
    },
    contentOptions:{
      activeTintColor:'#fff',
      activeBackgroundColor: '#e74c3c',
      inactiveTintColor: 'lightgray',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 10,
      },

    },
});
 
export default createAppContainer(DrawerNavigatorExample);