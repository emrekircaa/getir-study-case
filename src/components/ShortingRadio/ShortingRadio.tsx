import React, { useState, memo } from "react";
import styled from "styled-components";
import Tick from "../../assets/icons/Tick";
import { colors } from "../../theme";

interface ShortingRadioProps {
  selectedOptionId?: any;
  item: any
  handleClick?: () => void
}
export const ShortingRadio: React.FC<ShortingRadioProps> = (
  ({ selectedOptionId, item, handleClick }) => {

    return (
      <StyledRadioWrapper
        onClick={handleClick}
        key={item.id}
        data-testid={`radio-${item.id}`}
      >
        <StyledRadio checked={item.id === selectedOptionId}>
          {item.id === selectedOptionId && <Tick />}
        </StyledRadio>
        <StyledRadioLabel>{item.label}</StyledRadioLabel>
      </StyledRadioWrapper>
    );
  }
);

const StyledRadiosContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 24px;
  margin-right: 24px;
`;

const StyledRadioWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledRadio = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: white;
  border: 2px solid
    ${({ checked }) => (checked ? `${colors.primary}` : `${colors.dirtyWhite}`)};
  transition: 0.2s all;
`;

const StyledRadioLabel = styled.div`
  letter-spacing: 0.16px;
  font-size: 14px;
  line-height: 18px;
  margin-left: 12px;
  color: ${colors.gray500};
`;
