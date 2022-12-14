import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import {useEffect, useState} from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
 
  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-ch4vultf2jcs0mw7.uk.auth0.com";
  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          
        });
        console.log(accessToken)
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log(user);
  
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <h3>Welcome back {user.nickname}!</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          ""
        )}
</div>)
 
  )};

  export default Profile;