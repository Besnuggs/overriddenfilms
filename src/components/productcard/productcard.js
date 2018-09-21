import React from 'react'

function ProductCard(props){
    console.log(props)
return(
    <div className="product-card">
        <p>Product Card</p>
        <p>{props.name}</p>
        <img src={props.back_img} alt='products' />
        <p>{props.description}</p>
        <button>Add to Cart</button>
    </div>
    )
}

export default ProductCard;