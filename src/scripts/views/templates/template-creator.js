import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (Restaurant) => `
  <h2 class="Restaurant__name">${Restaurant.name}</h2>
  <img class=Restaurant__picture" src="${CONFIG.BASE_IMAGE_URL + Restaurant.pictureId}" alt="${Restaurant.name}" />
  <div class="Restaurant__info">
    <h3>Detail Restaurant</h3>
    <h4>Rating</h4>
    <p>${Restaurant.rating}</p>
    <h4>Alamat</h4>
    <p>${Restaurant.address}</p>
    <h4>Kota</h4>
    <p>${Restaurant.city}</p>
    <div class="Restaurant__Description">
    <h4>Deskripsi</h4>
    <p>${Restaurant.description}</p>
    <h4>Review</h4>
    <p>${Restaurant.customerReviews
    .map(
      (customerReview) => `
    <div class="Restaurant__review">
    <h5>${customerReview.name}</h5>
    <p>${customerReview.review}</p>
    <p>${customerReview.date}</p>
    </div>
    `,
    )
    .join('')}</p>
`;

const createRestaurantItemTemplate = (Restaurant) => `
  <div class="Restaurant-item">
    <div class="Restaurant-item__header">
      <img class="Restaurant-item__header__picture" alt="${Restaurant.name}"
           src="${Restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + Restaurant.pictureId : 'https://restaurant-api.dicoding.dev/images/medium/<pictureId>'}">
      <div class="Restaurant-item__header__rating">
        <p>⭐️<span class="Restaurant-item__header__rating__score">${Restaurant.rating}</span></p>
      </div>
    </div>
    <div class="Restaurant-item__content">
      <h3><a href="/#/detail/${Restaurant.id}">${Restaurant.name}</a></h3>
      <p>${Restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
