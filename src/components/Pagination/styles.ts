import styled from "styled-components";
import { colors } from "../../theme";

export const PaginationContainer = styled.div`
  margin-top: 32px;
  ul {
    display: flex !important;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    .previous,
    .next {
      width: auto !important;
      &.disabled {
        div,
        a {
          color: ${colors.gray500} !important;
        }
        path {
          fill: ${colors.gray500} !important;
        }
      }
      div,
      a {
        color: ${colors.primary} !important;
      }
      path {
        fill: ${colors.primary} !important;
      }
    }
    .rp-page {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 40px;
      color: ${colors.gray500};
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px;
      cursor: pointer;
      &.selected {
        background-color: ${colors.primary};
        border-radius: 2px;
        color: #fff;
      }
    }
  }
`;

export const StyledLabelText = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  margin: 0 7px;
`;
export const StyledLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: black;
  svg {
    fill: black;
  }

  &:hover {
    cursor: pointer;
    color: black;

    svg {
      fill: black;
    }
  }
`;
