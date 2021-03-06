import Typography from 'typography';
import theme from 'typography-theme-kirkham';

theme.overrideThemeStyles = ({ rhythm }) => ({
  'h1,h2,h3,h4': {
    marginTop: rhythm(1 / 4),
    marginBottom: rhythm(1 / 2),
  },
});

const typography = new Typography({
  ...theme,
  ...{
    includeNormalize: false,
    baseFontSize: '20px',
    headerFontFamily: ['Nunito', 'sans-serif'],
    bodyFontFamily: ['Lato', 'sans-serif'],
    headerWeight: 400,
    googleFonts: [
      {
        name: 'Nunito',
        styles: ['400', '700'],
      },
      {
        name: 'Lato',
        styles: ['400', '700&display=swap'],
      },
    ],
  },
});

const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };
