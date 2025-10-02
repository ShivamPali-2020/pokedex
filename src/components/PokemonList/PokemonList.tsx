import React from 'react';
import { createUseStyles } from 'react-jss';
import { Pokemon, useGetPokemons } from 'hooks/useGetPokemons';
import PokemonListItem from './PokemonListItem';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();

  return (
    <div className={classes.root}>
      {loading && <div>Loading...</div>}
      <div className={classes.pokemonList}>
        {pokemons.map((pkmn: Pokemon) => (
          <PokemonListItem key={pkmn.id} {...pkmn} />
        ))}
      </div>
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      padding: '32px',
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
