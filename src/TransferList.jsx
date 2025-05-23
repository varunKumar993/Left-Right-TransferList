import React, { useState } from "react";
import Container from "./Container";
import Controls from "./Controls";

const TransferList = ({ initialItems }) => {
  const [rightItems, setRightItems] = useState([]);
  const [leftItems, setLeftItems] = useState(initialItems);
  const [selectedLeft, setSelectLeftItems] = useState([]);
  const [selectedRight, setSelectRightItems] = useState([]);

  const handleSelectRight = (id) => {
    setSelectRightItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectLeft = (id) => {
    setSelectLeftItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const transferToRight = () => {
    const selected = leftItems.filter((item) => selectedLeft.includes(item.id));
    setRightItems((prev) => [...prev, ...selected]);
    setLeftItems((prev) =>
      prev.filter((item) => !selectedLeft.includes(item.id))
    );
    setSelectLeftItems([]);
  };

  const transferToLeft = () => {
    const selected = rightItems.filter((item) =>
      selectedRight.includes(item.id)
    );
    setLeftItems((prev) => [...prev, ...selected]);
    setRightItems((prev) =>
      prev.filter((item) => !selectedRight.includes(item.id))
    );
    setSelectRightItems([]);
  };

  return (
    <div className="flex gap-4">
      <Container
        items={leftItems}
        selectedItems={selectedLeft}
        onSelect={handleSelectLeft}
      />
      <Controls
        transferToRight={transferToRight}
        transferToLeft={transferToLeft}
        disableLeft={selectedLeft.length === 0}
        disableRight={selectedRight.length === 0}
      />
      <Container
        items={rightItems}
        selectedItems={selectedRight}
        onSelect={handleSelectRight}
      />
    </div>
  );
};

export default TransferList;
