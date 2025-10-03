import React from 'react';
import {
  Modal,
  Box,
  Typography,
  CircularProgress,
  IconButton,
  Icon,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useGetPokemonDetails } from 'hooks/useGetPokemonDetails';

type PokemonDetailsModalProps = {
  open: boolean;
  onClose: () => void;
};

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#1e1e1e',
  color: '#ffffff',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  outline: 'none',
};

const PokemonDetailsModal: React.FC<PokemonDetailsModalProps> = ({
  open,
  onClose,
}) => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id') || undefined;
  const name = searchParams.get('name') || undefined;

  const { pokemon, loading, error } = useGetPokemonDetails(id, name);

  return (
    <Modal
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0,0,0,0.7)',
          },
        },
      }}
    >
      <Box sx={style}>
        {/* Close button */}
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, right: 8, color: '#ffffff' }}
        >
          <Icon>close</Icon>
        </IconButton>

        {loading && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={200}
            width="100%"
          >
            <CircularProgress sx={{ color: '#ffffff' }} />
          </Box>
        )}

        {error && <Typography color="error">Failed to load Pokémon</Typography>}

        {!loading && !error && pokemon && (
          <>
            <Typography variant="h5" gutterBottom align="center">
              {pokemon.name} #{pokemon.number}
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={1}
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '10px',
                }}
              />
              <Typography>Type: {pokemon.types?.join(', ')}</Typography>
              <Typography>Classification: {pokemon.classification}</Typography>
              <Typography>Max CP: {pokemon.maxCP}</Typography>
              <Typography>Max HP: {pokemon.maxHP}</Typography>
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default PokemonDetailsModal;
