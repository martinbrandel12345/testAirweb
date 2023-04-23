<template>
  <q-page class="text-center">
    <h3>MON PROFIL</h3>
    <div class="q-pa-md" style="width: 95%; margin: 0 auto">
      <q-list bordered separator>
        <q-item>
          <q-item-section>Grenoble</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label>Brandel</q-item-label>
            <q-item-label>Martin</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label>Dev</q-item-label>
            <q-item-label>QuasarJs | NestJs</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div>
      <p>Ajouter de l'argent sur votre compte</p>
      <q-form @submit="methods.onSubmit" class="q-gutter-md">
        <q-input
          filled
          type="text"
          v-model="state.userPayment.cardNumber"
          label="Numero de carte"
          lazy-rules
        />

        <q-input
          filled
          type="number"
          v-model="state.userPayment.amount"
          label="Entrez un montant"
          lazy-rules
        />
        <q-btn label="Submit" type="submit" color="primary" />
      </q-form>
    </div>
  </q-page>
</template>

<script lang="ts">
import { usePaiementStore } from 'src/stores/paiement-store';
import { useQuasar } from 'quasar';
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'ProfilPage',
  setup() {
    const $q = useQuasar();
    const state = reactive({
      userPayment: {
        cardNumber: '',
        amount: 0,
      },
    });
    const methods = {
      onSubmit: async () => {
        const amountDeposit = state.userPayment.amount;
        const hasWallet = $q.cookies.has('wallet_amount');
        if (!hasWallet) {
          $q.cookies.set('wallet_amount', amountDeposit.toString());
        } else {
          const walletAmount = parseInt($q.cookies.get('wallet_amount'));
          const newWalletAmount = walletAmount + parseInt(amountDeposit);
          $q.cookies.set('wallet_amount', newWalletAmount.toString());
        }
      },
    };

    return { state, methods };
  },
});
</script>
