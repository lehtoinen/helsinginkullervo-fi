import Typography from 'typography';
import theme from 'typography-theme-kirkham';

const typography = new Typography({
  ...theme,
  ...{
    includeNormalize: false,
    baseFontSize: '20px',
  },
});

const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };
