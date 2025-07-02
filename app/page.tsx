// app/page.tsx
"use client";

import { Uploader } from "@/components/Uploader";
import { Viewer } from "@/components/Viewer";
import { OutputTable } from "@/components/OutputTable";

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
