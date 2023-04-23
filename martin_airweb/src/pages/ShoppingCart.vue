<template>
  <q-page class="">
    <div style="width: 95%; margin: 0 auto">
      <q-card
        flat
        style="max-width: 600px; margin: 20px auto"
        class="bg-secondary q-pa-xs text-white"
      >
        <q-card-section class="row items-center q-ml-md">
          <q-icon size="25px" name="shopping_cart"></q-icon>
          <h6 class="q-ma-none q-pl-md">Votre panier</h6>
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
            {{ ticket.quantity }}
          </div>
          <div>
            <p>{{ ticket.ticket.price / 100 }} €</p>
          </div>
        </q-card-section>
        <q-card-section class="row justify-between items-center">
          <p>TOTAL</p>
          <p>155 €</p>
        </q-card-section>
        <q-card-actions align="right" class="q-mr-sm">
          <q-btn> ACCEDER AU PAIEMENT</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useShoppingCartStore } from 'src/stores/shopping-cart-store';
import { defineComponent, onMounted, reactive } from 'vue';

export default defineComponent({
  name: 'ShoppingCart',
  setup() {
    const store = useShoppingCartStore();
    onMounted(() => {
      console.log(store.shoppingCart);
    });

    return { store };
  },
});
</script>
