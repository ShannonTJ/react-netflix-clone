import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

//listen to the user state and change this depending on user actions
export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {}, []);
}
