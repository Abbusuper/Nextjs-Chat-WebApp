import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";

import { ContextProvider } from "../context";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      {/* this will help us in getting us access to users username in any page or from aywhere from the application */}
      <Component {...pageProps} />
      <ToastContainer />
    </ContextProvider>
  );
}
