import React from 'react'
import { useState, useContext } from 'react'
import UseContext from '../context/UseContext'

function Profile() {

    const { user } = useContext(UseContext)
    
    if(!user)
        return(
            <h2>Please enter login details to view</h2>
        )

    return (
        <>
            <h2>Welcome {user.username}</h2>
            <h3>Your entered password is: {user.password}</h3>
        </>
    )
}

export default Profile