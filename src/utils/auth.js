import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateInput(data){
	let errors = {}

	if(validator.isEmpty(data.email)){
		errors.email = 'Email is required';
	}

	if(validator.isEmpty(data.password) ){
		errors.password = 'Password is required';
	}

	return{
		errors,
		isValid:isEmpty(errors)
	}
}

export function validateInputForgotPassword(data){
	let errors = {}

	if(validator.isEmpty(data.email)){
		errors.email = 'This field is required';
	}

	return{
		errors,
		isValid:isEmpty(errors)
	}
}

export function validateInputRegister(data){
	let errors = {}

	if(validator.isEmpty(data.name)){
		errors.name = 'Silahkan masukan nama lengkap';
	}

	if(validator.isEmpty(data.email) ){
		errors.email = 'Silahkan masukan email';
	}

	if(validator.isEmpty(data.phone_number) ){
		errors.phone_number = 'Silahkan masukan nomor handphone';
	}

	if(validator.isEmpty(data.password)){
		errors.password = 'Silahkan masukan kata sandi';
	}

	if(validator.isEmpty(data.confirm) ){
		errors.confirm = 'Silahkan masukan konfirmasi kata sandi';
	}
	return{
		errors,
		isValid:isEmpty(errors)
	}
}
