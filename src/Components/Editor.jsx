import React,{useState, useEffect} from "react";

const Editor = ({ markdown, setMarkdown }) => { 
  const [showExportPopup, setShowExportPopup] = useState(false);

 const handleClearNote = () => {
  const confirmClear = window.confirm("Are you sure you want to clear this note?");
  if (confirmClear) {
    setMarkdown("");
    localStorage.removeItem("markdown-note");
    alert("ALL CLEAR!"); // 👈 This shows only if the user confirmed
  }
};


const handleExport = (format) => {
   console.log('Export triggered:', format, 'Content:', markdown);
  try {
    // 1. Determine file type
    const mimeType = format === 'txt' ? 'text/plain' : 'text/markdown';
    const extension = format === 'txt' ? 'txt' : 'md';

    // 2. Create filename with date
    const dateStr = new Date().toISOString().slice(0, 10);
    const filename = `notesapp-${dateStr}.${extension}`;

    // 3. Create and trigger download
    const blob = new Blob([markdown], { type: mimeType });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link); // Required for Firefox
    link.click();
    document.body.removeChild(link);

    // 4. Clean up
    setTimeout(() => URL.revokeObjectURL(url), 100);
    
    setShowExportPopup(false);
  } catch (error) {
    console.error('Export failed:', error);
    alert('Export failed. Please try again.');
  }
};


 return (
    <div className="relative h-full">
      {/* Button Group - Now at TOP RIGHT */}
      <div className="aflex justify-end gap-2 p-4 flex-wrap md:absolute md:top-4 md:right-4">
        {/* Export Button */}
        <button onClick={() => setShowExportPopup(true)}className="hover:bg-blue-600 bg-blue-500 text-white px-3 py-1.5 rounded shadow">Export</button>
        
        {/* Clear Button */}
        <button onClick={handleClearNote}className="hover:bg-red-600 bg-red-500 text-white px-3 py-1.5 rounded shadow">Clear </button>
      </div>

      {/* Textarea - Adjusted for button space */}
      <textarea 
        className="font-mono p-4 pt-16 w-full h-full"  // pt-16 adds top padding
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="On your mark, get set, go!"
      />

     {showExportPopup && (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl w-64">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Export Format</h3>
      <div className="space-y-3">
        <button
          onClick={() => handleExport('txt')}
          className="w-full hover:bg-indigo-50 dark:hover:bg-gray-700 p-2.5 rounded-lg border border-gray-100 dark:border-gray-600 text-indigo-600 dark:text-indigo-400 font-medium transition-colors"
        >
          Text File (.txt)
        </button>
        <button
          onClick={() => handleExport('md')}
          className="w-full hover:bg-indigo-50 dark:hover:bg-gray-700 p-2.5 rounded-lg border border-gray-100 dark:border-gray-600 text-indigo-600 dark:text-indigo-400 font-medium transition-colors"
        >
          Markdown File (.md)
        </button>
      </div>
      <button 
        onClick={() => setShowExportPopup(false)}
        className="mt-4 w-full py-1.5 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        Cancel
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default Editor;