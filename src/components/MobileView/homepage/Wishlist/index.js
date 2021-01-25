import React from 'react';
import {connect} from 'react-redux';
import { WingBlank } from 'antd-mobile';

import CardProduct from '../../common/CardProduct';

const styles = {
  message: {
    margin: '0.5em 0em 0.5em 0',
    padding: '1em',
    border: '1px solid #dae2ed',
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
    width:'100%'
  }
}

class Wishlist extends React.Component{
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  render(){
    return(
      <WingBlank size="xs">
        <h3>Produk Favorit</h3>
        <div style={{display:'flex', flexWrap: 'wrap', justifyContent:'space-between', width:'100%'}}>
          <div style = {{width:'49%', marginTop:'0.5em'}}>
            <CardProduct />
          </div>
          <div style = {{width:'49%', marginTop:'0.5em'}}>
            <CardProduct />
          </div>
          <div style = {{width:'49%', marginTop:'0.5em'}}>
            <CardProduct />
          </div>
          <div style = {{width:'49%', marginTop:'0.5em'}}>
            <CardProduct />
          </div>
          <div style = {{width:'49%', marginTop:'0.5em'}}>
            <CardProduct />
          </div>
        </div>
      </WingBlank>
    )
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    getAllWishlists:()=>{
      dispatch(getAllWishlistByUserLogin())
    }
  }
}
const mapStateToProps = (state)=>{
  return{
    wishlist:state.wishlist.data
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);