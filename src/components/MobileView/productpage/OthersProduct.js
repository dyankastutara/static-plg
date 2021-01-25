import React from 'react';
import {  Flex, List } from 'antd-mobile';
import { Rate } from 'antd';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LinesEllipsis from 'react-lines-ellipsis';

import {priceStyle} from '../../../utils/modifiedText';

const Item = List.Item;

class OthersProduct extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  render () {
    let settings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 5,
      variableWidth: true,
      adaptiveHeight: true,
      arrows:false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      }]
    }
    return (
      <div style={{ marginBottom: 60 }}>
        {
          true && (
            <div>
              <div style={{ fontSize: 14, color: "#000000", padding: 10, marginLeft: 10 }}>Produk Lainnya dari toko ini</div>
              <Flex>
                <Slider ref={c => this.slider = c } {...settings}>
                {
                  [0,1,2,3].map(dt=>{
                    return(
                      <Flex.Item key={dt.id}>
                        <a href={`/product`}>
                          <div style={{ width: 150, display: "flex" , justifyContent: 'center',  padding: "1px" }}>
                            <List>
                              <Item>
                                <img src="https://image-plasgos.s3.amazonaws.com/no-image-thumb.png" style={{ width: 115 , height: 125 }} alt="1"/>
                              </Item>
                              <Item wrap>
                                <div style={{ fontSize: 10 }}>
                                  <LinesEllipsis
                                    text={dt.name}
                                    maxLine='2'
                                    ellipsis='...'
                                    trimRight
                                    basedOn='letters'
                                  />
                                </div>
                              </Item>
                              <Item wrap><div style={{ textAlign: 'center', fontSize: 12, color: "#fa541c" , padding: 0 }}>Rp. {priceStyle(100000)} </div></Item>
                              <div style={{ textAlign: 'center'}}><Rate disabled allowHalf defaultValue={5} style={{ fontSize: 12, letterSpacing:"0", textAlign: 'center' }}/></div>
                              <div style={{ textAlign: 'center', color: "#fa541c", paddingBottom: 5 }}>{5} Ulasan</div>
                            </List>
                          </div>
                        </a>
                      </Flex.Item>
                    )
                  }).slice(0, 6)
                }
                </Slider>
              </Flex>
            </div>
          )
        }
      </div>
      )
    }
}

export default OthersProduct;
