import "./globals.css";
import Nav from "./components/Nav";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>
        {children}
      </body>
    </html>
  );
}
