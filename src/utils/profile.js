import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateInputAddressList(data){
	let errors = {}

	if(validator.isEmpty(String(data.name_address_as))){
		errors.name_address_as = 'Nama alamat tidak boleh kosong';
	}

	if(validator.isEmpty(String(data.receiver_name))){
		errors.receiver_name = 'Nama penerima tidak boleh kosong';
	}

	if(validator.isEmpty(String(data.phone_number))){
		errors.phone_number = 'Nomor telepon penerima tidak boleh kosong';
	}

	if(validator.isEmpty(String(data.address))){
		errors.address = 'Alamat penerima tidak boleh kosong';
	}

	if(validator.isEmpty(String(data.postal_code))){
		errors.postal_code = 'Kode Pos tidak boleh kosong';
	}

	if(validator.isEmpty(String(data.subdistrict_id))){
		errors.subdistrict_id = 'Diharuskan memilih Kecamatan';
	}

	if(validator.isEmpty(String(data.city_id))){
		errors.city_id = 'Diharuskan memilih Kabupaten / Kota';
	}

	if(validator.isEmpty(String(data.province_id))){
		errors.province_id = 'Diharuskan memilih Provinsi';
	}
	return{
		errors,
		isValid:isEmpty(errors)
	}
}

export function validateInputBankAccount(data){
	let errors = {}

	if(validator.isEmpty(String(data.account_name))){
		errors.account_name = 'Nama pemilik rekening tidak boleh kosong';
	}

	if(validator.isEmpty(String(data.account_number))){
		errors.account_number = 'Nomor rekening tidak boleh kosong';
	}

	if(validator.isEmpty(String(data.bank_id))){
		errors.bank_name = 'Nama bank tidak boleh kosong';
	}

	return{
		errors,
		isValid:isEmpty(errors)
	}
}
