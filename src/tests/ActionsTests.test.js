import * as actions from '../store'

describe('ACTIONS', () => {
 
  it('Should create an action CHANGE_LIST_VALUE type', () => {
    const expectedAction = {
      type: 'CHANGE_LIST_VALUE'
    }
    expect(actions.changeStockListAction()).toEqual(expectedAction)
  })
  it('Should create an action NEW_VALUE type', () => {
    const expectedAction = {
      type: 'NEW_VALUE'
    }
    expect(actions.newValueAction()).toEqual(expectedAction)
  })
})