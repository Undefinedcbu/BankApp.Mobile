import React, { Component} from 'react';
import { Text,Button,TextInput, View ,Alert,TouchableOpacity,AsyncStorage,StyleSheet,Image } from 'react-native';


class Miktar extends Component {
    constructor(props){
        super(props)
        this.state={
            Miktar:''
        }
    }
transfer = (GondericiNo,AliciNo)=>{

  
    fetch('https://bankappapi.azurewebsites.net/api/Hesap/Havale?GonderenNo='+GondericiNo+'&AliciNo='+AliciNo+'&Miktar='+this.state.Miktar, 
     { // extralar    
     method: 'PUT',
     headers: {
       'Content-Type': 'text/html'
     },    
     })
       .then((res) => res.json()) // gelen datayı parse ediyoruz
       .then((res) => {
           console.log("-->"+res)
        if(res!=null)
                Alert.alert("Para Başarılıylan Gitti")
            })
       .catch((error) => {     
       console.log(error)
       });
}

    render(){      
        const { navigate,getParam } = this.props.navigation;
        return(
           <View style={styles.container}>
               <View style={styles.hesapbaslik} ><Text style={styles.Baslik}>Gönderilebilecek Miktar</Text></View>
               <View style={styles.containerStyle}>
                    <View style={styles.subContainerStyle}>
                        <View >
                            <Text style={{ fontSize: 18 }}>{getParam('GonderilecekBakiye')}</Text>
                         
                        </View>
                    </View>
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
                    <Button onPress={() => this.transfer(getParam('GondericiHesapNo'),getParam('HesapNo'))}  
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