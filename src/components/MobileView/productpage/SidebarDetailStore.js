import React from 'react';
import { TiWeatherSnow } from 'react-icons/lib/ti';
import { Card, WhiteSpace, Flex, WingBlank } from 'antd-mobile';
import { Icon, Button } from 'antd';
import PropTypes from 'prop-types';
import StorePoint from '../common/StorePoint';
import ButtonFavorite from './ButtonFavorite'

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
    textAlign: 'center'
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

class Sidebar extends React.Component {
  static contextTypes = {
    router:PropTypes.object.isRequired
  }
  render() {
    return (
        <div>
             <WhiteSpace size="ld" />
                       <div style={styles.year}>
                       <TiWeatherSnow style={{...styles.yearIcon, fontSize:20}} />&nbsp;<span style={{fontSize:13, fontWeight:600}}> Detail Perusahaan | Toko</span>
                       </div>
                       <Card>
                           <a href={`/shop`}>
                            <Card.Header
                                 title={<div style={{ fontSize: 16, color: "#00000" }}>Nama Toko / Perusahaan</div>}
                                 thumb={<div><img alt="1" src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" style={{ width: "30px", height: "30px"}} /></div>}
                                 extra={<span style={{ fontSize: 14, marginTop: 3, color: "#000000" }}><Icon type="environment" theme="outlined" style={{ fontSize: 15, marginRight: 5, color: "#00000" }}/>Kota / Kabupaten</span>}
                            />
                            </a>
                            <Card.Body>
                                 <div>
                                      <Flex >
                                           <Flex.Item style={{ border: "1px dashed #3cba54", padding: 4, borderRadius: 3 }}>
                                               <WingBlank size="md">
                                                    <div style={{ display: "flex", textAlign: 'center', justifyContent: "center"}}> <StorePoint point={18} /> </div>
                                                    <div style={{ textAlign: 'center', fontSize: 12 }}>{18} Point</div>
                                                </WingBlank>
                                           </Flex.Item >
                                      </Flex>
                                      <WhiteSpace size="md" />
                                      <Flex>
                                         <Flex.Item>
                                                <Button onClick={()=>{}} style={{ height: 45, fontSize: 12, verticalAlign: "baseline", border: "1px solid #fa541c", width:"100%"  }}><Icon type="mail" style={{ paddingRight: 5, color: "#fa541c" }} />Hubungi Penjual</Button>
                                         </Flex.Item>
                                         <Flex.Item>
                                             <ButtonFavorite />
                                         </Flex.Item>
                                      </Flex>
                                      <WhiteSpace size="md" />
                                 </div>
                            </Card.Body>
                       </Card>
                  <WhiteSpace size="sm" />
        </div>
    );
  }
}

export default Sidebar;
