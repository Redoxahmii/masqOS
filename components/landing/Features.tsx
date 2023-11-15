"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import laptop2 from "@/public/mockups/Second.png";
import secondMock from "../../public/mockups/First.png";
import thirdMock from "../../public/mockups/Fourth.png";
const Features = () => {
  return (
    <div className="pt-32">
      <div className="flex items-center justify-center">
        <span className="font-semibold md:text-5xl text-3xl text-center">
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
    <motion.section ref={targetRef} className="relative h-[280vh]">
      <motion.div className="sticky top-0 flex h-[110vh] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex items-center justify-center">
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
      className="w-[97vw] h-[90vh] rounded-xl md:gap-20 md:flex-row flex-col flex items-center justify-around"
    >
      <div className="max-w-xl flex flex-col gap-4 md:text-left text-center mx-10">
        <h1 className="text-white dark:text-default-foreground md:text-3xl text-xl font-bold">
          {card.title}
        </h1>
        <p className="text-white md:text-medium text-sm dark:text-default-foreground">
          {card.subtitle}
        </p>
      </div>
      {card.id === 1 && (
        <motion.div className="max-w-4xl md:pt-20  scale-80 hover:scale-90 transition-all duration-300">
          <Image
            className="rounded-3xl"
            src={card.url}
            placeholder="blur"
            alt="Laptop"
            width={800}
            height={800}
          />
        </motion.div>
      )}
      {card.id === 2 && (
        <div className="max-w-2xl scale-90 hover:scale-100 transition-transform">
          <Image
            className="md:mt-0 mt-14"
            src={card.url}
            placeholder="blur"
            alt="laptop"
            width={600}
            height={600}
          />
        </div>
      )}
      {card.id === 3 && (
        <div className="transition-transform hover:scale-110 max-w-2xl">
          <Image
            className="rounded-3xl"
            src={card.url}
            placeholder="blur"
            alt="Laptop"
            width={1000}
            height={1000}
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
    title: "Systemd is Not Always the Answer",
    subtitle:
      "The goal of the project was to create a Distro which was not only fast in all the process times but also fast in booting so it can be comfortably used on a daily basis and for older generation hardware.",
    id: 1,
  },
  {
    url: secondMock,
    color: "#0465cd",
    title: "Smaller is Sometimes Better",
    subtitle:
      "MASQ OS is light, fast, efficient, least resource intensive with core packages and complete functionality. It is smaller in size up to 2 GB of setup file and requires just 5-8 GBs hard disk space for installation, 1 GB – 2 GB of RAM, at least 1.0 GHz of x64 and x32 bit architecture of CPU of any generation ranging from 3rd Generation and onwards Intel and various Advanced Micro Devices (AMD) processors.",
    id: 2,
  },
  {
    url: thirdMock,
    color: "#e61635",
    title: "An Alternative for Older Hardware",
    subtitle:
      "In daily usage we encountered many laptops/desktops that are being discarded due to futility and legacy hardware. Keeping an eye on day-to-day problems that people encounter while using common Operating Systems like Linux distributions (Ubuntu, Zorin and Manjaro) and Windows because the hardware tends to become obsolete after a specific time and becomes useless so why not MASQ OS?",
    id: 3,
  },
];

export default Features;
