import {observable,action} from 'mobx'
import NavigationService from '../NavigationService';
import  AsyncStorage  from '@react-native-community/async-storage';

class AuthStore {
    @observable MusteriID =null;

    @action async saveID(MusteriID){
        try{
            await AsyncStorage.setItem('MusteriID', MusteriID);
            await this.setUp();
        }catch (e) {
            console.log(e);
        }
    }
    
    @action async removeID(){
        try{
            await AsyncStorage.removeItem('MusteriID');
            this.MusteriID = null;
            await this.setUp();
        }catch (e) {
            console.log(e);
        }
    }
    
    @action async setUp(){
        await this.getID();
    }
    
    @action async getID(){
        try{
            const MusteriID = await AsyncStorage.getItem('MusteriID');
            if (!MusteriID) {
              NavigationService.navigate('Auth');
                return false;
            }
    
            this.MusteriID = MusteriID;
            NavigationService.navigate('App');
        }catch (e) {
            console.log(e);
        }
    }
        
}

export default new AuthStore();



