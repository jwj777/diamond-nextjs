// import { handleAuth } from '@auth0/nextjs-auth0';

// export const GET = handleAuth();


import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

// export const GET = handleAuth({
//   login: handleLogin({
//     returnTo: "/account",
//   }),
// });

export default handleAuth({
  login: async (req, res) => {
    try {
      await handleLogin(req, res, {
        returnTo: '/account',
      });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
});
