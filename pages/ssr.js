function Dynamic({ data }) {
    return (
        <p className=" text-purple-600">{data.fact}</p>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`https://catfact.ninja/fact`)
    const data = await res.json()
    return { props: { data } }
}

export default Dynamic