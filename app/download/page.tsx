"use client";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import laptop from "@/public/FirstMock.png";
import DownloadModal from "@/components/DownloadModal";

export default function DownloadPage() {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-up">
      <Card
        shadow="lg"
        isFooterBlurred
        isPressable
        className="w-full lg:h-[500px] text-left col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Download</p>
          <h4 className="font-medium lg:text-xl">MASQ OS</h4>
        </CardHeader>
        <Image
          alt="Laptop"
          width={500}
          height={500}
          quality={100}
          className="z-0 w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          src={laptop}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow  gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-white/80 lg:text-medium text-tiny">
                We currently only have a single version as this is an ongoing
                project and system requirements are subject to change.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <DownloadModal />
            <Button radius="full" color="primary">
              Download
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
