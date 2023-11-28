import { Button } from "@nextui-org/button";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="w-full h-80 bg-secondary/50 rounded-xl gap-10 flex flex-col items-center justify-center">
      <h1 className="text-6xl leading-tight font-semibold">
        What Are You Waiting For
      </h1>
      <Link href="/download">
        <Button color="primary">Download MASQ OS</Button>
      </Link>
    </div>
  );
}
