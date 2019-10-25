import React, { Component} from 'react';
import { Text, View ,Alert,StyleSheet,Image ,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import Register from './Register';
import Sidebar from './Sidebar';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


class Login extends Component {

  constructor(props) {
		super(props);     
		this.state = { // burası bind da kullandığım değerler
			TCKimlik: '',
      Parola: '',
      Message:'',    
		};
  }
  
  goLogin() {
		var TCKN = this.state.TCKimlik;
    var pass = this.state.Parola;
    //https://bankappapi.azurewebsites.net/ <-- Buraya girip APİ sekmesine tıklayıp kullanımlara bakabilirsiniz.
		// react native ajax komutu
    fetch('https://bankappapi.azurewebsites.net/api/musteri?TCKimlik='+TCKN+'&parola='+pass+'', 
    { // extralar    
      method: 'POST',
      headers: {
        'Content-Type': 'text/html'
      },    
    })
	    .then((res) => res.json()) // gelen datayı parse ediyoruz
	    .then((res) => {
	    	if (res.MusteriID != null){
          console.log("bağlandı login "+res.MusteriID)
          this.props.navigation.navigate('Sidebar',{MusteriID:res.MusteriID})
          
        }                   
	    	else
          console.log("kullanıcı hataları "+res)
          //Alert.alert("TC Numaranız yada parolanız yanlış");
	    })
	    .catch((error) => {     
        console.log("başarısız çünkü "+ error)
       console.log("TC Numaranız yada parolanız yanlış");
	    });
  }
  
 
  render() {
    
    return (
      <KeyboardAvoidingView style={styles.container}>
          <View style={styles.logocontainer}>
             <Image style={styles.logo} source={require('../images/i.png')}/>
             <Text style={styles.title}>XBANK Hoşgeldiniz...</Text>
          </View>      
          <View style={styles.formcontainer}>
            <TextInput
              value={this.state.TCKimlik}
              onChangeText={(value) => this.setState({TCKimlik: value})}
              placeholder="TC Numaranızı Giriniz"
              placeholderTextColor="rgba(255,255,255,0.6)"
              keyboardType="numeric"
              maxLength={11}
              minLenght={11}
              style={styles.input}/>
            <TextInput
              placeholder="Parola Giriniz"
              value={this.state.Parola}
              onChangeText={(value) => this.setState({Parola: value})}
              placeholderTextColor="rgba(255,255,255,0.6)"
              secureTextEntry
              style={styles.input}/>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.goLogin.bind(this)} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>GİRİŞ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} 
              style={styles.buttonContainer}>
              <Text   style={styles.buttonText}>KAYIT OL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
 
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e74c3c',
        padding:30      
    },
    logocontainer:{
      alignItems:'center',
      flexGrow:1,
      justifyContent:'center'
    },
    logo:{
      borderRadius:100,
      width:100,
      height:100
    },
    title:{
      color:'#fff',
      marginTop:10,
      textAlign:'center',
      opacity:0.8
    },
    input:{
      height:40,
      backgroundColor:'rgba(255,255,255,0.5)',
      color:'#2c3e50',
      marginBottom:20,
      paddingHorizontal:10
    },
    button:{
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    buttonContainer:{
      backgroundColor:'#c0392b',
      paddingVertical:10,
      width:160  
    },
    buttonText:{
      textAlign:'center',
      fontWeight:'700'
    }

});

const mainNavigator=createStackNavigator({
  Login:{screen:Login},
  Register:{screen:Register},
  Sidebar:{screen:Sidebar},

},{
  headerMode:'none'
}
);
const App=createAppContainer(mainNavigator)
export default App;