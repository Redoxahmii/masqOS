import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import React from "react";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Features />
      </section>
    </>
  );
}
