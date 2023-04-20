import { useParams } from "react-router-dom";
import { itemList } from "./itemList";
import HalfRating from "./HalfRating";
import Comment from "./Comment";
import Rate from "./Rate";
import "./Details.css";
import ResponsiveAppBar from "./ResponsiveAppBar";
import TextField from "@mui/material/TextField";

export default function Details() {
  let { productId } = useParams();
  const item = itemList[productId];
  const reviews = item.reviews;
  return (
    <div>
      <ResponsiveAppBar />
      <h1>{itemList[productId].name}</h1>
      <div className="parent">
        <div className="container1">
          <img
            src={itemList[productId].image}
            className="display"
            alt="product"
          />
          <div>
            <h2 style= {{marginTop : "3%"}}>Product Description</h2>
            <h3>Price ${itemList[productId].price}</h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <HalfRating />
            </div>
            <p>
              {" "}
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <br />
        <div className="reviewSection">
          <ul className="reviews">
            {reviews.map((com) => {
              return (
                <li key={com.id}>
                  <h3 className="Name">{com.name}</h3>
                  <p>{com.rating}</p>
                  <p className="comment">{com.comment}</p>
                </li>
              );
            })}
          </ul>
          <div className="createReview">
          <Rate />
          <TextField fullWidth label="Write a review" id="fullWidth" />
          <button className="btn">Submit</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
