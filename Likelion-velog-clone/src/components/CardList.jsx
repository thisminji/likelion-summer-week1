//CardList.jsx
import styled from "styled-components";
import Card from "./Card";
import { dummyData } from "../data/dummy_data";

function CardList() {
  return (
    <CardGrid>
      {dummyData.map((item) => (
        <Card key={item.postID} item={item} />
      ))}
    </CardGrid>
  );
}

export default CardList;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); // 최소 카드 크기 제한
  gap: 24px;
  margin-top: 32px;

  max-width: 1080px;        // 헤더와 같은 너비 제한
  margin-left: auto;        
  margin-right: auto;
  padding: 0 24px;          // 좌우 여백 TabMenu와 맞춰서 유지 
  box-sizing: border-box;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); // 1800px: 3개
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr); // 1200px: 2개
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr); // 768px: 1개
  }
`;