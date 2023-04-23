<template>
  <q-page class=""> TICKET </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'TicketsList',
  setup() {
    const state = reactive({
      productList: [],
    });

    return { state };
  },
});
</script>
