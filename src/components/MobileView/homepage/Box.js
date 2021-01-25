import React from 'react';
import { Badge} from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import IosCube from 'react-ionicons/lib/IosCube';

class Box extends React.Component{
  static contextTypes={
    router:PropTypes.object.isRequired
  }
  clickBox = () => {
    console.log("click box");
  }
  render(){
    return(
      <div onClick={this.clickBox}>
        <Badge count={0}>
          <IosCube color='#949494' fontSize='24px'/>
        </Badge>
      </div>
    )
  }
}
export default withRouter(Box);
