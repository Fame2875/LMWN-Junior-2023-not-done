import { Button, Card } from "react-bootstrap"
import useThaiTime from './useThaiTime'
import { Link, useNavigate } from "react-router-dom";
import {Restaurant} from '../../../api-gateway/controllers/types'
import { FC } from "react"
import "./Stores.css"
type StoreItemProps = {
  restaurant: Restaurant
}

export const Stores : FC<StoreItemProps> = ({restaurant}) =>{
     const thaiTime = useThaiTime();
     const navigate = useNavigate();
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={restaurant.coverImage}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
       เปิด {restaurant.activeTimePeriod.open} - ปิด {restaurant.activeTimePeriod.close}<Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{restaurant.name}</span>
          {thaiTime}
        </Card.Title>
        <div className="mt-auto">
            <Link to = {`/store/${restaurant.id}`} className="button "style={{
              background : "LimeGreen" }} >
              เข้าร้าน
            </Link>
        </div>
      </Card.Body>
    </Card>
  )
}