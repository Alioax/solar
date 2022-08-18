import Head from 'next/head'
import Image from 'next/image'

import { GoogleMap, useLoadScript } from "@react-google-maps/api"

export default function Home({ data }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>
  return (
    <div>
      <Head>
        <title>Solar</title>
        <meta name="description" content="Solar" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/logo.png" />
      </Head>
      {/* <main className='container mx-auto px-10 lg:px-96'> */}
      <main>
        <GoogleMap zoom={10} center={{ lat: 44, lng: -80}} mapContainerClassName="map-container" />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://catfact.ninja/fact`)
  const data = await res.json()
  return { props: { data } }
}