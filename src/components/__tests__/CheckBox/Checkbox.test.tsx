import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Checkbox } from "../../Checkbox/index";

describe("Checkbox component", () => {
  it("renders with correct props", () => {
    const { getByTestId } = render(
      <Checkbox onChange={jest.fn()} isChecked={true} label="label" count={3} />
    );
    const checkbox = getByTestId("checkbox-container");
    expect(checkbox).toMatchSnapshot();
  });

  it("calls onChange when clicked", () => {
    const onChange = jest.fn();

    const { getByTestId } = render(
      <Checkbox onChange={onChange} isChecked={true} label="label" count={3} />
    );

    fireEvent.click(getByTestId("checkbox-container"));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
