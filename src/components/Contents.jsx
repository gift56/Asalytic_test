import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GraphQLClient, gql } from "graphql-request";
import * as ReactBootStrap from "react-bootstrap";
import { boxesdata } from "../data/boxData";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl6oxbn9i1cxu01szfsua6i6z/master"
);

const QUERY = gql`
  {
    boxes {
      id
      images {
        id
        url
      }
      title
      content
    }
  }
`;
const Contents = () => {
  const [boxes, setboxes] = useState([]);
  const [loading, setloading] = useState(false);

  const fecthBoxes = async () => {
    const { boxes } = await graphcms.request(QUERY);

    setboxes(boxes);
    setloading(true);
  };
  console.log(boxes);
  useEffect(() => {
    fecthBoxes();
  }, []);

  return (
    <ContentsContainer>
      <h2>
        List of Algorand Standard Assets <span>on ASAlytics</span>
      </h2>
      {loading ? (
        <div className="boxes">
          {boxes.map((box, id) => (
            <Card key={id}>
              <img src={box.images.url} alt="/" />
              <h3>{box.title}</h3>
              <button
                className={
                  box.content === "Available" ? "available" : "unavailable"
                }
              >
                {box.content}
              </button>
            </Card>
          ))}
          {boxesdata.map((box, index) => (
            <div key={index}>
              <Card>
                <img src={box.img} alt="/" />
                <h3>{box.title}</h3>
                <button
                  className={
                    box.btnText === "Available" ? "available" : "unavailable"
                  }
                >
                  available
                </button>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <ReactBootStrap.Spinner animation="border" />
        </div>
      )}
    </ContentsContainer>
  );
};

export default Contents;

const ContentsContainer = styled.section`
  width: 90%;
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
  @media screen and (max-width: 1422px) {
    .boxes {
      gap: 1rem;
      row-gap: 3rem;
    }
  }
  @media screen and (max-width: 1272px) {
    .boxes {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 972px) {
    .boxes {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 762px) {
    h2 {
      font-size: 20px;
      text-align: center;
    }
    .boxes {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
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
  @media screen and (max-width: 1422px) {
    width: 280px;
  }
  @media screen and (max-width: 762px) {
    width: 100%;
  }
`;
