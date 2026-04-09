export interface PokemonDataType {
  name: string;
  url?: string;
  type?: string;
}

export interface PokemonResponseType {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonDataType[];
}
