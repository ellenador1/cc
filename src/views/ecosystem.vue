<template>
  <div class="container mt-4" style="min-height: 100vh !important;">
    <h1 class="text-center m-4">Ecosistemas de redes y proyectos</h1>
    <eco></eco>
  </div>
</template>

<script>
import Eco from '../components/tarjetasEcosystema.vue'

export default {
  components: {
    Eco
  },
  data(){
    return {
      //miCategoria1: "wallets"
      // tarjeta: "Ethereum network"
    }
  }
}
</script>



<style scoped></style>