import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import gallery from "./imageGallery";
import siteSettings from "./siteSettings";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([post, siteSettings, category, blockContent, gallery]),
});
