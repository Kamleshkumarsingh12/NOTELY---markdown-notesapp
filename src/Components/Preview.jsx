import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

const Preview = ({markdown}) => {
    return (
        <div className="prose max-w-none p-6 space-y-4">  
            <ReactMarkdown
  components={{
    code({node, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '');
      const language = match?.[1];
      
      return (
        <div className="code-block">
          {language && (
            <div className="language-tab">
              {language}
            </div>
          )}
          <pre className={className}>
            <code>{children}</code>
          </pre>
        </div>
      );
    }
  }}
>
  {markdown}
</ReactMarkdown>
        </div>
    )
}
export default Preview;
