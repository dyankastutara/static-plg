import React from 'react';
import { WingBlank } from 'antd-mobile';
import CardSupplier from '../../common/CardShop';

class NewStoresMobile extends React.Component{
  render(){
    return(
      <div style={{textAlign:'left', marginTop:16}}>
        <WingBlank size="xs">
          <div style={{fontSize:18}}><b>Toko Terbaru:</b></div>
        </WingBlank>
        <div style={{overflow: 'hidden'}}>
          <div style={{display:'flex', overflowY: 'scroll' }}>
            <div style={{margin: 5}} >
              <CardSupplier width="300px"/>
            </div>
            <div style={{margin: 5}} >
              <CardSupplier width="300px"/>
            </div>
            <div style={{margin: 5}} >
              <CardSupplier width="300px"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewStoresMobile;
