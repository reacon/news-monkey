import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nigga",
  description: "realniggaday",
};
const queryClient= new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:Infinity,
      cacheTime: Infinity
    }
  }
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </QueryClientProvider>
  );
}
