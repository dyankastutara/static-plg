import React from 'react';
import { WingBlank } from 'antd-mobile';
import CardSupplier from '../../common/CardShop';


class FavoriteList extends React.Component{
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  render(){
    return(
      <WingBlank size="xs">
        <h3>Toko Favorit</h3>
        <div style={{display:'flex', flexWrap: 'wrap', justifyContent:'space-between', width:'100%'}}>
          <div style = {{marginTop:'0.5em', width:'100%'}}>
            <CardSupplier />
          </div>
          <div style = {{marginTop:'0.5em', width:'100%'}}>
            <CardSupplier />
          </div>
          <div style = {{marginTop:'0.5em', width:'100%'}}>
            <CardSupplier />
          </div>
          <div style = {{marginTop:'0.5em', width:'100%'}}>
            <CardSupplier />
          </div>
          <div style = {{marginTop:'0.5em', width:'100%'}}>
            <CardSupplier />
          </div>
        </div>
      </WingBlank>
    )
  }
}
export default FavoriteList;
