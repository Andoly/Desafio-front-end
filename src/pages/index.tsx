import GameList from 'components/GameList'
import ShoppingCart from 'components/ShoppingCart'
import HomeTemplate from 'templates/HomeTemplate'
import mock from 'products/mock'
import MediaMatch from 'components/MediaMatch'
import { useSelector, useDispatch } from 'react-redux'
import { ReducersProps } from 'redux-local'
import { CardProps } from 'components/ProductMainCard'
import { useEffect, useState, useCallback } from 'react'
import GameListMobile from 'components/GameListMobile'

export default function Home() {
  const dispatch = useDispatch()
  const products = useSelector(
    ({ cartReducer }: ReducersProps) => cartReducer.products
  )

  const [currentProducts, setCurrentProducts] = useState<CardProps[]>(mock)

  const sortProducts = useCallback(
    (sortOption: string) => {
      console.log('option: ', sortOption)
      const p: CardProps[] = [...currentProducts]
      let sortedProducts: CardProps[] = []
      switch (sortOption) {
        case 'mais-populares':
          sortedProducts = p.sort((a: CardProps, b: CardProps) => {
            if (a.score && b.score) {
              return b.score - a.score
            } else {
              return 0
            }
          })
          setCurrentProducts(sortedProducts)
          break
        case 'menos-populares':
          sortedProducts = p.sort((a: CardProps, b: CardProps) => {
            if (a.score && b.score) {
              return a.score - b.score
            } else {
              return 0
            }
          })
          setCurrentProducts(sortedProducts)
          break
        case 'maior-preco':
          sortedProducts = p.sort((a: CardProps, b: CardProps) => {
            if (a.price && b.price) {
              return b.price - a.price
            } else {
              return 0
            }
          })
          setCurrentProducts(sortedProducts)
          break
        case 'menor-preco':
          sortedProducts = p.sort((a: CardProps, b: CardProps) => {
            if (a.score && b.score) {
              return a.price - b.price
            } else {
              return 0
            }
          })
          setCurrentProducts(sortedProducts)
          break
        case 'alfabetica':
          sortedProducts = p.sort((a: CardProps, b: CardProps) => {
            if (a.name && b.name) {
              return a.name > b.name ? 1 : -1
            } else {
              return 0
            }
          })
          setCurrentProducts(sortedProducts)
          break
        default:
          sortedProducts = p.sort((a: CardProps, b: CardProps) => {
            if (a.score && b.score) {
              return b.score - a.score
            } else {
              return 0
            }
          })
          setCurrentProducts(sortedProducts)
          break
      }
    },
    [currentProducts]
  )

  const changeSelectOption = useCallback(
    (type: string) => {
      sortProducts(type)
    },
    [sortProducts]
  )

  useEffect(() => {
    const totalPrice = products.reduce((acc: number, product: CardProps) => {
      acc += product.price
      return acc
    }, 0)
    const postalPrice = products.length * 10
    dispatch({
      type: 'CALC_SUBTOTAL_PRICE',
      payload: { subtotalPrice: totalPrice }
    })
    dispatch({
      type: 'CALC_POSTAL_PRICE',
      payload: { postalPrice }
    })
    dispatch({
      type: 'CALC_TOTAL_PRICE',
      payload: {
        totalPrice: totalPrice > 250 ? totalPrice : totalPrice + postalPrice
      }
    })
  }, [products.length, dispatch, products])

  return (
    <HomeTemplate>
      <MediaMatch lessThan="medium">
        <GameListMobile products={products} />
      </MediaMatch>
      <GameList
        changeOrdenation={changeSelectOption}
        products={currentProducts}
      />
      <MediaMatch greaterThan="medium">
        <ShoppingCart products={products} />
      </MediaMatch>
    </HomeTemplate>
  )
}
