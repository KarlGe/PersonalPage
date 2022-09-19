/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: "Video Link",
  name: "videoLink",
  type: "object",
  initialValue: {
    type: "youtube",
  },
  fields: [
    {
      title: "Title",
      name: "description",
      type: "string",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
    },
    {
      title: "Type",
      name: "type",
      type: "string",
      options: {
        list: [{ title: "Youtube", value: "youtube" }],
      },
    },
  ],
};
