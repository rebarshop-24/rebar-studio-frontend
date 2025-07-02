'use client'
import { useState } from 'react'
import { Document, Page } from 'react-pdf'

export function Viewer() {
  const [file, setFile] = useState<string | null>(null);

  return (
    <div className="h-full overflow-auto">
      {file ? (
        <Document file={file}>
          <Page pageNumber={1} />
        </Document>
      ) : (
        <p className="text-gray-500 text-center mt-10">No file selected</p>
      )}
    </div>
  );
}