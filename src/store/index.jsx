import { createStore } from 'redux'

export const stockListAction = () => ({ type: 'STOCK_LIST',});
export const changeStockListAction = () => ({ type: 'CHANGE_LIST_VALUE',});
export const newValueAction = () => ({ type: 'NEW_VALUE',});

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