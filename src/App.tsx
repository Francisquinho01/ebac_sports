import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { RootState, AppDispatch } from './store/store'
import { adicionarAoCarrinho } from './store/redux/AddCarrinho'
import { toggleFavorito } from './store/redux/Fav'
import { setProdutos } from './store/redux/Produtos'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const produtos = useSelector((state: RootState) => state.produtos.items)
  const carrinho = useSelector((state: RootState) => state.carrinho.items)
  const favoritos = useSelector((state: RootState) => state.favoritos.items)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => {
        dispatch(setProdutos(res))
      })
  }, [dispatch])

  function handleAdicionarAoCarrinho(produto: Produto) {
    dispatch(adicionarAoCarrinho(produto))
  }

  function handleFavoritar(produto: Produto) {
    dispatch(toggleFavorito(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={handleFavoritar}
          adicionarAoCarrinho={handleAdicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
