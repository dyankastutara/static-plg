import React from 'react'
import { Icon, Button } from 'antd';

class Etalase extends React.Component {
  render () {
    return (
      <div>
        <Button><Icon type="bars" style={{fontWeight:'bold', fontSize:20}}/></Button>
      </div>
    )
  }
}

export default Etalase;
