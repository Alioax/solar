import { useEffect } from "react";

function Dynamic({ data }) {
    useEffect(() => {
        console.log('I ran')
    }, []);
    return (
        <p>{data.fact}</p>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://catfact.ninja/fact`)
    const data = await res.json()

    // Pass data to the Dynamic via props
    return { props: { data } }
}

export default Dynamic