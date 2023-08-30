import styles from './App.module.css'
import { Search, ArrowLeft } from 'lucide-react'

function App() {
 

  return (
    <main>
      <div className={styles.container}>
          <header className={styles.header}>
            <img src="../public/logo.svg" alt="Logo do Pokemon"/>

            <img src="../public/pin-pokedex.png" alt="Um pin de pokedex" className={styles.image}/>
          </header>

          <section className={styles.content}>
            <div className={styles.card}>
              <div className={styles.icon}>
                🎒
              </div>

              <p className={styles.textIcon}>
                pokedex
              </p>
            </div>

            <h2 className={styles.title}>
              Qual é esse pokemon?
            </h2>

            <p className={styles.textHelp}>
              O guia perfeito para aqueles que querem caçar pokemons ao redor do mundo
            </p>

            <div className={styles.explore}>
              <div className={styles.iconExplore}>
                    <ArrowLeft size={16} color='#fff'/>
              </div>
              <p>
                Explore
              </p>
            </div>

            <div className={styles.imageContainer}>
              <img src="../public/luzes.svg" alt="Luzes"  className={styles.imageLight}/>

              <img src="../public/img-pokeball.png" alt="Imagem de uma pokebola" />
            </div>
          </section>
      </div>
      
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
