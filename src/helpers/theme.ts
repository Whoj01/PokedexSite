export interface ThemeType {
  Pokemons: {
    [key: string]: {
      backgroundColor: string,
      text: string,
      Icon: string,
      BackgroundImage: string,
      type: string,
    }
  }
}


export const Theme: ThemeType = {
  Pokemons: {
    normal: {
      backgroundColor: '#E8E8E8',
      text: '#909090',
      Icon: './normalIcon.svg',
      BackgroundImage: './bg-normal.svg',
      type: "1"
    },
    fire: {
      backgroundColor: '#FFEBCA',
      text: '#E96303',
      Icon: './fireIcon.svg',
      BackgroundImage: './bg-fire.svg',
      type: "10"
    },
    water: {
      backgroundColor: '#DFECF5',
      text: '#4F77BE',
      Icon: './waterIcon.svg',
      BackgroundImage: './bg-water.svg',
      type: "11"
    },
    grass: {
      backgroundColor: '#D6EBDC',
      text: '#73B861',
      Icon: './grassIcon.svg',
      BackgroundImage: './bg-grass.svg',
      type: "12"
    },
    flying: {
      backgroundColor: '#ECF0F9',
      text: '#758CBD',
      Icon: './flyingIcon.svg',
      BackgroundImage: './bg-flying.svg',
      type: "3"
    },
    fighting: {
      backgroundColor: '#F3DBDF',
      text: '#C44D61',
      Icon: './fightingIcon.svg',
      BackgroundImage: './bg-fighting.svg',
      type: "2"
    }, 
    poison: {
      backgroundColor: '#EEE1F4',
      text: '#AC6ACA',
      Icon: './poisonIcon.svg',
      BackgroundImage: './bg-poison.svg',
      type: "4"
    },
    electric: {
      backgroundColor: '#F5F2DF',
      text: '#D4BC34',
      Icon: './electricIcon.svg',
      BackgroundImage: './bg-electric.svg',
      type: "13"
    },
    ground: {
      backgroundColor: '#F5E4DB',
      text: '#CE8056',
      Icon: './groundIcon.svg',
      BackgroundImage: './bg-ground.svg',
      type: "5"
    },
    rock: {
      backgroundColor: '#E7F5F2',
      text: '#84BEB3',
      Icon: './rockIcon.svg',
      BackgroundImage: './bg-rock.svg',
      type: "6"
    },
    psychic: {
      backgroundColor: '#FBE8E7',
      text: '#EB8B85',
      Icon: './psychicIcon.svg',
      BackgroundImage: './bg-psychic.svg',
      type: "14"
    },
    ice: {
      backgroundColor: '#E5F3F0',
      text: '#71BAAC',
      Icon: './iceIcon.svg',
      BackgroundImage: './bg-ice.svg',
      type: "15"
    },
    bug: {
      backgroundColor: '#E6ECD7',
      text: '#9BBA48',
      Icon: './bugIcon.svg',
      BackgroundImage: './bg-bug.svg',
      type: "7"
    },
    ghost: {
      backgroundColor: '#DFE2F1',
      text: '#616EB7',
      Icon: './ghostIcon.svg',
      BackgroundImage: './bg-ghost.svg',
      type: "8"
    },
    steel: {
      backgroundColor: '#DFE2F1',
      text: '#6594A1',
      Icon: './steelIcon.svg',
      BackgroundImage: './bg-steel.svg',
      type: "9"
    },
    dragon: {
      backgroundColor: '#DAE1EB',
      text: '#2C6AC1',
      Icon: './dragonIcon.svg',
      BackgroundImage: './bg-dragon.svg',
      type: "16"
    },
    dark: {
      backgroundColor: '#D8D8D9',
      text: '#595761',
      Icon: './darkIcon.svg',
      BackgroundImage: './bg-dark.svg',
      type: "17"
    },
    fairy: {
      backgroundColor: '#F8E8F8',
      text: '#E296E1',
      Icon: './fairyIcon.svg',
      BackgroundImage: './bg-fairy.svg',
      type: "18"
    },
  }
}