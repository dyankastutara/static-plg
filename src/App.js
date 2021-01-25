import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import * as Mobile from './MobileApp';
const App = () => {
  if (isMobile) {
    return (
      <div>
        <ConfigProvider locale={enUS}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Mobile.MobileHomepage} />
              <Route exact path="/feed" component={Mobile.MobileHomepage} />
              <Route exact path="/wishlist" component={Mobile.MobileHomepage} />
              <Route exact path="/favorites" component={Mobile.MobileHomepage} />
              <Route exact path="/account" component={Mobile.MobileHomepage} />
              <Route exact path="/shop" component={Mobile.MobileSupplierPage} />
              <Route exact path="/product" component={Mobile.ProductPageMobile} />
              <Route component={Mobile.MobilePageNotFound}/>
            </Switch>
          </BrowserRouter>
        </ConfigProvider>
      </div>
    );
  }
  return null
}

export default App;
