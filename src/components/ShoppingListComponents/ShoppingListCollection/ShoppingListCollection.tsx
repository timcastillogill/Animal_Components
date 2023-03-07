import React, { useState } from "react";
import ShoppingListInput from "../ShoppingListInput/ShoppingListInput";
import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";

const ShoppingListCollection = () => {
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([
    { id: 1, quantity: 1, text: "tomatoes", complete: false },
    { id: 2, quantity: 2, text: "onions", complete: true },
  ]);

  const handleDuplicate = (newItemText: string) => {
    for (const shoppingItem of shoppingList) {
      if (newItemText === shoppingItem.text) {
        return true;
      }
    }
    return false;
  };

  const handleNewItem = (newItemText: string) => {
    setShoppingList([
      ...shoppingList,
      {
        id: Math.floor(Math.random() * 1000),
        quantity: 1,
        text: newItemText,
        complete: false,
      },
    ]);
    return false;
  };

  const handleAdditionalItem = (newItemText: string) => {
    const shoppingListObject = Object.values(shoppingList);
    Object.values(shoppingListObject).map((shoppingListItem) => {
      if (newItemText === shoppingListItem.text) {
        return (shoppingListItem.quantity += 1);
      }
      return null;
    });
    setShoppingList([...shoppingList]);
  };

  const toggleShoppingListItem = (
    selectedShoppingListItem: ShoppingListItem
  ) => {
    const newShoppingList = shoppingList.map((item) => {
      if (item === selectedShoppingListItem) {
        return {
          ...item,
          complete: !item.complete,
        };
      }
      return item;
    });
    setShoppingList(newShoppingList);
  };

  const increaseQuantity = (selectedShoppingListItem: ShoppingListItem) => {
    const newShoppingList = shoppingList.map((item) => {
      if (item === selectedShoppingListItem) {
        return {
          ...item,
          quantity: (item.quantity += 1),
        };
      }
      return item;
    });
    setShoppingList(newShoppingList);
  };

  const clearShoppingList = () => {
    setShoppingList([]);
  };

  return (
    <>
      {shoppingList.length < 1 ? (
        <p>No Items in the list</p>
      ) : (
        <div>
          <ul>
            {shoppingList.map((item) => (
              <ShoppingListItem
                key={item.id}
                shoppingListItem={item}
                toggleShoppingListItem={toggleShoppingListItem}
                increaseQuantity={increaseQuantity}
              />
            ))}
          </ul>
        </div>
      )}
      {shoppingList.length > 0 && (
        <button onClick={clearShoppingList}>Clear Shopping List</button>
      )}
      <ShoppingListInput
        addShoppingListItem={handleNewItem}
        duplicateCheck={handleDuplicate}
        additionalItem={handleAdditionalItem}
      />
    </>
  );
};

export default ShoppingListCollection;
