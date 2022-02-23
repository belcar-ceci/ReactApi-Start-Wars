import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


const IndexSignUp = () => {
  // 1. State component
  const [user, setUser] = useLocalStorage();
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    console.log("Último usuario registrado: ", user);
  }, [user]);

  // 3. Function
  // handleInputChange: update and render  state at each data(input) change 
  function handleInputChange(element) {
    setUser({ ...user, [element.target.name]: element.target.value });
  }

  
  function handleSubmitUserData(event) {
    event.preventDefault();
    // handleSubmitUserData: save in localstorage

    // 1. Show user console
    console.log("Save user", user);
    setListUser([...listUser, user]);

    // 2. Save in localstorage
    localStorage.setItem("listUser", JSON.stringify(listUser));
  }

  // Loading-render-return
  return (
    <form onSubmit={handleSubmitUserData} className="login-card">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        onChange={(element) => handleInputChange(element)}
      />
      <input
        type="text"
        name="email"
        id="email"
        placeholder="E-mail"
        onChange={(element) => handleInputChange(element)}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        autoComplete="on"
        onChange={(element) => handleInputChange(element)}
      />
      <button type="submit">Sign me up</button>
    </form>
  );
};

export default IndexSignUp;
