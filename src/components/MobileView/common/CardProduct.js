import React from 'react';
import {Card, Icon, Rate, Tooltip } from 'antd';
import {priceStyle} from '../../../utils/modifiedText';
import LinesEllipsis from 'react-lines-ellipsis';

const styles = {
	card: {
		width:'100%',
    height: 'auto',
		border: '1px solid #DCDEE3',
		borderRadius: 10,
		minHeight: 320
	},
	image:{
		height: 150,
    width: '100%',
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10
	},
	descTitle: {
		padding: '3px 5px',
		fontSize:'11px',
		color: 'rgba(0,0,0,.7)',
		cursor: 'pointer',
		textAlign:'justify'
	},
	descSubtitle: {
		padding: '3px 5px',
		color: 'rgba(0,0,0,.54)',
		fontSize: 14
	},
	price: {
		padding: '3px 5px',
		color: 'red',
		fontWeight:'bold',
		fontSize:'14px',
	}
}
class CardProduct extends React.Component{
	state={
		showIconWishlist:false,
		boxShadow:false,
		errored: false
	}

	render(){
		return(
			<div style={{width:'100%'}}>
				<Card hoverable style={styles.card} bodyStyle={{ padding: 0 }}>
					<div style={{display:'flex', justifyContent:'space-between', flexDirection:'column', minHeight:310}} onClick={() => window.location.href = "/product"} >
						<div>
							<div style={styles.imageContainer} >
								<img alt="1" src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" style={styles.image} onContextMenu={(e) => e.preventDefault()}/>
							</div>
							<div style={styles.descTitle} >
								<LinesEllipsis text="Test Judul Produk Dua Baris" maxLine='2' ellipsis='...' trimRight />
							</div>
							<div style={styles.price}>Rp {priceStyle(1000000)},-</div>
							<div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', padding: '3px 5px',}}>
								<div style={{marginRight:8, padding:'0px 5px', backgroundColor:'#FAFAFA', borderRadius:4, border: '1px solid #d9d9d9', boxSizing:'border-box', fontSize:11}}>Baru</div>
								<div style={{marginRight:8, padding:'0px 5px', backgroundColor:'#FAFAFA', borderRadius:4, border: '1px solid #d9d9d9', boxSizing:'border-box', fontSize:11}}>Grosir</div>
								<Tooltip placement="topLeft" title="Premium">
									<img alt="12" style={{width:'25px', height:'auto'}} src="https://s3-ap-southeast-1.amazonaws.com/image-plasgos/premium+medals.png" />
								</Tooltip>
							</div>
							<div style={{padding:'0px 5px'}}><Rate value={5} disabled allowHalf style={{ fontSize: 11 }}/></div>
						</div>
						<div style={{display:'flex', alignItems:'center', padding:'0px 5px'}}>
							<div style={styles.descSubtitle}><Icon type="environment" style={{ fontSize: 18 }}/></div>
							<div style={{width:'100%'}}>
								<div style={{color: 'rgba(0,0,0,.54)', fontSize:12}}>
									<LinesEllipsis text="Nama Perusahaan / Toko" maxLine='1' ellipsis='...' trimRight basedOn='letters' />
								</div>
								<div style={{color: 'rgba(0,0,0,.54)', fontSize:12}}>
									<LinesEllipsis text="Kota / Kabupaten" maxLine='1' ellipsis='...' trimRight basedOn='letters' />
								</div>
							</div>
						</div>
					</div>
				</Card>
			</div>
		)
	}
}
export default CardProduct;
