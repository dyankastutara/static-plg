import React from 'react';
import { WingBlank } from 'antd-mobile';
import { Pagination } from 'antd'
import PropTypes from 'prop-types';

import CardProduct from '../../common/CardProduct';
import Etalase from '../common/Etalase';

class ListProduct extends React.Component {
  static contextTypes = {
   router:PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      store_id:null,
      pageCurrent:1,
      pageSize:10,
      search:'',
      showcase_id:null
    };
  }

  render () {
    return (
      <div>
        <WingBlank size="sm">
          <div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%',backgroundColor:"#fff", height:40}}>
              <div style={{ fontSize: 18, fontWeight: 'bold'}}>{'Semua Etalase'}</div>
              <div><Etalase /></div>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', width:'100%'}}>
            {
              [0,1,2].map((dt, index)=>{
                return (
                  <div key={index} style={{ width:'49%', margin:'5px 0px' }}>
                    <CardProduct />
                  </div>
                )
              })
            }
            </div>
          </div>
          <div style={{display:'flex', justifyContent:'flex-end'}}>
            <Pagination
              current={1}
              total={20}
              pageSize={10}
              onChange={()=>{}}
            />
          </div>
        </WingBlank>
      </div>
    )
  }
}

export default ListProduct
