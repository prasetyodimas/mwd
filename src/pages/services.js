import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const Services = () => (
  <Layout>
    <div className="container  my-5">
      <div className="container">
        <h1 >Services</h1>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Services

export const Head = () => (
    <Seo title="About Gatsby Bootsrap 5 starter" />
)
