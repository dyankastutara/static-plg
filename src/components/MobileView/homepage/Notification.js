import React from 'react';
import { Badge} from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import IosNotifications from 'react-ionicons/lib/IosNotifications';

class Notification extends React.Component{
  static contextTypes={
    router:PropTypes.object.isRequired
  }
  clickNotification = () => {
    console.log("click notification");
  }
  render(){
    let totalNotifMessage = 1;
    let totalOrder = 2
    let totalSelling = 3
    return(
      <div onClick={this.clickNotification}>
        <Badge count={totalOrder + totalSelling + totalNotifMessage} style={{ marginTop:5, marginRight:5, backgroundColor: '#fff', color: 'red', boxShadow: '0 0 0 1px #d9d9d9 inset'}} >
          <IosNotifications color='#949494' fontSize='25px'/>
        </Badge>
      </div>
    )
  }
}

export default withRouter(Notification);
