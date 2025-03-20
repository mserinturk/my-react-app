import { createSlice } from '@reduxjs/toolkit'



const basketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket))
}

const getBasket = () => {
  if(localStorage.getItem("basket")){
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
}

const initialState = {
  products: getBasket(),
}

export const basketSlice = createSlice ({
  name: "basket",
  initialState,
  reducers:{
    addToBasket: (state, action) => {
      const findProduct = state.products && state.products.find((product) => product.id === action.payload.id);
      if(findProduct){
        const extractedProducts = state.products.filter((product) => product.id !== action.payload.id);
        findProduct.quantity += action.payload.quantity;
        state.products = [...extractedProducts, findProduct]
        basketToStorage(state.products)
      }
      else{
        state.products = [...state.products, action.payload];
        basketToStorage(state.products)
      }
    }
  },
  extraReducers: (builer) => {

  }
})

export const { addToBasket } = basketSlice.actions

export default basketSlice.reducer