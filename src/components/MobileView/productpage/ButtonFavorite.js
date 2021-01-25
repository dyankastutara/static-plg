import React from 'react';
import {Button} from 'antd-mobile';

const styles = {
  favorit: {
    fontSize: 12,
    width: '100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    border: "1px solid #fa541c",
    height: 45
  }
};

class ButtonFavorite extends React.Component{
  render(){
    return(
      <div style={{width:'100%'}}>
        <Button icon='plus' style={{...styles.favorit,background: '#fa541c',color: '#fff'}}>Favoritkan</Button>
      </div>
    )
  }
}

export default ButtonFavorite;
