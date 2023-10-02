import "@/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
