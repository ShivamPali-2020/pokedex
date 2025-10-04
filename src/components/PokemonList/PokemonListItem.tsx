import React from 'react';
import { Pokemon } from 'types/Pokemon';
import { createUseStyles } from 'react-jss';
import { Theme } from 'theme/theme';

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${theme.colors.border}`,
    borderRadius: '10px',
    padding: '5px',
    boxSizing: 'border-box',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      boxShadow: theme.shadows.medium,
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
  name: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.medium,
    marginBottom: theme.spacing.small,
  },
  number: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.secondaryText,
    marginBottom: theme.spacing.small,
  },
  types: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.secondaryText,
    textTransform: 'capitalize',
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
      <img src={image} alt={name} className={classes.image} loading="lazy" />
      <div className={classes.name}>{name}</div>
      <div className={classes.number}>#{number}</div>
      <div className={classes.types}>{types?.join(', ')}</div>
    </div>
  );
};

export default PokemonListItem;
