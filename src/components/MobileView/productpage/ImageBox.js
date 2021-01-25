import React from 'react';
import {
  Col,
  Button
} from 'antd';
import Lightbox from 'react-image-lightbox';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGE_EMPTY } from '../../../host';

const styles = {
  container: {
    borderRight: '1px solid #dae2ee',
  },
};

export default class ImageBox extends React.Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  state = {
    photoIndex: 0,
    isOpen: false,
    images:[]
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  pushImageToState=(objImages)=>{
    var images = this.state.images.slice()
    if(objImages.ImageProducts){
      if(objImages.ImageProducts.length > 0){
        objImages.ImageProducts.sort((a, b)=>{
          return (a.is_default === b.is_default) ? 0 : a.is_default ? -1 : 1
        }).map(data=>{
          images.push(data.url)
          return this.setState({ images: images })
        })
      }else{
        images.push(IMAGE_EMPTY);
        return this.setState({images:images});
      }
    }else{
      images.push(IMAGE_EMPTY);
      return this.setState({images:images});
    }
  }
  componentDidMount(){
    const {detailData} = this.props;
    if(detailData){
      this.pushImageToState(detailData)
    }
  }
  render() {
    const {photoIndex,isOpen,images} = this.state;

    var settingsBottom = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1024,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return (
      <Col span={8} style={styles.container}>
        <div>
          <Col span={24}>
            <div style={{height:'21em',width:'100%', display:'flex', justifyContent:'center', alignItems:'flex-start', padding:'0.8em 0.8em 0 0.8em'}} >
              <img alt={photoIndex} src={images[photoIndex]} style={{border: '1px solid #dae2ee',width:'21em', height:'20em', cursor:'pointer', objectFit:'scale-down'}} onClick={() => this.setState({ isOpen: true})}/>
            </div>
          </Col>
        </div>
        <div>
          <Col span={24}>
            <div style={{display:'flex', justifyContent:'center',  alignItems:'center', padding:'0 0.8em 0.8em 0.8em'}}>
              <Button shape="circle" icon="left"  onClick={this.previous}/>
                <div style={{width:'21em'}}>
                 <Slider ref={c => this.slider = c } {...settingsBottom}>
                    {
                      images.map((data, i)=>{
                        return(
                          <div key={i} style={{cursor:'pointer'}}>
                            {
                              i===photoIndex ? (
                                <img alt={images[i]} src={images[i]} style={{width:'99%', height:'5em', margin:'0 0 0 0.1em', border: '2px solid orange', objectFit:'scale-down'}} onClick={()=>{this.setState({photoIndex:i})}} />
                              ):(
                                <img alt={images[i]} src={images[i]} style={{width:'99%', height:'5em', margin:'0 0 0 0.1em', objectFit:'scale-down'}} onClick={()=>{this.setState({photoIndex:i})}} />
                              )
                            }
                          </div>
                        )
                      })
                    }
                  </Slider>
                  </div>
              <Button shape="circle" icon="right"  onClick={this.next}/>
            </div>
          </Col>
        </div>
        <div>
            {isOpen &&
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() => this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length,
                    })}
                    onMoveNextRequest={() => this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                    })}
                />
            }
        </div>
      </Col>
    );
  }
}
