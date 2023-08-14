<template>
  <div class="container">
    <shopping-cart :items="cartItems" @remove-item="handleItemRemoval"></shopping-cart>
    <button @click="finalizePurchase" class="btn btn-primary">Finalizar Compra</button>
  </div>
</template>

<script>
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  components: {
    ShoppingCart
  },
  props: ['cartItems'],
  methods: {
    handleItemRemoval(index) {
      this.$emit('remove-item', index);
    },
    async finalizePurchase() {
      try {
        const response = await fetch('http://localhost:5000/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.cartItems)
        });

        if (response.ok) {
          const message = await response.text();
          console.log(message); // Venda concluída!
          // Aqui você pode adicionar lógica adicional, como limpar o carrinho após a compra ser bem-sucedida.
          this.$emit('order-finalized'); // Emita um evento para informar o componente pai que o pedido foi finalizado.
          this.$router.push('/thankyou'); // Redireciona para a tela de agradecimento
        } else {
          console.error('Erro ao finalizar o pedido.');
        }
      } catch (err) {
        console.error('Erro ao se conectar ao servidor.', err);
      }
    }
  }
}
</script>

<style>
/* Estilos para o botão, se necessário */
.btn {
  margin-top: 20px;
}
</style>
