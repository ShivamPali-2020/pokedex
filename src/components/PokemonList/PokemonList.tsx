import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Pokemon } from 'hooks/useGetPokemons';
import PokemonListItem from './PokemonListItem';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PokemonDetailsModal from './PokemonDetailsModal';

export const PokemonList = ({
  pokemons = [],
  loading,
}: {
  pokemons: Pokemon[];
  loading: boolean;
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    const openModal = !!(searchParams.get('id') && searchParams.get('name'));
    setOpenModal(openModal);
  }, [searchParams]);

  const handlePokemonClick = (pkmn: Pokemon) => {
    navigate(`?id=${pkmn.id}&name=${pkmn.name}`, { replace: true });
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className={classes.root}>
      <div className={classes.pokemonList}>
        {pokemons.map((pkmn: Pokemon) => (
          <PokemonListItem
            key={pkmn.id}
            {...pkmn}
            onClick={() => handlePokemonClick(pkmn)}
          />
        ))}
      </div>
      {pokemons.length === 0 && (
        <div>{loading ? 'Loading...' : 'No Pokemons found'}</div>
      )}
      {openModal && (
        <PokemonDetailsModal open={openModal} onClose={handleModalClose} />
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
