import React, { Fragment } from "react";
import Footer from "./components/Footer";
import Routes from "./route/routes";
import "./assets/style/App.css";

function App() {
  const currantYear = new Date().getFullYear();

  return (
    <Fragment>
      <Routes />
      <Footer currantYear={currantYear} />
    </Fragment>
  );
}

export default App;
