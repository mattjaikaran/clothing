import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionsLoaded } from '../../redux/shop/shopSelectors'
import Spinner from '../../components/spinner/Spinner'
import CollectionPage from './Collection'

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state)
})

const CollectionContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionPage)

export default CollectionContainer
