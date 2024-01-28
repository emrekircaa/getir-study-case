import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ProductItem } from "../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDistpatch";
import { Pagination } from "../components/Pagination";
import {
  getAllProduct,
  getFilteredProduct,
} from "../store/product/productSlice";
import Skeleton from "../components/ProductItem/SketelonComp";
import { setBasketList } from "../store/cart/cartSlice";
import { StyledButton } from "../components/Button/style";
import { colors } from "../theme";
import { getAllCompanies } from "../store/brands/brandSlice";
import { setFilter } from "../store/filter/filterSlice";

const ITEM_TYPES: any[] = [
  { id: "all", label: "All" },
  { id: "mug", label: "Mug" },
  { id: "shirt", label: "Shirt" },
];

export const Product: React.FC = () => {
  const { filteredProduct: product, isLoading } = useSelector(
    (store: any) => store.product
  );
  const filters = useSelector((store: any) => store.filter);
  const [selectedType, setSelectedType] = useState<string>("all");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCompanies());
  }, []);
  console.log(filters)
  useEffect(() => {
    if (filters) {
      dispatch(getFilteredProduct(filters));
    }
  }, [dispatch, filters]);

  useEffect(() => {
    if (selectedType) {
      dispatch(getAllProduct({ itemType: selectedType }));
    }
  }, [filters]);

  const handleAddToCart = (product: any) => {
    dispatch(setBasketList(product));
  };
  const handleButtonClick = (buttonId: string) => {
    setSelectedType(buttonId);
    dispatch(setFilter({ ...filters, itemType: buttonId, page: 1 }));
  };
  const handlePageClick = (event: any) => {
    const pageNumber: number = event.selected + 1;
    dispatch(setFilter({ ...filters, page: pageNumber }));
  };
  return (
    <StyledProduct>
      <ProductList>
        <StyledProductTitle>Products</StyledProductTitle>
        <StyledButtonGroup>
          {ITEM_TYPES.map((button: any, index: number) => (
            <StyledButtons
              key={button.id}
              isSelected={button.id === selectedType}
              onClick={() => handleButtonClick(button.id)}
            >
              {button.label}
            </StyledButtons>
          ))}
        </StyledButtonGroup>
        {!isLoading ? (
          <>
            <StyledProductContent>
              {product.data &&
                product.data.length > 0 &&
                product.data?.map((product: any, index: number) => (
                  <ProductItem
                    key={index}
                    price={product.price}
                    name={product.name}
                    onAddButtonClick={() => handleAddToCart(product)}
                  />
                ))}
            </StyledProductContent>
          </>
        ) : (
          <StyledProductContent>
            {Array.from({ length: 16 }).map((_, i) => (
              <Skeleton key={`skeleton-${i}`} />
            ))}
          </StyledProductContent>
        )}
      </ProductList>
      <Pagination
        pageCount={Math.ceil(product.totalItems / 16)}
        selectedPageIndex={filters.page - 1}
        handlePageClick={e => handlePageClick(e)}
      />
    </StyledProduct>
  );
};

export default Product;
const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const StyledProduct = styled.div`
  @media (max-width: 1235px) {
    padding: 16px;
    box-sizing: border-box;
  }
  @media (max-width: 959px) {
    height: auto;
    max-width: 576px;
    width: 100%;
    padding: 16px;
    margin: auto;
  }
`;
const StyledProductContent = styled.div`
  box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  padding: 20px;
  max-width: 608px;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  justify-content: center;
  background-color: white;
  flex-wrap: wrap;
  gap: 24px;
  @media (max-width: 1235px) and (min-width: 1024px) {
    width: 100%;
    max-width: 500px;
    padding: 10px;
  }
  @media (max-width: 1023px) and (min-width: 960px) {
    max-width: 100%;
  }
  @media (min-width: 1235px) {
    width: 608px;
  }
`;
const StyledProductTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: gray;
`;
const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const StyledButtons = styled(StyledButton) <{ isSelected?: boolean }>`
  height: 30px;
  padding: 0 16px;
  width: auto;
  font-size: 13px;
  line-height: 18px;
  background-color: ${({ isSelected }) =>
    isSelected ? `${colors.primary}` : `${colors.dirtyWhite}`};
  color: ${({ isSelected }) =>
    isSelected ? `${colors.dirtyWhite}` : `${colors.primary}`};
`;
