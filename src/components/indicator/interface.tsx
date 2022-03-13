import React from "react"

interface indicator {
  status: boolean;
  handleIndicator: (e:React.MouseEvent) => void;
  indexed: number;
}

export default indicator;