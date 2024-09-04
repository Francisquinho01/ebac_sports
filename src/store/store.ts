import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './redux/AddCarrinho'
import favoritosReducer from './redux/Fav'
import produtosReducer from './redux/Produtos'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    produtos: produtosReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
