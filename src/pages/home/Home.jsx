import React from "react";
import Cloges from "../../components/cloges/Cloges";
import Header from "../../components/header/Header";
import Section from "../../components/section/Section";
import Health from "../../components/health/Health";

function Home() {
  return (
    <>
      <div className="big">
        <Header />
        <Section />
        <Cloges />
        <Health/>
      </div>
    </>
  );
}

export default Home;
