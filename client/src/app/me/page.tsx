import envConfig from '@/config'
import React from 'react'
import { cookies } from 'next/headers'
import Profile from '@/app/me/profile'

export default async function MePage() {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get('sessionToken')


    const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionToken?.value}`
        }
    }).then(async (res) => {
        const payload = await res.json()
        const data = {
            status: res.status,
            payload
        }
        if (!res.ok) {
            throw data
        }
        return data
    })

    return (
        <div>
            <h1>Profile</h1>
            <div>
                Xin chào {result.payload.data.name}
            </div>
            <Profile />
        </div>
    )
}
