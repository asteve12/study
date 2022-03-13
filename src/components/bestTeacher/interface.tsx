import React from "react";
import isOnInterface from "../../pages/onbaord/interface"

interface bestTeachertInterface {
  isIndicatorOn: isOnInterface[];
  handleIndicator: (e: React.MouseEvent)=> void;
}

export default bestTeachertInterface;
