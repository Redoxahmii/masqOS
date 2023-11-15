import { Metadata, Viewport } from "next";
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
export const metadata: Metadata = {
  title: {
    default: "About",
    template: "%s - About",
  },
  description: "About MASQ-OS",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" h-[calc(100vh-4rem)] w-full flex items-center justify-center">
      <div>{children}</div>
    </section>
  );
}
