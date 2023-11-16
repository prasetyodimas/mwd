import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Footer from "../components/footer";
import HomeIndex from "../components/home-Index"

const IndexPage = () => (
  <>
    <Layout className="container">
      <section className="py-5 text-center">
        <HomeIndex/>
      </section>
    </Layout>
    <Footer/>
  </>
)

export default IndexPage

export const Head = () => (
    <Seo />
)
