import React from "react";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
 
describe("Login form tests", () => {
   it("When all inputs are empty button is disabled", () => {
      render(<LoginForm formHandler={jest.fn()} linkHandler={jest.fn()}/>);
      expect(screen.getByRole("button")).toBeDisabled();
   });

   it("When at least one of inputs is empty button is disabled", async () => {
    render(<LoginForm formHandler={jest.fn()} linkHandler={jest.fn()}/>);
    const emailInput = screen.getByTestId("email");

    userEvent.type(emailInput, "test string");
    expect(await screen.findByRole("button")).toBeDisabled();

 });

   it("When all of inputs aren't empty button is enabled", async () => {
    render(<LoginForm formHandler={jest.fn()} linkHandler={jest.fn()}/>);
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");

    userEvent.type(emailInput, "test string");
    userEvent.type(passwordInput, "test string");

    expect(await screen.findByRole("button")).toBeEnabled();
 });
});