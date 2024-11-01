// api/auth0/update-metadata.js
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import auth0 from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async (req, res) => {
  const { userId, isSubscribed } = req.body;
  const { accessToken } = await getAccessToken(req, res);

  try {
    await auth0.users.update({ id: userId }, {
      app_metadata: { isSubscribed }
    }, {
      access_token: accessToken
    });

    res.status(200).json({ message: "Subscription status updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating subscription status" });
  }
});
