module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Design Thinking`,
    author: `Pradeep Vemulakonda`,
    description: `Thoughts on design and architecture`,
    siteUrl: `https://blog.vemulakonda.com`,
    keywords: ['blog', 'design'],
    social: {
      twitter: `pradeepvemulako`
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`
      }
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {}
            }
          }
        ]
      }
    },
    'gatsby-plugin-sharp',
    `gatsby-transformer-yaml`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Personalblog',
        short_name: 'vemulakonda',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#525dce',
        display: 'standalone',
        icon: 'assets/logo.png'
      }
    },
    'gatsby-plugin-offline'
  ]
};
