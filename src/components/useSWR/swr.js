import useSWR from 'swr'
import { Pokemon } from './pokemon'

const SWR = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data:result, error } = useSWR(url, fetcher)
    console.log(result);
    if (error) return <div>failed to load</div>
    if (!result) return <div>loading...</div>
    return <>
    <main className='App'>
            <h1>Pokedex</h1>
            <div>
                {result.results.map((pokemon) => (
                    <Pokemon key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
        </main>
    </>
}
export default SWR;