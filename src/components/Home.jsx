import React, { useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "./Navbar";
import Information from "./Information";
import Objective from "./Objective";
import Skill from "./Skill";
import Project from "./Project";

const Home = () => {
  
  return (
    <div className="bg-gray-50">
    <Navbar />
    <ReactFullpage
      scrollingSpeed={1000}
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section flex flex-col h-screen">
            <div className="flex-grow p-5 relative">
              <Information />
            </div>
          </div>
          <div className="section flex flex-col h-screen">
            <div className="flex-grow p-5 relative flex flex-col">
              <Objective />
            </div>
          </div>
          <div className="section flex flex-col h-screen">
            <div className="flex-grow p-5 relative flex flex-col">
              <Skill />
            </div>
          </div>
          <div className="section flex flex-col h-screen">
            <div className="flex-grow p-5 relative flex flex-col ">
              <Project />
            </div>
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
    </div>
  );
};

export default Home;
