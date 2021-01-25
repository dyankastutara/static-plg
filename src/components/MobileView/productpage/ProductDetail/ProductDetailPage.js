import React from 'react'

import '../Styles.css'

export default class ProductDetailPage extends React.Component {
  render () {
    const {detailData} = this.props;
    if(typeof detailData === 'object' && !Array.isArray(detailData) && detailData !== null){
      return (
        <div className='container'>
          <div  className='Detail'>
            <h3 style={{ fontSize:18, fontWeight:500}}>Detail Produk</h3>
            <div style={{textAlign:'justify'}}>
              {
                detailData.description.split(/(?:\r\n|\r|\n)/g).map(function(item,i) {
                  return (
                    <div key={i}>{item}</div>
                  )
                })
              }
            </div>
          </div>
        </div>
      )
    }else{
      return null
    }
  }
}
