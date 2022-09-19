import React from "react";
import ImageContent from "../ImageContent";
import { style } from "./grid.linaria";

type Props = {
  content: {
    type: "flex" | "grid";
    columns: number;
    items: any[];
  };
};

function Grid({ content }: Props) {
  const { items, type, columns } = content;
  console.log(content);

  return (
    <div className={style}>
      {items.map((item) => (
        <ImageContent imageSource={item.asset} withOffsetWrapper={false} />
      ))}
    </div>
  );
}

export default Grid;
