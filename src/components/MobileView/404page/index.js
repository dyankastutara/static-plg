import React from 'react';
import {
  Layout,
  Icon
} from 'antd';
import {NavBar} from 'antd-mobile';
import PropTypes from 'prop-types';
import NotFound from './404';
import DocumentTitle from 'react-document-title';

const styles = {
  content: {
    marginTop: 60,
  },
  innerContent: {
    margin: '1em 0',
    padding: '0 1.5em',
    minHeight: '5em'
  },
};
const { Content } = Layout;

class PageNotFound extends React.Component{
  static contextTypes = {
    router:PropTypes.object.isRequired
  }
  goBack = () => {
    this.context.router.history.goBack()
  }
  render(){
    return(
      <DocumentTitle title={`Halaman Tidak Ditemukan`}>
        <Layout>
          <NavBar style={{position:'fixed', width:'100%', height:'50px', top:0, zIndex:2, color:"#000"}} mode="light" icon={<Icon type="arrow-left" style={{fontSize:24}}/>} onLeftClick={this.goBack}/>
          <Content style={styles.content}>
            <NotFound />
          </Content>
        </Layout>
      </DocumentTitle>
    )
  }
}

export default PageNotFound;
