"use client";
import React from "react";
import DualBoot from "@/config/DualBoot.mdx";
import SingleBoot from "@/config/SingleBoot.mdx";
import { Tab, Tabs } from "@nextui-org/tabs";
export default function DocsPage() {
  return (
    <div className="mx-5 animate-fade animate-delay-100">
      <Tabs size="lg" variant="underlined" color="primary">
        <Tab
          title="Simple Install"
          key="simple"
          className="prose dark:prose-invert prose-sm sm:prose lg:prose-lg mt-5"
        >
          <SingleBoot />
        </Tab>
        <Tab
          title="Dual Boot"
          key="dual boot"
          className="prose dark:prose-invert prose-sm sm:prose lg:prose-lg mt-5"
        >
          <DualBoot />
        </Tab>
      </Tabs>
    </div>
  );
}
