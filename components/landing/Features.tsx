"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import img from "@/public/check.jpg";
import Image from "next/image";
import laptop2 from "../../public/laptop2.png";
const Features = () => {
  return (
    <div className="mt-32">
      <div className="flex items-center justify-center">
        <span className="font-semibold text-5xl uppercase text-center">
          Features
        </span>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <motion.section ref={targetRef} className="relative h-[300vh]">
      <motion.div className="sticky top-0 -ml-2 flex h-[110vh] items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex items-center justify-center gap-20 "
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

type CardProps = {
  card: {
    url: any;
    title: string;
    subtitle?: string;
    id: number;
    color: string;
  };
};
const Card = ({ card }: CardProps) => {
  return (
    <motion.div
      whileInView={{ backgroundColor: `${card.color}` }}
      viewport={{ amount: 0.5 }}
      className=" w-[95vw] h-[90vh] rounded-xl gap-20 flex items-center justify-center"
    >
      <div className=" max-w-lg flex flex-col items-center justify-center w-full">
        <h1 className=" text-white dark:text-default-foreground text-center text-3xl font-bold mb-5">
          {card.title}
        </h1>
        <p className="text-white dark:text-default-foreground text-center">
          {card.subtitle}
        </p>
      </div>
      {card.id === 1 ? (
        <div className="max-w-4xl pt-20 -mr-20">
          <Image
            className="rounded-3xl"
            src={card.url}
            alt="Picture of the author"
            width={800}
            height={800}
          />
        </div>
      ) : (
        <div className="max-w-4xl pt-20">
          <Image
            className="rounded-3xl"
            src={card.url}
            alt="Picture of the author"
            width={800}
            height={800}
          />
        </div>
      )}
    </motion.div>
  );
};

const cards = [
  {
    url: laptop2,
    color: "#8d70ec",
    title: "Systemd is not always the answer",
    subtitle:
      "The goal of the project was to create a Distro which was not only fast in all the process times but also fast in booting so it can be comfortably used on a daily basis and for older generation hardware.",
    id: 1,
  },
  {
    url: img,
    color: "#5E1721",
    title: "Smaller is sometimes better",
    subtitle:
      "MASQ OS is light, fast, efficient, least resource intensive with core packages and complete functionality. It is smaller in size up to 2 GB of setup file and requires just 5-8 GBs hard disk space for installation, 1 GB – 2 GB of RAM, at least 1.0 GHz of x64 and x32 bit architecture of CPU of any generation ranging from 3rd Generation and onwards Intel and various Advanced Micro Devices (AMD) processors.",
    id: 2,
  },
  {
    url: img,
    color: "#5E4721",
    title: "A new way to use your old hardware",
    subtitle:
      "In daily usage we encountered many laptops/desktops that are being discarded due to futility and legacy hardware. Keeping an eye on day-to-day problems that people encounter while using common Operating Systems like Linux distributions (Ubuntu, Zorin and Manjaro) and Windows because the hardware tends to become obsolete after a specific time and becomes useless so why not MASQ OS?",
    id: 3,
  },
];

export default Features;
