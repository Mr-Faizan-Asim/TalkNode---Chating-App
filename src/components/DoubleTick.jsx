import React from 'react';

const DoubleTick = ({color,coordinates}) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    height="15px"
    viewBox={coordinates}
    width="24px"
    fill={color}
  >
    <path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z" />
  </svg>
);

export default DoubleTick;
