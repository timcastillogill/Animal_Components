interface ShoppingListItem {
  id: number;
  quantity: number;
  text: string;
  complete: boolean;
}

type ToggleShoppingListItem = (
  selectedShoppingListItem: ShoppingListItem
) => void;

type ChangeQuantityOfItem = (
  selectedShoppingListItem: ShoppingListItem
) => void;

type AddShoppingListItem = (text: string) => void;
type InputDuplicateCheck = ReactNode;
type AdditionalItem = ReactNode;
