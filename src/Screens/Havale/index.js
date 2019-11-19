import React, { Component} from 'react';
import { Text,Button, View ,TextInput,AsyncStorage,TouchableOpacity,StyleSheet,Image, Alert } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject('AuthStore')
@inject('AccountsStore')
@observer
class Havale extends Component {
  constructor() {
    super();
    
    this.state = { 
        HesapNo: '',
    };
  }
kontrol = ()=>{
  var flag=0
  if(this.props.AccountsStore.allAccounts.length==this.props.AccountsStore.accounts.length  || this.props.AccountsStore.accounts.some(account=>account.HesapNo===this.state.HesapNo))
  {
    Alert.alert("Virman menüsüne gidiniz.")
  }
  else
  {
    for(let i=0;i<this.props.AccountsStore.allAccounts.length;i++){
      console.log(this.props.AccountsStore.allAccounts[i].HesapNo)
      if(this.props.AccountsStore.allAccounts[i].HesapNo == this.state.HesapNo)
        flag=1;
    }
    if(flag==1)
      this.props.navigation.navigate('GonHesap',{AliciHesapNo:this.state.HesapNo,Navigasyoner:'HavaleMiktar'})
    else
      Alert.alert("Böyle bir hesap bulunamadı...")
  }
}
  

    render(){
      const { navigate } = this.props.navigation;
      
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
                    <Button onPress={()=>this.kontrol()}
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

export default Havale;


