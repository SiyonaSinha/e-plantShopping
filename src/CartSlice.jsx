import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cartItems: [],
  totalItems: 0
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action)=> {   
        const { name, image, cost } = action.payload;
       
        const existingItem = state.cartItems.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity++;
         
        } else {
          state.cartItems.push({ name, image, cost, quantity: 1 });
        }
        state.totalItems++;
      },
      
    removeItem: (state, action)=> {
       
         const { name } = action.payload;
        state.cartItems = state.cartItems.filter(item => item.name !== name);
        state.totalItems--;  
    },
    clearCart(state) {
      state.cartItems = [];
    },
    updateQuantityInc: (state, action)=> {
     
        const { name, quantity } = action.payload;
        alert(name+ quantity);
        const itemToUpdate = state.cartItems.find(item => item.name === name);
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity+1;
        }  
        state.totalItems++; 
    },
    updateQuantityDec: (state, action)=> {
     
      const { name, quantity } = action.payload;
     
      const itemToUpdate = state.cartItems.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity- 1;
      }  
      state.totalItems--; 
  },
  },
});
export const selectTotalItems = state => state.cart.totalItems;
export const { addItem, removeItem, updateQuantityInc, updateQuantityDec  } = CartSlice.actions;

export default CartSlice.reducer;
