// app/page.tsx
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Uploader } from "../components/Uploader";
import { OutputTable } from "../components/OutputTable";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc =
  "https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js";

// Dynamically import Document and Page to avoid SSR bundling of native modules
const Document = dynamic(
  () => import('react-pdf').then((mod) => mod.Document),
  { ssr: false }
);
const Page = dynamic(
  () => import('react-pdf').then((mod) => mod.Page),
  { ssr: false }
);

function Viewer() {
  const [fileUrl, setFileUrl] = useState<string | null>("/sample.pdf");

  return (
    <div className="h-full overflow-auto">
      {fileUrl ? (
        <Document file={fileUrl}>
          <Page pageNumber={1} />
        </Document>
      ) : (
        <p className="text-gray-500 text-center mt-10">No file selected</p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-100">
      {/* Pane 1: Input Controls */}
      <aside className="w-[22%] bg-white border-r border-gray-200 p-4 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Project Settings</h2>
        <Uploader />
      </aside>

      {/* Pane 2: Viewer */}
      <main className="w-[48%] bg-white p-2 border-r border-gray-200 overflow-auto">
        <Viewer />
      </main>

      {/* Pane 3: Output Table */}
      <section className="w-[30%] bg-white p-4 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Bill of Quantities</h2>
        <OutputTable />
      </section>
    </div>
  );
}
