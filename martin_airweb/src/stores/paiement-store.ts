import { defineStore } from 'pinia';

export const usePaiementStore = defineStore('paiement', {
  state: () => ({
    wallet: 0,
  }),
  getters: {},
  actions: {
    addMoneyToWallet(money: any) {
      this.wallet += money;
    },
    removeMoneyToWallet(money: any) {
        this.wallet -= money;
      },
  },
});
