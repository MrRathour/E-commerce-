const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isloading: true
      };
    case "SET_API_PRODUCTS":
      const featuredata = action.payload.filter(curr => curr.featured === true)
      return {
        ...state,
        isloading: false,
        products: action.payload,
        featureproducts: featuredata,
      }
    case "API_ERROR":
      return {
        ...state,
        isloading: false,
        iserror: true
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleloading: true
      };
    case "SET_SINGLE_PRODUCTS":
      return {
        ...state,
        isSingleloading: false,
        singleproduct: action.payload,
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
}
export default reducer