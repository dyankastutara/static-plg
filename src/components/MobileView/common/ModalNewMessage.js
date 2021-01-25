import React from 'react';
import {
  Input,
  Modal,
  Icon
} from 'antd';
import { Button, List, WingBlank  } from 'antd-mobile'

const styles={
  img : {
     width : 58,
     height: 58,
     objectFit:'scale-down'
  },
}
const {TextArea} = Input;

class ModalNewMessage extends React.Component {
  state = {
    note:"",
    visible: false,
  }

  _changeNote = (e)=>{
    this.setState({
      note:e.target.value
    })
  }
  showModal = () => {
    this.setState({
      visible: true,
    })
  }
  handleOk = (text) => {
    this.setState({
      visible: false,
      note:''
    })
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
      note:''
    })
  }
  send(){
    Modal.success({
      content: 'Terkirim'
    })
  }
  render(){
    return(
      <div>
        <Button onClick={this.showModal} style={{ height: 45, fontSize: 12, verticalAlign: "baseline", border: "1px solid #fa541c"  }}><Icon type="mail" style={{ paddingRight: 5, color: "#fa541c" }} />Hubungi Penjual</Button>
        <Modal
          visible={ this.state.visible }
          title="Pesan"
          onCancel={ this.handleCancel }
          footer={[
            <Button style={{ height: 40, fontSize: 12, verticalAlign: "baseline" }} key='submit' type='primary' onClick={() => this.handleOk(this.state.note)}>
              Kirim
            </Button>
          ]}
        >

               <List>
                    <WingBlank size="lg">
                         <div><b>Nama Toko</b></div>
                         <img alt="avatar_stores" src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" style={styles.img}/>
                         <div>Provinsi</div>
                    </WingBlank>
               </List>
               <List>

               </List>
               <List>
                <TextArea rows={6} placeholder="Isi pesan di sini" onChange={this._changeNote} value={this.state.note}/>
               </List>
        </Modal>
      </div>
    )

  }
}

export default ModalNewMessage;
