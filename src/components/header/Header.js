import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() { 
        return (
            <div>
                <h1>Header</h1>
                <Link to='/portfolio'><p>Portfolio</p></Link>
                <Link to='/login'><p>Account</p></Link>
                <Link to='/shop'><p>Shop</p></Link>
            </div>
          );
    }
}
 
export default Header;