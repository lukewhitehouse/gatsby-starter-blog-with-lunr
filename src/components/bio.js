/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <React.Fragment>
            <div
              style={{ display: `flex` }}
            >
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
              <p>
                This project is a fork from <a href="https://github.com/gatsbyjs/gatsby-starter-blog">Gatsby's starter blog</a>, with added Site Search functionality thanks to <a href="https://lunrjs.com/">Lunr.js</a>. It is maintained by <a href="https://twitter.com/_lukewh">{author}</a>, who wrote a tutorial on <a href="https://assortment.io/posts/gatsby-site-search-lunr-js">building this from scratch</a>. 
              </p>
            </div>
            <p style={{ marginBottom: rhythm(2.5) }}><Link to="/search">Search all posts</Link></p>
          </React.Fragment>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
