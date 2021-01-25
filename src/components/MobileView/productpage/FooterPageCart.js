import React from 'react'
import {Button} from 'antd';

import './FooterPage.less'


class FooterPageCart extends React.Component {
  render () {
    return (
     <div style={{position:'fixed', width:'100%', bottom:0, zIndex:100, display:'flex', alignItems:'center', padding:10, backgroundColor:"#FFFFFF", borderTop: '1px solid #dae2ee'}}>
      <div style={{marginRight:10}}>
          <Button
            icon="message"
            size="large" style={{ fontSize: 16, fontWeight:'bold', borderRadius:0}} disabled={false}/>
      </div>
      <div style={{marginRight: 10}}>
        <Button onClick={this.addToBasketButton} size="large" style={{ borderRadius:0}} disabled={false}>Tambah ke Keranjang</Button>
      </div>
        <Button type="primary" style={{fontSize: 16, fontWeight:'bold', borderRadius:0}} block size="large" disabled={false}>Beli</Button>
     </div>
    )
  }
}

export default FooterPageCart;
