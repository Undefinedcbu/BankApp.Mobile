import React, { Component} from 'react';
import { Text,Button,Alert, View ,StyleSheet,Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';


class CustomButton extends Component{

closeAccount(){
    Alert.alert("Kapan kapan");
}

    render(){
    const { onPress } = this.props;
        return(
            <View style={styles.button}>
                <Button onPress={onPress} 
                color='#c0392b' 
                style={styles.buttonHesapAc} title={this.props.Title} />
            </View> 
        )
   } 
} 

export default CustomButton;

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


