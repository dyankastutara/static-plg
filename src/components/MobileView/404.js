import React from 'react';
import {
  Layout,
} from 'antd';

const styles = {
  content: {
    width:'100%',
    margin:'auto',
  }
};
const { Content } = Layout;
class MobilePageNotFound extends React.Component{
  render(){
    return(
      <Content style={styles.content}>
        <div style={{fontSize:16, fontWeight:'bold', textAlign:'center', margin: '5px 0 5px 0'}}>Cari Kebutuhan untuk Bisnismu di Plasgos.com</div>
        <div style={{fontSize:20, fontWeight:'bold', textAlign:'center', margin: '5px 0 5px 0'}}>BELI PRODUK KEBUTUHANMU DENGAN BEBERAPA LANGKAH</div>
        <div style={{fontSize:16, fontWeight:'bold', textAlign:'center', margin: '5px 0 5px 0'}}>Dapatkan aplikasinya di</div>
        <div style={{textAlign:'center'}}><a href="https://play.google.com/store/apps/details?id=com.plasgos"><img src="/image/google-play-badge.png" style={{width:'50%'}} alt="google-play-badge"/></a></div>
        <div style={{fontSize:12, textAlign:'justify', margin: '20px 0 5px 0'}}>{`** Mobile web sedang dalam pengembangan, untuk membuka web disarankan menggunakan tampilan Desktop.`}</div>
      </Content>
    )
  }
}
export default MobilePageNotFound;
