//Redux
import { useDispatch, useSelector } from 'react-redux'
import { searchPlants, loadPlants, addQuery } from '../actions/plantsAction'
//Styling
import styled from 'styled-components'
//Images
import loadingGif from '../images/loading.gif'

const Nav = () => {
  //State
  const dispatch = useDispatch()
  const { isLoading, query, pageNumber, searchedPlants } = useSelector(
    state => state.plants
  )

  const handleInput = e => {
    dispatch(addQuery(e.target.value))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const resetPlants = []
    const resetPage = 1
    dispatch(searchPlants(resetPlants, resetPage, query))
  }

  const clearSearched = () => {
    const resetPlants = []
    const resetPage = 1
    dispatch(loadPlants(resetPlants, resetPage))
  }

  return (
    <Header>
      <Logo>
        <h1 onClick={clearSearched}>Plant DB</h1>
      </Logo>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInput} value={query} required />
        <button type='submit'>Search</button>
      </form>
      {isLoading && <LoadingGifStyled src={loadingGif} />}
    </Header>
  )
}

const Header = styled.div`
  text-align: center;
  input {
    width: 20vw;
    text-align: center;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
    padding: 1rem 0;
  }
  button {
    color: white;
    background: green;
    padding: 1rem;
    border: none;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 1000px) {
    input {
      width: 50vw;
    }
  }
`

const Logo = styled.div`
  margin-top: 3rem;
  margin-bottom: 0.5rem;
  h1 {
    font-size: 3rem;
    font-family: 'Yellowtail', cursive;
    cursor: pointer;
    display: inline;
  }
`

const LoadingGifStyled = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 1rem;
`

export default Nav
