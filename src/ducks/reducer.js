let initialState = {
    itemsinCart: [],
    price: 0,
    product_imgs: '',
    subtotal: 0,
    total: 0
}

// Action Types
const UPDATE_STATE_CART = "UPDATE_STATE_CART"

 


// Action Creators
export function updateStateCart(cartInfo) {
    return{
        type: UPDATE_STATE_CART,
        payload: cartInfo
    }
}


// Reducer Function
function reducer (state=initialState, action){
switch(action.type){
    case UPDATE_STATE_CART:
    let {itemsinCart, price, product_imgs, subtotal, total} = action.payload
    return Object.assign({}, state, 
        {
        itemsinCart: itemsinCart,
        price: price,
        product_imgs: product_imgs,
        subtotal: subtotal,
        total: total
        })


    default: return state;
}
}


export default reducer