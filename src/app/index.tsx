import { Redirect, router } from "expo-router";
import { onAuthStateChanged } from "firebase/auth"; 

import { auth } from "./config";
import { useEffect } from "react";

const Index = ():JSX.Element => {

  // ログインの状態を監視
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if(user !== null)
        router.replace("/memo/list");      
    });
  }, []);

  return <Redirect href="auth/login" />
};

export default Index;