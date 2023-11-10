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
