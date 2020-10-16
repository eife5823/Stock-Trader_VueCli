<template>
  <div>
    <app-stock v-for="stock in stocks" :stock='stock'></app-stock>
  </div> 
</template>

<script>
  import { mapGetters } from 'vuex';
  import Stock from './Stock'

  export default {
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolios'
      })
    },
    components: {
      appStock: Stock
    }
  }
</script>