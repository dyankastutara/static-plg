import React from 'react';
import { List, Flex } from 'antd-mobile';

const Item = List.Item

class Shipments extends React.Component {
  render() {
    return (
      <div>
        <List renderHeader={() => <div style={{ fontSize: 18, color: "#595959"}}>Dukungan Pengiriman</div>} className="my-list">
        {
          [0,1,2,3,4].map((dt, idx)=>(
            <div key={idx}>
              <Item
                extra={<img src={
                  idx === 0 ? 'https://s3-ap-southeast-1.amazonaws.com/image-plasgos/New_Logo_JNE.png' :
                  idx === 1 ? 'https://s3-ap-southeast-1.amazonaws.com/image-plasgos/logo-expedisi-tiki.jpg' :
                  idx === 2 ? 'https://s3-ap-southeast-1.amazonaws.com/image-plasgos/logo-pos.png' :
                  idx === 3 ? 'https://s3-ap-southeast-1.amazonaws.com/image-plasgos/cek-resi-jnt-express.png' :
                  idx === 4 ? 'https://s3-ap-southeast-1.amazonaws.com/image-plasgos/logo_wahana.png' : "/image/logo_plasgos.png"
                } alt={idx} style={{ width: "70px" ,height: '45px' , marginLeft: 20 }}/>}
              >
                <div style={{ fontSize: 16, color: "#000"}}>
                  Kurir
                </div>
                <Flex wrap style={{fontSize:14, color: "#595959"}}>
                  Service
                </Flex>
              </Item>
            </div>
          ))
        }
        </List>
      </div>
    )
  }
}

export default Shipments;
