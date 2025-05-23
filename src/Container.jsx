import React from "react";
import Checkbox from "./Checkbox";

const Container = ({ items, selectedItems, onSelect }) => {
  return (
    <div>
      {items.map((item) => (
        <Checkbox
          key={item.id}
          item={item}
          isChecked={selectedItems.includes(item.id)}
          onChange={() => onSelect(item.id)}
        />
      ))}
    </div>
  );
};

export default Container;
