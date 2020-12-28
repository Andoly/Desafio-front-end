/* eslint-disable @typescript-eslint/no-explicit-any */
import { HYDRATE } from 'next-redux-wrapper'
import { CardProps } from 'components/ProductMainCard'
import {
  SET_PRODUCTS,
  CALC_POSTAL_PRICE,
  CALC_TOTAL_PRICE,
  CALC_SUBTOTAL_PRICE
} from 'redux-local/actions'

export type InitialStateProps = {
  products: CardProps[]
  postalPrice: number
  subtotalPrice: number
  totalPrice: number
}

const initialState: InitialStateProps = {
  products: [],
  postalPrice: 0,
  subtotalPrice: 0,
  totalPrice: 0
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.products
    case SET_PRODUCTS:
      if (action.payload.products) {
        state.products = [...action.payload.products]
      } else {
        state.products = []
      }
      return state
    case CALC_POSTAL_PRICE:
      state.postalPrice = action.payload.postalPrice
      return state
    case CALC_SUBTOTAL_PRICE:
      state.subtotalPrice = action.payload.subtotalPrice
      return state
    case CALC_TOTAL_PRICE:
      state.totalPrice = action.payload.totalPrice
      return state
    default:
      return state
  }
}

export default reducer
