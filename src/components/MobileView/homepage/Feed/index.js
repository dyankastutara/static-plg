import React from 'react';
import { List } from 'antd';
import { WingBlank } from 'antd-mobile';

import CardFeed from './common/CardFeed';


class Feeds extends React.Component{
  render() {
    return(
      <div>
        <div style={{backgroundColor:"#464E65", position:'fixed', width:'100%', height:'50px', top:0, zIndex:2, display:'flex', alignItems:'center', paddingLeft:20, paddingRight:20}}>
          <div style={{color:"#fff", fontSize:18, fontWeight:700}}>Timeline</div>
        </div>
        <div style={{marginTop:55}}>
          <WingBlank size="xs">
            <div style={{width:'100%', marginTop:'0.5em'}}>
              <List
                loading={false}
                itemLayout="horizontal"
                dataSource={[1,2,3,4,5,6]}
                renderItem={item => (
                  <List.Item>
                    <CardFeed />
                  </List.Item>
                )}
              />
            </div>
          </WingBlank>
        </div>
      </div>
    )
  }
}

export default Feeds;
