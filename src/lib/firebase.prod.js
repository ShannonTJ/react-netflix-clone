import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//config
const config = {
  apiKey: "AIzaSyBw7bTaH_2vk-8CWJpW6LrX2y1W06Nfl5A",
  authDomain: "react-netflix-clone-e601e.firebaseapp.com",
  projectId: "react-netflix-clone-e601e",
  storageBucket: "react-netflix-clone-e601e.appspot.com",
  messagingSenderId: "730329477525",
  appId: "1:730329477525:web:91c4a68d1d2edada10869c",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
