import React from "react";
import styled from "styled-components";
import Tick from "../../assets/icons/Tick";
import { colors } from "../../theme";

interface CheckboxProps {
  onChange: () => void;
  isChecked: boolean;
  label: string;
  count: number;
}
export const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  isChecked,
  label,
  count,
}) => {
  return (
    <StyledCheckboxContainer
      data-testid="checkbox-container"
      onClick={() => onChange()}
    >
      <StyledCheckbox checked={isChecked}>
        <Tick color="#fff" />
      </StyledCheckbox>
      <StyledCheckboxLabel title={`${label} (${count})`}>
        <StyledCheckboxLabelText>{label}</StyledCheckboxLabelText>
        <StyledCheckboxCount> (1)</StyledCheckboxCount>
      </StyledCheckboxLabel>
    </StyledCheckboxContainer>
  );
};

const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16.61px;
  &:hover {
    cursor: pointer;
  }
  &:last-child {
    margin-bottom: 0px;
  }
`;
const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ checked }) =>
    checked ? `${colors.gray500}` : `${colors.white}`};
  box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
  border-radius: 2px;
  height: 22px;
  width: 22px;
  transition: all 0.2s;
`;

const StyledCheckboxLabel = styled.div`
  margin-left: 8px;
  display: flex;
  width: 200px;
`;
const StyledCheckboxLabelText = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${colors.gray600};
`;

const StyledCheckboxCount = styled.span`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${colors.gray600};
  margin-left: 4px;
`;
