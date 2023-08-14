<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-3" v-for="item in items" :key="item.id">
        <div class="card">
          <img :src="item.image" alt="Product Image">
          <div class="card-content">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-price">${{ item.price | formatCurrency }}</p>
            <p>
              <input v-model.number="item.qty" type="number" class="form-control" placeholder="Qty" min="1"/>
            </p>
            <a href="#" @click.prevent="handleAddToCart(item)" class="card-btn">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', 'addToCart'],
  methods: {
    handleAddToCart(item) {
      this.addToCart(item);
      alert('Produto adicionado ao carrinho!');
    }
  }
}
</script>
<style>
.col-xs-3 {
  flex: 0 0 25%;
  max-width: 25%;
  padding: 15px;
}

.img-responsive {
  max-width: 100%;
  height: 100px;
  margin: 0 auto;
}

h5, h6 {
  margin: 10px 0;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}

.col-xs-3 {
  flex: 0 0 calc(25% - 30px); /* 25% menos as margens esquerda/direita */
  max-width: calc(25% - 30px); /* 25% menos as margens esquerda/direita */
  padding: 15px;
  box-sizing: border-box;
}

.card {
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  transition: box-shadow 0.3s;
  margin-bottom: 20px;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: 150px;
}

.card-content {
  padding: 15px;
}

.card-title {
  margin: 0;
  font-size: 1.2em;
  margin-bottom: 10px;
}

.card-price {
  color: #007bff;
  font-size: 1.1em;
  margin-bottom: 10px;
}

.card-btn {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 8px 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.card-btn:hover {
  background-color: #0056b3;
}



</style>