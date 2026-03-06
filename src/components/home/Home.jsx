import { CgHello } from "react-icons/cg";
import MainCanvas from "./MainCanvas";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Home() {
  const hello = useRef();
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".hello", {
        rotation: "+=360",
        x: 100,
        duration: 10,
        repeat: -1,
        ease: "back.inOut",
      });
    },
    { dependencies: [], scope: container }
  );

  return (
    <div className="flex items-center justify-center w-screen mt-4 sm:mt-20">
      <div className="items-center sm:basis-1/4 rounded p-3">
        <div ref={container} className="container flex flex-col gap-5 mt-40">
          <h2 className="flex items-center gap-2 text-xl text-slate-500">
            <span>Hi there</span>{" "}
            <span ref={hello} className="hello text-indigo-400">
              <CgHello />
            </span>
          </h2>
          <h1 className="gradient-text text-5xl font-bold leading-tight">
            I'm Shyam Bisht.
          </h1>
          <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
            A DevOps Engineer and Full-Stack Developer with 2+ years of
            experience building scalable SaaS applications and cloud-native
            infrastructure.
          </p>
          <div className="flex gap-4">
            <a href="/ShyamBisht.pdf" target="_blank">
              <button className="px-5 py-2 rounded-xl border border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 transition-colors cursor-pointer text-sm tracking-wide">
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-center">
        <MainCanvas />
      </div>
    </div>
  );
}
