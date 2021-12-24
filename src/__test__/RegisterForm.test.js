import React from "react";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
 
describe("Login form tests", () => {
   it("When all inputs are empty button is disabled", () => {
      render(<RegisterForm formHandler={jest.fn()} linkHandler={jest.fn()}/>);
      expect(screen.getByRole("button")).toBeDisabled();
   });

   it("When at least one or two of inputs is empty button is disabled", async () => {
    render(<RegisterForm formHandler={jest.fn()} linkHandler={jest.fn()}/>);
    
    const emailInput = screen.getByTestId("email");
    userEvent.type(emailInput, "test string");
    expect(await screen.findByRole("button")).toBeDisabled();

    const nameInput = screen.getByTestId("name");
    userEvent.type(nameInput, "test string");
    expect(await screen.findByRole("button")).toBeDisabled();

 });

   it("When all of inputs aren't empty button is enabled", async () => {
    render(<RegisterForm formHandler={jest.fn()} linkHandler={jest.fn()}/>);
    const emailInput = screen.getByTestId("email");
    const nameInput = screen.getByTestId("name");
    const passwordInput = screen.getByTestId("password");

    userEvent.type(emailInput, "test string");
    userEvent.type(passwordInput, "test string");
    userEvent.type(nameInput, "test string");

    expect(await screen.findByRole("button")).toBeEnabled();
 });
});