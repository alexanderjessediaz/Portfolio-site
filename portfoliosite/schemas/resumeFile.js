/* eslint-disable import/no-anonymous-default-export */
export default {
    title: 'Resume File',
    name: 'resume_file',
    type: 'file',
    fields: [
        {
            name: 'description',
            type: 'string',
            title: 'Description',
        },
        {
            name: 'resume',
            title: 'Resume',
            type: 'reference',
            to: {type: 'file'}
        }
    ]
}