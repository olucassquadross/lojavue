<template>
  <div>
    <table class="table table-cart">
      <tr v-for="(item, index) in items" :key="item.id">
        <td><img :src="item.image" alt="Product Image" class="product-image"></td>
        <td>{{item.title}}</td>
        <td style="width:120px">Quantidade:
          <input v-model.number="item.qty" class="form-control input-qty" type="number" min="1">
        </td>
        <td class="text-right">R$: {{item.price | formatCurrency}}</td>
        <td>
          <button @click="removeItem(index)"><span class="glyphicon glyphicon-trash">x</span></button>
        </td>
      </tr>
      <tr v-if="items.length === 0">
        <td colspan="5" class="text-center">Seu carrinho está vazio!</td>
      </tr>
      <tr v-if="items.length > 0">
        <td></td>
        <td></td>
        <td class="text-right">Total Compras</td>
        <td class="text-right">R$: {{Total | formatCurrency}}</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>


<script>
export default {
  props: ['items'],
  computed: {
    Total() {
      let total = 0;
      this.items.forEach(item => {
        total += (item.price * item.qty);
      });
      return total;
    }
  },
  methods: {
    removeItem(index) {
      this.$emit('remove-item', index);
    }
  }
}
</script>

<style>
.product-image {
  width: 150px;
  height: auto;
  margin-right: 10px;
}
</style>