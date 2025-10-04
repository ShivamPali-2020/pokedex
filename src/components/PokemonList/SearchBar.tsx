import React from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from 'theme/theme';

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    width: '100%',
    marginBottom: '10px',
    marginTop: '10px',
    display: 'flex',
    position: 'sticky',
    top: '0px',
    backgroundColor: theme.colors.background,
    boxShadow: '0 8px 6px -6px black',
    padding: '10px 0',
    zIndex: 2,
    '@media (min-width: 600px)': {
      justifyContent: 'center',
    },
  },
  input: {
    width: '500px',
    padding: '10px',
    borderRadius: '10px',
    border: `1px solid ${theme.colors.border}`,
    fontSize: theme.fontSizes.medium,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.text,
    backgroundColor: theme.colors.background,
    outline: 'none',
    '@media (max-width: 600px)': {
      flexGrow: 1,
    },
  },
}));
const SearchBar = ({
  handleSearch,
}: {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <input
          type="text"
          className={classes.input}
          placeholder="Search Pokemon"
          onChange={handleSearch}
        />
      </div>
    </>
  );
};

export default SearchBar;
