<template>
  <navbar></navbar>
</template>

<script>
import navbar from './components/navbar.vue'
import Tarjeta from './components/tarjetas.vue'

export default {
  components: {
    navbar,
    Tarjeta
  },
  data(){
    return {
      // tarjeta: "Ethereum network"
    }
  }
}
</script>

<script setup>
const miCategoria1 = "wallets"
</script>



