import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cartReducer"

const CartContext = createContext();
const getlocalcartdata = () => {
    const localdata = localStorage.getItem("productdetails")
    if (localdata === []) {
        return [];
    }
    else {
        return JSON.parse(localdata);
    }
}

const initialState = {
    // cart: [],
    cart: getlocalcartdata(),
    total_item: "",
    total_amount: "",
    shipping_fee: 5000,
};

const Cartprovider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const AddToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
    }
    //    card toggle function
    const setDecrease = (id) => {
        dispatch({ type: "DECREASE_TOGGLE", payload: id })
    }
    const setIncrease = (id) => {
        dispatch({ type: "INCREASE_TOGGLE", payload: id })
    }



    const removeItem = (id) => {
        dispatch({ type: "REMOVE_CARD", payload: id })
    }

    // to add the data in localstorage
    useEffect(() => {
        dispatch({type:"CART_TOTLA_TYPE" });
        dispatch({type:"CART_TOTAL_PRICE"});
        localStorage.setItem("productdetails", JSON.stringify(state.cart))
    }, [state.cart])
    //  to claer the cart data of cat page
    const clearcart = () => {
        dispatch({ type: "EMPTY_CARD" })
    }


    return <CartContext.Provider value={{ ...state, AddToCart, removeItem, clearcart, setDecrease, setIncrease }} >
        {children}
    </CartContext.Provider>
}

// custom context
const useCartcontext = () => {
    return useContext(CartContext)
}

export { Cartprovider, useCartcontext }