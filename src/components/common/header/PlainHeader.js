import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PlainHeader = () => {
  return (
    <Styled.PlainHeader>
      <div className="main__header">
        <NavLink to="/" className="header__list an">
          Home
        </NavLink>
        <NavLink to="/about" className="header__list an">
          About
        </NavLink>
      </div>
    </Styled.PlainHeader>
  );
};
const Styled = {
  PlainHeader: styled.div`
    .main__header {
      padding: 5px;
      border-bottom: 1px solid #ccc;
    }
    .header__list {
      &.an {
        display: inline-block;
        padding: 5px;
        text-decoration: none;
        color: black;
        &:hover {
          color: blue;
          text-decoration: underline;
        }
      }
    }
  `,
};

export default PlainHeader;
