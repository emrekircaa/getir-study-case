import { render, fireEvent } from "@testing-library/react";
import { Button } from "../../Button/index";

describe("Button component", () => {
  it("renders correctly with default props", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <Button onClick={handleClick}>Default Button</Button>
    );

    // Save the rendered output to a snapshot file
    expect(container).toMatchSnapshot();
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();

    const { getByText } = render(
      <Button onClick={handleClick}>Custom Button</Button>
    );

    // Get the button element by its text content
    const button = getByText(/custom button/i);

    // Fire a click event on the button
    fireEvent.click(button);

    // Verify that the onClick handler was called once
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
