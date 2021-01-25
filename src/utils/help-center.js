import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateInputHelpCenter(data){
	let errors = {}

	if(validator.isEmpty(String(data.name))){
		errors.name = 'Nama tidak boleh kosong';
	}

	if(validator.isEmpty(String(data.phone_number))){
		errors.phone_number = 'Nomor telepon penerima tidak boleh kosong';
	}

	if(validator.isEmpty(String(data.email))){
		errors.email = 'Email aktif tidak boleh kosong';
	}

	if(validator.isEmpty(String(data.subject))){
		errors.subject = 'Harus pilih subjek pesan';
	}

	if(validator.isEmpty(String(data.text))){
		errors.text = 'Pesan tidak boleh kosong';
	}

	return{
		errors,
		isValid:isEmpty(errors)
	}
}
