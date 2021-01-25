import React from 'react';
import { Badge} from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import MdChatboxes from 'react-ionicons/lib/MdChatboxes';

class ChatBox extends React.Component{
  static contextTypes={
    router:PropTypes.object.isRequired
  }
  clickChatBox = () => {
    console.log("click chat");
  }
  render(){
    return(
      <div onClick={this.clickChatBox}>
        <Badge count={0}>
          <MdChatboxes color='#949494' fontSize='24px'/>
        </Badge>
      </div>
    )
  }
}
export default withRouter(ChatBox);
