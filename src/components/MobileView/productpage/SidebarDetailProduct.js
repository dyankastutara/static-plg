import React from 'react';
import {Rate} from 'antd';
import { TiWeatherSnow } from 'react-icons/lib/ti';
import ProductViews from './common/View';
import ProductSolds from './common/Sold';

import {
  Icon,
} from 'antd';
import { connect } from 'react-redux';

const styles = {
  container: {
    backgroundColor:'#ffffff',
    fontSize: 12,
    lineHeight: '2em',
    border: '1px solid #dae2ee',
    height: 'auto',
    marginBottom:16
  },
  year: {
    backgroundColor: '#F2F3F7',
    padding: '0.5em',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  yearIcon: {
    color: 'red'
  },
  company: {
    padding: '0.75em'
  },
  tag: {
    fontSize: '1em',
    textAlign:'left',
  },
  status: {
    borderTop: "solid 1px #e9eef5",
    borderBottom: "solid 1px #e9eef5",
    margin: '1em 0',
    padding: '1em 0',
    lineHeight: '2.5em'
  },
  diamondIcon: {
    color: 'blue',
    fontSize: '1.5em',
  },
  checkIcon: {
    color: '#ffa500',
    fontSize: '1.5em'
  },
  site: {
    textAlign: 'center',
    color: '#2192D9',
    cursor: 'pointer',
  }
}

class SidebarProduct extends React.Component {
  rate=()=>{
    const {product} = this.props;
    let dataFilter = product.Points.filter(dt=>{
      return dt.point !== null
    })
    let total = dataFilter.reduce((prevValue, currentValue )=>{
      return prevValue + currentValue.point
    }, 0)
    return Math.round(total / dataFilter.length);
  }
  reviewed=()=>{
    const {product} = this.props;

    let dataFilter = product.Points.filter(dt=>{
      return dt.point !== null
    })
    return dataFilter.length;
  }
  viewed=()=>{

  }
  render() {
    const {product} = this.props;
    if(!product){
      return null
    }
    return (
      <div style={styles.container}>
        <div style={styles.year}>
          <TiWeatherSnow style={{...styles.yearIcon, fontSize:20}} />&nbsp;<span style={{fontSize:13, fontWeight:600}}>Rincian</span>
        </div>
        <div style={styles.company}>
          <div style={{margin:'5px 0.3em', borderBottom: "solid 1px #e9eef5",width:'100%', display:'flex'}}>
            <div style={{width:'50%'}}><Icon type="eye" style={{...styles.yearIcon, fontSize:16}}/> &nbsp; Lihat</div>
            <div style={{width:'50%'}}>: <ProductViews detailProduct={product} /></div>
          </div>
          <div style={{margin:'5px 0.3em', borderBottom: "solid 1px #e9eef5",width:'100%', display:'flex'}}>
            <div style={{width:'50%'}}><Icon type="gift" style={{...styles.yearIcon, fontSize:16}}/> &nbsp; Terjual</div>
            <div style={{width:'50%'}}>: <ProductSolds detailProduct={product} /></div>
          </div>
          <div style={{margin:'5px 0.3em', borderBottom: "solid 1px #e9eef5",width:'100%', display:'flex'}}>
            <div style={{width:'50%'}}><Icon type="tag" style={{...styles.yearIcon, fontSize:16}}/> &nbsp; Kondisi</div>
            <div style={{width:'50%'}}>: {product.condition}</div>
          </div>
          <div style={{margin:'5px 0.3em', borderBottom: "solid 1px #e9eef5",width:'100%', display:'flex'}}>
            <div style={{width:'50%'}}><Icon type="shopping-cart" style={{...styles.yearIcon, fontSize:16}}/> &nbsp; Min.Beli</div>
            <div style={{width:'50%'}}>: {product.min_order}</div>
          </div>
          <div style={{margin:'5px 0.3em', borderBottom: "solid 1px #e9eef5",width:'100%', display:'flex'}}>
            <div style={{width:'50%'}}><Icon type="lock" style={{...styles.yearIcon, fontSize:16}}/> &nbsp; Berat</div>
            <div style={{width:'50%'}}>: {product.weight} g</div>
          </div>
          {
            this.reviewed() > 0 ? (
              <div style={{margin:'5px 0.3em', borderBottom: "solid 1px #e9eef5",width:'100%', display:'flex'}}>
                <div style={{width:'50%'}}><Icon type="tag" style={{...styles.yearIcon, fontSize:16}}/> &nbsp; Ulasan</div>
                <div style={{width:'50%', display:'flex'}}>:&nbsp;<Rate style={{fontSize:8}} value={this.rate()} disabled/></div>
              </div>
            ): null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    product:state.product.data
  }
}
export default connect(mapStateToProps)(SidebarProduct);
