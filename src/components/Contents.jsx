import React from "react";
import styled from "styled-components";
import { boxes } from "../data/boxData";

const Contents = () => {
  return (
    <ContentsContainer>
      <h2>
        List of Algorand Standard Assets <span>on ASAlytics</span>
      </h2>
      <div className="boxes">
        {boxes.map((box, index) => (
          <Card key={index}>
            <img src={box.img} alt="/" />
            <h3>{box.title}</h3>
            <button
              className={
                box.btnText === "Available" ? "available" : "unavailable"
              }
            >
              {box.btnText}
            </button>
          </Card>
        ))}
      </div>
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
  .boxes {
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 185px;
  border: 1px solid #b7becc;
  border-radius: 10px;
  .available {
    background: #6fd791;
    border: 1px solid #6fd791;
  }
  .unavailable {
    background: #bc3131;
    border: 1px solid #bc3131;
  }
  h3 {
    color: #000000;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
  }
  button {
    border: 1px solid;
    border-radius: 8px;
    padding: 4px 8px;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
  }
`;
