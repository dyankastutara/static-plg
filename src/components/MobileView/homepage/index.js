import React from 'react';
import { TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import IosHome from 'react-ionicons/lib/IosHome';
import IosHeart from 'react-ionicons/lib/IosHeart';
import IosCart from 'react-ionicons/lib/IosCart';
import MdClock from 'react-ionicons/lib/MdClock';
import MdPerson from 'react-ionicons/lib/MdPerson';

import Navbar from './Navbar';
import Carousel from './Carousel';
import Category from './Category';
import NewProducts from './NewProducts';
import NewStores from './NewStores';
import RFQ from './RFQ';
import Feeds from './Feed';
import FavoriteTab from './favoritetab';
import Account from './Account';

import './Homepage.less';
import './Navbar.less';

class MobileHomepage extends React.Component {
	static contextTypes = {
	  router:PropTypes.object.isRequired
	}
  constructor(props){
    super(props);
    this.state = {
      selectedTab:1,
			pathname:''
    }
  }
	changeSelectTab = (e)=>{
		if(e !== this.state.selectedTab){
			if(e === 1){
				this.context.router.history.push('/')
				this.setState({pathname:'/'})
			}
			if(e === 2){
				this.context.router.history.push('/favorites')
				this.setState({pathname:'/favorites'})
			}else if(e === 3){
				this.context.router.history.push('/feed')
				this.setState({pathname:'/feed'})
			}else if(e === 4){
				this.context.router.history.push('/cart')
				this.setState({pathname:'/cart'})
			}else if(e === 5){
				this.context.router.history.push('/account')
				this.setState({pathname:'/account'})
			}else{
				this.context.router.history.replace('/')
				this.setState({pathname:'/'})
			}
			this.setState({selectedTab:e})
		}
	}
	_checkRoutes = (location) => {
		if(location.pathname === '/'){
			this.setState({selectedTab:1})
		}else if(location.pathname === '/favorites'){
			this.setState({selectedTab:2})
		}else if(location.pathname === '/feed'){
			this.setState({selectedTab:3})
		}else if(location.pathname === '/cart'){
			this.setState({selectedTab:4})
		}else if(location.pathname === '/account'){
			this.setState({selectedTab:5})
		}else{
			this.setState({selectedTab:1})
		}
		this.setState({pathname:location.pathname})
	}
	componentDidMount(){
		const { location } = this.context.router.history;
		this._checkRoutes(location);
	}
  render() {
		const { selectedTab } = this.state;
		const { cartCount } = this.props;
    return (
      <div>
				{
					selectedTab === 1 && (
						<Helmet>
							 <meta property="og:title" content="Plasgos - Marketplace B2B" />
							 <meta property="og:description" content="Dapatkan kenyamanan dan keamanan dalam bertransaksi dalam jumlah dan nominal yang besar hanya di Plasgos."/>
							 <meta property="og:url" content="/" />
							 <meta property="og:site_name" content="Plasgos" />
							 <meta property="og:image" content="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/36677482_1859679851004388_6721581341013442560_n.png?_nc_cat=0&oh=f6987cb990bac491f403d7714fed8cf6&oe=5BEC009E"/>
							 <title>Plasgos.com: Online Supplier in Indonesia</title>
						</Helmet>
					)
				}
				{
					selectedTab === 2 && (
						<Helmet>
							<title>Favorites | Plasgos</title>
						</Helmet>
					)
				}
				{
					selectedTab === 3 && (
						<Helmet>
							<title>Timeline | Plasgos</title>
						</Helmet>
					)
				}
				{
					selectedTab === 5 && (
						<Helmet>
							<title>Akun | Plasgos</title>
						</Helmet>
					)
				}
				<div style={{width:'100%'}}>
					{selectedTab === 1 && <Navbar />}
					{selectedTab === 1 && (
						<div style={{ marginTop: 50, marginBottom: 50 }}>
							<Carousel />
							<Category />
							<RFQ history={this.context.router.history}/>
							<NewStores />
							<NewProducts />
						</div>
					)}
					{selectedTab === 2 && (
						<div style={{ marginBottom: 50 }}>
							<FavoriteTab />
						</div>
					)}
					{selectedTab === 3 &&
						<div style={{ marginBottom: 50 }}>
							<Feeds />
						</div>
					}
					{selectedTab === 5 &&
						<div style={{ marginBottom: 50 }}>
							<Account />
						</div>
					}
					<div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
						<TabBar unselectedTintColor="#949494" tintColor='#fa541c' barTintColor="#ffffff" tabBarPosition="bottom">
		          <TabBar.Item
		            title="Home"
		            key="HOME"
								icon={
									<IosHome color='#949494' fontSize='25px'/>
								}
								selectedIcon={
									<IosHome color='#fa541c' fontSize='25px'/>
								}
		            selected={selectedTab === 1}
		            onPress={()=>this.changeSelectTab(1)}
		          />
							<TabBar.Item
								title="Favorit"
								key="FAVORITES"
								icon={
									<IosHeart color='#949494' fontSize='25px'/>
								}
								selectedIcon={
									<IosHeart color='#fa541c' fontSize='25px'/>
								}
								selected={selectedTab === 2}
								onPress={()=>this.changeSelectTab(2)}
							/>
							<TabBar.Item
								title="Timeline"
								key="TIMELINE"
								icon={
									<MdClock color='#949494' fontSize='25px'/>
								}
								selectedIcon={
									<MdClock color='#fa541c' fontSize='25px'/>
								}
								selected={selectedTab === 3}
								onPress={()=>this.changeSelectTab(3)}
							/>
							<TabBar.Item
								title="Keranjang"
								key="Cart"
								badge={cartCount}
								icon={
									<IosCart color='#949494' fontSize='25px'/>
								}
								selectedIcon={
									<IosCart color='#fa541c' fontSize='25px'/>
								}
								selected={selectedTab === 4}
								onPress={()=>this.changeSelectTab(4)}
							/>
							<TabBar.Item
								title="Akun Saya"
								key="AKUN"
								icon={
									<MdPerson color='#949494' fontSize='25px'/>
								}
								selectedIcon={
									<MdPerson color='#fa541c' fontSize='25px'/>
								}
								selected={selectedTab === 5}
								onPress={()=>this.changeSelectTab(5)}
							/>
		        </TabBar>
					</div>
				</div>
      </div>
    );
  }
}

export default MobileHomepage;
