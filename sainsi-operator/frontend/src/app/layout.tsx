import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAINSI Operator Dashboard",
  description: "Manage your tourism business from a centralized dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen flex`}>
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <header className="h-16 border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
               {/* Search */}
               <div className="bg-gray-900 rounded-md px-3 py-1.5 flex items-center gap-2 border border-gray-800">
                  <span className="text-gray-400 text-sm">Search...</span>
               </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Notifications, Messages, User Menu Placeholder */}
              <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700"></div>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto bg-gradient-to-b from-black to-gray-950">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
