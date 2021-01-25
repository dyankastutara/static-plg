import React from 'react';
import { Flex, WingBlank } from 'antd-mobile';
import CardProduct from '../../common/CardProduct';

class NewProductMobile extends React.Component{
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  render(){
    return(
      <div style={{textAlign:'left', marginTop:16}}>
        <WingBlank size="xs">
          <div style={{fontSize:18}}><b>Produk Terbaru:</b></div>
        </WingBlank>
        <Flex wrap="wrap">
          <div className="inline" style = {{width:this.state.width / 2.2, margin: 5}}>
            <CardProduct />
          </div>
          <div className="inline" style = {{width:this.state.width / 2.2, margin: 5}}>
            <CardProduct />
          </div>
          <div className="inline" style = {{width:this.state.width / 2.2, margin: 5}}>
            <CardProduct />
          </div>
          <div className="inline" style = {{width:this.state.width / 2.2, margin: 5}}>
            <CardProduct />
          </div>
          <div className="inline" style = {{width:this.state.width / 2.2, margin: 5}}>
            <CardProduct />
          </div>
        </Flex>
      </div>
    )
  }
}
export default NewProductMobile;
