// import { handleAuth } from '@auth0/nextjs-auth0';

// export const GET = handleAuth();


import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

// export const GET = handleAuth({
//   login: handleLogin({
//     returnTo: "/account",
//   }),
// });


export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/account",
    authorizationParams: {
      redirect_uri: 'https://www.diamondgradecards.com/api/auth/callback',
    },
  }),
});
