export default {
    name: 'recognition',
    title: 'Recognition',
    type: 'document',
    fields: [
      {
        name: 'project',
        title: 'Project',
        type: 'string',
      },
      {
        name: 'award',
        title: 'Award',
        type: 'string',
      },
      {
        name: 'publication',
        title: 'Publication',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'project',
          maxLength: 96,
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  
    preview: {
      select: {
        title: 'project',
        media: 'image',
      },
    },
  }
  