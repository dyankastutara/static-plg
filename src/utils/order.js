import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateInputOrder(data){
	let errors = {}
  let orders = data.orders;
	if(!data.deliveryAddress_id){
		errors.deliveryAddress_id = 'Diharuskan memilih alamat pengiriman';
	}
  for(let i=0;i<orders.length;i++){
    if(validator.isEmpty(String(orders[i].store))){
      errors.store = 'Harus memiliki barang yang ingin dibeli';
			break;
    }
    if(!orders[i].hasOwnProperty('shipping')){
      errors.shipping = 'Diharuskan memilih jasa pengiriman';
			break;
    }
    if(!orders[i].hasOwnProperty('services')){
      errors.services = 'Diharuskan memilih paket pengiriman';
			break;
    }
    if(!orders[i].hasOwnProperty('shipping_cost') || validator.isEmpty(String(orders[i].shipping_cost))){
      errors.shipping_cost = 'Ongkos kirim tidak tersedia silahkan pilih jasa pengiriman yang lain';
			break;
    }
    if(!orders[i].hasOwnProperty('products') || validator.isEmpty(String(orders[i].products))){
      errors.products = 'Ongkos kirim tidak tersedia silahkan pilih jasa pengiriman yang lain';
			break;
    }
  }
	return{
		errors,
		isValid:isEmpty(errors)
	}
}
