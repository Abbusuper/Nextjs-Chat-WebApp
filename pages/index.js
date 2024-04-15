import { useRouter } from "next/router";

import React, { useContext } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Context } from "../context";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();

    if (username.length === 0 || secret.length === 0) {
      toast.error("Enter Correct Credentials", {
        autoClose: 500,
        hideProgressBar: true,
        pauseOnHover: true,
        position: "bottom-center",
      });
      return;
    }
    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-key": "e7aa02f7-7fa5-4b01-bae2-4f7abd299164" } }
      )
      .then((r) => router.push("/chats"));
    console.log(secret);
  };

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">NextJs Chat</div>

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input "
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input "
              onChange={(e) => setSecret(e.target.value)}
            ></input>
          </div>
          <button type="submit" className="submit-button">
            Login/SignUp
          </button>
        </form>
      </div>
    </div>
  );
}
