

export async function POST(request: Request) {
    const res = await request.json()
    console.log("check res>>>", res)
    const sessionToken = res.payload?.data?.token
    if (!sessionToken) {
        return Response.json({ message: 'Invalid token' }, { status: 401 })
    }
    return Response.json(res.payload, {
        status: 200,
        headers: {
            'Set-Cookie': `sessionToken=${sessionToken}; Path=/; HttpOnly`
        }
    }
    )
}