import React from 'react';
import { Link, graphql } from 'gatsby';
import TutorialLayout from '../layout/tutorial-layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';
import PropTypes from 'prop-types';
import RehypeReact from 'rehype-react';
import CompareLang from '../components/compare/compare-lang';
import CompareTab from '../components/compare/tab';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { 'compare-lang': CompareLang, 'compare-tab': CompareTab }
}).Compiler;

class TutorialTemplate extends React.Component {
  render () {
    const { data, location, pageContext } = this.props;
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;
    const { previous, next } = pageContext;

    return (
      <TutorialLayout location={location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1)
          }}
        >
          {post.frontmatter.date}
        </p>
        {renderAst(post.htmlAst)}
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel='prev'>
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel='next'>
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </TutorialLayout>
    );
  }
}

TutorialTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default TutorialTemplate;

export const pageQuery = graphql`
  query TutorialSlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            categories
            keywords
          }
        }
      }
    }
  }
`;
