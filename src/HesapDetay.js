import React, { Component} from 'react';
import { Text,Button,Alert, View ,StyleSheet,Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

class HesapDetay extends Component {
    constructor() {
        super();
        this.state = { 
            HesapNo: '',
            Bakiye:'',
            Tarih:'',
    
    };
}
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.hesapdetay}>
                    <View style={styles.hesapbaslik}>
                        <Text style={styles.Baslik} >Hesap Bilgileriniz</Text>
                    </View>
                    <View style={styles.hesapbilgiler}>
                        <View style={styles.row}>
                            <Text style={styles.detay} >Hesap Numarası: </Text>
                            <Text style={styles.detay} 
                            value={this.state.HesapNo}
                            onChangeText={(value) => this.setState({HesapNo: value})}>165-12569874-5001 </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.detay} >Bakiye </Text>
                            <Text style={styles.detay} 
                            value={this.state.Bakiye}
                            onChangeText={(value) => this.setState({Bakiye: value})}>100.000,00 </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.detay} >Hesap Açılış Tarihi </Text>
                            <Text style={styles.detay} 
                             value={this.state.Tarih}
                             onChangeText={(value) => this.setState({Tarih: value})}>03/08/2019 </Text>
                        </View>
                    </View>
              </View>     
              <View style={styles.button}>
                    <Button onPress={() => Alert.alert('Hesabınız başarıyla kapatıldı.')} 
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

export default HesapDetay;