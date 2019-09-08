import Typography from 'typography';
import theme from 'typography-theme-kirkham';

theme.overrideThemeStyles = ({ rhythm }, options) => ({
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
        styles: ['400'],
      },
      {
        name: 'Lato',
        styles: ['400', '400i', '700', '700i', '900'],
      },
    ],
  },
});

const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };
