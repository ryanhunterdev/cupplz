import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.sass";

const terminal = localFont({
    src: "./fonts/Terminal.woff2",
    variable: "--font-terminal",
    weight: "100 900",
});


const pilowlava = localFont({
    src: "./fonts/Pilowlava-Regular.woff2",
    variable: "--font-pillow-lava",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Cupplz",
    description: "Get the perfect cup eeeeevery time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${terminal.variable} ${pilowlava.variable}`}>
        {children}
      </body>
    </html>
  );
}
