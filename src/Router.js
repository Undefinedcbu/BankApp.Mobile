import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Account from './Components/Account'
import AuthLoadingScreen from './Screens/AuthLoadingScreen'
import Login from './Screens/Login';
import Home from './Screens/Home';
import Register from './Screens/Register';
import Accounts from './Screens/Accounts';
import AccountDetail from './Screens/AccountDetail';
import Virman from './Screens/Virman';
import Havale from './Screens/Havale';
import GonHesap from './Screens/GonHesap';
import FaturaHesapSec from './Screens/FaturaHesapSec';
import FaturaIslemleri from './Screens/FaturaIslemleri';
import Logout from './Screens/Logout';
import DrawerButton from './Components/DrawerButton';
import Miktar from './Screens/Miktar'
import HavaleMiktar from './Screens/HavaleMiktar'

import Icon from 'react-native-vector-icons/EvilIcons';


const AuthStack = createBottomTabNavigator({
    Login:{
        screen:Login,
        navigationOptions: {
          title: 'Giriş Yap',
          tabBarIcon: ({ tintColor }) => <Icon name="unlock" style={{ color: tintColor }} />
        }
        
    },
    Register:{
        screen:Register,
        navigationOptions: {
          title: 'Kayıt Ol',
          tabBarIcon: ({ tintColor }) => <Icon name="user" style={{ color: tintColor }} />
        }
    },
},{
    InitialRouteName:"Login",
    tabBarOptions: {
			activeTintColor: '#fff',
			inactiveTintColor: '#586589',
			style: {
        backgroundColor: '#171f33',
      
			}}
})

const HomeStack = createStackNavigator({
    Home:{
        screen:Home,
        navigationOptions: ({ navigation }) => ({
          headerRight: <DrawerButton navigation={navigation} />,
          title:"Anasayfa",
          headerStyle:{
            backgroundColor:'#e74c3c',
          },
          headerTintColor:'#fff'
        })
    }
})

const AccountsStack = createStackNavigator({
  Accounts:{
    screen:Accounts
    },
  AccountDetail:{
    screen:AccountDetail,
    },
  Account:{
    screen:Account
    },
    
}, {
	defaultNavigationOptions: ({ navigation }) => ({
    headerRight: <DrawerButton navigation={navigation}/>,
    title:'Hesaplar',
    headerStyle: {
      backgroundColor: '#e74c3c',
    },
    headerTintColor: '#fff',
	})
});

const VirmanStack = createStackNavigator({
    Virman:{
        screen:Virman
    },
    GonHesap:{
        screen:GonHesap
    },
    Miktar:{screen:Miktar}
   
}, {
	defaultNavigationOptions: ({ navigation }) => ({
    headerRight: <DrawerButton navigation={navigation} />,
    title:'Virman',
    headerStyle: {
      backgroundColor: '#e74c3c',
    },
    headerTintColor: '#fff',
  })
});

const HavaleStack = createStackNavigator({
    Havale:{
        screen:Havale
    },
    GonHesap:{
        screen:GonHesap
    },
   HavaleMiktar:{screen:HavaleMiktar}
}, {
	defaultNavigationOptions: ({ navigation }) => ({
    headerRight: <DrawerButton navigation={navigation} />,
    title:'Havale',
    headerStyle: {
      backgroundColor: '#e74c3c',
    },
    headerTintColor: '#fff',
  })
});

const OdemeStack = createStackNavigator({
    FaturaIslemleri:{
        screen:FaturaIslemleri
    },
    FaturaHesapSec:{
        screen:FaturaHesapSec
      },
    }, {
      defaultNavigationOptions: ({ navigation }) => ({
        headerRight: <DrawerButton navigation={navigation} />,
        title:'Fatura İşlemleri',
        headerStyle: {
          backgroundColor: '#e74c3c',
        },
        headerTintColor: '#fff',
      })
    });

const AppDrawer = createDrawerNavigator({
    Home: {
      screen: HomeStack,
      navigationOptions: {   
        drawerLabel: 'Ana Sayfa',
      },
    },
     Accounts: {
       screen: AccountsStack,
       navigationOptions: {
         drawerLabel: 'Hesaplarım',
       },
     },
    Virman: {
      screen: VirmanStack,
      navigationOptions: {
        drawerLabel: 'Hesaplarım Arası Transfer(Virman)',
      },
    },
    Havale: {
      screen: HavaleStack,
      navigationOptions: {
        drawerLabel: 'Başka Hesaba Transfer(Havale)',
      },
    },
    FaturaIslemleri: {
      screen: OdemeStack,
      navigationOptions: {
        drawerLabel: 'Fatura Ödeme İşlemleri',
      },
    },
    Logout: {
      screen: Logout,
      navigationOptions: {
        drawerLabel: 'Güvenli Çıkış',
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

  
  const SwitchNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: AppDrawer,
    
  },{
    InitialRouteName:'AuthLoading'
  })
  

  const Router = createAppContainer(SwitchNavigator);
  
  export default Router;
