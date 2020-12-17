import { SET } from '../Actions/ActionType'

const initialState = [{}]

function reducer_name(state = initialState, action) {
  switch (action.type) {
    case SET:
      return state

    default:
      return state
  }
}

export default reducer_name
