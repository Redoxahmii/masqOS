"use client";
import React from "react";
import DualBoot from "@/config/DualBoot.mdx";
import SingleBoot from "@/config/SingleBoot.mdx";
import { Tab, Tabs } from "@nextui-org/tabs";
export default function DocsPage() {
  return (
    <div>
      <Tabs size="lg" variant="underlined" color="primary">
        <Tab
          title="Simple Install"
          key="simple"
          className="prose dark:prose-invert"
        >
          <SingleBoot />
        </Tab>
        <Tab
          title="Dual Boot"
          key="dual boot"
          className="prose dark:prose-invert"
        >
          <DualBoot />
        </Tab>
      </Tabs>
    </div>
  );
}
