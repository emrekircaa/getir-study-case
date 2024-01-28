import React, { useState, memo } from "react";
import styled from "styled-components";
import Tick from "../../assets/icons/Tick";
import { colors } from "../../theme";
import { useAppDispatch } from "../../hooks/useAppDistpatch";
import { useSelector } from "react-redux";
import { setFilter } from "../../store/filter/filterSlice";

type data = {
  id: string;
  label: string;
};
interface ShortingRadioProps {
  data?: data[];
  onSelectedRadioChange?: any;
  selectedOptionId?: boolean;
}
export const ShortingRadio: React.FC<ShortingRadioProps> = memo(
  ({ data, onSelectedRadioChange, selectedOptionId }) => {
    const [selectedRadioId, setSelectedRadioId] = useState(selectedOptionId);
    const dispatch = useAppDispatch();
    const filters = useSelector((store: any) => store.filter);

    const handleClick = (id: any) => {
      setSelectedRadioId(id);
      if (onSelectedRadioChange) onSelectedRadioChange(id);
      dispatch(setFilter({ ...filters, sort: id, page: 1 }));
    };
    return (
      <StyledRadiosContent>
        {data &&
          data.length > 0 &&
          data.map((item: any) => (
            <StyledRadioWrapper
              onClick={() => handleClick(item.id)}
              key={item.id}
              data-testid={`radio-${item.id}`}
            >
              <StyledRadio checked={item.id === selectedRadioId}>
                {item.id === selectedRadioId && <Tick />}
              </StyledRadio>
              <StyledRadioLabel>{item.label}</StyledRadioLabel>
            </StyledRadioWrapper>
          ))}
      </StyledRadiosContent>
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
