import {
  SET_PRODUCTS,
  CALC_POSTAL_PRICE,
  CALC_SUBTOTAL_PRICE,
  CALC_TOTAL_PRICE
} from 'redux-local/actions'

import { CardProps } from 'components/ProductMainCard'

type PayloadProps = {
  products: CardProps[]
  postalPrice: number
  totalPrice: number
}

export type ActionProps = {
  type: string
  payload: PayloadProps
}

export const setProducts = (products: CardProps[]) => ({
  payload: products,
  type: SET_PRODUCTS
})

export const setPostalPrice = (postalPrice: number) => ({
  payload: postalPrice,
  type: CALC_POSTAL_PRICE
})

export const setSubtotalPrice = (subtotalPrice: number) => ({
  payload: subtotalPrice,
  type: CALC_SUBTOTAL_PRICE
})

export const setTotalPrice = (totalPrice: number) => ({
  payload: totalPrice,
  type: CALC_TOTAL_PRICE
})
