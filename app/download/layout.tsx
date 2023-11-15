import { Metadata, Viewport } from "next";
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
export const metadata: Metadata = {
  title: {
    default: "Download",
    template: "%s - Download",
  },
  description:
    "Download MASQ-OS for your device and start using it today! A linux distribution for privacy and security.",

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
    <section className="flex h-[calc(100vh-4rem)] items-center justify-center">
      <div>{children}</div>
    </section>
  );
}
