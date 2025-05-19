import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

const Preview = ({markdown}) => {
    return (
        <div className="prose max-w-none p-6 space-y-4">  
            <ReactMarkdown remarkPlugins={[remarkGfm]}  >{markdown}</ReactMarkdown>
        </div>
    )
}
export default Preview;
