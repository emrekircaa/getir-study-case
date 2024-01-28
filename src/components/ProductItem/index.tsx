import React, { memo } from "react";
import styled from "styled-components";
import { colors } from "../../theme";
import { Button } from "../Button";
import defaultImage from "../../assets/image/defaultImage.png";
interface ProductItem {
  price: number;
  name: string;
  onAddButtonClick: () => void;
}

export const ProductItem: React.FC<ProductItem> = memo(
  ({ price, name, onAddButtonClick }) => {
    return (
      <StyledProductItemCard data-testid="ProductItem">
        <StyledImageWrapper>
          <img src={defaultImage} alt={name} />
        </StyledImageWrapper>
        <StyledProductItemTextContainer>
          <StyledPriceText>
            <span>₺</span> {price.toFixed(2)}
          </StyledPriceText>
          <StyledNameText>{name}</StyledNameText>
        </StyledProductItemTextContainer>

        <Button onClick={() => onAddButtonClick()}>Add</Button>
      </StyledProductItemCard>
    );
  }
);

const StyledProductItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledProductItemCard = styled.div`
  width: 124px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 425px) {
    width: 46%;
  }
  @media (max-width: 360px) {
    width: 100%;
  }
`;
const StyledImageWrapper = styled.div`
  height: 124px;
  width: 124px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 12px;
  background-color: #fefefe;
  border: 1.18px solid #f3f0fe;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const StyledPriceText = styled.div`
  font-weight: 700;
  font-size: 14px;
  height: 23px;
  color: ${colors.primary};
  text-align: left;

  span {
    font-weight: 400;
  }
`;
const StyledNameText = styled.div`
  font-weight: 600;
  display: -webkit-box;
  width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 40px;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  color: ${colors.gray700};
`;
