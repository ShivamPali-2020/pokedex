import React from 'react';
import { createUseStyles } from 'react-jss';
import { Pokemon } from 'hooks/useGetPokemons';
import PokemonListItem from './PokemonListItem';

export const PokemonList = ({
  pokemons = [],
  loading,
}: {
  pokemons: Pokemon[];
  loading: boolean;
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.pokemonList}>
        {pokemons.map((pkmn: Pokemon) => (
          <PokemonListItem key={pkmn.id} {...pkmn} />
        ))}
      </div>
      {pokemons.length === 0 && (
        <div>{loading ? 'Loading...' : 'No Pokemons found'}</div>
      )}
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      boxSizing: 'border-box',
    },
    pokemonList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '10px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  { name: 'PokemonList' }
);
