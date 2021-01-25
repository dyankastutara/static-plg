import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateInputProduct(data){
	let errors = {}
	if(validator.isEmpty(String(data.name))){
		errors.name = 'Nama produk tidak boleh kosong';
	}

	if(validator.isEmpty(String(data.category_id))){
		errors.category_id = 'Diharuskan memilih kategori produk';
	}

	if(validator.isEmpty(String(data.showcase_id))){
		errors.showcase_id = 'Diharuskan memilih etalase';
	}

	if(validator.isEmpty(String(data.price))){
		errors.price = 'Harga tidak boleh kosong';
	}

	if(validator.isEmpty(String(data.weight))){
		errors.weight = 'Berat tidak boleh kosong';
	}

	if(validator.isEmpty(String(data.condition))){
		errors.condition = 'Diharuskan memilih kondisi produk';
	}

	if(validator.isEmpty(String(data.is_empty))){
		errors.is_empty = 'Diharuskan memilih status stok produk';
	}

	if(data.fileList.length === 0){
		errors.fileList = 'Diharuskan upload minimal 1 gambar / foto produk';
	}

	if(data.grocier_price){
		if(data.grocier_price.length > 0){
			let arr = data.grocier_price.sort((a,b)=> a.min_order - b.min_order)
			if(arr[0].min_order < data.min_order){
				errors.min_order = 'Pemesanan Minimum tidak boleh lebih besar dari minimal grosir';
			}

			if(arr.length > 1){
				for(let i = 1; i<arr.length; i++){
          if((arr[i-1].min_order >= arr[i].min_order) || (arr[i-1].price <= arr[i].price)){
						errors.grocier_price = "Diharapkan Minimal atau Harga grosir diperbaiki terlebih dahulu";
          }
				}
			}
		}
	}
	return{
		errors,
		isValid:isEmpty(errors)
	}
}
