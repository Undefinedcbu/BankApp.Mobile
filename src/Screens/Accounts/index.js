import React, { Component} from 'react';
import { Text,Button,Alert, View ,StyleSheet,Image ,TouchableOpacity,ScrollView} from 'react-native';
import { observer, inject } from 'mobx-react';
import Account from '../../Components/Account';
import CustomButton from '../../Components/Button';

@inject('AuthStore')
@inject('AccountsStore')
@observer

export default class Accounts extends Component {
  
  componentDidMount(){
    this.props.AccountsStore.getAllAccounts();
    this.props.AccountsStore.getAccounts();
  }
  componentDidUpdate(){
    this.props.AccountsStore.getAccounts();
    this.props.AccountsStore.getAllAccounts();
  }

  openAccount(){
    var count = this.props.AccountsStore.accounts.length;
 
      fetch('https://bankappapi.azurewebsites.net/api/Hesap?id='+this.props.AuthStore.MusteriID+'&ek='+(count+1),
      { // extralar    
      method: 'POST',
      headers: {
        'Content-Type': 'text/html'
      },    
      })
        .then((res) => res.json()) // gelen datayı parse ediyoruz
        .then((res) => {
              Alert.alert("Hesabınız açıldı")
        })
        .catch((error) => {     
        console.log(error)
        });
    };

    render(){
     
        return(
          <ScrollView scrollEnabled={true} style={styles.container}>
            
              
                <View style={styles.button}>
                    <Button onPress={()=>this.openAccount()}  
                    color='#c0392b' 
                    style={styles.buttonHesapAc}  
                    title='Yeni Hesap Aç'/>
                </View>
                {
                  this.props.AccountsStore.accounts.map((hesap, i) => {
                    if(this.props.AccountsStore.accounts[i].Durum=="Açık"){
                      return (
                        <View style={styles.containerStyle}>
                          <Account
                          key={i}
                          HesapNo={this.props.AccountsStore.accounts[i].HesapNo}
                          Bakiye={this.props.AccountsStore.accounts[i].Bakiye}
                          HesapID={this.props.AccountsStore.accounts[i].HesapID}
                          Navigasyoncu = 'AccountDetail'
                          navigation={this.props.navigation}
                          />
                          {/* <CustomButton key={i} HesapID={this.props.AccountsStore.accounts[i].HesapID} onPress={()=>this.closeAccount(this.props.AccountsStore.accounts[i].HesapID)} Title="Kapat"/> */}
                        </View>
                        
                      );
                    }
                  })
                } 
                
           
          </ScrollView>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:30,
        backgroundColor:'#cccccc'
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
        padding:15,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        borderColor: '#a6a6a6',
        position: 'relative',
        alignContent: 'space-between'
      },
    button:{ 
        marginTop:10
    },
    buttonHesapAc:{},
})
