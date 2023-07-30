import React, { useEffect } from 'react'
import { useContext } from 'react';
import { createContext } from 'react'
import axios from "axios";
import { useReducer } from 'react';
import reducer from '../Reducer/productreducer';

const Appcontext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const Appprovider = ({ children }) => {
    const initialstate = {
        isloading: false,
        iserror: false,
        products: [],
        featureproducts: [],
        isSingleloading: false,
        singleproduct: {},
    };
    const [state, dispatch] = useReducer(reducer, initialstate)
    const getproducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url)
            const product = await res.data;
            dispatch({ type: "SET_API_PRODUCTS", payload:product });
        }
        catch (err) {
            dispatch({ type: "API_ERROR" })
        }
    }

    const getsingleproducts = async (url) => {
        dispatch({type:"SET_SINGLE_LOADING"})
        try {
            const res = await axios.get(url)
            const singleproduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCTS", payload: singleproduct });
        }
        catch (erroe) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    }
    useEffect(() => {
        getproducts(API)
    }, [])
    return (
        <Appcontext.Provider value={{ ...state  , getsingleproducts}}>
            {children}
        </Appcontext.Provider>
    )
}
// custom hooks
const useContextproduct = () => {
    return useContext(Appcontext)
}
export { Appprovider, Appcontext, useContextproduct }