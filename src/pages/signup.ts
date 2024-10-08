import type { APIRoute } from 'astro'
import { getSession } from 'auth-astro/server'
import { TwitchUserModel } from '../models/twitchUser'

export const GET: APIRoute = async ({ request, redirect }) => {
    try {
        const session = await getSession(request)
        if (!session) return redirect('/?error=No authenticated')

        const email = session?.user?.email
        if (!email) return redirect('/?error=Email not found in session')

        const user = await TwitchUserModel.findOne({ where: { email } })
        if (!user) {
            const newUser = await TwitchUserModel.create({ email })
            if (!newUser) return redirect('/?error=Unable to create user')
        }

        const redirectUrl = new URL(request.url).searchParams.get('redirect')

        return redirect(redirectUrl || '/')
    } catch(error) {
        console.error('Unable to connect to the database:', error)
        return redirect('/?error=Internal Server Error')
    }
}
