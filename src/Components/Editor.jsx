import React,{useState, useEffect} from "react";

const Editor = ({ markdown, setMarkdown }) => { 
  return (
    <div>
      <textarea 
        className="font-mono p-4 h-screen w-full"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="On your mark, get set, go!"
      />
    </div>
  );
};

export default Editor;