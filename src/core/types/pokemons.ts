export interface IPokemon {
  abilities: IAbility[],
  base_experience: number,
  forms: IPokemonForm[],
  game_indices:IGameIndex[],
  height: number,
  held_items: [],
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: IMove,
  name: string,
  order: number,
  past_types: [ ],
  species: {
    name: string,
    url: string
  },
  sprites: any,
  stats: any,
  types: any,
}
interface IAbility {
  ability: {
    name: string,
    url: string,
  },
  is_hidden: boolean,
  slot: number,
}
interface IPokemonForm {
  name: string,
  url: string,
}
interface IGameIndex {
  game_index: number,
  version: {
    name: string,
    url: string,
  }
}
interface IMove {
  move: {
    name: string,
    url: string,
  },
  version_group_details:  IGroupDetails[]
}
interface IGroupDetails {
  level_learned_at: number,
  move_learn_method: {
    name: string,
    url: string
  },
  version_group: {
    name: string,
    url: string
  }
}