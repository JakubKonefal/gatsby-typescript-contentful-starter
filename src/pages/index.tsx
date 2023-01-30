import * as React from 'react'
// import { graphql, PageProps } from 'gatsby'

import Layout from 'components/layout'
// import SEO from 'components/shared/SEO'

const IndexPage: React.FC = () => {
  // const HOMEPAGE = data?.wpPage?.Homepage
  // const PAGE_SEO = data?.wpPage?.seo

  return (
    <Layout>
      <main>Walbrzyska LP</main>
      {/* <SEO
        title={PAGE_SEO?.title ?? ''}
        description={PAGE_SEO?.metaDesc ?? ''}
        ogTitle={PAGE_SEO?.opengraphTitle}
        ogDescription={PAGE_SEO?.opengraphDescription}
        ogImage={PAGE_SEO?.opengraphImage?.sourceUrl}
        twitterTitle={PAGE_SEO?.twitterTitle}
        twitterDescription={PAGE_SEO?.twitterDescription}
        twitterImage={PAGE_SEO?.twitterImage?.sourceUrl}
      /> */}
      {/* <Navigation /> */}
    </Layout>
  )
}

export default IndexPage

// export const query = graphql`
//   query IndexPage {
//     heroImgMobile: file(name: { eq: "hero-img-mobile-1" }) {
//       childImageSharp {
//         gatsbyImageData(
//           width: 992
//           placeholder: DOMINANT_COLOR
//           formats: [AUTO, WEBP]
//         )
//       }
//     }
//   }
// `
