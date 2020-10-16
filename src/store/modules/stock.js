import stocks from '../../data/stock';

const state = {
  stocks: []
};

const mutations = {
  'SET_STOCKS'(state, stocks) {
    state.stocks = stocks; // 接收更新後的 stocks 為參數取代原本的 stocks 狀態
  },
  'RND_STOCKS'(state) { // 隨機設定股價的漲跌幅度
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * ( 1 + Math.random() - 0.5));
    });
  }
};

const actions = {
  buyStock: ({commit}, order) => {
    commit('BUY_STOCK', order);
  },
  initStocks: ({commit}) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({commit}) => {
    commit('RND_STOCKS');
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};