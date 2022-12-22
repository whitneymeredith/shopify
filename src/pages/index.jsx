import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { Seo } from "../components/seo"
import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
`
function Hero (props) {
  return (
    <div className={container}>
      <h1 className={intro}>Pantheon Site</h1>
      {!!process.env.GATSBY_DEMO_STORE && (
        <>
          <p className={callOut}>
            Gatsby Shopify Starter Site on Pantheon.
          </p>
          <p className={callToAction}>
            Pantheon WebOps.
            <a href="https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-shopify&utm_campaign=shopify-starter">
              <img
                src="https://www.gatsbyjs.com/deploynow.png"
                alt="Deploy to Gatsby Cloud"
                className={deployButton}
              />
            </a>
          </p>
        </>
      )}
    </div>
  )
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Hero />
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}

export const Head = () => <Seo />
