import { gql, useMutation } from '@apollo/client'
import React from 'react'
const CREATE_PRODUCT = gql `
    mutation createProduct($name: String!, $quantityPerUnit: Int!){
        createProduct(record: {
            name: $name,
            quantityPerUnit: $name
        }) {
            record {
                name
            }
        }
    }
`
export const Mutation = () => {

    const [createProduct, {data, loading, error}] = useMutation(CREATE_PRODUCT, {
        variables: {
            name: "hotdog",
            quantityPerUnit: 4
        }
    })

  return (
    <div>
        <button onClick={() => createProduct()}></button>
    </div>
  )
}
