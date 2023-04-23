<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="row justify-between">
        <div>
          <q-chip>
            <q-avatar color="red" text-color="white">
              {{ store.shoppingCart.length }}</q-avatar
            >
            <q-icon name="shopping_cart" />
          </q-chip>
        </div>
        <div><q-icon size="20px" name="money" /> {{ state.amount }} €</div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer
      style="height: 75px"
      class="bg-white column justify-end custom-footer"
    >
      <q-toolbar class="justify-center q-pa-none">
        <div class="row">
          <q-list
            class="row items-center justify-between sub-title text-grey q-my-md"
          >
            <q-item
              class="column custom-item q-pa-none"
              :to="{ name: 'tickets' }"
              :active="state.link === 'ticket'"
              @click="state.link = 'ticket'"
              clickable
            >
              <q-item-section class="items-center q-pa-none" avatar>
                <q-icon name="local_activity" />
              </q-item-section>
              <q-item-section class="items-center none">Tickets</q-item-section>
            </q-item>

            <q-item
              class="column custom-item q-pa-none"
              :to="{ name: 'shoppingCart' }"
              :active="state.link === 'shopping_cart'"
              @click="state.link = 'shopping_cart'"
              clickable
            >
              <q-item-section class="items-center q-pa-none" avatar>
                <q-icon name="shopping_cart" />
              </q-item-section>
              <q-item-section class="items-center none"
                >Mon panier</q-item-section
              >
            </q-item>

            <q-item
              class="column custom-item q-pa-none"
              :to="{ name: 'profil' }"
              :active="state.link === 'account'"
              @click="state.link = 'account'"
              clickable
            >
              <q-item-section class="items-center q-pa-none" avatar>
                <q-icon name="account_circle" />
              </q-item-section>
              <q-item-section class="items-center none">Profil</q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { useShoppingCartStore } from 'src/stores/shopping-cart-store';
import { defineComponent, onMounted, reactive } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const store = useShoppingCartStore();
    const $q = useQuasar();
    const state = reactive({
      link: 'ticket',
      amount: 0,
    });
    onMounted(() => {
      const hasWallet = $q.cookies.has('wallet_amount');
      if (hasWallet) {
        state.amount = $q.cookies.get('wallet_amount');
      }
    });
    const methods = {};
    return { methods, state, store };
  },
});
</script>

<style>
.custom-item {
  width: 115px;
}
.custom-footer {
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.05);
}
</style>
