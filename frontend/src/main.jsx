import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";

export const Context = createContext({isAuthorized:false})

const AppWrapper = () =>{
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [user, setUser] = useState({})

  return(
    <Context.Provider value={{ isAuthorized, setIsAuthorized, setUser, user }}>
      <App/>
    </Context.Provider>
  )
}




createRoot(document.getElementById("root")).render(
  <StrictMode>
   <BrowserRouter>
      <AppWrapper />
   </BrowserRouter>
   
  </StrictMode>
);
