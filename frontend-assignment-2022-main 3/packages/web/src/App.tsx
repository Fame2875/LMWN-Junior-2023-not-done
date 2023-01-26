
import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/home"
import { RestaurantPage } from "./pages/RestaurantPage"
import { About } from "./pages/about"
import {Navbar} from './components/Navbar'
import "./index.css"
function App() {
  return (
    <>
    <Navbar />
    <Container className ="nb-4">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store/:restaurantId" element={<RestaurantPage />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </Container>
    </>
  )
}

export default App
