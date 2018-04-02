import Typography from 'typography';
import theme from 'typography-theme-kirkham';

const typography = new Typography({
  ...theme,
  ...{
    includeNormalize: false,
    baseFontSize: '20px',
  },
});

export default typography;
