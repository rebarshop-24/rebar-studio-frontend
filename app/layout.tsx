export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}