import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout"

import { useJsonForm, DeleteAction } from "gatsby-tinacms-json"
import { usePlugin } from "tinacms"

const IndexPage = ({ data }) => {
  const [, form] = useJsonForm(data.contentJson, {
    actions: [DeleteAction],
    label: "Edit Title",
    fields: [{ label: "Title", name: "rawJson.title", component: "text", require: true }]
  })
  usePlugin(form)

  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentJson {
      fileRelativePath
      rawJson
      title
    }
  }
`

export default IndexPage
