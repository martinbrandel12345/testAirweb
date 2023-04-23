<template>
  <q-page class=""> SHOPPING </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'ShoppingCart',
  setup() {
    const state = reactive({
      productList: [],
    });

    return { state };
  },
});
</script>
