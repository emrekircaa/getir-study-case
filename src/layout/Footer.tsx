import React from "react";
import styled from "styled-components";
import { colors } from "../theme";

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <span>©2019 Market</span>
      <span>•</span>
      <span>Privacy Policy</span>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  margin-top: 136px;
  gap: 1rem;
  color: ${colors.primary};
  font-size: 13px;
`;
