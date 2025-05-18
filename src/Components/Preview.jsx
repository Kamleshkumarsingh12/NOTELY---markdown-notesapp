import React from "react";
import ReactMarkdown from "react-markdown";

const Preview = ({markdown}) => {
    return (
        <div className="prose max-w-none p-6 space-y-4">  
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    )
}
export default Preview;
