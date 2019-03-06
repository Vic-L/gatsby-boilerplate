import React from "react"
import {
  Link,
  graphql,
} from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const PageWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
`;

const DateSpan = styled.span`
  color: #bbb;
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
      {
        data.allMarkdownRemark.edges.map(({ node }) => (
          <PageWrapper>
            <h2>{node.frontmatter.title}{" "}</h2>
            <DateSpan>— {node.frontmatter.date}</DateSpan>
            <p>{node.excerpt}</p>
          </PageWrapper>
        ))
      }
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
