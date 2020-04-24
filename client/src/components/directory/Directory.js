import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directorySelectors'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import MenuItem from '../menu-item/MenuItem'
import { DirectoryContainer } from './DirectoryStyles'

const useStyles = makeStyles(theme => ({
  menuItemContainer: {
    width: '100%',
    flexGrow: 1,
    marginTop: '2%',
    [theme.breakpoints.only('xs')]: {
      marginTop: '10%',
      padding: '0 10px'
    }
  },
  menuItem: {
  }
}))

const Directory = ({ sections }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      spacing={2}
      className={classes.menuItemContainer}>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem className={classes.menuItem} key={id} {...otherSectionProps} />
      ))}
    </Grid>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
