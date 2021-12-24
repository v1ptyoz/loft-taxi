import React from "react";
import { Header } from "../components/Header/Header";
import { queryByTestId, queryByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
 
describe("Login form tests", () => {
  it("Check active class on navigation", () => {
      render(<Header currentPage={"main"} showPage={jest.fn()} />);
      expect(screen.queryByText("Карта")).toHaveClass("active");
  });

  it("No active class on navigation", () => {
    render(<Header currentPage={"profile"} showPage={jest.fn()} />);
    expect(screen.queryByText("Карта")).not.toHaveClass("active");
  });

  it("Click on nav item running function", () => {
    const func = jest.fn();
    render(<Header currentPage={""} showPage={func}/>);

    userEvent.click(screen.queryByText("Карта"))
    userEvent.click(screen.queryByText("Профиль"))
    userEvent.click(screen.queryByText("Выйти"))
    
    expect(func).toHaveBeenCalledTimes(3);
  });

   
});