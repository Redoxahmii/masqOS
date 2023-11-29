import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import BgSwitch from "@/components/bg-switch";
import { Link } from "@nextui-org/link";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          fontSans.className,
          "min-h-screen bg-background font-sans antialiased scroll-smooth scrollbar-none",
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className=" relative flex flex-col">
            <Navbar />
            <BgSwitch />
            <main className="flex-grow z-10">{children}</main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextjs.org/"
                title="Nextjs homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextJS</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
