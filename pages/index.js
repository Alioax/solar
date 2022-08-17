import Head from 'next/head'
import Image from 'next/image'

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Solar</title>
        <meta name="description" content="Solar" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className='container mx-auto px-10 lg:px-96'>

      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://catfact.ninja/fact`)
  const data = await res.json()
  return { props: { data } }
}