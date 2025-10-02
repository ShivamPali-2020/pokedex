import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
    marginTop: '10px',
  },
  input: {
    width: '50%',
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid #000',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#fff',
    outline: 'none',
  },
}));
const SearchBar = ({
  handleSearch,
}: {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <input
        type="text"
        className={classes.input}
        placeholder="Search Pokemon"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
