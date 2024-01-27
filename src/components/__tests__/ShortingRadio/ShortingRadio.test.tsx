import { render, fireEvent } from "@testing-library/react";
import { ShortingRadio } from "../../ShortingRadio/ShortingRadio";

describe("ShortingRadio component", () => {
  const testData = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
  ];

  it("renders with correct props", () => {
    const onSelectedRadioChange = jest.fn();
    const selectedOptionId = true;

    const { getByTestId } = render(
      <ShortingRadio
        data={testData}
        onSelectedRadioChange={onSelectedRadioChange}
        selectedOptionId={selectedOptionId}
      />
    );

    testData.forEach((item) => {
      const radioElement = getByTestId(`radio-${item.id}`);
      expect(radioElement).toMatchSnapshot();
    });
  });

  it("calls onSelectedRadioChange when a radio is clicked", () => {
    const onSelectedRadioChange = jest.fn();

    const { getByTestId } = render(
      <ShortingRadio
        data={testData}
        onSelectedRadioChange={onSelectedRadioChange}
      />
    );

    const radioToClick = testData[1];
    fireEvent.click(getByTestId(`radio-${radioToClick.id}`));

    expect(onSelectedRadioChange).toHaveBeenCalledTimes(1);
  });
});
