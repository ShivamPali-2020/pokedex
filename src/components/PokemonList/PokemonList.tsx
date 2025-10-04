import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Pokemon } from 'types/Pokemon';
import PokemonListItem from './PokemonListItem';
import PokemonCardSkeleton from './PokemonCardSkeleton';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PokemonDetailsModal from './PokemonDetailsModal';
import { Theme } from 'theme/theme';
export const PokemonList = ({
  pokemons = [],
  loading,
  error,
}: {
  pokemons: Pokemon[];
  loading: boolean;
  error: boolean;
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
    const params = new URLSearchParams();
    params.set('id', pkmn.id.toString());
    params.set('name', pkmn.name);
    setSearchParams(params, { replace: true });
    navigate({ search: params.toString() }, { replace: true });
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setSearchParams(new URLSearchParams(), { replace: true });
  };

  if (loading) {
    return (
      <div className={classes.pokemonList}>
        <PokemonCardSkeleton count={20} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classes.emptyState}>
        <div>Failed to load Pokemons</div>
      </div>
    );
  }

  if (pokemons.length === 0) {
    return (
      <div className={classes.emptyState}>
        <div>No Pokemons found</div>
      </div>
    );
  }

  return (
    <>
      <div className={classes.pokemonList}>
        {pokemons.map((pkmn: Pokemon) => (
          <PokemonListItem
            key={pkmn.id}
            {...pkmn}
            onClick={() => handlePokemonClick(pkmn)}
          />
        ))}
      </div>
      {openModal && (
        <PokemonDetailsModal open={openModal} onClose={handleModalClose} />
      )}
    </>
  );
};

const useStyles = createUseStyles((theme: Theme) => ({
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
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '300px',
    color: theme.colors.text,
    fontSize: theme.fontSizes.medium,
    fontWeight: theme.fontWeights.medium,
  },
}));
