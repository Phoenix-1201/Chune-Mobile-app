import React from 'react';
import {MenuProps} from '@/screens/Menu/index'
import { useStores } from '@/hooks';
import {useLoginWithToken} from '@/hooks/Mutations';

export default function useViewModel(props: MenuProps){
  const stores = useStores();
  const {user, token: tokenStore} = stores;
  const [isCheckingToken, setCheckingToken] = React.useState(false);
  const [apiLoginWithToken] = useLoginWithToken();

  // Do the token verified check on component did mount
  React.useEffect(() => {
    //console.log('User.isTokenVerified ==== ', user.isTokenVerified);
    // Do check then user is token verified
    if (!user.isTokenVerified) {
      const token = tokenStore.value ?? '';
      // Start Checking Token
      setCheckingToken(true);

      // console.log('Calling api with stored token -- ', token);
      apiLoginWithToken(token, user.id)
        .then((result) => {
          // Just do nothing :)
          // When Token is Checked
          setCheckingToken(false);
      }).catch(error => {
        // console.log("Error Happened-------------", error);
        // When error occurred, sign out the user
        setCheckingToken(false);
        stores.logOut();
      });
    }
  }, []);

  return {
    isCheckingToken
  };
}
