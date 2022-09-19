const previewSizes = {
  default: { title: "Default", value: "default" },
  doubleHeight: { title: "Double Height", value: "doubleHeight" },
};

export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Preview Size",
      name: "previewSize",
      type: "string",
      options: {
        list: Object.values(previewSizes),
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "externalLinks",
      title: "External links",
      type: "array",
      of: [{ type: "externalLink" }],
    },
    {
      name: "orderRank",
      title: "Order",
      type: "string",
    },
  ],
  initialValue: {
    previewSize: previewSizes.default.value,
  },
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
};
