export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};

export const PageTypes = {
  MAIN_PAGE: {
    article: 'cities__place-card',
    imgWrapper: 'cities__image-wrapper',
    divCardInfo: '',
    imgWidth: '260',
    imgHeight: '200',
  },
  FAVORITES_PAGE: {
    article: 'favorites__card',
    imgWrapper: 'favorites__image-wrapper',
    divCardInfo: 'favorites__card-info',
    imgWidth: '150',
    imgHeight: '110',
  },
  ROOM_PAGE: {
    article: 'near-places__card',
    imgWrapper: 'near-places__image-wrapper',
    divCardInfo: '',
    imgWidth: '260',
    imgHeight: '200',
  },
};

export const SortTypes = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};
