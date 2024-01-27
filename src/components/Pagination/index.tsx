/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import * as styles from "./styles";
import RightArrow from "../../assets/icons/RightArrow";
import LeftArrow from "../../assets/icons/LeftArrow";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageCount: number; // total page count
  selectedPageIndex?: number; // currently selected page index
  onSelectedPageIndexChange: () => void; // function to invoke on selecting new pagination page
}

export const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  selectedPageIndex = 0,
  onSelectedPageIndexChange,
  ...rest
}) => {
  const handlePageClick = () => onSelectedPageIndexChange();

  const getLabel = React.useCallback((isNextPage: boolean) => {
    return (
      <styles.StyledLabel>
        {isNextPage ? "" : <RightArrow />}
        <styles.StyledLabelText>
          {isNextPage ? "Next" : "Prev"}
        </styles.StyledLabelText>
        {isNextPage ? <LeftArrow /> : ""}
      </styles.StyledLabel>
    );
  }, []);

  return (
    <styles.PaginationContainer data-testid="pagination">
      <ReactPaginate
        nextLabel={getLabel(true)}
        breakLinkClassName="rp-break-link"
        pageClassName="rp-page"
        breakClassName="rp-break"
        onPageChange={handlePageClick}
        selectedPageRel="active"
        pageRangeDisplayed={3}
        pageLinkClassName="rp-link"
        pageCount={pageCount}
        previousLabel={getLabel(false)}
        forcePage={selectedPageIndex}
        {...rest}
      />
    </styles.PaginationContainer>
  );
};
