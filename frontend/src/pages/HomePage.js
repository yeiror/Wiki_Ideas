import React from 'react'
import Layout from '../layout/Layout'
import Institutional from '../components/Institutional'
import Home from '../components/Home'

export default function HomePage() {
  return (
    <Layout>
      <Institutional/>
      <Home/>
    </Layout>
  )
}
