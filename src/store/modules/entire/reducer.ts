import type { Action } from 'redux'

const initialState = {}

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    default: {
      return state
    }
  }
}

export default reducer
