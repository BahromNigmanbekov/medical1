import React from "react";
import Cloges from "../../components/cloges/Cloges";
import Header from "../../components/header/Header";

function Home() {
  return (
    <>
      <div className="big">
        <div className="container">
            <Header/>
          <Cloges />
        </div>
      </div>
    </>
  );
}

export default Home;
