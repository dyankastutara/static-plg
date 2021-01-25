import React from 'react';
import {Button} from 'antd';
import {connect} from 'react-redux';
import {
  createWishlist,
  deleteWishlist } from '../../../actions/wishlist/wishlistAction';

class ButtonWishlist extends React.Component{
  state={
    iconLoading:false
  }
  _checkWishlist(product_id){
    const {wishlist} = this.props;
    if(wishlist !== null && Array.isArray(wishlist)){
      let filter = wishlist.filter(data=>{
        return data.product_id === product_id;
      })
      return filter
    }
  }

  _addWishlist(data){
    setTimeout(()=>{
      this.props.addWishlist(data)
    },100)
  }
  _removeWishlist(id){
    setTimeout(()=>{
      this.props.removeWishlist(id)
    },100)
  }
  render(){
    const {auth, detailProduct, style} = this.props;
    if(auth.is_authenticated){
      return (
        <div>
        {
          this._checkWishlist(detailProduct.id) ? this._checkWishlist(detailProduct.id).length >= 1 ? (
            <div>
              <Button icon="heart" onClick={()=>this._removeWishlist(this._checkWishlist(detailProduct.id)[0].id)} style={style?style:{borderColor:'#fa541c'}}>Hapus dari Wishlist</Button>
            </div>
          ) : (
            <div>
              <Button  icon="heart" onClick={()=>this._addWishlist(detailProduct)} style={style?style:{ backgroundColor:'#fa541c', color:'#fff'}}>Tambah ke Wishlist</Button>
            </div>
          ) : null
        }
        </div>
      )
    }else{
      return null
    }
  }
}
const mapStateToProps = (state) => {
  return{
    auth:state.auth.data,
    wishlist:state.wishlist.data
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    addWishlist:(data)=>{
      dispatch(createWishlist(data))
    },
    removeWishlist:(id)=>{
      dispatch(deleteWishlist(id))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ButtonWishlist);
