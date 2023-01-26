import express from 'express';
const restaurant = express.Router();

import { getRestaurantById,getShortMenu, getFullMenu, getAllResMenu,  } from '../controllers/restaurantController';

restaurant.get('/:restaurantId', getRestaurantById);
restaurant.get('/:restaurantId/shortMenu/:menuName',getShortMenu);
restaurant.get('/:restaurantId/fullMenu/:menuName',getFullMenu);
restaurant.get('/:restaurantId/menus', getAllResMenu);
export default restaurant;