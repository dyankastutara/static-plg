import isEmpty from 'lodash/isEmpty';

export function validateInputReview(data){
	let errors = {}
	if(!data.point || data.point === 0){
		errors.point = 'Diharuskan memberi penilaian kualitas produk';
	}
	return{
		errors,
		isValid:isEmpty(errors)
	}
}
