import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import SearchForm from '../components/search-form'

import {Button, Card, Table} from "react-bootstrap"

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

      <section>
        <Card>
          <Card.Header>
              Enter the sequence you'd like to search for
          </Card.Header>
          <Card.Body>
            <SearchForm />
          </Card.Body>
        </Card>
        <br/>
      </section>

      <section>
        <h4>Jobs</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>sequence</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>actgaactg</td>
              <td><a href="google.com"></a>found</td>
            </tr>
            <tr>
              <td>1</td>
              <td>actgaaag</td>
              <td>searching...</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </Layout>
  )
}
