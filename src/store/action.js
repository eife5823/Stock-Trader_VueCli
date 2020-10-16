import Vue from 'vue';

export const loadData = ({commit}) => {
  // http 不用 $ 字號，因為是直接在 Vue 實體操作
  Vue.http.get('data.json')
   .then(response => response.json())
   .then(data => {
     if (data) {
       const stocks = data.stocks; 
       const funds = data.funds;
       const stockPortfolio = data.stockPortfolio;

       const portfolio = {
        stockPortfolio,
        funds
       };

       commit('SET_STOCKS', stocks);
       commit('SET_PORTFOLIO', portfolio);
     }
   });
};