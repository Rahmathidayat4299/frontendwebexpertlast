/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriterestaurant-idb';
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonInitiatorWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonInitiatorWithRestaurant };
