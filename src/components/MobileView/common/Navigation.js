import React from 'react';
import {Link} from 'react-router-dom';
import {
  Breadcrumb
} from 'antd';

class Navigation extends React.Component {
  capitalizeFirstLetter(string) {
    let name = string.charAt(0).toUpperCase()+ string.slice(1);
    return name.replace(/-/gi,' ');
  }
  checkNav1(){
    const {nav} = this.props;
    if(nav){
      let navigation = nav.url.split('/');
      if(navigation[2]){
        return {
          url:`/c/${navigation[2]}`,
          name:this.capitalizeFirstLetter(navigation[2])
        };
      }
    }
  }
  checkNav2(){
    const {nav} = this.props;
    if(nav){
      let navigation = nav.url.split('/');
      if(navigation[3]){
        return {
          url:`/c/${navigation[2]}/${navigation[3]}`,
          name:this.capitalizeFirstLetter(navigation[3])
        };
      }
    }
  }
  checkNav3(){
    const {nav} = this.props;
    if(nav){
      let navigation = nav.url.split('/');
      if(navigation[4]){
        return {
          url:`/c/${navigation[2]}/${navigation[3]}/${navigation[4]}`,
          name:this.capitalizeFirstLetter(navigation[4])
        };
      }
    }
  }
  checkProduct(){
    const {detailProduct}=this.props;
    if(typeof detailProduct === "object" && !Array.isArray(detailProduct) && detailProduct !== null){
      return {
        url:`/${detailProduct.Store.subdomain_store}/${detailProduct.subdomain_product}`,
        name:detailProduct.name
      };
    }
  }
  refreshPage(){
    window.location.reload();
  }
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item><Link to="/" onClick={()=>{this.refreshPage()}}>Beranda</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/c" onClick={()=>{this.refreshPage()}}>Kategori Utama</Link></Breadcrumb.Item>
        {
          this.checkNav1() ? (
            <Breadcrumb.Item><Link to={this.checkNav1().url } onClick={()=>{this.refreshPage()}}>{this.checkNav1().name}</Link></Breadcrumb.Item>
          ):null
        }
        {
          this.checkNav2() ? (
            <Breadcrumb.Item><Link to={this.checkNav2().url } onClick={()=>{this.refreshPage()}}>{this.checkNav2().name}</Link></Breadcrumb.Item>
          ):null
        }
        {
          this.checkNav3() ? (
            <Breadcrumb.Item><Link to={this.checkNav3().url } onClick={()=>{this.refreshPage()}}>{this.checkNav3().name}</Link></Breadcrumb.Item>
          ):null
        }
        {
          this.checkProduct() ? (
            <Breadcrumb.Item><Link to={this.checkProduct().url} onClick={()=>{this.refreshPage()}}><b>{this.checkProduct().name}</b></Link></Breadcrumb.Item>
          ):null
        }
      </Breadcrumb>
    );
  }
}

export default Navigation;
