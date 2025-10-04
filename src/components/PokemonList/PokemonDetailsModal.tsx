import React from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Divider,
  Chip,
  Grid,
  Icon,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useGetPokemonDetails } from 'hooks/useGetPokemonDetails';
import { theme } from 'theme/theme';
import PokemonDetailsModalSkeleton from './PokemonDetailsModalSkeleton';

type PokemonDetailsModalProps = {
  open: boolean;
  onClose: () => void;
};

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: theme.colors.cardBackground,
  color: theme.colors.text,
  borderRadius: theme.radius.medium,
  boxShadow: theme.shadows.large,
  p: 4,
  outline: 'none',
  overflow: 'hidden',
  '@media (max-width: 500px)': {
    width: 250,
    height: '80%',
    overflow: 'scroll',
  },
};

const PokemonDetailsModal = ({ open, onClose }: PokemonDetailsModalProps) => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id') || '';
  const name = searchParams.get('name') || '';
  const { pokemon, loading, error } = useGetPokemonDetails(id, name);

  return (
    <Modal
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        },
      }}
    >
      <Box sx={style}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: theme.colors.secondaryText,
            '&:hover': { color: theme.colors.text },
          }}
        >
          <Icon>close</Icon>
        </IconButton>

        {loading && <PokemonDetailsModalSkeleton />}

        {error && (
          <Typography color={theme.colors.error} align="center">
            Failed to load Pokemon details.
          </Typography>
        )}

        {!loading && !error && pokemon && (
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              sx={{
                borderRadius: '50%',
                mb: 2,
                boxShadow: theme.shadows.medium,
              }}
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                }}
              />
            </Box>

            <Typography
              variant="h5"
              sx={{
                fontWeight: theme.fontWeights.bold,
                textTransform: 'capitalize',
              }}
            >
              {pokemon.name} #{pokemon.number}
            </Typography>
            <Typography
              variant="body2"
              color={theme.colors.secondaryText}
              mb={2}
            >
              {pokemon.classification}
            </Typography>

            <Box display="flex" gap={1} mb={2}>
              {pokemon.types?.map((type) => (
                <Chip
                  key={type}
                  label={type}
                  sx={{
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.primary,
                    fontWeight: theme.fontWeights.medium,
                    textTransform: 'capitalize',
                  }}
                />
              ))}
            </Box>

            <Divider
              sx={{ width: '100%', mb: 2, borderColor: theme.colors.border }}
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body2" color={theme.colors.secondaryText}>
                  <strong>Max CP:</strong> {pokemon.maxCP}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color={theme.colors.secondaryText}>
                  <strong>Max HP:</strong> {pokemon.maxHP}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color={theme.colors.secondaryText}>
                  <strong>Height:</strong> {pokemon.height?.minimum} -{' '}
                  {pokemon.height?.maximum}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color={theme.colors.secondaryText}>
                  <strong>Weight:</strong> {pokemon.weight?.minimum} -{' '}
                  {pokemon.weight?.maximum}
                </Typography>
              </Grid>
            </Grid>

            <Box mt={3} width="100%">
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ fontWeight: theme.fontWeights.bold }}
              >
                Resistances
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={1}>
                {pokemon.resistant?.map((type) => (
                  <Chip
                    key={type}
                    label={type}
                    sx={{
                      backgroundColor: theme.colors.success,
                      color: theme.colors.primary,
                      textTransform: 'capitalize',
                    }}
                  />
                ))}
              </Box>
            </Box>

            <Box mt={3} width="100%">
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ fontWeight: theme.fontWeights.bold }}
              >
                Weaknesses
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={1}>
                {pokemon.weaknesses?.map((type) => (
                  <Chip
                    key={type}
                    label={type}
                    sx={{
                      backgroundColor: theme.colors.error,
                      color: theme.colors.primary,
                      textTransform: 'capitalize',
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default PokemonDetailsModal;
