import { defineStore } from 'pinia';

export const useShoppingCartStore = defineStore('shoppingCart', {
  state: () => ({
    shoppingCart: [],
  }),
  getters: {
    totalPrice: (state) => {
      const noShoppingCart = 0;
      return state.shoppingCart.reduce((total, currentTicket) => {
        return total + currentTicket.ticket.price * currentTicket.quantity;
      }, noShoppingCart);
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
    removeTicketToCart(ticket: any) {
      const existingTicket = this.shoppingCart.find(
        (obj) => obj.ticket.id === ticket.id
      );
      if (existingTicket) {
        existingTicket.quantity -= 1;
        if (existingTicket.quantity <= 0) {
          this.shoppingCart.splice(
            this.shoppingCart.indexOf(existingTicket),
            1
          );
        }
      }
    },
    refreshShoppingCart() {
      this.shoppingCart = [];
    },
  },
});
