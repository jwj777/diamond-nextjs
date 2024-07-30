import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/account",
    authorizationParams: {
      redirect_uri: process.env.NEXT_PUBLIC_AUTH0_BASE_URL + '/api/auth/callback',
    },
  }),
});
