import React from 'react';
import { Alert, Tooltip, Card } from 'antd';
import PropTypes from 'prop-types';

import ButtonFavorite from "./ButtonFavorite"
import StorePoint from '../../common/StorePoint';
import ModalNewMessage from '../../common/ModalNewMessage';

import {fullDate} from '../../../../utils/modifiedText';

const styles = {
  title: {
    color: '#000',
    fontSize:24,
    fontWeight:'bold',
  },
  description: {
    marginTop: '0.82em',
    display: 'inline-flex',
    position: 'relative',
    paddingLeft: '1em'
  },
  tag: {
    height: '1.75em',
    lineHeight: '1.5em',
  },
  avatarWrapper: {
    margin:'auto',
    width:'100%',
    height:'100%'
  },
  avatar: {
    overflow: 'hidden',
    width: 75,
    height: 75,
    borderRadius:3
  },
  btn: {
    fontSize: 12,
  },
  textLocOn : {
    fontSize: '14px',
    fontWeight: 600
  },
  ketText : {
    fontSize: '12px',
    fontWeight: 600,
    paddingLeft: '2em'
  },
  favorit: {
    fontSize: 16,
    height: '2.5em',
    width: '12em',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }
}

class HeaderStore extends React.Component {
  static contextTypes= {
    router:PropTypes.object.isRequired
  }
  _clickEditButton=()=>{
    this.context.router.history.push(`/seller/mycompany-editor`)
  }
  statusOpenClose = (store) => {
    let now = new Date();
    let dateNow = now.setHours(0, 0, 0, 0);
    let parse = Date.parse(store.close_to_date);
    let parseLimit = new Date(parse);
    let pr = parseLimit.setHours(0, 0, 0, 0);
    if(store.status){
      if(store.status.toLowerCase() === 'open'){
        return null
      }
      if(store.status.toLowerCase() === 'close' && (dateNow > pr)){
        let data = {
          status:'Open',
          close_from_date:null,
          close_to_date:null,
          reason_closed:''
        }
        this.props.updateStoreStatusOpen(store, data)
      }
      if(store.status.toLowerCase() === 'close' && (dateNow <= pr)){
        return(
          <div style={{position:store.is_premium ? 'absolute' : 'relative', display:'flex', justifyContent:store.is_premium ? 'flex-start':'flex-end',  marginTop: 24}}>
            <Alert
            message={
              <div>
                <div style={{ fontSize: 12 }}>Toko sedang <b>Tutup</b></div>
                <div style={{ fontSize: 12 }}> Buka kembali :<b> {fullDate(store.close_to_date)}</b></div>
                <div style={{ fontSize: 12 }}>Alasan: {store.reason_closed}</div>
              </div>
            }
            type="warning"
            />
          </div>
        )
      }
    }
  }

  componentDidMount(){
    const {store} = this.props;
    if(store){
      this.props.lastLogin(store.user_id)
    }
  }

  render () {
    return (
      <div>
        <div  style={{backgroundColor:'#fff'}}>
        <div style={{position:'absolute', width:"100%", height: 175}}>
          <img src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" alt="banner" style={{width:"100%", height: 175 }}/>
        </div>
          <div>
            <div style={{width:'100%', display:'flex'}}>
              <div style={{width:'25%', padding:5, display:'flex', alignItems:'center', justifyContent:'flex-start', flexDirection:'column'}}>
                <Card style={{width:'80px', height:'80px', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:3}} >
                  <div style={styles.avatarWrapper}>
                    <img alt="avatar" src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" style={styles.avatar}/>
                  </div>
                </Card>
                <div style={{marginTop:10}}><StorePoint point={17} /></div>
              </div>
              <div style={{width:'75%', padding:5}}>
                <div>
                  <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
                    <div style={styles.title}>Nama Toko Perusahaan</div>
                    {
                      true && (
                        <div style={{marginLeft:10}}>
                          <Tooltip placement="leftTop" title={
                            <div>
                               <div>Verified by :</div>
                               <div>KTP</div>
                               <div>NPWP</div>
                               <div>AKTA</div>
                               <div>SIUP</div>
                               <div>SKDP</div>
                               <div>TDP</div>
                            </div>
                          }>
                            <img alt="verivied+3" style={{width:25, height:25 }} src="https://s3-ap-southeast-1.amazonaws.com/image-plasgos/verified+3.png" />
                          </Tooltip>
                        </div>
                      )
                    }
                  </div>
                </div>
                <div style={{wordWrap:'break-word', fontFamily: 'Georgia,serif', fontStyle: 'italic', fontSize:13}}>Deskripsi toko</div>
                <div style={{display:'flex', justifyContent:'space-between', width:'100%', marginTOp:10}}>
                  <div style={{width:'49%'}}><ModalNewMessage style={styles.btn} /></div>
                  <div style={{width:'49%'}}><ButtonFavorite /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderStore;
