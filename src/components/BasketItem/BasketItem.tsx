import React from "react";
import styled from "styled-components";
import Minus from "../../assets/icons/Minus";
import { StyledButton } from "../Button/style";
import Impluse from "../../assets/icons/Impluse";
import { colors } from "../../theme";

interface BasketItemProps {
  name: string; // name of the counter item
  price: number; // price of the counter item
  itemCount: number; // current item count of the counter item
  increase: () => void;
  decrease: () => void;
}
export const BasketItem: React.FC<BasketItemProps> = ({
  name,
  price,
  itemCount,
  increase,
  decrease,
}) => {
  return (
    <StyledBasketItemContainer data-testid="basket-item-container">
      <StyledProduct>
        <StyledProductName>{name}</StyledProductName>
        <StyledProductPrice>₺{price}</StyledProductPrice>
      </StyledProduct>
      <StyledCounter>
        <StyledCountActionButton
          data-testid="decrease-button"
          onClick={() => decrease()}
        >
          <Minus />
        </StyledCountActionButton>
        <StyledCount>{itemCount}</StyledCount>
        <StyledCountActionButton
          data-testid="increase-button"
          onClick={() => increase()}
        >
          <Impluse />
        </StyledCountActionButton>
      </StyledCounter>
    </StyledBasketItemContainer>
  );
};

export const StyledBasketItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1.02px solid ${colors.gray50};
  padding-bottom: 18px;
  padding-top: 18px;
  &:first-child {
    padding-top: 0px;
  }
`;
export const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const StyledProductName = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${colors.gray700};
`;

export const StyledProductPrice = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  line-break: break-word;
  color: ${colors.primary};
`;

export const StyledCounter = styled.div`
  display: flex;
  width: 74px;
  height: 32.7px;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  margin-right: 7px;
`;

export const StyledCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  background-color: ${colors.primary};
  color: white;
`;

export const StyledCountActionButton = styled(StyledButton)`
  background-color: transparent !important;
  width: auto !important;
`;
