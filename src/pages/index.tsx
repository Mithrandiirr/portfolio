import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout"
import { Main } from "../components/Main"


const IndexPage: React.FC<PageProps> = () => {
  return (
   <Layout>
      <Main />
   </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
