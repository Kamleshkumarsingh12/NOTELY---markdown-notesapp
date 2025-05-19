import { useState } from 'react'
import './App.css'
import Editor from './Components/Editor'
import Preview from './Components/Preview'
import { useEffect } from "react";

function App() {

  const [markdown, setMarkdown] = useState("");
  
  // Whenever the user types, React updates the markdown state →
    // Your useEffect notices the change →
       // It saves the updated note to localStorage ✅
  useEffect(() => {
    //ADDIGN DEBOUNCING FOR OPTIMISATION, SAVED AFTER 500MS OF TYPING
    // This is to prevent too many writes to localStorage AND PEROFROMANCE INCREASE
      const timeout = setTimeout(() => {
      try {
        localStorage.setItem("markdown-note", markdown);
      } catch (error) {
        console.error("Failed to save note:", error);
      }
    }, 500); // wait 500ms after typing stops

      return () => clearTimeout(timeout); // clear previous timer
    }, [markdown]);

  
  // When the component mounts, it checks if there's a saved note in localStorage →
    // If there is, it sets the markdown state to that note ✅
  useEffect(() => {   
      const savedNote = localStorage.getItem("markdown-note");
      if (savedNote) {
          setMarkdown(savedNote);
      }
  }, []);
    

  return (
    
    <div className="flex flex-row h-screen">
      <header className="bg-gray-800 text-white p-2 text-center ">
        <h1 className="text-xl font-bold">Markdown Notes</h1>
      </header>
      <div className="w-1/2 h-full overflow-auto">
        <Editor markdown={markdown} setMarkdown={setMarkdown} />
      </div>
      <div className="w-1/2 h-full overflow-auto border-l">
        <Preview markdown={markdown} />
      </div>
    </div>
  )
}

export default App
