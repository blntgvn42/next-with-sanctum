"use client"
import React, { useEffect, useState } from 'react'
import axios from '../axios'

function SignInPage() {
    const [data, setData] = useState(null)
    const [status, setStatus] = useState(false)

    useEffect(() => {
        console.log(data)
    }, [data])

    const handleLogin = async (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        const response = await axios.post('api/login', formData)
        setData(response.data)
        setStatus(true)
    }
    const handleLogout = async () => {
        const response = await axios.post('api/logout', null, {
            headers: {
                Authorization: `Bearer ${data.data.token}`
            }
        })
        setData(response.data)
        setStatus(false)
    }
    return (
        <>

            {data &&
                <>
                    <pre>
                        {JSON.stringify(data, null, 2)}
                    </pre>
                    <button onClick={handleLogout}>Logout</button>
                </>
            }
            {
                !status && (
                    <form onSubmit={handleLogin}>
                        <h1>Sign In</h1>
                        <input type="text" name='email' />
                        <input type="text" name='password' />
                        <button type="submit">Login</button>
                    </form>
                )
            }
        </>
    )
}

export default SignInPage