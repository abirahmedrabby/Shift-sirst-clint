import React from "react";
import Baneer from "../Baneer/Baneer";
import Services from "../services/Services";
import Clients from "../Clients/Clients";
import Benefits from "../Banefits/Banefits";
import BeMerchant from "../BeMerchant/BeMerchant";

const Home = () => {
  return (
    <div>
      <h2>This is Home </h2>
      <Baneer></Baneer>
      <Services></Services>
      <Clients></Clients>
      <Benefits></Benefits>
      <BeMerchant></BeMerchant>
    </div>
  );
};

export default Home;
