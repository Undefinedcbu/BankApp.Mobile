import React, { Component} from 'react';
import { Text,Button, TouchableOpacity,View ,AsyncStorage,StyleSheet,Image,ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { observer, inject } from 'mobx-react';
import Account from '../../Components/Account'

@inject('AccountsStore')
@observer
export default class Virman extends Component {
    constructor(props) {
        super(props);
      
}
        render(){   
             
            return(
                <ScrollView scrollEnabled={true} style={styles.container}>

                
           
                 <View style={styles.hesapbaslik} ><Text style={styles.Baslik}>Gönderici Hesap</Text></View>
                    
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
                          Navigasyoncu = 'GonHesap'
                          navigation={this.props.navigation}
                          Navigasyoner='Miktar'
                          />
                          {/* <CustomButton key={i} HesapID={this.props.AccountsStore.accounts[i].HesapID} onPress={()=>this.closeAccount(this.props.AccountsStore.accounts[i].HesapID)} Title="Kapat"/> */}
                        </View>
                        
                      );
                    }
                  })
                } 
                    
                    
                    <View style={styles.uyarı}><Text style={styles.uyarıtext}>Lütfen Gönderen Hesabı Seçiniz !!!</Text></View>
             
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
        padding:20,
        alignItems:'center',
    },
    uyarıtext:{},     
})
