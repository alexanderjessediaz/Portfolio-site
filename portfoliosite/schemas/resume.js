/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'resume',
    title: 'Resume',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'resumepdf',
            title: 'Resume File',
            type: 'file',
        }
    ]
}
  