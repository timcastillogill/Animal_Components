import React from "react";
import ShoppingListCollection from "./ShoppingListCollection";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given the user has added text to the input", () => {
  test("then the user can clear the list with an onscreen button", () => {
    render(<ShoppingListCollection />);
    userEvent.click(
      screen.getByRole("button", { name: /clear shopping list/i })
    );
    const emptyShoppingListMessage = screen.getByText(/no items in the list/i);
    expect(emptyShoppingListMessage).toBeInTheDocument();
  });
});

describe("Given the user has not added anything to their list", () => {
  test("when there are no items in the shopping list a message will show", () => {
    render(<ShoppingListCollection />);
    userEvent.click(
      screen.getByRole("button", { name: /clear shopping list/i })
    );
    const emptyShoppingListMessage = screen.getByText(/no items in the list/i);
    expect(emptyShoppingListMessage).toBeInTheDocument();
  });
});

describe("Given there are items in the shopping list already", () => {
  test("when the user clicks the plus basket icon the quantity of that item will increase by one", () => {
    render(<ShoppingListCollection />);

    const plusButton = screen.getByRole("button", {
      name: /basketIcon/i,
    });
    const quantityOfItem = screen.getByRole("quantityOfItem");

    expect(plusButton).toBeInTheDocument();
    expect(quantityOfItem).toBeInTheDocument();

    userEvent.click(plusButton);
    expect(quantityOfItem).toBe(2);
  });

  test("when the user clicks the negative basket icon the quantity of that item will decrease by one", () => {
    render(<ShoppingListCollection />);

    const decreaseButton = screen.getByRole("button", {
      name: /basketIcon/i,
    });
    const quantityOfItem = screen.getByRole("quantityOfItem");

    expect(decreaseButton).toBeInTheDocument();
    expect(quantityOfItem).toBeInTheDocument();

    userEvent.click(decreaseButton);
    expect(quantityOfItem).toBe(1);
  });
});
