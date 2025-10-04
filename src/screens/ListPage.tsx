import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { PokemonList } from '../components';
import SearchBar from 'components/PokemonList/SearchBar';
import { useGetPokemons } from 'hooks/useGetPokemons';
import { Pokemon } from 'types/Pokemon';

export const ListPage = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  const [search, setSearch] = useState('');
  const filteredPokemons = pokemons.filter((pkmn: Pokemon) =>
    pkmn.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={classes.root}>
      <SearchBar handleSearch={handleSearch} />
      <PokemonList pokemons={filteredPokemons} loading={loading} />
    </div>
  );
};
const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      padding: '0 32px 32px 32px',
      boxSizing: 'border-box',
      position: 'relative',
    },
  },
  { name: 'ListPage' }
);
