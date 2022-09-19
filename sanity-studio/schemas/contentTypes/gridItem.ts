const gridItemTypes = {
  image: { title: "Image", value: "image" },
  post: { title: "Post", value: "post" },
};

export default {
  title: "Grid Item",
  name: "gridItem",
  type: "object",
  fields: [
    {
      title: "Rows",
      name: "rows",
      type: "number",
    },
    {
      title: "Columns",
      name: "columns",
      type: "number",
    },
    {
      title: "Type",
      name: "type",
      type: "string",
      options: {
        list: Object.values(gridItemTypes),
      },
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: { hotspot: true },
      hidden: ({ parent, value }) => {
        return parent.type !== gridItemTypes.image.value;
      },
    },
    {
      title: "Post",
      name: "post",
      type: "reference",
      to: [{ type: "post" }],
      hidden: ({ parent, value }) => {
        return parent.type !== gridItemTypes.post.value;
      },
    },
  ],
  initialValue: {
    rows: 1,
    columns: 1,
    type: gridItemTypes.image.value,
  },
  preview: {
    select: {
      type: "type",
      postImage: "post.mainImage",
      postTitle: "post.title",
      image: "image",
    },
    prepare(selection) {
      const { type, postTitle, postImage, image } = selection;
      if (type === "post") {
        return {
          title: type,
          subtitle: postTitle,
          media: postImage,
        };
      } else {
        return {
          title: type,
          media: image,
        };
      }
    },
  },
};
