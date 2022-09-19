import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import gallery from "./imageGallery";
import siteSettings from "./siteSettings";
import externalLink from "./contentTypes/externalLink";
import videoLink from "./contentTypes/videoLink";
import grid from "./contentTypes/grid";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    externalLink,
    videoLink,
    grid,
    post,
    siteSettings,
    category,
    blockContent,
    gallery,
  ]),
});
