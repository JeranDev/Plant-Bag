//Styling
import styled from 'styled-components'
import { motion } from 'framer-motion'
//Redux
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const PlantDetail = ({ pathId }) => {
  const history = useHistory()
  //Exit Detail
  const exitDetailHandler = e => {
    const element = e.target
    if (element.classList.contains('shadow')) {
      history.push('/')
    }
  }

  //Data
  const { plant, isLoading } = useSelector(state => state.detail)
  return (
    <>
      {!isLoading && (
        <CardShadow className='shadow' onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <h1>{plant.data.common_name}</h1>
            <h2>{plant.data.scientific_name}</h2>
            <Info>
              <p>Family: {plant.data.family.name}</p>
              <p>Locations: {plant.data.observations}</p>
              <p>Discovered: {plant.data.year}</p>
            </Info>
            <img src={plant.data.image_url} alt={plant.data.common_name} />
            {plant.data.main_species.images.leaf && (
              <div>
                <h3>Leaf</h3>
                <img
                  src={plant.data.main_species.images.leaf[0].image_url}
                  alt={plant.data.common_name}
                />
              </div>
            )}
            {plant.data.main_species.images.bark && (
              <div>
                <h3>Bark</h3>
                <img
                  src={plant.data.main_species.images.bark[0].image_url}
                  alt={plant.data.common_name}
                />
              </div>
            )}
            {plant.data.main_species.images.flower && (
              <div>
                <h3>Flower</h3>
                <img
                  src={plant.data.main_species.images.flower[0].image_url}
                  alt={plant.data.common_name}
                />
              </div>
            )}
            {plant.data.main_species.images.habit && (
              <div>
                <h3>Habit</h3>
                <img
                  src={plant.data.main_species.images.habit[0].image_url}
                  alt={plant.data.common_name}
                />
              </div>
            )}
            {plant.data.main_species.images.fruit && (
              <div>
                <h3>Fruit</h3>
                <img
                  src={plant.data.main_species.images.fruit[0].image_url}
                  alt={plant.data.common_name}
                />
              </div>
            )}
          </Detail>
        </CardShadow>
      )}
    </>
  )
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  z-index: 10;
  color: black;
  img {
    max-width: 600px;
    max-height: 600px;
    object-fit: cover;
  }
  h1 {
    font-size: 4rem;
    color: green;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: darkgreen;
  }
  h3 {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    img {
      max-width: 100%;
      max-height: 400px;
    }
  }
`

const Info = styled(motion.div)`
  margin-bottom: 2rem;
  font-size: 1rem;
`

export default PlantDetail
