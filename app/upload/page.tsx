"use client";
import { useRef } from "react";

export default function UploadPage() {
  const fileInput = useRef(null);

  return (
    <main className="p-6">
      <h2 className="text-xl font-semibold mb-4">Upload Blueprint</h2>
      <input ref={fileInput} type="file" accept=".pdf,.png,.jpg" className="mb-4" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Analyze
      </button>
    </main>
  );
}