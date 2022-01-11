import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.css";

const MenuItem = (props) => {
  return (
    <div
      className={`menu-item ${props.size}`}
      onClick={() => props.history.push(`${props.match.url}${props.title}`)}
    >
      <div
        className="background-img"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
