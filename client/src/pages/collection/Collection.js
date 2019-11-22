import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/CollectionItem'
import { selectCollection } from '../../redux/shop/shopSelectors'
import { CollectionContainer, Title, ItemContainer } from './CollectionStyles'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection
  return (
    <CollectionContainer>
      <Title>{title}</Title>
      <ItemContainer>
        {items.map(item => <CollectionItem key={item.id} item={item} />)}
      </ItemContainer>
    </CollectionContainer>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
