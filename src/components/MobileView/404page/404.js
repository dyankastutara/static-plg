import React from 'react';
import { Button } from 'antd-mobile';

const styles = {
  notFound: {
    textAlign: 'left',
    width:'100%',
    padding: '0 10px'
  },
  img: {
      textAlign:'center' ,
      paddingTop: '60px',
      paddingBottom: '30px'
 },
  h1: {
    fontSize: '24px',
    textAlign : 'center'
  },
  context: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin:'0.5em 2em',
    textAlign: 'center',
    color: '#595959'

  },
  description:{
    margin : '20px 30px',
    fontSize: '15px',
    color: '#595959'
 },
 link: {
      fontSize: "15px",
      color: "#ffffff"
 }
}

export default class PageNotFound extends React.Component{
  render(){
    return(
      <div>
         <div style={styles.img}><img src="https://image-plasgos.s3-ap-southeast-1.amazonaws.com/Search-black.png" alt="search not fount" heigth="70" width="70" /></div>
        <div style={styles.context}>Oops.</div>
        <div style={styles.description}>Mohon Maaf, halaman tidak ditemukan. </div>
        <div><Button size="small" style={{  backgroundColor: '#fa541c', margin: "0 60px" }}><div style={styles.link}>Kembali ke Beranda</div></Button></div>
      </div>
    )
  }
}
