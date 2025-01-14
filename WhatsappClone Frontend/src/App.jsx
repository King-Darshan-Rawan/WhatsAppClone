import React from 'react';
import Messanger from './Components/Messanger';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';



function App() {
  return (
    <>
    <AccountProvider>
      <Messanger />
    </AccountProvider>
    </>
  );
}

export default App;