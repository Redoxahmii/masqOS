import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Download MASQ-OS",
    template: "%s - Download",
  },
  description:
    "Download MASQ-OS for your device and start using it today! A linux distribution for privacy and security.",
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

export default function downloadLayout({
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
