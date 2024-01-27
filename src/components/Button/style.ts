import styled from "styled-components";
import { colors } from "../../theme";

export const StyledButton = styled.button`
  width: 100%;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  border: none;
  cursor: pointer;
  background-color: ${colors.primary};
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;
