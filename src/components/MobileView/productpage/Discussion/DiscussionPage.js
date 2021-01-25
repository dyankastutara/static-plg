import React from 'react'
import { Input, Icon, Row, Col, Button } from 'antd'

import DiscussionCard from './DiscussionCard'

const { TextArea } = Input

const styles = {
  icon : {
    fontSize: '50px',
    color: '#08c',
    padding : '0.25em 0em 0.25em 0.5em',
  },
  message: {
    margin: '0.5em 0em 0.5em 0',
    padding: '1em',
    border: '1px solid #dae2ed',
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
  }
}

class DiscussionPage extends React.Component {
  render () {
    return (
      <div className='Discussion'>
      {
        true && (
          <div style={{margin:10}}>
            <div>
              <Row>
                <Col span={5}>
                  <Icon type="aliwangwang-o" style={styles.icon} />
                </Col>
                <Col>
                  <p><b>Ada pertanyaan mengenai produk ini?</b></p>
                  <p>Diskusikan langsung dengan penjual.</p>
                </Col>
              </Row>
            </div>
            <div className='questionInput'>
              <TextArea id='question' value={ this.state.value } type='text' rows={5} placeholder="Isi Pertanyaan Anda di sini..."/>
              <span style={{ float:'right' }}>{ this.state.valueLength } / 225</span>
              <Button style={{ width:'100%', padding:'10px', height: '50px', backgroundColor:'#fa541c', color:'#fff'}}>Diskusi</Button>
            </div>
          </div>
        )
      }
      <div>
        {
          [0,1,2].map((a, i) => (
            <div key={i}>
              <DiscussionCard />
            </div>
          ))
        }
      </div>
    </div>
    )
  }
}

export default DiscussionPage
