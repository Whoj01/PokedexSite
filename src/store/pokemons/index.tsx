import { create } from 'zustand'

type PokemonsProps = {
  url: string,
  name: string,
}

type ActionsProps = {
  addNewPokemons: (pokemons: PokemonsProps[]) => void
  changeCountPokemons: (newCounter: number) => void
}

type storeProps = {
  state: {
    pokemons: PokemonsProps[]
    countPokemons: number
  }
  actions: ActionsProps
}

export const usePokemonsStore = create<storeProps>((set) => ({
  state: {
    pokemons: [],
    countPokemons: 0
  },
  actions: {
    addNewPokemons: (newPokemons) => set((state) => ({
      state: { 
        pokemons: [...state.state.pokemons, ...newPokemons],
        countPokemons: state.state.countPokemons
      }
    })),
    changeCountPokemons: (newCount) => set((state) => ({
      state: {
        countPokemons: newCount,
        pokemons: state.state.pokemons
      }
    }))
  }
}))