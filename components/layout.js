import Link from 'next/link'
import Head from 'next/head'

import { Navbar, Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

import styles from './layout.module.css'

const name = 'seqalign'
export const siteTitle = 'sequence aligner'


export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="syncspace demo site"
        />
      </Head>
          <>
            <Navbar bg="dark" variant="dark" className={styles.container}>
              <div>
                <Link href="/" passHref>
                    <Navbar.Brand href="/">
                      <img
                          alt=""
                          src="/dna.png"
                          width="40"
                          height="40"
                          className="d-inline-block align-top"
                      />{' '}
                      <h2 className="d-inline-block">{name}</h2>
                    </Navbar.Brand>
                </Link>
              </div>
              <div>
                <Button href="https://github.com/luhart/seqalign" variant="primary">Source</Button>
              </div>
            </Navbar>
          </>
      <main>
        <Container>
          {children}
        </Container>
      </main>
    </div>
  )
}