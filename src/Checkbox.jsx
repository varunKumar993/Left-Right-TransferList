import React from "react";

function Checkbox({item,isChecked,onChange}) {
  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
    </div>
  );
}

export default Checkbox;
