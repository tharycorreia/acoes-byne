import { createStore } from 'redux'

export const changeStockListAction = () => ({ type: 'CHANGE_LIST_VALUE' });
export const newValueAction = () => ({ type: 'NEW_VALUE' });

const INITIAL_STATE = {
  listValue: [],
  newValue: {},
  newTime: 0
}

function StocksStore(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_LIST_VALUE':
      return {
        ...state,
        listValue: action.listValue
      }
    case 'NEW_VALUE':
      return {
        ...state,
        newValue: action.newValue,
        newTime: action.newTime
      }
    default:
      return state
  }
}
const store = createStore(StocksStore)

export default store