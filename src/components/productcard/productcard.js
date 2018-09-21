import React from 'react'

function ProductCard(props){
    console.log(props)
return(
    <div>
        <p>product card</p>
        <p>{props.name}</p>
        <img src={props.back_img} alt='products' />
        <p>{props.description}</p>
        <button>Add to Cart</button>
    </div>
    )
}

export default ProductCard;