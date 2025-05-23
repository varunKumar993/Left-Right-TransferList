import React from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

const Controls = ({
  transferToRight,
  transferToLeft,
  disableLeft,
  disableRight,
}) => {
  return (
    <div className="flex gap-2">
      <button onClick={transferToRight} disabled={disableLeft}>
        <ArrowLongLeftIcon className="h-6 w-6 text-white-500" />
        Left----
      </button>
      <button onClick={transferToLeft} disabled={disableRight}>
        <ArrowLongRightIcon className="h-6 w-6 text-white-500" />
        Right--
      </button>
    </div>
  );
};

export default Controls;
