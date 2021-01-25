import React from 'react';
import {
  Input,
  Modal,
  Icon
} from 'antd';
import { Button, List, WingBlank  } from 'antd-mobile'

import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createNewMessage } from '../../../actions/message/messageAction'

const styles={
  img : {
     width : 58,
     height: 58,
     objectFit:'scale-down'
  },
}
const {TextArea} = Input;

class ModalChat extends React.Component {
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
    const {auth} = this.props;
    if(auth.is_authenticated){
      this.setState({
        visible: true,
      })
    }else{
      this.context.router.history.push('/login')
    }
  }
  handleOk = (text) => {
    const {stores} = this.props;
    this.props.createNewMessage(stores.id, text)
    this.setState({
      visible: false,
      note:''
    })
    this.send()
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
    const {stores} = this.props;

    if(stores) {
    return(
      <div>

      <div onClick={this.showModal} style={{ backgroundColor: "#389e0d",  fontSize: 13, width: 125, height: 50, paddingTop: 15, paddingLeft: 0, marginLeft: 0, color: "#fff" }}>
         <Icon key="0" type="message" theme="outlined"  style={{ marginRight: '10px' , color: "#fff", fontSize: 12 }}  />Chat
      </div>


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
                         <div><b>{stores.name}</b></div>
                         <img alt="avatar_stores" src={stores.avatar_img} style={styles.img}/>
                         <div>{stores.Province.name}</div>
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
    }else {
         return null
    }
  }
}
ModalChat.contextTypes= {
  router:PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewMessage: (store_id, text) => {
      dispatch(createNewMessage(store_id, text))
    }
  }
}
const mapStateToProps = (state) => {
  return {
    newMessage: state.message.newMessage,
    auth: state.auth.data
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalChat);
