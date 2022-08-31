// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

const singletonTypes = ["siteSettings"];

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.includes(listItem.getId())
      ),
    ]);
