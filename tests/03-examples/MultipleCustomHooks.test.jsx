import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";
useCounter;

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("prueba en <MultipleCustomHooks/>", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  test("Debe mostrar el componente por  defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading..."));
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeTruthy();
    screen.debug();
  });

  test("Debe mostrar un quote", () => {
    useFetch.mockReturnValue({
      data: [{ character: "Santiago", quote: "Hola mundo" }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Hola mundo")).toBeTruthy();
    expect(screen.getByText("Santiago")).toBeTruthy();
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeFalsy();
    screen.debug();
  });

  test("Debe llamar a la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ character: "Santiago", quote: "Hola mundo" }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
