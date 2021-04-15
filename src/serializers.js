import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';

const serializers = {
    types: {
        code: ({node = {}}) => {
            const { code, language } = node
            if (!code){
                return null
            }
             return <SyntaxHighlighter language={language ||'text'} >
            {code}
          </SyntaxHighlighter>
        }
    }
}

export default serializers