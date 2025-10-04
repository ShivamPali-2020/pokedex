export const theme = {
  colors: {
    primary: '#007bff',
    primaryHover: '#3399ff',
    primaryActive: '#0056b3',
    text: '#e0e0e0',
    secondaryText: '#b0b0b0',
    background: '#171E2b',
    cardBackground: '#1f2430',
    headerBackground: '#121820',
    border: '#2c3e50',
    modalBackground: '#1e1e1e',
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  radius: {
    small: '4px',
    medium: '10px',
    large: '16px',
  },
  shadows: {
    small: '0 2px 6px rgba(0, 0, 0, 0.4)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.5)',
    large: '0 8px 24px rgba(0, 0, 0, 0.6)',
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '20px',
    xlarge: '28px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    normal: 1.4,
    dense: 1.2,
    heading: 1.3,
  },
};

export type Theme = typeof theme;
