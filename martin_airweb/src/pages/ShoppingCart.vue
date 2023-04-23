<template>
  <q-page class="">
    <h3 class="text-center">MON PANIER</h3>
    <div style="width: 95%; margin: 0 auto">
      <q-card
        flat
        style="max-width: 600px; margin: 20px auto"
        class="bg-secondary q-pa-xs text-white"
      >
        <q-card-section class="row items-center q-ml-md">
          <q-icon size="25px" name="shopping_cart"></q-icon>

          <h6 v-if="store.shoppingCart.length > 0" class="q-ma-none q-pl-md">
            Votre panier
          </h6>
          <div v-else class="row">
            <h6 class="q-ma-none q-pl-md">Votre panier est vide</h6>
          </div>
        </q-card-section>

        <q-card-section
          v-for="ticket in store.shoppingCart"
          :key="ticket"
          class="row justify-between items-center"
        >
          <div>
            <p>{{ ticket.ticket.label }}</p>
          </div>

          <div class="row justify-between items-center">
            <q-icon
              size="20px"
              name="remove"
              @click="methods.removeTicket(ticket.ticket.id)"
            ></q-icon>
            <p class="q-my-none q-mx-sm">{{ ticket.quantity }}</p>
            <q-icon
              size="20px"
              name="add"
              @click="methods.addTicket(ticket.ticket.id)"
            ></q-icon>
          </div>
          <div>
            <p>{{ ticket.ticket.price / 100 }} €</p>
          </div>
        </q-card-section>
        <q-card-section class="row justify-between items-center">
          <p>TOTAL</p>
          <p>{{ store.totalPrice / 100 }} €</p>
        </q-card-section>
        <q-card-actions align="right" class="q-mr-sm">
          <q-btn @click="methods.payment()"> ACCEDER AU PAIEMENT</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import TicketService from 'src/services/tickets';
import { useShoppingCartStore } from 'src/stores/shopping-cart-store';
import { defineComponent, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'ShoppingCart',
  setup() {
    const store = useShoppingCartStore();
    const router = useRouter();
    const $q = useQuasar();
    const state = reactive({
      amount: 0,
    });
    onMounted(() => {
      console.log(store.shoppingCart);
    });

    const methods = {
      addTicket: async (id: number) => {
        const ticket = await TicketService.getTicket(id);
        store.addTicketToCart(ticket.data);
      },
      removeTicket: async (id: number) => {
        const ticket = await TicketService.getTicket(id);
        store.removeTicketToCart(ticket.data);
      },
      payment: () => {
        const totalPrice = store.totalPrice / 100;
        const hasWallet = $q.cookies.has('wallet_amount');
        if (hasWallet) {
          state.amount = parseInt($q.cookies.get('wallet_amount'));
        }
        if (totalPrice > state.amount) {
          $q.notify({
            type: 'negative',
            message: `Montant sur votre wallet insuffisant`,
          });
          router.push({ name: 'profil' });
        } else {
          $q.notify({
            type: 'positive',
            message: `Commande effectué avec succès !`,
          });
          const newWalletAmount = state.amount - totalPrice;
          $q.cookies.set('wallet_amount', newWalletAmount.toString());
          store.refreshShoppingCart();
          router.push({ name: 'tickets' });
        }
      },
    };

    return { store, methods };
  },
});
</script>
