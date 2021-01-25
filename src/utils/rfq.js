import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateInputRFQ(data){
	let errors = {}

	if(validator.isEmpty(data.user_name)){
		errors.user_name = 'Nama Barang / Jasa tidak boleh kosong';
	}

	if(validator.isEmpty(data.user_email)){
		errors.user_email = 'Nama Barang / Jasa tidak boleh kosong';
	}

	if(validator.isEmpty(data.user_phone_number)){
		errors.user_phone_number = 'Nama Barang / Jasa tidak boleh kosong';
	}

	if(validator.isEmpty(data.name_item)){
		errors.name_item = 'Nama Barang / Jasa tidak boleh kosong';
	}

	if(validator.isEmpty(String(data.category))){
		errors.category = 'Diharuskan memilih kategori';
	}

  if(data.quantity < 1){
		errors.quantity = 'Jumlah permintaan minimal 1';
	}

  if(validator.isEmpty(data.description)){
    errors.description = 'Deskripsi produk tidak boleh kosong'
  }

  if(data.last_response_date === null){
    errors.last_response_date = 'Tanggal penawaran terakhir harus diisi'
  }

	return{
		errors,
		isValid:isEmpty(errors)
	}
}
