import { useMemo } from 'react';
import { useQuery } from '@apollo/client/react';
import gql from 'graphql-tag';
import { Pokemon } from './useGetPokemons';

export const GET_POKEMON_DETAILS = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

export const useGetPokemonDetails = (id?: string, name?: string) => {
  const shouldSkip = !id && !name;

  const { data, ...queryRes } = useQuery<{ pokemon: Pokemon }>(
    GET_POKEMON_DETAILS,
    {
      variables: { id, name },
      skip: shouldSkip,
    }
  );

  const pokemon: Pokemon | undefined = useMemo(() => data?.pokemon, [data]);

  return {
    pokemon,
    ...queryRes,
  };
};
