<template>
  <q-card-section class="items-center" horizontal>
    <q-img
      width="50px"
      height="50px"
      class="col-5"
      :src="props.ticket.thumbnail_url"
    />
  </q-card-section>
  <q-card-section
    style="width: 70%"
    horizontal
    class="column justify-center items-center"
  >
    <h6 class="q-ma-none q-mb-md text-center" style="font-size: 18px">
      {{ props.ticket.label }}
    </h6>
    <p class="q-ma-none text-center" style="font-size: 12px">
      {{ props.ticket.description }}
    </p>
  </q-card-section>
  <q-card-section horizontal class="column justify-between items-center">
    <p>{{ props.ticket.price / 100 }} €</p>
    <q-icon name="shopping_cart" />
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'TicketComponent',
  props: {
    ticket: {
      required: true,
    },
  },

  components: {},
  setup(props) {
    const state = reactive({});
    const methods = {};
    return { state, props, methods };
  },
});
</script>
