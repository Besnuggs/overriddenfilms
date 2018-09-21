import React, {Component} from 'react';

class Cart extends Component {
    
    render() { 
        return (
            <div>
                <h1>Shopping Cart</h1>
                <div className="Shoppingtable">
                <h3>Item Description</h3>
                <h3>Order Summary</h3>
                </div>            
            </div>
          );
    }
}
 
export default Cart;