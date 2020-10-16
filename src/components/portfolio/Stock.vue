<template>
  <div class="col-sm-6 col-md-5 mb-3">
    <div class="card">
      <div class="card-header">
        <h3>
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="float-left" style="width: 50%">
          <input type="number" 
                class="form-control" 
                placeholder="Quantity" 
                v-model.number="quantity"
                :class="{danger: insufficientQty}">
        </div>
        <div class="float-right">
          <button class="btn btn-primary" @click="sellStock" 
          :disabled="insufficientQty || quantity <= 0 || !Number.isInteger(quantity)">
          {{ insufficientQty ? 'Not Enough Stocks' : 'Sell' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex';

  export default {
    props: ['stock'],
    data () {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientQty () { // check 是否要賣的股票數量大於庫存量
        return this.quantity > this.stock.quantity
      }
    },
    methods: {
      ...mapActions({ // 可以直接 dispatch，這邊只是練習 mapActions 用法
        placeSellOrder: 'sellStock'
      }),
      sellStock () {
        const order = {
          stockId : this.stock.id,
          stockPrice : this.stock.price,
          quantity : this.quantity
        };
        this.placeSellOrder(order);
        this.quantity = 0;
      }
    }
  }
</script>
<style scoped>
  .card-header {
    background-color: #a1defa     ;
  }
  .danger {
    border: 2px solid red;
  }
</style>