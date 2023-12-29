"use client";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1>Hello from hello page</h1>

      <p>
        {JSON.stringify({
          name: state,
          description: description,
        })}
      </p>
      <input
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <input
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
    </div>
  );
}
