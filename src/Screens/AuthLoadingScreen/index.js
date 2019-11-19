import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {inject} from 'mobx-react'
@inject('AuthStore')
export default class index extends Component {
    async componentDidMount() {
        
       await this.props.AuthStore.setUp(); 
    }
    
    render() {
        return (
            <View>
                <Text> Loading </Text>
            </View>
        )
    }
}
