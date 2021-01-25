import React from 'react';
import PropTypes from 'prop-types';
import { NavBar } from 'antd-mobile';
import {Icon, Alert} from 'antd';
import DocumentTitle from 'react-document-title';

import SidebarDetailStore from './SidebarDetailStore';
import ImageProduct from './ImageProduct'
import InfoProduct from './ProductDetail/InfoProduct'
import OthersProduct from './OthersProduct'
import FooterPageCart from './FooterPageCart'

import './Styles.css';

class ProductPageMobile extends React.Component {
  static propTypes = {
    detailProduct:PropTypes.object
  }
  static contextTypes = {
    router:PropTypes.object.isRequired
  }
  goBack = () => {
    this.context.router.history.goBack()
  }

  changeTabs = (e)=>{
    if(e==="detail"){
      this.setState({
        renderDetail:true,
        renderDiscussion:false,
        renderReview:false
      });
    }

    if(e==="review"){
      this.setState({
        renderDetail:false,
        renderDiscussion:false,
        renderReview:true
      });
    }

    if(e==="discussion"){
      this.setState({
        renderDetail:false,
        renderDiscussion:true,
        renderReview:false
      });
    }
  }

  render() {
    return(
      <DocumentTitle title={`Nama Produk | Plasgos`}>
        <div>
          <NavBar style={{position:'fixed', width:'100%', height:'50px', top:0, zIndex:10, color:"#000"}} mode="light" icon={<Icon type="arrow-left" style={{fontSize:24}}/>} onLeftClick={this.goBack}><div style={{fontSize:20, color:'#000'}}><b>Detail Produk</b></div></NavBar>
          <div style={{marginTop:50}}>
            {
              true && (
                <div style={{marginTop:10, marginBottom:5}}>
                  <Alert message="Produk ini kosong" type="error" showIcon/>
                </div>
              )
            }
            <ImageProduct />
            <InfoProduct />
            <SidebarDetailStore />
            <OthersProduct />
            <FooterPageCart />
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default ProductPageMobile;
