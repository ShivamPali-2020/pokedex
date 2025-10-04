import { Skeleton, Box } from '@mui/material';
import React from 'react';
import { theme } from 'theme/theme';

const PokemonDetailsModalSkeleton = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        gap={2}
        height={550}
      >
        <Skeleton
          variant="circular"
          width={160}
          height={160}
          sx={{
            bgcolor: theme.colors.skeleton,
          }}
        />

        <Skeleton
          variant="text"
          width="60%"
          height={28}
          sx={{ bgcolor: theme.colors.skeleton }}
        />
        <Skeleton
          variant="text"
          width="40%"
          height={20}
          sx={{ bgcolor: theme.colors.skeleton }}
        />

        <Box display="flex" gap={1} mt={2}>
          {[...Array(3)].map((_, index) => (
            <Skeleton
              key={index}
              variant="rounded"
              width={60}
              height={28}
              sx={{ bgcolor: theme.colors.skeleton }}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default PokemonDetailsModalSkeleton;
