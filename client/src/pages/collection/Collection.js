import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/CollectionItem'
import { selectCollection } from '../../redux/shop/shopSelectors'
import { CollectionContainer, Title, ItemContainer } from './CollectionStyles'
import Grid from '@material-ui/core/Grid'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection

  const renderCollection = () => {
    return items.map(item => (
      <Grid key={item.id} item xs={6} sm={4} md={3}>
        <CollectionItem item={item} />
      </Grid>
    ))
  }


  return (
    <CollectionContainer>
      <Title>{title}</Title>
      <Grid container spacing={3}>
        {renderCollection()}
      </Grid>
    </CollectionContainer>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
