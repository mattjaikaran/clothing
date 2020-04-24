import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CollectionPreview from  '../collection-preview/CollectionPreview'


const CollectionsOverview = ({ collections }) => (
  <div>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <div key={id}>
        <CollectionPreview {...otherCollectionProps} />
      </div>
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
