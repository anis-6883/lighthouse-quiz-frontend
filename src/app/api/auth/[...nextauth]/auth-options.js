import CredentialsProvider from 'next-auth/providers/credentials'
import { pagesOptions } from './pages-options'
import jwt from 'jsonwebtoken'

export const authOptions = {
  pages: { ...pagesOptions },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        return {
          accessToken: credentials?.accessToken,
          role: credentials?.role,
        }
      },
    }),
  ],
  session: {
    maxAge: convertDaysToSec(7),
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // when logging in
      if (account?.provider === 'credentials') {
        if (user) return { ...user }
      }
      // console.log('user', user)
      // console.log('account', account)
      // console.log('token', token)
      return token
    },

    async session({ session, token }) {
      return {
        ...session,
        ...token,
      }
    },
  },
}

function convertDaysToSec(days) {
  return 60 * 60 * 24 * days
}
