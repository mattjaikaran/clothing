import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CollectionPreview from  '../collection-preview/CollectionPreview'

import { CollectionsContainer } from './CollectionsStyles'

const CollectionsOverview = ({ collections }) => (
  <Grid container spacing={8}>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <Grid item xs={6} sm={3}>
        <CollectionPreview key={id} {...otherCollectionProps} />
      </Grid>
    ))}
  </Grid>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
