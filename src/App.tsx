import styles from './App.module.css'
import { Search } from 'lucide-react'
import { Container } from './components/Container'
import { Header } from './components/Header/Container'
import { LandingContainer } from './components/LandingSection/LandingContainer'
import { LandingCard } from './components/LandingSection/LandingCard/Container'
import { LandingTitle } from './components/LandingSection/LandingTitle'
import { LandingHelperText } from './components/LandingSection/LandingHelperText'
import { LandingExplore} from './components/LandingSection/LandingExplore/LandingExploreContainer'
import { LandingImageContainer } from './components/LandingSection/LandingImage/LandingImageContainer'

function App() {
 

  return (
    <main>
      <Container>
          <Header/>

          <LandingContainer className={styles.content}>
            <LandingCard/>

            <LandingTitle content="Qual é esse pokemon?"/>

            <LandingHelperText content='O guia perfeito para aqueles que querem caçar pokemons ao redor do mundo'/>

            <LandingExplore/>

            <LandingImageContainer/>
          </LandingContainer>
      </Container>
      
      <div className={styles.findPoke}>
        <h2 className={styles.findPokeText}>
          Selecione o seu pokemon
        </h2>

        <form className={styles.searchPoke}>
          <input className={styles.searchInput} placeholder='Procure pelo nome ou código'/>
          <button className={styles.searchButton}>
            <Search size={24} color='#AAC2E4'/>
          </button>
        </form>
      </div>
    </main>
  )
}

export default App
