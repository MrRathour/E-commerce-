const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let { id, color, amount, product } = action.payload;
            //    if the card is existing or not
            let existingcard = state.cart.find(
                (curitem) => curitem.id === id + color
            );
            if (existingcard) {
                let updatedproduct = state.cart.map((curelem) => {
                    if (curelem.id === id + color) {
                        let newamount = curelem.amount + amount;
                        if (newamount >= curelem.max) {
                            newamount = curelem.max
                        }
                        return {
                            ...curelem,
                            amount: newamount,
                        }
                    }
                    else {
                        return curelem
                    }
                })
                return {
                    ...state,
                    cart: updatedproduct,
                }
            }

            else {
                let cartproduct;
                cartproduct = {
                    id: id + color,
                    name: product.name,
                    color,
                    amount,
                    image: product.image[0].url,
                    price: product.price,
                    max: product.stock
                }
                return {
                    ...state,
                    cart: [...state.cart, cartproduct],
                }
            }
        case "REMOVE_CARD": {
            let updatecart = state.cart.filter((curr) => {
                return curr.id !== action.payload
            })
            return {
                ...state,
                cart: updatecart,
            }
        }
        case "EMPTY_CARD":
            return {
                ...state,
                cart: [],
            }
        case "DECREASE_TOGGLE": {
            let updateamount = state.cart.map((curr) => {
                if (curr.id === action.payload) {
                    let decrement = curr.amount - 1
                    if (decrement <= 1) {
                        decrement = 1
                    }
                    return {
                        ...curr,
                        amount: decrement,
                    }
                }
                else {
                    return curr
                }
            })
            return {
                ...state,
                cart: updateamount
            }
        }
        case "INCREASE_TOGGLE": {
            let updateamount = state.cart.map((curr) => {
                if (curr.id === action.payload) {
                    let increment = curr.amount + 1
                    if (increment > curr.max) {
                        increment = curr.max
                    }
                    return {
                        ...curr,
                        amount: increment,
                    }
                }
                else {
                    return curr
                }
            })
            return {
                ...state,
                cart: updateamount
            }
        }
        case "CART_TOTLA_TYPE": {
            let updateditem = state.cart.reduce((initailval, curr) => {
                let { amount } = curr;
                initailval = initailval + amount;
                return initailval
            }, 0)
            return {
                ...state,
                total_item: updateditem
            }
        }
        case "CART_TOTAL_PRICE": {
            let totalprice = state.cart.reduce((initailval, curr) => {
                let { price, amount } = curr
                initailval = initailval + price * amount
                return initailval
            }, 0)
           
            return {
                ...state,
                total_amount: totalprice,
            }
        }
        default:
            return state
    }

}

export default cartReducer