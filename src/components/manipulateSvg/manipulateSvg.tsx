import React from 'react';
//interface 
import svgInterface from "./interface"
const ManipulateSvg: React.FC<svgInterface> = (props) => {
  return (
    <svg
      width='97'
      height='78'
      viewBox='0 0 97 78'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M90.328 -105.947C109.948 -107.414 134.168 -117.147 147.831 -102.99C161.977 -88.3334 148.85 -63.7323 150.653 -43.4422C151.913 -29.2666 158.238 -16.4035 156.784 -2.24651C155.001 15.1207 152.668 33.1317 141.418 46.4818C128.357 61.9803 110.47 74.3681 90.328 76.6153C69.0487 78.9893 45.9785 73.3892 30.2258 58.8869C15.1077 44.9686 14.7404 22.282 9.67742 2.36571C5.00587 -16.011 -3.54257 -34.4107 1.89055 -52.5768C7.38088 -70.9342 22.3441 -84.9367 38.7487 -94.8365C54.1845 -104.152 72.3495 -104.603 90.328 -105.947Z'
        fill={`${props.color}`}
      />
    </svg>
  );
};


export default ManipulateSvg;