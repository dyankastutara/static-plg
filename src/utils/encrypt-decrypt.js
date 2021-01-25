import CryptoJS from 'crypto-js';

export function encrypt(text){
  let ciphertext = CryptoJS.AES.encrypt(text, 'Plas)()^0452');
  return ciphertext.toString()
}

export function decrypt(text){
  var bytes  = CryptoJS.AES.decrypt(text, 'Plas)()^0452');
  var plaintext = bytes.toString(CryptoJS.enc.Utf8);
  return plaintext;
}
