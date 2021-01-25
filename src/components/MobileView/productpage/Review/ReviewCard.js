import React from 'react'
import { Rate } from 'antd'

import '../Styles.css'

export default class ReviewCard extends React.Component {
  render () {
    return (
      <div style={{ border:'1px solid #e0e0e0', display:'flex', alignItems:'flex-start', justifyContent:'flex-start', padding:5, marginBottom:10 }}>
        <div style={{marginRight:10}}>
          <div><img style={{ width:75, height:75 }} alt='' src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" /></div>
          <div style={{ backgroundColor:'rgba(0,0,0,0.47)', color:'orange', padding:'0px 3px'}}><b>Nama Pengguna</b></div>
          <div style={{ color:'white', backgroundColor:'#2ab4c2', padding:'0px 3px'}}>Pembeli</div>
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
          <h6 style={{ color:'grey' }}><i>Tanggal</i></h6>
          <Rate disabled value={5} />
          <p>2</p>
        </div>
      </div>
    )
  }
}
