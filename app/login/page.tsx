"use client";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { ChangeEventHandler, useState } from "react";
import { app } from "../firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async () => {
    console.log(Date.now());
    // try {
    //   const user = await createUserWithEmailAndPassword(auth, email, password);
    //   console.log(user);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "gray",
        height: "100vh",
        paddingTop: "20px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <input type="email" placeholder="Email" onChange={handleEmailChange} />
      <input
        type="password"
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}
