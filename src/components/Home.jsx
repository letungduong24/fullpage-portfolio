import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "./Navbar";
import Information from "./Information";
import Objective from "./Objective";
import Skill from "./Skill";
import Project from "./Project";
import Loading from "./Loading"; // Import component loading của bạn

const Home = () => {
  const [lang, setLang] = useState('vi')
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Chờ 1 giây trước khi ẩn loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50">
      {isLoading && <Loading />}
      {!isLoading && <Navbar lang={lang} setLang={setLang} />}
      <ReactFullpage
        scrollingSpeed={1000}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section flex flex-col h-screen">
              <div className="flex-grow p-5 relative">
                <Information lang={lang}/>
              </div>
            </div>
            <div className="section flex flex-col h-screen">
              <div className="flex-grow p-5 relative flex flex-col">
                <Objective lang={lang}/>
              </div>
            </div>
            <div className="section flex flex-col h-screen">
              <div className="flex-grow p-5 relative flex flex-col">
                <Skill lang={lang}/>
              </div>
            </div>
            <div className="section flex flex-col h-screen">
              <div className="flex-grow p-5 relative flex flex-col ">
                <Project lang={lang}/>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  )
};

export default Home;
