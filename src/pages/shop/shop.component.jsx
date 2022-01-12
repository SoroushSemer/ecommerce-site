import React from "react";
import { SHOP_DATA } from "./shop.data";

import { CollectionPreview } from "../../components/collectionpreview/collectionpreview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...collection }) => (
          <CollectionPreview key={id} {...collection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
