import axios from 'axios';
import express from 'express';
import { Restaurant, ShortMenu } from './types';

export const getRestaurantById = async (req: express.Request, res: express.Response) => {
    const restaurantId = req.params.restaurantId;
    const url = `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}.json`;
    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving restaurant data');
    }
};
export const getAllResMenu = async (req: express.Request, res: express.Response) => {
    const { restaurantId } = req.params;
    try {
      let restaurant: Restaurant = await axios.get(
        `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}.json`
      ).then(res => res.data)
  
      const shortMenuList: Array<ShortMenu> = await Promise.all(
        restaurant.menus.map(async (menuName: string) => {
          const res = await axios.get(
            `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}/menus/${menuName}/short.json`
          );
          return res.data;
        })
      );
  
      res.status(200).json(shortMenuList);
    } catch (err) {
      if (err instanceof Error) res.status(404).json({ message: err.message });
    }
  };
export const getShortMenu = async (req: express.Request, res: express.Response) => {
    const restaurantId = req.params.restaurantId;
    const menuName = req.params.menuName;
    const url = `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}/menus/${menuName}/short.json`;
    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving restaurant data');
    }
};
export const getFullMenu = async (req: express.Request, res: express.Response) => {
    const restaurantId = req.params.restaurantId;
    const menuName = req.params.menuName;
    const url = `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}/menus/${menuName}/full.json`;
    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving restaurant data');
    }
};