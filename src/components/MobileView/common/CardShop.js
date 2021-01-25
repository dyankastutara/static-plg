import React from 'react';
import {
  Card,
  Icon,
  Tooltip,
  Button
} from 'antd';
import StorePoint from './StorePoint';
import {priceStyle} from '../../../utils/modifiedText';

const styles = {
  card: {
    height: 'auto',
    border: '1px solid #DCDEE3',
    width: '100%',
    borderRadius: 10,
    cursor:'pointer'
  },
  row: {
    display:'flex',
    alignItems:'center',
  },
  cardAvatar:{
    height:40,
    width:40,
    borderRadius:8
  },
  avatar:{
    height:40,
    width:40,
    borderRadius:8
  },
  cardBottomImage: {
    height: 60,
    width: 60,
    padding: '8px 0',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  img: {
    width: 58,
    height:58,
  },
  titleSupplier: {
    color: '#666',
    margin:'0 0 0 1em'
  },
  tag: {
    fontSize: 13,
  },
  rating: {
    fontSize: '85%',
    marginTop: '0.5em',
    cursor:'pointer'
  },
  textLocOn : {
    fontWeight: 600
  },
  favorit:{
    background: '#529f4e',
    color: '#fff',
    width:'100%'
  }
};

class CardSupplier extends React.Component {
  render() {
    const {width} = this.props;
    return (
      <Card style={styles.card} bodyStyle={{ padding: 0, width: width ? width : '100%' }}>
        <div onClick={() => window.location.href = `/shop`} style={{padding:'5px 0px', width:'100%'}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', margin:'5px 10px'}}>
            <div style={{display:'flex', alignItems:'center',justifyContent:'flex-start'}}>
              <div>
                <img alt="toko" src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" style={styles.avatar} />
              </div>
              <div style={styles.titleSupplier}>
                <div><b>Nama Toko / Perusahaan</b></div>
                <div><StorePoint point={180} fontSize={10}/></div>
              </div>
            </div>
            <div><Button style={{borderRadius: 6, border: '1px solid #fa541c', color: '#fa541c', fontSize:11}} size="small">Lihat Toko</Button></div>
          </div>
          <div style={{borderTop:'1px solid #dddee2', margin:'8px 0 8px 0'}}/>
            <div style={{...styles.row, justifyContent: 'space-between', margin:'5px 10px', height: 106}}>
              <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                <div><img alt="1" src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" style={{width:80, height:90, borderRadius:8}} onContextMenu={(e) => e.preventDefault()}/></div>
                <div style={{fontSize:11, color:'red'}}><b>Rp {priceStyle(100000)}</b></div>
              </div>
              <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                <div><img alt="1" src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" style={{width:80, height:90, borderRadius:8}} onContextMenu={(e) => e.preventDefault()}/></div>
                <div style={{fontSize:11, color:'red'}}><b>Rp {priceStyle(100000)}</b></div>
              </div>
              <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                <div><img alt="1" src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" style={{width:80, height:90, borderRadius:8}} onContextMenu={(e) => e.preventDefault()}/></div>
                <div style={{fontSize:11, color:'red'}}><b>Rp {priceStyle(100000)}</b></div>
              </div>
            </div>
          <div style={{borderTop:'1px solid #dddee2', margin:'5px 0'}}/>
          <div style={{...styles.row, justifyContent:'space-between', margin:'5px 10px', color:'rgb(102, 102, 102)'}}>
            <div><Icon type="environment-o" /> Kota / Kabupaten</div>
            <Tooltip placement="topRight" title="Gold Premium">
              <img alt="12" style={{width:'22px', height:'auto'}} src="https://s3-ap-southeast-1.amazonaws.com/image-plasgos/premium+medals.png" />
            </Tooltip>
          </div>
        </div>
      </Card>
    )
  }
}

export default CardSupplier;
