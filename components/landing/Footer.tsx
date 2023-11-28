import { Button } from "@nextui-org/button";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="w-full h-[40vh] rounded-xl gap-10 flex flex-col items-center justify-center">
      <h1 className="text-6xl leading-tight font-semibold">
        What are you waiting for?
      </h1>
      <Link href="/download">
        <Button color="primary" className="text-primary-foreground" size="lg">
          Download MASQ OS
        </Button>
      </Link>
    </div>
  );
}
