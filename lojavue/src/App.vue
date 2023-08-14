<template>
  <div id="app" class="container">
    <router-link to="/">Produtos</router-link> | <router-link to="/cart">Carrinho</router-link>
    <router-view :items="items" :cartItems="cartItems" :addToCart="addToCart" :handleItemRemoval="handleItemRemoval"></router-view>
  </div>
</template>

<script>
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  components: {
    ShoppingCart
  },
  data() {
    return {
      cartItems: [],
      items: [
        {id: 1, title: 'Macbook Pro', price: 2500.00, qty: 1, image: 'https://a-static.mlcdn.com.br/280x210/notebook-macbook-air-133-apple-m1-8gb-256gb-ssd-prateado/magazineluiza/227625500/43ed459d5a87a2e62e35e5eb394b0c94.jpg'},
        {id: 2, title: 'Asus ROG Gaming', price: 1000.00, qty: 1, image: 'https://a-static.mlcdn.com.br/280x210/placa-mae-asus-rog-strix-b550-e-gaming-amd-am4-atx-ddr4/kabum/113864/f49dc2e476249d919350478bb9576120.jpeg'},
        {id: 3, title: 'Amazon Kindle', price: 150.00, qty: 1, image: 'https://a-static.mlcdn.com.br/280x210/kindle-paperwhite-amazon-68-16gb-300-ppi-wi-fi-luz-embutida-preto/magazineluiza/236575700/b2675afd69e986d2bcad022057fb4df2.jpg'},
        {id: 4, title: 'Another Product', price: 10, qty: 1, image: 'https://a-static.mlcdn.com.br/280x210/tablet-amazon-fire-hd-geracao-2023-infantil-inportado/vemkitemprodutosonline/0ee91dd61a0011eeace74201ac185049/2db6ebd5694279e765166083ca906e72.jpeg'}
      ]
    }
  },
  computed: {
    totalItems() {
      return this.cartItems.reduce((accumulator, item) => {
        return accumulator + item.qty;
      }, 0);
    }
  },
  methods: {
    addToCart(itemToAdd) {
      let found = false;

      // Verifique se o item já está no carrinho
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id === itemToAdd.id) {
          this.cartItems[i].qty += 1;
          found = true;
          break;
        }
      }

      // Se o item não estiver no carrinho, adicione-o
      if (!found) {
        this.cartItems.push({
          ...itemToAdd,
          qty: 1
        });
      }

      // Redefina a quantidade do item original para 1
      itemToAdd.qty = 1;
    },
    handleItemRemoval(index) {
      this.cartItems.splice(index, 1);
    }
  }
}
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-default {
  background-color: #ccc;
  color: #333;
}

.btn-default:hover {
  background-color: #aaa;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  padding: 10px;
  border: 1px solid #ddd;
}

.table th {
  background-color: #f2f2f2;
}

.table-cart {
  margin-top: 20px;
}

.input-qty {
  width: 60px;
}

.glyphicon-trash {
  color: red;
  cursor: pointer;
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  margin: 10% auto;
  padding: 20px;
  width: 80%;
  max-width: 600px;
  border-radius: 5px;
}

.modal-header, .modal-footer {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.modal-header {
  border-bottom: none;
}

.modal-title {
  font-size: 20px;
}

.close {
  float: right;
  cursor: pointer;
}



</style>
