import React from "react";
import styled from "styled-components";
import { BasketItem } from "../components/BasketItem/BasketItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useAppDispatch } from "../hooks/useAppDistpatch";
import {
  increaseBasketItemQuantity,
  setBasketItemQuantity
} from "../store/cart/cartSlice";
import { colors } from "../theme";

export const Basket: React.FC = () => {
  const dispatch = useAppDispatch();

  const { isActive, basketList, totalPrice } = useSelector(
    (state: RootState) => state.basket
  );
  return (
    <StyledBasketList isActive={isActive}>
      <StyledBasketWrapper>
        <StyledBasketInnerWrapper>
          <StyledCounterWrapper>
            {basketList.length > 0
              ? basketList.map((item: any) => (
                  <BasketItem
                    key={item.name}
                    price={item.price}
                    name={item.name}
                    itemCount={item.count}
                    increase={() => dispatch(setBasketItemQuantity(item.name))}
                    decrease={() =>
                      dispatch(increaseBasketItemQuantity(item.name))
                    }
                  />
                ))
              : "No items in basket"}
          </StyledCounterWrapper>
          <StyledBasketPriceWrapper>
            <StyledBasketTotalPrice>
              ₺{totalPrice.toFixed(2)}
            </StyledBasketTotalPrice>
          </StyledBasketPriceWrapper>
        </StyledBasketInnerWrapper>
      </StyledBasketWrapper>
    </StyledBasketList>
  );
};

export default Basket;

const StyledBasketList = styled.div<{ isActive: boolean }>`
  width: 296px;
  @media (max-width: 1235px) {
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    position: ${({ isActive }) => (isActive ? "fixed" : "inherit")};
    right: ${({ isActive }) => (isActive ? "3px" : "0")};
    top: ${({ isActive }) => (isActive ? "80px" : "0")};
  }
`;

const StyledBasketListActive = styled.div`
  position: fixed;
  right: 3px;
  top: 80px;
`;

const StyledBasketWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: ${colors.primary};
  padding: 8px;
  position: sticky;
  top: 116px;
`;

const StyledBasketInnerWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledBasketPriceWrapper = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  justify-content: flex-end;
  display: flex;
  width: 100%;
`;

const StyledBasketTotalPrice = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 17px;
  padding-bottom: 17px;
  border: 2px solid ${colors.primary};
  display: block;
  width: auto;
  color: ${colors.primary};
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;

const StyledCounterWrapper = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 26px;
  max-height: 400px;
  overflow: auto;
`;
