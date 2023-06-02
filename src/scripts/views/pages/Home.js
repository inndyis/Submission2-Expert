import RestaurantDbSource from '../../data/Restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Home Page</h2>
    <div id="Restaurant" class="Restaurant">
    </div>
  </div>
      `;
  },

  async afterRender() {
    const Restaurants = await RestaurantDbSource.Home();
    const RestaurantsContainer = document.querySelector('#Restaurant');
    Restaurants.forEach((Restaurant) => {
      RestaurantsContainer.innerHTML += createRestaurantItemTemplate(Restaurant);
    });
  },
};

export default Home;
