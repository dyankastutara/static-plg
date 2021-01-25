import React from 'react';
import { Input } from 'antd';

import Notification from './Notification';
import BoxIcon from './Box';
import MessageIcon from './Message';
import './Navbar.less';
import 'antd-mobile/dist/antd-mobile.less';

const { Search } = Input;
class Navbar extends React.Component{
  render(){
    return(
      <div style={{backgroundColor:"#fff", position:'fixed', width:'100%', height:'50px', top:0, zIndex:2, display:'flex', alignItems:'center', paddingLeft:8, paddingRight:8}}>
        <div style={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Search
            placeholder="Apa yang ingin Anda Cari"
            style={{paddingRight:8, marginRight:5, borderRadius:50}}
            onSearch={value=>{}}
            onChange={()=>{}}
            value=""
          />
          <div style={{display:'flex', alignItems:'center'}}>
            <div style={{marginRight:5, marginLeft:5}}><BoxIcon key="box"/></div>
            <div style={{marginRight:5, marginLeft:5}}><Notification key="notification"/></div>
            <div style={{marginRight:5, marginLeft:5}}><MessageIcon key="message"/></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
