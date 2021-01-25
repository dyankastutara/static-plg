import React from 'react';
import {Avatar, Icon} from 'antd';
import {priceStyle} from '../../../../../utils/modifiedText';

const styles = {
  cardAvatar:{
    height: 110,
    width: 110,
    display:'fledx',
    justifyContent:'center',
    alignItems:'center',
    padding:0
  },
  avatar:{
    height: 108,
    width: 108,
    objectFit:'scale-down'
  }
}
export default class CardFeed extends React.Component{
  render(){
    return(
      <div style={{ width: "100%", padding:10, borderRadius:3, border:'1px solid #dae2ed', backgroundColor:"#fff" }}>
        <div style={{width: "100%", display:'flex', justifyContent:'space-between', alignItems:'center', padding:0}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Avatar src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" size="large" shape="square" style={{border:'1px solid #dae2ed'}}/>
            <div style={{marginLeft:'1em'}}>
              <div><a href={`/shop`}><b>Nama Toko / Perusahaan</b></a></div>
              <div><Icon type="environment-o" /> Kota / Kabupaten</div>
            </div>
          </div>
          <div><a href={`/product`}>Lihat Detail</a></div>
        </div>
        <div style={{borderBottom:'1px solid #dae2ed', margin:'10px 0'}}></div>
        <div style={{display:'flex'}}>
          <div style={styles.cardAvatar}>
            <img src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" style={styles.avatar} alt="1"/>
          </div>
          <div style={{marginLeft:'1em'}}>
            <div><b>Nmaa Produk Lengkap</b></div>
            <div style={{color:'red'}}><b>Rp. {priceStyle(100000)}</b></div>
          </div>
        </div>
      </div>
    )
  }
}
