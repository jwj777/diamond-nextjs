useEffect(() => {
  const fetchSubscriptionStatus = async () => {
    try {
      const response = await fetch(`/api/auth0/get-metadata?userId=${user.sub}`);
      const { isSubscribed } = await response.json();
      setIsSubscribed(isSubscribed);
    } catch (error) {
      console.error("Error fetching subscription status:", error);
    }
  };

  if (user) {
    fetchSubscriptionStatus();
  }
}, [user]);
