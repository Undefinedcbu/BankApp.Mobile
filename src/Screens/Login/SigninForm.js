import React, { Component } from 'react';

import {Button, Content, Input, Item, Spinner, Text} from "native-base";
import {Formik} from "formik";
import validations from './validations';
import { Alert } from 'react-native';

import {inject} from 'mobx-react'
@inject('AuthStore')
export default class SigninForm extends Component {
	
	_handleSubmit = (values) => {
		var TCKN = values.TCKimlik;
        var pass = values.Parola;
 
    fetch('https://bankappapi.azurewebsites.net/api/musteri?TCKimlik='+TCKN+'&parola='+pass+'',//'+TCKN+'&parola='+pass+'', 
    { // extralar    
      method: 'POST',
      headers: {
        'Content-Type': 'text/html'
      },    
    })
	    .then((res) => res.json()) // gelen datayı parse ediyoruz
	    .then((res) => {
	    if (res.MusteriID != null){
		  this.props.AuthStore.saveID(""+res.MusteriID);
        }                   
        else
          Alert.alert("TC Numaranız yada parolanız yanlış");
	    })
	    .catch((error) => {     
        console.log("başarısız çünkü "+ error)
	    });
	};

  render() {
    return (
		
			<Formik
				initialValues={{
					TCKimlik: '',
					Parola: '',
				
				}}
				onSubmit={this._handleSubmit}
				validationSchema={validations}
			>
				{({
						values,
						handleChange,
						handleSubmit,
						errors,
						touched,
						setFieldTouched,
						isValid,
						isSubmitting
					}) => (
					<Content style={{padding: 10}}>
						<Item error={errors.TCKimlik && touched.TCKimlik}>
							<Input
								onChangeText={handleChange('TCKimlik')}
								value={values.TCKimlik}
								placeholder='TCKimlik'
								onBlur={() => setFieldTouched('TCKimlik')}
								autoCapitalize={'none'}
								keyboardType={'numeric'}
							/>

							{ (errors.TCKimlik && touched.TCKimlik) && <Text style={{color: 'red'}}>{errors.TCKimlik}</Text>}
						</Item>

						<Item error={errors.Parola && touched.Parola}>
							<Input
								onChangeText={handleChange('Parola')}
								value={values.Parola}
								placeholder='Parola'
								onBlur={() => setFieldTouched('Parola')}
								autoCapitalize={'none'}
								secureTextEntry={true}
							/>

							{ (errors.Parola && touched.Parola) && <Text style={{color: 'red'}}>{errors.Parola}</Text>}
						</Item>

						<Button
							block
							disabled={!isValid || isSubmitting}
							onPress={handleSubmit}
							style={{marginTop: 10}}>

							{ isSubmitting && <Spinner size={'small'} color={'white'} /> }
							<Text>Giriş Yap</Text>
						</Button>
					</Content>
				)}
			</Formik>
    );
  }
}