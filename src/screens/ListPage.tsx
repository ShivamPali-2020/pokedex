import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { PokemonList } from '../components';
import SearchBar from 'components/PokemonList/SearchBar';
import { useGetPokemons, Pokemon } from 'hooks/useGetPokemons';

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
      height: '100%',
      padding: '32px',
      boxSizing: 'border-box',
    },
  },
  { name: 'ListPage' }
);
