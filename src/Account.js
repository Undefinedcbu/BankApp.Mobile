import React, { Component} from 'react';
import { Text,Button,Alert, View ,StyleSheet,Image ,TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HesapDetay from './HesapDetay';
class Account extends Component {
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
                <View style={styles.button}>
                    <Button onPress={() => Alert.alert('Hesabınız başarıyla Açıldı.')}  
                    color='#c0392b' 
                    style={styles.buttonHesapAc}  
                    title='Yeni Hesap Aç'/>
                </View>
                <View style={styles.containerStyle}>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('HesapDetay')} style={styles.subContainerStyle}>
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

const mainNavigator=createStackNavigator({
    Account:{screen:Account},
    HesapDetay:{screen:HesapDetay},
  
  },{
    headerMode:'none'
  }
  );
const App=createAppContainer(mainNavigator)
export default App;
