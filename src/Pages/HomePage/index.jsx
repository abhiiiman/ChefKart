import React, { useState } from 'react';
import Header from '../../Components/common/header';
import TabOptions from '../../Components/common/ChefOptions';
import Footer from '../../Components/common/footer';
import ChefIt from "../../Components/ChefIt";
import ChefParty from "../../Components/ChefParty";

const HomePage = () => {

  // creating state for the screen here.
  const [activeTab, setActiveTab] = useState("Veg");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectTab(activeTab)}
      <Footer />
    </div>
  )
}

// func to get the correct screen for two diff food category.
const getCorrectTab = (tab) => {
  switch (tab) {
    case "ChefIt":
      return <ChefIt />
    case "ChefParty":
      return <ChefParty />
    default:
      return <ChefIt />
  }
}

export default HomePage;