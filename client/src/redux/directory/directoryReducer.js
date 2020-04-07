const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/clothing-c8c08.appspot.com/o/benjamin-combs-hiAdjnXZxl8-unsplash.jpg?alt=media&token=5894f9c8-5cae-448e-9cd6-40bc74c0843d',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/clothing-c8c08.appspot.com/o/dami-adebayo-k6aQzmIbR1s-unsplash.jpg?alt=media&token=1b8e30ad-d1aa-4dc4-891a-9df1ab162ac7',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'boots',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/clothing-c8c08.appspot.com/o/nathan-dumlao-QLPWQvHvmII-unsplash.jpg?alt=media&token=66fceb64-ff43-40b3-a734-1d3c3eedf314',
      id: 3,
      linkUrl: 'shop/boots'
    },
    {
      title: 'womens',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/clothing-c8c08.appspot.com/o/karina-tess-GUGJZ2wf82Y-unsplash.jpg?alt=media&token=1115d9d4-9696-430c-9e00-3ca76bf9e07b',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/clothing-c8c08.appspot.com/o/zahir-namane-TjUJJACTav4-unsplash.jpg?alt=media&token=da553c7a-bbb2-41ad-89c2-85826938df33',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default directoryReducer
