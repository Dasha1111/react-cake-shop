import React from "react";
import "./app.css";
import Body from "./Components/Body Section/Body";
import Sidebar from "./Components/SideBar Section/Sidebar";

const App = () => {
  return (
    <div className="container">
      <Sidebar/>
      <Body/>
    </div>
  )
}

export default App;