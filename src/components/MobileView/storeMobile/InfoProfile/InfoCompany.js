import React from 'react';
import { List } from 'antd-mobile';
import Shipments from './Shipments';
import StorePoint from '../../common/StorePoint';

const Item = List.Item

class InfoCompany extends React.Component {
    render() {
      return (
         <div>
           <List renderHeader={() => <div style={{ fontSize: 18, color: "#595959"}}>Deskripsi</div>}>
             <Item wrap>
               <div style={{fontSize:16, textAlign:'justify'}}>  Line 2:   'connect' is defined but never used           no-unused-vars
  Line 4:   'SimpleLoadingBar' is defined but never used  no-unused-vars
  Line 14:  'PageNotFound' is defined but never used      no-unused-vars</div>
             </Item>
             <Item>
               <div style={{justifyContent:'space-between', display:'flex', alignItems:'center', fontSize:16}}>
                 <div>Tipe Bisnis</div>
                 <div>Seller</div>
               </div>
             </Item>
             <Item>
               <div style={{justifyContent:'space-between', display:'flex', alignItems:'center', fontSize:16}}>
                 <div>Bergabung sejak</div>
                 <div>-</div>
               </div>
             </Item>
           </List>
           <List renderHeader={() => <div style={{ fontSize: 18, color: "#595959"}}>Alamat</div>}>
             <Item wrap>
               <div style={{fontSize:16, textAlign:'justify'}}>Detail ALamat</div>
             </Item>
             <Item extra={<div style={{ fontSize: 16, color: "#000"}}>Kecamatan</div>}><div style={{ fontSize: 16, color: "#000"}}>Kecamatan</div></Item>
             <Item extra={<div style={{ fontSize: 16, color: "#000"}}>Kota Kabupaten</div>}><div style={{ fontSize: 16, color: "#000"}}>Kab. / Kota</div></Item>
             <Item extra={<div style={{ fontSize: 16, color: "#000"}}>Provinsi</div>}><div style={{ fontSize: 16, color: "#000"}}>Provinsi</div></Item>
             <Item extra={<div style={{ fontSize: 16, color: "#000"}}>Kode Pos</div>}><div style={{ fontSize: 16, color: "#000"}}>Kode Pos</div></Item>
           </List>
           <List renderHeader={() => <div style={{ fontSize: 18, color: "#595959"}}>Statistik</div>}>
             <Item>
               <div style={{justifyContent:'space-between', display:'flex', alignItems:'center', fontSize:16}}>
                 <div>Reputasi</div>
                 <div><StorePoint point={30} /></div>
               </div>
             </Item>
                 <Item>
                   <div style={{justifyContent:'space-between', display:'flex', alignItems:'center', fontSize:16}}>
                     <div>Terakhir online</div>
                     <div>-</div>
                   </div>
                 </Item>
           </List>
           <List renderHeader={() => <div style={{ fontSize: 18, color: "#595959"}}>Pemilik Akun</div>}>
            <Item extra={
             <img src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" alt="1" style={{ width: "70px" ,height: '70px' , marginLeft: 20, borderRadius:50 }}/>
           }><div style={{ fontSize: 16, color: "#000"}}>Nama Pengguna</div></Item>
           </List>
           <Shipments />
         </div>
      )
    }
}

export default InfoCompany;
