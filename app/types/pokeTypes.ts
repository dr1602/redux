export interface PokemonDataType {
  name: string;
  url?: string;
  type?: string;
}

export interface PokeType {
  type: {
    name: string;
  };
}

export interface PokeDetail {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: PokeType[];
}

export interface PokemonResponseType {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokeDetail[];
}
