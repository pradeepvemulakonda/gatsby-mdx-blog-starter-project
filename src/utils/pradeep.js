import gray from 'gray-percentage';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';

const theme = {
  title: 'Pradeep',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  blockMarginBottom: 0.8,
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['700']
    },
    {
      name: 'Roboto',
      styles: ['400', '400i', '700', '700i']
    }
  ],
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  bodyColor: 'black',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    'h1,h2,h3': {
      lineHeight: 1.1
    },

    'h4, h5, h6': {
      lineHeight: 1.1,
      marginBottom: rhythm(1 / 2),
      marginTop: rhythm(1)
    },
    a: {
      color: 'teal',
      textDecoration: 'none'
    },
    'a:hover,a:active': {
      color: options.bodyColor
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`
    },
    'blockquote > :last-child': {
      marginBottom: 0
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight
    },
    'blockquote cite:before': {
      content: '"— "'
    },
    [MOBILE_MEDIA_QUERY]: {
      html: {
        fontSize: `${16 / 16 * 100}%`
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16)
      }
    }
  })
};

export default theme;
