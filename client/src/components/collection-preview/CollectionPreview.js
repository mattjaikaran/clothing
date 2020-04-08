import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import CollectionItem from '../collection-item/CollectionItem'
import { CollectionTitle } from './CollectionPreviewStyles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '2rem',
    margin: '2rem',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const CollectionPreview = ({ title, items }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <CollectionTitle>
          {title.toUpperCase()}
        </CollectionTitle>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <Grid key={item.id} item xs={6} sm={4} md={3}>
              <CollectionItem item={item} />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}

export default CollectionPreview
