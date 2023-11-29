import { Button } from "@nextui-org/button";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="w-full h-[30vh] rounded-xl gap-10 flex flex-col items-center justify-center">
        <h2 className="text-6xl tracking-tighter font-semibold">
          What are you waiting for?
        </h2>
        <Link href="/download">
          <Button color="primary" className="text-primary-foreground" size="lg">
            Download MASQ OS
          </Button>
        </Link>
      </div>
    </>
  );
}
