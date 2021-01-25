import moment from 'moment';
import 'moment/locale/id';

export function durationDay(date, days){
  let now = moment(new Date());
  let end = moment(new Date(Date.parse(date))).add(days, 'days');
  let duration = moment.duration(new Date(end)-new Date(now), 'milliseconds')
  if(duration.days() > 0) {
    return duration.days() +" Hari "+duration.hours()+" Jam"
  }else if(duration.days() === 0 && duration.hours() > 1){
    return duration.hours()+" Jam "+duration.minutes() +" Menit"
  }else{
    return "Kurang dari sejam lagi"
  }
}
export function dayDifference (date){
  return moment(Date.now()).locale('id').diff(moment(date), 'days')
};

export function convertNumberToText(number){
	if(number > 999999999999){
		let final = number / 1000000000000;
		return `${final.toFixed(1)}T`
	}else if(number > 999999999){
		let final = number / 1000000000;
		return `${final.toFixed(1)}M`
	}else if(number > 999999){
		let final = number / 1000000;
		return `${final.toFixed(1)}jt`
	}else if(number > 999){
		let final = number / 1000;
		return `${final.toFixed(1)}rb`
	}else{
		return number
	}
}

export function calculationLastLogin(stringDate){
	let oneDay = 24*60*60*1000;
	let oneHours = 60*60*1000;
	let oneMinutes = 60*1000;
	let now = new Date();
	let dateLastLogin = new Date(stringDate);
	let diffMs = now - dateLastLogin;
	let diffDays = Math.floor(diffMs/oneDay);
	let diffMonth = Math.floor(diffDays/30);
	let diffYear = Math.floor(diffDays%365)
	let diffHrs = Math.floor((diffMs%oneDay)/oneHours);
	let diffMins = Math.floor(((diffMs%oneDay)%oneHours)/oneMinutes);

	if(diffMins<=60){
		return diffMins+' Menit'
	}else if ((diffMins>60) && (diffHrs<=24)){
		return diffHrs+' Jam'
	}else if((diffHrs>24) && (diffDays<=30)){
		return diffDays+' Hari'
	}else if((diffDays > 30) && (diffMonth < 12)){
		return diffMonth+' Bulan'
	}else{
		return diffYear+' Tahun';
	}
}

export function sliceNameProduct(data){
	if(data.length > 45){
		return data.slice(0,45)+' ...'
	}else{
		return data
	}
}

export function priceStyle(number){
	var myString = String( number );
	return myString.split( /(?=(?:...)*$)/ ).join(".")
}

export function getDayAndDate(stringDate){
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let date = new Date(Date.parse(stringDate));
  return date.toLocaleDateString('id-ID', options)
}

export function getTime(stringDate){
  let date = new Date(Date.parse(stringDate));
  let hour = date.getHours();
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? '0'+minutes : minutes
  return hour+":"+minutes
}

export function fullTime(stringDate){
  let date = new Date(Date.parse(stringDate));
  return `${date.toLocaleTimeString()}`
}
export function halfDate(stringDate){
  return moment(stringDate).locale('id').format('ll')
}
export function parseDate(stringDate){
  return moment(stringDate).locale('id').format('L')
}

export function fullDate(stringDate){
	let date = new Date(Date.parse(stringDate));
	let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
	return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
}

export function fullDateTime(stringDate){
	let date = new Date(Date.parse(stringDate));
	let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
	return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}, ${date.toLocaleTimeString()}`
}

export function getCalculationDate(stringDate){
	let oneDay = 24*60*60*1000;
	let created = new Date(Date.parse(stringDate));
	let now = Date.now();
	let diffDays = (now - created) / oneDay;
	let days = Math.floor(diffDays);
	if(days <= 30){
		return days+' Hari'
	}else if((days > 30) && (days < 365) ){
		let month = Math.floor(days/30);
		let day = days%30;
		if(day === 0){
			return month+" Bulan"
		}else{
			return month+" Bulan, "+day+" Hari"
		}
	}else{
		let year = Math.floor(days/365);
		let sisaTahun = days%365;
		let bulan = Math.floor(sisaTahun/30);
		let hari = sisaTahun%30;
		if(sisaTahun === 0){
			return year+" Tahun"
		}else if((sisaTahun !== 0) && (hari === 0)){
			return year+" Tahun, "+bulan+" Bulan"
		} else{
			return year+" Tahun, "+bulan+" Bulan, "+hari+" Hari"
		}
	}
}
