import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ShortingRadio } from "../../ShortingRadio/ShortingRadio";

describe("ShortingRadio component", () => {
  it("renders with correct props", () => {
    const { getByTestId } = render(
      <ShortingRadio selectedOptionId={1} item={{ id: 1, label: "Option 1" }} />
    );
    const radio = getByTestId("radio-1");
    expect(radio).toMatchSnapshot();
  });

  it("calls handleClick when clicked", () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <ShortingRadio
        selectedOptionId={1}
        item={{ id: 1, label: "Option 1" }}
        handleClick={handleClick}
      />
    );

    fireEvent.click(getByTestId("radio-1"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});