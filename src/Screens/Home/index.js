import React, { Component} from 'react';
import { Text,Button, View ,AsyncStorage,StyleSheet,Image, Alert } from 'react-native';

import {inject} from 'mobx-react'
@inject('AuthStore')
@inject('AccountsStore')

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            hesap : [],
        }
    };
    componentDidUpdate(){
        this.props.AccountsStore.getAccounts();
    }
    componentDidMount(){
        this.props.AccountsStore.getAllAccounts();
        this.props.AccountsStore.getAccounts();
        fetch('https://bankappapi.azurewebsites.net/api/hesap/liste?id='+this.props.AuthStore.MusteriID,{
              method: 'GET',
              headers: {
                  'Accept': 'text/html',
                  'Content-Type': 'text/html',
              },  
          
        })
          .then((res) => res.json()) 
          .then((res) => {
           try{
               if(res!=null){
                    for(let i=0;i<res.length;i++){
                        if (res[i].Durum=="Açık"){
                            this.setState({hesap:res[i]})
                        }
                    } 
               }                  
          else
            console.log("kullanıcı hataları "+res)
            //Alert.alert("TC Numaranız yada parolanız yanlış");
           }
           catch(e){
            console.log("Hata mesajı" +e)
           }
            
          })
        }
    render(){
        const {AuthStore} = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.image} >
                    <View style={styles.logo}>
                        <Text style={styles.bakiye} 
                    
                         >Bakiyeniz:</Text>
                        <Text>{this.state.hesap.Bakiye}</Text>
                         
                    </View>
                </View>  
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:30,
        backgroundColor:'#cccccc'
    },
    image:{
        alignItems:'center',
        padding:30,
        width:270,
        height:270,
        borderRadius:200,
        backgroundColor:'#c0392b'

    },
    logo:{
        alignItems:'center',
        justifyContent:'center',
        width:210,
        height:210,
        borderRadius:200,
        backgroundColor:'#cccccc'
    },
    bakiye:{
        fontSize:22,
        fontWeight:'700'
    },
    bakiyelira:{
        fontSize:16,
        fontWeight:'700'
    }
})

export default Home;