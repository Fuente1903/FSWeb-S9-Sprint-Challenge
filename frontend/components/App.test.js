import { fireEvent, render } from "@testing-library/react"
import AppFunctional from "./AppFunctional"


test('sanity', () => {
  expect(true).toBe(false)
})


test("Header Test Kontrol", () => {
  render(<AppFunctional />);
  const info = screen.getByText(/0 kere ilerlediniz/i);
  expect(info).toBeInTheDocument();
  const left = screen.getByText("SOL TARAF");
  fireEvent.click(left);
  fireEvent.click(left);
  expect(screen.getByText(/1 kere ilerlediniz/i)).toBeInTheDocument();
});

test("Email Box Test", () => {
  render(<AppFunctional />);
  const emailInput = screen.getByPlaceholderText("email adresinizi giriniz");
  fireEvent.change(emailInput, {
    target: { value: "Doruk" },
  });
  expect(screen.getByDisplayValue("Doruk")).toBeInTheDocument();
});

test("Buton Test ", () => {
  render(<AppFunctional />);
  const button = screen.getAllByRole("button");
  expect(button.length).toBe(6);
});