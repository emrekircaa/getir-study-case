import { render } from "@testing-library/react";
import { Card } from "../../Card/index";

describe("Card component", () => {
  it("should match snapshot with sm card", () => {
    const { getByTestId } = render(<Card size="sm" title="sample" />);
    const CardContainer = getByTestId("card-item-container");
    expect(CardContainer).toMatchSnapshot();
  });
  it("should match snapshot with lg card", () => {
    const { getByTestId } = render(<Card size="lg" title="sample" />);
    const CardContainer = getByTestId("card-item-container");
    expect(CardContainer).toMatchSnapshot();
  });
  it("should match snapshot with large card", () => {
    const { getByText } = render(
      <Card size="sm" title="sample">
        child
      </Card>
    );
    expect(getByText("child")).toMatchSnapshot();
  });
});
