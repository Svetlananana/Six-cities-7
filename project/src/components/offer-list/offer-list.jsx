import React from 'react';
import PropTypes from 'prop-types';
import Offer from '../offer/offer';
import {PageType} from '../../const';
import {propOffersTypes} from '../../type-props';

export default function OffersList({offers, onMouseEnter, onMouseLeave, isMain = true}) {

  return (
    <div className={isMain ? 'cities__places-list places__list tabs__content' : ''}>
      {offers.map((offer) => (
        <Offer
          isMain={isMain}
          offer={offer}
          key={offer.id}
          pageTypes={PageType[`${isMain ? 'MAIN_PAGE' : 'ROOM_PAGE'}`]}
          onMouseEnter={() => onMouseEnter(offer.id)}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </div>
  );
}


OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(propOffersTypes).isRequired,
  ),
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isMain: PropTypes.bool,
};
