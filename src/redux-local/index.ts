import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { combineReducers } from 'redux'
import { InitialStateProps as CartInitialStateProps } from 'redux-local/reducers/cart'
import cartReducer from 'redux-local/reducers/cart'

export type ReducersProps = {
  cartReducer: CartInitialStateProps
}

const reducer = combineReducers({
  cartReducer
})

const buildStore = () => {
  const c = createStore
  const store = c(reducer, composeWithDevTools())

  return store
}

export const storeWrapper = createWrapper(buildStore, { debug: false })
