import Head from 'next/head'
import Image from 'next/image'

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Cat Facts</title>
        <meta name="description" content="We tell facts about cats." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container mx-auto px-10 lg:px-96'>
        <div className='flex flex-col justify-center items-center min-h-[90vh]'>
          <h1 className='text-2xl'>{data.fact}</h1>
          <div className='mr-auto mt-10'>
            <span className=' text-gray-500'>the complex design was carefully created by the great </span>
            <span className=' text-rose-800 font-bold'>Moosa</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://catfact.ninja/fact`)
  const data = await res.json()
  return { props: { data } }
}