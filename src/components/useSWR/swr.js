import useSWR from 'swr'
import { Pokemon } from './pokemon'

const SWR = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    const { data:result, error } = useSWR(url)
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