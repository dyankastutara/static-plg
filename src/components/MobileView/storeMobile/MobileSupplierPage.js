import React from 'react';
import PropTypes from 'prop-types';
import { NavBar, WhiteSpace } from 'antd-mobile';
import DocumentTitle from 'react-document-title';
import { Tabs, Input, Icon } from 'antd';

import Header from './common/Header';
import ListProduct from './ListProduct/ListProduct';
import InfoCompany from './InfoProfile/InfoCompany';

const TabPane = Tabs.TabPane;
const { Search } = Input;

class MobileSupplierPage extends React.Component {
  static contextTypes = {
   router:PropTypes.object.isRequired
  }
  constructor(){
    super();
    this.state = {
      tabActive:'product',
      search:'',
      textSearch:''
    }
  }
  _onChangeTab = (value) => {
    if(value === 'info'){
      this.setState({
        tabActive:value
      })
    }
    if(value === 'product'){
      this.setState({
        tabActive:value
      })
    }
  }
  goBack = () => {
    this.context.router.history.goBack()
  }
  render () {
     return (
        <DocumentTitle title={`Nama Toko | Plasgos`}>
          <div>
            <NavBar
              style={{position:'fixed', width:'100%', height:'50px', top:0, zIndex:9999, color:"#000", fontSize:24}}
              mode="light"
              icon={<Icon type="arrow-left"/>}
              onLeftClick={this.goBack}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '225%',
                marginLeft: '-110%',
                marginRight: '-115%'
              }}>
                <Search
                  placeholder={`Cari di nama toko`}
                  style={{width:'100%'}}
                  onSearch={(value)=>{}}
                />
              </div>
            </NavBar>
            <div style={{marginTop:50}}><Header /></div>
            <WhiteSpace />
            <div style={{backgroundColor:"#fff", paddingBottom:10}}>
              <Tabs type="card" onChange={this._onChangeTab} activeKey={this.state.tabActive}>
                <TabPane tab="Produk" key="product">
                  <ListProduct />
                </TabPane>
                <TabPane tab="Informasi" key="info">
                  <InfoCompany />
                </TabPane>
              </Tabs>
            </div>
          </div>
        </DocumentTitle>
     )
  }
}

export default MobileSupplierPage;
