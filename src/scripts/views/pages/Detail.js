import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/Restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const DetailRestaurant = {
  async render() {
    return `
    <div id="Restaurant" class="Restaurant"></div>
    <div id="likeButtonContainer" claas="like"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const Restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const RestaurantContainer = document.querySelector('#Restaurant');
    RestaurantContainer.innerHTML = createRestaurantDetailTemplate(Restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        ...Restaurant,
      },
    });
  },
};

export default DetailRestaurant;
