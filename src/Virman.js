import React, { Component} from 'react';
import { Text,Button, TouchableOpacity,View ,AsyncStorage,StyleSheet,Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import GonHesap from './GonHesap';

class Virman extends Component {
    constructor() {
        super();
        this.state = { 
            HesapNo: '',
            bakiye:'',
    
    };
}
        render(){      
            return(
               <View style={styles.container}>
                 <View style={styles.hesapbaslik} ><Text style={styles.Baslik}>Alıcı Hesap</Text></View>
                     <View style={styles.containerStyle}>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('GonHesap')} style={styles.subContainerStyle}>
                            <View>
                                <Text  value={this.state.HesapNo}
                                onChangeText={(value) => this.setState({HesapNo: value})}
                                style={{ fontSize: 20 }}>Afyon-5002</Text>
                            </View>
    
                            <View >
                                <Text value={this.state.bakiye} onChangeText={(value) => this.setState({bakiye: value})}
                                style={{ fontSize: 20 }}>Bakiye:50.000</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerStyle}>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('GonHesap')} style={styles.subContainerStyle}>
                            <View>
                                <Text  value={this.state.HesapNo}
                                onChangeText={(value) => this.setState({HesapNo: value})}
                                style={{ fontSize: 20 }}>Afyon-5002</Text>
                            </View>
    
                            <View >
                                <Text value={this.state.bakiye} onChangeText={(value) => this.setState({bakiye: value})}
                                style={{ fontSize: 20 }}>Bakiye:50.000</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.uyarı}><Text style={styles.uyarıtext}>Lütfen Gönderen Hesabı Seçiniz !!!</Text></View>
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
const mainNavigator=createStackNavigator({
    Virman:{screen:Virman},
    GonHesap:{screen:GonHesap},
  
  },{
    headerMode:'none'
  }
  );
  const App=createAppContainer(mainNavigator)
  export default App;