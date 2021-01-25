import React from 'react';
import { Card, Flex, WhiteSpace, WingBlank, List, Badge, Modal, NavBar } from 'antd-mobile';
import { Rate, Icon } from 'antd';

import ProductViews from '../common/View';
import ProductSolds from '../common/Sold';
import ProductWishlist from '../common/Wishlist';
import ReviewPage from '../Review/ReviewPage';
import DiscussionPage from '../Discussion/DiscussionPage';
import Courier from '../Courier';
import {priceStyle} from '../../../../utils/modifiedText';

const Item = List.Item

class InfoProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      modalReview : false,
      modalDiscussion : false,
      modalCourier : false
    }
  }
  showModal = (value, condition) => {
    if(value === 'review'){
      this.setState({
        modalReview:condition
      })
    }
    if(value === 'discussion'){
      this.setState({
        modalDiscussion:condition
      })
    }
    if(value === 'courier'){
      this.setState({
        modalCourier:condition
      })
    }
  }
  render () {
    return (
      <div>
        <WhiteSpace size="sm" />
        <List>
          <p style={{ fontWeight: 600, marginLeft: 20, padding: "10px 5px 5px 0 ", fontSize: 14 }}>Nama Produk Full Name</p>
          <Flex>
            <Flex.Item>
              <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.1em", color: "#fa541c", marginLeft: 20, marginBottom: 15 }}>Rp. {priceStyle(100000)},-</div>
            </Flex.Item>
            <Flex.Item>
              <div style={{ marginBottom: 15 }}>
              {
                true ? (
                  <div style={{display: "flex", justifyContent:"center", marginLeft:20 }}>
                    <Badge text={<div style={{ padding: 2 }}>Stok Tersedia</div>} style={{ marginLeft: 25, backgroundColor: "#3cba54", height: 22 }}/>
                  </div>
                ) : (
                  <div style={{display: "flex", justifyContent:"center", marginLeft:20 }}>
                    <Badge text={<div style={{ padding: 2 }}>Stok Kosong</div>} style={{ marginLeft: 25, backgroundColor: '#fff', color: "#8c8c8c", border: "1px solid #8c8c8c", height:  22 }}/>
                  </div>
                )
              }
              </div>
            </Flex.Item>
          </Flex>
        </List>
        <WhiteSpace size="sm" />
        <List>
        {
          true ? (
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, marginLeft: 20, paddingTop: 10 }}>Harga Grosir : </div>
              {
                [0,1,2].map(data=>{
                  return(
                    <div key={data.id}>
                      <div style={{ padding: 5 }}>
                        <Flex>
                          <Flex.Item>
                            <div style={{ marginLeft: 20 }}> &ge; {5} item</div>
                          </Flex.Item>
                          <Flex.Item>
                            <div  style={{ fontWeight: 600, color: "#fa541c" }}>Rp. {priceStyle(900000)},-</div>
                          </Flex.Item>
                        </Flex>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          ):(
            <div style={{display:'flex', justifyContent:'center'}}>
              <div style={{ fontSize: 13, padding: 10 }}> Tidak Ada Harga Grosir </div>
            </div>
          )
        }
        </List>
        <WhiteSpace size="sm" />
        <WingBlank>
          <Flex style={{ backgroundColor: '#fff'}}>
            <Flex.Item>
            {
              true ? (
                <div onClick={() => this.showModal('review', true)}>
                  <Card style={{ display: 'flex' ,justifyContent: 'center', height : 60 }}>
                    <div style={{ textAlign: 'center'}}><Rate disabled allowHalf defaultValue={5} style={{ fontSize: 12, letterSpacing:"0", textAlign: 'center' }}/></div>
                    <div style={{ textAlign: 'center', color: "#fa541c"}}>{2} Ulasan</div>
                  </Card>
                </div>
              ):(
                <div onClick={() => this.showModal('review', true)}>
                  <Card style={{ display: 'flex' ,justifyContent: 'center', height : 60 }}>
                    <div style={{ textAlign: 'center'}}><Rate disabled allowHalf defaultValue={0} style={{ fontSize: 12, letterSpacing:"0", textAlign: 'center' }}/></div>
                    <div style={{ textAlign: 'center', color: "#fa541c"}}>0 Ulasan</div>
                  </Card>
                </div>
              )
            }
            </Flex.Item>
            <Flex.Item>
              <div onClick={() => this.showModal('discussion', true)}>
                <Card style={{ display: 'flex' ,justifyContent: 'center', height : 60 }}>
                  <div style={{ textAlign: 'center'}}><Icon type="message" theme="outlined" style={{ fontSize: 20, color: "#389e0d" }}/></div>
                  <div style={{ textAlign: 'center', color: "#fa541c"}}>2 Diskusi</div>
                </Card>
              </div>
            </Flex.Item>
            <Flex.Item>
              <div onClick={() => this.showModal('courier', true)}>
                <Card style={{ display: 'flex' ,justifyContent: 'center', height : 60 }}>
                  <div style={{ textAlign: 'center'}}><Icon type="car" theme="outlined" style={{ fontSize: 20, color: "#389e0d" }} /></div>
                  <div style={{ textAlign: 'center', color: "#fa541c"}}>5 Kurir</div>
                </Card>
              </div>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="sm" />
        <Card>
          <Card.Header title={<div style={{ fontSize: 15}}>Deskripsi Produk</div>}/>
          <Card.Body>
            <div style={{ fontSize: 13, color: "#595959"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat nisl pretium. Tempus quam pellentesque nec nam aliquam. At in tellus integer feugiat scelerisque varius. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Fames ac turpis egestas sed. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Nulla facilisi cras fermentum odio eu. Cum sociis natoque penatibus et. Iaculis eu non diam phasellus vestibulum lorem sed risus. Nunc id cursus metus aliquam eleifend. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Sed adipiscing diam donec adipiscing tristique risus nec. Sed enim ut sem viverra aliquet eget. Suspendisse in est ante in. Eget duis at tellus at urna condimentum mattis. Porttitor rhoncus dolor purus non enim. Phasellus vestibulum lorem sed risus ultricies tristique.
            </div>
          </Card.Body>
        </Card>
        <WhiteSpace size="sm"/>
        <Card>
          <Card.Header title={<div style={{ fontSize: 15 }}>Informasi Produk</div>}/>
          <Card.Body>
            <Flex>
              <Flex.Item>
                <Card style={{ display: 'flex' ,justifyContent: 'center', border: 'none', height : 60 }}>
                  <div style={{ textAlign: 'center'}}><Icon type="car" theme="outlined" style={{ fontSize: 20, textAlign: 'center' }}/></div>
                  <div style={{ textAlign: 'center', fontSize: 13 }}>Terkirim</div>
                  <div style={{ textAlign: 'center', fontSize: 13 }}><ProductSolds /></div>
                </Card>
              </Flex.Item>
              <Flex.Item>
                <Card style={{ display: 'flex' ,justifyContent: 'center', border: 'none', height : 60 }}>
                  <div style={{ textAlign: 'center'}}><Icon type="eye" theme="outlined" style={{ fontSize: 20, textAlign: 'center' }}/></div>
                  <div style={{ textAlign: 'center', fontSize: 13 }}>Dilihat</div>
                  <div style={{ textAlign: 'center', fontSize: 13 }}><ProductViews /></div>
                </Card>
              </Flex.Item>
              <Flex.Item>
                <Card style={{ display: 'flex' ,justifyContent: 'center', border: 'none', height : 60 }}>
                  <div style={{ textAlign: 'center'}}><Icon type="heart" theme="outlined" style={{ fontSize: 20, textAlign: 'center' }}/></div>
                  <div style={{ textAlign: 'center', fontSize: 13 }}>Wishlist</div>
                  <div style={{ textAlign: 'center', fontSize: 13 }}><ProductWishlist /></div>
                </Card>
              </Flex.Item>
            </Flex>
            <List>
              <Item extra={<div style={{ fontSize: 13, color: "#000000"}}><ProductSolds /></div>}><div style={{ fontSize: 13 }}>Terjual</div></Item>
              <Item extra={<div style={{ fontSize: 13, color: "#fa541c"}}>Baru</div>}> <div style={{ fontSize: 13 }}>Kondisi</div></Item>
              <Item extra={<div style={{ fontSize: 13, color: "#000000"}}>2</div>}> <div style={{ fontSize: 13 }}>Pemesanan Minimum</div></Item>
              <Item extra={<div style={{ fontSize: 13, color: "#000000"}}>200 g</div>}> <div style={{ fontSize: 13 }}>Berat</div></Item>
              <Item extra={<div style={{ fontSize: 13, color: "#fa541c"}}>Alat Tulis Kantor</div>}>    <div style={{ fontSize: 13 }}>Kategori</div></Item>
              <Item extra={<div style={{ fontSize: 13, color: "#000000"}}>Test Etalase</div>}>  <div style={{ fontSize: 13 }}>Etalase</div></Item>
            </List>
          </Card.Body>
        </Card>

        <Modal visible={this.state.modalReview} title={null} style={{ top: 0, width:'100%' }}>
          <div style={{ minHeight: '100vh', overflow: 'scroll' }}>
            <NavBar
              mode="light"
              icon={<Icon type="left" style={{color:"#000"}}/>}
              onLeftClick={() => this.showModal('review', false)}
              rightContent={null}
            >Ulasan</NavBar>
            {this.state.modalReview && <ReviewPage />}
          </div>
        </Modal>
        <Modal visible={this.state.modalDiscussion} title={null} style={{ top: 0, width:'100%' }}>
          <div style={{ minHeight: '100vh', overflow: 'scroll' }}>
            <NavBar
              mode="light"
              icon={<Icon type="left" style={{color:"#000"}}/>}
              onLeftClick={() => this.showModal('discussion', false)}
              rightContent={null}
            >Diskusi</NavBar>
            {this.state.modalDiscussion && <DiscussionPage />}
          </div>
        </Modal>
        <Modal visible={this.state.modalCourier} title={null} style={{ top: 0, width:'100%' }}>
          <div style={{ minHeight: '100vh', overflow: 'scroll' }}>
            <NavBar
              mode="light"
              icon={<Icon type="left" style={{color:"#000"}}/>}
              onLeftClick={() => this.showModal('courier', false)}
              rightContent={null}
            >Kurir</NavBar>
            {this.state.modalCourier && <Courier/>}
          </div>
        </Modal>

      </div>
    )
  }
}
export default InfoProduct;
