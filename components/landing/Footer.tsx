import { Button } from "@nextui-org/button";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="w-full h-[25vh] gap-10 flex flex-col items-center justify-center">
        <h2 className="lg:text-6xl text-3xl tracking-tighter font-semibold">
          What are you waiting for?
        </h2>
        <Link href="/download">
          <Button color="primary" size="lg" radius="full">
            Download MASQ OS
          </Button>
        </Link>
      </div>
    </>
  );
}
