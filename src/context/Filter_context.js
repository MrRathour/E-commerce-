import { useContextproduct } from "./Productcontext";
import reducer from "../Reducer/filterreducer";
const { createContext, useContext, useReducer, useEffect } = require("react");

const FilterContext = createContext();
export const FilterContextProvider = ({ children }) => {
    const { products } = useContextproduct();
    const initialState = {
        filter_products: [],
        all_products: [],
        grid_view: true,
        sorting_value: "lowest",
        filters: {
            text: "",
            category: "all",
            company: "all",
            color: "all",
            maxPrice: 0,
            price: 0,
            minPrice: 0,
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    //    to set the grid view 
    const setGridview = () => {
        dispatch({ type: "SET_GRIDVIEW" })
    }
    const setListview = () => {
        dispatch({ type: "SET_LIST_VIEW" })
    }
    // Sorting function
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SHORT_VALUE", payload: userValue })
    }

    // update the filter value
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } })
    }
    // to clear the filter
    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" });
    };
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [state.sorting_value, state.filters])

    useEffect(() => {
        dispatch({ type: "SET_FILTER_PRODUCTS", payload: products })
    }, [products]);
    return (

        <FilterContext.Provider value={{ ...state, setGridview, clearFilters, setListview, sorting, updateFilterValue }}>
            {children}
        </FilterContext.Provider>
    )
}
// custom hook
export const useFilterContext = () => {
    return useContext(FilterContext)
}