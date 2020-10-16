<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link to="/portfolio" class="nav-item" active-class="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
        <router-link to="/stocks" class="nav-item" active-class="active" tag="li"><a class="nav-link">Stocks</a></router-link>
      </ul>
      <ul class="navbar-nav navbar-right">
        <li><a href="#" class="nav-link" @click="endDay">End Day</a></li>
        <li class="nav-item dropdown" :class="{show: dropDownOpen}">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
          </div>   
        </li>
        <strong class="navbar-text">Funds: {{ funds | currency }}</strong>
      </ul>
    </div>
  </nav>
</template>
<script>
  import { mapActions } from 'vuex';
  export default {
    data () {
      return {
        dropDownOpen: false
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks:'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay () {
        this.randomizeStocks();
      },
      saveData () {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolios,
          stocks: this.$store.getters.stocks
        };
        this.$http.put('data.json', data); // 檔案名稱可自訂，但一定要是 json 檔案
      },
      loadData () {
        // 這邊由於會改變元件狀態，所以放到 store 的 action 來處理
        this.fetchData();
      }
    }
  }
</script>
<style scoped>
  .navbar {
    margin: 20px 0;
  }
</style>