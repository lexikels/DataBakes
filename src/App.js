import React from "react";
import Table from "./components/Table";

function App() {
  const favouriteWebsites = [
    {
      name: "Eggplant tomato pasta sauce",
      description: "Favourite bolognese sauce (add mince)",
      catagory: "Dinner",
      dateAdded: "2024-04-23",
      url: "https://www.smh.com.au/goodfood/recipes/eggplant-tomato-pasta-sauce-20150928-43jlr.html",
    },
    {
      name: "Levain Bakery Cookies",
      description: "The best chocolate chip cookies",
      catagory: "Baking",
      dateAdded: "2024-04-22",
      url: "https://www.modernhoney.com/levain-bakery-two-chip-chocolate-chip-cookies/",
    },
  ];
  return (
    <div className="App">
      <h1>DataBakes</h1>
      <Table websites={favouriteWebsites} />
    </div>
  );
}

export default App;
