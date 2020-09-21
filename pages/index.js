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
        <h2>Find DNA sequence alignments in a library of proteins</h2>
        <hr />
        <p>
          The DNA sequences are first converted to protein sequences before performing 
          the search. This conversion is done by translating the reverse complement 
          of the sequences you enter. To see how this works in the <i>real</i> world checkout this 
          cool <a href="https://www.nature.com/scitable/topicpage/translation-dna-to-mrna-to-protein-393/">article</a>.
        </p>
        <p>Try out a known sequence: tcaagttgtt
        </p>
      </section>
        <SearchForm />
    </Layout>
  )
}
