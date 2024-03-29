import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  // console.log(stars, reviews);

  // <span>
  //   {stars >= 1 ? <BsStarFill /> : stars >= 0.5 ? <BsStarHalf /> : <BsStar />}
  // </span>;
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const fillNum = index + 1;
    const halfNum = index + 0.5;
    return (
      <span key={index}>
        {stars >= fillNum ? (
          <BsStarFill />
        ) : stars >= halfNum ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  // console.log(tempStars);
  return (
    <Wrapper>
      <div className="stars">{tempStars}</div>
      <div className="reviews">({reviews} customer reviews)</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
