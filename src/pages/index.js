import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Projects from "../components/Projects/index"
import Skills from "../components/Skills"
import About from '../components/About'

const IndexPage = () => (
  <div>

    {/* <SEO title="Home" /> */}
    <Hero />
    <Skills />
    <Projects />
    <About />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.This is an extra line</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </div>
)

export default IndexPage
