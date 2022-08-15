import React from "react";
import Logo from "../Images/logo.png";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderCon>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <button>ANALYZE ASAs</button>
    </HeaderCon>
  );
};

export default Header;

const HeaderCon = styled.header`
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: #000000 !important;
    color: #fff !important;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: 3s;
    &:hover {
      opacity: 0.8;
    }
  }
  @media screen and (max-width: 462px) {
    div{
      width: 50%;
    }
    img {
      width: 100%;
    }
    button {
      padding: 10px 10px;
      font-size: 12px;
    }
  }
`;
