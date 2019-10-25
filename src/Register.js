import React, { Component} from 'react';
import { Text, View ,StyleSheet,Image ,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import Sidebar from './Sidebar';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class Register extends Component {

  constructor(props) {
    super(props); 
    
		this.state = { // burası bind da kullandığım değerler
			TCKimlik: '',
      Parola: '',
      Ad:'',
      Soyad:'',
      DogumTarihi:'',
      TelefonNumarasi:'',
      Adres:'',
      Email:''

		};
  }
 
  goRegister(){

    var TCKN=this.state.TCKimlik
    var pass=this.state.Parola
    var ad=this.state.Ad
    var soyad=this.state.Soyad
    var dogumTarihi=this.state.DogumTarihi
    var telefonNumarasi = this.state.TelefonNumarasi
    var adres = this.state.Adres
    var email = this.state.Email
    //var present = this
    
    fetch('https://bankappapi.azurewebsites.net/api/Musteri', { // extralar
			method: 'POST',
			headers: {
          'Content-Type': 'text/html',
      },
      body: JSON.stringify({
        TcKimlik: TCKN,
        Parola: pass,
        Ad: ad,
        Soyad: soyad,
        DogumTarihi: dogumTarihi,
        Telefon: telefonNumarasi,
        Adres: adres,
        Email: email,
      }),
			
		})
	    .then((res) => res.json()) // gelen datayı parse ediyoruz
	    .then((res) => {
        console.log('ok',res.result)
        if(res.Ad !=null){
          console.log('ok')
          this.props.navigation.navigate('Sidebar')
        }
        else{
          console.log("hata")
        }
	    })

  }
  
  render() {
    return (   
      <KeyboardAvoidingView style={styles.container}>     
          <View style={styles.formcontainer}>
            <TextInput
              value={this.state.Ad}
              onChangeText={(value) => this.setState({Ad: value})}
              placeholder="Adınızı Giriniz"
              placeholderTextColor="rgba(255,255,255,0.6)"
              style={styles.input}/>
            <TextInput
              value={this.state.Soyad}
              onChangeText={(value) => this.setState({Soyad: value})}
              placeholder="Soyadınızı Giriniz"
              placeholderTextColor="rgba(255,255,255,0.6)"
              style={styles.input}/>
            <TextInput
              value={this.state.TCKimlik}
              onChangeText={(value) => this.setState({TCKimlik: value})}
              placeholder="TC Numaranızı Giriniz"
              placeholderTextColor="rgba(255,255,255,0.6)"
              keyboardType="numeric"
              maxLength={11}
              style={styles.input}/>
            <TextInput
              value={this.state.DogumTarihi}
              onChangeText={(value) => this.setState({DogumTarihi: value})}
              placeholder="Doğum Tarihinizi Giriniz"
              placeholderTextColor="rgba(255,255,255,0.6)"
              keyboardType="numeric"
              style={styles.input}/>
            <TextInput
              value={this.state.Parola}
              onChangeText={(value) => this.setState({Parola: value})}
              placeholder="Parola Giriniz"
              placeholderTextColor="rgba(255,255,255,0.6)"
              secureTextEntry
              style={styles.input}/>
            <TextInput
              value={this.state.TelefonNumarasi}
              onChangeText={(value) => this.setState({TelefonNumarasi: value})}
              placeholder="Telefon Numaranızı Giriniz"
              placeholderTextColor="rgba(255,255,255,0.6)"
              keyboardType="numeric"
              maxLength={11}
              style={styles.input}/>
            <TextInput
              value={this.state.Adres}
              onChangeText={(value) => this.setState({Adres: value})}
              placeholder="Adresinizi Giriniz"
              placeholderTextColor="rgba(255,255,255,0.6)"
              style={styles.input}/>
            <TextInput
              value={this.state.Email}
              onChangeText={(value) => this.setState({Email: value})}
              placeholder="Email Adresinizi Giriniz"
              placeholderTextColor="rgba(255,255,255,0.6)"
              style={styles.input}/>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.goRegister.bind(this)}  style={styles.buttonContainer}>
              <Text style={styles.buttonText}>KAYIT OL</Text>
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
        padding:30,
        justifyContent:'center', 

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
      paddingHorizontal:10,
      borderRadius:15,
      alignSelf:'center',
      width:220
    },

    buttonContainer:{
      backgroundColor:'#c0392b',
      paddingVertical:10,
      alignSelf:'center',
      borderRadius:15,
      width:120
    },
    buttonText:{
      textAlign:'center',
      fontWeight:'700'
    }

});

const mainNavigator=createStackNavigator({
  Register:{screen:Register},
  Sidebar:{screen:Sidebar},

},{
  headerMode:'none'
}
);
const App=createAppContainer(mainNavigator)
export default App;
