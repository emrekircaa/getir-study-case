import { render, fireEvent } from "@testing-library/react";
import { BasketItem } from "../../BasketItem/BasketItem";

describe("BasketItem component", () => {
  it("renders with correct props", () => {
    const { getByTestId, getByText } = render(
      <BasketItem
        name="Sample Item"
        price={10}
        itemCount={3}
        increase={jest.fn()}
        decrease={jest.fn()}
      />
    );

    const basketItemContainer = getByTestId("basket-item-container");
    expect(basketItemContainer).toMatchSnapshot();
  });

  it("calls increase and decrease functions correctly", () => {
    const name = "Sample Item";
    const price = 10;
    const itemCount = 3;
    const increaseMock = jest.fn();
    const decreaseMock = jest.fn();

    const { getByTestId } = render(
      <BasketItem
        name={name}
        price={price}
        itemCount={itemCount}
        increase={increaseMock}
        decrease={decreaseMock}
      />
    );

    const increaseButton = getByTestId("increase-button");
    const decreaseButton = getByTestId("decrease-button");

    fireEvent.click(increaseButton);
    expect(increaseMock).toHaveBeenCalled();

    fireEvent.click(decreaseButton);
    expect(decreaseMock).toHaveBeenCalled();
  });
});
