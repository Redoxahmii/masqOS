import Performance from "@/components/landing/Performance";
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import React from "react";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Features />
      </section>
      {/* <section> */}
      {/*   <Performance /> */}
      {/* </section> */}
      <section>
        <Footer />
      </section>
    </>
  );
}
