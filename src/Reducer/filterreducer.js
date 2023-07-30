const filterreducer = (state, action) => {
    switch (action.type) {
        case "SET_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            }
        case "SET_GRIDVIEW":
            return {
                ...state,
                grid_view: true
            }
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false
            }
        case "GET_SHORT_VALUE":
            // let usersortvalue = document.getElementById("sort");
            // let sort_value = usersortvalue.options[usersortvalue.selectedIndex].value;

            return {
                ...state,
                sorting_value: action.payload
            }
        case "SORTING_PRODUCTS":
            let newsortdata;
            const { filter_products, sorting_value } = state;
            let tempSortproduct = [...filter_products];
            const sortingproducts = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price;
                }
                if (sorting_value === "highest") {
                    return b.price - a.price;
                }
                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name)
                }
                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            }
            newsortdata = tempSortproduct.sort(sortingproducts)
            return {
                ...state,
                filter_products: newsortdata,
            }
        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }
        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempfilterproducts = [...all_products];
            const { text, category, company, color, price } = state.filters;
            if (text) {
                tempfilterproducts = tempfilterproducts.filter((curr) => {
                    return curr.name.toLowerCase().includes(text)
                })
            }
            if (category !== "all") {
                tempfilterproducts = tempfilterproducts.filter((curr) => {
                    return curr.category === category
                })
            }
            if (company !== "all") {
                tempfilterproducts = tempfilterproducts.filter((curr) => {
                    return curr.company.toLowerCase() === company.toLowerCase()
                })
            }
            if (color !== "all") {
                tempfilterproducts = tempfilterproducts.filter((curr) => {
                    return curr.colors.includes(color)
                })
            }
            // if (price === 0) {
            //     tempfilterproducts = tempfilterproducts.filter((curr) => {
            //         return curr.price === price
            //     })
            // }
            if (price) {
                tempfilterproducts = tempfilterproducts.filter((curr) => {
                    return curr.price <= price
                })
            }
            return {
                ...state,
                filter_products: tempfilterproducts
            }

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    maxPrice: 0,
                    price: state.filters.maxPrice,
                    minPrice: state.filters.maxPrice,
                }
            }
        default:
            return state
    }

}

export default filterreducer;