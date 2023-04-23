<template>
  <q-page class="">
    <div style="width: 95%; margin: 0 auto">
      <q-card
        class="row justify-between"
        style="max-width: 500px; height: 150px; margin: 10px auto"
        v-for="ticket in state.ticketList"
        :key="ticket"
      >
        <ticket-component
          v-if="ticket.thumbnail_url !== null"
          :ticket="ticket"
        ></ticket-component>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import TicketService from 'src/services/tickets';
import TicketComponent from 'src/components/TicketComponent.vue';
import { defineComponent, onMounted, reactive } from 'vue';

export default defineComponent({
  name: 'TicketsList',
  components: { TicketComponent },
  setup() {
    const state = reactive({
      ticketList: [],
    });
    onMounted(async () => {
      const response = await TicketService.getTickets();
      state.ticketList = response.data;
    });

    return { state };
  },
});
</script>
