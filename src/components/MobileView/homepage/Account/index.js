import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd-mobile';
import { Icon, Button, Card } from 'antd';

import { priceStyle } from '../../../../utils/modifiedText';

const Item = List.Item;

class Account extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  renderSaldo = (balance) => (
    <div style={{fontWeight:'bold', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <div>
        <div style={{fontWeight:'bold'}}>Saldo</div>
        <div style={{color:"#000", fontSize:14}}>Rp. {priceStyle(100000)}, -</div>
      </div>
      <div>
        <Button type="primary" ghost style={{borderRadius: '2px', paddingLeft:16, paddingRight:16}} size="small" onClick={() => {}}>DETAIL</Button>
      </div>
    </div>
  )
  render(){
    return(
      <div>
        <div style={{backgroundColor:"#464E65", position:'fixed', width:'100%', height:'50px', top:0, zIndex:2, display:'flex', alignItems:'center', paddingLeft:20, paddingRight:20}}>
          <div style={{color:"#fff", fontSize:18, fontWeight:700}}>Akun</div>
        </div>
        <div style={{marginTop:55}}>
          <div style={{ width: "100%", paddingBottom:55 }}>
            <List>
              <Item onClick={()=>{}}>
                <div style={{fontWeight:'bold', display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
                  <div style={{marginRight:12}}>
                    <Card style={{ width: 50, height:50, borderRadius: 3 }} cover={<img alt="example" src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" style={{width:50, height:50, borderRadius: 3}}/>}/>
                  </div>
                  <div>
                    <div style={{fontWeight:'bold', fontSize:16}}>Nama Pengguna</div>
                    <div style={{ fontSize:11}}><i>Akun Terverifikasi</i></div>
                  </div>
                </div>
              </Item>
            </List>
            <List renderHeader="Rp. 100.000" style={{borderRadius:0}}>
              <Item arrow="horizontal">
                 Chats
              </Item>
              <Item arrow="horizontal">
                 Diskusi
              </Item>
              <Item arrow="horizontal">
                 Ulasan
              </Item>
              <Item arrow="horizontal">
                 Komplain
              </Item>
            </List>
            <List renderHeader={()=> <div style={{fontWeight:'bold', color:"#000"}}>Permintaan</div>} style={{borderRadius:0}}>
              <Item arrow="horizontal">
                 Tambah Permintaan
              </Item>
              <Item arrow="horizontal">
                 Daftar Permintaan Saya
              </Item>
            </List>
            <List renderHeader={()=> <div style={{fontWeight:'bold', color:"#000"}}>Toko Saya</div>} style={{borderRadius:0}}>
              <Item arrow="horizontal">
                 Buka Toko
              </Item>
            </List>
            <List renderHeader={()=> <div style={{fontWeight:'bold', color:"#000"}}>Toko Saya</div>} style={{borderRadius:0}}>
              <Item arrow="horizontal">Penjualan</Item>
              <Item arrow="horizontal">Tambah Produk</Item>
              <Item arrow="horizontal">Daftar Produk</Item>
              <Item arrow="horizontal">Pengaturan Toko</Item>
            </List>
            <List renderHeader={()=> <div style={{fontWeight:'bold', color:"#000"}}>RFQ Plasgos</div>} style={{borderRadius:0}}>
              <Item arrow="horizontal">RFQ</Item>
              <Item arrow="horizontal">Daftar Penawaran Saya</Item>
            </List>
            <List renderHeader={()=> <div style={{fontWeight:'bold', color:"#000"}}>Profil Saya</div>} style={{borderRadius:0}}>
              <Item arrow="horizontal">Menunggu Pembayaran</Item>
              <Item arrow="horizontal">Pembelian</Item>
              <Item arrow="horizontal"  thumb={<Icon type="heart" />}>
                 Wishlist
              </Item>
              <Item arrow="horizontal"  thumb={<Icon type="star" />}>
                 Toko Favorit
              </Item>
              <Item arrow="horizontal">
                 Pengaturan Profil
              </Item>
            </List>

            <List renderHeader={()=> <div style={{fontWeight:'bold', color:"#000"}}>Bantuan</div>} style={{borderRadius:0}}>
              <Item arrow="horizontal">
                 Cara Pembelian
              </Item>
              <Item arrow="horizontal">
                 Cara Penjualan
              </Item>
              <Item arrow="horizontal">
                 Tentang Kami
              </Item>
              <Item arrow="horizontal">
                 Karir
              </Item>
              <Item arrow="horizontal">
                 Kebijakan Privasi
              </Item>
              <Item arrow="horizontal">
                 Syarat & Ketentuan
              </Item>
              <Item arrow="horizontal">
                 Hubungi Kami
              </Item>
              <a href="https://blog.plasgos.com" target="_blank" rel="noopener noreferrer"><Item arrow="horizontal">Blog Plasgos</Item></a>
            </List>
            <List style={{borderRadius:0}} renderHeader={()=> <div style={{fontWeight:'bold', color:"#000"}}>Keluar</div>}>
              <Item thumb={<Icon type="logout" />}>
                 Keluar
              </Item>
            </List>
          </div>
        </div>
      </div>
    )
  }
}
export default Account;
