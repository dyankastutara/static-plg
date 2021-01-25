import React from 'react';
import {
  Badge,
  Icon,
} from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class BadgeCart extends React.Component {
  static contextTypes={
    router:PropTypes.object.isRequired
  }
  goToCartPage = () => {
    console.log("click cart");
  }
  render(){
    return(
      <Badge count={2} style={{ marginTop:5, marginRight:5, backgroundColor: '#fff', color: 'red', boxShadow: '0 0 0 1px #d9d9d9 inset'}}>
        <Icon type="shopping-cart" style={{fontSize:24, weight:'bold'}} onClick={this.goToCartPage}/>
      </Badge>
    );
  }
}
export default withRouter(BadgeCart);
