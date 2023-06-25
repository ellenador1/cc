<template>
  <div class="container mt-4">
    <h1 class="text-center m-4">Saldos de carteras {{ miCategoria1 }}</h1>
    <tarjeta></tarjeta>
  </div>
</template>

<script>
//import navbar from '../components/navbar.vue'
import Tarjeta from '../components/tarjetas.vue'

export default {
  components: {
    //navbar,
    Tarjeta
  },
  data(){
    return {
      miCategoria1: "wallets"
      // tarjeta: "Ethereum network"
    }
  }
}
</script>



<style scoped></style>

  
  
