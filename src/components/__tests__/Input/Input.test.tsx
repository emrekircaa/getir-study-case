import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "../../Input/index";

describe("Input", () => {
  it("renders with correct props", () => {
    const { getByTestId } = render(
      <Input onChange={jest.fn()} placeHolder="placeholder" value="" />
    );
    const comp = getByTestId("input");
    expect(comp).toMatchSnapshot();
  });
  it("should match snapshot with value", () => {
    const { getByTestId } = render(
      <Input onChange={jest.fn()} placeHolder="placeholder" value="" />
    );
    const comp = getByTestId("input");
    expect(comp).toMatchSnapshot();
  });
  it("should trigger given onChange function on change", () => {
    const onChange = jest.fn();

    const { getByTestId } = render(
      <Input onChange={onChange} placeHolder="placeholder" value="" />
    );
    fireEvent.change(getByTestId("input"), { target: { value: "changed" } });
    expect(onChange).toBeCalledTimes(1);
  });
});
