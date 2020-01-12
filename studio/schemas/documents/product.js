// import {format} from 'date-fns'

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'price',
      title: 'Price (RON)',
      type: 'number'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Frontend will require a slug to be set to be able to show the product page',
      validation: Rule => Rule.error('You have to fill out the slug of this product\'s page.').required(),
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'excerpt',
      title: 'Short Description',
      type: 'simplePortableText'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'body',
      title: 'Full Description',
      type: 'projectPortableText'
    }
    // {
    //   name: 'relatedProjects',
    //   title: 'Related projects',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'sampleProject'}}]
    // }
  ],
  preview: {
    select: {
      title: 'name',
      // publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedAt, slug = {}, media}) {
      // const dateSegment = format(publishedAt, 'YYYY/MM')
      // const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: slug.current
      }
    }
  }
}
