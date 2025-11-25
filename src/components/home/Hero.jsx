import { Zap } from "lucide-react";
import Container from "../shared/Container";
import vector1 from "../../../public/images/icons/vector1.webp";
import vector2 from "../../../public/images/icons/vector2.webp";
import Image from "next/image";
import heroFeatures from "@/data/heroFeatures";

export default function Hero() {
  return (
    <div className="flex min-h-screen items-center px-4 py-20 text-white">
      <Container>
        <div className="text-center">
          <div className="border-text-secondary/30 relative inline-flex items-center gap-2 rounded-full border bg-[#1A1A2E]/50 px-4 py-2 text-sm font-medium">
            <Zap className="size-4 text-[#F59E0B]" />
            <span className="text-charcoal">Zero Language Barriers</span>
            <div className="absolute -bottom-0.5 left-1/2 h-0.5 w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent"></div>
          </div>
        </div>

        <h1 className="mt-8 text-center text-5xl leading-tight font-bold tracking-tight md:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-r from-neutral-400 via-white to-neutral-400 bg-clip-text text-transparent">
            Connect & Learn
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-neutral-100 to-white bg-clip-text text-transparent">
            Together
          </span>
        </h1>

        <p className="text-charcoal mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed md:text-xl">
          Create groups, practice with native speakers through audio/video calls
          and master languages naturally.
        </p>

        {/* buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="inline-flex cursor-pointer items-center gap-1.5 overflow-hidden rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition-colors duration-300 ease-linear hover:bg-indigo-700">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></div>{" "}
            Create New Group
          </button>
          <button className="text-charcoal cursor-pointer rounded-xl border border-[#A1A1AA]/30 bg-[#1A1A2E]/50 px-8 py-3 font-semibold backdrop-blur-sm transition-all duration-300 ease-linear hover:bg-[#16213E]/50 hover:text-[#FFFFFF]">
            Join Random Group
          </button>
        </div>

        {/* features container */}
        <div className="relative mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Free forever badge */}
            <div className="hidden items-center gap-4 2xl:flex">
              <Image src={vector1} alt="vector shape" className="h-auto w-96" />
              <p className="text-charcoal mb-4 text-sm font-medium whitespace-nowrap">
                Free Forever with unlimited time
              </p>
              <Image src={vector2} alt="vector shape" className="h-auto w-96" />
            </div>

            {/* Feature cards */}
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {heroFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="group w-full rounded-xl border border-[#A1A1AA]/15 bg-[#1A1A2E]/50 p-6 text-[#A1A1AA] backdrop-blur-sm transition-all duration-300"
                >
                  {feat.icon}
                  <h2 className="mt-2 text-lg font-semibold text-[#DDE0E3]">
                    {feat.title}
                  </h2>
                  <p className="text-charcoal mt-2 text-sm">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
