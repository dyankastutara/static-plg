import React from 'react';
import {Button} from 'antd';

const styles = {
     favorit : {
       fontSize: 12,
       height: 45,
       width: '100%',
       display:'flex',
       alignItems:'center',
       justifyContent:'center',
       borderRadius:5
     }
}

class ButtonFavorite extends React.Component{
  render(){
    return(
      <div>
        <Button style={{...styles.favorit,background: '#fff', color: '#000', borderColor:'#fa541c'}} icon='check'>Favorit</Button>
      </div>
    )
  }
}

export default ButtonFavorite;
