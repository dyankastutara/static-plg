
export function DateConverter(time){
  let bl = ['Januari','Febuari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
  let tgl = time.split('T')[0].split('-')
  let jam = time.split('T')[1].slice(0,5)
  return (`${tgl[2]} ${bl[tgl[1]-1]} ${tgl[0]}, ${jam}`)
}
