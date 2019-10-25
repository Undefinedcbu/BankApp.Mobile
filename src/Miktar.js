import React, { Component} from 'react';
import { Text,Button,TextInput, View ,Alert,TouchableOpacity,AsyncStorage,StyleSheet,Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class Miktar extends Component {
    
    constructor() {
        super();
        this.state = { 
            bakiye:'',
            Miktar:'',
    
    };
}
    render(){      
        return(
           <View style={styles.container}>
               <View style={styles.hesapbaslik} ><Text style={styles.Baslik}>Miktar</Text></View>
               <View style={styles.containerStyle}>
                    <TouchableOpacity style={styles.subContainerStyle}>
                        <View >
                            <Text value={this.state.bakiye} onChangeText={(value) => this.setState({bakiye: value})}
                            style={{ fontSize: 18 }}>Bakiye:50.000</Text>
                         
                        </View>
                    </TouchableOpacity>
                </View>

               <View style={styles.backcontainer}>
                <View style={styles.label} ><Text style={styles.labelbaslik} >Miktar:</Text></View>
                <View style={styles.inputcontainer}>
                    <TextInput
                        value={this.state.Miktar}
                        onChangeText={(value) => this.setState({Miktar: value})}
                        placeholder="Miktar Giriniz"
                        placeholderTextColor="rgba(255,255,255,0.6)"
                        keyboardType="numeric"
                        style={styles.input}/>
                </View>
                </View>
                <View style={styles.button}>
                    <Button onPress={() => Alert.alert('Transfer başarılı')}  
                    color='#c0392b' 
                    style={styles.buttonHesapAc}  
                    title='Gönder'/>
                </View>
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
    backcontainer:{
        marginTop:10,
        borderRadius: 5,
        padding:15,
        elevation:7,
        backgroundColor:'#f2f2f2'
    },

    hesapbaslik:{
   
        borderBottomWidth:2,
        marginBottom:5
       

   },
    Baslik:{
        fontSize:18,
        fontWeight:'600'
    
    },
    containerStyle: {   
        borderRadius: 5,
        borderColor: '#333',
        elevation: 7,
        marginTop: 10,
        flexDirection: 'column'
      },
    subContainerStyle: {
        borderBottomWidth: 1,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderColor: '#a6a6a6'
        
       
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
      button:{ 
        marginTop:10
    },
    buttonHesapAc:{},
    
})


export default Miktar;