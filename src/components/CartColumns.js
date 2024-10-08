import React from "react";
import styled from "styled-components";

const CartColumns = () => {
  return (
    <Wrapper>
      <div className="content">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
      </div>
      <hr className="hr"/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .content {
    margin-top: 3em;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1em;
    h5 {
      font-weight: 400;
      font-size: 16px;
    }
  }
  @media (max-width: 776px) {
    .content, .hr {
      display: none;
    }
  }
`;

export default CartColumns;
