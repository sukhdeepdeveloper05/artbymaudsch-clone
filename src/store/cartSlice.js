import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { isCartModalOpen: false, cartItems: [] },
  reducers: {
    setIsCartOpen(state, action) {
      state.isCartModalOpen = action.payload;
    },
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
    addItemToCart(state, action) {
      const existingItemIndex = state.cartItems.findIndex((item) => {
        if (item.product.id === action.payload.product.id) {
          return item.variant.id === action.payload.variant.id;
        }
      });

      if (existingItemIndex === -1) {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        state.cartItems.push(newItem);
      } else if (state.cartItems[existingItemIndex].quantity < 50) {
        const existingItem = { ...state.cartItems[existingItemIndex] };

        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };

        state.cartItems[existingItemIndex] = updatedItem;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItemFromCart(state, action) {
      const existingItemIndex = state.cartItems.findIndex((item) => {
        if (item.product.id === action.payload.product.id) {
          return item.variant.id === action.payload.variant.id;
        }
      });

      state.cartItems.splice(existingItemIndex, 1);

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    setItemQuantity(state, action) {
      const existingItemIndex = state.cartItems.findIndex((item) => {
        if (item.product.id === action.payload.product.id) {
          return item.variant.id === action.payload.variant.id;
        }
      });
      const existingItem = { ...state.cartItems[existingItemIndex] };

      const updatedItem = {
        ...existingItem,
        quantity: +action.payload.quantity,
      };

      state.cartItems[existingItemIndex] = updatedItem;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  setIsCartOpen,
  setCartItems,
  addItemToCart,
  removeItemFromCart,
  setItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
