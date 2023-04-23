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
      const existingTicket = this.shoppingCart.find(
        (obj) => obj.ticket.id === ticket.id
      );
      if (existingTicket) {
        existingTicket.quantity += 1;
      } else {
        const newTicket = { ticket: ticket, quantity: 1 };
        this.shoppingCart.push(newTicket);
      }
    },
  },
});
