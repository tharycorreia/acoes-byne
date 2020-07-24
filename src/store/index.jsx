import { createStore } from 'redux'

const INITIAL_STATE = {
  stockList: [],
  listValue: [],
  newValue: {}
}

function StocksStore(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'STOCK_LIST':
      return {
        ...state,
        stockList: action.list
      }
    case 'CHANGE_LIST_VALUE':
      return {
        ...state,
        listValue: action.listValue
      }
    case 'NEW_VALUE':
      return {
        ...state,
        newValue: action.newValue
      }
    default:
      return state
  }
}
const store = createStore(StocksStore)

export default store