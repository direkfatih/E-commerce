import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const CartItem = ({ cartItem }) => {
  const { removeFromCart } = useContext(CartContext);

  const subTotal = (cartItem.price * cartItem.quantity).toFixed(2);

  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src={cartItem.img[0]} alt="" />
        <i
          className="bi bi-x delete-cart"
          onClick={() => removeFromCart(cartItem._id)}
        ></i>
      </td>
      <td>{cartItem.name}</td>
      <td>{cartItem.price ? cartItem.price.toFixed(2) : "N/A"}₺</td>
      <td className="product-quantity">{cartItem.quantity}</td>
      <td className="product-subtotal">{subTotal}₺</td>
    </tr>
  );
};

export default CartItem;

CartItem.propTypes = {
  cartItem: PropTypes.object,
};
