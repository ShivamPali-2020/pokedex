import React from 'react';
import { Skeleton, Box } from '@mui/material';
import { theme } from 'theme/theme';

interface PokemonCardSkeletonProps {
  count?: number;
}

const PokemonCardSkeleton = ({ count = 1 }: PokemonCardSkeletonProps) => {
  const SkeletonCard = () => (
    <Box
      sx={{
        width: '98%',
        height: 180,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1px solid ${theme.colors.border}`,
        borderRadius: '10px',
        padding: '5px',
        backgroundColor: theme.colors.cardBackground,
      }}
    >
      <Skeleton
        variant="rectangular"
        width={100}
        height={100}
        sx={{ borderRadius: '10px', mb: 1.25 }}
      />
      <Skeleton
        variant="text"
        width={80}
        height={16}
        sx={{ mb: 1, color: theme.colors.text }}
      />
      <Skeleton
        variant="text"
        width={40}
        height={12}
        sx={{ mb: 1, color: theme.colors.text }}
      />
      <Skeleton
        variant="text"
        width={60}
        height={12}
        sx={{ color: theme.colors.text }}
      />
    </Box>
  );

  if (count === 1) {
    return <SkeletonCard />;
  }

  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <Box key={index} sx={{ m: 0.75 }}>
          <SkeletonCard key={index} />
        </Box>
      ))}
    </>
  );
};

export default PokemonCardSkeleton;
