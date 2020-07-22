import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Stocks from '../components/Stocks'

afterEach(cleanup)

const startingState = { listValue: [] }

function reducer(state = startingState, action) {
  switch (action.type) {
    case 'CHANGE_LIST_VALUE':
      return {
        ...state, newValue: action.listValue
      }
    default:
      return state
  }
}

function renderWithRedux(component, { initialState, store = createStore(reducer, initialState) } = {}) {
  return { ...render(<Provider store={store}>{component}</Provider>) }
}

it('Should render stocks component', () => {
  renderWithRedux(<Stocks />)
})
