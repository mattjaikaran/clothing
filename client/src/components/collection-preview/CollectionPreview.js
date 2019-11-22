import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'

import { CollectionContainer, CollectionTitle, CollectionPreviewContainer } from './CollectionPreviewStyles'

const CollectionPreview = ({ title, items }) => (
  <CollectionContainer>
    <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
    <CollectionPreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
      ))}
    </CollectionPreviewContainer>
  </CollectionContainer>
)

export default CollectionPreview
