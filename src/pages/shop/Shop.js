import React, { Component } from 'react'
import SHOP_DATA from './shop.data.js'
import CollectionPreview from  '../../components/collection-preview/CollectionPreview'

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  }

  render() {
    const { collections } = this.state
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage
