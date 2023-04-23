<template>
  <q-page class="">
    <div>
      <q-card v-for="product in state.productList" :key="product"> </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import TicketService from 'src/services/tickets';
import { defineComponent, onMounted, reactive } from 'vue';

export default defineComponent({
  name: 'TicketsList',
  setup() {
    const state = reactive({
      productList: [],
    });
    onMounted(async () => {
      const response = await TicketService.getTickets();
      state.productList = response.data;
    });
    return { state };
  },
});
</script>
