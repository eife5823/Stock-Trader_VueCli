<template>
  <div class="col-sm-6 col-md-4 mb-3">
    <div class="card">
      <div class="card-header">
        <h3>
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="float-left" style="width: 45%">
          <input type="number" 
                class="form-control" 
                placeholder="Quantity" 
                v-model.number="quantity"
                :class="{danger: insufficientFunds}"
          >
        </div>
        <div class="float-right">
          <button class="btn btn-success" @click="buyStock" 
          :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)">
          {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['stock'],
    data () {
      return {
        quantity: 0
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      insufficientFunds () { // check 是否要購買的股票價格大於資本，回傳 true or false
        return this.quantity * this.stock.price > this.funds;
      }
    },
    methods: {
      buyStock () {
        const order = {
          stockId : this.stock.id,
          stockPrice : this.stock.price,
          quantity : this.quantity
        };
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;

      }
    }
  }
</script>
<style scoped>
  .card-header {
    background-color:  #d4efdf ;
  }
  .danger {
    border: 2px solid red;
  }
</style>