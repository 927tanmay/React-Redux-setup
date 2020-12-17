import axios from 'axios'
import { SET } from './ActionType'

export const get = () => {
  return (dispatch) => {
    axios.get().then(
      (response) => {
        if (response.data) {
          dispatch(set(response.data))
        }
      },
      (error) => {
        console.log('error', error)
        alert('Data not found!')
      },
    )
  }
}

export const set = (data) => {
  return {
    type: SET,
    data: data,
  }
}
