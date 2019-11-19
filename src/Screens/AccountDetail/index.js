import React, { Component} from 'react';
import { Text,Button,Alert, View ,StyleSheet,Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

class AccountDetail extends Component {
    constructor(props) {
        super(props);
        
    }

    closeAccount(HesapID,Bakiye){
        if(Bakiye>0)
        {
            Alert.alert("Hesabınızda para varken kapatma işlemi yapamazsınız.")
        }
        else{
            fetch('https://bankappapi.azurewebsites.net/api/Hesap/Kapat?id='+HesapID, 
            { // extralar    
            method: 'PUT',
            headers: {
              'Content-Type': 'text/html'
            },    
            })
              .then((res) => res.json()) // gelen datayı parse ediyoruz
              .then((res) => {
                   if(res.Durum=="Kapalı")
                   {
                       this.props.navigation.goBack();
                   }
              })
              .catch((error) => {     
              console.log(error)
              });
          };
        }
        

    render(){
        const { getParam } = this.props.navigation;
        return(
            <View style={styles.container}>
                
                <View style={styles.hesapdetay}>
                    <View style={styles.hesapbaslik}>
                        <Text style={styles.Baslik} >Hesap Bilgileriniz</Text>
                    </View>
                    <View style={styles.hesapbilgiler}>
                        <View style={styles.row}>
                            <Text style={styles.detay} >Hesap Numarası: </Text>
                            <Text style={styles.detay} >{getParam('HesapNo')}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.detay} >Bakiye </Text>
                            <Text style={styles.detay}>{getParam('Bakiye')}</Text>
                        </View>
                        
                    </View>
              </View>     
              <View style={styles.button}>
                    <Button onPress={()=>this.closeAccount(getParam('HesapID'),getParam('Bakiye'))} 
                    color='#c0392b' 
                    style={styles.buttonHesapAc} title='Kapat'/>
              </View>    
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#cccccc'
    },
    
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
    button:{
        marginTop:10
    }
})

export default AccountDetail;