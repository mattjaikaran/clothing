import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Spinner from '../../components/spinner/Spinner'

import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions'
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shopSelectors'

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from '../collection/Collection'

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview)
const CollectionPageWithSpinner = Spinner(CollectionPage)

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }
  render() {
    const { match, isFetchingCollections, isCollectionsLoaded } = this.props
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) =>
            <CollectionsOverviewWithSpinner
              isLoading={isFetchingCollections} {...props} />} />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) =>
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded} {...props} />} />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
