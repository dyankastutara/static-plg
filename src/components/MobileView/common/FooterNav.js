import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layout,
  Row,
  Col,
  Tooltip
} from 'antd';
import {
  FaFacebookOfficial,
  FaTwitterSquare,
  FaInstagram,
  // FaGooglePlusSquare,
  // FaLinkedinSquare
} from 'react-icons/lib/fa';
import SubscribeForm from './SubscribeForm';

import './FooterNav.css';

const { Footer } = Layout;

class FooterNav extends React.Component {
  render() {
    return (
      <Footer className="base" id="footer-page">
        <div className="baseDiv" >
          <Row className="secondRow">
            <Col span={5} className="column">
              <div style={{textAlign:'left'}}>
                <div className="columnTitle">Plasgos</div>
                <div>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/about/" className="link">
                    Tentang Kami
                  </Link>
                </div>
                <div>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/careers/" className="link">
                    Karir
                  </Link>
                </div>
                <div>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/privacy/" className="link">
                    Kebijakan Privacy
                  </Link>
                </div>
                <div>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/terms/" className="link">
                    Syarat & Ketentuan
                  </Link>
                </div>
                <div>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/contactus/" className="link">
                    Hubungi Kami
                  </Link>
                </div>
                <div>
                 <a href="https://blog.plasgos.com" target="_blank" rel="noopener noreferrer" className="link">Blog Plasgos</a>
                </div>
              </div>
            </Col>
            <Col span={5} className="column">
              <div style={{textAlign:'left'}}>
                <div className="columnTitle">Pembeli</div>
                <div>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/howtobuy/" className="link">
                    Cara Belanja
                  </Link>
                </div>
                <div>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/howtobuy/" className="link">
                    Pembayaran
                  </Link>
                </div>
                 {/*
                <div>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/" className="link">
                    Pengembalian
                  </Link>
                </div>
                */}
              </div>
            </Col>
            <Col span={5} className="column">
              <div style={{textAlign:'left'}}>
                <div className="columnTitle">Penjual</div>
                <div>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/howtosell/" className="link">
                    Cara Berjualan
                  </Link>
                </div>
                <div>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/howtosell/" className="link">
                    Penarikan Dana
                  </Link>
                </div>

                {/*
                <div>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/" className="link">
                    Premium
                  </Link>
                </div>
               */}
              </div>
            </Col>
            <Col span={9} className="column">
              <div style={{display:'flex', flexDirection:'column'}}>
                <SubscribeForm />
                <div style={{display:'flex', alignItems:'center'}}>
                  <div>Download:</div>
                  <div>
                    <a target="_blank" rel="noopener noreferrer" href='https://play.google.com/store/apps/details?id=com.plasgos&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                      <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' style={{width:120, height:50}}/>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{borderTop:'1px solid #3a4553', margin:'30px 0 25px 0'}}></div>
        <div className="baseDiv" style={{display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
          <div style={{display:'flex', alignItems:'center'}}>
            <div style={{fontSize:14, fontWeight:500}}>Ikuti Kami : </div>
            <Tooltip title="Ikuti kami di Facebook" placement="topLeft">
              <a href="https://www.facebook.com/plasgos" target="_blank" rel="noopener noreferrer"><FaFacebookOfficial className="follow-fb" style={{color:'#3B5998' , backgroundColor: '#fff', fontSize : '24'}}/></a>
            </Tooltip>
            <Tooltip title="Ikuti kami di Twitter" placement="topLeft">
              <a href="https://www.twitter.com/plasgos" target="_blank" rel="noopener noreferrer"><FaTwitterSquare className="follow-twitter" style={{ color : '#1DA1F2', backgroundColor: '#fff', fontSize : '24'}}/></a>
            </Tooltip>
            <Tooltip title="Ikuti kami di Instagram" placement="topLeft">
            <a href="https://www.instagram.com/plasgos" target="_blank" rel="noopener noreferrer"><FaInstagram className="follow-instagram" style={{ color : '#262626', backgroundColor: '#fff', fontSize : '24'}}/></a>
            </Tooltip>
            {
              /*
              <FaGooglePlusSquare className="follow-google" />
              <FaLinkedinSquare className="follow-linkedin" />
              */
            }
          </div>
          <div style={{textAlign:'left', fontSize:14, fontWeight:300}}>
            <div> Copyright &copy; 2018, PT Plasa Grosir Indonesia (plasgos.com). All Right Reserved</div>
          </div>
        </div>
      </Footer>
    );
  }
}

export default FooterNav;
