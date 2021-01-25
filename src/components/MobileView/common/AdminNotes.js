import React from 'react'
import { List } from 'antd-mobile'

const styles = {
     box: {
          borderStyle: 'dashed',
          borderWidth: '2px',
          borderColor: 'blue',
          background: 'rgb(212, 234, 246)',
          marginBottom: '1em',
          marginTop: 18
     },
     item: {
          fontSize: 10
     }
}
const Item = List.Item;

export default class AdminNotes extends React.Component {
  render () {
    return (
           <List style={styles.box}>
                <List renderHeader={() => 'Kami akan otomatis membatalkan transaksi dan mengembalikan dana Anda apabila:'} className="my-list">
                     <Item  wrap style={styles.item}><div style={{ fontSize: 12 }}>1. Penjual tidak merespon order Anda sampai batas waktu respon <b>(2 hari)</b>.</div></Item>
                     <Item wrap style={styles.item}><div style={{ fontSize: 12 }}>2. Penjual tidak mengkonfirmasi order Anda sampai batas waktu respon <b>(4 hari kerja)</b>.</div></Item>
                </List>
           </List>
    )
  }
}
