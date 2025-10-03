import React from 'react';
import { Pokemon } from 'hooks/useGetPokemons';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  root: {
    width: '150px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #000',
    borderRadius: '10px',
    padding: '5px',
    margin: '5px',
    boxSizing: 'border-box',
    '&:hover': {
      boxShadow: '0 0 12px 2px rgba(0, 0, 0, 0.5)',
      transform: 'scale(1.05)',
      cursor: 'pointer',
    },
  },
  image: {
    width: '100px',
    height: '100px',
    marginBottom: '10px',
    borderRadius: '10px',
    overflow: 'hidden',
  },
}));
const PokemonListItem = ({
  name,
  number,
  types,
  image,
  onClick,
}: Pokemon & { onClick: () => void }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={onClick}>
      <img src={image} alt={name} className={classes.image} />
      <div>{name}</div>
      <div>#{number}</div>
      <div>{types?.join(', ')}</div>
    </div>
  );
};

export default PokemonListItem;
