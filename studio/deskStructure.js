import S from '@sanity/desk-tool/structure-builder'
// import MdSettings from 'react-icons/lib/md/settings'
import FaFire from 'react-icons/lib/fa/fire'

const hiddenDocTypes = listItem =>
  !['category', 'person', 'sampleProject', 'siteSettings', 'product'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      // S.listItem()
      //   .title('Settings')
      //   .child(
      //     S.editor()
      //       .id('siteSettings')
      //       .schemaType('siteSettings')
      //       .documentId('siteSettings')
      //   )
      //   .icon(MdSettings),
      S.listItem()
        .title('Products')
        .schemaType('product')
        .child(S.documentTypeList('product').title('Products'))
        .icon(FaFire),
      // S.listItem()
      //   .title('Sample projects')
      //   .schemaType('sampleProject')
      //   .child(S.documentTypeList('sampleProject').title('Sample projects')),
      // S.listItem()
      //   .title('People')
      //   .schemaType('person')
      //   .child(S.documentTypeList('person').title('People')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
