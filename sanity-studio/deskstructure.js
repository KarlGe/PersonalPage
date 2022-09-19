// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

const excludeTypes = ["siteSettings", "post"];

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      orderableDocumentListDeskItem({ type: "post" }),
      ...S.documentTypeListItems().filter(
        (listItem) => !excludeTypes.includes(listItem.getId())
      ),
    ]);
