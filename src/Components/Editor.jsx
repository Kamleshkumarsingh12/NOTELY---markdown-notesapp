import React,{useState, useEffect} from "react";

const Editor = ({ markdown, setMarkdown }) => { 

 const handleClearNote = () => {
  const confirmClear = window.confirm("Are you sure you want to clear this note?");
  if (confirmClear) {
    setMarkdown("");
    localStorage.removeItem("markdown-note");
    alert("Note cleared!"); // 👈 This shows only if the user confirmed
  }
};


  return (
    <div className="relative">
      <textarea 
        className="font-mono p-4 h-screen w-full"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="On your mark, get set, go!"
      />

      <button onClick={handleClearNote} className="absolute hover:bg-red-600 bottom-4 right-4 bg-red-500 text-white p-2 rounded-full">Clear-Note</button>
    </div>
  );
};

export default Editor;