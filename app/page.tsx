import { Button } from "@nextui-org/button";
import React from "react";

export default function Home() {
  return (
    <section className=" h-screen flex items-center -mt-20 justify-center ">
      <div className="flex items-center justify-center flex-col gap-4 w-full max-w-2xl">
        <div className="inline-block">
          <h1 className="tracking-tighter inline text-[2.5rem] lg:text-8xl">
            MASQ&nbsp;
          </h1>
          <h1 className="tracking-tighter inline from-[#FF1CF7] to-[#b249f8]  font-semibold text-[2.5rem] lg:text-8xl  bg-clip-text text-transparent bg-gradient-to-b">
            OS
          </h1>
        </div>
        <p className="text-center text-lg">
          A free and open-source operating system for the Linux community. It is
          based on the Linux kernel and is designed to be lightweight, fast, and
          secure.
        </p>
        <Button color="primary" variant="shadow" size="lg" radius="full">
          Download MASQ OS
        </Button>
      </div>
    </section>
  );
}
