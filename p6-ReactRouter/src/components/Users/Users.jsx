import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const { id } = useParams()

    return (
        <div>Users: {id}</div>
    )
}

export default Users