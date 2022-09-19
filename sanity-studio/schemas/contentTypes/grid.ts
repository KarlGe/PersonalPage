const gridTypes = {
  flex: { title: "Flex", value: "flex" },
  grid: { title: "Grid", value: "grid" },
};
export default {
  title: "Grid",
  name: "grid",
  type: "object",
  fields: [
    {
      title: "Type",
      name: "type",
      type: "string",
      options: {
        list: Object.values(gridTypes),
      },
    },
    {
      title: "Columns",
      name: "columns",
      type: "number",
      hidden: ({ parent, value }) => {
        return parent.type !== gridTypes.grid.value
      },
    },
    {
      title: "Items",
      name: "items",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
  ],
};
