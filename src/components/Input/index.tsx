import React, { memo } from "react";
import styled from "styled-components";
import { colors } from "../../theme";

interface InputProps {
  placeHolder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = memo(
  ({ placeHolder, value, onChange }) => {
    return (
      <StyledInput
        data-testid="input"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    );
  }
);

const StyledInput = styled.input`
  border: 2px solid #e0e0e0;
  border-radius: 2px;
  padding: 12px 16px;
  height: 48px;
  outline: none;
  width: 100%;
  font-family: "Inter", sans-serif;

  &::placeholder {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.15px;
  }
`;
