<template>
    <div class="thank-you-container">
      <h2>Obrigado pela sua compra!</h2>
      <p>Seu pedido foi realizado com sucesso e em breve será processado.</p>
      <router-link to="/">Voltar para a página inicial</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ThankYou'
  }
  </script>
  
  <style scoped>
  .thank-you-container {
    text-align: center;
    padding: 50px;
  }
  </style>
  