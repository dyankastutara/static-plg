import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateInputPaymentConfirm(data){
	let errors = {}
	if(validator.isEmpty(String(data.payment_mode)) || validator.isEmpty(String(data.destination_account))){
		errors.message = 'Pilih tujuan bank transfer anda !';
	}
	return{
		errors,
		isValid:isEmpty(errors)
	}
}
