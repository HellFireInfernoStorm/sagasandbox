import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryProvider } from "@/components/providers/query-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SagaSandbox",
  description: "Agentic multimodal storytelling canvas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body
        className="min-h-full font-sans antialiased"
        style={{ background: "#0e0e0f", minHeight: "100vh" }}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
