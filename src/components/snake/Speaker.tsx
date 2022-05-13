import React, { useState } from "react";
import { ISpeaker } from "../../interface/snake/ISpeaker";
import { StyledSpeaker } from "./StyledSpeaker";

const Speaker = (props: ISpeaker) => {
  const [mute, setMute] = useState(props.mute);

  return (
    <StyledSpeaker
      $mute={mute}
      onClick={() => {
        const m = !mute;
        props.onClick(m);
        setMute(m);
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <g fill="#000">
          <polygon points="14.025,38.004 14.025,61.993 31.548,61.993 55.537,85.982 55.537,14.018 31.552,38.004"></polygon>
          <path d="M67.41,34.095l-4.243,4.239c6.43,6.432,6.43,16.896,0,23.324L67.41,65.9C76.179,57.129,76.179,42.864,67.41,34.095z"></path>
          <path d="M75.89,25.616l-4.241,4.239c11.105,11.105,11.105,29.176,0,40.284l4.241,4.241C89.337,60.934,89.337,39.06,75.89,25.616z"></path>
        </g>
      </svg>
    </StyledSpeaker>
  );
};

Speaker.defaultProps = {
  width: 38,
  height: 38,
  mute: false,
  onClick: () => {},
} as ISpeaker;

export default Speaker;
