/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'resume',
    title: 'Resume',
    type: 'document',
    fields: [
        {
            name: 'resume_name',
            title: 'Resume Name',
            type: 'string',
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {hotspot: true}
        }
    ]
}
  