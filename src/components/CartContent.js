import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import {
  CartColumns,
  CartItems,
  CartTotals,
  StripeCheckout,
} from "../components";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper>
      <CartColumns />
      {cart.map((item) => {
        return <CartItems key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="btn">
          Continue shopping
        </Link>
        <button type="button" className="clear-btn" onClick={clearCart}>
          Clear shopping Cart
        </button>
      </div>
      <div className="calc">
        <CartTotals />
        {cart.length < 1 ? (
          <div className="empty">
            <h2>your cart is empty</h2>
            <Link to="/products" className="btn">
              Fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2em;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2em;

  .link-container {
    display: flex;
    gap: 1em;
    justify-content: space-between;
    .clear-btn {
      border: none;
      background-color: transparent;
      color: black;
      text-decoration: underline;
      font-size: 1em;
      cursor: pointer;
    }
  }

  .calc {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    margin-top: 6em;
  }

  @media (max-width: 776px) {
    .btn {
      font-size: 0.7em;
    }
    .calc {
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 1300px) {
    .calc {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default CartContent;
