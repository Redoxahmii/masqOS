"use client";
import React from "react";
import DualBoot from "@/config/DualBoot.mdx";
import SingleBoot from "@/config/SingleBoot.mdx";
import { Tab, Tabs } from "@nextui-org/tabs";
export default function DocsPage() {
  return (
    <div>
      <Tabs size="lg" variant="underlined" color="primary" className=" mt-4">
        <Tab
          title="Simple Install"
          key="simple"
          className="prose dark:prose-invert prose-sm sm:prose lg:prose-lg"
        >
          <SingleBoot />
        </Tab>
        <Tab
          title="Dual Boot"
          key="dual boot"
          className="prose dark:prose-invert prose-sm sm:prose lg:prose-lg"
        >
          <DualBoot />
        </Tab>
      </Tabs>
    </div>
  );
}
