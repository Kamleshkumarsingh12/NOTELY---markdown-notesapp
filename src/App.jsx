import { useState } from 'react'
import './App.css'
import Editor from './Components/Editor'
import Preview from './Components/Preview'

function App() {

  const [markdown, setMarkdown] = useState("");
  return (
    
    <div className="flex flex-row h-screen">
      <header className="bg-gray-800 text-white p-4 text-center">
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
