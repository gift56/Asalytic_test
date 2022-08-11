import React from "react";
import styled from "styled-components";

const Contents = () => {
  return (
    <ContentsContainer>
      <h2>
        List of Algorand Standard Assets <span>on ASAlytics</span>
      </h2>
    </ContentsContainer>
  );
};

export default Contents;

const ContentsContainer = styled.section`
  width: 1410px;
  margin: 40px auto;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  h2 {
    color: #000000;
    font-weight: 500;
    font-size: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      display: block;
    }
  }
`;
