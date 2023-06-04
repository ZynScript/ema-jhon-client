import React from "react";
import "./ReviewItem.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({product, handleRemoveFromCart}) => {
  const {img, id, name, quantity, price} = product;
  return (
    <div className="review-item">
      <div className="review-details">
        <img src={img} />
        <div>
          <h4>{name}</h4>
          <h5>
            Price: <span className="highlight-orange">${price}</span>
          </h5>
          <h5>
            Quantity: <span className="highlight-orange">{quantity}</span>
          </h5>
        </div>
      </div>

      <button onClick={() => handleRemoveFromCart(id)} className="btn-delete">
        <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewItem;
