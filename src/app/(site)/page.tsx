import Hero from "@/components/sections/Hero";
import Product from "@/components/sections/Product";
import Features from "@/components/sections/Features";
import UseCases from "@/components/sections/UseCases";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

export default function Page() {
  return (
    <>
      <Hero />
      <Product />
      <Features />
      <UseCases />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}
