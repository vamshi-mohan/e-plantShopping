import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Each item will include: name, image, description, cost, quantity
  },
  reducers: {
    // Add item to cart or increase quantity if it already exists
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find(item => item.name === plant.name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
    },

    // Remove item completely from cart
    removeItem: (state, action) => {
      const plantName = action.payload;
      state.items = state.items.filter(item => item.name !== plantName);
    },

    // Update quantity of a specific item
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const item = state.items.find(item => item.name === name);

      if (item) {
        item.quantity = amount;

        // Optional safety: remove item if quantity becomes 0
        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.name !== name);
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
