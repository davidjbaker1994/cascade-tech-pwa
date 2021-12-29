import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactForm from "../components/contactForm"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ContactForm />
  </Layout>
)

export default IndexPage
