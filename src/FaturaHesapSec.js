import React, { Component} from 'react';
import { Text,Button, View ,Alert,TouchableOpacity,StyleSheet,Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


class FaturaHesap extends Component {
  constructor() {
    super();
    this.state = { 
        HesapNo:'',
        bakiye:'',
    };
}

Ode(){
  //veri tabanı işlemleri
  console.log('ödeme tamam.')
}

render(){
 
    return(
        <View style={styles.container}>
          <View style={styles.hesapbaslik} ><Text style={styles.Baslik}>Ödeme İşlemi </Text></View>
           
              <TouchableOpacity style={styles.Style}>
                 <View >
                   <Text value={this.state.bakiye} onChangeText={(value) => this.setState({bakiye: value})}
                    style={{ fontSize: 18 }}>Faturanız : 50.000</Text>
                  </View>
              </TouchableOpacity>
            
            <View style={styles.containerStyle}>
               <TouchableOpacity   onPress={() =>  Alert.alert(
                'Onay Mesajı',
                'Ödeme İşlemini Onaylıyormusunuz?',
                [  
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => this.Ode()},
                ],
                {cancelable: false},
              ) } style={styles.subContainerStyle}>
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
               <TouchableOpacity onPress={() =>  Alert.alert(
                'Onay Mesajı',
                'Ödeme İşlemini Onaylıyormusunuz?',
                [  
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => this.Ode()},
                ],
                {cancelable: false},
              ) } style={styles.subContainerStyle}>
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
           <View style={styles.uyarı}><Text style={styles.uyarıtext}>Faturayı Ödemek İstiyorsanız Lütfen Bir Hesap Seçiniz !!!</Text></View>
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
Style: {
  borderBottomWidth: 1,
  borderRadius: 5,
  padding:10,
  margin:10,
  backgroundColor: '#fff',
  justifyContent:'center',
  alignItems:'center',
  flexDirection: 'column',
  borderColor: '#a6a6a6',
  position: 'relative',
  alignContent: 'space-between'
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
  paddingBottom:5,
  marginTop:15,
  marginBottom:15,
  alignItems:'center',
  borderBottomWidth:1,
},
button:{ 
  marginTop:10
},
})

export default FaturaHesap;


