import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDljEEJLHxFMLBL_sdznx5RBKaVNIAPtA8",
  authDomain: "warehouse-react-node-mongo.firebaseapp.com",
  projectId: "warehouse-react-node-mongo",
  storageBucket: "warehouse-react-node-mongo.appspot.com",
  messagingSenderId: "311439479647",
  appId: "1:311439479647:web:cad203915d079deea21cea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
