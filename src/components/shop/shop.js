import React, {Component} from 'react'
import axios from 'axios';
import ProductCard from '../productcard/productcard'
import {connect} from '../../ducks/reducer'


class Shop extends Component {
    constructor(props){
        super(props)
            this.state = {
            products: [],
            itemsInCart: 0,
            itemsGoingToCart: []
            }
    }

componentDidMount(){
axios.get('/api/products/').then((res) => {
    this.setState({
        products: res.data
    })
})
}

addToCart(){
axios.post('/api/cart/').then((res) => {
    this.setState
})
}

render(props) {
console.log(this.state)
let productInfo = this.state.products.map((Info,Index) => {
const {id, name, frontal_img, back_img, price, description, product_type, category_id} = Info
return(
<ProductCard
id={id}
name={name}
frontal_img={frontal_img}
back_img={back_img}
price={price}
description={description}
product_type={product_type}
category_id={category_id}
/>
)})

return (
     <div>
         <h1>Overridden Films Shop</h1>
         <ProductCard />
         {productInfo}
     </div>  
     );
    }
}
 
export default Shop;