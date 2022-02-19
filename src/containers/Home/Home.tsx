import React from "react";
import { List } from "../../components/List";
import s from "./Home.module.scss";

function Home() {
  return (
    <div className={s.wrapper}>
      <List />
    </div>
  );
}

export default Home;
