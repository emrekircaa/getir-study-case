import { render, fireEvent } from "@testing-library/react";
import { ProductItem } from "../../ProductItem";
import React from "react";

describe("ProductItem component", () => {
  it("renders with correct props", () => {
    const onAddButtonClick = jest.fn();
    const { getByTestId } = render(
      <ProductItem
        price={10.99}
        name="Product A"
        onAddButtonClick={onAddButtonClick}
      />
    );
    const productItem = getByTestId("ProductItem");
    expect(productItem).toMatchSnapshot();
  });

  it("calls onAddButtonClick when Add button is clicked", () => {
    const onAddButtonClick = jest.fn();
    const { getByRole } = render(
      <ProductItem
        price={10.99}
        name="Product A"
        onAddButtonClick={onAddButtonClick}
      />
    );

    const addBtn = getByRole("button");
    fireEvent.click(addBtn);
    expect(onAddButtonClick).toBeCalledTimes(1);
  });
});
