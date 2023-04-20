import ResponsiveAppBar from "./ResponsiveAppBar";
import { itemList } from "./itemList";
import productImg from "../images/product image 1.png";
import "./Cart.css";
import { Button } from "@mui/material";
export default function Cart() {
  return (
    <div>
      <ResponsiveAppBar />
      <h1>Cart</h1>

      <ul className="cartItems">
        <li className="cartItem">
          <img src={productImg} alt="air jordan" width={"326px"} />
          <div className="cartItemDetails">
          <h3>Air Jordan 1</h3>
          <br /> <p>Price: $200</p>
          </div>
        </li>
      </ul>
      <p>Total Cart: $200</p>
      <Button variant="contained">Checkout</Button>
    </div>
  );
}
