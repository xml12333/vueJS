import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = 
{
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId,
  appId: process.env.VUE_APP_appId,
}
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
