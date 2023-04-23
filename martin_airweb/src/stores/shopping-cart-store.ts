import { defineStore } from 'pinia';

export const useShoppingCartStore = defineStore('shoppingCart', {
  state: () => ({
    shoppingCart: [],
  }),
  getters: {
    totalPrice: (state) => {
      const totalprice = 12344;
      return totalprice;
    },
  },
  actions: {
    addTicketToCart(ticket: any) {
      console.log('ticket', ticket);
    },
  },
});
