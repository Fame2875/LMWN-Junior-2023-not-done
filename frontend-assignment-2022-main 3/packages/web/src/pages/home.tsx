import { Col, Container, Row } from "react-bootstrap";
import storeItems from '../mockData/items.json'
import {Stores} from '../components/Stores'
import { StoreItem } from "../components/StoreItem";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Restaurant} from '../../../api-gateway/controllers/types'
import { useEffect, useState } from "react";

export function Home(){
    const {restaurantId} = useParams();
    const [restaurants, setRestaurant] = useState<Array<Restaurant>>();
    const [loading, setLoading] = useState(true);
    const fetchData =async () => {
        try {
            const response = await axios.get(`http://localhost:3001/restaurant/567051`);
            const response2 = await axios.get(`http://localhost:3001/restaurant/227018`);
            setRestaurant([response.data,response2.data]);

            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() =>{
        fetchData();},[]
        );
    return (
        <>
          <h1 className="mt-3">เลือกร้านอาหารที่คุณชอบ</h1>
          <Row md={2} xs={1} lg={3} className="g-3">
            {restaurants &&restaurants.map(restaurant => (
              <Col key={restaurant.id}>
                <Stores restaurant={restaurant} />
              </Col>
            ))}
          </Row>
        </>
    )
}

