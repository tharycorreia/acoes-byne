import * as React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Ws from '../components/Websocket'

Enzyme.configure({ adapter: new Adapter() });
afterEach(cleanup)

const startingState = { stockList: [] }

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState')
useStateSpy.mockImplementation((stockList) => [stockList, setState]);

function reducer(state = startingState, action) {
  switch (action.type) {
    case 'STOCK_LIST':
      return {
        ...state, stockList: action.list
      }
    default:
      return state
  }
}

function renderWithRedux(component, { initialState, store = createStore(reducer, initialState) } = {}) {
  return { ...render(<Provider store={store}>{component}</Provider>) }
}

it('Should render websocket', () => {
  renderWithRedux(<Ws />)
})
