export default {
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
    {
        name: 'name',
        title: 'Name',
        type: 'string',
    },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'startDate',
        title: 'Start Date',
        type: 'datetime',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
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
        title: 'name',
        media: 'image',
      },
    },
  }
  