import React from 'react';
import {Switch, Route} from 'react-router-dom';
import dashboard from './components/dashboard/dashboard';
import login from './components/login/login';
import cart from './components/cart/cart';
import portfolio from './components/portfolio/portfolio';
import shop from './components/shop/shop'

export default (
    <Switch>
        <Route exact path="/" component={dashboard} />
        <Route path="/login" component={login} />
        <Route path="/cart" component={cart} />
        <Route path="/portfolio" component={portfolio} />
        <Route path="/shop" component={shop} />
    </Switch>
)