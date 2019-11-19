import React, { Component } from 'react';

import {Button, Content, Input, Item, Spinner, Text} from "native-base";
import {Formik} from "formik";

//import api from '../../api/api';
import validations from './validations';
import { Alert } from 'react-native';

export default class SignupForm extends Component {
	_handleSubmit = (values) => {
		var TCKN=values.TCKimlik
		var pass=values.Parola
		var ad=values.Ad
		var soyad=values.Soyad
		var dogumTarihi=values.DogumTarihi
		var telefonNumarasi = values.TelefonNumarasi
		var adres = values.Adres
		var email = values.Email
		
		fetch('https://bankappapi.azurewebsites.net/api/Musteri', { 
				method: 'POST',
				headers: {
			  'Content-Type': 'text/html',
		  },
		  body: JSON.stringify({
			TcKimlik: TCKN,
			Parola: pass,
			Ad: ad,
			Soyad: soyad,
			DogumTarihi: dogumTarihi,
			Telefon: telefonNumarasi,
			Adres: adres,
			Email: email,
		  }),
				
			})
			.then((res) => res.json()) // gelen datayı parse ediyoruz
			.then((res) => {
			console.log('ok',res.result)
				if(res.Ad !=null){
				Alert.alert("doru")
				}
				else{
				console.log("hata")
				}
			})
    };
    
  render() {
    return (
			<Formik
				initialValues={{
					TCKimlik: '',
                    Parola: '',
                    Ad:'',
                    Soyad:'',
                    DogumTarihi:'',
                    TelefonNumarasi:'',
                    Adres:'',
                    Email:''
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
								placeholder='Tc Kimlik Numarası'
								onBlur={() => setFieldTouched('TCKimlik')}
                                autoCapitalize={'none'}
								keyboardType={'numeric'}
							/>

							{ (errors.TCKimlik && touched.TCKimlik) && <Text style={{color: 'red'}}>{errors.TCKimlik}</Text>}
						</Item>
                        <Item error={errors.Ad && touched.Ad}>
							<Input
                                
								onChangeText={handleChange('Ad')}
								value={values.Ad}
								placeholder='Ad'
								onBlur={() => setFieldTouched('Ad')}
								autoCapitalize={'none'}
							/>

							{ (errors.Ad && touched.Ad) && <Text style={{color: 'red'}}>{errors.Ad}</Text>}
						</Item>
                        <Item error={errors.Soyad && touched.Soyad}>
							<Input
                                
								onChangeText={handleChange('Soyad')}
								value={values.Soyad}
								placeholder='Soyad'
								onBlur={() => setFieldTouched('Soyad')}
								autoCapitalize={'none'}
							/>

							{ (errors.Soyad && touched.Soyad) && <Text style={{color: 'red'}}>{errors.Soyad}</Text>}
						</Item>
                        <Item error={errors.DogumTarihi && touched.DogumTarihi}>
							<Input
                                
								onChangeText={handleChange('DogumTarihi')}
								value={values.DogumTarihi}
								placeholder='Doğum Tarihi (YIL/AY/GÜN)'
								onBlur={() => setFieldTouched('DogumTarihi')}
								autoCapitalize={'none'}
							/>

							{ (errors.DogumTarihi && touched.DogumTarihi) && <Text style={{color: 'red'}}>{errors.DogumTarihi}</Text>}
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
						<Item error={errors.TelefonNumarasi && touched.TelefonNumarasi}>
							<Input
                                
								onChangeText={handleChange('TelefonNumarasi')}
								value={values.TelefonNumarasi}
								placeholder='Telefon Numarası'
								onBlur={() => setFieldTouched('TelefonNumarasi')}
								autoCapitalize={'none'}
								keyboardType={'numeric'}
							/>

							{ (errors.TelefonNumarasi && touched.TelefonNumarasi) && <Text style={{color: 'red'}}>{errors.TelefonNumarasi}</Text>}
						</Item>
                        <Item error={errors.Adres && touched.Adres}>
							<Input
                                
								onChangeText={handleChange('Adres')}
								value={values.Adres}
								placeholder='Adres'
								onBlur={() => setFieldTouched('Adres')}
								autoCapitalize={'none'}
							
							/>

							{ (errors.Adres && touched.Adres) && <Text style={{color: 'red'}}>{errors.Adres}</Text>}
						</Item>
                        <Item error={errors.Email && touched.Email}>
							<Input
								onChangeText={handleChange('Email')}
								value={values.Email}
								placeholder='Email'
								onBlur={() => setFieldTouched('Email')}
								autoCapitalize={'none'}
								keyboardType={'email-address'}
							/>

							{ (errors.Email && touched.Email) && <Text style={{color: 'red'}}>{errors.Email}</Text>}
						</Item>
						

						<Button
							block
							disabled={!isValid || isSubmitting}
							onPress={handleSubmit}
							style={{marginTop: 10}}>

							{ isSubmitting && <Spinner size={'small'} color={'white'} /> }
							<Text>Kayıt Ol</Text>
						</Button>
					</Content>
				)}
			</Formik>
    );
  }
}