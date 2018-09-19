import React from 'react'


function ProductCard (props) {
    console.log(props.name)
        return (
            <div>
            <p>Category_id: {props.category_id}</p>
            <p>Name:{props.name} </p> 
            <p>Frontal_img:</p> <img src={props.frontal_img} alt='Front' />
            <p>Back_img:</p> <img src={props.back_img} alt='Back' />
            <p>Description: {props.description}</p> 
            </div>
          );
    }

 
export default ProductCard;