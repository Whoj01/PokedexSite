import { create } from 'zustand'

type PokemonsProps = {
  url: string,
  name: string,
}

type ActionsProps = {
  addNewPokemons: (pokemons: PokemonsProps[]) => void
  addPokemonsOfType: (pokemons: PokemonsProps[]) => void
  changeCountPokemons: (newCounter: number) => void
  changeNextUrl: (url: string) => void
}

type storeProps = {
  state: {
    pokemons: PokemonsProps[]
    countPokemons: number,
    url: string
  }
  actions: ActionsProps
}

export const usePokemonsStore = create<storeProps>((set) => ({
  state: {
    pokemons: [],
    countPokemons: 0,
    url: "",
  },
  actions: {
    addPokemonsOfType: (newPokemons) => set((state) => ({
      state: { 
        countPokemons: state.state.countPokemons,
        pokemons: [...newPokemons],
        url: state.state.url
      }
    })),
    addNewPokemons: (newPokemons) => set((state) => ({
      state: { 
        countPokemons: state.state.countPokemons,
        pokemons: [...state.state.pokemons, ...newPokemons],
        url: state.state.url
      }
    })),
    changeCountPokemons: (newCount) => set((state) => ({
      state: {
        pokemons: state.state.pokemons,
        countPokemons: newCount,
        url: state.state.url
      }
    })),
    changeNextUrl: (url) => set((state) => ({
      state: {
        pokemons: state.state.pokemons,
        countPokemons: state.state.countPokemons,
        url
      }
    }))
  }
}))