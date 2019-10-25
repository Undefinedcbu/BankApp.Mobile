import React, { Component} from 'react';
import { Text,Button, View ,AsyncStorage,StyleSheet,Image } from 'react-native';
import Account from './Account';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bakiyeniz: '',
            bakiyeli:'',
            
    
    };
}



    render(){
        
        return(
            <View style={styles.container}>
                <View style={styles.image} >
                    <View style={styles.logo}>
                        <Text style={styles.bakiye} 
                         value={this.state.bakiyeniz}
                         onChangeText={(value) => this.setState({adres: value})}
                         >Bakiyeniz:</Text>
                        <Text value={this.state.bakiyeli}
                         onChangeText={(value) => this.setState({bakiyeli: value})}style={styles.bakiyelira}>100.000,00</Text>
                         <Text></Text>
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

/*const mainNavigator=createStackNavigator({
    Home:{screen:Home},
    Account:{screen:Account},
  
  },{
    headerMode:'none'
  }
  );
const App=createAppContainer(mainNavigator)
export default App;*/
export default Home;