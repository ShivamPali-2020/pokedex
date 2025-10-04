export const theme = {
  colors: {
    primary: '#007bff',
    text: '#e0e0e0',
    secondaryText: '#b0b0b0',
    background: '#171E2b',
    cardBackground: '#1f2430',
    border: '#2c3e50',
    success: '#28a745',
    error: '#dc3545',
    skeleton: 'rgba(255, 255, 255, 0.1)',
  },
  spacing: {
    small: '8px',
    medium: '16px',
  },
  radius: {
    medium: '10px',
  },
  shadows: {
    medium: '0 4px 12px rgba(0, 0, 0, 0.5)',
    large: '0 8px 24px rgba(0, 0, 0, 0.6)',
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
  },
  fontWeights: {
    medium: 500,
    bold: 700,
  },
};

export type Theme = typeof theme;
