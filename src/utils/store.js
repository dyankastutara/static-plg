import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateInputCreateStore(data){
	let errors = {}

	if(validator.isEmpty(String(data.name))){
		errors.name = 'Nama toko tidak boleh kosong';
	}

	if(validator.isEmpty(String(data.subdomain_store))){
		errors.subdomain_store = 'Subdomain toko tidak boleh kosong';
	}
	if(validator.isEmpty(String(data.business_type))){
		errors.business_type = 'Diharuskan memilih tipe bisnis';
	}
	if(validator.isEmpty(String(data.description))){
		errors.description = 'Deskripsi tidak boleh kosong';
	}

	if(data.description.length < 30){
		errors.description = 'Deskripsi tidak boleh kurang dari 30 karakter.';
	}

	return{
		errors,
		isValid:isEmpty(errors)
	}
}

export function validateAddressShipping(data){
	let errors = {}
	if(validator.isEmpty(String(data.address))){
		errors.address = 'Alamat Alamat lokasi asal pengiriman tidak boleh kosong';
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
