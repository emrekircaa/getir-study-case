import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { ShortingRadio } from "../components/ShortingRadio/ShortingRadio";
import { Input } from "../components/Input";
import { Checkbox } from "../components/Checkbox";
import { useAppDispatch } from "../hooks/useAppDistpatch";
import { useSelector } from "react-redux";
import { getAllCompanies, getBrands } from "../store/brands/brandSlice";
import { getFilteredProduct } from "../store/product/productSlice";
import { getTags } from "../store/tags/tagsSlice";
import { setFilter } from "../store/filter/filterSlice";
import { debounce } from "../utils/debounce";
import Skeleton from "../components/Checkbox/SkeletonComp";

const SORTING_OPTIONS = [
  { id: "priceLowToHigh", label: "Price low to high" },
  { id: "priceHighToLow", label: "Price high to low" },
  { id: "newToOld", label: "New to old" },
  { id: "oldToNew", label: "Old to new" },
];

export const SideMenu: React.FC = () => {
  const dispatch = useAppDispatch();

  const { allProduct: product } = useSelector((state: any) => state.product);
  const { brands, companies, isLoading } = useSelector(
    (state: any) => state.brand
  );
  const { tags } = useSelector((state: any) => state.tag);

  const [filteredBrands, setFilteredBrands] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [brandSelected, setBrandSelected] = useState("");
  const [tagSelected, setTagSelected] = useState("");
  const [searchTagTerm, setSearchTagTerm] = useState("");
  const filters = useSelector((store: any) => store.filter);

  useEffect(() => {
    if (companies && product && companies.length > 0 && product.length > 0) {
      dispatch(getBrands(product, companies));
      dispatch(getTags(product));
    }
  }, [product, companies, dispatch]);

  useEffect(() => {
    setFilteredBrands(brands);
    setFilteredTags(tags);
  }, [brands, tags]);

  const handleSetSelectedBrand = (brand: any) => {
    setBrandSelected(brand.slug);
    dispatch(setFilter({ ...filters, slug: brand?.slug, page: 1 }));
  };

  const handleSetSelectedTag = (tag: any) => {
    setTagSelected(tag.name);
    dispatch(setFilter({ ...filters, tag: tag?.name, page: 1 }));
  };

  const handleSearch = debounce((search: string) => {
    const filtered = brands.filter((item: any) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredBrands(filtered);
  }, 300);
  const handleTagSearch = debounce((search: string) => {
    const filtered = tags.filter((item: any) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTags(filtered);
  }, 300);

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    } else {
      setFilteredBrands(brands);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTagTerm) {
      handleTagSearch(searchTagTerm);
    } else {
      setFilteredTags(tags);
    }
  }, [searchTagTerm]);
  console.log(isLoading);
  return (
    <StyledSideMenu>
      <StyledSideMenuContent>
        <Card size="sm" title="Sorting">
          <ShortingRadio data={SORTING_OPTIONS} />
        </Card>
        <Card size="sm" title="Brands">
          <StyledInputWrapper>
            <Input
              placeHolder="Search brands"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </StyledInputWrapper>
          {isLoading ? (
            <Skeleton />
          ) : (
            <StyledCheckboxContent>
              {filteredBrands.length >= 1 &&
                filteredBrands.map((brand: any) => (
                  <Checkbox
                    label={brand.name}
                    count={brand.count}
                    onChange={() => {
                      handleSetSelectedBrand(brand);
                    }}
                    key={brand.name}
                    isChecked={brandSelected === brand.slug ? true : false}
                  />
                ))}
            </StyledCheckboxContent>
          )}
        </Card>
        <Card size="sm" title="Tags">
          <StyledInputWrapper>
            <Input
              placeHolder="Search Tags"
              value={searchTagTerm}
              onChange={e => setSearchTagTerm(e.target.value)}
            />
          </StyledInputWrapper>

          {isLoading ? (
            <Skeleton />
          ) : (
            <StyledCheckboxContent>
              {filteredTags.length >= 1 &&
                filteredTags.map((tag: any) => (
                  <Checkbox
                    label={tag.name}
                    count={tag.count}
                    onChange={() => {
                      handleSetSelectedTag(tag);
                    }}
                    key={tag.name}
                    isChecked={tagSelected === tag.name ? true : false}
                  />
                ))}
            </StyledCheckboxContent>
          )}
        </Card>
      </StyledSideMenuContent>
    </StyledSideMenu>
  );
};

export default SideMenu;

const StyledSideMenuContent = styled.div`
  height: auto;
  width: 100%;
  position: sticky;
  display: flex;
  flex-direction: column;
  top: 116px;
  gap: 24px;
  @media (max-width: 1023px) and (min-width: 960px) {
    flex-direction: row;
  }
  @media (max-width: 959px) {
    height: auto;
    max-width: 576px;
    width: 100%;
    padding: 16px;
    margin: auto;
  }
`;
const StyledSideMenu = styled.div`
  @media (max-width: 1023px) and (min-width: 960px) {
    display: flex;
    padding: 16px;
  }
`;
const StyledCheckboxContent = styled.div`
  height: 131px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 4px;
  overflow: auto;
`;
const StyledRadiosContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 24px;
  margin-right: 24px;
`;

const StyledInputWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  input {
    width: 100%;
  }
`;
