import React from "react";
import ImageContent from "../ImageContent";
import { GridItem, GridWrapper } from "./grid.linaria";

type Props = {
  content: {
    type: "flex" | "grid";
    columns: number;
    items: any[];
  };
};

function Grid({ content }: Props) {
  const { items, type, columns } = content;

  return (
    <GridWrapper columns={columns}>
      {items.map((item) => (
        <GridItem
          className="image-wrapper"
          key={item._id}
          columns={item.columns}
          rows={item.rows}
        >
          <ImageContent
            imageSource={item.image.asset}
            withOffsetWrapper={false}
          />
        </GridItem>
      ))}
    </GridWrapper>
  );
}

export default Grid;
