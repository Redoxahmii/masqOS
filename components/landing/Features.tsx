"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import laptop2 from "../../public/laptop2.png";
import secondMock from "../../public/laptop.png";
import thirdMock from "../../public/3rdMockup.png";
const Features = () => {
  return (
    <div className="pt-32">
      <div className="flex items-center justify-center">
        <span className="font-semibold lg:text-5xl text-3xl text-center">
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
      className=" w-[95vw] h-[90vh] rounded-xl lg:gap-20 lg:flex-row flex-col flex items-center justify-center"
    >
      <div className=" max-w-lg flex items-center justify-center flex-col w-full">
        <h1 className=" text-white dark:text-default-foreground lg:text-3xl text-xl font-bold mb-5">
          {card.title}
        </h1>
        <p className="text-white text-center lg:text-left lg:text-medium text-sm dark:text-default-foreground">
          {card.subtitle}
        </p>
      </div>
      {card.id === 1 && (
        <motion.div className="max-w-4xl lg:mb-0 -mb-36 lg:pt-20 lg:-mr-20 scale-80 hover:scale-90 transition-all duration-300">
          <Image
            className="rounded-3xl"
            src={card.url}
            alt="Picture of the author"
            width={800}
            height={800}
          />
        </motion.div>
      )}
      {card.id === 2 && (
        <div className="max-w-2xl scale-90 hover:scale-100 transition-transform">
          <Image
            className="lg:mt-0 mt-14"
            src={card.url}
            alt="Picture of the author"
            width={600}
            height={600}
          />
        </div>
      )}
      {card.id === 3 && (
        <div className="max-w-4xl transition-transform hover:scale-110">
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
    url: secondMock,
    color: "#0465cd",
    title: "Smaller is sometimes better",
    subtitle:
      "MASQ OS is light, fast, efficient, least resource intensive with core packages and complete functionality. It is smaller in size up to 2 GB of setup file and requires just 5-8 GBs hard disk space for installation, 1 GB – 2 GB of RAM, at least 1.0 GHz of x64 and x32 bit architecture of CPU of any generation ranging from 3rd Generation and onwards Intel and various Advanced Micro Devices (AMD) processors.",
    id: 2,
  },
  {
    url: thirdMock,
    color: "#e61635",
    title: "A new way to use your old hardware",
    subtitle:
      "In daily usage we encountered many laptops/desktops that are being discarded due to futility and legacy hardware. Keeping an eye on day-to-day problems that people encounter while using common Operating Systems like Linux distributions (Ubuntu, Zorin and Manjaro) and Windows because the hardware tends to become obsolete after a specific time and becomes useless so why not MASQ OS?",
    id: 3,
  },
];

export default Features;
