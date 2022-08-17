import { useEffect } from "react"

function Static({ data }) {
  useEffect(() => {
    console.log('I ran')
  }, []);
  return (
    <p>{data.fact}</p>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://catfact.ninja/fact')
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

export default Static