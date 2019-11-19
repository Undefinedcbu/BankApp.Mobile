import React, { Component} from 'react';
import { Text,Button,Alert, View ,StyleSheet,Image ,TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HesapDetay from '../Screens/AccountDetail';
import CustomButton from './Button'

export default class Account extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return(
                
                    <TouchableOpacity  onPress={() => navigate(this.props.Navigasyoncu,{HesapNo:this.props.HesapNo,Bakiye:this.props.Bakiye,HesapID:this.props.HesapID,GonderilecekBakiye:this.props.GonderilecekBakiye,GondericiHesapNo:this.props.GondericiHesapNo,Navigator:this.props.Navigator,AliciHesapNo:this.props.AliciHesapNo,Navigasyoner:this.props.Navigasyoner})} style={styles.subContainerStyle}>
                        <View>
                            <Text  
                            style={{ fontSize: 20 }}>Hesap Numarası : {this.props.HesapNo}</Text>
                        </View>

                        <View >
                            <Text
                            style={{ fontSize: 20 }}>Bakiye : {this.props.Bakiye}</Text>
                        </View>
                    </TouchableOpacity>
                 
        )
    }
}  

const styles=StyleSheet.create({    
    hesapdetay:{
       
        padding:20,
       elevation:5,
        backgroundColor:'#f2f2f2'

    },
    hesapbaslik:{
        alignItems:'center',
        borderBottomWidth:2,
        marginBottom:5

    },
    Baslik:{
        fontSize:18,
        fontWeight:'600',
        
    },
    hesapbilgiler:{

    },
    row:{
        flexDirection:'row',
        justifyContent: 'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
        marginBottom:5,
        marginTop:5

    },
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


