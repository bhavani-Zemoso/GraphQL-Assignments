import { gql, useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'

const GET_CHARACTER_LOCATIONS = gql `
    query getCharacterLocations($name: String!) {
        characters(filter: {
            name: $name
        }) {
            results {
                location {
                    name
                }
            }
        }
    }
`

export const Search = () => {

    const [name, setName] = useState("")

    const [getLocations, {loading, error, data, called}] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name
        }
    })

    console.log({
        data,
        error,
        loading,
        called
    })

  return (
    <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => getLocations()}>Search</button>
        {loading && <div>Spinner...</div>}
        {error && <div>Something went wrong</div>}
        {data && (
            <ul>
                {data.characters.results.map((character) => {
                    return <li>{character.location.name}</li>;
                })}
            </ul>
        )}
    </div>
  )
}
