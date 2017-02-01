const INITIAL_STATE = [
  {
    id: 1,
    url: 'https://i.ytimg.com/vi/a6KGPBflhiM/hqdefault.jpg',
    captions: [
      {
        id: 1,
        text: ' ',
        likes: 1
      },
      {
        id: 2,
        text: ' ',
        likes: 2
      }
    ]
  },
  {
    id: 2,
    url: 'https://1.bp.blogspot.com/-gU1qAC32x6c/Vg87Qd43DfI/AAAAAAAADM0/S43PhOQEFL0/s400/tudo_sobre_golden_retriever.jpg',
    captions: [
      {
        id: 1,
        text: ' ',
        likes: 1
      },
      {
        id: 2,
        text: ' ',
        likes: 2
      }
    ]
  },
  {
    id: 3,
    url: 'http://cache.lovethispic.com/uploaded_images/164412-Adorable-Husky-Puppies.jpg',
    captions: [
      {
        id: 1,
        text: ' ',
        likes: 1
      },
      {
        id: 2,
        text: ' ',
        likes: 2
      }
    ]
  },
  {
    id: 4,
    url: 'https://s-media-cache-ak0.pinimg.com/236x/53/08/c5/5308c57936ede0f8c6856f3b432d1060.jpg',
    captions: [
      {
        id: 1,
        text: ' ',
        likes: 1
      },
      {
        id: 2,
        text: ' ',
        likes: 2
      }
    ]
  },
  {
    id: 5,
    url: 'http://baby-animals.net/wp-content/gallery/Baby-kangaroo-wallpapers/Baby-kangaroo-wallpapers.jpg',
    captions: [
      {
        id: 1,
        text: ' ',
        likes: 1
      },
      {
        id: 2,
        text: ' ',
        likes: 2
      }
    ]
  },
  {
    id: 6,
    url: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/02/cute-baby-polar-bear-day-photography-14__880.jpg',
    captions: [
      {
        id: 1,
        text: ' ',
        likes: 1
      },
      {
        id: 2,
        text: ' ',
        likes: 3
      }
    ]}
]

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_NEW_POST_SUCCESS':
      return [...state, action.url]

    case 'ADD_NEW_POST_FAILURE':
      return [...state, 'ERROR SOMETHING BAD HAPPENED']

    default:
      return state
  }
}
