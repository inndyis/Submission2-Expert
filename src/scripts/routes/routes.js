import DetailRestaurant from '../views/pages/Detail';
import Home from '../views/pages/Home';
import Favorite from '../views/pages/Favorites';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': DetailRestaurant,
};

export default routes;
