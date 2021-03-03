import React from "react";

const Loading = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: "auto",
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        display: "block",
        width: props.width,
        height: props.height,
      }}
      width="213px"
      height="213px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        r="41"
        strokeWidth="7"
        stroke="#ae73e5"
        strokeDasharray="64.40264939859075 64.40264939859075"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.5289308176100629s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        ></animateTransform>
      </circle>
      <circle
        cx="50"
        cy="50"
        r="33"
        strokeWidth="7"
        stroke="#57436d"
        strokeDasharray="51.83627878423159 51.83627878423159"
        strokeDashoffset="51.83627878423159"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.5289308176100629s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;-360 50 50"
        ></animateTransform>
      </circle>
    </svg>
  );
};

export default Loading;
