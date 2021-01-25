import React from 'react'
import { Row, Col, Icon } from 'antd'

// import AddLink from "./AddLink"
class CommentCard extends React.Component {
  render () {
    return (
      <div>
          <Row className='row' style={{ backgroundColor:'#eeeeee' }}>
            <Col span={5} style={{textAlign:'center' , margin: '0 5px 0 0' }}>
              <img className='img'alt="example" src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png"/>
            </Col>
            <Col span={18}>
              <Row>
                <Col span={20}>
                  <div  style={{marginBottom:'5px'}}><b style={{color:'#fa541c', marginRight:'2px'}}>Nama Pengguna</b>
                    {
                      true ? (
                        <i style={{color:'white', backgroundColor:'red',padding:'2px 8px', borderRadius:'2px' }}>Penjual</i>
                      ) : (
                        <i style={{color:'white', backgroundColor:'green',padding:'2px 8px', borderRadius:'2px' }}>Pembeli</i>
                      )
                    }
                  </div>
                  <div><i>Tanggal</i></div>
                </Col>
                <Col span={4} >
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                  {
                    true && (
                        <div>
                          <div><a><span><Icon type="delete" style={{fontSize:20, color:"red"}}/> </span></a></div>
                          <div><a> <span><Icon type="edit" style={{fontSize:20}}/></span></a></div>
                        </div>
                      )
                  }
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
      </div>
    )
  }
}

export default CommentCard;
