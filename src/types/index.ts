export type CardSizeType = "sm" | "lg";

export type CompanyType = {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  account: number;
  contact: string;
  count: number;
};

export type ProductItemsItemType = "mug" | "shirt" | "all";

export type ProductItemType = {
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: ProductItemsItemType;
};

export type TagType = {
  name: string;
  count: number;
};

export type BasketItemType = {
  name: string;
  count: number;
  price: number;
};

export type BrandStateType = {
  brands:CompanyType[];
};

export type CompanyStateType = {
  allCompanies: CompanyType[];
};






