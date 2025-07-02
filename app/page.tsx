// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
  diff --git a//dev/null b/next.config.js
index 0000000000000000000000000000000000000000..39c7b277b693c27a131cea2fd0ced03f9b4b90d5 100644
--- a//dev/null
+++ b/next.config.js
@@ -0,0 +1,15 @@
+/** @type {import('next').NextConfig} */
+const nextConfig = {
+  webpack: (config) => {
+    config.resolve.fallback = {
+      ...config.resolve.fallback,
+      canvas: false,
+      fs: false,
+      path: false,
+      os: false,
+    };
+    return config;
+  },
+};
+
+module.exports = nextConfig;
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

// Dynamically import to bypass SSR bundling of native modules
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
      <aside className="w-[22%] bg-white border-r border-gray-200 p-4 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Project Settings</h2>
        <Uploader />
      </aside>

      <main className="w-[48%] bg-white p-2 border-r border-gray-200 overflow-auto">
        <Viewer />
      </main>

      <section className="w-[30%] bg-white p-4 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Bill of Quantities</h2>
        <OutputTable />
      </section>
    </div>
  );
}
