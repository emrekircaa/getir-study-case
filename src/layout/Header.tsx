import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Logo from "../assets/icons/Logo";
import BasketH from "../assets/icons/BasketH";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { colors } from "../theme";
import { useAppDispatch } from "../hooks/useAppDistpatch";
import { setActiveBasket } from "../store/basket/cartSlice";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isActive, totalPrice } = useSelector(
    (state: RootState) => state.basket
  );

  const headerRef = useRef<HTMLDivElement>(null);
  // Add an event listener to handle clicks outside the Header component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        // Clicked outside the Header component
        dispatch(setActiveBasket(false));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <StyledHeader ref={headerRef}>
      <StyledHeaderWrapper>
        <StyledLogoWrapper>
          <Logo />
        </StyledLogoWrapper>
        <StyledBasketWrapper
          onClick={() => dispatch(setActiveBasket(!isActive))}
        >
          <BasketH></BasketH>
          <StyledBasketPrice>
            <span>₺</span> {totalPrice.toFixed(2)}
          </StyledBasketPrice>
        </StyledBasketWrapper>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 76.64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${colors.primary};
`;

const StyledHeaderWrapper = styled.div`
  width: 100%;
  max-width: 1232px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media (max-width: 1235px) {
    justify-content: flex-start;
    padding: 16px;
  }
`;
const StyledLogoWrapper = styled.div`
  cursor: pointer;
`;
const StyledBasketWrapper = styled.div`
  position: absolute;
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  right: 0px;
  gap: 8px;
  background-color: ${colors.primaryDark};
  @media (max-width: 1235px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
const StyledBasketPrice = styled.div`
  color: ${colors.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.16px;
`;
