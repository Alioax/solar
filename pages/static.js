function Static({ data }) {
  return (
    <h1 className="text-3xl font-bold underline">
      {data.fact}
    </h1>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://catfact.ninja/fact')
  const data = await res.json()
  return { props: { data } }
}

export default Static