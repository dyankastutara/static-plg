import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

class ImageProduct extends React.Component {
  render() {
    return (
      <div>
         <WingBlank size="sm">
           <Carousel autoplay={false} infinite>
              <div style={{ display: 'inline-block', width: '100%', height: 176 }}>
                 <img alt="1" src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                 />
              </div>
              <div style={{ display: 'inline-block', width: '100%', height: 176 }}>
                 <img alt="1" src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                 />
              </div>
              <div style={{ display: 'inline-block', width: '100%', height: 176 }}>
                 <img alt="1" src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                 />
              </div>
           </Carousel>
         </WingBlank>
      </div>
    );
  }
}


export default ImageProduct
