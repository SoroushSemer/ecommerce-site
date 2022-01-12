import React from "react";
import "./homepage.styles.css";

import HomePageMenu from "../../components/homepagemenu/homepagemenu.component";

const HomePage = (props) => {
  return (
    <div className="homepage">
      <HomePageMenu />
    </div>
  );
};

export default HomePage;
