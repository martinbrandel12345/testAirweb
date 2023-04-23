<template>
  <q-page class=""> PROFIL </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'ProfilPage',
  setup() {
    const state = reactive({
      productList: [],
    });

    return { state };
  },
});
</script>
