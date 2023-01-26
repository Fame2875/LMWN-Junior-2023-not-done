import createServer from "../utils/server";
import request from "supertest";
import { stringify } from "querystring";
import { Restaurant } from './../../types/index';
import * as result from './result/index'

const app = createServer();

describe("Test All API End Points", () => {

  describe("GET /reataurants/ ==> (getAllRestaurants)", () => {
    describe(" Given the server is not down.", () => {
      it("Should return 200 and an Array", async () => {
        const { body, statusCode } = await request(app)
          .get("/restaurants/")
          .expect(200);
        expect(statusCode).toBe(200);
        expect(body).toBeInstanceOf(Array);
      });
    });
  });

  describe("GET /restaurants/:restaurantId ==> (getRestaurantById)", () => {
    describe("Given the restaurant does not exist", () => {
      it("Should return 404", async () => {
        const restaurantId = "999999";
        await request(app).get(`/restaurants/${restaurantId}`).expect(404);
      });
    });

    describe("Given the restaurant does exist", () => {

      it("Should return 200 and a Restaurant Object [1]", async () => {
        const restaurantId = "567051";
        const { body, statusCode } = await request(app).get(
          `/restaurants/${restaurantId}`
        );
        expect(statusCode).toBe(200);
        expect(body).toEqual(result.res_567051);
      });

      it("Should return 200 and a Restaurant Object [2]", async () => {
        const restaurantId = "227018";
        const { body, statusCode } = await request(app).get(
          `/restaurants/${restaurantId}`
        );
        expect(statusCode).toBe(200);
        expect(body).toEqual(result.res_227018);
      });

    });

  });
  
  describe("GET /restaurants/:restaurantId/menus ==> (getAllResMenu)", () => {

    describe("Given the restaurant does not exist", () => {
      it("Should return 404", async () => {
        const restaurantId = "999999";
        await request(app).get(`/restaurants/${restaurantId}/menus`).expect(404);
      });
    });

    describe("Given the restaurant does exist", () => {
      it("Should return 200 and an Array [1]", async () => {
        const restaurantId = "567051";
        const { body, statusCode } = await request(app).get(
          `/restaurants/${restaurantId}/menus`
        );
        expect(statusCode).toBe(200);
        expect(body).toBeInstanceOf(Array)
      });

      it("Should return 200 and an Array [2]", async () => {
        const restaurantId = "227018";
        const { body, statusCode } = await request(app).get(
          `/restaurants/${restaurantId}/menus`
        );
        expect(statusCode).toBe(200);
        expect(body).toBeInstanceOf(Array)
      });
    });

  });

  describe("GET /restaurants/:restaurantId/menus/m?name={} ==> (getSpecificMenu)", () => {

    describe("Given the restaurant does not exist", () => {
      it("Should return 404", async () => {
        const restaurantId = "999999";
        const menuName = "Wakyu A5 Steak"
        await request(app).get(`/restaurants/${restaurantId}/menus/m?name=${menuName}`).expect(404);
      });
    });

    describe("Given the restaurant does exist but menu does not exist", () => {
      it("Should return 404 [1]", async () => {
        const restaurantId = "567051";
        const menuName = "Wakyu A5 Steak"
        await request(app).get(`/restaurants/${restaurantId}/menus/m?name=${menuName}`).expect(404);
      });

      it("Should return 404 [2]", async () => {
        const restaurantId = "227018";
        const menuName = "Wakyu A5 Steak"
        await request(app).get(`/restaurants/${restaurantId}/menus/m?name=${menuName}`).expect(404);
      });
    });

    describe("Given both restaurant and menu do exist", () => {
      it("Should return 200 with Object of that menu [1]", async () => {
        const restaurantId = "567051";
        let menuName = "ข้าวผัดปลาทู"
        menuName = encodeURIComponent(menuName)
        ///restaurants/567051/menus/m?name=ข้าวผัดปลาทู
        const {body, statusCode} = await request(app).get(`/restaurants/${restaurantId}/menus/m?name=${menuName}`);

        expect(statusCode).toBe(200)
        expect(body).toEqual(result.menu_1);
      });

      it("Should return 200 with Object of that menu [2]", async () => {
        const restaurantId = "227018";
        let menuName = "อะไรก็ได้ ง่ายๆ"
        menuName = encodeURIComponent(menuName)
        ///restaurants/227018/menus/m?name=อะไรก็ได้ ง่ายๆ
        const {body, statusCode} = await request(app).get(`/restaurants/${restaurantId}/menus/m?name=${menuName}`);

        expect(statusCode).toBe(200)
        expect(body).toEqual(result.menu_2);
      });
    });

  });


});
