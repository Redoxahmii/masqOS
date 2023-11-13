import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "About MASQ-OS",
    template: "%s - About",
  },
  description: "About MASQ-OS",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
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
    <section className=" h-[91vh] w-full flex items-center justify-center">
      <div>{children}</div>
    </section>
  );
}
