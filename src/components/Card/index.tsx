import React from "react";
import styled from "styled-components";
import { CardSizeType } from "../../types";
import { getCardWidth } from "../../utils/cardSize";
import { colors } from "../../theme";

interface CardProps {
  title: string; // title of the card
  size: CardSizeType; // size of the card
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, size, title }) => {
  return (
    <StyledCardContainer>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCard data-testid="card-item-container" size={size}>
        {children}
      </StyledCard>
    </StyledCardContainer>
  );
};

const StyledCardContainer = styled.div``;
const StyledCard = styled.div<{ size: CardSizeType }>`
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  padding-top: 24px;
  padding-bottom: 24px;
  width: ${({ size }) => getCardWidth(size)};
  background-color: white;
  gap: 17px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  input {
    display: block;
    position: relative;
    width: 100%;
  }
  @media (max-width: 1023px) and (min-width: 960px) {
    height: 244px;
  }
  @media (max-width: 959px) {
    height: auto;
    max-width: 576px;
    width: 100%;
  }
`;
const StyledCardTitle = styled.div`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: ${colors.gray500};
`;
