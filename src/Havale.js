import React, { Component} from 'react';
import { Text,Button, View ,TextInput,AsyncStorage,TouchableOpacity,StyleSheet,Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import GonHesap from './GonHesap';

class Havale extends Component {
  constructor() {
    super();
    this.state = { 
        HesapNo: '',
    };
  }
    render(){      
        return(
           <View style={styles.container}>
             <View style={styles.hesapbaslik} ><Text style={styles.Baslik}>Alıcı Hesap</Text></View>
             <View style={styles.backcontainer}>
                <View style={styles.label} ><Text style={styles.labelbaslik} >Hesap Numarası:</Text></View>
                  <View style={styles.inputcontainer}>
                    <TextInput
                        value={this.state.HesapNo}
                        onChangeText={(value) => this.setState({HesapNo: value})}
                        placeholder="Hesap Numarası Giriniz"
                        placeholderTextColor="rgba(255,255,255,0.6)"
                        keyboardType="numeric"
                        style={styles.input}/>
                  </View>
                  
                </View>
                <View style={styles.button}>
                    <Button onPress={() => this.props.navigation.navigate('GonHesap')}  
                    color='#c0392b' 
                    style={styles.buttonHesapAc}  
                    title='Devam'/>
                </View>
              <View style={styles.uyarı}><Text style={styles.uyarıtext}>Lütfen Bir Hesap Numarası Giriniz !!!</Text></View>
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
  hesapbaslik:{
   
    borderBottomWidth:2,
    marginBottom:5

},
Baslik:{
    fontSize:18,
    fontWeight:'600',
    
},
backcontainer:{
  marginTop:10,
  borderRadius: 5,
  padding:15,
  elevation:7,
  backgroundColor:'#f2f2f2'
},
label:{
  marginLeft:20,
  marginRight:20,
  marginTop:20,
  marginBottom:5
},
inputcontainer:{
  marginLeft:20,
  marginRight:20
},
input:{
  height:40,
  backgroundColor:'rgba(166, 51, 38,0.2)',
  color:'#2c3e50',
  marginBottom:20,
  paddingHorizontal:10
},
uyarı:{
  padding:20,
  alignItems:'center',
},
button:{ 
  marginTop:10
},
    
})
const mainNavigator=createStackNavigator({
  Havale:{screen:Havale},
  GonHesap:{screen:GonHesap},

},{
  headerMode:'none'
}
);
const App=createAppContainer(mainNavigator)
export default App;


