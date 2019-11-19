import React, { Component} from 'react';
import { Text,Button, View ,Alert,TouchableOpacity,StyleSheet,Image, TouchableHighlightBase } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {inject,observer} from 'mobx-react'
import Account from '../../Components/Account'

@inject('AccountsStore')
class FaturaHesapSec extends Component {
  constructor() {
    super();
    this.state = { 
      AboneNo:'',
      HesapNo:''
        
    };
}
componentDidMount(){
  this.setState({AboneNo:this.props.navigation.getParam('AboneNo')})
  
}

componentDidUpdate(){
  this.props.AccountsStore.getAccounts();
    this.props.AccountsStore.getAllAccounts();
}

Ode(HesapNo){
   fetch('https://bankappapi.azurewebsites.net/api/Odeme?AboneNo='+this.state.AboneNo+'&HesapNo='+HesapNo, 
      { // extralar    
      method: 'POST',
      headers: {
        'Content-Type': 'text/html'
      },    
      })
        .then((res) => res.json()) // gelen datayı parse ediyoruz
        .then((res) => {
            if(res){
             console.log('ödeme tamam.'+this.state.AboneNo +"   "+this.state.HesapNo)
            }         
         })
       .catch((error) => {     
         console.log(error)
        });

 
}

modal(HesapNo){
  Alert.alert(
    'Onay Mesajı',
    'Ödeme İşlemini Onaylıyormusunuz?',
    [  
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => this.Ode(HesapNo)},
    ],
    {cancelable: false},
  ) 
}

first(HesapNo,Borc,Bakiye){
  if(Bakiye>=Borc)
    this.modal(HesapNo)
  else
    Alert.alert("Bakiyeniz Yetersiz")
}

render(){
  const {getParam} = this.props.navigation 
 

    return(
        <View style={styles.container}>
          <View style={styles.hesapbaslik} ><Text style={styles.Baslik}>Ödeme İşlemi </Text></View>
           
              <TouchableOpacity style={styles.Style}>
                 <View >
                   <Text style={{ fontSize: 18 }}>Faturanız : {getParam('Borc')}</Text>
                  </View>
              </TouchableOpacity>

           
           {
            this.props.AccountsStore.accounts.map((hesap, i) => {
              if(this.props.AccountsStore.accounts[i].Durum=="Açık"){
                return (
                  <View style={styles.containerStyle}>
                    <TouchableOpacity  onPress={() => this.first(this.props.AccountsStore.accounts[i].HesapNo,getParam('Borc'),this.props.AccountsStore.accounts[i].Bakiye)} style={styles.subContainerStyle}>
                        <View>
                            <Text  
                            style={{ fontSize: 20 }}>Hesap Numarası : {this.props.AccountsStore.accounts[i].HesapNo}</Text>
                        </View>

                        <View >
                            <Text
                            style={{ fontSize: 20 }}>Bakiye : {this.props.AccountsStore.accounts[i].Bakiye}</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <CustomButton key={i} HesapID={this.props.AccountsStore.accounts[i].HesapID} onPress={()=>this.closeAccount(this.props.AccountsStore.accounts[i].HesapID)} Title="Kapat"/> */}
                  </View>
                  
                );
              }
            })
          }
               
           
           <View style={styles.uyarı}><Text style={styles.uyarıtext}>Faturayı Ödemek İstiyorsanız Lütfen Bir Hesap Seçiniz !!!</Text></View>
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
Style: {
  borderBottomWidth: 1,
  borderRadius: 5,
  padding:10,
  margin:10,
  backgroundColor: '#fff',
  justifyContent:'center',
  alignItems:'center',
  flexDirection: 'column',
  borderColor: '#a6a6a6',
  position: 'relative',
  alignContent: 'space-between'
},
containerStyle: {
  borderWidth: 2,
  borderRadius: 5,
  borderColor: '#333',
  borderBottomWidth: 1,
  elevation: 7,

  marginTop: 10,
  flexDirection: 'column',
},
subContainerStyle: {
  borderBottomWidth: 1,
  borderRadius: 5,
  padding: 15,
  backgroundColor: '#fff',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  borderColor: '#a6a6a6',
  position: 'relative',
  alignContent: 'space-between'
},
hesapbaslik:{
 
  borderBottomWidth:2,
  marginBottom:5

},
Baslik:{
  fontSize:18,
  fontWeight:'600',
  
},
uyarı:{
  paddingBottom:5,
  marginTop:15,
  marginBottom:15,
  alignItems:'center',
  borderBottomWidth:1,
},
button:{ 
  marginTop:10
},
})

export default FaturaHesapSec;


