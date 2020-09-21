import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import SearchForm from '../components/search-form'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <br />
        <h3>A utility for finding sequence alignments in a dna library</h3>
        <br/>
      </section>
      <SearchForm />
    </Layout>
  )
}
