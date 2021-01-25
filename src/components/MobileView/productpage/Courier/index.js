import React from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;
// const data =[
//    {
//         nama : "JNE",
//         photo : "https://s3-ap-southeast-1.amazonaws.com/image-plasgos/New_Logo_JNE.png",
//         layanan : "YES, REG, OKE"
//    },
//    {
//         nama : "TIKI",
//         photo : "https://s3-ap-southeast-1.amazonaws.com/image-plasgos/logo-expedisi-tiki.jpg",
//         layanan : "REG"
//    },
//    {
//         nama : "POS",
//         photo : "https://s3-ap-southeast-1.amazonaws.com/image-plasgos/logo-pos.png",
//         layanan : "REG"
//    },
//    {
//         nama : "J & T",
//         photo : "https://s3-ap-southeast-1.amazonaws.com/image-plasgos/cek-resi-jnt-express.png",
//         layanan : "REG"
//    },
//    {
//         nama : "WAHANA",
//         photo : "https://s3-ap-southeast-1.amazonaws.com/image-plasgos/logo_wahana.png",
//         layanan : "REG"
//    },
//    {
//         nama : "Plasgos-Express",
//         photo : "https://s3-ap-southeast-1.amazonaws.com/image-plasgos/logo_wahana.png",
//         layanan : "REG"
//    }
// ]

class Courier extends React.Component {
  render(){
    return(
      <div style={{ width: "100%" }}>
        <List >
          <Item>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div>
                <div style={{fontSize:15}}>Kurir</div>
                <div style={{fontSize:12}}>Service</div>
              </div>
            </div>
          </Item>
          <Item>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div>
                <div style={{fontSize:15}}>Kurir</div>
                <div style={{fontSize:12}}>Service</div>
              </div>
            </div>
          </Item>
          <Item>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div>
                <div style={{fontSize:15}}>Kurir</div>
                <div style={{fontSize:12}}>Service</div>
              </div>
            </div>
          </Item>
          <Item>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div>
                <div style={{fontSize:15}}>Kurir</div>
                <div style={{fontSize:12}}>Service</div>
              </div>
            </div>
          </Item>
        </List>
      </div>
    )
  }
}

export default Courier;
