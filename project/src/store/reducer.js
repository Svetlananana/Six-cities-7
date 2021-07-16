import {ActionType} from './action';
import {DEFAULT_CITY, SortTypes} from '../const';
import {offers} from '../moks/offers';
import {reviews} from '../moks/reviews';
import {getActiveCity} from '../utils';

const initialState = {
  activeCity: DEFAULT_CITY,
  offers: getActiveCity(offers, DEFAULT_CITY),
  reviews,
  sortType: SortTypes.DEFAULT,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
        offers: getActiveCity(offers, action.payload),
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    default:
      return state;
  }
};
