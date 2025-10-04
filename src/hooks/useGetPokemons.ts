import { useMemo } from 'react';
import { useQuery } from '@apollo/client/react';
import gql from 'graphql-tag';
import { Pokemon } from 'types/Pokemon';

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      number
      types
      image
    }
  }
`;

export const useGetPokemons = () => {
  interface GetPokemonsData {
    pokemons: Pokemon[];
  }

  const { data, ...queryRes } = useQuery<GetPokemonsData>(GET_POKEMONS, {
    variables: {
      first: 151, // Keep hard coded
    },
  });

  const pokemons: Pokemon[] = useMemo(() => data?.pokemons || [], [data]);

  return {
    pokemons,
    ...queryRes,
  };
};
