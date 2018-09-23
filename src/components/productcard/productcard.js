import React from 'react'
import './productcard.css'

function ProductCard(props){
    console.log(props)
return(
    <div className="product-card">
        <p>Product Card</p>
        <p>{props.name}</p>
        <img className="product_image" src={props.back_img} alt='products' />
        <p>{props.description}</p>
        <button>Add to Cart</button>
    </div>
    )
}

export default ProductCard;