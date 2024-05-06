import { Fragment } from "react";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
}

export default App;
