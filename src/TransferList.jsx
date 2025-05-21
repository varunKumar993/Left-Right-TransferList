import React, { useState } from "react";
import Container from "./Container";
import Controls from "./Controls";

const TransferList = ({ initialItems }) => {
  const [rightItems, setRightItems] = useState(initialItems);
  const [leftItems, setLeftItems] = useState(initialItems);
  const [selectedLeft, setSelectLeftItems] = useState([]);
  const [selectedRight, setSelectRightItems] = useState([]);
  const handleSelectRight = (id) => {
    selectedRight((prev) => {
      prev.includes(id) ? prev.fliter((item) => item !== id) : [...prev.id];
    });
  };
  const handleLeftRight = (id) => {
    selectedLeft((prev) => {
      prev.includes(id) ? prev.fliter((item) => item !== id) : [...prev.id];
    });
  };
  const transferToLeft=()=>{
    
  }
  return (
    <div>
      <Container
        items={rightItems}
        selectedItems={selectedLeft}
        onSelect={handleSelectRight}
      ></Container>
      <Controls
        transferToRight={transferToRight}
        transferToLeft={transferToLeft}
        disabled={!selectedRight.length}
        disabled={!selectedLeft.length}
      ></Controls>
      <Container
        items={leftItems}
        selectedItems={selectedLeft}
        onSelect={handleLeftRight}
      ></Container>
    </div>
  );
};

export default TransferList;
