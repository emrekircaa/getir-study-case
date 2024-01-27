import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Pagination } from "../../Pagination/index"; // Update the import path based on your actual structure

describe("Pagination component", () => {
  it("should match snapshot", () => {
    const { getByTestId } = render(
      <Pagination
        pageCount={10}
        selectedPageIndex={0}
        onSelectedPageIndexChange={jest.fn()}
      />
    );
    const comp = getByTestId("pagination");
    expect(comp).toMatchSnapshot();
  });
});
