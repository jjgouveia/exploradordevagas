import type { NextPage } from "next";
import HeaderExperimental from "../components/HeaderExperimental";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Values from "../components/Values";

const Index: NextPage = () => {
  return (
    <main className="glow-container bg-[#141417] flex flex-col min-h-full w-full justify-center text-gray-900">
      <div className="ball"></div>
      <div
        className="ball"
        style={{
          "--delay": "-12s",
          "--size": "0.35",
          "--speed": "25s",
        }}
      ></div>
      <div
        className="ball"
        style={{ "--delay": "-10s", "--size": "0.3", "--speed": "15s" }}
      ></div>
      <HeaderExperimental />
      <Hero />
      <Values />
      <HowItWorks />
      <div className="custom-cursor"></div>
    </main>
  );
};

export default Index;
