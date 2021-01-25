import React from 'react';
import { Button } from 'antd';
import { WingBlank } from 'antd-mobile';

const styles = {
	container: {
		marginTop: 16,
    textAlign:'left'
	}
};
class RequestItem extends React.Component {
	render() {
		return (
			<div style={styles.container}>
        <WingBlank size="xs">
          <div style={{width:'100%'}}>
						<div style={{fontSize:18}}><b>Permintaan dan Penawaran</b></div>
            <p>Cari Barang untuk memenuhi Kebutuhan bisnis Anda dengan	cepat</p>
            <img src="./image/permintaan_barang.png" alt="permintaan_barang" width="100%" height="100"/>
            <Button type="primary" style={{marginTop: '1em', height: '35px', fontWeight: 'bold', fontSize: '16px'}}>
                Lanjut ke daftar permintaan
            </Button>
          </div>
        </WingBlank>
			</div>
		);
	}
}
export default RequestItem
