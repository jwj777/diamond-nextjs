import { handleAuth } from '@auth0/nextjs-auth0';

export const GET = handleAuth();


// import { handleAuth, handleLogin, handleCallback, handleProfile } from '@auth0/nextjs-auth0';

// export const GET = async (req, res) => {
//   const { pathname } = new URL(req.url, `http://${req.headers.host}`);

//   if (pathname === '/api/auth/me') {
//     try {
//       await handleProfile(req, res);
//     } catch (error) {
//       console.error('Profile error:', error);
//       res.status(error.status || 500).json({ error: error.message });
//     }
//   } else if (pathname === '/api/auth/callback') {
//     try {
//       await handleCallback(req, res, {
//         redirectTo: 'http://localhost:3001/account',
//       });
//     } catch (error) {
//       console.error('Callback error:', error);
//       res.status(error.status || 500).json({ error: error.message });
//     }
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// };

// export const POST = async (req, res) => {
//   const { pathname } = new URL(req.url, `http://${req.headers.host}`);

//   if (pathname === '/api/auth/login') {
//     try {
//       await handleLogin(req, res, {
//         returnTo: 'http://localhost:3001/account',
//       });
//     } catch (error) {
//       console.error('Login error:', error);
//       res.status(error.status || 500).json({ error: error.message });
//     }
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// };