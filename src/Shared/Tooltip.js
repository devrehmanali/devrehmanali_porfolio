import React from "react";
import { Tooltip } from "react-bootstrap";

export default function CustomTooltip(props) {
  return (
    <>
      <Tooltip>{props.text}</Tooltip>
    </>
  );
}
