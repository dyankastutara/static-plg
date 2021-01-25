import React from 'react'
import { Input, Row, Col, Button, Icon } from 'antd'

import CommentCard from './CommentCard'

const { TextArea } = Input

class DiscussionCard extends React.Component {
  render () {
    return (
      <div style={{ paddingButtom:'10px', margin:'10px', textAlign:'left' }} >
        <Row  className='row'>
          <Col span={5} style={{textAlign:'center', margin: '0 8px 0 0' }}>
            <img className='img'alt="example" src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" />
          </Col>
          <Col span={18}>
            <Row>
              <Col span={20} style={{ display:'inline'  }}>
                  <div style={{marginBottom:'5px',marginLeft:'2px',display:'inline'}}>
                    <b style={{color:'#fa541c', marginRight:'2px'}}>Nama Pengguna</b>
                    {
                      true ? (
                        <i style={{color:'white', backgroundColor:'red',padding:'4px', borderRadius:'2px', margin:'0 5px' }}>Penjual</i>
                      ) : (
                        <i style={{color:'white', backgroundColor:'green',padding:'4px', borderRadius:'2px', margin:'0 5px' }}>Pembeli</i>
                      )
                    }
                  </div>
              </Col>
              <Col span={4}>
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                  <div>
                    <div><a><span><Icon type="delete" style={{fontSize:20, color:"red"}}/> </span></a></div>
                    <div><a> <span><Icon type="edit" style={{fontSize:20}}/></span></a></div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Button style={{ textAlign:'left',marginTop:'-10px', width:'100%', backgroundColor:'#eeeeee' }} icon='message'>Lihat Semua Komentar</Button>
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <Row  className='row' style={{ backgroundColor:'#eeeeee' }}>
          <Col span={5} style={{textAlign:'center'}}>
            <img className='img' alt="example" src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png"/>
          </Col>
          <Col span={19}>
            <div  style={{ padding:'0px 10px', width:'100%' }}>
              <TextArea type='text'rows='1' placeholder='isi komentar di sini' style={{width:'100%'}}/>
              <span style={{ float:'right', fontSize:11 }}>0 / 225</span>
            </div>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'flex-start', padding:'0px 10px', width:'100%' }}>
              <Button style={{marginRight:3}}>Komentar</Button> &nbsp;
              <Button >Batal</Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default DiscussionCard
