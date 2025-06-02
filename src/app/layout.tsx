import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Techspecialist",
  description: "where innovation meets impact",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className="">
        {children}
      </body>
    </html>
  );
}

// font-sans