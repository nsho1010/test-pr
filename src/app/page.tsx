import Hero from "@/components/Hero";
import News from "@/components/News";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import Product from "@/components/Product";
import Profile from "@/components/Profile";
import Member from "@/components/Member";
import CompanyInfo from "@/components/CompanyInfo";
import Contact from "@/components/Contact";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 lg:gap-24">
      <Hero />
      <Problem />
      <Benefits />
      <Product />
      <Profile />
      <Member />
      <Suspense fallback={<div>Loading...</div>}>
        <News />
      </Suspense>
      <CompanyInfo />
      <Contact />
    </main>
  );
}
