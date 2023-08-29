import styles from './App.module.css'

function App() {
 

  return (
    <main>
      <div className={styles.container}>
        <div>
          <header className={styles.header}>
            <img src="../public/logo.svg" alt="Logo do Pokemon"/>

            <img src="../public/pin-pokedex.png" alt="Um pin de pokedex" className={styles.image}/>
          </header>

          <section className={styles.content}>
            <div className={styles.card}>
              <div className={styles.icon}>
                🎒
              </div>

              <p className={styles.textHelp}>
                pokedex
              </p>
            </div>

            <h2 className={styles.title}>
              Qual é esse pokemon?
            </h2>

            <p className={styles.textHelp}>
              O guia perfeito para aqueles que querem caçar pokemons ao redor do mundo
            </p>
          </section>
        </div>

        <div className={styles.imageContainer}>
          <img src="../public/luzes.svg" alt="Luzes"  className={styles.imageLight}/>

          <img src="../public/img-pokeball.png" alt="Imagem de uma pokebola" />
        </div>
      </div>
      
      <div className={styles.findPoke}>
        <h2>
          Selecione o seu pokemon
        </h2>
      </div>
    </main>
  )
}

export default App
