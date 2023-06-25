<template>
    <div class="container mt-4" style="min-height: 100vh !important;">
      <h1 class="text-center m-4">Links y herramientas crypto ########</h1>
      <tools></tools>
    </div>
  </template>
  
  <script>
  import Tools from '../components/tarjetasTools.vue'
  
  export default {
    components: {
      Tools
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