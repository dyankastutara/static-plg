import React from 'react';
import PropTypes from 'prop-types';

import Wishlist from './Wishlist';
import Favorites from './Favorite';

class FavoriteTab extends React.Component {
	static contextTypes = {
	  router:PropTypes.object.isRequired
	}
  constructor(props){
    super(props);
    this.state = {  }
  }

  render() {
    return (
      <div>
        <div style={{backgroundColor:"#464E65", position:'fixed', width:'100%', height:'50px', top:0, zIndex:2, display:'flex', alignItems:'center', paddingLeft:20, paddingRight:20}}>
          <div style={{color:"#fff", fontSize:18, fontWeight:700}}>Favorit</div>
        </div>
        <div style={{marginTop:55}}>
          <div style={{paddingLeft:10, paddingRight:10}}><Wishlist /></div>
          <div style={{paddingLeft:10, paddingRight:10}}><Favorites /></div>
        </div>
      </div>
    );
  }
}
export default FavoriteTab;
