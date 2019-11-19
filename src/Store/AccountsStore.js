import {observable,action, configure,runInAction} from 'mobx'

import AuthStore from './AuthStore'

configure({
  enforceActions:'observed'
})

class AccountsStore {
    @observable accounts = [];

    @observable allAccounts = [];
    
    @action async getAllAccounts(){
      try{
            
        fetch('https://bankappapi.azurewebsites.net/api/hesap/', 
           { // extralar    
           method: 'GET',
           headers: {
             'Content-Type': 'text/html'
           },    
           })
             .then((res) => res.json()) 
             .then((res) => {
                runInAction (()=>{
                  
                    this.allAccounts = res;
                  
                })
                
             })
             .catch((error) => {     
                console.log(error)
             });
    }catch(e){
      console.log(e)
  }
    }

    @action async getAccounts(){
        try{
            
            fetch('https://bankappapi.azurewebsites.net/api/hesap/liste?id='+AuthStore.MusteriID, 
               { // extralar    
               method: 'GET',
               headers: {
                 'Content-Type': 'text/html'
               },    
               })
                 .then((res) => res.json()) 
                 .then((res) => {
                    runInAction (()=>{
                      
                        this.accounts = res;
                      
                    })
                    
                 })
                 .catch((error) => {     
                    console.log(error)
                 });
        }catch(e){
          console.log(e)
        }
    }
}

export default new AccountsStore();

