import FavoriteRetaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Favorite</h2>
    <div id="Restaurant" class="Restaurant">
    </div>
  </div>
      `;
  },

  async afterRender() {
    const Restaurants = await FavoriteRetaurantIdb.getAllRestaurant();
    const RestauranstContainer = document.querySelector('#Restaurant');

    Restaurants.forEach((Restaurant) => {
      RestauranstContainer.innerHTML += createRestaurantItemTemplate(Restaurant);
    });
  },
};

export default Favorite;
