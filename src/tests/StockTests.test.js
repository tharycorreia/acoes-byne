import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Stock from '../components/Stock'

afterEach(cleanup)

const startingState = { newValue: {} }

function reducer(state = startingState, action) {
  switch (action.type) {
    case 'NEW_VALUE':
      return {
        ...state, newValue: action.newValue
      }
    default:
      return state
  }
}

function renderWithRedux(component, { initialState, store = createStore(reducer, initialState) } = {}) {
  return { ...render(<Provider store={store}>{component}</Provider>) }
}

it('Should render stock component', () => {
  renderWithRedux(<Stock />)
})
