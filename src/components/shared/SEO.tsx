/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type SeoProps = {
  title: string | null
  description?: string | null

  ogTitle?: string | null
  ogDescription?: string | null
  ogImage?: string | null

  twitterTitle?: string | null
  twitterDescription?: string | null
  twitterImage?: string | null
  meta?: JSX.IntrinsicElements['meta'][]
}

type SiteMetadata = {
  site: { siteMetadata: { title: string; description: string; author: string } }
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  meta = [],
}) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteMetadata>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaTitle = title || siteMetadata?.title
  const metaDescription = description || siteMetadata.description

  const defaultMeta = [
    // {
    //   name: `robots`,
    //   content: 'index, follow',
    // },
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: ogTitle || metaTitle,
    },
    {
      property: `og:description`,
      content: ogDescription || metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: `inDigital`,
    },
    {
      name: `twitter:title`,
      content: twitterTitle || metaTitle,
    },
    {
      name: `twitter:description`,
      content: twitterDescription || metaDescription,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  if (ogImage) {
    defaultMeta.push({ name: `og:image`, content: ogImage })
  }

  if (twitterImage) {
    defaultMeta.push({ name: `twitter:image`, content: twitterImage })
  }

  const combinedMeta = meta ? defaultMeta : [...defaultMeta, ...meta!]

  return (
    <Helmet
      htmlAttributes={{
        lang: 'pl',
      }}
      title={metaTitle}
      titleTemplate="%s"
      meta={combinedMeta}
    />
  )
}


export default Seo
