import React, { Component} from 'react';
import { Text,Button, View ,Alert,AsyncStorage,StyleSheet,Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './Login';


class Logout extends Component {

    Cıkıs ()  {
       
        this.props.navigation.navigate('Login')
    }
     Hayır(){
        this.props.navigation.navigate('Home')
     }


render(){
    Alert.alert(
        'UYARI',
        'Çıkış Yapmak İstediğinize Eminmisiniz?',
        [  
          {
            text: 'Hayır',
            onPress: () => this.Hayır(),
            style: 'cancel',
          },
          {text: 'Evet', onPress: () => this.Cıkıs()},
        ],
        {cancelable: false},
      ) 
    return(
    <View style={styles.container}>
         
    </View>
    );
}
}

const styles=StyleSheet.create({
container:{
  flex:1,
  padding:30,
  backgroundColor:'#cccccc'
},

})


export default Logout;


