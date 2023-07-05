import React, { useState } from 'react';
import Header from '../../Components/common/header';
import TabOptions from '../../Components/common/tabOptions';
import Footer from '../../Components/common/footer';
import Veg from "../../Components/Veg";
import NonVeg from "../../Components/NonVeg";

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
    case "Veg":
      return <Veg />
    case "Non-Veg":
      return <NonVeg/>
    default:
      return <Veg/>
  }
}

export default HomePage;