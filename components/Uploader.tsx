'use client'
import { useState } from 'react'

export function Uploader() {
  const [projectName, setProjectName] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Project Name"
        className="border p-2 w-full"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-dashed border-2 border-gray-300 p-4 text-center"
      >
        {file ? file.name : 'Drag & Drop File Here'}
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 w-full">
        Run Estimation
      </button>
    </div>
  );
}