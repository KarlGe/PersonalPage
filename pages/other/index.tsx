import React from "react";
import { useLayoutSettings } from "../../src/hooks/useLayoutSettings";

type Props = {};

function OtherPage({}: Props) {
  useLayoutSettings(null, "default");
  return <div>other</div>;
}

export default OtherPage;
