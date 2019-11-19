import React, { Component} from 'react';
import { Text,Button, View ,TextInput,AsyncStorage,TouchableOpacity,StyleSheet,Image, Alert } from 'react-native';

//APİ https://bankappapi.azurewebsites.net/api/odeme/

class FaturaIslemleri extends Component {
  constructor() {
    super();
    this.state = { 
        AboneNo: '',
    };
  }
  sorgula =()=>{
    fetch('https://bankappapi.azurewebsites.net/api/Odeme?AboneNo='+this.state.AboneNo, 
     { // extralar    
     method: 'GET',
     headers: {
       'Content-Type': 'text/html'
     },    
     })
       .then((res) => res.json()) // gelen datayı parse ediyoruz
       .then((res) => {
          if(res.Borc>0){
            this.props.navigation.navigate('FaturaHesapSec',{AboneNo:this.state.AboneNo,Borc:res.Borc})
          }
          else
            Alert.alert("Borcunuz bulunmamaktadır.")
           
        })
      .catch((error) => {     
        console.log(error)
       });
  }
    render(){    
      const {navigate} = this.props.navigation;  
        return(
           <View style={styles.container}>
             <View style={styles.hesapbaslik} ><Text style={styles.Baslik}>Fatura Öde</Text></View>
             <View style={styles.backcontainer}>
                <View style={styles.label} ><Text style={styles.labelbaslik} >Abone Numarası:</Text></View>
                  <View style={styles.inputcontainer}>
                    <TextInput
                        value={this.state.AboneNo}
                        onChangeText={(value) => this.setState({AboneNo: value})}
                        placeholder="Abone Numarası Giriniz"
                        placeholderTextColor="rgba(255,255,255,0.6)"
                        keyboardType="numeric"
                        style={styles.input}/>
                  </View>                  
                </View>
                <View style={styles.button}>
                    <Button onPress={() => this.sorgula()}  
                    color='#c0392b' 
                    style={styles.buttonHesapAc}  
                    title='Sorgula'/>
                </View>
              <View style={styles.uyarı}><Text style={styles.uyarıtext}>Lütfen Bir Abone Numarası Giriniz !!!</Text></View>
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

export default FaturaIslemleri


