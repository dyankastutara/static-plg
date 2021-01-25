import {message} from 'antd';

export function dataURLtoFile(dataurl, filename) {
   var arr = dataurl.split(','),
       mime = arr[0].match(/:(.*?);/)[1],
       bstr = atob(arr[1]),
       n = bstr.length,
       u8arr = new Uint8Array(n);
   while(n--){
       u8arr[n] = bstr.charCodeAt(n);
   }
   return new File([u8arr], filename, {type:mime});
}

export function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export function beforeUpload(file) {
  if(file){
    const isJPG = file.type === 'image/jpeg';
    const isPNG = file.type === 'image/png';

    if (!isJPG && !isPNG) {
      message.error('Anda hanya dapat mengunggah file JPG, JPEG, dan PNG !');
    }
    const isLt2M = file.size / 1024 / 1024 < 3;
    if (!isLt2M) {
      message.error('Ukuran gambar harus lebih kecil dari 3MB!');
    }
    return (isJPG || isPNG) && isLt2M;
  }
}
