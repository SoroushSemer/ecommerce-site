import React from "react";

import "./collectionitem.styles.css";

export const CollectionItem = (props) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{props.name}</span>
        <span className="price">${props.price}</span>
      </div>
    </div>
  );
};
