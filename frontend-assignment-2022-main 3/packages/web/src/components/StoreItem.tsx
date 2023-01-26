import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import {ShortMenu} from '../../../api-gateway/controllers/types'
import { FC } from "react"
type StoreItemProps = {
  menu: ShortMenu
}

export const StoreItem : FC<StoreItemProps> = ({menu}) =>{
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={menu.thumbnailImage}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
       <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{menu.name}</span>
          <span className="ms-2 text-muted">{formatCurrency(menu.fullPrice)}</span>
        </Card.Title>
        <div className="mt-auto">
          
            <Button className="w-100"style={{
              background : "LimeGreen"}} onClick={() => console.log("")}>
              ซื้อ
            </Button>

        </div>
      </Card.Body>
    </Card>
  )
}
