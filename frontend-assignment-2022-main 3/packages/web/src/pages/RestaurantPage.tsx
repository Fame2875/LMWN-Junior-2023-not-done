import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {ShortMenu} from '../../../api-gateway/controllers/types'
import {StoreItem} from '../components/StoreItem'

export function RestaurantPage(){
  const {restaurantId} = useParams();
  const [menus, setRestaurant] = useState<Array<ShortMenu>>();
  const [loading, setLoading] = useState(true);
  const fetchData =async () => {
      try {
          const response = await axios.get(`http://localhost:3001/restaurant/${restaurantId}/menus`);
          setRestaurant(response.data);
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
          <h1 className="mt-3">รายการอาหาร</h1>
          <Row md={2} xs={1} lg={3} className="g-3">
            {menus && menus.map((menu,index) => (
              <Col key={index}>
                <StoreItem menu ={menu} />
              </Col>
            ))}
          </Row>
        </>
    )
}

