const state = {
  funds: 10000,
  stocks: [] // 投資組合裡面的股票，而不是所有可購買的股票
};

const mutations = {
  'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
    // check 是否投資組合中已經有這檔股票，會 return true or false 
    // 再將新購買的數量加進去，若還沒有這檔股票則 push 進去
    const record = state.stocks.find(element => element.id == stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }
    state.funds -= stockPrice * quantity;
  },
  'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
    // check 是否投資組合中已經有這檔股票，會 return true or false 
    // check 庫存是否有足夠的股票可以賣出，否的話則從陣列中 remove 該檔股票
    const record = state.stocks.find(element => element.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  },
  'SET_PORTFOLIO' (state, portfolio) {
    state.funds = portfolio.funds;
    // 如果有新的投資組合則更新資料，否則則設成空陣列
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
};

const actions = {
  sellStock ({commit}, order) {
    commit('SELL_STOCK', order);
  }
};

const getters = {
  stockPortfolios (state, getters) { // 取得目前投資組合內容
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };  
    });
  },
  funds (state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};