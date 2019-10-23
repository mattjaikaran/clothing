import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { selectIsCollectionFetching } from '../../redux/shop/shopSelectors'
import Spinner from '../spinner/Spinner'
import CollectionsOverview from './CollectionsOverview'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionsOverview)

export default CollectionsOverviewContainer
