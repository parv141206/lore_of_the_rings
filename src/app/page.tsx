"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import PreferenceForm from "@/components/PreferenceForm";

export default function Home() {
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(titleRef.current, { opacity: 0, y: 50, duration: 1 });
    gsap.to(titleRef.current, { opacity: 1, y: 0, duration: 1 });
    gsap.from(descriptionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
    });
    gsap.to(descriptionRef.current, {
      delay: 1.5,
      opacity: 1,
      y: 0,
      duration: 1,
    });
  }, []);

  return (
    <main className="flex flex-col">
      <section
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url('/bg.jpg') center center / cover no-repeat",
        }}
        className="min-h-screen relative  flex items-end justify-start"
      >
        <div className="container flex flex-col gap-3 p-10">
          <div ref={titleRef} className="text-7xl title my-5 opacity-0">
            The Lore of the Rings
          </div>
          <div
            ref={descriptionRef}
            className="text-xl text-amber-100/75 opacity-0"
          >
            A world of magic, myth, and mortal peril awaits. From the dawn of
            time to the darkest hour, witness the rise and fall of empires, the
            forging of destinies, and the eternal struggle between light and
            darkness. Explore the hidden lore of Middle-earth, where the fate of
            all hangs in the balance.
          </div>
        </div>
      </section>
      <section className="container flex py-24 items-center justify-center relative ">
        <video
          src="/sparks.mp4"
          autoPlay
          loop
          muted
          className="w-full h-screen object-cover absolute top-0"
          // style={{ mixBlendMode: "screen" }}
        ></video>
        <div className="w-1/2 relative z-10">
          <PreferenceForm />
        </div>
      </section>
    </main>
  );
}
