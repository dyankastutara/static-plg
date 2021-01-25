import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateInputWithdraw(data){
  let errors = {}

	if(validator.isEmpty(String(data.bank_account_id)) || !data.bank_account_id){
		errors.bank_account_id = 'Diharuskan memilih bank';
	}

	if(validator.isEmpty(data.password)){
		errors.password = 'Diharuskan memasukan password';
	}

  if(!data.withdraw_amount){
		errors.withdraw_amount = 'Diharuskan memasukan jumlah dana yang ingin ditarik.';
	}
  if(data.withdraw_amount < 10000){
		errors.withdraw_amount = 'Jumlah dana yang ditarik minimal 10000';
	}

	return{
		errors,
		isValid:isEmpty(errors)
	}
}
