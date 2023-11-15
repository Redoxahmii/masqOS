"use client";
import { HomeAnimation } from "@/config/animations";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import laptop from "@/public/mockups/Third.png";
export default function Hero() {
  return (
    <>
      <div className=" flex items-center justify-center mt-20">
        <motion.div
          variants={HomeAnimation}
          initial="initial"
          whileInView="animate"
          className="flex items-center justify-center flex-col gap-4 w-full max-w-2xl"
        >
          <motion.div
            variants={HomeAnimation}
            className="text-center leading-[1] inline-block"
          >
            <motion.div variants={HomeAnimation}>
              <h1 className="tracking-tight inline text-[2.5rem] md:text-[5.5rem]">
                Experience the <br />
              </h1>
            </motion.div>
            <motion.div variants={HomeAnimation}>
              <h1 className="tracking-tight inline text-[2.5rem] md:text-[5.5rem]">
                Future of <br />
              </h1>
            </motion.div>
            <motion.div variants={HomeAnimation}>
              <h1 className="tracking-tight inline from-[#FF1CF7] to-[#b249f8] text-[2.5rem] md:text-[5.5rem] bg-clip-text text-transparent bg-gradient-to-b ">
                Linux
              </h1>
            </motion.div>
          </motion.div>

          <motion.p
            variants={HomeAnimation}
            className="text-center text-sm md:text-base"
          >
            Future of Computing with MASQ-OS, a Free and Open-Source Operating
            System. Built on the Rock-Solid Foundation of{" "}
            <Link
              isExternal
              href="https://archlinux.org/"
              color="secondary"
              showAnchorIcon
              className="text-sm md:text-base"
            >
              Arch
            </Link>{" "}
            and the{" "}
            <Link
              href="https://wiki.gentoo.org/wiki/OpenRC"
              isExternal
              color="secondary"
              showAnchorIcon
              className="text-sm md:text-base"
            >
              OpenRC
            </Link>{" "}
            init system, designed to be <br className="hidden md:block" />{" "}
            Lightweight, Lightning-Fast, and Ultra-Secure.{" "}
          </motion.p>
          <Link href="download">
            <Button
              className="mt-2 hidden md:block"
              color="primary"
              variant="shadow"
              size="lg"
              radius="full"
            >
              Download MASQ OS
            </Button>
            <Button
              className="mt-2 md:hidden"
              color="primary"
              variant="shadow"
              size="md"
              radius="full"
            >
              Download MASQ OS
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.5 }}
            className=" md:w-[80vw] w-[60vw] flex items-center justify-center"
          >
            <Image src={laptop} alt="laptop" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
