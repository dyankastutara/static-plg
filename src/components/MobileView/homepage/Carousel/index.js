import React from 'react';
import { Carousel } from 'antd-mobile';


class CarouselBanner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgHeight: 125,
    }
  }
  render() {
    return (
      <Carousel autoplay infinite >
      {
        [0,1,2,3].map((dt,i)=>(
          <a
            key={i}
            href="/#" target="_blank" rel='noopener noreferrer'
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            <img onContextMenu={(e) => e.preventDefault()} alt={i}  src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" style={{ width: '100%', verticalAlign: 'top', height: 125}} />
          </a>
        ))
      }
      </Carousel>
    )
  }
}

export default CarouselBanner;
